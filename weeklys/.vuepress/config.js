const plugins = require('./config/plugins.js')
const nav = require('./config/nav.js')
const sidebar = require('./config/sidebar.js')
module.exports = {
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Weekly Tracker',
            description: '追踪国外最流行的周刊',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Weekly Tracker',
            description: 'Tracking New Weeklys',
        },
    },
    markdown: {
        lineNumbers: true,
    },
    dest: 'public',
    themeConfig: {
        type: 'HomePageOne',
        mode: 'auto',
        logo: '/images/organization.png',
        startYear: 2022,
        noFoundPageByTencent: false, //关闭404
        codeTheme: 'tomorrow',
        nextLinks: true,
        prevLinks: true,
        docsRepo: 'FEDarling/weekly-tracker',
        docsBranch: 'main',
        docsDir: 'weeklys',
        editLinks: true,
        subSidebar: 'auto',
        locales: {
            '/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '发现错误？欢迎斧正',
                lastUpdated: '最后更新时间',
                nav: nav.zh,
                sidebar: sidebar.zh,

                // recoLocales: {
                //     homeBlog: {
                //         article: '美文', // 默认 文章
                //         tag: '标识', // 默认 标签
                //         category: '类别', // 默认 分类
                //         friendLink: '友链', // 默认 友情链接
                //     },
                //     pagation: {
                //         prev: '上一页',
                //         next: '下一页',
                //         go: '前往',
                //         jump: '跳转至',
                //     },
                // },
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated Time',
                nav: nav.en,
                sidebar: sidebar.en,
                // recoLocales: {
                //     homeBlog: {
                //         article: 'article', // 默认 文章
                //         tag: 'tag', // 默认 标签
                //         category: 'category', // 默认 分类
                //         friendLink: 'friendLink', // 默认 友情链接
                //     },
                //     pagation: {
                //         prev: 'Prev',
                //         next: 'Next',
                //         go: 'GO',
                //         jump: 'Jump to',
                //     },
                // },
            },
        },
    },
    plugins,
};  