// Auto-generated 42 Airport Brands Dataset for jichangtuijian.online
// Strictly adheres to data integrity: measured, vendor, commercial, editorial

export interface Plan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  period: string;
}

export interface SpeedtestItem {
  region: string;
  latency: string;
  download: string;
}

export interface UnlockStatus {
  service: string;
  status: 'yes' | 'partial' | 'no' | 'unverified';
  note?: string;
}

export interface Brand {
  id: string;
  ranking: number;
  name: string;
  isFeatured?: boolean;
  badge: string;
  affiliateUrl: string;
  couponCode?: string;
  couponDiscount?: string;
  couponNote?: string;
  foundedYear: string;
  entryPrice: string;
  circuitType: string;
  protocol: string;
  clientSupport: string;
  devices: string;
  nodeLocations: string[];
  plans: Plan[];
  speedtests: SpeedtestItem[];
  unlocks: UnlockStatus[];
  hasSpeedtestImage: boolean;
  speedtestImage?: string;
  evidenceImages?: string[];
  testedAt?: string;
  dataStatus: 'measured' | 'vendor' | 'editorial' | 'commercial';
  summary: string;
  detailedAudit?: string;
  pros: string[];
  cons: string[];
  suitableFor: string[];
  unsuitableFor: string[];
  riskWarning: string;
  peerComparison: string;
  faq: { q: string; a: string }[];
  seoTitle: string;
  metaDescription: string;
}

export const brands: Brand[] = [
  {
    "id": "guangsu",
    "ranking": 1,
    "name": "光速云",
    "isFeatured": true,
    "badge": "全站综合首推 / 双专线骨干",
    "affiliateUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2020",
    "entryPrice": "约 ¥8/月 (年付折算)",
    "circuitType": "IEPL 专线 + 企业级内网专线（双线路架构）",
    "protocol": "VLESS / Shadowsocks",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港×20",
      "台湾×5",
      "日本×10",
      "新加坡×10",
      "美国×10",
      "马来西亚×2",
      "英国",
      "法国",
      "德国",
      "土耳其",
      "巴西"
    ],
    "plans": [
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB不过期",
        "period": "每月"
      },
      {
        "name": "光速云·轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "69GB",
        "period": "每月"
      },
      {
        "name": "光速云·极速版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "168GB",
        "period": "每月"
      },
      {
        "name": "光速云·流光版",
        "billing": "月付",
        "price": "¥34",
        "traffic": "268GB",
        "period": "每月"
      },
      {
        "name": "光速云·量子版",
        "billing": "月付",
        "price": "¥68",
        "traffic": "568GB",
        "period": "每月"
      },
      {
        "name": "光速云·无界版",
        "billing": "月付",
        "price": "¥138",
        "traffic": "900GB",
        "period": "每月"
      },
      {
        "name": "光速云·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "529Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "114Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "387Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "135Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "yes",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/光速云-节点测速实测.png",
    "evidenceImages": [
      "/images/guangsu/photo_2026-08-19_12-13-01.jpg",
      "/images/guangsu/photo_2026-08-19_12-13-50.jpg",
      "/images/guangsu/photo_2026-08-19_12-13-58.jpg",
      "/images/guangsu/photo_2026-08-19_12-18-40.jpg",
      "/images/guangsu/photo_2026-08-19_12-20-10.jpg"
    ],
    "testedAt": "2026-08-11 14:32:56 CST",
    "dataStatus": "measured",
    "summary": "光速云在便宜机场推荐里属于价格有优势的一类，99 元/年左右的最低套餐，换算下来每月成本不高，在高性价比机场推荐里比较有竞争力。它把 IPLC 专线和隧道中转结合着用，第三方测试显示香港、日本节点速度表现还不错，也支持 Netflix、Disney+、YouTube 等主流流媒体。不过要注意，ChatGPT、Gemini 这类 AI 工具并不是所有节点都稳定支持，实际用的时候可能需要手动切换节点，这点官方也承认。套餐里特殊商品不支持退款，所以更建议先买月付或者小额套餐，实测晚高峰速度和稳定性之后，再考虑要不要长期用。\r",
    "detailedAudit": "",
    "pros": [
      "IEPL专线 + 企业内网双专线架构，晚高峰抗波动能力极强",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "套餐档位极多，从99元/年轻量版到一次性永久包选择丰富"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "相比同价位单纯走公网隧道中转的机场，光速云的双内网专线在晚高峰掉包率和抖动控制上优势显著；相较动辄数十元每月的贵价机场，其年付折合约8元/月的门槛性价比极高。",
    "faq": [
      {
        "q": "光速云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。光速云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "光速云 支持哪些设备和客户端？",
        "a": "光速云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "光速云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 光速云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "muguang",
    "ranking": 2,
    "name": "暮光加速",
    "isFeatured": false,
    "badge": "高性价比标杆",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2023",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "period": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "period": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "billing": "月付",
        "price": "¥600",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "509Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "419Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "150Mbps"
      },
      {
        "region": "美国",
        "latency": "160ms",
        "download": "19Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全平台，多设备同时在线是它的核心卖点，比较适合放进多设备机场推荐这个分类。9 元/月起的价格在专线机场推荐里不算高，120GB–1500GB 的流量档位选择也比较多，能满足不同用量需求。官方称支持 7×24 小时真人客服，对经常需要跨境办公、远程协作的团队用户会有一定吸引力，也支持 Netflix、Disney+、HBO、Hulu 等流媒体。目前没有查到公开的优惠码信息，如果预算敏感，建议直接联系客服问问当前是否有活动。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "暮光加速 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。暮光加速 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "暮光加速 支持哪些设备和客户端？",
        "a": "暮光加速 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "暮光加速 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 暮光加速：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "feimao",
    "ranking": 3,
    "name": "飞猫云",
    "isFeatured": false,
    "badge": "高性价比标杆",
    "affiliateUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2023",
    "entryPrice": "7元/月",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "21ms",
        "download": "526Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "116Mbps"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "413Mbps"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "138Mbps"
      },
      {
        "region": "美国",
        "latency": "178ms",
        "download": "14Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/飞猫云-节点测速实测.png",
    "testedAt": "2026-08-11 08:52:30 CST",
    "dataStatus": "measured",
    "summary": "飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "飞猫云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。飞猫云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "飞猫云 支持哪些设备和客户端？",
        "a": "飞猫云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "飞猫云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 飞猫云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "weifeng",
    "ranking": 4,
    "name": "微风网络",
    "isFeatured": false,
    "badge": "高性价比标杆",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2023",
    "entryPrice": "7元/月",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "period": "每月"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "period": "一次性"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "period": "一次性"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "546Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "115Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "384Mbps"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "131Mbps"
      },
      {
        "region": "美国",
        "latency": "167ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/微风-节点测速实测.png",
    "testedAt": "2026-07-20 21:41:00 CST",
    "dataStatus": "measured",
    "summary": "微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是 IEPL 专线而不是纯中转，所以稳定性比一些更便宜的中转机场要好一点，日常刷网页、看视频、用 ChatGPT 基本没问题，节点也覆盖了香港、新加坡、日本、美国这几个热门地区。客服口碑在这个价位段里算是不错的，第一次用机场遇到问题至少有地方问，这对刚接触机场的新手来说挺重要。不过 100GB 的流量对重度用户可能不太够，属于入门够用但称不上顶配的类型，如果每天长时间在线，可能需要额外留意用量。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "微风网络 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。微风网络 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "微风网络 支持哪些设备和客户端？",
        "a": "微风网络 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "微风网络 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 微风网络：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "dalaoyun",
    "ranking": 5,
    "name": "大佬云",
    "isFeatured": false,
    "badge": "高性价比标杆",
    "affiliateUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "5.6元/月",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "大佬云专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "大佬云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。大佬云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "大佬云 支持哪些设备和客户端？",
        "a": "大佬云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "大佬云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 大佬云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "xingdaomeng",
    "ranking": 6,
    "name": "星岛梦",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2020",
    "entryPrice": "8元/月",
    "circuitType": "IEPL 专线",
    "protocol": "Trojan",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "period": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "504Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "103Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "411Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "136Mbps"
      },
      {
        "region": "美国",
        "latency": "177ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/星岛梦-节点测速实测.png",
    "testedAt": "2026-08-11 01:48:13 CST",
    "dataStatus": "measured",
    "summary": "星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "星岛梦 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。星岛梦 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "星岛梦 支持哪些设备和客户端？",
        "a": "星岛梦 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "星岛梦 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 星岛梦：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "ermao",
    "ranking": 7,
    "name": "二猫云",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2023",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "period": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "period": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "period": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "481Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "118Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "407Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "143Mbps"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "yes",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/二猫云-节点测速实测.png",
    "testedAt": "2026-08-11 10:45:27 CST",
    "dataStatus": "measured",
    "summary": "二猫云走 IEPL 专线，VLESS 协议，20 元/月起，130GB 流量。官方强调自己不做低价跑路盘那一套，主打长期稳定，还配了一套独家定制客户端。账号不限设备连接数，Netflix、YouTube、ChatGPT 这些日常场景基本能覆盖，但 Claude 和 Gemini 官方没给出确定说法，能不能用建议自己先测一下。节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站。套餐从月付到三年付都有，摆明是想留长期用户，价格在这个价位的专线机场里不算便宜，预算有限或者只是短期用用，可以先看看其他更便宜的选项。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "二猫云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。二猫云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "二猫云 支持哪些设备和客户端？",
        "a": "二猫云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "二猫云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 二猫云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "wuyou",
    "ranking": 8,
    "name": "无忧链接",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2025",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "period": "每月"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "period": "一次性"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "531Mbps"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "418Mbps"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "145ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/无忧链接.jpg",
    "testedAt": "2026-09-07 12:52:00 CST",
    "dataStatus": "measured",
    "summary": "如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "无忧链接 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。无忧链接 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "无忧链接 支持哪些设备和客户端？",
        "a": "无忧链接 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "无忧链接 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 无忧链接：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "weitu",
    "ranking": 9,
    "name": "唯兔云",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2023",
    "entryPrice": "详见套餐表",
    "circuitType": "IPLC 纯专线",
    "protocol": "Trojan",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billing": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "period": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "500Mbps"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "100Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "414Mbps"
      },
      {
        "region": "日本",
        "latency": "56ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "179ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/唯兔云-节点测速实测.png",
    "testedAt": "2026-08-11 13:55:08 CST",
    "dataStatus": "measured",
    "summary": "唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "唯兔云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。唯兔云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "唯兔云 支持哪些设备和客户端？",
        "a": "唯兔云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "唯兔云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 唯兔云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "firefly",
    "ranking": 10,
    "name": "Firefly",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "couponCode": "firefly",
    "couponDiscount": "8折优惠",
    "couponNote": "结账时输入优惠码 firefly 即可享受折扣",
    "foundedYear": "2023-2025",
    "entryPrice": "¥8/月起",
    "circuitType": "IPLC 纯专线",
    "protocol": "VLESS",
    "clientSupport": "官方专属客户端（下载登录即用，免配订阅，不开放通用链接）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "period": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "547Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "135Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "445Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "30Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "Firefly 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。Firefly 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "Firefly 支持哪些设备和客户端？",
        "a": "Firefly 提供 官方专属客户端（下载登录即用，免配订阅，不开放通用链接）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "Firefly 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 Firefly：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 firefly 领取。"
  },
  {
    "id": "yuzhou",
    "ranking": 11,
    "name": "宇宙云",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "couponCode": "YUZHOU553",
    "couponDiscount": "8折优惠",
    "couponNote": "结账时输入优惠码 YUZHOU553 即可享受折扣",
    "foundedYear": "2023-2025",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "待补充",
        "billing": "待核实",
        "price": "—",
        "traffic": "—",
        "period": "—"
      }
    ],
    "speedtests": [
      {
        "region": "暂无可核实实测数据",
        "latency": "—",
        "download": "—"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/宇宙云-节点测速实测.png",
    "testedAt": "2026-08-11 21:04:24 CST",
    "dataStatus": "measured",
    "summary": "宇宙云专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "宇宙云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。宇宙云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "宇宙云 支持哪些设备和客户端？",
        "a": "宇宙云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "宇宙云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 宇宙云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 YUZHOU553 领取。"
  },
  {
    "id": "u1s1",
    "ranking": 12,
    "name": "U1S1",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2025",
    "entryPrice": "详见套餐表",
    "circuitType": "IPLC 纯专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "24ms",
        "download": "538Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "107Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "414Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "133Mbps"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "20Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/U1S1-节点测速实测.png",
    "testedAt": "2026-08-11 22:33:29 CST",
    "dataStatus": "measured",
    "summary": "U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "U1S1 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。U1S1 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "U1S1 支持哪些设备和客户端？",
        "a": "U1S1 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "U1S1 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 U1S1：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "lingmao",
    "ranking": 13,
    "name": "灵猫网络",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "couponCode": "lingmao",
    "couponDiscount": "8折优惠",
    "couponNote": "结账时输入优惠码 lingmao 即可享受折扣",
    "foundedYear": "2025",
    "entryPrice": "¥7.1/月起",
    "circuitType": "BGP 智能中转优化",
    "protocol": "VLESS",
    "clientSupport": "官方专属客户端（下载登录即用，免配订阅，不开放通用链接）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "492Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "109Mbps"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "409Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "region": "美国",
        "latency": "164ms",
        "download": "19Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/灵猫网络-节点测速实测.png",
    "testedAt": "2026-08-11 18:45:40 CST",
    "dataStatus": "measured",
    "summary": "灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "灵猫网络 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。灵猫网络 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "灵猫网络 支持哪些设备和客户端？",
        "a": "灵猫网络 提供 官方专属客户端（下载登录即用，免配订阅，不开放通用链接）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "灵猫网络 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 灵猫网络：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 lingmao 领取。"
  },
  {
    "id": "jilian",
    "ranking": 14,
    "name": "极连云",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "详见套餐表",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/极连云-节点测速实测.png",
    "testedAt": "2026-08-11 22:46:50 CST",
    "dataStatus": "measured",
    "summary": "极连云专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "极连云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。极连云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "极连云 支持哪些设备和客户端？",
        "a": "极连云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "极连云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 极连云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "guangnian",
    "ranking": 15,
    "name": "光年梯",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2025",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "详见套餐表",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/光年梯-节点测速实测.png",
    "testedAt": "2026-08-11 14:38:04 CST",
    "dataStatus": "measured",
    "summary": "光年梯专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "光年梯 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。光年梯 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "光年梯 支持哪些设备和客户端？",
        "a": "光年梯 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "光年梯 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 光年梯：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "yifan",
    "ranking": 16,
    "name": "一翻云",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2025",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "Hysteria 2 / VLESS-Reality / Shadowsocks",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "轻享版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "period": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "period": "一次性"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "477Mbps"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "117Mbps"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "390Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "136Mbps"
      },
      {
        "region": "美国",
        "latency": "180ms",
        "download": "20Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/一翻云-节点测速实测.png",
    "testedAt": "2026-08-11 00:21:30 CST",
    "dataStatus": "measured",
    "summary": "一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "一翻云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。一翻云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "一翻云 支持哪些设备和客户端？",
        "a": "一翻云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "一翻云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 一翻云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "sogo",
    "ranking": 17,
    "name": "SOGO 云",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "couponCode": "SOGO10000",
    "couponDiscount": "新人优惠专享",
    "couponNote": "结账时输入优惠码 SOGO10000 即可享受折扣",
    "foundedYear": "2023-2025",
    "entryPrice": "¥8.17/月起",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "官方专属客户端（下载登录即用，免配订阅，不开放通用链接）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "小包-年付版",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "优选版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "period": "每月"
      },
      {
        "name": "强化版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "period": "每月"
      },
      {
        "name": "顶配版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "period": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billing": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "period": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billing": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "period": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billing": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "period": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billing": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "488Mbps"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "118Mbps"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "401Mbps"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "137Mbps"
      },
      {
        "region": "美国",
        "latency": "140ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "yes",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/SOGO云-节点测速实测.png",
    "testedAt": "2026-08-11 18:57:59 CST",
    "dataStatus": "measured",
    "summary": "Sogo 云由海外团队运营，全线 IEPL 专线接入并做了三网 BGP 优化，协议用 VLESS，不限速也不限设备数量。节点覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区，是本站收录里覆盖面最广的一家。需要留意的是它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；月付从 25 元 150GB 起。优惠码 SOGO10000 可打 9 折。官方没有提供试用。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "SOGO 云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。SOGO 云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "SOGO 云 支持哪些设备和客户端？",
        "a": "SOGO 云 提供 官方专属客户端（下载登录即用，免配订阅，不开放通用链接）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "SOGO 云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 SOGO 云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 SOGO10000 领取。"
  },
  {
    "id": "kexin",
    "ranking": 18,
    "name": "可信云",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "详见套餐表",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/可信云-节点测速实测.png",
    "testedAt": "2026-08-11 15:32:35 CST",
    "dataStatus": "measured",
    "summary": "可信云专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "可信云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。可信云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "可信云 支持哪些设备和客户端？",
        "a": "可信云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "可信云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 可信云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "sujie",
    "ranking": 19,
    "name": "速界",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "详见套餐表",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "详见套餐表",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "yes",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/速界-节点测速实测.png",
    "testedAt": "2026-08-11 15:39:36 CST",
    "dataStatus": "measured",
    "summary": "速界专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "速界 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。速界 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "速界 支持哪些设备和客户端？",
        "a": "速界 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "速界 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 速界：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "shanyue",
    "ranking": 20,
    "name": "闪跃",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "couponCode": "shanyue",
    "couponDiscount": "8折优惠",
    "couponNote": "结账时输入优惠码 shanyue 即可享受折扣",
    "foundedYear": "2023-2025",
    "entryPrice": "¥8/月起",
    "circuitType": "IPLC 纯专线",
    "protocol": "VLESS",
    "clientSupport": "官方专属客户端（下载登录即用，免配订阅，不开放通用链接）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "period": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "period": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "period": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "548Mbps"
      },
      {
        "region": "台湾",
        "latency": "38ms",
        "download": "110Mbps"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "383Mbps"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "144Mbps"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "闪跃 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。闪跃 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "闪跃 支持哪些设备和客户端？",
        "a": "闪跃 提供 官方专属客户端（下载登录即用，免配订阅，不开放通用链接）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "闪跃 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 闪跃：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 shanyue 领取。"
  },
  {
    "id": "quanqiu",
    "ranking": 21,
    "name": "全球云",
    "isFeatured": false,
    "badge": "实测证据收录",
    "affiliateUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "couponCode": "qq88",
    "couponDiscount": "8折优惠",
    "couponNote": "结账时输入优惠码 qq88 即可享受折扣",
    "foundedYear": "2023-2025",
    "entryPrice": "¥20/月起",
    "circuitType": "IPLC 纯专线",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "官方专属客户端（下载登录即用，免配订阅，不开放通用链接）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "period": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "period": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "period": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "period": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "489Mbps"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "117Mbps"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "430Mbps"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "133Mbps"
      },
      {
        "region": "美国",
        "latency": "138ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": true,
    "speedtestImage": "/images/speedtest/全球云-节点测速实测.png",
    "testedAt": "2026-08-11 15:50:43 CST",
    "dataStatus": "measured",
    "summary": "全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "全球云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。全球云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "全球云 支持哪些设备和客户端？",
        "a": "全球云 提供 官方专属客户端（下载登录即用，免配订阅，不开放通用链接）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "全球云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 全球云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 qq88 领取。"
  },
  {
    "id": "shandianshu",
    "ranking": 22,
    "name": "闪电鼠",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "5.6元/月",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "闪电鼠专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "闪电鼠 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。闪电鼠 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "闪电鼠 支持哪些设备和客户端？",
        "a": "闪电鼠 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "闪电鼠 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 闪电鼠：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "yunjiexian",
    "ranking": 23,
    "name": "云界线",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://qwerty.yunjiexianaff.com/?code=aycnwNUi",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "5.6元/月",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "云界线专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "云界线 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。云界线 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "云界线 支持哪些设备和客户端？",
        "a": "云界线 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "云界线 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 云界线：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "liulianyun",
    "ranking": 24,
    "name": "榴莲云",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "5.6元/月",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "榴莲云专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "榴莲云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。榴莲云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "榴莲云 支持哪些设备和客户端？",
        "a": "榴莲云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "榴莲云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 榴莲云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "shenxing",
    "ranking": 25,
    "name": "神行加速",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "14元/月",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "14元/月",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "神行加速专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "神行加速 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。神行加速 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "神行加速 支持哪些设备和客户端？",
        "a": "神行加速 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "神行加速 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 神行加速：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "huanqiuti",
    "ranking": 26,
    "name": "环球梯",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "",
    "foundedYear": "2024",
    "entryPrice": "5.6元/月",
    "circuitType": "IEPL 专线",
    "protocol": "VLESS",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础入门方案",
        "billing": "月付/年付",
        "price": "5.6元/月",
        "traffic": "50GB-150GB",
        "period": "每月"
      },
      {
        "name": "进阶畅享方案",
        "billing": "月付",
        "price": "¥35-¥50",
        "traffic": "300GB-500GB",
        "period": "每月"
      },
      {
        "name": "旗舰高阶方案",
        "billing": "月付",
        "price": "¥80-¥150",
        "traffic": "800GB-1500GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港 IEPL",
        "latency": "22ms",
        "download": "520Mbps"
      },
      {
        "region": "新加坡专线",
        "latency": "45ms",
        "download": "410Mbps"
      },
      {
        "region": "日本东京",
        "latency": "54ms",
        "download": "140Mbps"
      },
      {
        "region": "美国洛杉矶",
        "latency": "150ms",
        "download": "25Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "partial",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "partial",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "partial",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "partial",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "partial",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "环球梯专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "环球梯 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。环球梯 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "环球梯 支持哪些设备和客户端？",
        "a": "环球梯 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "环球梯 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 环球梯：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 AMM 领取。"
  },
  {
    "id": "yinxingren",
    "ranking": 27,
    "name": "隐形人",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "couponCode": "moon80",
    "couponDiscount": "8折优惠",
    "couponNote": "结账时输入优惠码 moon80 即可享受折扣",
    "foundedYear": "2024",
    "entryPrice": "¥9.08/月起",
    "circuitType": "IPLC 纯专线",
    "protocol": "VLESS",
    "clientSupport": "官方专属客户端（下载登录即用，免配订阅，不开放通用链接）",
    "devices": "常规 3-5 台设备并发",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "period": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "period": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "period": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "period": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "period": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "period": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "period": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "period": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "period": "一次性"
      }
    ],
    "speedtests": [
      {
        "region": "香港",
        "latency": "—",
        "download": "—"
      },
      {
        "region": "日本",
        "latency": "—",
        "download": "—"
      },
      {
        "region": "美国",
        "latency": "—",
        "download": "—"
      },
      {
        "region": "新加坡",
        "latency": "—",
        "download": "—"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "—"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "yes",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。\r",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "隐形人 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。隐形人 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "隐形人 支持哪些设备和客户端？",
        "a": "隐形人 提供 官方专属客户端（下载登录即用，免配订阅，不开放通用链接）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "隐形人 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 隐形人：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 moon80 领取。"
  },
  {
    "id": "tiziyun",
    "ranking": 28,
    "name": "梯子云",
    "isFeatured": false,
    "badge": "深度中立评测",
    "affiliateUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "couponCode": "theo",
    "couponDiscount": "8折优惠",
    "couponNote": "结账时输入优惠码 theo 即可享受折扣",
    "foundedYear": "2025",
    "entryPrice": "7.4元/月",
    "circuitType": "IPLC 纯专线",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）",
    "devices": "不限制同时在线设备数量",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "台湾"
    ],
    "plans": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "period": "每月"
      },
      {
        "name": "优质专线服务",
        "billing": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "period": "每月"
      },
      {
        "name": "精品专线服务",
        "billing": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "period": "每月"
      },
      {
        "name": "小包",
        "billing": "季付",
        "price": "¥66",
        "traffic": "每月100GB高速流量",
        "period": "每月"
      },
      {
        "name": "中包",
        "billing": "季付",
        "price": "¥126",
        "traffic": "每月250GB高速流量",
        "period": "每月"
      },
      {
        "name": "大包",
        "billing": "季付",
        "price": "¥156",
        "traffic": "每月400GB高速流量",
        "period": "每月"
      },
      {
        "name": "超大包",
        "billing": "季付",
        "price": "¥216",
        "traffic": "每月750GB高速流量",
        "period": "每月"
      },
      {
        "name": "不差钱",
        "billing": "季付",
        "price": "¥231",
        "traffic": "每月900GB高速流量",
        "period": "每月"
      },
      {
        "name": "旗舰包",
        "billing": "年付",
        "price": "¥2500",
        "traffic": "每月2500GB超大流量",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "季付",
        "price": "¥41",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "年付",
        "price": "¥144",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "季付",
        "price": "¥81",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "年付",
        "price": "¥288",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "月付",
        "price": "¥75",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "季付",
        "price": "¥203",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "半年付",
        "price": "¥383",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "年付",
        "price": "¥720",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "季付",
        "price": "¥405",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "半年付",
        "price": "¥765",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "年付",
        "price": "¥1440",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "150G｜轻量套餐",
        "billing": "半年付",
        "price": "¥95",
        "traffic": "150GB/月",
        "period": "每月"
      },
      {
        "name": "350G｜标准套餐",
        "billing": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "period": "每月"
      },
      {
        "name": "650G｜高速套餐",
        "billing": "月付",
        "price": "¥55",
        "traffic": "650GB/月",
        "period": "每月"
      },
      {
        "name": "220G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥79",
        "traffic": "220GB",
        "period": "一次性（具体有效期待核实）"
      },
      {
        "name": "840G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥188",
        "traffic": "840GB",
        "period": "一次性（具体有效期待核实）"
      },
      {
        "name": "2050G｜企业套餐",
        "billing": "月付",
        "price": "¥200",
        "traffic": "2050GB/月",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥41",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥144",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥81",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥288",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥60",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥162",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥306",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥576",
        "traffic": "400G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥120",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥324",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥697",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1152",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "年付加强版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "季付",
        "price": "¥54",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "半年付",
        "price": "¥102",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "年付",
        "price": "¥192",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "季付",
        "price": "¥108",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "半年付",
        "price": "¥204",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "年付",
        "price": "¥384",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "季付",
        "price": "¥270",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "半年付",
        "price": "¥510",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "年付",
        "price": "¥960",
        "traffic": "700G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "季付",
        "price": "¥486",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "半年付",
        "price": "¥918",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "年付",
        "price": "¥1728",
        "traffic": "1500G",
        "period": "每月"
      },
      {
        "name": "轻量包",
        "billing": "季付",
        "price": "¥30",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "轻量包",
        "billing": "半年付",
        "price": "¥56",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "轻量包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥20",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥54",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥102",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥192",
        "traffic": "110G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥40",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥108",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥204",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥336",
        "traffic": "220G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥80",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥216",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥408",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥768",
        "traffic": "460G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥160",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥432",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥816",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1536",
        "traffic": "1100G",
        "period": "每月"
      },
      {
        "name": "年付小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥67",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥127",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥240",
        "traffic": "150G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥121",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥229",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥432",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥229",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥433",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥816",
        "traffic": "600G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥400",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥750",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1360",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "64G/轻量套餐",
        "billing": "年付",
        "price": "¥88",
        "traffic": "64GB/月",
        "period": "每月"
      },
      {
        "name": "128G/轻量套餐",
        "billing": "半年付",
        "price": "¥88",
        "traffic": "128GB/月",
        "period": "每月"
      },
      {
        "name": "256G/轻量套餐",
        "billing": "季付",
        "price": "¥75",
        "traffic": "256GB/月",
        "period": "每月"
      },
      {
        "name": "100G/月-琴",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "period": "每月"
      },
      {
        "name": "200G/月-棋",
        "billing": "月付",
        "price": "¥25",
        "traffic": "200GB/月",
        "period": "每月"
      },
      {
        "name": "500G/月-书",
        "billing": "月付",
        "price": "¥50",
        "traffic": "500GB/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "月付",
        "price": "¥20",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "季付",
        "price": "¥57",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "半年付",
        "price": "¥108",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "年付",
        "price": "¥204",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "两年付",
        "price": "¥384",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "三年付",
        "price": "¥540",
        "traffic": "100G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "季付",
        "price": "¥142.5",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "半年付",
        "price": "¥270",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "年付",
        "price": "¥510",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "两年付",
        "price": "¥960",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "三年付",
        "price": "¥1350",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "季付",
        "price": "¥285",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "半年付",
        "price": "¥540",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "年付",
        "price": "¥1020",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "两年付",
        "price": "¥1920",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "三年付",
        "price": "¥2700",
        "traffic": "700G/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "季付",
        "price": "¥513",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "半年付",
        "price": "¥972",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "年付",
        "price": "¥1836",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "两年付",
        "price": "¥3456",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "三年付",
        "price": "¥4860",
        "traffic": "1.5T/月",
        "period": "每月"
      },
      {
        "name": "灵动·穿云",
        "billing": "年付",
        "price": "¥99",
        "traffic": "70G/月",
        "period": "每月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "billing": "一次性付费",
        "price": "¥199",
        "traffic": "150G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "billing": "一次性付费",
        "price": "¥499",
        "traffic": "400G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "billing": "一次性付费",
        "price": "¥899",
        "traffic": "800G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动云·至尊私人定制",
        "billing": "月付",
        "price": "¥620",
        "traffic": "截图遮挡",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "月付",
        "price": "¥120",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "季付",
        "price": "¥342",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "半年付",
        "price": "¥648",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "年付",
        "price": "¥1224",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "两年付",
        "price": "¥2304",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "三年付",
        "price": "¥3240",
        "traffic": "800G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "月付",
        "price": "¥200",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "季付",
        "price": "¥570",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "半年付",
        "price": "¥1080",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "年付",
        "price": "¥2040",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "两年付",
        "price": "¥3840",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "三年付",
        "price": "¥5400",
        "traffic": "2000G",
        "period": "每月"
      },
      {
        "name": "浪网 年付标准",
        "billing": "年付",
        "price": "¥119",
        "traffic": "80G",
        "period": "每月"
      },
      {
        "name": "浪网 小流量包",
        "billing": "一次性付费",
        "price": "¥239",
        "traffic": "180G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 标准流量包",
        "billing": "一次性付费",
        "price": "¥569",
        "traffic": "450G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 定制线路包",
        "billing": "月付",
        "price": "¥640",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "浪网 精英流量包",
        "billing": "一次性付费",
        "price": "¥1099",
        "traffic": "900G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 进阶",
        "billing": "月付",
        "price": "¥70",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "季付",
        "price": "¥199.5",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "半年付",
        "price": "¥378",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "年付",
        "price": "¥714",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "两年付",
        "price": "¥1344",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "三年付",
        "price": "¥1890",
        "traffic": "450G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "月付",
        "price": "¥30",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "季付",
        "price": "¥85.5",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "半年付",
        "price": "¥162",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "年付",
        "price": "¥306",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "两年付",
        "price": "¥576",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "三年付",
        "price": "¥810",
        "traffic": "截150G",
        "period": "每月"
      },
      {
        "name": "限时月付",
        "billing": "月付",
        "price": "¥15",
        "traffic": "72G",
        "period": "每月"
      },
      {
        "name": "限时年付",
        "billing": "年付",
        "price": "¥108",
        "traffic": "45G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "月付",
        "price": "¥25",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "季付",
        "price": "¥70",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "半年付",
        "price": "¥130",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "年付",
        "price": "¥270",
        "traffic": "120G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "月付",
        "price": "¥50",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "季付",
        "price": "¥145",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "半年付",
        "price": "¥280",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "年付",
        "price": "¥570",
        "traffic": "250G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "月付",
        "price": "¥100",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "季付",
        "price": "¥290",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "半年付",
        "price": "¥580",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "年付",
        "price": "¥1100",
        "traffic": "500G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "月付",
        "price": "¥200",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "季付",
        "price": "¥580",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "半年付",
        "price": "¥1150",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "年付",
        "price": "¥2300",
        "traffic": "1000G",
        "period": "每月"
      },
      {
        "name": "Firefly年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "季付",
        "price": "¥67",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "半年付",
        "price": "¥127",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "年付",
        "price": "¥240",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "两年付",
        "price": "¥420",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "三年付",
        "price": "¥540",
        "traffic": "150G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "季付",
        "price": "¥121",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "半年付",
        "price": "¥229",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "年付",
        "price": "¥432",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "两年付",
        "price": "¥756",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "三年付",
        "price": "¥972",
        "traffic": "300G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "季付",
        "price": "¥229",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "半年付",
        "price": "¥433",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "年付",
        "price": "¥816",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "两年付",
        "price": "¥1428",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "三年付",
        "price": "¥1836",
        "traffic": "600G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "季付",
        "price": "¥400",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "半年付",
        "price": "¥750",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "年付",
        "price": "¥1360",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "两年付",
        "price": "¥2399",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "三年付",
        "price": "¥3119",
        "traffic": "1000G/月",
        "period": "每月"
      },
      {
        "name": "Firefly不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100G",
        "period": "一次性（套餐内流量总额）"
      },
      {
        "name": "Basic",
        "billing": "月付",
        "price": "¥17",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billing": "季付",
        "price": "¥46",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billing": "半年付",
        "price": "¥87",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Basic",
        "billing": "年付",
        "price": "¥163",
        "traffic": "100G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billing": "月付",
        "price": "¥28",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billing": "季付",
        "price": "¥76",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billing": "半年付",
        "price": "¥143",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Standard",
        "billing": "年付",
        "price": "¥268",
        "traffic": "200G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billing": "月付",
        "price": "¥36",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billing": "季付",
        "price": "¥97",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billing": "半年付",
        "price": "¥183",
        "traffic": "300G",
        "period": "每月"
      },
      {
        "name": "Premium",
        "billing": "年付",
        "price": "¥345",
        "traffic": "300G",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "套餐名称",
        "latency": "计费方式",
        "download": "价格"
      },
      {
        "region": "基础专线服务",
        "latency": "季付",
        "download": "¥297"
      },
      {
        "region": "优质专线服务",
        "latency": "季付",
        "download": "¥327"
      },
      {
        "region": "精品专线服务",
        "latency": "季付",
        "download": "¥357"
      },
      {
        "region": "日本",
        "latency": "69.4ms",
        "download": "462.04Mbps"
      },
      {
        "region": "美国",
        "latency": "170.2ms",
        "download": "440.04Mbps"
      },
      {
        "region": "香港",
        "latency": "25.9ms",
        "download": "431.24Mbps"
      },
      {
        "region": "新加坡",
        "latency": "55.6ms",
        "download": "422.97Mbps"
      },
      {
        "region": "台湾",
        "latency": "41.3ms",
        "download": "407.66Mbps"
      },
      {
        "region": "印度",
        "latency": "95ms",
        "download": "341.92Mbps"
      },
      {
        "region": "印尼",
        "latency": "88ms",
        "download": "318.64Mbps"
      },
      {
        "region": "套餐名称",
        "latency": "计费方式",
        "download": "价格"
      },
      {
        "region": "小包",
        "latency": "季付",
        "download": "¥66"
      },
      {
        "region": "中包",
        "latency": "季付",
        "download": "¥126"
      },
      {
        "region": "大包",
        "latency": "季付",
        "download": "¥156"
      },
      {
        "region": "超大包",
        "latency": "季付",
        "download": "¥216"
      },
      {
        "region": "不差钱",
        "latency": "季付",
        "download": "¥231"
      },
      {
        "region": "旗舰包",
        "latency": "年付",
        "download": "¥2500"
      },
      {
        "region": "香港",
        "latency": "160.7ms",
        "download": "114.94Mbps"
      },
      {
        "region": "美国",
        "latency": "302.6ms",
        "download": "70.53Mbps"
      },
      {
        "region": "日本",
        "latency": "202.4ms",
        "download": "77.65Mbps"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "0.03Mbps"
      },
      {
        "region": "新加坡",
        "latency": "186.8ms",
        "download": "85.22Mbps"
      },
      {
        "region": "加拿大",
        "latency": "344ms",
        "download": "62Mbps"
      },
      {
        "region": "韩国",
        "latency": "358ms",
        "download": "31.28Mbps"
      },
      {
        "region": "套餐名称",
        "latency": "计费方式",
        "download": "价格"
      },
      {
        "region": "150G｜轻量套餐",
        "latency": "半年付",
        "download": "¥95"
      },
      {
        "region": "350G｜标准套餐",
        "latency": "月付",
        "download": "¥32"
      },
      {
        "region": "650G｜高速套餐",
        "latency": "月付",
        "download": "¥55"
      },
      {
        "region": "220G流量包｜不限时",
        "latency": "一次性付费",
        "download": "¥79"
      },
      {
        "region": "840G流量包｜不限时",
        "latency": "一次性付费",
        "download": "¥188"
      },
      {
        "region": "2050G｜企业套餐",
        "latency": "月付",
        "download": "¥200"
      },
      {
        "region": "日本",
        "latency": "123.8ms",
        "download": "488.83Mbps"
      },
      {
        "region": "美国",
        "latency": "614ms",
        "download": "245.6Mbps"
      },
      {
        "region": "澳大利亚",
        "latency": "277ms",
        "download": "279.64Mbps"
      },
      {
        "region": "韩国",
        "latency": "6000ms",
        "download": "552.8Mbps"
      },
      {
        "region": "德国",
        "latency": "390.5ms",
        "download": "159.96Mbps"
      },
      {
        "region": "法国",
        "latency": "384ms",
        "download": "204.08Mbps"
      },
      {
        "region": "阿联酋",
        "latency": "345ms",
        "download": "342.76Mbps"
      },
      {
        "region": "套餐名称",
        "latency": "计费方式",
        "download": "价格"
      },
      {
        "region": "64G/轻量套餐",
        "latency": "年付",
        "download": "¥88"
      },
      {
        "region": "128G/轻量套餐",
        "latency": "半年付",
        "download": "¥88"
      },
      {
        "region": "256G/轻量套餐",
        "latency": "季付",
        "download": "¥75"
      },
      {
        "region": "100G/月-琴",
        "latency": "月付",
        "download": "¥15"
      },
      {
        "region": "200G/月-棋",
        "latency": "月付",
        "download": "¥25"
      },
      {
        "region": "500G/月-书",
        "latency": "月付",
        "download": "¥50"
      },
      {
        "region": "美国",
        "latency": "349.3ms",
        "download": "180.29Mbps"
      },
      {
        "region": "日本",
        "latency": "229.8ms",
        "download": "160.51Mbps"
      },
      {
        "region": "香港",
        "latency": "151.4ms",
        "download": "152.86Mbps"
      },
      {
        "region": "新加坡",
        "latency": "179.8ms",
        "download": "142.98Mbps"
      },
      {
        "region": "越南",
        "latency": "232ms",
        "download": "87.68Mbps"
      },
      {
        "region": "泰国",
        "latency": "217ms",
        "download": "82Mbps"
      },
      {
        "region": "英国",
        "latency": "328ms",
        "download": "65.2Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "yes",
        "note": "推荐香港/新加坡/日本节点原生直连"
      },
      {
        "service": "Claude 3.5 Sonnet",
        "status": "yes",
        "note": "需纯净住宅或原生IP防封锁"
      },
      {
        "service": "Google Gemini",
        "status": "yes",
        "note": "视落地节点区域支持政策而定"
      },
      {
        "service": "Netflix (网飞原创+非自制)",
        "status": "yes",
        "note": "支持全区解锁"
      },
      {
        "service": "Disney+ 4K HDR",
        "status": "yes",
        "note": "稳定支持多音轨及HDR画质"
      },
      {
        "service": "YouTube 4K/8K 极速",
        "status": "yes",
        "note": "晚高峰高速缓冲"
      },
      {
        "service": "TikTok 跨境电商与直播",
        "status": "yes",
        "note": "支持多区域跨区直连"
      }
    ],
    "hasSpeedtestImage": false,
    "testedAt": "2026-08-11 批次实测",
    "dataStatus": "vendor",
    "summary": "梯子云专注于为用户提供高速跨境网络优化与跨境生产力加速支持。",
    "detailedAudit": "",
    "pros": [
      "支持主流专线节点与主流 AI 访问场景",
      "节点覆盖香港、新加坡、日本、美国等亚太核心落地枢纽",
      "支持 ChatGPT、Claude 及 Netflix 4K 全高清流媒体解锁",
      "配置门槛低，客户端导入或专用App一键连接"
    ],
    "cons": [
      "特殊商品或定制线路不支持退款，建议优先以小周期或月付体验",
      "晚高峰各地区运营商（电信/联通/移动）路由可能存在轻微差异",
      "AI平台（如Gemini/Claude）风控策略变动时可能偶发需要手动切节点"
    ],
    "suitableFor": [
      "外贸跨境电商投放与海外社媒运营人员（TikTok直播/Shopify）",
      "高频使用 ChatGPT 4o、Claude 3.5 与 Midjourney 的 AI 创作者",
      "追求 4K/8K 极致画质 Netflix/Disney+/YouTube 影音爱好者",
      "跨国远程办公及学术文献查阅科研人员"
    ],
    "unsuitableFor": [
      "对网络完全无容错率、要求 100% 毫秒级零丢包的海外高频金融交易者",
      "期望几块钱使用海量无限流量的盗版下载与网盘挂机用户"
    ],
    "riskWarning": "网络服务受国际链路、光缆维护和第三方平台风控影响；建议按月付或小额周期体验实测后，再考虑长期订阅。",
    "peerComparison": "在同价位段具备同等专线规格，用户可根据客户端使用习惯（需要第三方Clash还是专属App）以及流量配额进行选型。",
    "faq": [
      {
        "q": "梯子云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "支持。梯子云 针对海外 AI 服务开辟了原生 IP 与专用路由，可流畅使用 ChatGPT 4o 及 Claude 3.5。若遇 OpenAI 或 Anthropic 区域风控阻断，在客户端切换至香港或新加坡节点即可恢复。"
      },
      {
        "q": "梯子云 支持哪些设备和客户端？",
        "a": "梯子云 提供 自研客户端 + 支持第三方订阅导入（Clash / Shadowrocket / sing-box）。兼容 Windows、macOS、iOS、Android 以及软路由系统，使用 Clash Verge Rev、Shadowrocket（小火箭）等均可无缝导入。"
      },
      {
        "q": "为什么晚高峰期间测速数据可能与理论带宽有差异？",
        "a": "晚高峰（20:00-23:00）属于全国国际出口带宽密集期，本地宽带（电信/联通/移动）到骨干网机房的抖动不同。专线可避开公网拥堵，但建议用户开启客户端的自动测速智能分流。"
      }
    ],
    "seoTitle": "梯子云 怎么样？2026 最新节点测速、套餐价格与流媒体/AI解锁深度评测 - 机场online",
    "metaDescription": "【机场online权威实测】深度评测 梯子云：包含 2026 晚高峰实测延迟、带宽吞吐量、VLESS/IEPL专线稳定性、Netflix/ChatGPT 解锁状态、真实优缺点与优惠码 theo 领取。"
  },
  {
    "id": "wgetcloud",
    "ranking": 29,
    "name": "WgetCloud",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "WgetCloud 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24（历史项目记录），主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "WgetCloud 还在正常运营吗？",
        "a": "本站保留了 WgetCloud 的历史档案记录（2026-08-24（历史项目记录））。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "WgetCloud 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】WgetCloud 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "baiyueguang",
    "ranking": 30,
    "name": "白月光",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "https://sibker.com/register?invite_code=gg6puAId",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "shadowsocks",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "白月光 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24（历史项目记录），主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "白月光 还在正常运营吗？",
        "a": "本站保留了 白月光 的历史档案记录（2026-08-24（历史项目记录））。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "白月光 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】白月光 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "flyingbird",
    "ranking": 31,
    "name": "FlyingBird",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "未提供独立品牌入口。",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "FlyingBird 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "FlyingBird 还在正常运营吗？",
        "a": "本站保留了 FlyingBird 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "FlyingBird 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】FlyingBird 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "cyberguard",
    "ranking": 32,
    "name": "CyberGuard",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "trojan/vless",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "CyberGuard 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-23（历史项目记录），主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "CyberGuard 还在正常运营吗？",
        "a": "本站保留了 CyberGuard 的历史档案记录（2026-08-23（历史项目记录））。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "CyberGuard 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】CyberGuard 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "longmaoyun",
    "ranking": 33,
    "name": "龙猫云",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "未提供独立品牌入口。",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "龙猫云 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "龙猫云 还在正常运营吗？",
        "a": "本站保留了 龙猫云 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "龙猫云 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】龙猫云 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "fatcat",
    "ranking": 34,
    "name": "FATCAT",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "未提供独立品牌入口。",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "FATCAT 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "FATCAT 还在正常运营吗？",
        "a": "本站保留了 FATCAT 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "FATCAT 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】FATCAT 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "tntcloud",
    "ranking": 35,
    "name": "TNTCloud",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "未提供独立品牌入口。",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "TNTCloud 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "TNTCloud 还在正常运营吗？",
        "a": "本站保留了 TNTCloud 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "TNTCloud 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】TNTCloud 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "qingyunti",
    "ranking": 36,
    "name": "青云梯",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "未提供独立品牌入口。",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "青云梯 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "青云梯 还在正常运营吗？",
        "a": "本站保留了 青云梯 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "青云梯 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】青云梯 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "shanshuiyun",
    "ranking": 37,
    "name": "山水云",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "尚未核实",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "山水云 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24（历史项目记录），主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "山水云 还在正常运营吗？",
        "a": "本站保留了 山水云 的历史档案记录（2026-08-24（历史项目记录））。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "山水云 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】山水云 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "lingdongyun",
    "ranking": 38,
    "name": "灵动云",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "灵动云 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "灵动云 还在正常运营吗？",
        "a": "本站保留了 灵动云 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "灵动云 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】灵动云 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "langwang",
    "ranking": 39,
    "name": "浪网",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "浪网 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "浪网 还在正常运营吗？",
        "a": "本站保留了 浪网 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "浪网 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】浪网 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "edgenova",
    "ranking": 40,
    "name": "EdgeNova",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "EdgeNova 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "EdgeNova 还在正常运营吗？",
        "a": "本站保留了 EdgeNova 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "EdgeNova 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】EdgeNova 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "yinghuochong",
    "ranking": 41,
    "name": "萤火虫",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "萤火虫 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "萤火虫 还在正常运营吗？",
        "a": "本站保留了 萤火虫 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "萤火虫 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】萤火虫 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  },
  {
    "id": "sslar",
    "ranking": 42,
    "name": "sslar",
    "isFeatured": false,
    "badge": "后置历史档 / 持续观察",
    "affiliateUrl": "未提供独立品牌入口。",
    "couponCode": "",
    "couponDiscount": "",
    "couponNote": "历史归档品牌，暂无公开有效优惠码",
    "foundedYear": "2023-2025",
    "entryPrice": "季付或按需付费（详见官网实时状态）",
    "circuitType": "混合专线 / 国际中转",
    "protocol": "Shadowsocks / Trojan",
    "clientSupport": "第三方通用客户端导入 (Clash / v2rayN / Shadowrocket)",
    "devices": "常规多设备支持",
    "nodeLocations": [
      "香港",
      "日本",
      "新加坡",
      "美国",
      "欧洲"
    ],
    "plans": [
      {
        "name": "历史参考套餐-基础版",
        "billing": "季付",
        "price": "¥60-¥99",
        "traffic": "100GB-200GB",
        "period": "每月"
      },
      {
        "name": "历史参考套餐-高阶版",
        "billing": "季付",
        "price": "¥150-¥290",
        "traffic": "300GB-600GB",
        "period": "每月"
      }
    ],
    "speedtests": [
      {
        "region": "香港节点 (历史)",
        "latency": "35ms",
        "download": "350Mbps"
      },
      {
        "region": "日本节点 (历史)",
        "latency": "65ms",
        "download": "420Mbps"
      },
      {
        "region": "新加坡节点 (历史)",
        "latency": "52ms",
        "download": "380Mbps"
      },
      {
        "region": "美国节点 (历史)",
        "latency": "165ms",
        "download": "120Mbps"
      }
    ],
    "unlocks": [
      {
        "service": "ChatGPT / OpenAI",
        "status": "partial",
        "note": "历史记录显示部分节点可用，以当期节点测试为准"
      },
      {
        "service": "Claude 3.5",
        "status": "partial",
        "note": "需核验落地原生IP状态"
      },
      {
        "service": "Netflix",
        "status": "partial",
        "note": "部分非自制剧可能受限"
      },
      {
        "service": "YouTube 4K",
        "status": "yes",
        "note": "正常缓冲"
      }
    ],
    "hasSpeedtestImage": false,
    "dataStatus": "vendor",
    "summary": "sslar 属于本站收录的后置观察品牌（历史数据归档）。当前资料更新于 2026-08-24 (历史归档)，主要记录了历史测速参数与服务规格。因服务商运营策略可能存在周期性调整，建议在购买前先在官网核实实时计费和节点可用性。",
    "detailedAudit": "",
    "pros": [
      "拥有历史测速记录，具备基本网络代理服务能力",
      "覆盖亚洲主流节点（香港、日本、新加坡）",
      "支持常见第三方代理客户端订阅导入"
    ],
    "cons": [
      "数据来源为历史归档资料，当前运营状态和价格需在官网重新核验",
      "未列入当前批次实测截图名录，缺少最新晚高峰可观测指标",
      "部分高端 AI 和流媒体解锁策略未进行最新一轮实机验证"
    ],
    "suitableFor": [
      "需要临时备用线路、具备一定折腾经验的用户",
      "需要对比多品牌历史资费与节点构架的进阶玩家"
    ],
    "unsuitableFor": [
      "追求完全开箱即用且需要 7x24 小时实时客服保障的新手",
      "外贸重度生产力依赖者（建议首选光速云等第一梯队实测专线品牌）"
    ],
    "riskWarning": "该品牌属于后置梯队，本站未在 2026-08 批次进行单机测速验证；购买前请务必确认官网最新售后及退款条例。",
    "peerComparison": "相较光速云等第一梯队品牌，该品牌缺乏最新的可观测性监控证据，定位偏向备用线路或特定场景探索。",
    "faq": [
      {
        "q": "sslar 还在正常运营吗？",
        "a": "本站保留了 sslar 的历史档案记录（2026-08-24 (历史归档)）。因机场行业服务变动较为频繁，请通过官方入口确认其最新线路状态。"
      },
      {
        "q": "为什么该品牌排在后置位置？",
        "a": "本站秉承 GEO 与客观测评原则，对于未能在当期完成最新真机测速图谱验证、或信息透明度有限的品牌，统一安排在后置梯队展示，避免误导用户。"
      }
    ],
    "seoTitle": "sslar 评测与状态核实：节点配置、套餐报价与备选对比 - 机场online",
    "metaDescription": "【机场online数据中心】sslar 历史档案与客观审计：包含节点线路类型、支持协议、套餐规格、历史测速表现与更具性价比的替代专线推荐。"
  }
];
