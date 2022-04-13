---
title: 'Node Weekly #432' # 不可修改
date: '2022-04-09' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[JavaScript and Node Testing Best Practices: 2022 Edition](https://nodeweekly.com/link/122041/web "github.com") — Fifty best practices divided into categories (testing, backend, frontend, etc.) complete with simple examples. We first linked to this 2½ years ago, but a new edition is now out updated for 2022 standards and with translations in 7 other languages including Chinese, Spanish and French.

Yoni Goldberg

[![](https://copm.s3.amazonaws.com/1417d1b2.png)](https://nodeweekly.com/link/121973/web)

[Debug Node Apps in Production Without Stopping Them](https://nodeweekly.com/link/121973/web "www.rookout.com") — Rookout empowers teams to debug cloud-native apps by helping them access real-time data in any environment, including prod. Get to the root cause faster without recreate, redeploy, or stop the app. Try Rookout free and start debugging 5x faster.

Rookout sponsor

[Locale Aware Sorting in JavaScript](https://nodeweekly.com/link/121974/web "elijahmanor.com") — When building a localized app, the default sorting logic for strings might not do quite what you want.. `localeCompare` and `Intl.Collator` to the rescue. Is this just for browsers? Nope. [Node supports Intl](https://nodeweekly.com/link/121975/web) too.

Elijah Manor

[Node v12.22.12 (LTS) Released: It's the Final Node 12 👋](https://nodeweekly.com/link/121972/web "nodejs.org") — A pleasantly gentle week for Node releases with just the final Node.js 12 release making the cut. Node 12 goes ‘end of life’ on April 30 and will receive no updates after then.

Richard Lau

## **Quick bytes:**

*   [Get an early look](https://nodeweekly.com/link/122007/web) at Node 18's upcoming test runner system in the nightly docs. Shehzad Akbar also [explains it here.](https://nodeweekly.com/link/122046/web)
    
*   ❓ The folks behind the [Prisma](https://nodeweekly.com/link/121976/web) ORM want to know [what your favorite Node.js ORM is](https://nodeweekly.com/link/121977/web) – it's a pretty quick survey and they promise to share the results later.
    
*   AWS Lambda has [added support for 'function URLs'](https://nodeweekly.com/link/122040/web) – built-in HTTPS endpoints that go direct to your functions without needing API Gateway.
    
*   📗 [Build Talking Apps for Alexa](https://nodeweekly.com/link/121978/web) is a new book (by Craig Walls and published by _Pragmatic Bookshelf_) on building Alexa skills for Echo devices and uses Node.js to make it all happen.
    
*   The folks at EdgeDB put ORMs to the test, [claiming that they're slow and getting slower](https://nodeweekly.com/link/122008/web) after using [IMDBench](https://nodeweekly.com/link/122009/web), a tool to compare Python and JavaScript ORMs with realistic queries.

[Basic Principles of Object-Oriented Programming in TypeScript](https://nodeweekly.com/link/121982/web "blog.appsignal.com") — The author focuses on ‘three pillars’ of object-oriented programming in the TypeScript context: encapsulation, inheritance, and polymorphism (at a basic level).

Camilo Reyes

[Be Amongst the First to Shape Our New Dev Community. Join Us Today](https://nodeweekly.com/link/121983/web "community.bitmovin.com")

Bitmovin Inc. sponsor

▶  [Using Google Cloud Run's 'Always-On' CPU Allocation for Background Work](https://nodeweekly.com/link/121984/web "cloud.google.com") — _Cloud Run_ is Google's way to run containers in a serverless fashion, and Node is used to show off being able to run background jobs on it.

Wesley Chun (Google Cloud)

## 🛠 Code & Tools

[JSZip 3.9: Create, Read and Edit .zip Archive Files](https://nodeweekly.com/link/121985/web "stuk.github.io") — A simple and elegant API. The homepage is pretty cool as it has a live demo and a handy how-to. Or you can just go for the [GitHub repo](https://nodeweekly.com/link/121986/web).

Stuart Knightley

[ssh2-sftp-client 8.0: A Node.js Client for SSH2 SFTP](https://nodeweekly.com/link/121987/web "github.com") — List files, download files, upload files - it’s all here. Note that this release has [breaking changes](https://nodeweekly.com/link/121988/web).

Tim Cross

[ioredis 5: A Performance Focused Redis Client for Node](https://nodeweekly.com/link/121989/web "github.com") — Boasts support for Redis Cluster, Sentinel, pipelining, Lua scripting, pub/sub, etc, as well as ES6 types like `Map` and `Set`. If you’re already a user, the v4 to v5 transition does require [an upgrade guide](https://nodeweekly.com/link/121990/web) though.

Zihua Li

[ini 3.0: An INI File Parser/Serializer](https://nodeweekly.com/link/121991/web "github.com") — [INI](https://nodeweekly.com/link/121992/web) is a text format that originated at Microsoft for formatting config files.

Isaac Z. Schlueter et al.

[Retool Makes It 10x Faster to Build Custom Internal Tools for Any Company](https://nodeweekly.com/link/121993/web "retool.com")

Retool sponsor

[Instauto 9.0: An Instagram Bot / Automation Library](https://nodeweekly.com/link/121994/web "github.com") — Uses Puppeteer to do the hard work. The focus here is on ease of use.

Mikael Finstad

[cron-parser 4.3: Node Library for Parsing `cron` Rules](https://nodeweekly.com/link/121995/web "github.com") — `cron` is a commonly used mechanism on Unix-based systems for running recurring tasks and such tasks are defined in a very specific format. This package lets you parse this format for your own ends.

Harri Siirak

[Nightwatch.js 2.1: Automated End-to-End Testing from Node](https://nodeweekly.com/link/121996/web "nightwatchjs.org") — Write end-to-end tests in Node – uses the W3C WebDriver API to drive browsers. [GitHub repo](https://nodeweekly.com/link/121997/web).

Nightwatch Team

[The Official MongoDB Node.js Driver v4.5.0](https://nodeweekly.com/link/121998/web "github.com") — Supports a `comment` argument on operations so you can trace things better in Mongo’s logs.

MongoDB Inc.

[AutoMapper 8.1: An Object-Object AutoMapper for TypeScript](https://nodeweekly.com/link/121999/web "automapperts.netlify.app") — [GitHub repo.](https://nodeweekly.com/link/122000/web)

Chau Tran

[Kafka.js 1.16.0: A Modern Apache Kafka Client](https://nodeweekly.com/link/122001/web "github.com") — Production ready and supports Kafka 0.10+. _([Kafka](https://nodeweekly.com/link/122002/web) is a popular open source system for working with stream-processing at scale.)_

Túlio Ornelas

[node-mssql 8.1: A Microsoft SQL Server Client for Node](https://nodeweekly.com/link/122003/web "github.com") — Works cross-platform (Windows, Linux or macOS) and supports two different TDS drivers (pure JS and native).

Patrik Simek and contributors

[isBinaryFile: Detects if a File is Binary or Text](https://nodeweekly.com/link/122004/web)  
Garen Torikian

[pkg 5.6.0: Package Your Node Project Into an Executable](https://nodeweekly.com/link/122005/web)  
Vercel

[Fastify 3.28.0: The Fast and Low Overhead Web Framework](https://nodeweekly.com/link/122006/web)  
Fastify

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/432)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/432)
> * 译者：
> * 校对者：
