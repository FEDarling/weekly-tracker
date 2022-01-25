---
title: 'Node Weekly #420'
date: '2022-01-24'
categories: ['Node Weekly']
publish: false
---
[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/atob1apx6ssqgdj3e7bg.jpg)](https://nodeweekly.com/link/118370/web)

[JavaScript Developer Breaks Two Popular npm Packages](https://nodeweekly.com/link/118370/web "www.theregister.com") — The creator of Faker.js and colors.js, two packages we’ve mentioned quite often, made some _unorthodox_ commits to his projects recently that caused them to either disappear or [break](https://nodeweekly.com/link/118371/web) in interesting ways which resulted in GitHub [suspending his access](https://nodeweekly.com/link/118372/web) at one point. To be blunt, you want to be finding alternatives. _The Register’s_ writeup is, perhaps, one of the more _colorful._ Dependencies continue to [be risky](https://nodeweekly.com/link/118373/web) and this story will surely trundle on.

[The January 10, 2022 Node.js Security Releases](https://nodeweekly.com/link/118374/web "nodejs.org") — Updates have arrived for all major release lines to resolve a handful of vulnerabilities. There’s [Node 17.3.1](https://nodeweekly.com/link/118375/web), plus joint LTS releases [16.13.2](https://nodeweekly.com/link/118376/web), [14.18.3](https://nodeweekly.com/link/118377/web), and [12.22.9.](https://nodeweekly.com/link/118378/web)

[![](https://copm.s3.amazonaws.com/1eddf7b4.png)](https://nodeweekly.com/link/118379/web)

[AppSignal Speaks Louder Than Words](https://nodeweekly.com/link/118379/web "www.appsignal.com") — AppSignal helps you inspect and improve the performance of your Node.js applications. Enhance your customer's experience, and make sure your apps stay performant. We’ll tell you which piece of code to look at.

[What npm Should Do Today to Stop a New Colors Attack Tomorrow](https://nodeweekly.com/link/118380/web "research.swtch.com") — _“A misfeature in NPM’s design means that as soon as the sabotaged version of colors was published, fresh installs of command-line tools depending on colors immediately started using it, with no testing that it was in any way compatible with each tool. (Spoiler alert: it wasn’t!)”_ — Russ explains how Go’s approach could avert such an issue.

[NAPI-RS 2.0: A Minimal Library for Building Node Addons in Rust](https://nodeweekly.com/link/118381/web "napi.rs") — A nifty way to ‘Rustify’ Node and build pre-compiled Node.js addons in the popular systems language. v2 introduces a new macro API for defining JS values in Rust and makes the Rust code _far_ easier to write. Async functions are now also supported, which is dope. [Neon](https://nodeweekly.com/link/118382/web) explores similar ideas in this space.

[0x 5.0: Single-Command Flamegraph Profiling for Node](https://nodeweekly.com/link/118383/web "github.com") — A tool that can profile and generate an interactive flamegraph ([example](https://nodeweekly.com/link/118384/web)) for a Node process in a single command.

[Using Node.js ES Modules and Top-Level `await` in AWS Lambda](https://nodeweekly.com/link/118387/web "aws.amazon.com") — Serverless _AWS Lambda_ functions now support ES modules by way of the Node.js 14.x runtime.

[A Red Hat Flavored Review of Node.js in 2021](https://nodeweekly.com/link/118388/web "developers.redhat.com") — Red Hat has its own Node.js team and this is what they achieved in 2021, including working on Node 17, shipping a variety of [useful cheat sheets](https://nodeweekly.com/link/118389/web), and work on using Node serverlessly on Red Hat OpenShift.

[Think Less, Do More: Reducing Cognitive Overhead with ThePrimeagen](https://nodeweekly.com/link/118390/web "about.sourcegraph.com")

[Ask HN: Where Are the Resources for Complex Architectures for Node.js?](https://nodeweekly.com/link/118391/web)  

## 🛠 Code & Tools

[Robots Parser 3.0: A `robots.txt` Parser](https://nodeweekly.com/link/118392/web "github.com") — If you’re scraping or otherwise making automated requests to other people’s sites, abiding by their `robots.txt` rules is a good practice, and this could help you figure it out.

[Instauto: An Instagram Bot / Automation Library](https://nodeweekly.com/link/118393/web "github.com") — Uses Puppeteer to do the hard work. The focus here is on ease of use.

[fast-json-stringify 3.0: 2x Faster than `JSON.stringify()`?](https://nodeweekly.com/link/118394/web "github.com") — It seems apt that _Fastify_ made this library.

[Build Internal Tools in Minutes with Retool, Where Visual Programming Meets the Power of Real Code](https://nodeweekly.com/link/118395/web "retool.com")

[Jasmine 4.0: The Testing Framework for Browsers and Node](https://nodeweekly.com/link/118396/web "github.com") — Yes, there are breaking changes (no IE support, no old Node versions support, behavior changes and more) but there’s [a migration guide](https://nodeweekly.com/link/118397/web) to make it simpler if you’re a Jasmine user.

[active-win 7.7.0: Get Metadata About the Active Window](https://nodeweekly.com/link/118398/web "github.com") — You can use this to get the title, width, height, x and y of the currently active window. Maybe useful for building your own productivity tracker or something? Now supports Apple Silicon natively.

[public-ip 5.0: Quickly Get Your Public IP Address](https://nodeweekly.com/link/118399/web "github.com") — Queries the DNS records of OpenDNS, Google DNS, and HTTPS services to determine your IP address. Now a pure ES module.

[The Official MongoDB Node.js Driver v4.3.0](https://nodeweekly.com/link/118400/web "github.com") — Adds SOCKS5 support and key auto-completion support and type hinting on nested documents if you use TypeScript (all explained in these release notes).

[TypeScript Express Starter App 7.0](https://nodeweekly.com/link/118401/web "github.com") — A boilerplate app generator for getting a RESTful API up and running quickly on top of things like PM2, SWC, and Docker. You can choose from sub-templates covering the basics, using Sequelize, Mongoose, TypeORM, Prisma, or Knex too.

[SuperTest 6.2: Super-Agent Driven Library for Testing Node HTTP Servers](https://nodeweekly.com/link/118402/web "github.com") — Make assertions about HTTP servers using a fluent API.

> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文]()对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/)
> * 译者：
> * 校对者：

