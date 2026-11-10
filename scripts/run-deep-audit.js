import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

// 结果收集器
const auditResults = {
  robots: { exists: false, content: '' },
  sitemap: { exists: false, count: 0, sampleUrls: [] },
  totalPages: 0,
  canonicalIssues: [],
  nofollowMissing: [],
  internalDeadLinks: [],
  thinContentPages: [],
  schemaIssues: [],
  leakedPaths: [],
  titleDuplicates: new Map(),
  descDuplicates: new Map(),
};

// 1. Robots.txt 检查
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  auditResults.robots.exists = true;
  auditResults.robots.content = fs.readFileSync(robotsPath, 'utf-8');
} else {
  auditResults.robots.exists = false;
}

// 2. Sitemap 检查
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
if (fs.existsSync(sitemapIndexPath)) {
  auditResults.sitemap.exists = true;
  if (fs.existsSync(sitemap0Path)) {
    const sm = fs.readFileSync(sitemap0Path, 'utf-8');
    const urls = sm.match(/<loc>(.*?)<\/loc>/g) || [];
    auditResults.sitemap.count = urls.length;
    auditResults.sitemap.sampleUrls = urls.slice(0, 5).map(u => u.replace(/<\/?loc>/g, ''));
  }
}

// 3. 遍历 dist 目录下所有 HTML
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'pagefind') {
        getAllHtmlFiles(fullPath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(distDir);
auditResults.totalPages = htmlFiles.length;

// 预先建立全站有效内部路由集合
const validRoutes = new Set();
for (const f of htmlFiles) {
  let rel = path.relative(distDir, f).replace(/\\/g, '/');
  if (rel === 'index.html') {
    validRoutes.add('/');
  } else if (rel.endsWith('/index.html')) {
    validRoutes.add('/' + rel.replace(/\/index\.html$/, ''));
    validRoutes.add('/' + rel.replace(/\/index\.html$/, '/'));
  } else {
    validRoutes.add('/' + rel);
  }
}

// 逐个分析 HTML 文件
for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf-8');

  // A. Canonical 检查
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    auditResults.canonicalIssues.push({ file: relPath, issue: '缺少 Canonical 标签' });
  } else {
    const cUrl = canonicalMatch[1];
    if (cUrl.includes('localhost') || cUrl.includes('127.0.0.1')) {
      auditResults.canonicalIssues.push({ file: relPath, issue: `Canonical 指向本地测试地址: ${cUrl}` });
    } else if (!cUrl.startsWith('https://')) {
      auditResults.canonicalIssues.push({ file: relPath, issue: `Canonical 非 HTTPS: ${cUrl}` });
    }
  }

  // B. 外链 nofollow 检查
  // 查找所有以 http:// 或 https:// 开头的 a 标签，如果不是本站域名 jichangtuijian.online
  const linkMatches = html.matchAll(/<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/gi);
  for (const match of linkMatches) {
    const tag = match[0];
    const url = match[1];
    if (!url.includes('jichangtuijian.online') && !url.includes('schema.org') && !url.includes('w3.org')) {
      // 检查 rel 属性
      const relAttrMatch = tag.match(/rel=["']([^"']+)["']/i);
      if (!relAttrMatch) {
        auditResults.nofollowMissing.push({ file: relPath, url, issue: '无 rel 属性' });
      } else {
        const relVal = relAttrMatch[1].toLowerCase();
        if (!relVal.includes('nofollow')) {
          auditResults.nofollowMissing.push({ file: relPath, url, issue: `rel 未包含 nofollow (${relVal})` });
        }
      }
    }
  }

  // C. 内链死链检查
  const internalLinkMatches = html.matchAll(/<a\s+[^>]*href=["'](\/[^"']*)["'][^>]*>/gi);
  for (const match of internalLinkMatches) {
    let target = match[1].split('#')[0].split('?')[0];
    if (target === '' || target === '/') continue;
    if (target.endsWith('/') && target.length > 1) {
      target = target.slice(0, -1);
    }
    // 检查是否存在
    const targetWithSlash = target + '/';
    if (!validRoutes.has(target) && !validRoutes.has(targetWithSlash) && !fs.existsSync(path.join(distDir, target))) {
      // 排除 static assets
      if (!target.startsWith('/images') && !target.startsWith('/pagefind') && !target.startsWith('/favicon') && !target.startsWith('/avatar')) {
        auditResults.internalDeadLinks.push({ source: relPath, target });
      }
    }
  }

  // D. 物理路径泄漏
  if (html.includes('C:\\Users') || html.includes('c:/Users') || html.includes('c:\\users')) {
    auditResults.leakedPaths.push({ file: relPath, leak: '包含本地物理路径 C:\\Users' });
  }

  // E. 字数统计 (粗略去除 HTML 标签)
  const textContent = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                          .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                          .replace(/<[^>]+>/g, ' ')
                          .replace(/\s+/g, ' ')
                          .trim();
  const chineseCharCount = (textContent.match(/[\u4e00-\u9fa5]/g) || []).length;
  if (chineseCharCount < 800) {
    auditResults.thinContentPages.push({ file: relPath, chars: chineseCharCount });
  }

  // F. JSON-LD 语法检查
  const jsonLdMatches = html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
  for (const match of jsonLdMatches) {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      auditResults.schemaIssues.push({ file: relPath, error: e.message });
    }
  }

  // G. Title & Description 重复度分析
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch) {
    const t = titleMatch[1].trim();
    const count = auditResults.titleDuplicates.get(t) || 0;
    auditResults.titleDuplicates.set(t, count + 1);
  }

  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (descMatch) {
    const d = descMatch[1].trim();
    const count = auditResults.descDuplicates.get(d) || 0;
    auditResults.descDuplicates.set(d, count + 1);
  }
}

// 汇总输出
console.log('--- 深度审计运行结果 ---');
console.log(`总扫描 HTML 页面: ${auditResults.totalPages}`);
console.log(`Robots.txt 存在: ${auditResults.robots.exists}`);
console.log(`Sitemap-index.xml 存在: ${auditResults.sitemap.exists}, 包含 URL 数量: ${auditResults.sitemap.count}`);
console.log(`Canonical 异常数量: ${auditResults.canonicalIssues.length}`);
if (auditResults.canonicalIssues.length > 0) {
  console.log('Canonical 示例:', auditResults.canonicalIssues.slice(0, 3));
}
console.log(`外链漏加 nofollow 数量: ${auditResults.nofollowMissing.length}`);
if (auditResults.nofollowMissing.length > 0) {
  console.log('漏加 nofollow 示例:', auditResults.nofollowMissing.slice(0, 3));
}
console.log(`内部死链数量: ${auditResults.internalDeadLinks.length}`);
if (auditResults.internalDeadLinks.length > 0) {
  console.log('内部死链示例:', auditResults.internalDeadLinks.slice(0, 5));
}
console.log(`本地绝对物理路径泄露数量: ${auditResults.leakedPaths.length}`);
if (auditResults.leakedPaths.length > 0) {
  console.log('物理路径泄露示例:', auditResults.leakedPaths.slice(0, 3));
}
console.log(`薄内容页面 (正文汉字 < 800) 数量: ${auditResults.thinContentPages.length}`);
if (auditResults.thinContentPages.length > 0) {
  console.log('薄内容页面示例:', auditResults.thinContentPages.slice(0, 5));
}
console.log(`JSON-LD 语法报错数量: ${auditResults.schemaIssues.length}`);

// 统计 Title 重复
let dupTitleCount = 0;
for (const [t, c] of auditResults.titleDuplicates) {
  if (c > 1) dupTitleCount += c;
}
console.log(`存在重复 Title 的页面总数: ${dupTitleCount}`);

let dupDescCount = 0;
for (const [d, c] of auditResults.descDuplicates) {
  if (c > 1) dupDescCount += c;
}
console.log(`存在重复 Description 的页面总数: ${dupDescCount}`);
