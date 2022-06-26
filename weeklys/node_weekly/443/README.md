---
title: 'Node Weekly #443' # 不可修改
date: '2022-06-25' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/z6whtyxuxtretaln6aro.jpg)](https://nodeweekly.com/link/125260/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Using Web Streams in Node.js](https://nodeweekly.com/link/125260/web "2ality.com") — Streams provide a handy abstraction for cleanly working with streaming data but _Web Streams_ (a.k.a. [WHATWG Streams](https://nodeweekly.com/link/125261/web)) are a different, more broadly supported beast to classic [Node.js streams.](https://nodeweekly.com/link/125262/web) Dr. Axel starts from the basics but goes into a _lot_ of depth here - a handy resource.

Dr. Axel Rauschmayer

[Alternatives to Installing npm Packages Globally](https://nodeweekly.com/link/125263/web "2ality.com") — A topic that often trips folks up, also covered by the venerable doctor.

Dr. Axel Rauschmayer

[![](https://copm.s3.amazonaws.com/0307dfec.jpg)](https://nodeweekly.com/link/125264/web)

[Integrate eSignatures in Your App in Less Than a Week](https://nodeweekly.com/link/125264/web "www.hellosign.com") — Enable document signing from anywhere with HelloSign's eSignature functionality. Test the API for free.

HelloSign, a Dropbox Company sponsor

[Puppeteer 15.0: Control Headless Chrome from Node](https://nodeweekly.com/link/125265/web "pptr.dev") — [Playwright](https://nodeweekly.com/link/125266/web) has taken a lot of the browser remote control attention in recent years, but Puppeteer, which focuses on Chrome, is still a great option. It now uses Chromium 103 and supports Node 18.

Google

[Microvium: A Tiny JavaScript Engine for Microcontrollers](https://nodeweekly.com/link/125267/web "coder-mike.com") — How tiny? Try 8.5 kilobytes tiny and using just 34 bytes of RAM when idle. JavaScript has never been a natural fit for such constraints but projects like this (and [Elk](https://nodeweekly.com/link/125268/web) or [low.js](https://nodeweekly.com/link/125269/web)) are doing interesting things (here’s [how Microvium works](https://nodeweekly.com/link/125270/web)) and this one has particularly good language support. [GitHub repo](https://nodeweekly.com/link/125271/web).

Michael Hunter

## **QUICK BYTES:**

*   Would you like a paginated list of [every npm package in alphabetical order?](https://nodeweekly.com/link/125272/web) Congratulations to `@zzzzzzzzz/switcha` for coming in last. I'd love to see some stats on just how many of these packages are total nonsense.
    
*   [Node 18.4.0](https://nodeweekly.com/link/125273/web) is out, but it's a relatively minor release.
    
*   The folks over at Deno have [raised $21m in series A funding](https://nodeweekly.com/link/125274/web) to push ahead with their V8 isolates based Deno Deploy cloud functions service.
    
*   We've mentioned it before, but as it's still new to many folks, here's a quick, practical look at the [built-in command line arguments parser](https://nodeweekly.com/link/125275/web) in Node 18.3+.
    

## **BRIEF RELEASES:**

[npm 8.13](https://nodeweekly.com/link/125276/web)  
[Pino 8.1](https://nodeweekly.com/link/125277/web) – Fast JSON-powered logging.  
[Fastify 4.1](https://nodeweekly.com/link/125278/web) – Fast and low overhead web framework.  
[stripe-node 9.9](https://nodeweekly.com/link/125279/web) – Node library for the Stripe API.  
[Faker 7.3](https://nodeweekly.com/link/125280/web) – Generate fake data fast.  
[jsdom 20.0](https://nodeweekly.com/link/125281/web) – WHATWG DOM and HTML standards for Node.  
[zx 7.0.2](https://nodeweekly.com/link/125282/web) – Better shell scripting with Node.  
[Sequelize 6.21](https://nodeweekly.com/link/125283/web) – Promise-based multi SQL dialect ORM.  
[Opossum 6.4](https://nodeweekly.com/link/125284/web) – Circuit breaker for async functions.  
[pg-boss 7.4](https://nodeweekly.com/link/125285/web) – Postgres + Node job queueing system.

## 🛠 Code & Tools

[js-fire 1.0: Generate CLIs from JavaScript Objects](https://nodeweekly.com/link/125287/web "github.com") — Google’s [Python Fire](https://nodeweekly.com/link/125288/web) is a Google tool for creating CLIs from _Python_ objects and this JavaScript clone brings the same thing to us.

Craig Mulligan

[Tinypool: An Even Smaller Node.js Worker Pool Library](https://nodeweekly.com/link/125289/web "github.com") — A fork of the powerful [Piscina](https://nodeweekly.com/link/125290/web) that aims for fewer depdencies and a smaller footprint overall.

Tinylibs

[Node Transactional Notification Management System Saves Time and Money](https://nodeweekly.com/link/125291/web "www.courier.com")

Courier sponsor

[Moon: A New Build System for the JavaScript Ecosystem](https://nodeweekly.com/link/125292/web "moonrepo.dev") — Built in Rust for performance, Moon appears to be focused on features for larger projects with lots of dependencies, developers, and processes. It’ll be interesting to see this one develop further.

Miles Johnson

[node-website-scraper: Download A Site to a Local Directory](https://nodeweekly.com/link/125293/web "github.com") — Imagine the functionality of `wget --mirror` but as a fully controllable and configurable Node library.

Sophia Antipenko

[public-ip 6.0: Quickly Get Your Public IP Address](https://nodeweekly.com/link/125294/web "github.com") — Works in both Node and browser and uses different approaches on each. v6 lets you choose between IPv6 and IPv4.

Sindre Sorhus

[grammY: An Up-to-Date Telegram Bot Framework](https://nodeweekly.com/link/125295/web "grammy.dev") — Allegedly _“makes creating Telegram bots so simple you already know how to do it.”_

KnorpelSenf

[Be Amongst the First to Shape Our New Dev Community. Join Us Today](https://nodeweekly.com/link/125296/web "community.bitmovin.com")

Bitmovin Inc. sponsor

[Middy 3.1: Node Middleware Engine for AWS Lambda](https://nodeweekly.com/link/125297/web "middy.js.org") — A popular way to simplify your code when building Node-powered serverless functions on AWS Lambda.

Luciano Mammino

[PSD 0.2: Zero-Dependency PSD (Photoshop) Parser for Browser and Node](https://nodeweekly.com/link/125298/web "webtoon.github.io") — [GitHub repo](https://nodeweekly.com/link/125299/web).

webtoon

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/443)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/443)
> * 译者：
> * 校对者：
