---
title: 'Node Weekly #451' # 不可修改
date: '2022-09-16' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

#​451 — August 25, 2022

[Read on the Web](https://nodeweekly.com/link/127879/web)

![Node.js Weekly](https://res.cloudinary.com/cpress/image/upload/v1653576619/lgfqinzbdqttwmhvljxb.png)

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/zc2fzeienpwjbh7mfrnz.jpg)](https://nodeweekly.com/link/127880/web)

[Crawlee: A New Web Scraping / Automation Library](https://nodeweekly.com/link/127880/web "blog.apify.com") — It’s always neat to see a new project launched with some fanfare. Crawlee gets a [▶️ 3-minute introductory screencast](https://nodeweekly.com/link/127881/web), a [launch post](https://nodeweekly.com/link/127880/web), and a [nice homepage.](https://nodeweekly.com/link/127882/web) It builds _on top_ of things like Puppeteer and Playwright but can handle proxies, retries, spidering, working around bot blocks, and the like. While it comes from Apify, it’s open source too.

Apify

[Popular Node.js Patterns and Tools to Reconsider?](https://nodeweekly.com/link/127883/web "practica.dev") — Yoni is well known for his work in cataloging [Node best practices](https://nodeweekly.com/link/127884/web) but he thinks we should reflect upon entrenched approaches over time. Here he presents nine common approaches to reconsider, including the use of Dotenv, Passport.js, and having conditional code based on the value of `NODE_ENV`.

Yoni Goldberg

[![](https://copm.s3.amazonaws.com/d4169974.png)](https://nodeweekly.com/link/127885/web)

[RedisGreen: Secure, Scalable, Full-Featured Redis 7 Hosting](https://nodeweekly.com/link/127885/web "dashboard.redisgreen.net") — The latest Redis features, instrumented and scaled with the tools teams need as they grow.

RedisGreen sponsor

[Node v18.8.0 (Current) Released](https://nodeweekly.com/link/127886/web "nodejs.org") — This update introduces `--build-snapshot` and `--snapshot-blob` options for creating and using user-land snapshots. npm also gets bumped to 8.18.0 which introduces [the `npm query` command](https://nodeweekly.com/link/127887/web).

Ruy Adorno

**QUICK BITS:**

*   The Deno project has made [an announcement around some 'big changes ahead'](https://nodeweekly.com/link/127888/web) which includes a goal to _"make the vast majority of npm packages work in Deno within the next three months."_ This will certainly open up the alternative runtime much more to existing Node developers.
    
*   🥯 In other server-side JS runtime news, [Bun](https://nodeweekly.com/link/127889/web) was unveiled to much fanfare recently and its creator has now unveiled a company around it called [Oven](https://nodeweekly.com/link/127890/web) (ha! - we do like a pun) along with $7m of funding. There's a lot of work ahead.. [a 'grind'](https://nodeweekly.com/link/127891/web), if you will, and a lot of folks in the community are worried about potential burn-out there. Jarred is [▶️ very passionate](https://nodeweekly.com/link/127892/web) about the potential of the project and we'll report on future developments.
    

[Node v16.17.0 (LTS) Released](https://nodeweekly.com/link/127893/web "nodejs.org") — This is one of those incredibly useful LTS releases where a bunch of more modern features get backported and made available to developers who can’t run ‘Latest’ all the time. With 16.17.0, 16.x users gain access to the `util.parseArgs` CLI argument parsing function, the experimental ESM loader hooks API, and the `node:test` module and runner, plus a variety of dependency updates.

Michaël Zasso

[How to Monitor a Node.js Application](https://nodeweekly.com/link/127894/web "newrelic.com")

New Relic sponsor

[Deploying a Node App with AWS Elastic Beanstalk](https://nodeweekly.com/link/127895/web "www.honeybadger.io") — _Elastic Beanstalk_ was one of the earliest app deployment orchestration services and while there are now _lots_ of approaches to deploying apps, EB remains an option for AWS users.

Samson Omojola

[How to Use OpenTelemetry to Trace Node.js Applications](https://nodeweekly.com/link/127896/web "developers.redhat.com") — A five-step tutorial sharing how to instrument your app to better troubleshoot production errors.

Patil, Frota, Panchamukhi (Red Hat)

🛠 Code & Tools

[file-type 18.0: Detect the File Type of a Buffer, Uint8Array or ArrayBuffer](https://nodeweekly.com/link/127897/web "github.com") — For example, give it the raw data from a PNG file, and it’ll tell you it’s a PNG file. Uses magic numbers so is targeted solely at non text-based formats.

Sindre Sorhus

[Soketi: Simple and Fast WebSockets Server](https://nodeweekly.com/link/127898/web "github.com") — _“Ever dreamed about Serverless WebSockets? Soketi can be deployed to Cloudflare Workers. All around the world, closer to your users. Same Pusher protocol.”_ Written in TypeScript.

Soketi Team

[Do More of What You Love: Join the Collaboration Community](https://nodeweekly.com/link/127911/web "www.polywork.com")

Polywork sponsor

[brotli-wasm: A Reliable Brotli Compressor and Decompressor](https://nodeweekly.com/link/127900/web "github.com") — Covers both Node _and_ the browser by means of WebAssembly.

HTTP Toolkit

[NodeGui: Build Cross Platform Desktop Apps with JS and CSS](https://nodeweekly.com/link/127901/web "docs.nodegui.org") — Sounds a bit like Electron? Of course. But it’s somewhat different as it uses the Qt GUI framework which can make things more complicated but also more efficient in terms of memory use.

NodeGui

**QUICK RELEASES:**

*   [Wild Wild Path 3.1](https://nodeweekly.com/link/127902/web) – 🤠 Object property paths with wildcards and regexps.
*   [NATS.js 2.8](https://nodeweekly.com/link/127903/web) – Node client for the NATS messaging system.
*   [Slonik 30.3](https://nodeweekly.com/link/127904/web) – Postgres client with runtime and build time type safety.
*   [mojo.js 1.4](https://nodeweekly.com/link/127905/web) – Perl inspired real-time web framework.
*   [Undici 5.10](https://nodeweekly.com/link/127906/web) – Powerful HTTP/1.1 client.
*   [cacheable-request 9.0](https://nodeweekly.com/link/127907/web) – Wrap native HTTP requests with RFC compliant cache support. Now pure ESM.
*   [Fastify 4.5.2](https://nodeweekly.com/link/127908/web)
*   [npm 8.18.0](https://nodeweekly.com/link/127909/web)

💻 Jobs

[Senior JavaScript/TypeScript Developer (Remote or Warsaw) 🇵🇱](https://nodeweekly.com/link/127912/web) — Join the CKEditor team to develop an Open Source project used by millions of users around the world 🚀and realize your true potential.  
CKEditor

[Find Tech Jobs with Hired](https://nodeweekly.com/link/127910/web) — Create a profile on Hired to connect with hiring managers at growing startups and Fortune 500 companies. It's free for job-seekers.  
Hired

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/451)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/451)
> * 译者：
> * 校对者：
