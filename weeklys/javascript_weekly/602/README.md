---
title: 'JavaScript Weekly #602' # 不可修改
date: '2022-10-07' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

#​602 — August 12, 2022

[Unsubscribe](https://javascriptweekly.com/link/127596/web)  |  [Read on the Web](https://javascriptweekly.com/link/127597/web)

☀️ We're taking a rare week off next week for a brief summer vacation so there won't be any issue on August 19 – we'll be back on August 26, complete with a sun tan wind burn, and all the latest JavaScript news, of course :-)  
\_\_  
_Peter Cooper, your editor._

JavaScript Weekly

[Astro 1.0: The Fast Islands-Based Frontend Framework](https://javascriptweekly.com/link/127642/web "astro.build") — Despite its relative youth, Astro has had a big impact already with a wide range of users and support for, well, almost every other framework or dev tool going. It's based around ‘islands’ where fast HTML can stand in for components which can then be lazily loaded in as user interactions demand. 1.0 introduces new image and picture components, MDX/Markdown support, and SSR builds. There’s [a new homepage](https://javascriptweekly.com/link/127643/web) too.

Fred Schott

[Patterns.dev: Modern Web App Design Patterns](https://javascriptweekly.com/link/127599/web "www.patterns.dev") — A free book you can download in PDF format or enjoy on the Web. Learn about lots of fundamentals, from how different styles of rendering or importing resources work to performance optimizations and case studies. There’s a lot to enjoy and [a fantastic team](https://javascriptweekly.com/link/127600/web) behind it, too.

Lydia Hallie, Addy Osmani, and Others

[![](https://copm.s3.amazonaws.com/71dd1128.png)](https://javascriptweekly.com/link/127598/web)

[Add Excel-Like Spreadsheet Experiences to Your JS Apps](https://javascriptweekly.com/link/127598/web "www.grapecity.com") — SpreadJS is the industry-leading JavaScript spreadsheet for adding advanced spreadsheet features to your enterprise apps. Build finance, analysis, budget, and other apps. Excel I/O, 500+ calc functions, tables, charts, and more. [View demos now](https://javascriptweekly.com/link/127598/web).

SpreadJS from GrapeCity sponsor

**IN BRIEF:**

*   Three months on from 4.7, [TypeScript 4.8 is now in release candidate stage.](https://javascriptweekly.com/link/127620/web) Most of the enhancements relate to inference, type narrowing, and file watching.
    
*   🔒 [GitHub is proposing to use SigStore](https://javascriptweekly.com/link/127601/web) as a way for users and tools to verify npm package provenance as a way to improve security.
    
*   The [▶️ latest episode of the TC39er podcast](https://javascriptweekly.com/link/127621/web) features an interview with Bloomberg's Robin Ricard, known for his work on the [Records and Tuples](https://javascriptweekly.com/link/127622/web) proposal.
    
*   Lizz Parody walks us through [the proposal to support type annotations](https://javascriptweekly.com/link/127646/web) within _JavaScript_ code (yes, not TypeScript!)
    

**RELEASES:**

[Playwright 1.25.0](https://javascriptweekly.com/link/127644/web) – Browser remote control and runner toolkit.  
[Lerna 5.4](https://javascriptweekly.com/link/127623/web) – Build system for multiple JS projects in one repo.  
[Fastify 4.4](https://javascriptweekly.com/link/127602/web) – Fast, low overhead web framework.  
[NodeBB 2.4](https://javascriptweekly.com/link/127603/web) – Node.js based forum software.  
[Color.js 0.4](https://javascriptweekly.com/link/127648/web) – Color conversion & manipulation library.

📒 Articles & Tutorials

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/nwmbqmtmmobotkw37kbi.jpg)](https://javascriptweekly.com/link/127619/web)

[Code Golfing Tips and Tricks for Smaller JavaScript Code](https://javascriptweekly.com/link/127619/web "getbutterfly.com") — Writing code that’s as terse as possible isn’t _usually_ desirable – it's not fun for your coworkers, and your build process might minify your code anyway! But if you _need_ to squeeze into as few characters as possible and some messiness is tolerable.. this is a thorough list of ideas and a learning experience in its own right! (_Much of this comes from [this classic "byte saving techniques" page,](https://javascriptweekly.com/link/127650/web) BTW_.)

Ciprian

['How and Why We Removed jQuery from GOV.UK'](https://javascriptweekly.com/link/127639/web "insidegovuk.blog.gov.uk") — We’ve mentioned the UK government digital team’s culling of jQuery in passing a few times this year, but now there’s a (brief) explanation of how it happened.

Andy Sellick (GDS)

[How to Monitor a Node.js Application](https://javascriptweekly.com/link/127605/web "newrelic.com") — Set up monitoring for an open source application with New Relic using instant observability for Node.js quickstart.

New Relic sponsor

[How To Use Multithreading in Node.js](https://javascriptweekly.com/link/127604/web "www.digitalocean.com") — A practical walkthrough to how Node uses threads and how and why you might use worker threads yourself in a web app.

Stanley Ulili (for DigitalOcean)

▶  [Record and Tuple: Immutable Data Structures in JS](https://javascriptweekly.com/link/127624/web "portal.gitnation.org") — A JSNation 2022 talk looking at the motivation behind a proposal currently advancing through TC39. _(22 minutes.)_

Robin Ricard

[Modelling Stable Fluids with Three.js](https://javascriptweekly.com/link/127625/web "mofu-dev.com") — Math, math, shaders, and more math.

Misaki Nakano

[Will Bun Take Node's Crown?](https://javascriptweekly.com/link/127645/web) — Another comparison.  
Tomas Fernandez opinion

▶  [Let's Build Tetris: A Multi-Part Series](https://javascriptweekly.com/link/127640/web)  
Joe Boyle

🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/mxerxpa8uawbvvhq4znd.jpg)](https://javascriptweekly.com/link/127626/web)

[Grex: A Way to Generate Regular Expressions from Provided Examples](https://javascriptweekly.com/link/127626/web "pemistahl.github.io") — This demo is quite fun to play with. Grex is a Rust-based improvement of a JavaScript project which, by way of WebAssembly can be used from JavaScript once again. It’s quite a neat idea and while it’s not perfect, it can provide you with some inspiration for crafting regexes. [GitHub repo](https://javascriptweekly.com/link/127627/web).

Peter M. Stahl

[Cloudscape: AWS's React Component Design System](https://javascriptweekly.com/link/127607/web "cloudscape.design") — Built for and used by Amazon Web Services, you get [66 components](https://javascriptweekly.com/link/127608/web), opinionated guides on design best practices, and [many demos](https://javascriptweekly.com/link/127609/web).

Amazon Web Services

[Don’t Let Your Issue Tracker Be a Four-Letter Word. Use Shortcut](https://javascriptweekly.com/link/127610/web "shortcut.com") — The best issue tracking software is one that software developers are actually happy to use.

Shortcut (formerly Clubhouse.io) sponsor

[Million 1.12: A Fast and Small Virtual DOM Implementation](https://javascriptweekly.com/link/127606/web "millionjs.org") — Focused on performance and shipping at under 1KB compressed, Million is ideal if you want an agnostic VDOM implementation to use when building your own framework or just to go a little lower level. _“Think of it as if React’s API and Svelte’s compiler had a baby.”_

Million

[React Rating: Easy Star Ratings Component](https://javascriptweekly.com/link/127611/web "react-rating.onrender.com") — SVG-based. No dependencies. Check out [the many examples](https://javascriptweekly.com/link/127611/web) to see if it gets your ⭐️⭐️⭐️⭐️⭐️

Simone Mastromattei

[Size Limit 8.0: Performance Budgeting Tool for JavaScript](https://javascriptweekly.com/link/127612/web "github.com") — Calculate the real ‘cost’ to run your JS app or lib to maintain an eye on performance and raise an error (in CI, say) when things go awry. Supports ES modules and tree shaking.

Andrey Sitnik

[svg2pdf.js: Browser Based SVG to PDF Converter](https://javascriptweekly.com/link/127613/web "github.com") — There’s an [online playground](https://javascriptweekly.com/link/127614/web) to give you a feel for what it can do.

yWorks GmbH

[brotli-wasm: Brotli Compressor and Decompressor](https://javascriptweekly.com/link/127628/web "github.com") — Covers both Node _and_ the browser by means of WebAssembly.

HTTP Toolkit

[Never Code an Email API Template Again](https://javascriptweekly.com/link/127615/web "www.courier.com")

Courier.com sponsor

[Grakkit: A Modern JS Dev Environment for Minecraft](https://javascriptweekly.com/link/127616/web "github.com") — Brings together JS and Minecraft by way of GraalVM.

Grakkit Project

[React Colorful 5.6: A Small Color Picker Component for (P)react](https://javascriptweekly.com/link/127629/web) — Nice demo that changes the color of the homepage.  
Vlad Shilov

[React DayPicker v8: A Date Picker Component](https://javascriptweekly.com/link/127630/web)  
Giampaolo Bellavite

[string-left-right: Find the First Non-Whitespace Character to the Left or Right of a Given Index](https://javascriptweekly.com/link/127631/web)  
Roy Revelt

**OTHER QUICK RELEASES:**

[Jayson 4.0](https://javascriptweekly.com/link/127632/web) – JSON-RPC client/server for Node.  
[vite-plugin-eslint 1.8](https://javascriptweekly.com/link/127633/web) – ESLint plugin for Vite.  
[Faker 7.4](https://javascriptweekly.com/link/127634/web) – Generate massive amounts of fake data.  
[COBE 0.6](https://javascriptweekly.com/link/127635/web) – 5KB WebGL globe lib. ([Demo.](https://javascriptweekly.com/link/127636/web))  
[html-to-image 1.10](https://javascriptweekly.com/link/127637/web) – Generate images from DOM nodes.  
[Juice 8.1](https://javascriptweekly.com/link/127638/web) – Inlines CSS stylesheets into your HTML source.

💻 Jobs

[Node.js Developer (Remote or Warsaw)](https://javascriptweekly.com/link/127617/web) — Join our backend team responsible for CKEditor Cloud Services and develop an Open Source product used by millions of users worldwide.  
CKEditor

[Find JavaScript Jobs with Hired](https://javascriptweekly.com/link/127618/web) — Create a profile on Hired to connect with hiring managers at growing startups and Fortune 500 companies. It's free for job-seekers.  
Hired

😮 **WOW OF THE WEEK**

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/hzxxj5qzwaimdiv6skwp.jpg)](https://javascriptweekly.com/link/127641/web)

If you've got a few minutes, [▶️ this video of a recent winning 'demo'](https://javascriptweekly.com/link/127641/web) from a demoscene contest is pretty mindblowing.

The code was written in 2022, but is running on a 1981 IBM PC using CGA graphics and if you're old enough to have used such a machine (like me!) it's amazing what they've managed to squeeze out of it. As one commenter (Jeff Haluska) said: _"I have been programming for about 25 years and Area 5150 has me questioning everything I know about computers."_

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/602)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/602)
> * 译者：
> * 校对者：
