---
title: 'JavaScript Weekly #575'
date: '2022-02-23'
categories:
  - 'JavaScript Weekly'
publish: true
---

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/g6siflolg6cl3gdzxkdm.jpg)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[用 JavaScript 编写打印机驱动程序](https://javascriptweekly.com/link/119451/web "kubesail.com") — *“用 JavaScript 编写打印机驱动程序听起来很荒谬”*，作者开始说，虽然 “驱动程序” 的定义在这里是有争议的（它更像是一个过滤器？），但这仍然是一个有趣的故事。

[Babel 7.17.0 发布](https://javascriptweekly.com/link/119431/web "babeljs.io") — 现在 [装饰器提案](https://javascriptweekly.com/link/119432/web) 已经趋于稳定，如果你想玩的话，Babel 支持它们的解析和转换。

![](https://copm.s3.amazonaws.com/79ea00da.png)

[ButterCMS 加入到你的 JS 程序中:  `$ butter.post.list()`](https://javascriptweekly.com/link/119470/web "buttercms.com") — ButterCMS 是您的后端。让您的营销团队不需要前端即可更新网站和应用内容。免费 30 天。

[Fetch API 即将进入 Node Core（包括为什么要了解它）](https://javascriptweekly.com/link/119426/web "fusebit.io") — 对 Fetch API（作为获取资源的常用浏览器端）的支持已合并到 Node.js 中，并将在 `--experimental-fetch` 标志后面提供，直到希望在 Node 18+ 中默认启用。

[内存泄漏：Web 性能被遗忘的一面](https://javascriptweekly.com/link/119430/web "nolanlawson.com") — 认真对待内存泄漏的重要性，尽管 “努力可能和回报不成正比”。

## **简述:**

*   [V8 v9.9](https://javascriptweekly.com/link/119433/web) 即将推出，重点是对 Intl 的改进。

*   VS Code 的 [每月一次重大更新](https://javascriptweekly.com/link/119434/web)，其中包含 JS 调试改进，可让您排除某些调用者在断点处暂停。

*   npm 注册表现在要求 [前 100 个 npm 包](https://javascriptweekly.com/link/119435/web) 的维护者使用 2FA。随着时间的推移，该政策将扩展到更多的维护者。

*   还在使用 `[].join(', ')`？ Eric Clemmons 有一个 [不错的选择](https://javascriptweekly.com/link/119436/web)。

*   Dan Abramov 在试图 [推销 Sublime Text](https://javascriptweekly.com/link/119437/web) 与 VS Code。

*   [Jest](https://javascriptweekly.com/link/119438/web) 是一个非常流行的与 Facebook 相关的 JS 测试框架，但据称 [Facebook 多年来没有人在 Jest 上工作过](https://javascriptweekly.com/link/119439/web)。


## **版本更新:**

[MDX 2.0](https://javascriptweekly.com/link/119440/web) – Markdown + JSX = ❤️  
[Partytown 0.3](https://javascriptweekly.com/link/119441/web) – 将第三方脚本从主线程中移除。 [Mongoose 6.2.0](https://javascriptweekly.com/link/119442/web) – MongoDB 对象建模库。 [Recoil 0.6](https://javascriptweekly.com/link/119443/web) – 替代 React 状态管理。 [Commander.js 9.0](https://javascriptweekly.com/link/119444/web) – Node CLI 框架.  
[CKEditor 5 v32.0](https://javascriptweekly.com/link/119445/web) – 富文本编辑器框架。 [ESLint 8.8.0](https://javascriptweekly.com/link/119446/web)

## 📒  文章 & 教程

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/p4itcrffmsgkrlhxkgnu.jpg)

[2022 年 VS Code 在飞速发展](https://javascriptweekly.com/link/119454/web "jason-williams.co.uk") — 其中一篇深入研究 VS Code 底层架构的 “小众但有趣” 的文章，是考虑制作自己的扩展的人的必读之作。

▶  [您每周关于软件艺术与实践的对话来源](https://javascriptweekly.com/link/119453/web "stackoverflow.blog") — Ben Popper、Cassidy Williams 和 Ceora Ford 探讨了在软件中工作的意义，以及代码如何重塑我们的世界。

[通过代码拆分提高 JavaScript Bundle 性能](https://javascriptweekly.com/link/119452/web "www.smashingmagazine.com") — 了解代码拆分的好处和注意事项，以及如何通过动态加载复杂的非关键 JavaScript 包来提高页面性能和加载时间。

[Web 框架解决了什么以及没有它们应该怎么做](https://javascriptweekly.com/link/119455/web "www.smashingmagazine.com") — 深入探讨框架中常见的一些技术特性，并解释一些不同的框架如何实现它们以及它们的成本。

[使用 Streams 构建高性能节点应用程序](https://javascriptweekly.com/link/119457/web "blog.appsignal.com") — 使用 Node.js 中的 “Stream” 模块。

[将聊天机器人连接到流行的通讯软件中](https://javascriptweekly.com/link/119456/web "bit.ly") — 了解将聊天机器人连接到 Telegram、Messenger、Twilio、Smooch、Vonage、Slack 和 Microsoft Teams 的简单方法。

[如何使用 Vue 3、Vite 和 Pinia 创建、测试和部署 SPA](https://javascriptweekly.com/link/119473/web)

▶  [React 的故事（10 分钟）](https://javascriptweekly.com/link/119458/web)

[使用 JavaScript 防止平滑滚动](https://javascriptweekly.com/link/119471/web)

## 🛠  代码 & 工具

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/z1ltybyxbqnxaswmnjkt.jpg)

[Sigma 2.2：图形绘图库](https://javascriptweekly.com/link/119459/web "sigmajs.org") — 一个成熟的库（我们在 2015 年首次使用它！），包含数千个需要快速渲染的节点和边的巨型图。[这里有一些很好的例子](https://javascriptweekly.com/link/119460/web)

[A-Frame 1.3：构建 WebVR 体验的框架](https://javascriptweekly.com/link/119461/web "aframe.io") — 用于构建虚拟现实体验的 Web 框架，可在 Vive、Rift、Quest 以及桌面和移动平台（包括浏览器）中运行。

[Electron 17 发布](https://javascriptweekly.com/link/119462/web "www.electronjs.org") — 流行的跨平台桌面应用程序框架，通过 Chromium 98 支持，当然也有 Node 16.13.0 和 V8 9.8。

[Pulumi：使用 JavaScript 的开发人员优先基础设施](https://javascriptweekly.com/link/119463/web "www.pulumi.com")

[Hotkey 2.0：按下 “热键” 时触发元素上的操作](https://javascriptweekly.com/link/119464/web "github.com") — 使用 Hotkey，在你的元素上设置 `data-hotkey` 属性，你就可以获取键盘快捷键。[v2.0](https://javascriptweekly.com/link/119465/web) 刚刚下架。

[imask.js 6.4.0：Vanilla JavaScript 输入掩码](https://javascriptweekly.com/link/119466/web "imask.js.org")

[lite-youtube：更快地呈现 YouTube 嵌入的 Web 组件](https://javascriptweekly.com/link/119467/web "github.com") — 这是 Paul Irish 的 [lite-youtube-embed](https://javascriptweekly.com/link/119468/web) 的 Shadow DOM Web 组件版本，具有键盘快捷键和其他一些不错的功能。

## 😍 最后

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/zirn5nesrjne6sa7lgqh.jpg)

[WebVM.io](https://javascriptweekly.com/link/119474/web) 带您直接进入在您的浏览器中运行的基于 Web 的 “无服务器” 虚拟 Linux 环境。它是基于 JavaScript 和 WebAssembly 的 CheerpX x86 虚拟化引擎支持的。虽然它不完全是一个 JavaScript 项目，但它很好地展示了 Web 技术的发展程度。如果你想尝试的话，它已经 “安装” 了 Node v10.24.0，但要注意它需要 20 秒才能加载到我的机器上。

如果你想学习的话，[这是一篇关于它如何工作的文章](https://javascriptweekly.com/link/119476/web)。

*注意：由于所需的资源和性能有限，可能仅适用于桌面用户。*

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/575)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/575)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)
