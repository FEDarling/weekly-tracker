---
title: 'Node Weekly #421'
date: '2022-01-25'
categories: ['Node Weekly']
publish: true
---

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/bammidsgeedeqn4k060q.jpg)

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

[Remix vs Next.js](https://nodeweekly.com/link/118741/web "remix.run") — 虽然这是由 Remix 团队写的文章，但它对其方法论持开放态度，并试图在比对中保持公平。

[Eleventy v1.0：Node 驱动的静态站点生成器](https://nodeweekly.com/link/118743/web "www.11ty.dev") — 作为 Ruby 驱动的 [Jekyll](https://nodeweekly.com/link/118744/web) 的替代品，Eleventy（又名 11ty）同样可以将模板目录转换为静态 HTML 站点，以便在您喜欢的任何地方进行部署。 [v1.0.0](https://nodeweekly.com/link/118745/web) 发行说明提供了更多信息。

<img src="https://copm.s3.amazonaws.com/0b1f8e05.jpg" style="width: 150px" />

[无成本的云基础设施](https://nodeweekly.com/link/118746/web "vultr.com") — Vultr 以 Big Tech 成本的一小部分提供云计算和简化的实例管理。立即兑换 100 美元的基础设施信用额度，就可以在全球范围内部署超大规模裸机、虚拟服务器和存储。

[Node v17.4.0 (Current) 发布](https://nodeweekly.com/link/118747/web "nodejs.org") — 发布了许多小的修复和更新，对 libuv 和 npm 进行了少量升级，[对流进行了一些小的添加](https://nodeweekly.com/link/118748/web)（开始与 TC39 的 [迭代器助手提案](https://nodeweekly.com/link/118749/web) 保持一致），并且 `child_process.fork` 上的模块路径现在 [可以是 URL 对象](https://nodeweekly.com/link/118750/web)。

## **简介:**

*   上周我们报道了一个关于 Faker.js 库的维护者如何破坏软件包的故事 — 好吧，Faker 项目已经有了一个新的团队。
    
*   📅 [“Next 10”](https://nodeweekly.com/link/118752/web) 是 Node 项目中讨论 Node 未来的一个小组和概念的名称，他们在 1 月 27 日举行了一次 [小型峰会](https://nodeweekly.com/link/118753/web) — 他们希望鼓励任何对 HTTP 或文档感兴趣的人参加。
    
*   Simon Plenderleith [提醒](https://nodeweekly.com/link/118754/web) 说，从 Node 17 开始，要深度克隆一个值，您可以使用 WHATWG 的 `structuredClone()` 方法。

[像专业人士一样嘲笑 Undici](https://nodeweekly.com/link/118757/web "fusebit.io") — [Undici](https://nodeweekly.com/link/118758/web) 是强烈推荐的 HTTP/1.1 客户端，它改进了标准库提供的功能。

[使用 `nbb` 创建 AWS Lambda 函数](https://nodeweekly.com/link/118759/web "blog.michielborkent.nl") — [nbb](https://nodeweekly.com/link/118760/web) 是一个运行在 Node.js 之上的 ClojureScript 环境，因此它非常适合 AWS Lambda。 Node 没必要总和 JavaScript 相关 :-)

[使用 Node 创建开放图形图像生成器](https://nodeweekly.com/link/118761/web "blog.logrocket.com") — 使用 Node.js 设置服务器以动态生成图像并减少创建 Open Graph 图像的手动工作量。

[阅读 Elotl 如何使用 Buildkite 和 Amazon EKS 在 Kubernetes 中自动扩展 CI](https://nodeweekly.com/link/118762/web "buildkite.com")

[如何使用 TypeScript 设置 Node 项目](https://nodeweekly.com/link/118763/web "blog.appsignal.com")

## 🛠  代码 & 工具

<img src="https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/pfspvjbqbtuykuv2dpv0.jpg" style="width: 700px" />

[NodeBB 1.19.0：基于 Node 的论坛软件](https://nodeweekly.com/link/118764/web "github.com") — 它已经存在多年了，是一个稳定而成熟的平台。但是请注意，它是 GPL 许可的。

[Better-sqlite3 7.5：一个简单、快速的 Node 的 SQLite3 库](https://nodeweekly.com/link/118765/web "github.com") — 此版本将 SQLite 更新到 v3.37（v3.37 尤其引入了 [STRICT 表](https://nodeweekly.com/link/118766/web)），删除了依赖项，减小了安装大小以及其他一些小问题。

[Doppler — 将所有环境变量集中在一处](https://nodeweekly.com/link/118767/web "www.doppler.com")

[Dynamoose 2.8：亚马逊 DynamoDB 的建模工具](https://nodeweekly.com/link/118768/web "github.com") — 正如 [Mongoose](https://nodeweekly.com/link/118769/web) 源于 MongoDB，Dynamoose 试图成为 Amazon 的 DynamoDB。

[Rockpack 2.0：另一种 React App Builder](https://nodeweekly.com/link/118770/web "github.com") — 与 Create React App 一样，其目标是尽可能缩短项目设置时间，但 Rockpack 持有一些不同的意见，并包含了很多想法，包括现在的服务器端渲染。

[Discord.js 13.6.0：与 Discord API 交互的库](https://nodeweekly.com/link/118771/web "github.com") — 一种为广受欢迎的 Discord 聊天系统编写机器人或类似工具的方法。

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/421)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/421/README.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)
