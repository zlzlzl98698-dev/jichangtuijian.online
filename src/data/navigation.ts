// Information Architecture: Level 1 -> Level 2 -> Level 3 Cluster Structure
// Brand: 机场online (jichangtuijian.online)

export interface ArticleTopic {
  title: string;
  slug: string;
  intent: string;
  keyword: string;
}

export interface Cluster {
  id: string;
  name: string;
  description: string;
  articles: ArticleTopic[];
}

export interface SubTopic {
  id: string;
  title: string;
  slug: string;
  description: string;
  clusters: Cluster[];
}

export interface NavCategory {
  id: string;
  title: string;
  slug: string;
  badge?: string;
  description: string;
  subTopics: SubTopic[];
}

export const navigationStructure: NavCategory[] = [
  {
    id: 'rankings',
    title: '机场推荐榜单',
    slug: '/rankings',
    badge: '2026权威',
    description: '基于全网实测延迟、吞吐带宽、晚高峰稳定性与抗封锁能力的多维度机场评选矩阵。',
    subTopics: [
      {
        id: 'budget-airports',
        title: '高性价比平价机场专题',
        slug: '/rankings/budget',
        description: '聚焦 5-15 元/月低门槛、学生党友好、轻量备用与高流量配比的优质机场推荐。',
        clusters: [
          {
            id: 'c1',
            name: '十元以下平价专线',
            description: '百兆带宽不缩水、月费低至5-10元的平民机场实测',
            articles: [
              { title: '2026年十元以内高性价比机场综合评测与选型指南', slug: '10-yuan-budget-airports-2026', intent: '商业选型', keyword: '十元以内机场推荐' },
              { title: '闪电鼠与大佬云深度对比：5.6元档IEPL专线到底能不能用', slug: 'shandianshu-vs-dalaoyun-5-yuan-comparison', intent: '横向对比', keyword: '5元机场评测' },
              { title: '微风网络年付7元套餐晚高峰速度与稳定性实测报告', slug: 'weifeng-network-speedtest-review', intent: '深度测速', keyword: '微风网络测速' },
              { title: '学生党高性价比机场避坑清单：拒绝按月跑路小作坊', slug: 'student-budget-vpn-guide', intent: '防坑指南', keyword: '便宜机场防跑路' },
              { title: '低价机场如何保证4K视频流畅：BGP中转与轻量专线解析', slug: 'cheap-vpn-4k-streaming-optimization', intent: '技术选型', keyword: '便宜机场看4K' },
              { title: '无忧链接6元轻量套餐评测：免订阅转换专属客户端体验', slug: 'wuyou-link-6-yuan-package-review', intent: '产品测评', keyword: '无忧链接怎么样' },
              { title: '便宜机场适合做主力节点吗？备用线路搭配双保险方案', slug: 'backup-airport-best-practice', intent: '架构指南', keyword: '备用机场推荐' },
              { title: '云界线与榴莲云资费审计：低价档位隐藏限制全公开', slug: 'yunjiexian-liulianyun-audit', intent: '条款审计', keyword: '低价机场套路' },
              { title: '平价机场晚高峰丢包率横向对比：测速仪真实数据解析', slug: 'budget-airports-peak-loss-comparison', intent: '数据对比', keyword: '便宜机场晚高峰丢包' },
              { title: '2026值得续费的五大百元级年付机场榜单与折扣码', slug: 'best-annual-budget-airports-2026', intent: '榜单选购', keyword: '百元年付机场推荐' }
            ]
          },
          {
            id: 'c2',
            name: '不限时流量与按量计费',
            description: '轻度用户、短期出差与永久不过期流量包专属评测',
            articles: [
              { title: '光速云147元永久247GB套餐评测：永不过期适不适合轻度用户', slug: 'guangsu-147-permanent-package-review', intent: '深度评测', keyword: '永久不过期机场流量包' },
              { title: '二猫云不限时套餐与普通月付对比：每GB真实成本核算', slug: 'ermao-permanent-traffic-cost-breakdown', intent: '成本核算', keyword: '不限时机场对比' },
              { title: '按量付费机场哪家强？适合偶尔查资料备用节点的平台汇总', slug: 'pay-as-you-go-airports-directory', intent: '场景推荐', keyword: '按量计费机场' },
              { title: '星岛梦永久不限时包实际连通率测试：放半年还会失效吗', slug: 'xingdaomeng-permanent-traffic-test', intent: '长期耐受性', keyword: '星岛梦不限时包' },
              { title: '一翻云不限时轻享版评测：原生住宅IP与大流量包解析', slug: 'yifan-non-expiring-package-review', intent: '产品测评', keyword: '一翻云不限时' },
              { title: '不限时流量机场的核心套路：倍率暗改与节点沉降防范', slug: 'traffic-multiplier-traps-guide', intent: '避坑指南', keyword: '机场倍率陷阱' },
              { title: '远程出差必备：低成本永久不过期应急节点配置清单', slug: 'remote-travel-emergency-vpn-kit', intent: '实用指南', keyword: '出差备用梯子' },
              { title: 'SOGO云不限时套餐全解析：15国节点全球漫游实测', slug: 'sogo-unlimited-time-package-review', intent: '全球节点', keyword: 'SOGO云不限时' },
              { title: '不限时流量与按月续费：普通上班族哪种买法更省钱', slug: 'permanent-vs-monthly-subscription-roi', intent: '消费建议', keyword: '机场买月付还是年付' },
              { title: '2026权威按量计费机场排行榜与节点倍率透明度榜', slug: 'top-payg-airports-2026', intent: '榜单推荐', keyword: '2026按量机场排行' }
            ]
          }
        ]
      },
      {
        id: 'dedicated-iplc',
        title: '顶级 IPLC/IEPL 专线机场专题',
        slug: '/rankings/dedicated',
        description: '追求毫秒级超低延迟、晚高峰 0 丢包、企业跨境办公与竞技游戏直连的旗舰专线服务。',
        clusters: [
          {
            id: 'c3',
            name: '全专线晚高峰防抖动',
            description: '不经公网骨干、全物理光缆直连、敏感时期稳如磐石的专线矩阵',
            articles: [
              { title: '光速云双专线架构深度拆解：IEPL与企业内网专线如何实现晚高峰0卡顿', slug: 'guangsu-dual-iepl-architecture-deep-dive', intent: '架构拆解', keyword: '光速云IEPL专线' },
              { title: '暮光加速BGP智能调度实测：五大热门节点晚高峰丢包与抖动曲线', slug: 'muguang-bgp-smart-routing-speedtest', intent: '可观测性', keyword: '暮光加速测评' },
              { title: 'Firefly IPLC专线六档套餐测评：原生IP与骨干直连权威表现', slug: 'firefly-iplc-dedicated-review-2026', intent: '深度评测', keyword: 'Firefly机场好用吗' },
              { title: '闪跃纯IPLC专线测评：24元150GB是否具备第一梯队统治力', slug: 'shanyue-pure-iplc-speed-stability-review', intent: '性能测试', keyword: '闪跃机场评测' },
              { title: 'IEPL与IPLC到底有什么区别？专线技术原理与用户感知对比', slug: 'iepl-vs-iplc-technical-comparison', intent: '科普教程', keyword: 'IEPL和IPLC区别' },
              { title: 'U1S1声称的2000Mbps晚高峰不限速是真的吗？32线程压测实录', slug: 'u1s1-2000mbps-stress-test-report', intent: '极限压力测试', keyword: 'U1S1机场测速' },
              { title: '企业跨境办公专线选型指南：合规、审计与多用户并发管理', slug: 'enterprise-cross-border-vpn-guide', intent: '企业选型', keyword: '企业级翻墙专线' },
              { title: '全球云专线中转2Gbps带宽实测：60+节点全覆盖表现评估', slug: 'quanqiu-cloud-2gbps-transit-audit', intent: '技术审计', keyword: '全球云机场怎么样' },
              { title: '专线机场遇到光缆故障怎么办？双入口容灾与自动切线机制', slug: 'dedicated-cable-disaster-recovery-mechanism', intent: '容灾机制', keyword: '机场节点熔断恢复' },
              { title: '2026顶级稳定专线机场十强排行榜：从延迟到服务全维评分', slug: 'top-10-dedicated-iplc-airports-2026', intent: '行业总榜', keyword: '2026稳定机场排行榜' }
            ]
          },
          {
            id: 'c4',
            name: '跨境低延迟游戏加速',
            description: '亚太近端直连、FPS低Ping值、NAT FullCone与主机加速实践',
            articles: [
              { title: '机场节点如何为Steam/Apex/瓦罗兰特加速：FullCone与UDP支持实测', slug: 'game-acceleration-airport-fullcone-test', intent: '游戏加速', keyword: '机场打游戏低延迟' },
              { title: '香港IEPL专线延迟低于25ms的机场实测名单与配置技巧', slug: 'hongkong-iepl-sub-25ms-airports', intent: '低延迟选型', keyword: '香港低延迟机场' },
              { title: 'Switch与PS5主机如何通过软路由挂载机场专线享受满速下载', slug: 'console-gaming-openclash-acceleration', intent: '主机教程', keyword: '软路由主机加速' },
              { title: '日本东京游戏专线评测：从大陆电信/联通直连Square Enix机房体验', slug: 'japan-gaming-dedicated-node-benchmark', intent: '线路测试', keyword: '日本游戏节点推荐' },
              { title: '新加坡专线与东南亚服直连效果：MOBA与吃鸡类游戏丢包率对比', slug: 'singapore-dedicated-gaming-benchmark', intent: '地区评测', keyword: '新加坡专线节点' },
              { title: 'Shadowsocks与VLESS用于游戏代理的优劣势全面剖析', slug: 'shadowsocks-vs-vless-gaming-latency', intent: '协议对比', keyword: '游戏代理协议选型' },
              { title: 'Clash Verge Rev游戏模式TUN配置与进程精确分流保姆级教程', slug: 'clash-verge-rev-tun-gaming-setup', intent: '客户端教程', keyword: 'Clash Verge游戏分流' },
              { title: '防断连机制：专线机场的心跳探测与TCP Keepalive深度调优', slug: 'tcp-keepalive-optimization-anti-disconnect', intent: '网络调优', keyword: '机场游戏防掉线' },
              { title: '美服外服高延迟补救方案：洛杉矶CN2 GIA与9929线路价值几何', slug: 'us-gaming-cn2-gia-9929-review', intent: '长途专线', keyword: '美服低延迟节点' },
              { title: '2026电竞玩家专属低延迟专线机场横向天梯榜', slug: 'esports-gaming-airports-tier-list-2026', intent: '游戏榜单', keyword: '游戏机场推荐2026' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'reviews',
    title: '42强品牌评测',
    slug: '/brands',
    badge: '实测证据',
    description: '收录 42 家国内外主流机场的独立档案、套餐价格、协议类型与真机测速图谱。',
    subTopics: [
      {
        id: 'top-tier-reviews',
        title: '核心第一梯队与主推旗舰',
        slug: '/brands#top10',
        description: '光速云（主推首选）、暮光、飞猫、微风、大佬云、星岛梦、二猫云等核心梯队万字权威测评。',
        clusters: [
          {
            id: 'c5',
            name: '主推光速云全维解构',
            description: '运营时间长、双专线架构、全套餐覆盖的综合标杆深度档案',
            articles: [
              { title: '【深度长文】光速云全网最详测评：2020老牌底蕴与2026双专线实测万字报告', slug: 'guangsu-comprehensive-review-2026', intent: '全网首推评测', keyword: '光速云深度评测' },
              { title: '光速云全套餐选购建议：轻量版99/年与极速版25/月究竟该怎么挑', slug: 'guangsu-plans-buying-guide', intent: '选型指南', keyword: '光速云套餐怎么选' },
              { title: '光速云真实晚高峰测速全记录：香港529Mbps与新加坡387Mbps实操跑分', slug: 'guangsu-peak-hours-speedtest-log', intent: '数据证据', keyword: '光速云测速表现' },
              { title: '光速云自研客户端使用体验：相比通用Clash有何优势与功能亮点', slug: 'guangsu-custom-client-walkthrough', intent: '客户端测评', keyword: '光速云客户端下载' },
              { title: '外贸与跨境电商为何首选光速云：TikTok直播与独立站后台原生IP实测', slug: 'guangsu-cross-border-ecommerce-case-study', intent: '商业落地', keyword: '光速云跨境电商' },
              { title: '光速云优惠码【AMM】使用方法与折上折节省技巧', slug: 'guangsu-coupon-amm-discount-guide', intent: '优惠获取', keyword: '光速云优惠码' },
              { title: '光速云企业级内网专线抗敏感期封锁机理深剖', slug: 'guangsu-anti-censorship-technology', intent: '技术探秘', keyword: '光速云防封锁' },
              { title: '光速云流媒体全家桶解锁实测：从Netflix 4K到Disney+高码率无卡顿', slug: 'guangsu-netflix-disney-unlock-test', intent: '解锁测试', keyword: '光速云解锁Netflix' },
              { title: '光速云退款政策与售后服务真实体验：7x24小时响应时效审计', slug: 'guangsu-customer-support-and-refund-policy', intent: '服务审计', keyword: '光速云客服响应' },
              { title: '为什么我们将光速云评为2026年度综合最佳推荐机场', slug: 'why-guangsu-is-ranked-number-one', intent: '编辑部评价', keyword: '2026最好用的机场' }
            ]
          },
          {
            id: 'c6',
            name: '十强核心品牌横向对抗',
            description: '飞猫云、微风网络、星岛梦、唯兔云、Firefly等代表性品牌客观测评',
            articles: [
              { title: '飞猫云实测评测：免配订阅专属客户端体验与学生版84元性价比', slug: 'feimao-cloud-in-depth-review', intent: '品牌评测', keyword: '飞猫云评测' },
              { title: '微风网络真机测速图谱解析：清风年付137元专线节点表现', slug: 'weifeng-network-verified-speedtest', intent: '品牌评测', keyword: '微风网络测评' },
              { title: '星岛梦Trojan专线评测：1倍率不限设备与东南亚多节点优势', slug: 'xingdaomeng-trojan-review', intent: '品牌评测', keyword: '星岛梦机场怎么样' },
              { title: '二猫云白猫套餐月付20元评测：海外技术团队与长期稳定保障', slug: 'ermao-cloud-white-cat-package-review', intent: '品牌评测', keyword: '二猫云评测' },
              { title: '唯兔云IPLC专线深度评测：14.9元节假日限时款与原生节点能力', slug: 'weitu-cloud-iplc-deep-review', intent: '品牌评测', keyword: '唯兔云怎么样' },
              { title: 'Firefly机场8元起步价背后：VLESS协议与专属客户端优劣势', slug: 'firefly-vless-client-performance', intent: '品牌评测', keyword: 'Firefly机场评测' },
              { title: '宇宙云三网BGP智能优化与VLESS协议实测体验', slug: 'yuzhou-cloud-bgp-vless-review', intent: '品牌评测', keyword: '宇宙云好用吗' },
              { title: 'U1S1新晋专线黑马测评：20元120GB套餐长期使用观察报告', slug: 'u1s1-vpn-long-term-reliability-report', intent: '品牌评测', keyword: 'U1S1机场评测' },
              { title: '灵猫网络中转优化线路测评：专属客户端与7.1元起步价实操', slug: 'lingmao-network-performance-audit', intent: '品牌评测', keyword: '灵猫网络怎么样' },
              { title: '2026前十强机场全维度横评天梯表：延迟、带宽、价格与协议总览', slug: 'top-10-airports-head-to-head-comparison', intent: '聚合横评', keyword: '十大机场推荐对比' }
            ]
          }
        ]
      },
      {
        id: 'secondary-tail-reviews',
        title: '特色品牌与历史后置档案',
        slug: '/brands#archive',
        description: '极连云、光年梯、一翻云、SOGO云、速界等专线品牌及 WgetCloud、白月光等14家后置观察档案。',
        clusters: [
          {
            id: 'c7',
            name: '新锐专线与垂直领域品牌',
            description: '极连云、光年梯、速界（主打AI）、一翻云、闪跃等中坚梯队测评',
            articles: [
              { title: '速界25元套餐主打AI工具测评：ChatGPT与Claude专用节点实测', slug: 'sujie-ai-dedicated-airport-review', intent: '场景评测', keyword: '速界机场怎么样' },
              { title: '极连云与光年梯18元档正面较量：100GB与110GB的微小差距谁更稳', slug: 'jilian-vs-guangnian-18-yuan-shootout', intent: '竞品对比', keyword: '极连云对比光年梯' },
              { title: '一翻云全节点IEPL住宅IP实测：三协议自由切换与2Gbps体验', slug: 'yifan-residential-ip-iepl-review', intent: '技术测评', keyword: '一翻云怎么样' },
              { title: 'SOGO云15国节点覆盖深度实测：全自研客户端海外漫游体验', slug: 'sogo-cloud-15-regions-coverage-audit', intent: '节点测评', keyword: 'SOGO云好用吗' },
              { title: '可信云坦诚度审计：公开标注流媒体缺乏数据的品牌到底靠不靠谱', slug: 'kexin-cloud-transparency-review', intent: '客观评价', keyword: '可信云评测' },
              { title: '神行加速14元120GB套餐实测：低调小众专线的网络表现', slug: 'shenxing-acceleration-review', intent: '小众挖掘', keyword: '神行加速怎么样' },
              { title: '环球梯与云界线链接规范与资费审查：新手购买必看细节', slug: 'huanqiuti-yunjiexian-onboarding-precautions', intent: '购买提醒', keyword: '环球梯好用吗' },
              { title: '隐形人机场60+节点深度梳理：承诺1小时修复线路是否兑现', slug: 'yinxingren-invisible-service-sla-audit', intent: '服务履约', keyword: '隐形人机场评测' },
              { title: '梯子云全平台一键客户端测试：兼容通用订阅的双模式运作', slug: 'tiziyun-ladder-dual-mode-review', intent: '产品测评', keyword: '梯子云好不好' },
              { title: '中坚梯队机场选型策略：如何在小众品牌中挖掘稳定低价宝藏', slug: 'hidden-gem-budget-airports-guide', intent: '方法论', keyword: '小众稳定机场推荐' }
            ]
          },
          {
            id: 'c8',
            name: '14家历史后置品牌数据审计',
            description: 'WgetCloud、白月光、FlyingBird、CyberGuard等历史归档与替代推荐',
            articles: [
              { title: 'WgetCloud历史档案与现状梳理：59节点测试记录与当期套餐对照', slug: 'wgetcloud-historical-archive-and-status', intent: '历史档案', keyword: 'WgetCloud怎么样' },
              { title: '白月光机场108节点历史数据复盘：季付66元套餐当前价值几何', slug: 'baiyueguang-108-nodes-historical-review', intent: '档案审计', keyword: '白月光机场评测' },
              { title: 'FlyingBird历史运营表现回顾：高带宽专线的演进与备选平替', slug: 'flyingbird-history-and-alternatives', intent: '平替推荐', keyword: 'FlyingBird好用吗' },
              { title: 'CyberGuard机场规格回顾：海外团队主理线路的适用人群', slug: 'cyberguard-specifications-review', intent: '历史档案', keyword: 'CyberGuard机场' },
              { title: '龙猫云与FATCAT历史资费对比：中低端历史品牌的生存周期', slug: 'longmaoyun-fatcat-lifespan-analysis', intent: '行业观察', keyword: '龙猫云怎么样' },
              { title: 'TNTCloud与青云梯档案审计：历史测速数据为何不可直接对比实时体验', slug: 'tntcloud-qingyunti-data-disclaimer', intent: '免责声明', keyword: '青云梯好用吗' },
              { title: '山水云与灵动云服务特点归纳：备用轻量梯子的历史定位', slug: 'shanshuiyun-lingdongyun-profile', intent: '归档整理', keyword: '山水云机场' },
              { title: '浪网与EdgeNova技术记录：协议更迭与现代VLESS生态的差距', slug: 'langwang-edgenova-tech-gap-analysis', intent: '技术演进', keyword: 'EdgeNova机场' },
              { title: '萤火虫与sslar归档评析：为什么历史品牌应放在后置梯队展示', slug: 'yinghuochong-sslar-why-ranked-tail', intent: '排序逻辑', keyword: '萤火虫机场' },
              { title: '老旧机场停运与跑路征兆速查表：五大信号助你及时止损转线', slug: 'airport-exit-scam-warning-signs-checklist', intent: '风险预警', keyword: '机场跑路前兆' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'scenarios',
    title: '专用场景加速',
    slug: '/scenarios',
    badge: '业务赋能',
    description: '针对 ChatGPT 4o、Claude 3.5、TikTok 跨境电商、Netflix 4K 以及远程外贸的专用网络优化方案。',
    subTopics: [
      {
        id: 'ai-productivity',
        title: 'AI 大模型深度访问专题',
        slug: '/scenarios/ai',
        description: '攻克 OpenAI 1020 报错、Claude 封号风控、Midjourney 极速生图与 API 高频并发调用。',
        clusters: [
          {
            id: 'c9',
            name: 'ChatGPT 与 OpenAI 专线',
            description: '原生干净 IP、拒绝数据中心黑名单、解决 Access Denied 报错',
            articles: [
              { title: '2026年访问 ChatGPT 稳定不封号的机场节点选型终极指南', slug: 'chatgpt-anti-ban-airport-selection-guide', intent: '场景选型', keyword: 'ChatGPT专用机场' },
              { title: '解决 OpenAI 报错“Sorry, you have been blocked”的节点纯净度排查法', slug: 'how-to-fix-chatgpt-ip-blocked-error', intent: '故障排除', keyword: 'ChatGPT已被屏蔽解决' },
              { title: 'ChatGPT 4o 高频语音模式对网络延迟和抖动的高灵敏度实测', slug: 'chatgpt-voice-mode-latency-jitter-requirements', intent: '前沿测试', keyword: 'ChatGPT语音模式卡顿' },
              { title: '速界与光速云的 AI 专用节点实测：对比 OpenAI 识别率与响应耗时', slug: 'sujie-vs-guangsu-ai-performance-benchmarks', intent: '横向对比', keyword: '哪个机场上ChatGPT最快' },
              { title: '为什么数据中心机房 IP 频频遭封？原生住宅 IP 在 AI 时代的核心价值', slug: 'datacenter-vs-residential-ip-ai-scraping', intent: '技术原理', keyword: '原生住宅IP ChatGPT' },
              { title: 'OpenAI API 开发者专线部署：如何在本地与服务器配置低延迟代理', slug: 'openai-api-proxy-developer-setup-tutorial', intent: '开发教程', keyword: 'OpenAI API代理配置' },
              { title: 'ChatGPT 移动端 App（iOS/Android）连接超时与证书错误的解决步骤', slug: 'chatgpt-mobile-app-connection-timeout-fix', intent: '移动端排障', keyword: 'ChatGPT手机版连不上' },
              { title: 'Sora 视频生成与大文件素材上传对机场上行带宽的严苛挑战', slug: 'sora-video-generation-upload-bandwidth-test', intent: '多模态实测', keyword: 'Sora加速节点' },
              { title: '香港节点究竟能不能用 ChatGPT？解锁状态与跨区域重定向真相', slug: 'can-hongkong-nodes-access-chatgpt-truth', intent: '常见误区', keyword: '香港节点用ChatGPT' },
              { title: '2026最佳 ChatGPT/OpenAI 生产力加速机场排行榜', slug: 'top-chatgpt-airports-rankings-2026', intent: '场景榜单', keyword: 'ChatGPT好用梯子' }
            ]
          },
          {
            id: 'c10',
            name: 'Claude 3.5 与多模态 AI 赋能',
            description: '应对 Anthropic 严苛地理风控、Perplexity 检索以及 Gemini 区域限制',
            articles: [
              { title: 'Claude 3.5 Sonnet 注册与使用节点防封指南：为什么你的账号总被封', slug: 'claude-anti-ban-node-optimization-guide', intent: '防封实操', keyword: 'Claude节点推荐' },
              { title: '解决 Claude 提示“App not available in your country”的 DNS 修复方案', slug: 'fix-claude-region-unsupported-dns-leak', intent: '故障修复', keyword: 'Claude地区不受支持' },
              { title: 'Google Gemini Advanced 访问失败深度排障：节点地理位置判定机制', slug: 'google-gemini-advanced-proxy-troubleshooting', intent: '排错指南', keyword: 'Gemini节点不可用' },
              { title: 'Perplexity Pro 实时联网检索加速：避免 Cloudflare 5秒盾拦截的节点配置', slug: 'perplexity-pro-cloudflare-turnstile-bypass', intent: '体验优化', keyword: 'Perplexity加速' },
              { title: 'Midjourney 与 Discord 图片极速加载：长连接保活与 CDN 节点优选', slug: 'midjourney-discord-cdn-proxy-optimization', intent: '画师专线', keyword: 'Midjourney加载慢' },
              { title: 'Cursor / Copilot 代码补全卡顿解决方案：开发环境 TUN 全局接管教学', slug: 'cursor-copilot-tun-latency-optimization', intent: '程序员专线', keyword: 'Cursor代码补全卡顿' },
              { title: '海外 AI 聚合平台（Poe / LibreChat）自建中转与机场协议融合方案', slug: 'self-hosted-ai-gateway-airport-integration', intent: '进阶搭建', keyword: '自建AI镜像代理' },
              { title: 'Claude 网页端与客户端 TLS 指纹识别防御：避免特征暴露的协议选择', slug: 'claude-ja3-tls-fingerprint-defense', intent: '极客深度', keyword: 'TLS指纹防关联' },
              { title: '多 AI 平台并发分流规则写法：Clash Verge Rev 智能路由实战', slug: 'clash-verge-ai-smart-routing-ruleset', intent: '规则编写', keyword: 'Clash分流AI规则' },
              { title: '2026专业 AI 创作者首选海外模型加速服务商天梯榜', slug: 'top-ai-creator-proxy-tier-list-2026', intent: '场景排行', keyword: 'AI工具机场排行榜' }
            ]
          }
        ]
      },
      {
        id: 'ecommerce-streaming',
        title: '跨境出海与 4K 流媒体专题',
        slug: '/scenarios/streaming',
        description: '保障 TikTok 独立开播与达人带货 0 播放破局，Netflix/Disney+ 跨区全剧集无障碍秒开。',
        clusters: [
          {
            id: 'c11',
            name: 'TikTok 跨境电商与社媒出海',
            description: '独享原生纯净住宅 IP、东南亚与美区直播推流、Shopify 运营',
            articles: [
              { title: 'TikTok 运营节点怎么挑？防止视频 0 播放与风控限流的核心网络指标', slug: 'tiktok-zero-views-node-selection-guide', intent: '跨境出海', keyword: 'TikTok节点推荐' },
              { title: 'TikTok 美区带货与东南亚直播推流对机场上行带宽的硬性要求', slug: 'tiktok-live-streaming-bandwidth-and-stability', intent: '直播网络', keyword: 'TikTok直播推流机场' },
              { title: '光速云定制版独立原生IP在跨境电商中的实战效果：账户防关联测试', slug: 'guangsu-custom-dedicated-ip-ecommerce-test', intent: '商业落地', keyword: '跨境防关联独立IP' },
              { title: '无忧链接针对电商团队的多设备直连方案：免折腾客户端多人共享实测', slug: 'wuyou-ecommerce-multi-device-case-study', intent: '团队方案', keyword: '跨境电商团队机场' },
              { title: '海外社媒（Instagram / Twitter / Facebook）账号防封的网络环境搭建规范', slug: 'social-media-anti-ban-network-hygiene', intent: '运营规范', keyword: '海外社媒防封节点' },
              { title: 'Shopify 与 Amazon 卖家后台登录安全：固定静态 IP 与动态中转的区别', slug: 'shopify-amazon-seller-login-static-ip', intent: '店铺安全', keyword: '亚马逊卖家登录节点' },
              { title: '如何用手机搭建完美的 TikTok 原生海外运行环境（软路由 + 定位模拟）', slug: 'setup-phone-for-tiktok-with-openclash', intent: '保姆教程', keyword: '手机拔卡用TikTok教程' },
              { title: '海外短视频多账号矩阵运营的网络拓扑设计：隔离与成本平衡', slug: 'tiktok-matrix-multi-account-network-topology', intent: '架构设计', keyword: 'TikTok矩阵网络架构' },
              { title: 'TikTok 直播发生画面撕裂、掉帧与音画不同步的排障全流程', slug: 'troubleshoot-tiktok-live-drops-and-jitter', intent: '故障排除', keyword: 'TikTok直播卡顿怎么办' },
              { title: '2026跨境电商外贸出海专用机场与网络解决方案 Top 榜', slug: 'top-cross-border-ecommerce-airports-2026', intent: '行业榜单', keyword: '跨境电商机场推荐' }
            ]
          },
          {
            id: 'c12',
            name: 'Netflix / Disney+ / YouTube 4K 影音',
            description: '非自制剧全解锁、大屏 Apple TV/电视盒子观看、跨区订阅省钱实战',
            articles: [
              { title: '2026年 Netflix 奈飞跨区解锁机场选型指南：告别“只能看自制剧”困境', slug: 'netflix-full-unlock-airport-selection-guide', intent: '流媒体选型', keyword: 'Netflix全解锁机场' },
              { title: 'Disney+ 报错无法播放或字幕乱码？节点跨区识别机制与修复步骤', slug: 'disney-plus-playback-error-fix-tutorial', intent: '排错教程', keyword: 'Disney+无法播放解决' },
              { title: 'YouTube 8K 60fps 极限画质测速：连接速度必须达到多少才不卡顿', slug: 'youtube-8k-video-speed-requirement-benchmark', intent: '极限跑分', keyword: 'YouTube 4K测速跑分' },
              { title: 'Apple TV 挂载机场节点四种方案对比：Surge / Loon / 旁路由 / Surge Pointe', slug: 'apple-tv-vpn-proxy-setup-four-methods', intent: '设备教程', keyword: 'Apple TV翻墙教程' },
              { title: '国内智能电视（索尼/小米）直接安装客户端播放海外流媒体极简指南', slug: 'smart-tv-direct-install-clash-streaming', intent: '大屏观影', keyword: '电视装Clash看奈飞' },
              { title: '流媒体合租发车防翻车手册：土耳其/埃及区账号绑定与节点归属地规则', slug: 'streaming-account-sharing-anti-fraud-guide', intent: '省钱攻略', keyword: 'Netflix合租节点要求' },
              { title: 'HBO Max (Max) 与 Hulu 严苛支付与 IP 验证绕过实战', slug: 'hbo-max-hulu-us-payment-proxy-workaround', intent: '冷门攻坚', keyword: 'HBO Max看不了' },
              { title: 'Spotify 与 Apple Music 跨区无损音乐曲库切换与节点分流设置', slug: 'spotify-apple-music-lossless-proxy-routing', intent: '音乐发烧', keyword: 'Spotify换区节点' },
              { title: '机场节点解锁能力的“视节点而定”到底代表什么？测试工具真伪辨析', slug: 'decoding-region-restriction-check-scripts', intent: '工具揭秘', keyword: '流媒体检测脚本怎么看' },
              { title: '2026年终极流媒体 4K HDR 秒开机场横评体验榜', slug: 'best-streaming-airports-tier-list-2026', intent: '影音榜单', keyword: '流媒体机场推荐2026' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'clients',
    title: '客户端与教程',
    slug: '/clients',
    badge: '全平台',
    description: '涵盖 Windows、macOS、iOS、Android、Linux 及 OpenWrt 软路由的官方客户端下载与安装配置全解。',
    subTopics: [
      {
        id: 'desktop-clients',
        title: '桌面端应用（Windows / Mac / Linux）',
        slug: '/clients/desktop',
        description: 'Clash Verge Rev、v2rayN、Surge Mac、sing-box 桌面核心深度解析与一键配置。',
        clusters: [
          {
            id: 'c13',
            name: 'Clash Verge Rev 终极指南',
            description: 'Mihomo 现代内核、TUN 系统全局模式、订阅转换与内存调优',
            articles: [
              { title: '【2026首选】Clash Verge Rev Windows 安装与保姆级配置教程', slug: 'clash-verge-rev-windows-ultimate-guide', intent: '软件教程', keyword: 'Clash Verge Rev下载' },
              { title: 'Clash Verge Rev macOS 版本选型：M系列芯片 ARM64 与 Intel 架构区别', slug: 'clash-verge-rev-macos-apple-silicon-guide', intent: 'Mac教程', keyword: 'Clash Verge Mac安装' },
              { title: 'TUN 模式究竟如何彻底接管 Windows 终端、游戏与全局网络流量', slug: 'clash-verge-rev-tun-mode-explained', intent: '原理解析', keyword: 'Clash TUN模式怎么开' },
              { title: 'Clash Verge Rev 提示“内核启动失败”或端口被占用的九种应急解决方法', slug: 'clash-verge-rev-kernel-launch-failed-troubleshooting', intent: '排错速查', keyword: 'Clash内核启动失败' },
              { title: '如何在 Clash Verge Rev 中添加第三方机场订阅链接与自动定时更新', slug: 'how-to-import-subscription-clash-verge', intent: '基础入门', keyword: 'Clash怎么导入订阅' },
              { title: 'Clash 规则覆写（Override）与扩展脚本编写：自定义网站分流实战', slug: 'clash-verge-rev-override-script-guide', intent: '高级玩家', keyword: 'Clash规则覆写' },
              { title: '从老旧 Clash for Windows 无缝迁移至 Clash Verge Rev 完整指南', slug: 'migrate-from-cfw-to-clash-verge-rev', intent: '迁移升级', keyword: 'CFW替代品' },
              { title: 'Clash Verge Rev 性能优化指南：降低内存占用与 CPU 占用技巧', slug: 'clash-verge-rev-performance-memory-tuning', intent: '系统调优', keyword: 'Clash内存占用大' },
              { title: 'Linux Ubuntu / Arch 桌面安装 Clash Verge Rev AppImage 实操', slug: 'clash-verge-rev-linux-installation-guide', intent: 'Linux实操', keyword: 'Linux安装Clash Verge' },
              { title: '2026主流 Windows/Mac 代理客户端优缺点对比与选型天平', slug: 'best-desktop-proxy-clients-comparison-2026', intent: '工具对比', keyword: '电脑翻墙软件哪个好' }
            ]
          },
          {
            id: 'c14',
            name: 'v2rayN 与 sing-box 桌面生态',
            description: '多协议全能玩家首选，Xray 核心升级，sing-box 极简路由配置',
            articles: [
              { title: 'v2rayN 7.x 最新版从零上手：核心下载、节点批量导入与测速教学', slug: 'v2rayn-latest-version-beginner-tutorial', intent: '软件教程', keyword: 'v2rayN下载与使用' },
              { title: 'v2rayN 中 Xray 核心与 sing-box 核心切换：哪种协议解析效率更高', slug: 'v2rayn-xray-vs-sing-box-core-comparison', intent: '核心对比', keyword: 'v2rayN内核切换' },
              { title: 'v2rayN 路由规则高级配置：大陆白名单、绕过局域网与广告拦截', slug: 'v2rayn-routing-rules-bypass-lan-mainland', intent: '规则定制', keyword: 'v2rayN分流规则' },
              { title: 'Surge Mac 高级网络调试与规则体系深度测评：到底值不值 50 美元', slug: 'surge-mac-review-and-value-proposition', intent: '高端测评', keyword: 'Surge Mac怎么样' },
              { title: 'sing-box for Desktop 官方客户端轻量化部署与极客命令行体验', slug: 'sing-box-desktop-lightweight-deployment', intent: '极客实践', keyword: 'sing-box桌面版' },
              { title: 'v2rayA 在 Linux 无头服务器与工作站上的 Web 管理界面搭建教程', slug: 'v2raya-linux-headless-server-web-ui-setup', intent: '服务器运维', keyword: 'v2rayA安装教程' },
              { title: 'Windows 代理引起的系统时间不同步、UWP 应用无法联网修复方案', slug: 'fix-windows-uwp-proxy-loopback-isolation', intent: '系统级排错', keyword: '代理导致UWP无法联网' },
              { title: '桌面端专属客户端（免配订阅）与第三方开源客户端安全性全面权衡', slug: 'custom-dedicated-app-vs-open-source-clients-security', intent: '安全评估', keyword: '机场专属客户端安全吗' },
              { title: '如何为 Git / pip / npm / Docker 配置终端专属代理加速拉取代码', slug: 'terminal-git-pip-npm-docker-proxy-setup', intent: '开发者必修', keyword: '终端设置代理教程' },
              { title: '2026开发者必备桌面网络代理利器排行榜与综合评分', slug: 'top-developer-proxy-tools-2026', intent: '开发者榜单', keyword: '程序员代理工具推荐' }
            ]
          }
        ]
      },
      {
        id: 'mobile-router',
        title: '移动端与软路由（iOS / Android / OpenWrt）',
        slug: '/clients/mobile',
        description: '小火箭 Shadowrocket、Stash、v2rayNG 以及 OpenClash、PassWall2 路由器透明代理全套指南。',
        clusters: [
          {
            id: 'c15',
            name: 'Shadowrocket（小火箭）与 iOS 生态',
            description: '美区 Apple ID 购买、节点扫码、HTTPS 解密与策略组分流',
            articles: [
              { title: '【2026必备】Shadowrocket（小火箭）iOS 购买、安装与配置保姆级全解', slug: 'shadowrocket-ios-ultimate-setup-guide', intent: '苹果新手', keyword: '小火箭下载安装教程' },
              { title: '没有外区 Apple ID 怎么办？正规注册美区账号与礼品卡充值完整步骤', slug: 'how-to-register-us-apple-id-and-buy-apps', intent: '账号注册', keyword: '美区Apple ID注册' },
              { title: 'Shadowrocket 常见四种路由模式：配置分流、代理全局、直连与场景', slug: 'shadowrocket-routing-modes-explained', intent: '模式解析', keyword: '小火箭配置规则推荐' },
              { title: 'Stash 与 Quantumult X（圈X）对比：在 iOS 上谁是 Clash 的最佳平替', slug: 'stash-vs-quantumult-x-ios-comparison', intent: '软件对比', keyword: 'Stash和圈X哪个好' },
              { title: 'iOS 端如何利用小火箭实现家庭 Wi-Fi 与移动蜂窝网络自动无感切节点', slug: 'shadowrocket-wifi-cellular-auto-switching-automation', intent: '自动化技巧', keyword: '小火箭自动化切节点' },
              { title: '小火箭测速超时但实际能上网？ICMP 与 TCP 握手测速原理释疑', slug: 'shadowrocket-speedtest-timeout-explanation', intent: '原理解惑', keyword: '小火箭测速全部超时' },
              { title: '免费开源跨平台工具 Karing 在 iOS 端的安装体验与订阅兼容性', slug: 'karing-ios-free-client-review', intent: '免费新星', keyword: 'Karing客户端教程' },
              { title: 'iOS 系统电量消耗审计：常驻代理 VPN 对 iPhone 续航的真实影响测试', slug: 'ios-vpn-battery-drain-stress-test', intent: '功耗实测', keyword: '小火箭耗电严重吗' },
              { title: '小火箭证书安装与 HTTPS 抓包配置安全注意事项：防中间人劫持', slug: 'shadowrocket-mitm-cert-security-warning', intent: '安全警示', keyword: '小火箭证书安装风险' },
              { title: '2026年 iOS 平台最值得下载的五大优质网络代理工具总评', slug: 'best-ios-proxy-apps-ranked-2026', intent: 'iOS总榜', keyword: 'iPhone翻墙软件推荐' }
            ]
          },
          {
            id: 'c16',
            name: 'OpenWrt 软路由与家庭全屋透明代理',
            description: '全屋智能家电、Apple TV、PS5 无感科学上网，双机热备与 DNS 防污染',
            articles: [
              { title: 'OpenClash 软路由插件从零搭建：内核安装、分流设置与全屋科学上网', slug: 'openclash-openwrt-full-installation-guide', intent: '软路由必修', keyword: 'OpenClash安装教程' },
              { title: '软路由 DNS 污染防御终极方案：MosDNS + OpenClash 完美防漏防劫持', slug: 'mosdns-openclash-dns-leak-prevention', intent: 'DNS抗污染', keyword: '软路由DNS防污染' },
              { title: 'PassWall 2 智能负载均衡与故障无感切线实战：单线多拨与双机场聚合', slug: 'passwall2-load-balancing-failover-tutorial', intent: '进阶实操', keyword: 'PassWall2负载均衡' },
              { title: '新一代轻量路由器插件 Nikki 评测：要求 OpenWrt 24.10+ 的性能表现', slug: 'nikki-openwrt-24-lightweight-client-review', intent: '前沿探索', keyword: 'Nikki软路由插件' },
              { title: '家庭千兆宽带软路由硬件选型指南：N100 / J4125 / R4S 跑满专线实测', slug: 'best-soft-router-hardware-n100-j4125-r4s', intent: '硬件选购', keyword: '软路由硬件推荐' },
              { title: '软路由旁路由（Gateway）模式单网口旁挂网络回环与延迟解决秘籍', slug: 'bypass-gateway-network-loop-latency-fix', intent: '网络排障', keyword: '旁路由设置教程' },
              { title: '家庭游戏机（Switch/PS5）与智能家居在软路由中的设备独立指定节点', slug: 'assign-static-ip-and-nodes-for-smart-home-devices', intent: '智能分流', keyword: '软路由指定设备节点' },
              { title: 'HomeProxy 基于原生 sing-box 在 OpenWrt 上的超高性能透明转发实操', slug: 'homeproxy-sing-box-openwrt-setup', intent: '新兴架构', keyword: 'HomeProxy配置教程' },
              { title: '软路由运行机场节点导致的国内网银、微信小程序异地登录风控防范', slug: 'prevent-bank-app-ip-risk-with-router-rules', intent: '风控防范', keyword: '软路由导致微信异常' },
              { title: '2026家庭全屋智能科学上网网络拓扑最佳实践架构设计方案', slug: 'home-wide-transparent-proxy-architecture-2026', intent: '方案蓝图', keyword: '全屋科学上网方案' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tech',
    title: '协议与网络实验室',
    slug: '/tech',
    badge: '技术基石',
    description: '深入 VLESS、Reality、Trojan、Hysteria 2 底层传输协议，揭秘 GFW 封锁对抗与可观测监控。',
    subTopics: [
      {
        id: 'protocols-security',
        title: '传输协议与抗封锁技术专题',
        slug: '/tech/protocols',
        description: '剖析底层加密算法、TLS 假面、防重放攻击与基于 UDP 的暴力抗拥塞原理。',
        clusters: [
          {
            id: 'c17',
            name: '现代主流协议硬核剖析',
            description: 'VLESS-Reality、Trojan、Shadowsocks 与 Hysteria 2 的安全性能天平',
            articles: [
              { title: '为什么 2026 年几乎所有高端机场都转向了 VLESS 协议？技术优势全览', slug: 'why-premium-airports-adopt-vless-protocol', intent: '协议演进', keyword: 'VLESS协议优势' },
              { title: 'VLESS-Reality 伪装原理拆解：如何借用真实网站安全证书逃避 GFW 探测', slug: 'vless-reality-tls-camouflage-principles-explained', intent: '安全深度', keyword: 'Reality协议原理' },
              { title: 'Hysteria 2（歇斯底里）在劣质网络中的起死回生实战：暴力 UDP 到底有多快', slug: 'hysteria-2-udp-congestion-control-stress-test', intent: '极限提速', keyword: 'Hysteria 2测速' },
              { title: 'Trojan 协议历经多年为何依然坚挺：简单即美与原生 HTTPS 流量伪装', slug: 'trojan-protocol-longevity-and-traffic-disguise', intent: '协议经典', keyword: 'Trojan协议安全吗' },
              { title: 'Shadowsocks (SS) 在当下的生存状态：从过时协议到专线物理内网专属', slug: 'shadowsocks-modern-role-in-dedicated-iepl-networks', intent: '专线专用', keyword: 'Shadowsocks现在还能用吗' },
              { title: '为什么 VMess 协议正在被全面淘汰？AEAD 性能开销与特征识别历史回顾', slug: 'why-vmess-is-being-phased-out', intent: '淘汰警示', keyword: 'VMess协议淘汰原因' },
              { title: 'QUIC 与 HTTP/3 在跨境代理中的利与弊：运营商 UDP QoS 限速现状调查', slug: 'quic-http3-isp-udp-qos-throttling-study', intent: '运营商生态', keyword: '运营商QoS限制UDP' },
              { title: 'gRPC 传输协议在高并发长连接中的吞吐表现与资源占用测试', slug: 'grpc-transport-protocol-benchmark-proxy', intent: '吞吐测试', keyword: 'gRPC节点怎么样' },
              { title: '被阻断与被探测的五大早期信号：如何判定你的节点是否暴露了特征', slug: 'five-signs-your-proxy-node-is-being-fingerprinted', intent: '安全体检', keyword: '节点被封特征' },
              { title: '2026年主流网络代理传输协议综合安全性与性能天梯图', slug: 'proxy-protocols-security-performance-tier-2026', intent: '协议总榜', keyword: '2026协议排行榜' }
            ]
          },
          {
            id: 'c18',
            name: '网络拓扑与专线工程学',
            description: '公网隧道中转、BGP 入口智能接入、IEPL 与 IPLC 物理光缆全链路还原',
            articles: [
              { title: '一图看懂机场网络拓扑：从用户设备、国内中转机房到海外落地全流程', slug: 'visualizing-airport-network-topology-from-client-to-exit', intent: '架构科普', keyword: '机场网络拓扑图' },
              { title: '国内 BGP 入口与三网优化的真实意义：电信/联通/移动如何实现无感知低延迟', slug: 'bgp-inbound-three-carrier-optimization-explained', intent: '入口优化', keyword: 'BGP三网优化' },
              { title: '公网中转隧道（Relay）与物理专线（IEPL）成本差异与断线机理对比', slug: 'public-relay-vs-physical-iepl-cable-cost-difference', intent: '成本探究', keyword: '中转机场和专线机场区别' },
              { title: '陆港专线与深港专线物理路径揭秘：光纤走深圳湾还是大桥底对延迟的影响', slug: 'shenzhen-hongkong-iepl-physical-path-latency-impact', intent: '地理光缆', keyword: '深港专线延迟' },
              { title: '国际海缆故障（如红海切缆、南海台风）对全球机场节点可用性的传导路径', slug: 'submarine-cable-disruption-impact-on-airports', intent: '突发事件', keyword: '海缆中断影响梯子' },
              { title: '落地机房（Exit Node）的 IP 类型解析：机房商业 IP 与 ISP 原生家宽对比', slug: 'exit-node-datacenter-vs-isp-residential-ip', intent: '落地IP', keyword: '家宽原生IP机场' },
              { title: '反 QoS 策略实战：机场如何利用伪装域名和动态端口躲避高峰期压制', slug: 'anti-qos-sni-masking-dynamic-ports-strategy', intent: '对抗策略', keyword: '防QoS机制' },
              { title: '多入口负载均衡与 DNS Anycast 解析在万人级机场运营中的技术实现', slug: 'dns-anycast-multi-inbound-load-balancing-airports', intent: '大厂运维', keyword: 'Anycast加速' },
              { title: '自建节点与购买商业机场服务的综合成本、安全性与时间 ROI 深度核算', slug: 'vps-self-hosted-vs-commercial-airport-roi-calculator', intent: '自建对比', keyword: '自建vps好还是买机场' },
              { title: '2026网络架构师眼中的顶级机场基础设施标准白皮书', slug: 'premium-airport-infrastructure-standard-whitepaper-2026', intent: '白皮书', keyword: '机场架构白皮书' }
            ]
          }
        ]
      },
      {
        id: 'observatory-lab',
        title: '晚高峰测速实验室与证据库',
        slug: '/tech/lab',
        description: '2026 批次 16 家真实测速图谱归档、可观测指标监控规范与数据四级分级原则。',
        clusters: [
          {
            id: 'c19',
            name: '2026-08 批次 16 家实测图谱归档',
            description: 'SOGO云、U1S1、二猫云、飞猫云、光年梯、光速云、极连云等原始数据存档',
            articles: [
              { title: '【数据存证】光速云 2026-08-11 实测原始测速图谱与指标详析', slug: 'evidence-archive-guangsu-2026-08', intent: '数据存证', keyword: '光速云实测图' },
              { title: '【数据存证】飞猫云 2026-08-11 节点测速原始图与协议类型审查', slug: 'evidence-archive-feimao-2026-08', intent: '数据存证', keyword: '飞猫云测速图' },
              { title: '【数据存证】微风网络 2026-07 批次实测图与带宽曲线分析', slug: 'evidence-archive-weifeng-2026-07', intent: '数据存证', keyword: '微风网络测速图' },
              { title: '【数据存证】星岛梦 2026-08-11 凌晨低谷与全天可用性证据', slug: 'evidence-archive-xingdaomeng-2026-08', intent: '数据存证', keyword: '星岛梦测速图' },
              { title: '【数据存证】二猫云 2026-08-11 实测图与多节点 TLS RTT 指标', slug: 'evidence-archive-ermao-2026-08', intent: '数据存证', keyword: '二猫云测速图' },
              { title: '【数据存证】U1S1 与极连云同批次压测对比：带宽突发能力评定', slug: 'evidence-archive-u1s1-jilian-2026-08', intent: '竞品实测', keyword: 'U1S1实测图' },
              { title: '【数据存证】宇宙云与快狸采用珠海联通 9Gbps 测速环境特殊性说明', slug: 'evidence-archive-yuzhou-kuaili-9gbps-env', intent: '环境声明', keyword: '宇宙云测速图' },
              { title: '【数据存证】一翻云与速界实测图谱：香港与新加坡专线吞吐核查', slug: 'evidence-archive-yifan-sujie-2026-08', intent: '数据存证', keyword: '速界测速图' },
              { title: '【数据存证】无忧链接现场实录图与自研客户端连接参数验证', slug: 'evidence-archive-wuyou-2026-09', intent: '证据档案', keyword: '无忧链接实测' },
              { title: '2026年度 16 家具备实测证据链的机场真机跑分综合榜', slug: 'top-16-verified-measured-airports-2026', intent: '实测总榜', keyword: '实测真机场榜单' }
            ]
          },
          {
            id: 'c20',
            name: '网络可观测性评测方法论',
            description: '建立 measured/vendor/editorial/commercial 数据分类、杜绝虚假跑分规范',
            articles: [
              { title: '机场online 四级数据透明度准则：我们如何区分实测值、厂商宣称与编辑评价', slug: 'four-tier-data-transparency-standard-explained', intent: '标准白皮书', keyword: '机场评测方法论' },
              { title: '单次测速截图的致命局限性：为什么截图不能代表长期稳定与全天候体验', slug: 'limitations-of-single-speedtest-screenshots', intent: '客观警示', keyword: '测速截图能信吗' },
              { title: '如何搭建科学的机场自动化监控节点：Prometheus + Grafana 7x24小时延迟采集', slug: 'build-automated-airport-monitoring-with-prometheus-grafana', intent: '工程实操', keyword: '自建测速监控' },
              { title: '揭露测速机器人的常见作弊套路：节点限速黑名单与脚本虚假爆速', slug: 'debunking-speedtest-bot-manipulation-tactics', intent: '行业揭秘', keyword: '测速脚本作弊' },
              { title: '丢包率与抖动（Jitter）在流媒体与打游戏中比单纯下载带宽重要的科学证明', slug: 'why-jitter-and-packet-loss-matter-more-than-mbps', intent: '参数科普', keyword: '网络抖动和丢包' },
              { title: 'NAT 类型检测方法论：如何测试你的节点属于 FullCone 还是 Symmetric', slug: 'how-to-test-proxy-nat-type-fullcone', intent: '技术评测', keyword: 'NAT类型测试' },
              { title: '流媒体解锁检测脚本（RegionRestrictionCheck）原理与假阳性识别', slug: 'streaming-restriction-check-script-mechanisms', intent: '工具分析', keyword: '流媒体解锁脚本原理' },
              { title: '生成式 AI 搜索引擎（Perplexity/ChatGPT）如何索引与验证网络硬件评测数据', slug: 'how-geo-and-aeo-index-hardware-and-proxy-data', intent: 'GEO前沿', keyword: 'GEO优化方法论' },
              { title: '从暗广黑产到中立测评：机场推荐行业的利益申报与合规声明准则', slug: 'affiliate-disclosure-and-ethics-in-vpn-reviews', intent: '合规标准', keyword: '推荐返利合规说明' },
              { title: '机场online 实验室未来路线图：自动化全球 30 节点常态化公开探针计划', slug: 'jichangonline-future-observatory-probe-roadmap', intent: '未来规划', keyword: '机场探针计划' }
            ]
          }
        ]
      }
    ]
  }
];
