---
title: 'Node Weekly #441' # 不可修改
date: '2022-06-11' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/tskqqqzp8qzyi5unp1lx.jpg)](https://nodeweekly.com/link/124583/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Fastify 4.0 Released](https://nodeweekly.com/link/124583/web "medium.com") — The first major release of a popular, high performance Node.js Web framework in two years warrants some celebration. A focus has been placed on stabilization, modernization, and improving the already quite stable developer experience, rather than flashy new features, although this post does cover a few updates.

Fastify Team

❓ Why try Fastify vs Express? Well, [it's faster](https://nodeweekly.com/link/124584/web), sees more frequent updates, has an LTS policy, [and more.](https://nodeweekly.com/link/124585/web)

[![](https://copm.s3.amazonaws.com/818f6dd1.jpg)](https://nodeweekly.com/link/124586/web)

[Couchbase Capella DBaaS: Store in JSON, Access with SQL](https://nodeweekly.com/link/124586/web "www.couchbase.com") — Build faster with in-memory performance, automatic replication and scaling. Try it now for free and be live in under 3 minutes.

Couchbase sponsor

## **Quick bits:**

*   🤡 Did you know you can [write add-ons](https://nodeweekly.com/link/124587/web) for Office apps in JavaScript? So, naturally, you'll want to [▶️ implement Wordle in Microsoft Word](https://nodeweekly.com/link/124588/web) with this new-found knowledge.
    
*   Staying with Microsoft, the Azure team has [a new major version](https://nodeweekly.com/link/124589/web) of the Durable Functions SDK for Node.js – DF provides a way to create stateful services that run serverlessly.
    
*   [RedwoodJS](https://nodeweekly.com/link/124590/web) – explained [▶️ in 100 seconds.](https://nodeweekly.com/link/124591/web)
    

[The Case for Prisma in the 'Jamstack'](https://nodeweekly.com/link/124592/web "www.smashingmagazine.com") — Prisma is a an ORM built for JavaScript and TypeScript, which can be useful for connecting to data within the backend of your Jamstack application. The author makes the case for _why_ Prisma and shows how to integrate it with Next.js, RedwoodJS and Cloudflare Workers.

Sam Poder

[Creating a GraphQL Server in Node.js](https://nodeweekly.com/link/124593/web "www.honeybadger.io") — A walkthrough, along with downloadable code, of creating a GraphQL API server using [Mercurius](https://nodeweekly.com/link/124594/web), a GraphQL adapter for the [Fastify](https://nodeweekly.com/link/124595/web) framework.

Kevin Cunningham

[WebContainers Now Supported in Firefox on Desktop and Android](https://nodeweekly.com/link/124596/web "blog.stackblitz.com") — [WebContainers](https://nodeweekly.com/link/124598/web) is a ‘full stack’ Node.js environment that runs entirely within the browser built by the folks at online IDE [StackBlitz.](https://nodeweekly.com/link/124600/web) It’s worked in Chrome since launch a year ago, but now collaboration with Mozilla has brought it to Firefox too.

Eric Simons

[Scale Postgres and MySQL Globally in Minutes](https://nodeweekly.com/link/124602/web "www.polyscale.ai")

PolyScale.ai sponsor

[How to Create Your First Node.js-Based GitHub Action](https://nodeweekly.com/link/124604/web)  
David Ziolkowski

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/sqe5zeunyofztvrxsj7x.jpg)](https://nodeweekly.com/link/124606/web)

[qnm: CLI Utility for Looking at `node_modules` Directories](https://nodeweekly.com/link/124606/web "github.com") — The goal is to make it easier to see what’s going on in a `node_modules` directory of choice including letting you search for packages. Supports both npm and Yarn.

Ran Yitzhaki

[node-microtime: Get The Current Time in Microseconds](https://nodeweekly.com/link/124608/web "github.com") — Milliseconds not good enough for you? Microtime goes a little lower under the hood (to `gettimeofday`) and gives you microseconds, although accuracy depends entirely on your OS and hardware.

Wade Simmons

[aws-lambda-fastify 3.0: Serve Fastify-Powered Apps on AWS Lambda](https://nodeweekly.com/link/124610/web "github.com") — If Fastify is your Node web framework of choice and you want to go serverless, this is for you. Note that as of v3.0 the name of this package in the npm registry has changed from `aws-lambda-fastify` to `@fastify/aws-lambda`.

Fastify Project

[The Ultimate Developer Toolkit for In-App Chat + Activity Feeds](https://nodeweekly.com/link/124612/web "getstream.io")

Stream sponsor

[Nano ID 4.0: A Unique String ID Generator](https://nodeweekly.com/link/124613/web "github.com") — Tiny (130 bytes), secure, and URL-friendly. 4.0 drops CommonJS support, it’s ESM all the way here, though the 3.x branch will remain supported for now.

Andrey Sitnik

[is-online 10.0: Check if The Internet Connection Is Up](https://nodeweekly.com/link/124614/web "github.com") — Works in both Node.js and the browser and uses three parallel approaches to check if the Internet is really available. Now a pure ES module.

Sindre Sorhus

[The Official Node.js MongoDB Driver v4.7.0](https://nodeweekly.com/link/124616/web "github.com") — Quite a lot in this release including support for zstd compression, initial suppor for queryable encryption (a [very new](https://nodeweekly.com/link/124618/web) MongoDB feature), clustered collection support, estimated document counting, better performance in serverless environments, and improved support for change stream events.

MongoDB Inc.

[Soap 0.44.0: A SOAP Client and Server for Node](https://nodeweekly.com/link/124619/web "github.com") — This module lets you connect to web services using SOAP. It also provides a server that allows you to run your own SOAP services.

Vinay Pulim

[Pify 6.0: To Promisify Callback-Style Functions](https://nodeweekly.com/link/124620/web)  
Sindre Sorhus

[v8-profiler-next: Node Bindings for the V8 Profiler](https://nodeweekly.com/link/124621/web)  
hyj1991

[npm-keyword: Get a List of npm Packages for Supplied Keywords](https://nodeweekly.com/link/124622/web)  
Sindre Sorhus

[node-oracledb 5.4: Node.js Module for Accessing Oracle Database](https://nodeweekly.com/link/124623/web)  
Oracle

[pidtree: Cross-Platform Children List for a Given Process ID](https://nodeweekly.com/link/124624/web)  
Simone Primarosa

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/441)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/441)
> * 译者：
> * 校对者：
