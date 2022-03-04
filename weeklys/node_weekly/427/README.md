---
title: 'Node Weekly #427' # 不可修改
date: '2022-03-04' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/ehyxdraltmafmeljnkms.jpg)](https://nodeweekly.com/link/120462/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Running Commands with `execa` in Node](https://nodeweekly.com/link/120462/web "blog.logrocket.com") — We’ve linked to Sindre Sorhus’ popular [execa](https://nodeweekly.com/link/120463/web) process execution library many times over the years, but here’s a thorough tutorial which also shows off the value `execa` brings over the vanilla `child_process`.

[Red Hat and IBM's Node.js 'Reference Architecture'](https://nodeweekly.com/link/120491/web "github.com") — Big companies like to have well defined playbooks from which to work and Red Hat and IBM are no different. It’s an opinionated guide to how their engineering teams work with Node, what tools they prefer, and their development and operational practices. Running on from this Red Hat and IBM then have an extensive [series of blog posts](https://nodeweekly.com/link/120494/web) digging into each section from [logging](https://nodeweekly.com/link/120495/web) to [containers](https://nodeweekly.com/link/120496/web) and, this week, [code coverage.](https://nodeweekly.com/link/120497/web)

📄 PDF: [From JavaScript to Rust: A Free Book](https://nodeweekly.com/link/120493/web "github.com") — A book that attempts to map common JavaScript workflows to the Rust ecosystem, if you’ve been keen to pick up the increasingly popular systems language. There’s also a [GitHub repo](https://nodeweekly.com/link/120465/web) with the source for the book.

## **In brief:**

*   NodeSource has released [N|Solid 4.7.0](https://nodeweekly.com/link/120466/web), the latest version of its enterprise-level production-oriented Node.js platform.
    
*   David Herron digs into the intricacies of Node's newest (experimental) feature: [loading modules over HTTPS.](https://nodeweekly.com/link/120498/web)
    
*   A developer [reimplemented Node's URL parser in Rust](https://nodeweekly.com/link/120499/web) with a WebAssembly bridge for their Masters graduation project.

[Understanding the Dependencies Inside Your `package.json`](https://nodeweekly.com/link/120470/web "nodesource.com") — Recently the authors looked at [the basics of `package.json`](https://nodeweekly.com/link/120471/web) but now they’ve moved on to defining what each of the dependency related keys in `package.json` are for.

[Cheat Sheet: OWASP Top 10 Vulnerabilities (And How to Fix Them)](https://nodeweekly.com/link/120472/web "go.snyk.io")

[Migrating a Node.js App's Database From MongoDB to Postgres](https://nodeweekly.com/link/120500/web)  

[Profiling Next.js Apps with Parca](https://nodeweekly.com/link/120501/web)  

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/pdmbbfmsffudiffacmve.jpg)](https://nodeweekly.com/link/120473/web)

[Oclif 2.5: Heroku's Open CLI Framework for Node](https://nodeweekly.com/link/120473/web "oclif.io") — A mature framework for building command line interfaces, whether with a few simple flags or lots of subcommands. [GitHub repo](https://nodeweekly.com/link/120474/web).

[dnt: Deno-to-Node Package Transformation Tool](https://nodeweekly.com/link/120478/web "github.com") — Takes a [Deno](https://nodeweekly.com/link/120479/web) module and creates an npm package for use in Node. Goes further than mere packaging though and actually injects shims, transforms commonly Deno code forms to Node approaches, and more.

[Hygen: A Simple and Scalable Code Generator Tool](https://nodeweekly.com/link/120480/web "github.com") — Build ad-hoc generators quickly right up to full on project scaffolds.

[Nohm 3.0: An ORM-of-Sorts for Redis](https://nodeweekly.com/link/120481/web "github.com") — [Redis](https://nodeweekly.com/link/120482/web) is a popular in-memory data structure store commonly associated with caching. It’s not inherently relational, but you can model such data structures within it and Nohm provides some abstractions to Node users.

[Getting Started with OpenTelemetry: Observability for Modern Apps](https://nodeweekly.com/link/120475/web "www.influxdata.com")

[pg-boss 7.2.0: Postgres and Node Job Queueing System](https://nodeweekly.com/link/120483/web "github.com") — A job queue for background processing and reliable asynchronous execution. It uses Postgres specific features to guarantee safety.

[Fiber 2.28.0: An Express.js Inspired Web Framework for Go](https://nodeweekly.com/link/120484/web "github.com") — A Go project? In a Node newsletter? Well, a lot of us like playing with different languages, and Fiber is particularly neat if you like the Express.js approach. We also have [a Go newsletter](https://nodeweekly.com/link/120485/web) if you do play in that space at all.

[ts-node 10.6.0: TypeScript Execution and REPL for Node.js](https://nodeweekly.com/link/120486/web)  
TypeStrong

## 🕰 **ICYMI** _(Some older stuff that may catch your eye...)_

*   This straight-to-the point tutorial covers [creating and publishing a private npm package](https://nodeweekly.com/link/120487/web) with the GitHub package registry.
*   Thomas Sentre shares [how to create a real-time chat app with Node](https://nodeweekly.com/link/120488/web) and WebSocket.
*   [Here's a quick look at how to use the 'error cause' feature](https://nodeweekly.com/link/120489/web) when debugging.
*   Dima Grossman explains how to go about [reducing your monorepo build time by up to 70%](https://nodeweekly.com/link/120490/web)(!).

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/427)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/427)
> * 译者：
> * 校对者：
