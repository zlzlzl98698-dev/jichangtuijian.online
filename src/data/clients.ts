export const clientPlatforms = [
  {
    "os": "Windows 电脑客户端",
    "slug": "windows",
    "apps": [
      {
        "name": "Clash Verge Rev",
        "desc": "Mihomo 内核、订阅管理、规则分流、TUN 模式，2026年主流推荐",
        "link": "https://github.com/clash-verge-rev/clash-verge-rev",
        "kernel": "Mihomo"
      },
      {
        "name": "v2rayN",
        "desc": "Xray、sing-box 等核心，支持多协议深度配置和节点批量管理",
        "link": "https://github.com/2dust/v2rayN",
        "kernel": "Xray / sing-box"
      },
      {
        "name": "FlClash",
        "desc": "基于 Flutter 的 Mihomo 规则分流客户端，界面简洁现代化",
        "link": "https://github.com/chen08209/FlClash",
        "kernel": "Mihomo"
      },
      {
        "name": "Hiddify",
        "desc": "多协议全能支持、自动节点选择、新手零门槛一键连接",
        "link": "https://github.com/hiddify/hiddify-next",
        "kernel": "sing-box"
      },
      {
        "name": "Karing",
        "desc": "多协议兼容客户端，支持自适应订阅导入与极简路由规则",
        "link": "https://github.com/KaringX/karing",
        "kernel": "sing-box"
      },
      {
        "name": "Clash Nyanpasu",
        "desc": "基于 Tauri 的精致 Clash 图形界面，兼顾多内核与高级扩展配置",
        "link": "https://github.com/libnyanpasu/clash-nyanpasu",
        "kernel": "Mihomo"
      }
    ]
  },
  {
    "os": "macOS 苹果电脑客户端",
    "slug": "macos",
    "apps": [
      {
        "name": "Clash Verge Rev",
        "desc": "原生支持 Apple Silicon M系列与 Intel 芯片，TUN 模式接管全系统流量",
        "link": "https://github.com/clash-verge-rev/clash-verge-rev",
        "kernel": "Mihomo"
      },
      {
        "name": "Surge Mac",
        "desc": "macOS 顶级网络调试与分流利器，企业级抓包与精细化链路追踪",
        "link": "https://nssurge.com",
        "kernel": "Surge Core"
      },
      {
        "name": "sing-box for macOS (SFM)",
        "desc": "官方原汁原味 sing-box 客户端，极致轻量资源消耗与规则路由",
        "link": "https://sing-box.sagernet.org",
        "kernel": "sing-box"
      },
      {
        "name": "FlClash",
        "desc": "跨平台美观图形界面，与移动端无缝协同",
        "link": "https://github.com/chen08209/FlClash",
        "kernel": "Mihomo"
      },
      {
        "name": "Hiddify",
        "desc": "多协议多格式智能导入，适合多系统混合办公用户",
        "link": "https://github.com/hiddify/hiddify-next",
        "kernel": "sing-box"
      }
    ]
  },
  {
    "os": "iPhone / iPad (iOS) 客户端",
    "slug": "ios",
    "apps": [
      {
        "name": "Shadowrocket (小火箭)",
        "desc": "App Store 常青树，极速扫码导入、规则自定义、节点测速与场景切换",
        "link": "https://apps.apple.com/us/app/shadowrocket/id932747118",
        "kernel": "Shadowrocket"
      },
      {
        "name": "Stash",
        "desc": "iOS 上的 Clash 风格规则神器，完美支持 Clash 策略组与覆写",
        "link": "https://apps.apple.com/us/app/stash/id1596063349",
        "kernel": "Stash Core"
      },
      {
        "name": "Quantumult X (圈 X)",
        "desc": "重写脚本、MitM 深度定制、分流性能强悍的资深玩家首选",
        "link": "https://apps.apple.com/us/app/quantumult-x/id1453926390",
        "kernel": "Quantumult X"
      },
      {
        "name": "sing-box (SFI)",
        "desc": "官方免费应用，支持最新 Reality 与 Hysteria 2 协议",
        "link": "https://apps.apple.com/us/app/sing-box/id6451272673",
        "kernel": "sing-box"
      },
      {
        "name": "Karing",
        "desc": "国内外多区 App Store 可下，新手友好的免费跨平台代理工具",
        "link": "https://apps.apple.com/us/app/karing/id6472431552",
        "kernel": "sing-box"
      }
    ]
  },
  {
    "os": "Android 安卓客户端",
    "slug": "android",
    "apps": [
      {
        "name": "v2rayNG",
        "desc": "经典成熟且稳定的 Xray 客户端，生态兼容性极强",
        "link": "https://github.com/2dust/v2rayNG",
        "kernel": "Xray"
      },
      {
        "name": "FlClash",
        "desc": "现代化 UI 设计，支持 Clash 配置，自适应手机与折叠屏",
        "link": "https://github.com/chen08209/FlClash",
        "kernel": "Mihomo"
      },
      {
        "name": "Clash Meta for Android",
        "desc": "支持 Mihomo 高级特性的安卓客户端，分流规则精细",
        "link": "https://github.com/MetaCubeX/ClashMetaForAndroid",
        "kernel": "Mihomo"
      },
      {
        "name": "Hiddify",
        "desc": "多协议全聚合，界面优雅一键连接，支持各类订阅链接",
        "link": "https://github.com/hiddify/hiddify-next",
        "kernel": "sing-box"
      },
      {
        "name": "sing-box for Android (SFA)",
        "desc": "官方原版 sing-box 客户端，支持最新抗封锁黑科技协议",
        "link": "https://github.com/SagerNet/sing-box",
        "kernel": "sing-box"
      }
    ]
  },
  {
    "os": "Linux 客户端",
    "slug": "linux",
    "apps": [
      {
        "name": "Clash Verge Rev (AppImage/Deb/RPM)",
        "desc": "带 GUI 的完整桌面客户端，全面接管 Ubuntu/Debian/Arch 桌面流量",
        "link": "https://github.com/clash-verge-rev/clash-verge-rev",
        "kernel": "Mihomo"
      },
      {
        "name": "v2rayA",
        "desc": "Web 控制台透明代理神器，适合无头服务器、NAS 与 Linux 工作站",
        "link": "https://github.com/v2rayA/v2rayA",
        "kernel": "Xray / sing-box"
      },
      {
        "name": "FlClash for Linux",
        "desc": "轻量优雅的桌面客户端，支持快捷规则切换",
        "link": "https://github.com/chen08209/FlClash",
        "kernel": "Mihomo"
      },
      {
        "name": "sing-box for Desktop",
        "desc": "极简系统级守护进程运行，资源占用极低",
        "link": "https://sing-box.sagernet.org",
        "kernel": "sing-box"
      }
    ]
  },
  {
    "os": "OpenWrt / 软路由客户端",
    "slug": "router",
    "apps": [
      {
        "name": "OpenClash",
        "desc": "软路由最流行透明代理插件，支持规则分流与 DNS 智能防污染",
        "link": "https://github.com/vernesong/OpenClash",
        "kernel": "Mihomo"
      },
      {
        "name": "PassWall 2",
        "desc": "多协议智能分流负载均衡，支持故障无感自动切换",
        "link": "https://github.com/xiaorouji/openwrt-passwall",
        "kernel": "Xray / sing-box"
      },
      {
        "name": "Nikki",
        "desc": "轻量高效的新一代 OpenWrt 插件，要求 OpenWrt 24.10+，配置极简",
        "link": "https://github.com/nikkinikkinikki/nikki",
        "kernel": "Mihomo"
      },
      {
        "name": "HomeProxy",
        "desc": "基于原生 sing-box 打造的高性能路由网关透明代理",
        "link": "https://github.com/immortalwrt/homeproxy",
        "kernel": "sing-box"
      }
    ]
  }
];
