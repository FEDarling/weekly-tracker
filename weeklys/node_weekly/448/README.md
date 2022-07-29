---
title: 'Node Weekly #448' # 不可修改
date: '2022-07-29' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

#​448 — July 28, 2022

[Read on the Web](https://nodeweekly.com/link/126828/web)

![Node.js Weekly](https://res.cloudinary.com/cpress/image/upload/v1653576619/lgfqinzbdqttwmhvljxb.png)

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/owdhbfzkqv67lqkqpylm.jpg)](https://nodeweekly.com/link/126829/web)

[Introducing _Even More_ Security Enhancements to npm](https://nodeweekly.com/link/126829/web "github.blog") — GitHub continues to up npm’s security game with enhancements that affect most of us in some way or another. There’s a streamlined login and publishing experience with the npm CLI, you can connect your GitHub and Twitter accounts to your npm one, and there’s a new npm command (`npm audit signatures`) to verify the integrity of packages in npm (all of which have been re-signed).

Myles Borins and Monish Mohan (GitHub)

[![](https://copm.s3.amazonaws.com/3adc1f91.jpg)](https://nodeweekly.com/link/126830/web)

[Build a Fullstack App from Scratch](https://nodeweekly.com/link/126830/web "frontendmasters.com") — Join Scott Moss for this detailed video course on building a fully featured app using a modern stack (React, Next.js, TypeScript, Postgres). You'll cover UI, data modeling, authentication, state management, deployment, testing, and more.

Frontend Masters sponsor

[Creating ESM-Based Shell Scripts for Unix and Windows](https://nodeweekly.com/link/126831/web "2ality.com") — This is not as easy as you’d hope! But luckily Dr. Axel has figured out most of the intricacies of creating modern shell scripts with Node and packed it all into this factually dense post.

Dr. Axel Rauschmayer

[Using Rust for Writing Node Modules](https://nodeweekly.com/link/126832/web "blog.techfund.jp") — Soon it’s going to be difficult to find anywhere that the Rust language _isn’t_! This post boils down creating a Rust-powered extension to the absolute essentials as a springboard to further experiments. [NAPI-RS](https://nodeweekly.com/link/126833/web) is another option this space if you want to write as little boilerplate as possible.

TechFund

[Deeper Testing of Bun's Performance and Compatibility Against Node](https://nodeweekly.com/link/126834/web "techsparx.com") — Last week we linked to David’s initial [Node vs Bun comparison](https://nodeweekly.com/link/126835/web) but had to quickly retract it as there was [a rather big flaw](https://nodeweekly.com/link/126836/web) in the testing. Happily, David is back with _“some more carefully constructed performance tests”_ that digs deeper and shows that while Bun’s Node.js compatibility still isn’t _really_ there, it’s early days and there’s a lot of promise. _“Bottom line is that Bun will succeed if the Node.js community pitches in.”_

David Herron

[Debug Node Apps in Production Without Stopping Them](https://nodeweekly.com/link/126837/web "www.rookout.com")

Rookout sponsor

[Node v18.7.0 (Current) Released](https://nodeweekly.com/link/126838/web "nodejs.org") — A minor release. npm and Undici get version bumps. `http` now sends a `dropRequest` event when requests are dropped due to hitting `server.maxRequestsPerSocket`. `util.parseArgs` continues to [get some enhancements.](https://nodeweekly.com/link/126839/web) It’s all quite bitesize stuff, but progress nonetheless.

Danielle Adams (Node.js)

[How to Use Node.js Modules in Deno](https://nodeweekly.com/link/126840/web)  
Ekekenta Clinton

🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/kzzyuymejqqqbdhhr2kb.jpg)](https://nodeweekly.com/link/126841/web)

[simplex-noise.js 4.0: A Fast Simplex Noise Implementation](https://nodeweekly.com/link/126841/web "github.com") — Small, self contained, and fast, and you can use it in [cool demos like this](https://nodeweekly.com/link/126842/web) or for applying convincing grain/noise to images or other data, say.

Jonas Wagner

[serverless-bundle 5.4: Optimized Packages for Config-Free ES6 and TypeScript Node.js Lambda Functions](https://nodeweekly.com/link/126843/web "github.com") — _Serverless Framework_ plugin that optimally packages ES6 or TypeScript Node.js Lambda functions with sensible defaults.

Anomaly Innovations

[Malicious Node.js Packages: Configuration Niche + Invisible Characters](https://nodeweekly.com/link/126844/web "snyk.io")

Snyk.io sponsor

[article-parser 7.0: Node Library to Extract Articles from Web Pages](https://nodeweekly.com/link/126845/web "github.com") — Give this a URL and if you’re lucky you’ll get some useful data back. [Live demo.](https://nodeweekly.com/link/126846/web) Mozilla’s [Readability](https://nodeweekly.com/link/126847/web) is used under the hood to make it work.

Dong Nguyen

[ejs-static-converter: Convert EJS-Based Node Apps to Static HTML Sites](https://nodeweekly.com/link/126848/web "www.npmjs.com") — _“useful for converting apps or websites that were made with node and ejs for easier development but don’t require any server-side code into static HTML.”_

Thomas Hamilton-Smith

**QUICK RELEASES:**

[Jasmine 4.3](https://nodeweekly.com/link/126849/web) – Popular JavaScript testing framework.  
[Ghost 5.5](https://nodeweekly.com/link/126850/web) – Blog and CMS platform.  
[pnpm 7.6](https://nodeweekly.com/link/126851/web) – Efficient alternative package manager.  
[Fastify 4.3](https://nodeweekly.com/link/126852/web) – The low overhead web framework.  
[Strapi 4.3](https://nodeweekly.com/link/126853/web) – Popular Node.js headless CMS.  
[node-acme-client 5.0](https://nodeweekly.com/link/126854/web) – Simple, unopinionated ACME client.  
[Got 12.2](https://nodeweekly.com/link/126855/web) – Human-friendly HTTP request library.

💻 Jobs

[Software Engineers](https://nodeweekly.com/link/126860/web) — Sticker Mule is the Internet's most "kick ass" brand. Our software team operates from 17 countries, and we're always looking for more exceptional engineers.  
Sticker mule

[Find Tech Jobs with Hired](https://nodeweekly.com/link/126856/web) — Create a profile on Hired to connect with hiring managers at growing startups and Fortune 500 companies. It's free for job-seekers.  
Hired

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/448)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/448)
> * 译者：
> * 校对者：
