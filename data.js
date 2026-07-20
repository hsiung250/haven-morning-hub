// 高天通訊處早會課程資料
// 之後要新增月份，可依照相同格式增加資料。
// 公告、教材、榮譽榜內容也都可以直接在這裡修改。

const SITE_DATA = {
  portalLinks: {
    materials: "",
    performanceQuery: "",
    performanceReport: "",
    hGroup: ""
  },
  title: "高天通訊處早會課程",
  subtitle: "HAVEN Team｜孝順｜感恩｜專一｜熱情｜共好",
  announcements: [
    {
      title: "歡迎使用高天通訊處早會課程平台",
      date: "2026-07-20",
      content: "7、8、9 月課表已整合完成。公告內容可直接在 data.js 修改。"
    }
  ],
  highlights: [
    { icon: "🏆", title: "本月榮譽", content: "請在 data.js 更新本月榮譽與競賽資訊。" },
    { icon: "📌", title: "本月重點", content: "請在 data.js 更新本月活動與重要提醒。" }
  ],
  materials: [
    { title: "教材中心", description: "可加入 Google Drive、PDF、PPT 或影片連結。", url: "" }
  ],
  months: {
  "07": {
    "label": "7月",
    "entries": [
      {
        "date": "2026-06-29",
        "weekday": "星期一",
        "host": "陳懷柔SP 何廷軒",
        "finance": "財經：娛樂\n劉佩蓉 專員",
        "course": "榮譽績效分享\n謝政男 襄理",
        "practice": "敲門磚",
        "closer": "許智雄 經理",
        "meeting": ""
      },
      {
        "date": "2026-06-30",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n詹政杰 主任",
        "course": "ORID\n蕭如菁 經理",
        "practice": "理財型議題",
        "closer": "謝政男 襄理",
        "meeting": "亞太保險表揚大會"
      },
      {
        "date": "2026-07-01",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n何廷軒 專員  ",
        "course": "NPSS-開發客戶\n戴東志 主任",
        "practice": "醫療議題",
        "closer": "",
        "meeting": "AAP表揚大會"
      },
      {
        "date": "2026-07-02",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：保險議題\n曾馨慧 主任",
        "course": "個人ＯＰＰ\n甘佩蓁 專員",
        "practice": "增員工具",
        "closer": "許智雄 經理",
        "meeting": ""
      },
      {
        "date": "2026-07-03",
        "weekday": "星期五",
        "host": "",
        "finance": "-",
        "course": "四管-行銷說明會\n圓山-5F",
        "practice": "-",
        "closer": "-",
        "meeting": "未達3C會議 14:00-15:00"
      },
      {
        "date": "2026-07-04",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-05",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-06",
        "weekday": "星期一",
        "host": "戴東志SP 吳亦婷",
        "finance": "財經：娛樂\n呂侑恩 專員",
        "course": "自殺防治宣導\n袁銘男 護理師",
        "practice": "敲門磚",
        "closer": "蕭宇晴 主任",
        "meeting": "主管會議\n14:00-16:00 (6A小教室）"
      },
      {
        "date": "2026-07-07",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n吳亦婷 主任 ",
        "course": "榮譽績效分享\n吳睿綝 襄理",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-08",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n陳昆郁 專員",
        "course": "NPSS-安排約訪\n蕭如菁 經理",
        "practice": "醫療議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-09",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n李竑諺 主任  ",
        "course": "剪輯影片教學\n陳懷柔 主任",
        "practice": "增員工具",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-10",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n劉佩蓉 專員",
        "course": "Ｈ小組案例研討\n許智雄 經理",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議 11:00-12:00"
      },
      {
        "date": "2026-07-11",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-12",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-13",
        "weekday": "星期一",
        "host": "王思涵SP 呂侑恩",
        "finance": "財經：娛樂\n何廷軒 專員 ",
        "course": "榮譽績效分享\n詹政杰 主任",
        "practice": "敲門磚",
        "closer": "蕭如菁 經理",
        "meeting": "主管會議\n14:00-16:00 (6A小教室）"
      },
      {
        "date": "2026-07-14",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n詹政杰 主任",
        "course": "房貸宣導\n陳蕙如 襄理",
        "practice": "理財型議題",
        "closer": "施昱廷 主任  ",
        "meeting": ""
      },
      {
        "date": "2026-07-15",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n施昱廷 主任  ",
        "course": "新商品搶先聽\n王思涵 主任",
        "practice": "醫療議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-16",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n呂侑恩 專員",
        "course": "增員 PRSS\n施昱廷 主任",
        "practice": "增員工具",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-17",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n曾馨慧 主任",
        "course": "Ｈ小組案例研討\n 吳亦婷 專員",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議 11:00-12:00"
      },
      {
        "date": "2026-07-18",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-19",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-20",
        "weekday": "星期一",
        "host": "施昱廷SP 劉家均",
        "finance": "財經：娛樂\n吳亦婷 主任  ",
        "course": "榮譽績效分享\n施昱廷 主任",
        "practice": "",
        "closer": "敲門磚",
        "meeting": "王思涵 主任"
      },
      {
        "date": "2026-07-21",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n陳昆郁 專員",
        "course": "<行政不卡關>\n保險業必懂作業關鍵課\n曾馨慧主任",
        "practice": "",
        "closer": "理財型議題",
        "meeting": ""
      },
      {
        "date": "2026-07-22",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n何廷軒 專員  ",
        "course": "從財務數據看未來趨勢\n（財務雜誌分享）\n吳睿綝 襄理",
        "practice": "",
        "closer": "醫療議題",
        "meeting": "蕭如菁 經理"
      },
      {
        "date": "2026-07-23",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n曾馨慧 主任",
        "course": "現實人生party1\n許智雄 經理",
        "practice": "",
        "closer": "增員工具",
        "meeting": ""
      },
      {
        "date": "2026-07-24",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n詹政杰 主任  ",
        "course": "Ｈ小組案例研討\n 蕭宇晴 主任",
        "practice": "",
        "closer": "-",
        "meeting": ""
      },
      {
        "date": "2026-07-25",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-07-26",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      }
    ]
  },
  "08": {
    "label": "8月",
    "entries": [
      {
        "date": "2026-08-03",
        "weekday": "星期一",
        "host": "林昱勛SP 鄭伃涵",
        "finance": "財經：娛樂\n陳昆郁 專員",
        "course": "榮譽績效分享\n詹政杰 主任",
        "practice": "敲門磚",
        "closer": "許智雄 經理",
        "meeting": "主管會議\n14:00-16:00 (6A小教室）"
      },
      {
        "date": "2026-08-04",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n吳亦婷 主任  ",
        "course": "醫療前中後＋全險觀念\n蕭宇晴  主任",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-05",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n劉佩蓉 專員",
        "course": "NPSS-銷售面談\n謝政男  襄理",
        "practice": "醫療議題",
        "closer": "謝政男 襄理",
        "meeting": ""
      },
      {
        "date": "2026-08-06",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：保險議題\n何廷軒 專員",
        "course": "產險理賠會說話\n實務案例分享\n何廷軒 專員",
        "practice": "增員工具",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-07",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n李竑諺 主任",
        "course": "Ｈ小組案例研討\n陳懷柔 主任",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議\n 11:00-12:00"
      },
      {
        "date": "2026-08-08",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-09",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-10",
        "weekday": "星期一",
        "host": "詹政杰SP 莊詠崴",
        "finance": "財經：娛樂\n施昱廷 主任 ",
        "course": "榮譽績效分享\n吳睿綝 襄理",
        "practice": "敲門磚",
        "closer": "陳懷柔 主任",
        "meeting": ""
      },
      {
        "date": "2026-08-11",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n呂侑恩 專員",
        "course": "市場調查訪談表\n吳亦婷 專員",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-12",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n詹政杰 主任  ",
        "course": "NPSS-需求分析\n施昱廷  主任",
        "practice": "醫療議題",
        "closer": "許智雄 經理",
        "meeting": ""
      },
      {
        "date": "2026-08-13",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n曾馨慧 主任 ",
        "course": "現實人生Part2\n何宜庭 襄理",
        "practice": "增員工具",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-14",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n陳昆郁 專員",
        "course": "Ｈ小組案例研討\n蕭宇晴 主任",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議\n 11:00-12:00"
      },
      {
        "date": "2026-08-15",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-16",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-17",
        "weekday": "星期一",
        "host": "李竑諺SP 潘彥均 ",
        "finance": "財經：娛樂\n劉佩蓉 專員",
        "course": "榮譽績效分享\n謝政男 襄理",
        "practice": "敲門磚",
        "closer": "蕭宇晴 主任",
        "meeting": "主管會議\n14:00-16:00 (6A小教室）"
      },
      {
        "date": "2026-08-18",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n何廷軒 專員",
        "course": "Call進百萬團險\n 高彪-陳怡璇 經理",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-19",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n吳亦婷 主任  ",
        "course": "新商品搶先聽\n蕭宇晴 主任/王思涵 主任",
        "practice": "醫療議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-20",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n李竑諺 主任",
        "course": "打造多源收益的分紅帳戶\n陳懷柔 主任",
        "practice": "增員工具",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-21",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n施昱廷 主任",
        "course": "生命靈數\n何宜家 處經理",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議\n 11:00-12:00"
      },
      {
        "date": "2026-08-22",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-23",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-24",
        "weekday": "星期一",
        "host": "蕭宇晴SP 馬烝偉",
        "finance": "財經：娛樂\n呂侑恩 專員  ",
        "course": "博田健康大講堂\n博田專任醫師",
        "practice": "敲門磚",
        "closer": "蕭如菁 經理",
        "meeting": ""
      },
      {
        "date": "2026-08-25",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n詹政杰 主任",
        "course": "榮譽績效分享\n何宜庭 襄理",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-26",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n曾馨慧 主任  ",
        "course": "團險宣導 \n黃以瑟 專員",
        "practice": "醫療議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-27",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n陳昆郁 專員",
        "course": "用一隻手機創造合作業績\n許智雄 經理",
        "practice": "-",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-28",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n劉佩蓉 專員",
        "course": "Ｈ小組案例研討\n何宜家 處經理",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議\n 11:00-12:00"
      },
      {
        "date": "2026-08-29",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-08-30",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      }
    ]
  },
  "09": {
    "label": "9月",
    "entries": [
      {
        "date": "2026-08-31",
        "weekday": "星期一",
        "host": "戴東志SP 李彩禎",
        "finance": "財經：娛樂\n陳昆郁 專員",
        "course": "榮譽績效分享\n詹政杰 主任",
        "practice": "敲門磚",
        "closer": "何宜家 處經理",
        "meeting": "主管會議\n14:00-16:00 (6A小教室）"
      },
      {
        "date": "2026-09-01",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n吳亦婷 主任  ",
        "course": "財務安全三部曲\n（人生幸福三條線）\n施昱廷 主任",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-02",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n劉佩蓉 專員",
        "course": "NPSS-建議書促成\n陳懷柔 主任",
        "practice": "醫療議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-03",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：保險議題\n何廷軒 專員",
        "course": "個人ＯＰＰ\n鄭伃涵 專員",
        "practice": "增員工具",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-04",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n李竑諺 主任",
        "course": "Ｈ小組案例研討\n許智雄 經理",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議\n 11:00-12:00"
      },
      {
        "date": "2026-09-05",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-06",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-07",
        "weekday": "星期一",
        "host": "陳懷柔SP 施品聿",
        "finance": "財經：娛樂\n施昱廷 主任 ",
        "course": "榮譽績效分享\n謝政男 襄理",
        "practice": "敲門磚",
        "closer": "許智雄 經理",
        "meeting": ""
      },
      {
        "date": "2026-09-08",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n呂侑恩 專員",
        "course": "",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-09",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n詹政杰 主任  ",
        "course": "NPSS-售後服務\n何宜庭 襄理",
        "practice": "醫療議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-10",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n曾馨慧 主任 ",
        "course": "",
        "practice": "增員工具",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-11",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n陳昆郁 專員",
        "course": "Ｈ小組案例研討\n蕭宇晴 主任",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議\n 11:00-12:00"
      },
      {
        "date": "2026-09-12",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-13",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-14",
        "weekday": "星期一",
        "host": "王思涵SP 劉佩蓉 ",
        "finance": "財經：娛樂\n劉佩蓉 專員",
        "course": "榮譽績效分享\n吳睿綝 襄理",
        "practice": "敲門磚",
        "closer": "蕭宇晴 主任",
        "meeting": "主管會議\n14:00-16:00 (6A小教室）"
      },
      {
        "date": "2026-09-15",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n何廷軒 專員",
        "course": "人生致富圖\n詹政杰 主任",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-16",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n吳亦婷 主任  ",
        "course": "新商品搶先聽\n蕭宇晴 主任/王思涵 主任",
        "practice": "醫療議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-17",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n李竑諺 主任",
        "course": "",
        "practice": "增員工具",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-18",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n施昱廷 主任",
        "course": "Ｈ小組案例研討\n蕭如菁 經理",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議\n 11:00-12:00"
      },
      {
        "date": "2026-09-19",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-20",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-21",
        "weekday": "星期一",
        "host": "施昱廷SP 陳昆郁",
        "finance": "財經：娛樂\n呂侑恩 專員  ",
        "course": "榮譽績效分享\n何宜庭 襄理",
        "practice": "敲門磚",
        "closer": "蕭如菁 經理",
        "meeting": ""
      },
      {
        "date": "2026-09-22",
        "weekday": "星期二",
        "host": "",
        "finance": "財經：健康生活\n詹政杰 主任",
        "course": "從財務數據看未來趨勢\n謝政男 襄理",
        "practice": "理財型議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-23",
        "weekday": "星期三",
        "host": "",
        "finance": "財經：保險議題\n曾馨慧 主任  ",
        "course": "",
        "practice": "醫療議題",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-24",
        "weekday": "星期四",
        "host": "",
        "finance": "財經：財經時事\n陳昆郁 專員",
        "course": "關係變成收入的關鍵\n何宜家 處經理",
        "practice": "-",
        "closer": "",
        "meeting": "未達3C會議 \n13:00-14:00"
      },
      {
        "date": "2026-09-25",
        "weekday": "星期五",
        "host": "",
        "finance": "財經：稅務\n劉佩蓉 專員",
        "course": "中秋連假經營",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-26",
        "weekday": "星期六",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      },
      {
        "date": "2026-09-27",
        "weekday": "星期日",
        "host": "假日經營\n（各主管）",
        "finance": "",
        "course": "",
        "practice": "",
        "closer": "",
        "meeting": ""
      }
    ]
  }
}
};
