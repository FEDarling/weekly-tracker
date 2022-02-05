---
title: 'Node Weekly #417'
date: '2022-02-05'
categories: ["Node Weekly"]
publish: true
---

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/f2jffhszv9r1n44wzxx8.jpg)
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
[GitHub 推出适用于 npm Registry 的强制 2FA 和更多功能](https://nodeweekly.com/link/117313/web "github.blog") — 近年来，许多公共代码包注册中心都遇到了用户安全问题，尤其是单个受损包可能会对 npm 生态系统造成严重破坏。因此，GitHub 正在推进 “增强登录验证” 计划，包括在 2022 年初对高影响力软件包的发布者强制执行 2FA。如果你想检查你的 npm 帐户并提高其安全性，现在是时候了！

[为什么你应该检查你的 Node Dependencies](https://nodeweekly.com/link/117314/web "www.jackfranklin.co.uk") — 我目前在 Google 的 Chrome DevTools 团队工作，我们将 node_modules 文件夹检查到源代码管理中。起初这让我觉得很不寻常，但我开始相信这种方法有一些主要的好处，我认为更多的人应该考虑。

![](https://copm.s3.amazonaws.com/1830a3cb.jpg)

[基础即代码的 DevSecGuide](https://nodeweekly.com/link/117315/web "bridgecrew.io") — 了解有关 IaC 安全状态的研究、构建 DevSecOps 文化的实际步骤，以及在整个 DevOps 生命周期中嵌入自动化安全的技巧。

## **简介**

*   [npm 8.2.0](https://nodeweekly.com/link/117316/web) 已发布。
    
*   GitHub 正在对其 [代码搜索功能](https://nodeweekly.com/link/117317/web) 进行一些重大改进。
    
*   [Chalk 5.0](https://nodeweekly.com/link/117318/web)，流行的终端样式库，现已推出，并已成为纯 ESM。[然而](https://nodeweekly.com/link/117319/web)，TypeScript 用户会希望在 TypeScript 4.6 之前坚持使用 Chalk 4。
    


[你需要了解的Node.js内存限制](./nodejs_memory_limits_what_you_should_know.md) Node.js 在内存使用方面非常高效，所以你可能永远不会达到内存最大使用限制，但Node的内存管理的工作原理以及当程序出现内存限制和内存泄漏相关的问题时应该处理，都值得我们去了解。

[用 Node 对抗 TLS 指纹](https://nodeweekly.com/link/117321/web "httptoolkit.tech") — 出于各种原因，许多在线服务会使用指纹来跟踪人们对 Web 的使用 ，TLS 请求的可以做到这一点。

[想要方便的转移域名么? 👀 来看看这个吧 👉](https://nodeweekly.com/link/117322/web "dnsimple.link")

[使用 Postgres 和 TypeORM 创建视图](https://nodeweekly.com/link/117323/web "wanago.io") — [TypeORM](https://nodeweekly.com/link/117324/web) 是一种流行的 ORM，它支持 Active Record 和 Data Mapper 模式，可以在 Node.js 中使用。

[如何使用 React、Express.js 和 esbuild 设置服务器端渲染 (SSR)](https://nodeweekly.com/link/117325/web)

## 🛠 代码 & 工具

[graphql-request：用于 Node 和浏览器的最小 GraphQL 客户端](https://nodeweekly.com/link/117328/web "github.com") — 可以构建小型脚本和简单的应用程序，而不是像 Apollo 这样的大型项目。

[CSSO 5.0：具有结构优化的 CSS Minifier](https://nodeweekly.com/link/117330/web "github.com") — 一个清理、压缩和重组 CSS 的工具。新发布的 v5.0 也增加了 ES 模块支持和 CSS Selectors Level 4 支持。

[node-datachannel：Node.js 的 libdatachannel 绑定](https://nodeweekly.com/link/117331/web "github.com") — `libdatachannel` 是各种 WebRTC 标准以及 WebSockets 的基于 C++17 的独立实现，可在 POSIX 平台上使用。

[Node 视频：只需两次 API 调用即可构建视频](https://nodeweekly.com/link/117332/web "get.mux.com")

[Nock：HTTP 服务端模拟和封装库](https://nodeweekly.com/link/117333/web "github.com") — 假设您正在创建一个使用 HTTP 访问第三方服务的客户端库。 Nock 会让你通过模拟请求/响应来单独测试它。

[Ink 3.2：基于 React 构建的交互式 CLI 应用程序](https://nodeweekly.com/link/117334/web "github.com") — 使用 React 风格的组件构建您的命令行应用程序。

[github-unstar：取消星标所有已加星标的 GitHub 存储库](https://nodeweekly.com/link/117335/web "github.com") — 如果您在 GitHub 上为太多的 repos 加注星标并且想从头开始，这个快速脚本可能会有所帮助。

[async-sema：用于 `async` 和 `await` 的 Semaphore 实现](https://nodeweekly.com/link/117336/web)

[jsdom 19.0：用于 Node 的 Web 标准的纯 JS 实现](https://nodeweekly.com/link/117337/web)  

[Multer：处理 “multipart/form-data” 提交的中间件](https://nodeweekly.com/link/117338/web)  

[Zod：静态类型推理的 TypeScript-First 模式验证](https://nodeweekly.com/link/117339/web)  

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/link/117312/web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/417/README.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)