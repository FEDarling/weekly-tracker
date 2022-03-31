---
title: 'JavaScript Weekly #578' # 不可修改
date: '2022-02-26' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: true # 翻译完成后修改
---

![](https://copm.s3.amazonaws.com/ae9d744f.jpg)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[学习 Rx.js 的基础知识](https://javascriptweekly.com/link/120266/web "frontendmasters.com") — 这个 JavaScript 库非常好用，Steve Kinney 在这个详细的视频课程里，介绍了使用它需要了解的内容 — 包括可观察对象、事件、间隔、计时器、运算符等。

[什么是原始值的包装对象？](https://javascriptweekly.com/link/120267/web "2ality.com") — Axel 博士谈到了 boolean 和 string 等基本类型如何关联包装类（例如 Boolean 和 String）。

[如何阅读 ECMAScript 规范](https://javascriptweekly.com/link/120299/web "timothygu.me") — 每次有一个新的 ECMAScript 规范我们都会链接到一篇文章 — 比如这个 ES2022 规范草案。但是谁会阅读如此复杂的文档呢？要不试试这篇？

## **简述:**

*   🟩 [Node 17.6.0](https://javascriptweekly.com/link/120268/web) 已经发布，[目前支持通过 HTTPS 加载 ES 模块](https://javascriptweekly.com/link/120269/web)。
    
*   [Glitch](https://javascriptweekly.com/link/120270/web) 是一个简洁的在线应用程序构建环境，非常适合 JavaScript 应用程序，您现在可以将 Glitch 应用程序 [部署到 DigitalOcean](https://javascriptweekly.com/link/120271/web)。他们还与 [Fastly 合作](https://javascriptweekly.com/link/120272/web)。
    
*   [6 分钟讲述 TypeScript 的 ▶️ 故事](https://javascriptweekly.com/link/120273/web)。如果你喜欢这种风格的话，还有 [异步 JavaScript 的 ▶️ 故事](https://javascriptweekly.com/link/120320/web) 也推荐给你！
    

## **版本更新:**

[Playwright 1.19](https://javascriptweekly.com/link/120301/web) — 浏览器自动化库。 
[neo.mjs 3.2.5](https://javascriptweekly.com/link/120274/web) — Web Worker 增强的前端框架。
[Jasmine 4.0.1](https://javascriptweekly.com/link/120275/web) — JS 测试框架。
[Resemble.js 4.1](https://javascriptweekly.com/link/120276/web) — 图像分析和比较库。
[eva.js 1.2.7](https://javascriptweekly.com/link/120277/web) — 前端游戏引擎。
[History 5.3](https://javascriptweekly.com/link/120278/web) — 使用 JS 管理会话历史记录。
[qooxdoo 7.0](https://javascriptweekly.com/link/120279/web) — 我们上次提到的 SPA 框架是在 7 年前！

## 📒  文章 & 教程

[如何在离开页面时可靠地发送 HTTP 请求](https://javascriptweekly.com/link/120285/web "css-tricks.com") — 浏览器不保证会在页面更改时保留打开的 HTTP 请求，但还是会有一些缓解措施或替代方法（例如信标）。

[如何为 Web 开发文本编辑器](https://javascriptweekly.com/link/120286/web "www.smashingmagazine.com") — 一家公司的工程师正在构建基于浏览器的设计工具，他思考了一些有关制作可靠文本输入小部件的问题。

[3k+ 开发人员完成了 2022 年前端现状调查 — 轮到你了](https://javascriptweekly.com/link/120284/web "hubs.ly") — 我们也需要你！花 8 分钟点击调查，很快就能看到结果。

[未来的 JavaScript：查看记录和元组](https://javascriptweekly.com/link/120302/web "dev.to") — 两年前，我们提到 [记录和元组](https://javascriptweekly.com/link/120303/web) 提案（JS 的两个新的深度不可变的原始类型）在 TC39 达到了第 2 阶段。

[你可以在 JavaScript 中 `throw()` 任何东西（以及其他 `async`/`await` 注意事项）](https://javascriptweekly.com/link/120305/web "www.bennadel.com")。

▶  [什么是_Responsible_ JavaScript？](https://javascriptweekly.com/link/120287/web "www.smashingmagazine.com") — JavaScript 的作者谈论了数据使用、用户体验、向后兼容性等主题（55 分钟。）

[如何使用 React Native 制作数据仪表板](https://javascriptweekly.com/link/120289/web "www.influxdata.com")

[如何在 Vue 中使用`nextTick()`](https://javascriptweekly.com/link/120306/web "dmitripavlutin.com") — `nextTick(callback)` 在 DOM 更新时执行回调。

[在 Next.js 中优化第三方脚本加载](https://javascriptweekly.com/link/120290/web)  

▶  [3 分钟内告诉你你应该知道的关于 Lodash 的 10 件事](https://javascriptweekly.com/link/120291/web)  

[比较 Gatsby 和 Next.js](https://javascriptweekly.com/link/120292/web)  

[使用 React、Hooks 和 Chakra-UI 实现一个生命游戏](https://javascriptweekly.com/link/120313/web)  

## 🛠  代码 & 工具

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/njkhs6ndybzlyulcjfwj.jpg)

[Screenshot：不依赖浏览器 — 原生截图库](https://javascriptweekly.com/link/120307/web "www.xata.io") — 使用 MediaDevices API 开发，但提供了一个更易于使用的抽象模式来让用户截取屏幕截图。 [GitHub 仓库](https://javascriptweekly.com/link/120308/web)。

[Stylo：JavaScript 的开源 WYSIWYG 富文本编辑器](https://javascriptweekly.com/link/120293/web "stylojs.com") — 轻量级，无依赖性，您可以配置默认工具栏以满足您应用的特定需求。

[Beam：一个由 Node.js 支持，受 GitHub 启发的团队留言板](https://javascriptweekly.com/link/120294/web "planetscale.com") — Beam 是一个留言板，灵感来自 GitHub 上用于团队交流的类似专有系统。 [GitHub 仓库](https://javascriptweekly.com/link/120295/web)。

[以更少的钱获得更多的云](https://javascriptweekly.com/link/120298/web "vultr.com") — Vultr 为开发人员提供低至每月 2.50 美元的云计算实例。使用此免费积分试用 Vultr 14 天。

[Stockfish.js：国际象棋引擎](https://javascriptweekly.com/link/120296/web "github.com") — Stockfish 是一种流行的国际象棋引擎，[通常用 C++ 编写](https://javascriptweekly.com/link/120297/web)，但该项目通过 WebAssembly 将其引入到了 JS 中。

😆  [Elevator.js：老式的 “滚动到顶部” 按钮](https://javascriptweekly.com/link/120309/web) — 只是有点好玩。 

[enum-xyz：使用代理的 JavaScript 枚举](https://javascriptweekly.com/link/120310/web) — 一个有趣的想法。

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/578)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/578)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)
