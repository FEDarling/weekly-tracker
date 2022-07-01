---
title: 'Node Weekly #444' # 不可修改
date: '2022-07-01' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

#​444 — June 30, 2022

[Read on the Web](https://nodeweekly.com/link/125563/web)

![Node.js Weekly](https://res.cloudinary.com/cpress/image/upload/v1653576619/lgfqinzbdqttwmhvljxb.png)

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/xmldsrhfdu0yttlnfcdv.jpg)](https://nodeweekly.com/link/125564/web)

[Working with the File System from Node.js](https://nodeweekly.com/link/125564/web "2ality.com") — Dr. Axel seems to be on a bit of a Node kick lately and comes back this week with a particularly deep dive on all things related to working with text files from Node, from simple reading and writing operations to streams, buffers, and directory manipulation.

Dr. Axel Rauschmayer

[Should Node.js Directly Support Web Workers?](https://nodeweekly.com/link/125565/web "github.com") — [Web Workers](https://nodeweekly.com/link/125566/web) provide a way for JavaScript in the browser to run on background threads, taking the heat off the main thread. Browsers support them, Deno supports them, and while Node has [Worker Threads](https://nodeweekly.com/link/125567/web), Sindre argues Node should align with the broader standard.

Sindre Sorhus

[![](https://copm.s3.amazonaws.com/543347f7.png)](https://nodeweekly.com/link/125568/web)

[Free Activity Feeds & Chat APIs for Qualifying Teams](https://nodeweekly.com/link/125568/web "getstream.io") — Unlock enterprise-grade features, functions, and UI components completely free for your startup or side project with the Maker Account from Stream.

Stream sponsor

[Highlights from OpenJS World 2022](https://nodeweekly.com/link/125569/web "nodesource.com") — OpenJS World took place a few weeks ago in Austin, Texas and in this post Marian covers some of the talking points, top talks, and what made the event special. There’s [a YouTube playlist](https://nodeweekly.com/link/125570/web) of over 50 talks from the event, with some highlights here (note the audio is very quiet on some of them):

*   ⭐️ [Debugging Your Way Through a Node.js Upgrade](https://nodeweekly.com/link/125571/web) with Bethany Griggs. _(A lot of very useful tips and tactics in here.)_
*   [Making Fetch Happen](https://nodeweekly.com/link/125572/web) with Ethan Arrowood.
*   [Writing a Compiler in Node.js using Streams](https://nodeweekly.com/link/125573/web) with Jarrod Connolly.
*   [Rust Native Modules with Node-API](https://nodeweekly.com/link/125574/web) with Jean Burellier.
*   [A Fastify Tale of Shapes](https://nodeweekly.com/link/125575/web) with Matteo Collina.

Marian Villa (NodeSource)

[Prisma 4.0 Released: The Next Gen ORM](https://nodeweekly.com/link/125601/web "github.com") — No official blog post yet but plenty to see here, plus there’s a [What’s New in Prisma 4.0 talk](https://nodeweekly.com/link/125602/web) coming later today, and [an upgrade guide](https://nodeweekly.com/link/125603/web).

Prisma

[Redis 7.0 Now Available on RedisGreen](https://nodeweekly.com/link/125581/web "changelog.redisgreen.com")

RedisGreen sponsor

**QUICK BYTES:**

*   Node.js has [some security releases on the horizon](https://nodeweekly.com/link/125576/web) (around July 5) for the 14.x, 16.x, and 18.x release lines to tackle three medium severity issues and two high severity ones. We'll bring you up to speed in next week's issue.
    
*   A developer frustrated with ways to search npm packages has [come up with some ideas to improve things.](https://nodeweekly.com/link/125577/web)
    
*   Node developers on Reddit tackled the question of whether MongoDB is as popular in industry as it is in tutorials and [the responses](https://nodeweekly.com/link/125578/web) were.. interesting 😏
    
*   From the folks behind the _State of JavaScript_ and _State of CSS_ surveys comes [State of GraphQL.](https://nodeweekly.com/link/125579/web)
    
*   Node.js came top of the latest Stack Overflow survey's [list of most popular Web technologies](https://nodeweekly.com/link/125580/web), just pipping React to the post.
    

🛠 Code & Tools

[Serverless-Express 4.9: Run Existing Frameworks on AWS Lambda or Azure Functions](https://nodeweekly.com/link/125583/web "github.com") — The idea is that you can build HTTP APIs in the usual way on top of Express, Koa, Hapi or whatever, and this provides the wrapper necessary to let them run on AWS Lambda or Azure Functions.

Vendia Inc

[node-mbus: Node Bindings to `libmbus`](https://nodeweekly.com/link/125584/web "github.com") — A curious use case here. `libmbus` is used to communicate over the ‘meter bus’ protocol used by various utility (gas, electricity, etc.) meters. I have no idea how it works, but a homemade Node-powered smart meter would be pretty cool.

Ingo Fischer

[QuickReader: A High Performance Stream Reader for Browser and Node](https://nodeweekly.com/link/125586/web "github.com") — The idea is you define the exact bits and pieces you need up front and grab them from the stream on the fly.

EtherDream

[Debug Node.js Apps Without Stopping Them in Prod. Try Rookout Free Today](https://nodeweekly.com/link/125585/web "www.rookout.com")

Rookout sponsor

[DeploySentinel: A New Tool for Debugging Flaky Cypress Tests](https://nodeweekly.com/link/125587/web "www.deploysentinel.com") — It’s new and behind an email wall for now, but enough of a preview is shown here that it may be of interest to some.

Deploy Sentinel

[SQSLite: A Lightweight Module for Integration Testing AWS SQS](https://nodeweekly.com/link/125588/web "github.com") — Jenny [gave a talk at OpenJS World 2022](https://nodeweekly.com/link/125589/web) about how and why she built this.

Jenny Eckstein

[lru-cache 7.12.0: A Least Recently Used Cache for Node](https://nodeweekly.com/link/125590/web)  
Isaac Z. Schlueter and Contributors

**⚡️ BRIEF RELEASES:**

[Fastify 4.2](https://nodeweekly.com/link/125591/web) – Fast, low overhead web framework.  
[Kafka.js 2.1](https://nodeweekly.com/link/125592/web) – Modern Apache Kafka client for Node.  
[pnpm 7.4](https://nodeweekly.com/link/125593/web) – Fast, space efficient package manager.  
[ioredis 5.1](https://nodeweekly.com/link/125594/web) – Performance-focused Redis client library.  
[Bree 9.1](https://nodeweekly.com/link/125595/web) – Powerful job scheduler.  
[qs 6.11](https://nodeweekly.com/link/125596/web) – Query string parser with nesting support.  
[cron-parser 4.5](https://nodeweekly.com/link/125597/web) – Library for parsing crontab directives.  
[zx 7.0.4](https://nodeweekly.com/link/125598/web) – Google's tool for better JS shell scripting.  
[Instauto 9.1.9](https://nodeweekly.com/link/125599/web) – Instagram bot / automation library.

💻 Jobs

[Find Tech Jobs with Hired](https://nodeweekly.com/link/125600/web) — Create a profile on Hired to connect with hiring managers at growing startups and Fortune 500 companies. It's free for job-seekers.  
Hired

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/444)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/444)
> * 译者：
> * 校对者：
