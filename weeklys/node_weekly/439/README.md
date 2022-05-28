---
title: 'Node Weekly #439' # 不可修改
date: '2022-05-28' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/q0hgdaydzeshqzlyhg6f.jpg)](https://nodeweekly.com/link/124012/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[TypeScript 4.7 Released](https://nodeweekly.com/link/124012/web "devblogs.microsoft.com") — We wouldn’t usually make TypeScript a top feature in Node Weekly although many of you _are_ using it, but this release has a huge feature in the shape of ES module support for Node – a feature that has been infamously difficult to implement, and whose reliance on file extensions [continues to provoke debate](https://nodeweekly.com/link/124013/web).

Daniel Rosenwasser

[Payload, a Node-Based Headless CMS, Now Fully Open Source](https://nodeweekly.com/link/124014/web "payloadcms.com") — [Payload](https://nodeweekly.com/link/124015/web), is a full-featured [headless](https://nodeweekly.com/link/124016/web) CMS (built on top of Express.js, MongoDB, and React) and has just moved to the MIT license which opens up a lot more use cases. [GitHub repo](https://nodeweekly.com/link/124017/web).

James Mikrut (Payload CMS Blog)

[![](https://copm.s3.amazonaws.com/7de9b0f5.png)](https://nodeweekly.com/link/124018/web)

[RedisGreen: Secure, Scalable, Full-Featured Redis 7 Hosting](https://nodeweekly.com/link/124018/web "dashboard.redisgreen.net") — The latest Redis features, instrumented and scaled with the tools teams need as they grow.

RedisGreen sponsor

[DigitalOcean Releases New _Functions_ Service](https://nodeweekly.com/link/124019/web "www.digitalocean.com") — AWS Lambda launched in November 2014 essentially popularizing a paradigm you now see everywhere: functions as a service. DigitalOcean now joins the party with _Functions_ and, as with Lambda, Node.js gets first class support.

Anshu Agarwal

## **Quick bytes:**

*   You can now [run GitHub Actions in a Node 16 runtime](https://nodeweekly.com/link/124020/web).
    
*   AWS has announced [the end of support for Node.js 12.x](https://nodeweekly.com/link/124021/web) in the AWS SDK for JavaScript (v3). As Node.js 12 reached its general 'end of life' last month, this is no big surprise, and you should be upgrading ASAP.
    
*   For that matter, [Node.js 17 goes end of life next week](https://nodeweekly.com/link/124022/web) as well. Node 16 or 18 are your places to head to next.
    
*   [npm 8.11.0](https://nodeweekly.com/link/124023/web) has been released.
    
*   Google Cloud is certainly excited about its updated [Cloud Logging Library for Node.js](https://nodeweekly.com/link/124024/web).
    

[Avoiding Puppeteer Antipatterns](https://nodeweekly.com/link/124025/web "serpapi.com") — [Puppeteer](https://nodeweekly.com/link/124026/web) remains a fantastic way to control a headless browser from code but I, personally, find it hard to develop best practices around using it. Greg, thankfully, has a bunch of things here _not_ to do in future.

Greg Gorlen

[See How Many Hours Engineers Really Spend Coding in the State of Engineering Time Report](https://nodeweekly.com/link/124027/web "retool.com")

Retool: State of Engineering Time Report sponsor

[Making a Podcast Transcription Server in Node](https://nodeweekly.com/link/124028/web "medium.com") — The author likes listening to podcasts but wants to be able to search back for things that were _said_ in them. He brought it together using the [Leopard speech-to-text engine](https://nodeweekly.com/link/124029/web) and some Node.js glue code – [source here](https://nodeweekly.com/link/124030/web).

Ian Lavery

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/j8drnuetnvclrjkhhm6c.jpg)](https://nodeweekly.com/link/124031/web)

[better-logging: A Drop-In Replacement for Node's Default Logging Methods](https://nodeweekly.com/link/124031/web "github.com") — Extends `console.debug`, `console.log` and friends with the time and a colorful tag. Simple and sweet.

Oliver Anteros

[Keyv: Simple Key-Value Storage with Support for Multiple Backends](https://nodeweekly.com/link/124032/web "github.com") — A Promise-based abstraction you can use with a memory based store (by default) or, if you need persistence, Redis, SQLite, Postgres, MySQL, etcd and Mongo.

Jared Wray

[CSV Parse: Convert CSV Formatted Text into Arrays of Objects](https://nodeweekly.com/link/124033/web "csv.js.org") — Extends the native Node.js transform stream API so you can get up and running quickly – see [some example code.](https://nodeweekly.com/link/124034/web) Part of [a suite of CSV libraries](https://nodeweekly.com/link/124035/web) that can also generate and transform CSV.

Adaltas

[Debug Node.js Apps Without Stopping Them in Prod. Try Rookout Free Today](https://nodeweekly.com/link/124036/web "www.rookout.com")

Rookout sponsor

[Electron 19.0.0 Released](https://nodeweekly.com/link/124037/web "www.electronjs.org") — The popular cross platform app building framework upgrades to Chromium 102, V8 10.2, and Node 16.14.2.

Electron Team

[Got 12.1: A Powerful HTTP Request Library for Node](https://nodeweekly.com/link/124038/web "github.com") — A popular HTTP request library. [v12.1](https://nodeweekly.com/link/124039/web) adds a way to _manually_ check that a response was successful that’s useful if you otherwise set Got to not throw errors as it usually does.

Sindre Sorhus

[Fontkit: An Advanced Font Engine for Node and Browser](https://nodeweekly.com/link/124040/web "github.com") — Works with TrueType, OpenType, WOFF, and other formats - supports mapping characters to glyphs, substitutions, reading metrics, laying out glyphs, font subsetting, and more. Used as part of the [PDFKit](https://nodeweekly.com/link/124041/web) PDF generation library.

foliojs

[postgres-pool 6.0: Connection Pool Implementation for `pg`](https://nodeweekly.com/link/124042/web)  
James Geurts

[env-schema 5.0: Validate Environment Variables with Ajv and Dotenv](https://nodeweekly.com/link/124043/web)  
Fastify

[mock-os: Testing Module for the `os` Built-in Module](https://nodeweekly.com/link/124044/web)  
Laurent Fortin

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/439)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/439)
> * 译者：
> * 校对者：
