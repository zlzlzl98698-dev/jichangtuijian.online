<div align="center">

<img src="./public/avatar.webp" alt="机场online Logo" width="100" style="border-radius: 20px; box-shadow: 0 8px 24px rgba(6, 182, 212, 0.25);" />

# 机场online (jichangtuijian.online)

**2026 跨境网络可观测性实验室 · 42 家主流机场全景实测与 GEO/SEO 流量转化矩阵**

[![Astro](https://img.shields.io/badge/Astro-5.18.2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Pagefind](https://img.shields.io/badge/Pagefind-1.6.0-4F46E5?style=for-the-badge&logo=search&logoColor=white)](https://pagefind.app)
[![SEO & GEO](https://img.shields.io/badge/SEO%20%26%20GEO-100%25%20Optimized-059669?style=for-the-badge&logo=google&logoColor=white)](#-seo--geo-优化架构)
[![Pages](https://img.shields.io/badge/Static%20Pages-324%20Pages-0ea5e9?style=for-the-badge)](#-全站页面规模)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

[🌐 访问线上官网](https://jichangtuijian.online) • [📊 查看实测数据库](https://jichangtuijian.online/brands) • [🧭 选型决策雷达](https://jichangtuijian.online/best-airports) • [🛠️ 客户端下载大全](https://jichangtuijian.online/clients)

</div>

---

## 📖 项目简介 (Overview)

**机场online** 是一个专为全球华人、跨境出海团队、AI 大模型开发者及科研学术人群打造的**下一代跨境网络基础设施评测与可观测性平台**。

项目摒弃了传统采集站和低质内容农场的做法，基于 **“真实物理链路、真机晚高峰压测存证、端到端协议拆解、资金月付避险”** 四大基石，采用现代化极速静态站点生成器（Astro SSG）与 Pagefind 全文检索技术，全量生成了 **324 个极高信息密度的静态 HTML 页面**。

---

## ✨ 核心特性 (Key Features)

- 🚀 **超高性能静态编译 (SSG)**：全站 324 个页面在 3.5 秒内极速生成，毫秒级 TTFB，天然抵抗高并发与网络阻断。
- 🔍 **零服务端依赖的全文搜索**：集成 Pagefind 1.6.0 引擎，纯客户端离线 WebAssembly 分词索引，支持 `Ctrl + K` 快捷键极速检索 42 家机场、协议与教程。
- 📊 **42 家主流机场全景数据库**：
  - 严谨的四级数据透明度标注：`[measured 实测]`、`[vendor 官方]`、`[commercial 商业]`、`[editorial 编辑评估]`；
  - 17 家具备原始晚高峰未裁剪实测测速截图与流媒体解锁存证；
  - 年度旗舰基准主推：**光速云（双 IEPL 物理专线 / Snooker 147 永久套餐 / 专属优惠码 AMM）**。
- 🛡️ **五大万字级选型避坑专栏**：
  - 🏆 **42家全景推荐** (`/best-airports`)：42 家参数大总表与三维选型决策树；
  - 🎁 **免费试用大全** (`/trial`)：0 元白嫖与 1 元防刷体验清单，10 分钟压测 SOP；
  - 🚨 **跑路预警雷达** (`/scam-radar`)：复盘 30+ 历史案例，7 大跑路红色预警信号；
  - ⚠️ **免费节点真相** (`/free-nodes`)：网络安全抓包，解密中间人攻击（MITM）窃密风险；
  - 📚 **机场百科 FAQ** (`/faq`)：100 个核心疑难全解，标准 `FAQPage` Schema。
- 📱 **全平台客户端教程大全**：涵盖 Windows、macOS、iOS、Android、Linux 与 OpenWrt 软路由平台的 Clash Verge Rev、v2rayN、Shadowrocket 小火箭、sing-box 配置。
- 🤖 **顶尖 SEO & GEO/AEO 架构**：
  - 页面 Title / Meta Description 100% 独立不重复；
  - 绝对地址 Self-Referencing Canonical；
  - 标准 JSON-LD 结构化数据 (`WebSite`, `Organization`, `TechArticle`, `FAQPage`, `BreadcrumbList`)；
  - 内部死链 0、外链 nofollow 遗漏 0、Thin Content 0。

---

## 🏗️ 网站拓扑与内容矩阵 (Site Architecture)

```
jichangtuijian.online (首页)
├── 机场推荐榜单 (/rankings)
│   ├── 平价高性价比专题 (/rankings/budget)
│   └── 顶级 IPLC/IEPL 专线专题 (/rankings/dedicated)
├── 42强品牌评测 (/brands)
│   ├── /brands/guangsu (年度主推标杆 · 8章节万字白皮书)
│   └── /brands/[slug] (全部 42 家机场独立评测档案)
├── 专用场景加速 (/scenarios)
│   ├── AI 大模型深度访问专题 (/scenarios/ai)
│   └── 跨境出海与 4K 流媒体专题 (/scenarios/streaming)
├── 客户端与教程 (/clients)
│   ├── 桌面端应用专题 (Windows / Mac / Linux) (/clients/desktop)
│   └── 移动端与软路由专题 (iOS / Android / OpenWrt) (/clients/mobile)
├── 协议与网络实验室 (/tech)
│   ├── 传输协议与抗封锁技术专题 (/tech/protocols)
│   └── 晚高峰测速实验室与证据库 (/tech/lab)
├── 选型雷达特色专栏 (Pillars)
│   ├── 42家全景选型白皮书 (/best-airports)
│   ├── 免费与 1 元试用大全 (/trial)
│   ├── 跑路预警避险雷达 (/scam-radar)
│   ├── 免费节点安全警示 (/free-nodes)
│   └── 机场百科 FAQ 辞典 (/faq)
├── 信任与方法论
│   ├── 关于实验室 (/about)
│   └── 评测与测速方法论 (/methodology)
└── 深度长尾技术文章库 (/articles/[slug])
    └── 240 篇围绕协议、避坑、测速、排障的独立 SEO/GEO 文章
```

---

## 🛠️ 技术栈 (Tech Stack)

| 领域 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **Core Framework** | [Astro v5.18.2](https://astro.build/) | Islands 架构，零运行时 JS 默认输出 |
| **Styling** | [Tailwind CSS v3.4](https://tailwindcss.com/) | 极致轻量暗黑 Cyber 风格 |
| **Fulltext Search**| [Pagefind v1.6](https://pagefind.app/) | 纯静态 WebAssembly 客户端全文检索 |
| **SEO & Sitemap** | [@astrojs/sitemap](https://github.com/withastro/astro/tree/main/packages/integrations/sitemap) | 自动化多通道 XML 站点地图 |
| **Structured Data**| Schema.org (JSON-LD) | 支持 Google Rich Snippets 与 AI 引擎检索 |
| **Web Server** | Apache 2.4+ (`.htaccess`) | 原生 Clean URLs、Gzip 压缩与强制 HTTPS/Non-WWW |

---

## 🚀 本地开发与构建 (Getting Started)

### 1. 克隆项目
```bash
git clone https://github.com/zlzlzl98698-dev/jichangtuijian.online.git
cd jichangtuijian.online
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动本地开发服务
```bash
npm run dev
# 服务将运行在 http://localhost:4321
```

### 4. 生产环境全量编译与生成索引
```bash
npm run build
# 执行 astro build 并自动调用 pagefind 生成全站搜索索引至 dist/
```

### 5. 预览生产环境静态文件
```bash
npm run preview
# 本地启动预览：http://127.0.0.1:4321
```

---

## 📦 生产部署说明 (Deployment)

项目采用纯静态（SSG）架构，构建输出位于 `dist/` 目录：

1. **Apache 服务器**：
   - 将 `dist/` 内所有内容直接上传至 Web 根目录（如 `/var/www/html`）；
   - 依赖自带的 `dist/.htaccess` 文件自动实现：
     - HTTP 强制 301 重定向至 HTTPS；
     - `www` 强制 301 重定向至规范裸域名；
     - 捕获优雅的 `/404.html` 错误页；
     - 启用 Gzip / Deflate 压缩与静态资源 1 年浏览器缓存。
2. **Nginx 服务器**：
   - 若使用 Nginx，配置 `try_files $uri $uri/ $uri.html =404;` 即可。

---

## ⚖️ 免责声明与合规说明 (Affiliate Disclosure)

本站部分链接为包含推广代码的商业返利链接（Affiliate Links）。当用户通过本站链接前往相关服务商注册或付费时，本站可能会获得一定比例佣金，该机制用于维持 7×24 小时全球测速探针及服务器开销，**绝不增加用户任何额外的购买成本**。

所有测速与安全评估均遵循客观中立原则，任何违规商家或跑路高危平台一律如实披露。

---

## 📄 开源许可证 (License)

本项目遵循 [MIT License](./LICENSE) 开源协议。
