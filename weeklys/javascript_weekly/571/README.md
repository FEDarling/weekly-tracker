---
title: 'JavaScript Weekly #571'
date: '2022-02-03'
categories: ['JavaScript Weekly']
publish: true
---

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/okp6c8oqh1hp0wwnsggz.jpg)
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
[2021 年的 JavaScript 新星](https://javascriptweekly.com/link/118206/web "risingstars.js.org") — 这是连续第 6 年在 GitHub 上流行的 JavaScript 新星。星级虽然不是判定项目好坏的唯一方法，但它是一种方法，我们倾向于用它来发现一些值得一试的项目和库。 2021 年对于 JavaScript 来说是强劲的一年，尤其是对于 Next.js、Vite 和 zx 等项目而言！

[ES2022 版 “不耐烦程序员的 JavaScript”](https://javascriptweekly.com/link/118207/web "exploringjs.com") — Axel 博士已将他的畅销书更新为 ES2022 标准（ES2022 将在今年晚些时候最终确定为标准），您仍然可以 [在线阅读](https://javascriptweekly.com/link/118208/web) 整本书。[这是 ES2022 部分的新增功能](https://javascriptweekly.com/link/118209/web)。

![](https://copm.s3.amazonaws.com/5eaf2dfb.png)

[像 “Hello World” 一样简单的 AI 聊天机器人](https://javascriptweekly.com/link/118210/web "bit.ly") — 使用专为开发人员设计的开源平台 Botpress 为您的网站或应用程序构建对话界面。创建线上环境、可靠且可扩展的聊天机器人 — 无需数据科学家或 ML 专家团队。

[Fuite：在 Web 应用程序中查找内存泄漏的工具](./fuite.md) — 分享一个用来检测内存泄漏的工具 Fuite。

## **简述:**

*  **如果你使用的是 Faker.js**，你可能会想找到一个替代方案，因为创建者已经 [删掉了 repo 仓库](https://javascriptweekly.com/link/118211/web)。不过有人有 [fork](https://javascriptweekly.com/link/118212/web) 哦。
    
*  TC39er 播客的最新一集是 ▶️ 对 [支持阵列分组](https://javascriptweekly.com/link/118214/web) 提案的 [Google 的 Justin Ridgewell 的采访](https://javascriptweekly.com/link/118213/web)。

    
*  Node.js 将在 1 月 10 日或之后不久发布一些 [稳定版本](https://javascriptweekly.com/link/118244/web)。
    

## **版本更新:**

[Ember.js 4.1](https://javascriptweekly.com/link/118221/web)，在 12 月的 [Ember 4.0](https://javascriptweekly.com/link/118250/web) 之后。
[ESLint 8.6.0](https://javascriptweekly.com/link/118215/web)  
[Jasmine 4.0](https://javascriptweekly.com/link/118216/web) — Node和浏览器的测试框架。
[AVA 4](https://javascriptweekly.com/link/118217/web) — Node 测试程序。
[History 5.2](https://javascriptweekly.com/link/118218/web) — 用 JS 管理 session 历史。
[fast-json-stringify 3.0](https://javascriptweekly.com/link/118219/web) — 速度超快的 `JSON.stringify()`。
[Chart.js 3.7](https://javascriptweekly.com/link/118222/web) — 简单的基于画布的 HTML5 图表。

## 📒 文章 & 教程

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/i41wbbggotsyooecfufa.jpg)

[JS 中的自我分析 API 已在实践阶段](https://javascriptweekly.com/link/118245/web "calendar.perfplanet.com") — 它是一个 API，允许 webapps 控制采样分析器以测量客户端 JavaScript 执行时间。不出所料，它目前仅在 Chrome 94+ 中。

[2小时内构建一个监控应用](https://javascriptweekly.com/link/118226/web "www.influxdata.com") — 关于如何构建物联网、程序或基础设施监控时间序列程序的免费现场实践培训。

[Array.flatMap：一个灵活好用的 Map 方法](./flatMap.md) — 分享一个相对于 `array.map` 更加灵活好用的Map方法。

[是时候使用 JavaScript 的 Temporal API 了吗?](https://javascriptweekly.com/link/118252/web "blog.openreplay.com") — JavaScript 中的日期处理很痛苦，是时候使用 Temporal API 了。

[Metho：一种为 JS 添加 “超能力” 的方法](https://javascriptweekly.com/link/118241/web "dev.to") — 我看到很多地方都提到了说 “它很好用，但请不要在生产代码中使用”。您想怎么用就怎么用，但 Metho 确实可以让您以一些相当漂亮的方式来扭转 JS，但也希望您首先站在您的团队这一边；-) [GitHub 仓库](https://javascriptweekly.com/link/118242/web)。

[React Calendar Vs Scheduler：区别以及如何使用](https://javascriptweekly.com/link/118227/web "www.telerik.com")

[在 AWS Lambda 中使用 Node.js ES 模块和顶级 `await`](https://javascriptweekly.com/link/118246/web "aws.amazon.com") — Serverless AWS Lambda 函数现在在 Node.js 14.x 运行时上支持 ES 模块。

▶  [5 分钟内学会命令式与声明式编程](https://javascriptweekly.com/link/118229/web "www.youtube.com") — 有趣，言简意赅，可能会引起你的注意。

[用于全栈 Web 应用程序开发的 SvelteKit 评估](https://javascriptweekly.com/link/118254/web) 

## 🛠 代码 & 工具

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/vftn94atpdy5kr3t9ncc.jpg)

[Perspective 1.1：通过 WebAssembly 的快速流数据可视化](https://javascriptweekly.com/link/118230/web "perspective.finos.org") — Perspective 最初是为 J.P. Morgan 构建的，用于构建实时高性能交互式可视化，由编译为 WASM 的 C++ 引擎提供支持。 [GitHub repo](https://javascriptweekly.com/link/118231/web)。

[jsPDF 2.5：客户端 JavaScript PDF 生成](https://javascriptweekly.com/link/118233/web "github.com") — 即时创建票证、文件、证书等。该项目的 [主页](https://javascriptweekly.com/link/118234/web) 上有一个现场演示。

[试试 Vultr](https://javascriptweekly.com/link/118235/web "vultr.com")

[Vanta.js：您网站的 3D WebGL 背景动画](https://javascriptweekly.com/link/118236/web "www.vantajs.com") — 从预定义的背景动画之一中进行选择，然后使用 UI 来调整设置。当然，要谨慎使用，在您需要时可以使用一组简洁的效果。

[Solid 1.3：无 VDOM 的声明式 JS UI 库](https://javascriptweekly.com/link/118255/web "github.com") — 这个版本号称是 “大版本”，重点是改进 Solid 的服务器端渲染，支持 HTML 流和多个隔离的异步水合。[这是主页](https://javascriptweekly.com/link/118256/web)。

[Choices.js 10.0：可配置的选择框/文本输入插件](https://javascriptweekly.com/link/118237/web "choices-js.github.io") — 这里有很多示例，或者您可以直接访问 [GitHub 仓库](https://javascriptweekly.com/link/118238/web)。

[在线试用 JavaScript：简单的基于 Web 的 JavaScript 控制台输入](https://javascriptweekly.com/link/118239/web "try.javascript.org.pl") — 这是一个与网页并排的控制台，因此您可以在学习时运行脚本片段。默认示例网页是 [Eloquent JavaScript](https://javascriptweekly.com/link/118240/web)，您可以输入任何在线资源。

## 🎮 再来些有趣的..

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/hce7towly1rauc277yl5.jpg)

[PrinceJS：浏览器中的波斯王子](https://javascriptweekly.com/link/118247/web "princejs.com") — 波斯王子是我在 90 年代初第一次看到的游戏，尽管当时的画面有限，但游戏的气氛和主角动作的流畅性给我留下了深刻的印象，现在它有了 Web 端。 [这是代码](https://javascriptweekly.com/link/118249/web)  
  
顺便说一句，Jordan Mechner（波斯王子的创造者）写了一本关于我几年前非常喜欢的 [游戏创作的书籍](https://javascriptweekly.com/link/118248/web)。如果您喜欢游戏开发，那么它非常值得一读。

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nolanlawson.com/2021/12/17/introducing-fuite-a-tool-for-finding-memory-leaks-in-web-apps/)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/571/README.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)
