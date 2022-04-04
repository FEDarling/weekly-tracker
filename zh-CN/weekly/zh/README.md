---
title: 'Node Weekly #420'
date: '2022-01-24'
categories:
  - 'Node Weekly'
publish: true
---

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/atob1apx6ssqgdj3e7bg.jpg)

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

[JavaScript 开发者破解了两个流行的 npm 包](https://nodeweekly.com/link/118370/web "www.theregister.com") — Faker.js 和 colors.js 这两个包的创建者最近对他的项目进行了一些非正式的提交，这导致它们要么消失要么烂尾。

[2022 年 1 月 10 日 Node.js 更新](https://nodeweekly.com/link/118374/web "nodejs.org") — 更新了很多主要版本，以解决一些漏洞。有 Node 17.3.1，以及联合 LTS 版本 16.13.2、14.18.3 和 12.22.9。

![](https://copm.s3.amazonaws.com/1eddf7b4.png)

[AppSignal 的呼声很大](https://nodeweekly.com/link/118379/web "www.appsignal.com") — AppSignal 可帮助您检查和改进 Node.js 应用程序的性能。增强了客户体验，并确保您的应用程序保持高性能。

[npm 今天应该做什么来阻止明天的新颜色攻击](https://nodeweekly.com/link/118380/web "research.swtch.com") — _“NPM 的设计存在一个问题，一旦发布了错误版本包，新安装的终端就会立即开始使用，而不会去测试它的兼容性。 （剧透：不是！）”_ — Russ 解释了用 Go 的方法如何避免这样的问题。

[NAPI-RS 2.0：在 Rust 中构建节点插件的最小库](https://nodeweekly.com/link/118381/web "napi.rs") — 这是一个用 “Rustify” Node 并以流行的系统语言构建预编译的 Node.js 插件的好方法。 v2 引入了一个新的宏 API，用于在 Rust 中定义 JS 值，并使 Rust 代码更容易编写。现在还支持异步函数，这太棒了。 [Neon](https://nodeweekly.com/link/118382/web) 在这个领域也探索了类似的想法。

[0x 5.0：Node 的单命令火焰图分析](https://nodeweekly.com/link/118383/web "github.com") — 一种可以在单个命令中为 Node 进程分析和生成交互式火焰图（示例）的工具。

[在 AWS Lambda 中使用 Node.js ES 模块和顶级 `await`](https://nodeweekly.com/link/118387/web "aws.amazon.com") — Serverless AWS Lambda 函数现在通过 Node.js 14.x 运行时支持 ES 模块。

[2021 年 Red Hat 对 Node.js 的回顾](https://nodeweekly.com/link/118388/web "developers.redhat.com") — Red Hat 拥有自己的 Node.js 团队，这是他们在 2021 年取得的成就，包括开发 Node 17、提供各种有用的备忘单，以及在 Red Hat OpenShift 上使用 Serverless Node。

[少想，多做：使用 ThePrimeagen 减少认知开销](https://nodeweekly.com/link/118390/web "about.sourcegraph.com")

[提问 HN：有没有 Node.js 复杂架构的资源？](https://nodeweekly.com/link/118391/web)

## 🛠 代码 & 工具

[Robots Parser 3.0: 一个 `robots.txt` 解析](https://nodeweekly.com/link/118392/web "github.com") — 如果您正在抓取或以其他方式向其他人的网站发出自动请求，那么遵守他们的 “robots.txt” 规则是一种很好的做法，它可以帮助您解决问题。

[Instauto: 一个 Instagram 机器人 / 自动化库](https://nodeweekly.com/link/118393/web "github.com") — 使用 Puppeteer 完成复杂的工作。这里重点讲了它的易用性。

[fast-json-stringify 3.0：比 `JSON.stringify()` 快 2 倍？](https://nodeweekly.com/link/118394/web "github.com")

[使用 Retool 在几分钟内构建内部工具，可视化编程与手写代码的较量](https://nodeweekly.com/link/118395/web "retool.com")

[Jasmine 4.0：浏览器和 Node 的测试框架](https://nodeweekly.com/link/118396/web "github.com") — 它有一些重大的更改（不支持 IE，不支持旧 Node 版本，行为更改等等），不过如果您是 Jasmine 用户，有一个 [迁移指南](https://nodeweekly.com/link/118397/web) 可以使其更简单。

[active-win 7.7.0：获取有关活动窗口的元数据](https://nodeweekly.com/link/118398/web "github.com") — 您可以使用它来获取当前活动窗口的标题、宽度、高度、x 和 y。也许对构建您自己的生产力跟踪器或其他东西有用？现在原生支持 Apple Silicon。

[public-ip 5.0：快速获取您的公共 IP 地址](https://nodeweekly.com/link/118399/web "github.com") — 查询 OpenDNS、Google DNS 和 HTTPS 服务的 DNS 记录以确定您的 IP 地址。现在它是一个纯 ES 模块。

[MongoDB Node.js 官方驱动 v4.3.0](https://nodeweekly.com/link/118400/web "github.com") — 如果您使用 TypeScript，可以在文档上添加 SOCKS5 支持和自动完成支持以及类型提示（这些都在这些发行说明中进行了解释）。

[TypeScript Express 入门应用程序 7.0](https://nodeweekly.com/link/118401/web "github.com") — 一个样板应用程序生成器，用于在 PM2、SWC 和 Docker 等基础上快速启动和运行 RESTful API。您也可以使用 Sequelize、Mongoose、TypeORM、Prisma 或 Knex ，从子模板中进行选择。

[SuperTest 6.2：用于测试节点 HTTP 服务器的超级代理驱动库](https://nodeweekly.com/link/118402/web "github.com") — 使用流利的 API 对 HTTP 服务器进行断言。

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/420)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/420)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)

