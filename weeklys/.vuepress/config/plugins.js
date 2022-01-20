const path = require('path')
module.exports = [
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: "周刊更新啦！",
        buttonText: "刷新"
      }
    }
  ],
  [
    '@vuepress/plugin-register-components',
    {
      components: [
        {
          name: 'reco-home-page-one',
          path: path.resolve(__dirname, '../components/HomePageOne.vue')
        }
      ],
      //   componentsDir: path.resolve(__dirname, './demo')
    }
  ],
  ['@vuepress-reco/rss', {
    site_url: '',
    copyright: ''
  }],
  ['@vuepress-reco/bulletin-popover', {
    body: [
      {
        type: 'title',
        content: '周刊翻译计划启动啦！ 🎉🎉',
      },
      {
        type: 'text',
        content: `⛱ 周刊翻译计划，目前涉及Mobile Dev Weekly、Frontend Focus、JavaScript Weekly、React Status、Node Weekly 和 CSS Weekly期刊，希望大家都可以有所收获！🥳`,
        style: 'font-size: 12px;'
      },
    ],
    footer: [
      {
        type: 'button',
        text: '加入',
        link: 'https://github.com/FEDarling/fe-translate-weekly'
      }
    ]
  }],
  ["vuepress-plugin-nuggets-style-copy", {
    copyText: "复制代码",
    tip: {
      title: '',
      content: `🎉  复制成功`,
    },
  }],
  // 左侧菜单栏伸缩
  path.resolve(__dirname, '../plugins/vuepress-plugin-sidebar-collapse/index.js')
]