---
title: 'Node Weekly #430' # 不可修改
date: '2022-03-25' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: true # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/mk4qoxymndatnjbbvzdv.jpg)](https://nodeweekly.com/link/121346/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Tao of Node: On Design, Architecture and Best Practices](https://nodeweekly.com/link/121346/web "alexkondov.com") — A developer has boiled down all of the hard-earned best practices and gut feelings he’s picked up for developing high-quality Node apps over time. Opinionated, yes, but high level enough to provide value to most.

Alex Kondov

[Node v17.8.0 (Current) Released](https://nodeweekly.com/link/121347/web "nodejs.org") — A relatively minor update: npm upgraded to v8.5.5, an update to the [Undici](https://nodeweekly.com/link/121348/web) HTTP/1.1 client, and [you can now trace requests made by `http`](https://nodeweekly.com/link/121349/web) using `perf_hooks` to accurately measure round-trip time, etc.

Bryan English

[![](https://copm.s3.amazonaws.com/9b72307f.png)](https://nodeweekly.com/link/121350/web)

[React Authentication, Simplified](https://nodeweekly.com/link/121350/web "userfront.com") — In this article, we lay out a new approach to authentication (plus access control & SSO) in React applications.

Userfront sponsor

[Malicious npm Packages Targeting Azure Developers](https://nodeweekly.com/link/121351/web "jfrog.com") — No, this isn’t a repeat of [last week’s](https://nodeweekly.com/link/121352/web) tale of npm supply chain woes, but a discovery of _“hundreds of malicious packages designed to steal PII”_ targeting developers using packages under the `@azure` scope.

Polkovnychenko and Menashe (JFrog)

[Node.js Security Releases to Fix High Severity OpenSSL Bug](https://nodeweekly.com/link/121353/web "nodejs.org") — Last week they were imminent, but now they’re here in the form of [Node 12.22.11 (LTS)](https://nodeweekly.com/link/121354/web), [14.19.1 (LTS)](https://nodeweekly.com/link/121355/web), [16.14.2 (LTS)](https://nodeweekly.com/link/121356/web) and [17.7.2 (Current)](https://nodeweekly.com/link/121357/web) (though ignore the latter if you go for 17.8.0 above). The fix? [An OpenSSL bug](https://nodeweekly.com/link/121358/web) that could cause an infinite loop when parsing certain invalid certificates.

Joe Sepi (Node.js Project)

[AWS Graviton2 vs Apple M1 for Node.js Performance](https://nodeweekly.com/link/121362/web "spacedoutandsmiling.com") — A casual and personal benchmark, with all that implies, and while the M1 continues to impress for local development, it’s neat to see other production grade ARM-based systems ready to go too.

Jamie Knight

[How to Manage Sessions using Passport, Redis, and MySQL](https://nodeweekly.com/link/121364/web "arctype.com") — A practical walkthrough of creating a simple Express app with user credentials stored in MySQL, sessions in Redis, and Passport tying it all together. A commonly used pattern boiled down to the essentials.

Clara Ekekenta

[10 Best Practices to Containerize Node.js Web Applications with Docker](https://nodeweekly.com/link/121366/web "snyk.io")

Snyk sponsor

▶  [What's Really Going on Inside Your `node_modules` Folder: The Video](https://nodeweekly.com/link/121368/web "youtu.be") — Two weeks ago, we featured [an extensive written alternative](https://nodeweekly.com/link/121370/web) to this half-hour talk that dives into examples of recent supply chain attacks and some concrete steps you can take to protect your team from this emerging threat – but if you prefer talks/videos, this is well worth the time :-)

Feross Aboukhadijeh

[Authorization in a Microservices World](https://nodeweekly.com/link/121372/web "www.alexanderlolis.com") — Thinking through from a simple approach to full-on attribute-based access control. Not Node specific though the final example is Express-based.

Alexander Lolis

## 🛠 Code & Tools

[Dum: An `npm` Script Runner Written in Rust](https://nodeweekly.com/link/121374/web "github.com") — Continuing a trend of building JavaScript tools in, well, _not_ JavaScript, the curiously named ‘Dum’ aims to replace `npm run` and `npx` to shave milliseconds off the task startup time. YMMV..

EGOIST

[Video to Reels: Automatically Edit Videos to Post on Instagram Reels](https://nodeweekly.com/link/121376/web "github.com") — Powered by FFmpeg, ImageMagick, and zx. Features include rotate, resize, add a color filter, normalize audio, and more.

Diego Fernandes

[Metered Video: Developer First Video Calling API/SDK for Web & Mobile](https://nodeweekly.com/link/121377/web "www.metered.ca")

Metered Video sponsor

[Chrome Extension CLI: CLI for Building Chrome Extensions](https://nodeweekly.com/link/121379/web "github.com") — Want to get building an extension for Chrome as quickly as possible? This Node-powered tool aims to get you on the right path ASAP.

Dutiyesh Salunkhe

[Directus: Wrap an SQL Database with a Real-Time GraphQL + REST API](https://nodeweekly.com/link/121380/web "github.com") — A Node.js-powered open source system that can act as a frontend to Postgres, SQLite, MySQL, Oracle, and other SQL databases, and provide a modern dashboard, client, and both REST and GraphQL APIs. _(Note the GPL license.)_

Directus

[Chinese Random Name: Generate Random Chinese Names](https://nodeweekly.com/link/121381/web "github.com") — There’s surely an npm package for every want or desire.

Khaidi Chu

[graphql-request 4.2: A Minimal GraphQL Client Library](https://nodeweekly.com/link/121382/web)  
Prisma Labs

[HyperExpress: High Performance Node Server Powered by uWebSockets.js](https://nodeweekly.com/link/121383/web)  
Kartik

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/430)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/430)
> * 译者：
> * 校对者：
