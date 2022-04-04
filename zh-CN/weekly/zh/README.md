---
title: 'Node Weekly #426' #不可修改
date: '2022-02-25' #不可修改
categories:  #不可修改
  - 'Node Weekly'
publish: true #翻译完成后修改
---

😔 这对世界来说是艰难的一天，因此，我们与所有受欧洲目前正在发生的事件影响的人同在。 \_\_  
_Peter Cooper — 编辑_

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Node v17.6.0 (Current) 发布](https://nodeweekly.com/link/120185/web "nodejs.org") — 添加对 [通过 HTTPS 导入 ES 模块的实验性支持](https://nodeweekly.com/link/120202/web) — Hemanth HM 在 [Twitter 上有一段视频](https://nodeweekly.com/link/120187/web) 展示了此功能。 npm 升级到 8.5，并且像往常一样修复了许多小错误。

[Caxa：将 Node 应用程序打包成可执行二进制文件](https://nodeweekly.com/link/120203/web "github.com") — 如果您想创建 Node 应用程序的单个可执行版本，有很多选择，包括 Vercel 的 [pkg](https://nodeweekly.com/link/120204/web) 或 [nexe](https://nodeweekly.com/link/120205/web)。 Caxa 是一个固执己见的替代方案，它有一个非常详尽的 README，准确地涵盖了它的 [工作原理](https://nodeweekly.com/link/120206/web) 以及 [它与 pkg 和 nexe 的比较](https://nodeweekly.com/link/120207/web)。

<img src="https://copm.s3.amazonaws.com/8ab67d9c.png" style="width: 100px" />

[来自 RedisGreen 的安全 Redis 托管](https://nodeweekly.com/link/120188/web "dashboard.redisgreen.net") — 通过最新的 Redis 功能保护 Redis 托管，使用一些工具进行检测和扩展。

[如何使用 npm 覆盖修复安全漏洞](https://nodeweekly.com/link/120189/web "medium.com") — `package.json` 文件中的 [`Overrides`](https://nodeweekly.com/link/120190/web) 允许您将依赖关系树中的包替换为您选择的另一个版本，这可能是解决具有已知安全问题的依赖关系版本所必需的。

[Next.js 12.1 发布](https://nodeweekly.com/link/120191/web "nextjs.org") — 流行的 React 框架引入了按需增量静态再生 (ISR) 的 beta 版本，现在可以自动为您配置 Jest，并且可以为您的应用创建更小、更高效的 “独立” 构建以用于生产部署。

## **简介:**

*   在 Twitter 上，Simon Plenderleith 展示了一个使用 Node 的 [新 AbortSignal API 取消异步操作](https://nodeweekly.com/link/120208/web)的便捷技巧。

*   您的 Node 应用程序可能需要加强防范的 [25 个潜在安全漏洞](https://nodeweekly.com/link/120209/web)。

*   这是一个展示 [▶️ Playwright 1.19（流行的浏览器控件库）中的一些新功能](https://nodeweekly.com/link/120210/web) 的视频。

▶  [3.5 小时 Nest.js 初学者课程](https://nodeweekly.com/link/120195/web "www.youtube.com") — [Nest.js](https://nodeweekly.com/link/120196/web) 是一个流行的框架，用于使用 Node 构建后端应用程序和 API，这个视频将逐步介绍如何使用它构建您自己的 REST API，包括身份验证和数据库。

[如何在 AWS Lambda 上运行每个 Node.js 版本](https://nodeweekly.com/link/120216/web "fusebit.io") — [Everynode](https://nodeweekly.com/link/120217/web) 提供了一种在 AWS Lambda 上使用 v11 及更高版本的任何 Node 版本的方法。

[使用 Group Step 类型更好地组织大型和复杂的管道 ✨](https://nodeweekly.com/link/120194/web "buildkite.com")

[在 Node 中使用 CSV 文件的完整指南](https://nodeweekly.com/link/120211/web "blog.logrocket.com") — 看看如何在 Node 中管理 CSV 文件，以及包（如 csv-parser）如何在这方面提供帮助。

[Monorepos 说明](https://nodeweekly.com/link/120197/web "monorepo.tools") — 一个新网站，它汇集了您需要了解的关于 monorepos 的几乎所有信息，以及构建它们的工具。

## 🛠 代码 & 工具

[Beam：一个 Node 支持的团队留言板](https://nodeweekly.com/link/120213/web "planetscale.com") — Beam 是一个留言板，灵感来自 GitHub 上用于团队交流的类似专有系统。 [GitHub 存储库](https://nodeweekly.com/link/120214/web)。

[pm2 5.2 发布：Node 生产流程管理器](https://nodeweekly.com/link/120215/web "github.com") — 一个非常成熟且广泛使用的流程管理器，其中包括一个负载均衡器，用于保持 Node 应用程序永远存活 — pm2 仍然是 Node 生态系统的基本组成部分。

[如何使用 React Native 制作数据仪表板](https://nodeweekly.com/link/120198/web "www.influxdata.com")

[官方 MongoDB NodeJS 驱动 v4.4](https://nodeweekly.com/link/120199/web "github.com") — 具有一些新的身份验证和 KMS 相关功能。

[Couchnode 4.0：官方 Couchbase Node.js 客户端库](https://nodeweekly.com/link/120200/web)

[AutoCannon 7.7：快速的 HTTP/1.1 基准测试工具](https://nodeweekly.com/link/120201/web)

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/426)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/426)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)
