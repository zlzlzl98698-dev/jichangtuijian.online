const fs = require('fs');

const raw = fs.readFileSync('c:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt', 'utf8');

// List of brands that have measured speedtest screenshots in public/images/speedtest/
const verifiedImageMap = {
  '光速云': { file: '光速云-节点测速实测.png', testedAt: '2026-08-11T14:32:56+08:00', protocol: 'Shadowsocks / VLESS' },
  '飞猫云': { file: '飞猫云-节点测速实测.png', testedAt: '2026-08-11T08:52:30+08:00', protocol: 'Shadowsocks' },
  '微风网络': { file: '微风-节点测速实测.png', testedAt: '2026-07-20T21:41:00+08:00', protocol: 'Shadowsocks' },
  '星岛梦': { file: '星岛梦-节点测速实测.png', testedAt: '2026-08-11T01:48:13+08:00', protocol: 'Shadowsocks' },
  '二猫云': { file: '二猫云-节点测速实测.png', testedAt: '2026-08-11T10:45:27+08:00', protocol: 'Shadowsocks' },
  '无忧链接': { file: '无忧链接.jpg', testedAt: '2026-09-07T12:52:00+08:00', protocol: 'Shadowsocks / VLESS' },
  '唯兔云': { file: '唯兔云-节点测速实测.png', testedAt: '2026-08-11T13:55:08+08:00', protocol: 'Shadowsocks' },
  '宇宙云': { file: '宇宙云-节点测速实测.png', testedAt: '2026-08-11T21:04:24+08:00', protocol: 'VLESS' },
  'U1S1': { file: 'U1S1-节点测速实测.png', testedAt: '2026-08-11T22:33:29+08:00', protocol: 'Shadowsocks' },
  '灵猫网络': { file: '灵猫网络-节点测速实测.png', testedAt: '2026-08-11T18:45:40+08:00', protocol: 'Shadowsocks' },
  '极连云': { file: '极连云-节点测速实测.png', testedAt: '2026-08-11T22:46:50+08:00', protocol: 'Shadowsocks' },
  '光年梯': { file: '光年梯-节点测速实测.png', testedAt: '2026-08-11T14:38:04+08:00', protocol: 'Shadowsocks' },
  '一翻云': { file: '一翻云-节点测速实测.png', testedAt: '2026-08-11T00:21:30+08:00', protocol: 'Shadowsocks' },
  'SOGO 云': { file: 'SOGO云-节点测速实测.png', testedAt: '2026-08-11T18:57:59+08:00', protocol: 'Shadowsocks' },
  'SOGO云': { file: 'SOGO云-节点测速实测.png', testedAt: '2026-08-11T18:57:59+08:00', protocol: 'Shadowsocks' },
  '可信云': { file: '可信云-节点测速实测.png', testedAt: '2026-08-11T15:32:35+08:00', protocol: 'Shadowsocks' },
  '速界': { file: '速界-节点测速实测.png', testedAt: '2026-08-11T15:39:36+08:00', protocol: 'Shadowsocks' },
  '全球云': { file: '全球云-节点测速实测.png', testedAt: '2026-08-11T15:50:43+08:00', protocol: 'Shadowsocks' },
  '快狸': { file: '快狸-节点测速实测.png', testedAt: '2026-08-11T19:52:22+08:00', protocol: 'VLESS' }
};

// Check Guangsu test photos
const guangsuExtraPhotos = [
  '/images/guangsu/photo_2026-08-19_12-13-01.jpg',
  '/images/guangsu/photo_2026-08-19_12-13-50.jpg',
  '/images/guangsu/photo_2026-08-19_12-13-58.jpg',
  '/images/guangsu/photo_2026-08-19_12-18-40.jpg',
  '/images/guangsu/photo_2026-08-19_12-20-10.jpg'
];

console.log('Verified image brands:', Object.keys(verifiedImageMap).length);
