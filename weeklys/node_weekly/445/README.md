---
title: 'Node Weekly #445' # 不可修改
date: '2022-07-08' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

#​445 — July 7, 2022

[Read on the Web](https://nodeweekly.com/link/125903/web)

![Node.js Weekly](https://res.cloudinary.com/cpress/image/upload/v1653576619/lgfqinzbdqttwmhvljxb.png)

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/z10naoflgijcfexw2lzb.jpg)](https://nodeweekly.com/link/125904/web)

[Executing Shell Commands from Node.js](https://nodeweekly.com/link/125904/web "2ality.com") — Dr. Axel’s journey through the backrooms of Node.js continues with another in-depth guide – this time tackling running _other_ programs from our Node apps. The focus is on the built-in [`child_process`](https://nodeweekly.com/link/125905/web) module here, but you might also want to consider things like [execa](https://nodeweekly.com/link/125906/web) too.

Dr. Axel Rauschmayer

[Bun: An Interesting New JavaScript Runtime](https://nodeweekly.com/link/125907/web "bun.sh") — A challenger appears! Bun is a new JavaScript runtime built _not_ around V8 (like Node.js or Deno are) but WebKit/Apple’s _JavaScriptCore_. It includes its own bundler, transpiler, task runner, and npm client, but most significantly boasts huge performance [improvements](https://nodeweekly.com/link/125908/web) over existing options _and_ supports a lot of Node and Web APIs already. Want a quick tour and explanation? [▶️ This video by _Theo of ping.gg_](https://nodeweekly.com/link/125909/web) does a pretty good job. _One to watch_.

Jarred Sumner

[![](https://copm.s3.amazonaws.com/f1e8442e.jpeg)](https://nodeweekly.com/link/125910/web)

[Integrate eSignatures In Your App In Less Than A Week](https://nodeweekly.com/link/125910/web "www.hellosign.com") — Enable document signing from anywhere with HelloSign's eSignature functionality. Test the API for free.

HelloSign, a Dropbox Company sponsor

[Ways to Estimate npm Package Market Share](https://nodeweekly.com/link/125911/web "blog.isquaredsoftware.com") — Industry analysis is far from an exact science, but it’s interesting to see the techniques and data sources you can use to estimate things like relative market share of various packages.

Mark Erikson

[Isolating and Fixing a Memory Leak in a Real Node App](https://nodeweekly.com/link/125912/web "www.useanvil.com") — Specifically this is about how a team approached fixing a memory leak in a complex, real-world app, rather than just a simple example.

Chris Newhouse

**QUICK BYTES:**

*   Last week we mentioned some security releases were due this week due to some medium and high severity security issues, but it appears [Node is less affected than was anticipated](https://nodeweekly.com/link/125913/web) with just one moderate vulnerability on Windows (32 bit x86) to be resolved.
    
*   Vercel and Node.js 12 user? You might not be soon. [Vercel is deprecating Node.js 12](https://nodeweekly.com/link/125914/web) as of August 9th this year.
    

[An Introduction to Module Path Aliases / Mappings](https://nodeweekly.com/link/125915/web "abhijithota.me") — A tidy example and explanation of the value of aliases for tidying up your import paths.

Abhijit Hota

[GV (Google Ventures) Invests $35m into Node Notification Infrastructure](https://nodeweekly.com/link/125916/web "www.courier.com")

Courier.com sponsor

▶  [Playing Pokemon Together with Node](https://nodeweekly.com/link/125917/web "www.youtube.com") — For some reason, Confreaks (well known for their top notch conference recordings) has been uploading talks from older conferences this week. This one from JSConf US 2019 tickled us as a bit of fun.

Samuel Agnew

🛠 Code & Tools

[yoctocolors 1.0: The Smallest and Fastest Command-Line Coloring Package](https://nodeweekly.com/link/125918/web "github.com") — It’s [Chalk](https://nodeweekly.com/link/125919/web)’s baby cousin.

Sindre Sorhus

[string-strip-html: Strip HTML Tags from Strings](https://nodeweekly.com/link/125920/web "www.codsen.com") — Lots of examples to see here. Quite a lot of functionality - it’s not just a regex and replace. You can strip HTML and contents, keep the contents, and even tackle widow words.

Roy Revelt

[Improve Your Test Suite’s Reliability And Speed](https://nodeweekly.com/link/125927/web "buildkite.com")

Buildkite Test Analytics sponsor

[Linkinator 4.0: A Tool That Finds Your Site's Broken Links](https://nodeweekly.com/link/125921/web "github.com") — Both a Node.js API and CLI tool that can be used to crawl a site and validate links. You can run it as easily as `npx linkinator https://example.com/` right now if you want to try it out.

Justin Beckwith

[pg-mem: An Experimental In-Memory Postgres Instance for Tests](https://nodeweekly.com/link/125922/web "github.com") — There’s [a playground](https://nodeweekly.com/link/125923/web) if you want to experiment with what it can handle.

Olivier Guimbal

[easy-template-x: Generate `.docx` Documents from Templates](https://nodeweekly.com/link/125924/web "github.com") — Given a template document with Mustache-esque tags, this can switch in different content en masse, mail merge style.

Alon Bar

💻 Jobs

[Software Engineers](https://nodeweekly.com/link/125925/web) — Sticker Mule is the Internet's most "kick ass" brand. Our software team operates from 17 countries, and we're always looking for more exceptional engineers.  
Sticker mule

[Find Tech Jobs with Hired](https://nodeweekly.com/link/125926/web) — Create a profile on Hired to connect with hiring managers at growing startups and Fortune 500 companies. It's free for job-seekers.  
Hired

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/445)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/445)
> * 译者：
> * 校对者：
