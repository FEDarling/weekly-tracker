---
title: 'JavaScript Weekly #597' # 不可修改
date: '2022-07-10' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/rswj17oiaoodjldvjgnl.jpg)](https://javascriptweekly.com/link/126089/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Bun: An Exciting, Speedy New JavaScript Runtime](https://javascriptweekly.com/link/126089/web "bun.sh") — Tired of Node? Tired of Deno? Never. But a new challenger _has_ appeared. Bun is aimed at 'outside of browser' use cases and is built around WebKit's _JavaScriptCore_, rather than V8. Some notable features:

*   Includes its own bundler, transpiler, and task runner.
*   Promising [performance](https://javascriptweekly.com/link/126090/web).
*   Supports a lot of Node and Web APIs already.
*   You can use npm packages with it.
*   Works on macOS (x86 and Arm), Linux, or WSL.

[▶️ This 20-minute video](https://javascriptweekly.com/link/126091/web) does a reasonable job of showing it off, or if you'd prefer [▶️ a three-minute summary from Fireship.](https://javascriptweekly.com/link/126092/web) It's early (beta) days but this is an exciting project to watch. _(P.S. I’ve heard Bun is called [▶️ Barmcake](https://javascriptweekly.com/link/126093/web) in northern England..)_

Jarred Sumner

[![](https://copm.s3.amazonaws.com/db48340c.jpeg)](https://javascriptweekly.com/link/126037/web)

[FlexGrid by Wijmo: The Industry-Leading JavaScript Datagrid](https://javascriptweekly.com/link/126037/web "www.grapecity.com") — We are excited to announce some great new features in our powerful JavaScript datagrid component for your web applications. Add familiar Excel-like functionality to make the most of your tabular data. Get started with FlexGrid for free today.

Wijmo from GrapeCity sponsor

[bundlejs: Online npm Package Bundler and Size Checker](https://javascriptweekly.com/link/126069/web "bundlejs.com") — An online tool that can treeshake, bundle, minify, and compress (gzip and brotli) projects and show you just what their weight is. [Bundlephobia](https://javascriptweekly.com/link/126070/web) is another popular option in this space, but [Mark Erikson says](https://javascriptweekly.com/link/126071/web) bundlejs is _“now \_wayyy\_ better.”_

Okiki Ojo

[How To NOT Block the Browser: The Essentials](https://javascriptweekly.com/link/126038/web "t.co") — If you’ve seen articles or tools talking about taking code off of the ‘main thread’ and wondered why that matters, this is the primer for you. It covers the event loop, Web Workers, async scheduling, and how they make a difference.

Matthew Costello

**IN BRIEF:**

*   [The latest update to VS Code](https://javascriptweekly.com/link/126039/web) is out. You can now easily toggle sourcemaps on and off, use _Step Into Target_ in the JS debugger, and there's a 3-way merge editor.
    
*   Talking of VS Code, Microsoft is _beginning_ to unveil (in 'private preview' for now) [the VS Code Server](https://javascriptweekly.com/link/126072/web) that backs VS Code's remote development features so you can run it on your own hardware.
    
*   The folks at MDN are discussing [modernizing their code examples](https://javascriptweekly.com/link/126040/web) to modern JavaScript standards.
    
*   Shopify is now [officially a member of Ecma](https://javascriptweekly.com/link/126095/web) and Surma will be a TC39 delegate.. so expect to see [JS module blocks](https://javascriptweekly.com/link/126096/web) soon 😆
    

## **RELEASES:**

[Node 14.20.0 (LTS)](https://javascriptweekly.com/link/126041/web), [16.16.0 (LTS)](https://javascriptweekly.com/link/126042/web) & [18.5.0 (Current)](https://javascriptweekly.com/link/126043/web)  
[Fuite 1.6](https://javascriptweekly.com/link/126044/web) – Tool for finding memory leaks in web apps.  
[oclif 3.1](https://javascriptweekly.com/link/126045/web) – Node.js open CLI framework.  
[Notion SDK for JS 2.0](https://javascriptweekly.com/link/126046/web) – Official Notion JavaScript client.  
[Tabulator 5.3](https://javascriptweekly.com/link/126047/web) – Interactive table and data grid control.  
[Preact 10.9](https://javascriptweekly.com/link/126048/web) – Say hello to React 18's new hooks (except `useId`).  
[Perspective 1.5.1](https://javascriptweekly.com/link/126049/web) – Fast data visualization via WebAssembly.

## 📒 Articles & Tutorials

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/cez2asrn8z4kvdcjpryp.jpg)](https://javascriptweekly.com/link/126073/web)

[Chess Engines: A Zero to One](https://javascriptweekly.com/link/126073/web "www.chessengines.org") — This is a fun introduction to something I didn’t think would be particularly interesting. [chessboard.js](https://javascriptweekly.com/link/126074/web) and [chess.js](https://javascriptweekly.com/link/126075/web) make it easy to get experimenting.

Will DePue

[The New Wave of React State Management](https://javascriptweekly.com/link/126050/web "frontendmastery.com") — It's not a quick piece by any means, but provides a sweeping overview, along with some history and opinion, of the world of state management and some available options.

Frontend Mastery

[Wallaby.js: 15x Faster JavaScript Testing, Now with Support for Vitest](https://javascriptweekly.com/link/126051/web "wallabyjs.com") — Wallaby runs tests as you type, with real-time runtime values, errors and coverage displayed next to your code.

Wallaby.js sponsor

[Reimagining Front-End Web Development with htmx and Hyperscript](https://javascriptweekly.com/link/126052/web "nomadiq.hashnode.dev") — It’s interesting to see how developers have options to _not_ write JavaScript, yet still produce useful frontends. [▶️ Writing JavaScript to Avoid Writing JavaScript](https://javascriptweekly.com/link/126053/web) is also a neat talk on htmx and this broad phenomenon.

Owen Jones

▶  ['How I Built a Software Agency Website with Next.js and Tailwind'](https://javascriptweekly.com/link/126054/web "www.youtube.com") — If you want to see how another developer works in the most peaceful and elegant way possible, this (quite long) video is for you. Lovely.

Takuya Matsuyama

[Simplify Your Full-Stack Applications with XState](https://javascriptweekly.com/link/126076/web "blog.theodo.com") — State management is one of those things it can take a while to really get into, particularly in areas of development not commonly associated with them, but it can be worth it in order to reduce systemic complexity (at the cost of more code up-front).

Daniel Belo Gonçalves

[How to Build, Test and Deploy a Bookstore App with React 18, Vite, and Netlify Functions](https://javascriptweekly.com/link/126055/web "labs.pineview.io") — Brings together a variety of modern tools to practical ends, including getting an app online with serverless functions on the backend.

Yevhen Kapelianovych

[GV (Google Ventures) Invests $35M Into JavaScript Notifications API](https://javascriptweekly.com/link/126056/web "www.courier.com") — A need for notification management systems has grown rapidly as software companies realize this critical user experience.

Courier.com sponsor

▶  [Easy Form Validation in Vue 3 with Vuelidate](https://javascriptweekly.com/link/126077/web "www.youtube.com") — [Vuelidate](https://javascriptweekly.com/link/126078/web) is, unsurprisingly, a validation library.

John Komarnicki

[Dr. Axel Goes Deep on Executing Shell Commands from Node](https://javascriptweekly.com/link/126057/web)  
Dr. Axel Rauschmayer

[How to Use the Native Web Share API from JavaScript](https://javascriptweekly.com/link/126058/web)  
Daily Dev Tips

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/lw9emxjf6kmxvwlp84yu.jpg)](https://javascriptweekly.com/link/126059/web)

[Big Calendar 1.x: A GCal/Outlook-like Calendar React Component](https://javascriptweekly.com/link/126059/web "github.com") — Uses flexbox for improved responsiveness.

Jason Quense

[PocketBase: A Backend in a Single Binary](https://javascriptweekly.com/link/126079/web "pocketbase.io") — An interesting project that could replace Firebase in numerous scenarios. It’s written in Go but ultimately acts as the backend to your frontend JavaScript app. It uses SQLite and you get an admin dashboard built-in with file and user management too. [Live demo](https://javascriptweekly.com/link/126080/web) and [rather nice docs.](https://javascriptweekly.com/link/126081/web)

Gani Georgiev

[ProtoScript: Protocol Buffers Runtime and Code Generation Tool](https://javascriptweekly.com/link/126061/web "www.npmjs.com") — The runtime is a lot smaller than Google’s, and the code generator generates idiomatic JavaScript complete with JSON (de)serializers and TSDoc comments.

Tate Thurston

[Free Activity Feeds & Chat APIs for Qualifying Teams](https://javascriptweekly.com/link/126062/web "getstream.io")

Stream sponsor

[Deprank: Use PageRank to Find the Important Files in Your Codebase](https://javascriptweekly.com/link/126063/web "github.com") — [PageRank](https://javascriptweekly.com/link/126064/web) is an algorithm commonly associated with how Google used to rank Web pages, but the idea can be adapted to ranking things in any sort of set of linked items, as seen here.

Codemix Ltd

[tsParticles: Particles, Confetti and Fireworks for Your Pages](https://javascriptweekly.com/link/126060/web "particles.js.org") — Create customizable particle related effects for use on the Web. Uses the regular 2D canvas for broad support.

Matteo Bruni

[Amplify UI for React Now Generally Available](https://javascriptweekly.com/link/126082/web "aws.amazon.com") — [Amplify](https://javascriptweekly.com/link/126083/web) is a sort of sub-platform tying together various AWS services in a way that makes them easier to use for frontend and mobile projects. A part of that is [Amplify UI](https://javascriptweekly.com/link/126084/web), a collection of React components connected directly to the AWS cloud (Vue and Angular variants are available).

Amazon Web Services, Inc.

[Wayne: It's Like Express.js, But Inside Service Workers](https://javascriptweekly.com/link/126065/web "github.com") — Specifically, it’s a routing library for use within service workers.

Jakub T. Jankiewicz

## **🤔 DID YOU KNOW..**

*   you can now use AWS's IAM role/access management system [_outside_ of AWS?](https://javascriptweekly.com/link/126068/web)
    
*   it's possible to have [▶️ a Sudoku puzzle without any digits on it](https://javascriptweekly.com/link/126085/web) that takes two hours to solve?
    
*   Lea Verou gave a [▶️ fantastic talk about CSS custom properties](https://javascriptweekly.com/link/126086/web) at CSS Day 2022? You will learn something.
    
*   🐘 we have [a Postgres newsletter](https://javascriptweekly.com/link/126087/web) too? A lot is going on in the Postgres space lately, so if you use it, [check it out.](https://javascriptweekly.com/link/126088/web)

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/597)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/597)
> * 译者：
> * 校对者：
