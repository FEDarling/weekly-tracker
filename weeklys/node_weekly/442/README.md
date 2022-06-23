---
title: 'Node Weekly #442' # 不可修改
date: '2022-06-18' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

![Node.js Weekly](https://res.cloudinary.com/cpress/image/upload/v1653576619/lgfqinzbdqttwmhvljxb.png)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/jowpbxj6eevdnde1pfcd.jpg)](https://nodeweekly.com/link/124908/web)

[zx v7.0: Better Script Writing with Node.js](https://nodeweekly.com/link/124908/web "github.com") — No, not movie scripts, but shell scripts and the like. If writing JavaScript instead of wrestling with bash, Perl or Python sounds better to you, zx can make your life easier. v7.0 is fully rewritten in TypeScript, has an [`echo`](https://nodeweekly.com/link/124909/web) function for printing the output of other scripts, [`within`](https://nodeweekly.com/link/124910/web) for creating new async contexts, and a new interactive REPL mode (behind `-i`).

Google

[Node.js 16 to Meet an Early Demise (in 2023)](https://nodeweekly.com/link/124879/web "nodejs.org") — The Node.js team is bringing forward the ‘end of life’ date of Node.js 16 by seven months due to OpenSSL 1.1.1, a fundamental dependency, reaching its own end of support in September 2023. Don’t panic. You’ve got over a year to get to grips with Node.js 18.

Richard Lau

[![](https://copm.s3.amazonaws.com/cd7a2f50.jpg)](https://nodeweekly.com/link/124880/web)

[New Fullstack TypeScript Course](https://nodeweekly.com/link/124880/web "frontendmasters.com") — Build a full-stack app that generates TypeScript code from data layer to front-end all from a GraphQL schema.

Frontend Masters sponsor

[Scaling GraphQL with Redis Consumer Groups](https://nodeweekly.com/link/124881/web "www.parabol.co") — A useful look at some of the architecture of how a SaaS product is horizontally scaling Node-based services on Redis, particularly using [streams](https://nodeweekly.com/link/124882/web).

Matthew Krick

[How to Scrape eBay Organic Results with Node](https://nodeweekly.com/link/124883/web "dev.to") — eBay probably won’t like it, but it [might be legal](https://nodeweekly.com/link/124884/web) where you are, and this post mentions the fabulous _Selector Gadget_, perhaps my longest installed browser extension.

Mikhail Zub

[NestJS + Postgres Local Development with Docker Compose](https://nodeweekly.com/link/124886/web)  
Tom Ray

## **QUICK BYTES:**

*   I have no affiliation with them, but based on recent experiences, give [fly.io](https://nodeweekly.com/link/124887/web) a try if you want to rapidly get a Node app running on the Web. Fabulous DX and a good free tier. Interesting modern alternative to Heroku. _([Render](https://nodeweekly.com/link/124888/web) and [Railway](https://nodeweekly.com/link/124889/web) are also good, but I've spent less time with them so far.)_
    
*   Talking of Heroku, you can learn about [their new Heroku 22 stack](https://nodeweekly.com/link/124890/web) which is based on Ubuntu 22.04. Node.js 14.x, 16.x, and 17.x are supported out of the box.
    
## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/cud3zciu2wfwzf8vklz8.jpg)](https://nodeweekly.com/link/124892/web)

[Strapi v4.2: The Open-Source Node.js Headless CMS](https://nodeweekly.com/link/124892/web "strapi.io") — Strapi has commercially moved somewhat beyond being merely a handy open-source Node project (it even has its own [marketplace of plugins](https://nodeweekly.com/link/124893/web) now) but it’s still MIT licensed and [rocking away on GitHub](https://nodeweekly.com/link/124894/web).

Anastasiia Shpiliak

[ow 1.0: Function Argument Validation for Humans](https://nodeweekly.com/link/124895/web "sindresorhus.com") — A fluent API to define constraints for function arguments (e.g. `ow(input, ow.string.minLength(5))`) and get nice error messages if those validations fail. Now a pure ESM package. [GitHub repo](https://nodeweekly.com/link/124896/web).

Sindre Sorhus

[Run Node.js Unikernels - Easier Than Containers or Serverless](https://nodeweekly.com/link/124885/web)

NanoVMs sponsor

[Mercurius 10.0: Implement GraphQL Servers and Gateways with Fastify](https://nodeweekly.com/link/124897/web "github.com") — Maybe it’s just a side effect of the [Fastify 4](https://nodeweekly.com/link/124898/web) release last week, but I’m seeing Fastify mentioned _everywhere_ lately. Mercurius helps you bring GraphQL to Fastify’s typically RESTful party.

Matteo Collina and contributors

[cat-names 3.1: Get Popular Cat Names](https://nodeweekly.com/link/124900/web "github.com") — Do you need access to random cat names in your app? Live a little.

Sindre Sorhus

[Node File Trace: A Node.js Dependency Tracing Utility](https://nodeweekly.com/link/124901/web "github.com") — This less controversial type of NFT (😏) can be used to determine exactly which files are needed for a Node app to run.

Vercel

[The Ultimate Developer Toolkit for In-App Chat + Activity Feeds](https://nodeweekly.com/link/124899/web "getstream.io")

Stream sponsor

## **BRIEF RELEASES:**

[NodeBB 2.2](https://nodeweekly.com/link/124902/web) – Node-based forum software.  
[ws 8.8](https://nodeweekly.com/link/124903/web) – WebSocket client and server library.  
[Jasmine 2.4](https://nodeweekly.com/link/124904/web) – Testing framework.  
[MikroORM 5.2](https://nodeweekly.com/link/124905/web) – Data Mapper ORM for TypeScript.  
[pnpm 7.2.1](https://nodeweekly.com/link/124906/web) – Smaller, faster package manager.  
[nodejs-datastore 7.0](https://nodeweekly.com/link/124907/web) – Official client for Google Cloud Datastore.

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/442)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/442)
> * 译者：
> * 校对者：
