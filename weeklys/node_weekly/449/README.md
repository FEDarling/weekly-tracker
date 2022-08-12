---
title: 'Node Weekly #449' # 不可修改
date: '2022-08-12' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

#​449 — August 4, 2022

[Read on the Web](https://nodeweekly.com/link/127189/web)

![Node.js Weekly](https://res.cloudinary.com/cpress/image/upload/v1653576619/lgfqinzbdqttwmhvljxb.png)

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/ljsajeyzevq7avqpdneh.jpg)](https://nodeweekly.com/link/127190/web)

[Introducing the New npm Dependency Selector Syntax](https://nodeweekly.com/link/127190/web "github.blog") — Another week, another new `npm` command! `npm query` is a new top-level command (as of npm v8.16.0) that lets you query and filter the dependencies of your project with a CSS-like dependency selector format so you can ask _“new, complex questions about \[..\] dependencies, their relationships & associative metadata.”_

The GitHub Blog

[Electron 20 Released: The Cross Platform Desktop App Platform](https://nodeweekly.com/link/127193/web "www.electronjs.org") — Mostly a typical release. Chromium gets bumped to v104, V8 to 10.4, and Node to 16.15.0. Windows gains an ‘immersive dark mode’ and it’s now possible for windows to [‘float’ over full-screen apps panel-style.](https://nodeweekly.com/link/127194/web) It also introduces [the V8 'Memory Cage'](https://nodeweekly.com/link/127195/web) which affects native modules: _"Attempting to wrap external memory with an ArrayBuffer will crash at runtime in Electron 20+."_

Charles Kerr

[![](https://copm.s3.amazonaws.com/ba356e99.png)](https://nodeweekly.com/link/127191/web)

[Control Your GraphQL API with GraphQL Hive](https://nodeweekly.com/link/127191/web) — Prevent breaking changes, monitor performance of your GraphQL API, and manage your API gateway (Federation, Stitching) with the Schema Registry. GraphQL Hive is a SAAS solution that is also 100% open source and can be self-hosted. [Sign up for free](https://nodeweekly.com/link/127192/web).

The Guild sponsor

[The Node Ecosystem (Still) Has Tooling Problems](https://nodeweekly.com/link/127196/web "maxleiter.com") — A very brief story-meets-opinion piece that’s mostly preaching to the choir. Yes, there are problems and a surfeit of options, but at the same time, there’s nearly always a solution too. Of course, Hacker News managed to string it out into [a lengthy discussion](https://nodeweekly.com/link/127197/web) :-)

Max Leiter

▶  [Now He Made a Multiplayer Game in Microsoft Word..](https://nodeweekly.com/link/127198/web "www.youtube.com") — I continue to watch this chap’s videos with a simultaneous mixture of disorientation and respect for his audacity.

SethEric

[A DIY `node_modules` Cache for Docker in Your CI](https://nodeweekly.com/link/127199/web "remelehane.dev") — May want to be careful around building deps in one Linux distro and copying to another though..

Reme Le Hane

[Making a Functional Authentication and Authorization System using JWTs](https://nodeweekly.com/link/127200/web)  
Folgoni and Folgoni Borsa

[Scraping Google Maps Reviews with Node](https://nodeweekly.com/link/127201/web)  
Mikhail Zub

💻 Jobs

[Software Engineers](https://nodeweekly.com/link/127216/web) — Sticker Mule is the Internet's most "kick ass" brand. Our software team operates from 17 countries, and we're always looking for more exceptional engineers.  
Sticker mule

[Find Tech Jobs with Hired](https://nodeweekly.com/link/127202/web) — Create a profile on Hired to connect with hiring managers at growing startups and Fortune 500 companies. It's free for job-seekers.  
Hired

🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/o60ersmvwlc94vjft0kb.jpg)](https://nodeweekly.com/link/127203/web)

[colorgrad: High-Performance, Rust-Powered Color Gradient Library](https://nodeweekly.com/link/127203/web "github.com") — Happy in Node or the browser and uses Rust compiled to WebAssembly behind the scenes – a very modern, _en vogue_ approach (and this is a nice small codebase with which to learn the technique, too). [Live demo.](https://nodeweekly.com/link/127204/web)

Nor Khasyatillah

[pg-boss 8.0: Postgres + Node.js Job Queueing System](https://nodeweekly.com/link/127205/web "github.com") — A job queue for background processing and reliable asynchronous execution. It uses Postgres specific features (like `SKIP LOCKED`) to guarantee safety. v8 makes Node 14 the minimum supported version and enables reuse of existing DB connections on certain operations.

Tim Jones

[Real-Time Visibility into the Performance of Your Jest Tests](https://nodeweekly.com/link/127206/web "buildkite.com")

Buildkite Test Analytics sponsor

[Nativefier: Make Any Web Page a Desktop App](https://nodeweekly.com/link/127207/web "github.com") — A basic Node.js-powered tool for creating a desktop ‘app’ for any Web site using Electron as the webview. For Windows, macOS and Linux.

Goh Jia Hao

[Awesome SaaS Boilerplates: Boilerplate Apps for Various Stacks](https://nodeweekly.com/link/127208/web "github.com") — It’s not Node specific, but there are plenty of Node-based options on here, as well as for PHP, Python, and Ruby.

Alexey Smirnov

[Debug Node Apps Without Stopping Them in Prod. Try Rookout Free Today](https://nodeweekly.com/link/127209/web "www.rookout.com")

Rookout sponsor

**QUICK RELEASES:**

[create-dmg 5.4](https://nodeweekly.com/link/127210/web) – Create good-looking DMGs for macOS apps.  
[nodejs-firestore 6.0](https://nodeweekly.com/link/127211/web) – Node.js client for Google Cloud Firestore.  
[Stripe Node 10.0](https://nodeweekly.com/link/127212/web) – Node.js library for Stripe's API.  
[mikro-orm 5.3](https://nodeweekly.com/link/127213/web) – TypeScript ORM for Node based on Data Mapper.  
[node-json-db 2.0](https://nodeweekly.com/link/127214/web) – Simple file-based JSON 'database' library.  
[cron-parser 4.6](https://nodeweekly.com/link/127215/web) – Library for parsing cron schedules.

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/449)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/449)
> * 译者：
> * 校对者：
