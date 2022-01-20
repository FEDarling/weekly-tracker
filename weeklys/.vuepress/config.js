const plugins = require('./config/plugins.js')
const nav = require('./config/nav.js')
const sidebar = require('./config/sidebar.js')
module.exports = {
  title: '周刊翻译计划',
  description: "追踪国外最流行的前端周刊",
  theme: 'reco',
  lang: 'zh-CN',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    type: 'HomePageOne',
    mode: 'auto',
    logo: 'https://avatars.githubusercontent.com/u/97049302?s=400&u=9eeeeb9644d2ed3b862b8bab1a91adcf48792299&v=4',
    startYear: 2022,
    noFoundPageByTencent: false,//关闭404
    codeTheme: 'tomorrow',
    lastUpdated: '最后更新时间',
    nextLinks: true,
    prevLinks: true,
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
        text: '标签'      // 默认文案 “标签”
      },
    }
  },
  plugins
}  