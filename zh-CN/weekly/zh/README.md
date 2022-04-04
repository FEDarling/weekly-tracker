---
title: 'JavaScript Weekly #574'
date: '2022-02-22'
categories:
  - 'JavaScript Weekly'
publish: true
---

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/xbrtnhjvalt0al01p0nm.jpg)

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

[JavaScript 的管道运算符：简介和用例](https://javascriptweekly.com/link/119185/web "2ality.com") — 在 State of JS 2020 调查中，许多开发人员认为 JavaScript 中缺少管道运算符。有一个 [管道运营提案](https://javascriptweekly.com/link/119186/web) 已经处于 TC39 流程的第二阶段之中。 Axel 博士解释了为什么你需要这个，它是如何工作的，以及为什么 JS 不会有 F# 样式的管道。

[关于将 TypeScript 编译器移植到 Go（与 Rust 相比）](https://javascriptweekly.com/link/119145/web "kdy1.dev") — 作者是 Rust 的倡导者（创建了 swc），他认识到 Go 可能是一个更好的工具，尤其是用于构建类型检查器，并在此处解释了原因。这篇文章还引发了一场相当广泛的 [Hacker News 讨论](https://javascriptweekly.com/link/119147/web)，讨论了许多人为 Rust 辩护所涉及的复杂性。

![](https://copm.s3.amazonaws.com/582b4c11.png)

[用于 VS Code 的 JavaScript Scratchpad，现在带有 Time Machine](https://javascriptweekly.com/link/119101/web "quokkajs.com") — Quokka.js 是探索和测试 JavaScript 的第一大工具。代码会在输入的时候立即运行。您的代码将会在新的 Time Machine 里执行，并允许您自动重播、前进/后退、编辑并继续，以及查看运行时值。

🛠  [未导入：查找并修复悬空文件和未使用的依赖项](https://javascriptweekly.com/link/119148/web "github.com") — 您每天添加新代码的时候，可能会忘记删除旧代码。此工具可以帮助您发现项目中未使用的文件。

[参加 JavaScript 2022 现状调查](https://javascriptweekly.com/link/119149/web "stateofjs.com") — 几年过去了，新的 JavaScript 现状调查出来了，并且一如既往地推断开发人员对哪些库和框架感到兴奋。这不是一个完美的方案，不过每年的比较结果很有趣，我们会在结果出来后分享它。

## **简述:**

*   ⭐️  Etsy 的一位工程师 [提到](https://javascriptweekly.com/link/119150/web) Etsy 将他们所有的 React 15.6 代码迁移到了 [Preact](https://javascriptweekly.com/link/119151/web)，而没有转到 React 16+。

*   Deno 团队 [反思了 Deno 在 2021 年的进展](https://javascriptweekly.com/link/119187/web)。Angular 团队 [也做了类似的事情](https://javascriptweekly.com/link/119188/web)。

*   [TypeScript 4.6](https://javascriptweekly.com/link/119152/web) 处于测试阶段，专注于相对较小的技术改进，例如改进错误、跟踪分析器以及在调用 `super()` 之前允许在构造函数中编写代码。

*   Remix 项目的 Ryan Florence 在 Twitter 上指出 “[开发者们已经为 React 新世界做好了准备](https://javascriptweekly.com/link/119153/web)”。

*   Mike Melanson 问到 [2022 年是否会成为全栈 JavaScript 的 “黄金时代”](https://javascriptweekly.com/link/119154/web) ？


## **版本更新:**

[Nightwatch 2.0](https://javascriptweekly.com/link/119189/web) — 端到端的测试框架。 [Gluegun 5.0](https://javascriptweekly.com/link/119155/web) — 用于构建 Node.js CLI 应用程序的工具包。 [Node-RED 2.2.0](https://javascriptweekly.com/link/119156/web) – 低代码事件驱动的应用程序开发环境。 [parse-domain 7.0](https://javascriptweekly.com/link/119157/web) — 将主机名拆分为多个部分。 [NeutralinoJS 4.2.0](https://javascriptweekly.com/link/119158/web) — X 平台 JS 桌面应用程序框架。 [Mocha 9.2](https://javascriptweekly.com/link/119159/web) — JS 测试框架。  
[Serverless Framework v3](https://javascriptweekly.com/link/119190/web)  
[React Native 0.67](https://javascriptweekly.com/link/119160/web)  
[npm 8.4.0](https://javascriptweekly.com/link/119161/web)

## 📒  文章 & 教程

[React 服务器组件：入门](https://javascriptweekly.com/link/119162/web "blog.plasmic.app") — [Plasmic](https://javascriptweekly.com/link/119163/web) 可视化页面构建器应用程序的联合创始人带我们探索了 React 服务器组件（目前是即将发布的 React 18 中的一个实验性功能）以及它们如何在后台运行。

[多利用 JavaScript 的奇淫技巧](https://javascriptweekly.com/link/119164/web "kittygiraudel.com")

[React 身份验证](https://javascriptweekly.com/link/119106/web "userfront.com") — 在本文，我们展示了一种在 React 应用程序中进行身份验证（加上访问控制和 SSO）的新方法。

[`npm` 的完整初学者指南](https://javascriptweekly.com/link/119167/web "css-tricks.com") — 本指南还是挺有意思的。

[2022 年 Web 开发的底线？](https://javascriptweekly.com/link/119168/web "engineering.linecorp.com") — 分析围绕前端技术、浏览器共享、客户端设备等的众多统计数据，以了解我们必须继续支持的最低标准。

[DevTools 有什么新功能？](https://javascriptweekly.com/link/119169/web "www.smashingmagazine.com") — 对 Chrome、Edge、Safari 和 Firefox 中开发人员工具的最新的更改和新增的功能进行了不错的介绍。

[沿 SVG 路径为任何内容设置动画](https://javascriptweekly.com/link/119170/web "tympanus.net") — 如何使用 SVG 路径和 `getPointAtLength()` 函数使用 JavaScript 编写创意动画。

[使用 Sourcegraph 重新定义 OSS 世界：经验教训](https://javascriptweekly.com/link/119108/web "about.sourcegraph.com")

[比较 CSS 与 JavaScript](https://javascriptweekly.com/link/119171/web "kilianvalkhof.com")

[TypeScript 如何赢得开发人员和 JavaScript 框架的欢迎](https://javascriptweekly.com/link/119172/web)

▶  [使用 Node 做与 Jim Cramer 相反的事情](https://javascriptweekly.com/link/119191/web)

## 🛠  代码 & 工具

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/chcwkbfwx58zwvecqzvc.jpg)

[chroma.js：零依赖颜色转换库](https://javascriptweekly.com/link/119173/web "vis4.net") — 我很喜欢这个简单但色彩丰富的文档。如果你有关于颜色和颜色值的需求，一定要看看这个。 [GitHub 存储库](https://javascriptweekly.com/link/119174/web)。

[Clipboard.js：现代 “复制到剪贴板” 库](https://javascriptweekly.com/link/119175/web "github.com")

[使用 Stream 的聊天 API 构建移动响应式远程医疗寻呼机应用程序](https://javascriptweekly.com/link/119107/web "getstream.io") — 构建具有表情符号/反应、内置 GIF 支持、编辑/删除消息、直接和群聊等功能的响应式聊天应用程序。

[ngraph.path：通过图寻找路径](https://javascriptweekly.com/link/119177/web "github.com") — 如果您想了解它如何处理六个全球城市的道路网络，这里有一个 [现场演示](https://javascriptweekly.com/link/119178/web)。

[ExcellentExport.js 3.8：将表格数据导出到 Excel 或 CSV](https://javascriptweekly.com/link/119179/web "github.com") — 如果您的应用/页面在 HTML 表格中要填充一些数据，并且您希望将其导出为 CSV 或 XLSX 而无需任何服务器参与，它可能会有所帮助。

[Reaselct：React 的 “选择” 框组件](https://javascriptweekly.com/link/119180/web "github.com") — 目前有单选和多选版本，后者在标记场景中可以很好地工作。来自与 [REAVIZ 图表库相同的团队](https://javascriptweekly.com/link/119182/web)。

[Trilium Notes：使用 Node 构建的知识库应用程序](https://javascriptweekly.com/link/119183/web "github.com") — 用 Express 构建的分层笔记应用程序。

[hyperid：快速生成唯一 ID](https://javascriptweekly.com/link/119184/web)

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/574)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/574/README.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)
