---
title: 'JavaScript Weekly #577'
date: '2022-02-25'
categories: ['JavaScript Weekly']
publish: true
---

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/hkw7nagh4ohgjgfyu2uv.jpg)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[JS 2021 现状调查](https://javascriptweekly.com/link/120043/web "2021.stateofjs.com") — 尽管说的是 2021 年，但该调查是在今年 1 月进行的，因此结果是最新的，代表了 16,085 名受访者给出的答案。与民意调查一样，尽管叙述的时候要小心（许多人已经注意到多样性或方法论方面的问题），但我们还是喜欢每年看到它并看到开发者们提到的内容：

*   [esbuild](https://javascriptweekly.com/link/120050/web) 是满意度同比增长最大的工具。
*   5.6% 的受访者 [正在使用 Deno](https://javascriptweekly.com/link/120051/web)。
*   Axios、Lodash 和 Moment 等 [这些时间很久了的库](https://javascriptweekly.com/link/120052/web) 仍然是最受欢迎的。
*   Syntax 是迄今为止 [最受欢迎的播客](https://javascriptweekly.com/link/120052/web)，列表中还有 24 个其他播客可供查看。
*   TypeScript 是迄今为止最常见的 JavaScript 类型注解，Elm 位居第二。
*   Shawn 'swyx' Wang 写了一个 [总结性的帖子](https://javascriptweekly.com/link/120055/web)。

![](https://copm.s3.amazonaws.com/d3539cee.png)

[用于 VS Code 的 JavaScript Scratchpad](https://javascriptweekly.com/link/120025/web "quokkajs.com") — Quokka.js 是探索和测试 JavaScript 的第一大工具。代码在您输入的时候会立即运行。新的 [代码查看器](https://javascriptweekly.com/link/119999/web) 提供了一种独特且高效的方式来检查运行时的值，以在单个连续视图中查看您的代码正在执行的操作。

[Express.js 5.0 已进入测试阶段](https://javascriptweekly.com/link/120000/web "github.com") — 考虑到 5.0 的第一个 alpha 版本是七年前，对于仍然广受欢迎和有影响力的 Node.js Web 应用程序库来说，这是一大步。这里还有 [5.x API](https://javascriptweekly.com/link/120001/web) 的完整文档。需要 Node.js 4 或更高版本才行 :-)

## **简述:**

*   微软的 Angela Zhang 写了 [微软如何提高 React Native 调用 Windows API 的能力](https://javascriptweekly.com/link/120026/web)，以及它是如何在 Windows 11 中部分使用的。
    
*   Chrome 和 Firefox 的第 100 版本将很快发布，因此是时候 [考虑您的代码是否能够使用并通过测试](https://javascriptweekly.com/link/120002/web)。
    
*   👾 喜欢 Wordle 文字游戏吗？ [Jazle](https://javascriptweekly.com/link/120004/web) 是用 Wordle 写的。
    
*   Joyent 已将 Node.js 商标 [转让给 OpenJS 基金会](https://javascriptweekly.com/link/120027/web)。
    
*   谷歌发布了 [其 Cloud Functions 无服务器平台的下一个版本](https://javascriptweekly.com/link/120028/web)，该平台具有更长的函数运行时间、更大的实例等。
    
*   [ESLint 8.9.0](https://javascriptweekly.com/link/120003/web) 加入了新的 es2022 环境。
    

## **版本更新:**

[Next.js 12.1](https://javascriptweekly.com/link/120056/web)  
[TypeScript 4.6](https://javascriptweekly.com/link/120005/web)  
[Remix 1.2](https://javascriptweekly.com/link/120029/web) — 最新的全栈 JS 框架。 
[zx 5.1](https://javascriptweekly.com/link/120006/web) — 使用 JS 编写更好的 shell 脚本。
[Strapi 4.1.0](https://javascriptweekly.com/link/120007/web) — headless Node.js CMS 系统。 
[Cypress 9.5.0](https://javascriptweekly.com/link/120030/web) — 出名的测试系统。

## 📒  文章 & 教程

[如何追踪污染全局范围的代码](https://javascriptweekly.com/link/120012/web "mmazzarolo.com") — 您可能不希望代码将全局变量添加到 `window` 对象，并且要在有可能发生错误时找出问题所在。

[`package.json` 的基础知识](https://javascriptweekly.com/link/120013/web "nodesource.com") — 您很可能多年来一直在使用 “package.json” 文件，但有必要重新认识一下它。

[深入了解 React Native 的新架构](https://javascriptweekly.com/link/120032/web "medium.com") — 如 [React Native 团队的这篇文章](https://javascriptweekly.com/link/120033/web) 所述，React Native 的新架构将于 2022 年推出。

[100 多个用于高质量现代 Angular UI 的原生组件](https://javascriptweekly.com/link/120014/web "ad.doubleclick.net") — 获取构建企业级应用所需的所有组件。 Kendo UI for Angular 可以满足您的团队可能有的任何 UI 要求 — 包括主题、文档等等。

🏆  [了解 React 中的 JavaScript](https://javascriptweekly.com/link/120034/web "kentcdodds.com") — 本周我们又看到了一个经典的文章。它依然是几个关键 JS 功能的完美入门，其中提供了一些功能示例，可以帮助您进行 React 开发。

[Monorepos 概述](https://javascriptweekly.com/link/120035/web "monorepo.tools") — 一个新网站，它汇集了几乎所有您需要了解的关于 monorepos 的信息，以及构建它们的工具。

[用 7 行 TypeScript 模仿 Rust 的 `Result` 类型](https://javascriptweekly.com/link/120015/web)  

## 🛠  代码 & 工具

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/f5lvp6umcum22r30uxvb.jpg)

[v8n 1.4：一个 “流利的校验” 库](https://javascriptweekly.com/link/120016/web "github.com") — 将规则链接在一起进行校验，例如`v8n().some.not.uppercase().test("Hello");`

[使用 JS 代理作为低代码 REST 客户端的简洁示例](https://javascriptweekly.com/link/120036/web "gist.github.com") — 如果您以前从未使用过 [Proxy](https://javascriptweekly.com/link/120037/web)，您可以看下这个。

[软件团队的项目管理从未如此简单](https://javascriptweekly.com/link/120017/web "shortcut.com") — Shortcut 是为开发人员构建的快速直观的项目管理工具。

[TypeIt：多功能 “打字机效果”](https://javascriptweekly.com/link/120038/web "github.com") — 如果您需要一种看起来有人在网页上 “打字” 的效果，那么可以看下这个。或者，您也可以 [自行编写](https://javascriptweekly.com/link/120039/web)，或者，如果您使用 React，请考虑 [Windups](https://javascriptweekly.com/link/120040/web)。

[Marked 4：一个快速的 Markdown 解析器和编译器](https://javascriptweekly.com/link/120018/web "github.com") — 它在浏览器或服务器端运行。[这里可以查看它的实际效果](https://javascriptweekly.com/link/120019/web)。

[Minze：原生 Web 组件的 JavaScript 框架](https://javascriptweekly.com/link/120020/web "minze.dev") — 基于最新的 Web 组件标准，它允许您构建可用于任何项目的可移植组件库。

<img src="https://res.cloudinary.com/cpress/image/upload/w_200,h_200/lexrqzyprf1cymh90iwa.png" style="width: 60px">

[Heart Switch：React 的心形切换开关组件](https://javascriptweekly.com/link/120022/web "github.com") — 为大家准备了一份迟到的情人节礼物。你可以在 [这里](https://javascriptweekly.com/link/120023/web) 测试一下。
 

## 😍 有用的东西！

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/gmcrcdhpeh7yn8ngmref.jpg)

GitHub 为其自定义的 Markdown 添加了一个方便的功能，以便您可以使用与 Mermaid.js 相同的格式直接 [在 Markdown 中编写图表](https://javascriptweekly.com/link/120041/web)。

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/577)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/577)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)
