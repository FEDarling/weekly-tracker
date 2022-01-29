---
title: 'JavaScript Weekly #399'
date: '2018-08-17'
categories: ["JavaScript Weekly"]
publish: true
---

本周过去的一次爆炸新闻，因为我们需要一些时间来询问 Axel Rauschmayer 博士（一名 JavaScript Weekly 的前编辑）有关他的新书 [不耐烦程序员的 JavaScript](https://javascriptweekly.com/link/51522/web) 发行的一些问题。 你可以在本期的后面找到它:-)
_— Peter Cooper, editor_
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/dgt2wojtjualvh9aiwvs.jpg)

[JavaScript引擎基础：优化原型](./js_engine_optimizing_prototype.md) — 深入理解 JavaScript 引擎的工作原理可以帮助您推理代码的性能，这篇图表丰富的文章深入探讨了围绕 JavaScript 对基于原型的继承使用进行的引擎优化。

▶  [Kyle Simpson 说要在 JavaScript 上继续加油](https://javascriptweekly.com/link/51541/web) — 回顾一下“我们的历程”，看看 JavaScript 的未来之路可能是什么样的。拍摄于巴塞罗那 JSCamp。[这是相关幻灯片](https://javascriptweekly.com/link/51542/web)。

![](https://copm.s3.amazonaws.com/32fbb648.png)

[如何为移动开发选择最佳框架？](https://javascriptweekly.com/link/51523/web) — 移动开发发生了很多变化，我们为您整理了一系列现代的资料。这是一个长期的决策，您必须明智地选择。下载我们的免费电子书以了解更多信息。

[16 个 JavaScript 数据可视化和图表库](https://javascriptweekly.com/link/51543/web) — 本篇讲述了相当广泛的图表库，比较了图表类型、商用还是免费等关键因素及其开源状态。

[V8 的嵌入式内置函数以及将 V8 的堆大小减少了 19%](https://javascriptweekly.com/link/51544/web) — V8 JavaScript 引擎附带了一个广泛的内置函数库，并且在减少内存开销方面做了很多工作。

[Visual Studio Code 2018 年 7 月更新](https://javascriptweekly.com/link/51546/web) — JavaScript 世界中最流行的编辑器添加了多种功能，其中许多是面向 JS 的，包括 [JSX 标记](https://javascriptweekly.com/link/51547/web)、[“添加缺失的imports”](https://javascriptweekly.com/link/51548/web) 以及更好的 JS/TS 错误报告。

## 📘 教程 和 意见

[JavaScript 项目你最终会学到的 10 件事](https://javascriptweekly.com/link/51549/web) — 可以协调管理项目的一种常见的模式。

[通过代理设置常量](https://javascriptweekly.com/link/51550/web)

[构建 Netflix 风格的视频交互平台](https://javascriptweekly.com/link/51527/web) — 适用于所有平台的 SDK — 和 Netflix 和 YouTube 相同的质量和速度播放视频。

[Angular CLI 的 Budgets 如何节省我的时间，并且如何节省您的时间](https://javascriptweekly.com/link/51551/web) — 贯穿 Angular 的 Budgets 是什么，它们可以帮助解决哪些问题。

[通用传感器 API](https://javascriptweekly.com/link/51552/web) — [通用传感器 API](https://javascriptweekly.com/link/51553/web) 旨在为客户端设备传感器提供一致的 JS API。

[使用 Vuex 在 Vue 中进行身份验证](https://javascriptweekly.com/link/51554/web)


▶  [第三方脚本的 Web 性能：两次对话](https://javascriptweekly.com/link/51555/web) — 两次对话可帮助您考虑第三方脚本可能对您网站的性能产生的影响。

▶  [使用 Cypress.io 进行下一代前端测试](https://javascriptweekly.com/link/51556/web)

[看看为什么 Facebook、Spotify 和 Sony 信任 CircleCI 和它的 CI/CD](https://javascriptweekly.com/link/51528/web)

▶  [与 Ember 联合创始人 Tom Dale 就 Ember 3.0 和 Ember 的未来进行对话](https://javascriptweekly.com/link/51557/web)

[一个提案：JavaScript 中的 Elixir 风格 modules](https://javascriptweekly.com/link/51558/web)

[在下一个 Web 项目中使用 Vue.js 的三个理由](https://javascriptweekly.com/link/51559/web)


![Dr. Axel Rauschmayer](https://res.cloudinary.com/cpress/image/upload/v1534501855/xm6jiym0dfvjwzh2t6hp.png)

> ### 与 Axel Rauschmayer 博士的问答，JavaScript 书籍作者和培训师，德国慕尼黑
> 
> 为了庆祝他的新书 [《不耐烦程序员的 JavaScript》](https://javascriptweekly.com/link/51522/web) 的发行，我们采访了曾经的 JavaScript 周刊编辑 [Axel Rauschmayer 博士](https://twitter.com/rauschma)，向他提出了几个问题：
>
> **什么是 “不耐烦” 的程序员？**
>
> 为什么起名字叫 “不耐烦”，因为希望他们可以立马上手 JavaScript。
> 
> 章节分为两部分。首先，基础知识，也就是需要知道的基础是什么？然后，进阶知识，就是一旦你熟悉了该语言，你要做什么？
> 
> 据我所知，这是唯一一本涵盖所有 JavaScript 的书，包括最新版本（ES2018）。这也方便了我写书的时候新的 API 可以取代旧的 API （不过我也对废弃 API 提供了相关参考资料）。
>
> **您认为最近有哪些 JavaScript 功能未被充分利用且值得更多关注？**
>
> 我觉得有三个：
> 
> *  如果是 “无语但是重要” 的话，我觉得是 modules 和 classes，因为它们规范了之前的东西。
> *  对迭代的内置支持，尤其是与解构一起使用：`for (const [i, x] of arr.entries()) console.log(i, x);`
> *  异步函数和异步迭代让异步编程更爽。它们是从 ES6 中的 Promises 开始的标准化过程的。
>
> *Axel Rauschmayer 博士是《不耐烦程序员的 JavaScript》的作者 — 现已出版。*

## 🔧 代码 和 工具

[Tone.js：用于在浏览器中制作交互式音乐的 Web 音频框架](https://javascriptweekly.com/link/51560/web) — 这里有很多 [例子](https://javascriptweekly.com/link/51561/web)

[SpaceTime：一个轻量级的 JavaScript 时区库](https://javascriptweekly.com/link/51562/web)

[快速爬取并修复。超过 50 万开发人员使用 Sentry 修复错误](https://javascriptweekly.com/link/51530/web) — 根据提交只通知某些人，并在带有源映射的堆栈跟踪中查看未压缩的代码。

[from-html：直接从 HTML 字符串中获取元素引用](https://javascriptweekly.com/link/51563/web) — 一种创建嵌套 DOM 元素的有趣且直接的方法。

[flowchart.js：将图表的文本表示转换为流程图](https://javascriptweekly.com/link/51564/web) — 想要类似 UML 序列图的东西吗？[来吧！](https://javascriptweekly.com/link/51565/web)

## 📅 一些即将到来的 JavaScript events

*   [JSCamp 2018（9 月 22 日在伊利诺伊州芝加哥举行）](https://javascriptweekly.com/link/51531/web) — 一整天的实事
*   [2018 年框架峰会（10 月 2 日至 3 日，犹他州帕克城）](https://javascriptweekly.com/link/51532/web) — 一个为期 2 天的会议专注于所有前端框架，并由最受欢迎的团队发表主题演讲。
*   [JS Interactive（10 月 10 日至 12 日，加拿大温哥华）](https://javascriptweekly.com/link/51533/web) — 最大的 JavaScript 事件之一。由 Linux 基金会组织。 
*   [JSMobileConf（10 月 25 日至 26 日，马萨诸塞州波士顿）](https://javascriptweekly.com/link/51534/web) — 本次活动令人深刻的演讲者，重点关注移动和物联网。

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/link/51521/web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/399/README.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：