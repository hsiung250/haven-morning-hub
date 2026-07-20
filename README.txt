高天通訊處早會課程 V8 功能入口正式版
=======================================

【本版新增】
1. 首頁改為 App 式六宮格功能入口
2. 底部導覽新增：
   - 教材中心
   - 業績回報
   - H小組研討
3. 保留首頁、今日、課表
4. 新增業績查詢入口
5. Logo 已內嵌在 index.html，不會因 GitHub 路徑失效
6. 保留 7、8、9 月課表與跨月份搜尋
7. 日期支援 8/7、08/07、8月7日、0807 等格式

【設定四個功能網址】
開啟 data.js，找到：

portalLinks: {
  materials: "",
  performanceQuery: "",
  performanceReport: "",
  hGroup: ""
}

把雙引號內換成網址即可，例如：

performanceReport: "https://forms.gle/你的表單網址"

【上傳 GitHub Pages】
解壓縮後，將資料夾內所有檔案上傳並覆蓋 haven-morning-hub 儲存庫根目錄。

GitHub Pages 通常需要 1～3 分鐘更新。
