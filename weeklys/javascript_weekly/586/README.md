---
title: 'JavaScript Weekly #586' # 不可修改
date: '2022-04-23' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

Lots of bits and pieces this week like running JavaScript on MS-DOS(!?), a deep dive on a V8 optimization, writing React apps on top of Ruby on Rails, a JS runtime for a tiny microcontroller, and, oh, a huge Node release..

JavaScript Weekly

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/qwfonw0ametgqbvq807q.jpg)](https://javascriptweekly.com/link/122666/web)

[Lexical: An Extensible Text Editor Library (That Does Things Differently)](https://javascriptweekly.com/link/122666/web "lexical.dev") — Fresh from Meta (or Facebook, as my brain still calls it) comes a new text editor framework with accessibility, performance, and reliability at its heart. 22KB gzipped, supports React 18 (but can be used in a vanilla fashion), and a (native) iOS version is to follow. Remind you of [Draft.js](https://javascriptweekly.com/link/122667/web)? Think of this as the next generation: Meta is – they’re replacing Draft with Lexical in their apps.

Meta / Facebook

[Node.js 18 (Current) Released](https://javascriptweekly.com/link/122668/web "nodejs.org") — We get V8 10.1, Undici-powered global Fetch API support, Web Streams API support, Blob and BroadcastChannel APIs, the new test runner module, and the ability to create your own Node.js binaries with custom V8 startup snapshots. Node 18 goes LTS from October, but gets all the latest features until then.

The Node.js Team

[![](https://copm.s3.amazonaws.com/c1ef3b42.jpg)](https://javascriptweekly.com/link/122669/web)

[Open-Source Backend Server for Web, Mobile & Flutter Devs](https://javascriptweekly.com/link/122669/web "appwrite.io") — Appwrite is a secure, self-hosted solution that provides developers with a set of easy-to-use REST APIs to manage their core backend needs. You can build anything with Appwrite! [Click here to learn more](https://javascriptweekly.com/link/122669/web).

Appwrite sponsor

[The OpenJS Foundation's _JavaScriptLandia_ Awards](https://javascriptweekly.com/link/122670/web "docs.google.com") — Back in 2020, the OpenJS Foundation launched [JavaScriptLandia](https://javascriptweekly.com/link/122671/web) as a sort of way to express support for the JS ecosystem, but here’s a practical result of it: you can nominate anyone in the JS ecosystem for an award for the hard work they do. So, um, yeah, find your favorite new library and nominate its creator, perhaps?

OpenJS Foundation

[Ember 4.3 Released](https://javascriptweekly.com/link/122672/web "blog.emberjs.com") — One of JavaScript’s longest standing web application frameworks takes another step forward. Why use Ember? Well there’s [a site explaining that](https://javascriptweekly.com/link/122673/web) too.

Anne-Greeth Schot-van Herwijnen and Jen Weber

## **IN BRIEF:**

*   👾 Got some spare time this weekend to build a game in JavaScript? The [Gamedev.js Jam 2022](https://javascriptweekly.com/link/122674/web) is on and finishes next Tuesday.
    
*   You can now [make your GitHub profile private,](https://javascriptweekly.com/link/122675/web) if you wish.
    
*   We're big fans of [Carbon](https://javascriptweekly.com/link/122676/web) for formatting source code for tweets, images, etc. but [Chalkist](https://javascriptweekly.com/link/122677/web) is another option to consider now.
    
*   Did you know there's even [JavaScript for MS-DOS](https://javascriptweekly.com/link/122678/web) now?
    
*   [WebAssembly 2.0](https://javascriptweekly.com/link/122679/web) is now a W3C First Public Working Draft.
    
*   Netlify has unveiled [Edge Functions](https://javascriptweekly.com/link/122680/web), a new serverless runtime powered by [Deno.](https://javascriptweekly.com/link/122681/web)
    

## **RELEASES:**

[Nuxt 3.0.0 RC1](https://javascriptweekly.com/link/122720/web) – Lots to see here for Vue 3 users.  
[Deno 1.21](https://javascriptweekly.com/link/122682/web)  
[React Redux 8.0](https://javascriptweekly.com/link/122683/web) – React bindings for Redux.  
[Neutralinojs 4.5.0](https://javascriptweekly.com/link/122684/web) – Lightweight x-platform desktop app framework.  
[fast-json-stringify 3.1.0](https://javascriptweekly.com/link/122685/web) – Even faster `JSON.stringify()`  
[Mineflayer 4.3](https://javascriptweekly.com/link/122686/web) – Minecraft bot dev framework.  
[Electron 18.1](https://javascriptweekly.com/link/122688/web)

## 📒 Articles & Tutorials

▶  [Ember's Road to TypeScript and More](https://javascriptweekly.com/link/122693/web "www.youtube.com") — A dapper looking Chris Krycho (who has equally smart looking slides) promises his talk is good even for non-Ember and non-TypeScript using developers as the work they’ve been doing affects us all.

Chris Krycho

[Seven Web Component Tricks](https://javascriptweekly.com/link/122694/web "daverupert.com") — A few things that may not be ‘super obvious’ about working with Web Components. Presented in a straightforward manner with code examples.

Dave Rupert

[Transform Your File Uploads with Filestack](https://javascriptweekly.com/link/122695/web "www.filestack.com") — Give users access to file upload sources like Instagram, Dropbox, & Google Drive with just two lines of code - our advanced APIs can then help with conversions, transformations, intelligence and more.

Filestack sponsor

[V8's Faster Initialization of Instances with New Class Features](https://javascriptweekly.com/link/122696/web "v8.dev") — A technical deep dive into some work on optimizing the performance of initializing class fields and private methods – work which now benefits all users of Node.js 18 onward.

Joyee Cheung (V8)

▶  [What Key Was Pressed? (You Won't Believe How Keyboard Events Work)](https://javascriptweekly.com/link/122697/web "www.youtube.com") — A half-hour video diving into the intricacies of keyboard events and the best ways to go about handling user input.

Jake Archibald & Ada Rose Cannon

[A Quick Guide to Mitosis: Why You Need It and How You Can Use It](https://javascriptweekly.com/link/122698/web "www.builder.io") — Forget cell division.. this [Mitosis](https://javascriptweekly.com/link/122699/web) gives you code division, essentially letting you write components once and then letting you use them in React, Vue, Solid, Angular, and elsewhere.

Alex Patterson

[Integrate eSignatures in Your App in Less Than a Week](https://javascriptweekly.com/link/122700/web "www.hellosign.com")

HelloSign, a Dropbox Company sponsor

[Reducing Spam From `mailto` Links](https://javascriptweekly.com/link/122701/web "jackchilds.tech") — Not necessarily the _best_ way, but an interesting approach.

Jack Childs

▶  [Are You Following This Vue Best Practice?](https://javascriptweekly.com/link/122702/web) — And it’s only two minutes.  
LearnVue

[Terminal Wordle: Write a Wordle Clone for the Terminal with React Ink](https://javascriptweekly.com/link/122703/web)  
John Ruble

[How to Create a Modern CRUD App with Ruby on Rails and React](https://javascriptweekly.com/link/122704/web)  
James Hibbard

[Four Reasons to Avoid using `npm link` (and an alternative)](https://javascriptweekly.com/link/122705/web)  
Hiroki Osame

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/fhsevvudfhochsp49lrs.jpg)](https://javascriptweekly.com/link/122706/web)

[Leaflet 1.8.0: Mobile-Friendly Interactive Map Library](https://javascriptweekly.com/link/122706/web "github.com") — A huge release for the long standing and hugely popular library. The [homepage](https://javascriptweekly.com/link/122707/web) has a live demo.

Leaflet

[Kaluma 1.0: A Tiny JS Runtime for the RP2040 (Raspberry Pi Pico)](https://javascriptweekly.com/link/122708/web "kalumajs.org") — The RP2040 is a tiny microcontroller built by the Raspberry Pi folks, so for JavaScript to work, it needs to be tiny too. Enter Kaluma which can run on devices with just 64KB of RAM.

Kaluma Project

[SpaceTime: A Lightweight Timezone Library](https://javascriptweekly.com/link/122709/web "spacetime.how") — Use this to calculate times in other timezones. Has a Moment-like API but is immutable. No dependencies. [GitHub repo](https://javascriptweekly.com/link/122710/web).

Spencer Kelly

[Speed Up Your Builds with Buildkite’s New Plan](https://javascriptweekly.com/link/122711/web "buildkite.com") — Set up CI/CD pipelines, frontend builds, ML training, Ops automation, security scanning, or IOT testing 📦

Buildkite sponsor

[PicMo: A Plain JavaScript Emoji Picker](https://javascriptweekly.com/link/122712/web "picmojs.com") — Gives you the option to use platform-native emojis or cross-platform ones via Twemoji, and you can even add your own custom emojis. [Try some demos here](https://javascriptweekly.com/link/122713/web).

picmo

[The Most Popular Node.js Frameworks in 2022](https://javascriptweekly.com/link/122714/web "stackdiary.com") — A listicle, but not a bad one at all, and summarizes 11 different frameworks of various types.

Alex Ivanovs

[HyperFormula 2.0.0: Spreadsheet-Like Calculation Engine](https://javascriptweekly.com/link/122715/web "handsontable.com") — HyperFormula ([GitHub repo](https://javascriptweekly.com/link/122716/web)) is a powerful Excel-inspired spreadsheet system (not just a control). Note that it’s open source but dual licensed.

HANDSONCODE sp. z o. o.

## 🤠 Other Cool Stuff

[Mess with DNS: A Playground to Learn About DNS Concepts](https://javascriptweekly.com/link/122717/web "messwithdns.net") — Not JavaScript specific, but DNS management is one of those skills I think it’s great for everyone to pick up.

Julia Evans

[Look Scanned: Make PDFs 'Look Scanned'](https://javascriptweekly.com/link/122718/web "lookscanned.io") — Sometimes there are organizations that need you to sign documents but aren’t happy with you doing it on PDFs digitally and want something that looks real and 'scanned in.' This purely front-end based, WebAssembly powered tool tries to fake that effect for you, and it’s [open source](https://javascriptweekly.com/link/122719/web) too.

seedgou

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/586)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/586)
> * 译者：
> * 校对者：
