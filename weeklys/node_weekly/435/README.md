---
title: 'Node Weekly #435' # 不可修改
date: '2022-04-30' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/wr2borvq6mkv8ugo9cq2.jpg)](https://nodeweekly.com/link/122872/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Node 18's 'Prefix-Only' Core Modules](https://nodeweekly.com/link/122872/web "fusebit.io") — A look at a new type of core module that can’t be imported quite like the others, e.g. `import test from 'node:test'` – what is this unusual package name notation about? Colin breaks it down in an easy to understand way here.

Colin Ihrig

[Node v16.15.0 (LTS) Released](https://nodeweekly.com/link/122873/web "nodejs.org") — [Node 18’s release](https://nodeweekly.com/link/122874/web) last week may have been more _exciting_, but the LTS releases are a fundamental part of life for anyone with apps in production and now Node 16 users can, too, get access to the new (though still experimental) Fetch API support with this release.

Danielle Adams

[![](https://copm.s3.amazonaws.com/10f2205c.png)](https://nodeweekly.com/link/122875/web)

[Troubleshoot Node.js App Performance Fast with Datadog APM](https://nodeweekly.com/link/122875/web "www.datadoghq.com") — Datadog’s APM generates detailed flame graphs to help you identify bottlenecks and latency in your Node.js code. Navigate seamlessly between app traces, logs and metrics to troubleshoot and resolve app issues fast. Try Datadog APM free.

Datadog APM sponsor

[V8's Faster Initialization of Instances with New Class Features](https://nodeweekly.com/link/122876/web "v8.dev") — A technical deep dive into some work on optimizing the performance of initializing class fields and private methods – work which now benefits all users of Node.js 18 onward.

Joyee Cheung (V8)

▶  [Beth Griggs and Michael Dawson on the Node 18 Release Process](https://nodeweekly.com/link/122877/web "www.youtube.com") — Beth is a big driving force behind the recent major Node releases and in this quick five-minute video she talks about the mechanics of the Node release process and the highlights of Node 18 in particular.

Node.js TSC

## **Quick bytes:**

*   [Someone asked Hacker News](https://nodeweekly.com/link/122878/web) why the npm ecosystem seems more susceptible to supply chain attacks than, say, PHP. Granularity and size, mostly, but [one of the better explanations](https://nodeweekly.com/link/122879/web) came from Feross Aboukhadijeh (co-founder of [Socket](https://nodeweekly.com/link/122880/web)) on a totally different thread.
    
*   📅 [JSNation](https://nodeweekly.com/link/122881/web) is a JavaScript event taking place both in Amsterdam on June 16 and virtually/online on June 20. Speakers include Evan You, Sarah Drasner, and Kyle Simpson.
    
[Netlify Edge Functions: Serverless Compute Powered by Deno](https://nodeweekly.com/link/122884/web "www.netlify.com") — A new, currently in beta, serverless full runtime environment from Netlify. It enables you to run serverless JavaScript/TypeScript functions right from Netlify’s Edge network. Yes, yes, it’s built on Deno, not Node, but if you want to know about _why_ Netlify made that decision, [Netlify's CEO explains just that here](https://nodeweekly.com/link/122885/web).

Joey Aiello (Netlify)

[How to Go from 1x Deploy a Week → 1x a Day → Many Times a Day](https://nodeweekly.com/link/122886/web "www.sleuth.io")

Sleuth sponsor

[Debugging Node Serverless Functions on AWS Lambda](https://nodeweekly.com/link/122887/web "dustingoodman.dev") — Covers a handful of things to look out for.

Dustin Goodman

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/xgaipxe1qxnszqw49rft.jpg)](https://nodeweekly.com/link/122888/web)

[Table: Formats Data from an Array into a String Table](https://nodeweekly.com/link/122888/web "github.com") — A neat effect and perhaps a useful way to show info from CLI tools you might be building. You can configure how the table is rendered, padded, and aligned.

Gajus Kuizinas

[Knex.js 2.0: A Query Builder for Multiple Databases](https://nodeweekly.com/link/122889/web "github.com") — Knex is a popular ‘batteries included’ SQL query builder that supports Postgres, MySQL, SQL Server, SQLite3, and other SQL oriented database systems.

knex

[Skia Canvas: A Canvas Environment for Node](https://nodeweekly.com/link/122890/web "github.com") — Based on Google’s Skia graphics engine and offers end results similar to Chrome’s own canvas system.

Christian Swinehart

[Free Activity Feeds & Chat APIs for Qualifying Teams](https://nodeweekly.com/link/122891/web "getstream.io")

Stream sponsor

[Azurite: A Lightweight Clone of Azure Storage](https://nodeweekly.com/link/122892/web "github.com") — The interesting thing about this is it’s from Microsoft itself. The aim is to let you try (or perhaps test) Azure Storage and its API but in a local environment.

Microsoft Azure

[An Improved USB Library for Node](https://nodeweekly.com/link/122893/web "github.com") — Can you work with USB at a low level from Node code? You sure can. You might like [this livestream](https://nodeweekly.com/link/122894/web) if you want to get into such things, too.

Node USB

[Aperture-Node: Record the Screen on macOS from Node](https://nodeweekly.com/link/122895/web)  
Wulkano

[workerpool: Offload Tasks to a Pool of Workers](https://nodeweekly.com/link/122896/web)  
Jos de Jong

[pino-http: A High-Speed HTTP Logger for Node](https://nodeweekly.com/link/122897/web)

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/435)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/435)
> * 译者：
> * 校对者：
