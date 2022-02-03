const plugins = require('./config/plugins.js')
const nav = require('./config/nav.js')
const sidebar = require('./config/sidebar.js')
module.exports = {
  title: 'Weekly Tracker',
  description: "追踪国外最流行的周刊",
  theme: 'reco',
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  markdown: {
    lineNumbers: true
  },
  dest: "public",
  themeConfig: {
    type: 'HomePageOne',
    mode: 'auto',
    logo: '/images/organization.png',
    startYear: 2022,
    noFoundPageByTencent: false,//关闭404
    codeTheme: 'tomorrow',
    lastUpdated: '最后更新时间',
    nextLinks: true,
    prevLinks: true,
    docsRepo: 'FEDarling/weekly-tracker',
    docsBranch: 'main',
    docsDir: 'weeklys',
    editLinks: true,
    editLinkText: '发现错误？欢迎斧正',
    subSidebar: 'auto',
    nav,
    sidebar,
    blogConfig: {
      category: {
        location: 3,     // 在导航栏菜单中所占的位置，默认2
        text: '所有周刊' // 默认文案 “分类”
      },
      tag: {
        location: 4,     // 在导航栏菜单中所占的位置，默认3
        text: '精选文章'      // 默认文案 “标签”
      },
    }
  },
  plugins
}  