---
title: 'JavaScript Weekly #580' # 不可修改
date: '2022-03-12' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: true # 翻译完成后修改
---

🤦 Thanks to all readers who noticed we made a mistake with last week's subject line _"TypeScript 2.6 released"_ – rather than the intended **4.6**. We were only [4 years late](https://javascriptweekly.com/link/120875/web) with _that_ news ;-) Rest assured, more caffeine has been consumed today..

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/dtmnmyvkngvdz0oxkzgg.jpg)](https://javascriptweekly.com/link/120913/web)

[An ECMAScript Proposal for Type Annotations in JavaScript (That Are Ignored at Runtime)](https://javascriptweekly.com/link/120916/web "github.com") — A huge amount of chatter this week over an interesting proposal to support type annotations directly in standard JavaScript code that are available for external type checkers to use but which are otherwise ignored at runtime. TypeScript’s Daniel Rosenwasser has written [a lot more about the approach here](https://javascriptweekly.com/link/120913/web). Dr. Axel has also [written up his thoughts.](https://javascriptweekly.com/link/120917/web) Whatever the case, people seem pretty excited for the potential and Allen Wirfs-Brock has said [_"if I was still active on TC39 I’d be advocating for this proposal."_](https://javascriptweekly.com/link/120924/web)

[![](https://copm.s3.amazonaws.com/64147ecc.png)](https://javascriptweekly.com/link/120876/web)

[Wallaby.js: 15x Faster JavaScript/Jest Testing and Debugging](https://javascriptweekly.com/link/120876/web) — Wallaby runs your tests immediately as you type, with runtime values, errors and code coverage displayed in real-time right next to your code. Features have been designed specifically for testing, including: time-travel debugging, edit-and-continue support, and much more.

[React 18 Release Candidate Released](https://javascriptweekly.com/link/120877/web "reactjs.org") — The full production release of React 18 is seemingly imminent: just out, the detailed documentation covering the upgrade to this week’s release candidate. The post also includes useful information about some of the major new features.

🐦  [Twitter Thread on Stripe Converting from Flow to TypeScript](https://javascriptweekly.com/link/120919/web "twitter.com") — And it took just one weekend: _“We modified about 3.5 million lines of code, and then hundreds of developers came in Monday morning ready to write TS.”_

[WebGPU — All of the Cores, None of the Canvas](https://javascriptweekly.com/link/120920/web "surma.dev") — It’s always a pleasure to see Surma dig into something ([especially Web Workers](https://javascriptweekly.com/link/120921/web)) and this time he turns to making the potential of WebGPU (an API that exposes the capabilities of GPU hardware that, admittedly, isn't available by default in any standard browser yet) more accessible to us all.

## **IN BRIEF:**

*   Did you know that for legacy reasons [HTML-style comments work in JavaScript?](https://javascriptweekly.com/link/120878/web) (A quirk that adds some additional complexity [to V8's parser..](https://javascriptweekly.com/link/120879/web))
    
*   A fascinating Twitter thread diving straight down the rabbit hole of historic calendars and [why JS and Swift disagree on when January 1, 1 AD actually was](https://javascriptweekly.com/link/120880/web).
    
*   Chrome has made some [big leaps forward in browser performance](https://javascriptweekly.com/link/120881/web) in the past year and now claims to be faster than Safari.
    
*   The _Views on Vue_ podcast has an episode covering [▶️ the growth of the Vite ecosystem](https://javascriptweekly.com/link/120922/web).
    

## **RELEASES:**

[Partytown 0.5.0](https://javascriptweekly.com/link/120909/web) – Moves scripts into Web Workers for perf.  
[AVA 4.1.0](https://javascriptweekly.com/link/120882/web) – Node.js test runner.  
[Rollup.js 2.70.0](https://javascriptweekly.com/link/120883/web) – ES module bundler.  
[Node 17.7.0](https://javascriptweekly.com/link/120910/web) and [17.7.1](https://javascriptweekly.com/link/120911/web)  
[React Native DateTimePicker 6.0](https://javascriptweekly.com/link/120884/web)

## 📒 Articles & Tutorials

[Naming Conflicts – or How Existing Code Can Force Proposed Features to Be Renamed](https://javascriptweekly.com/link/120888/web "2ality.com") — Phil Karlton once said “_cache invalidation and naming things_” were the two hardest things in computer science, and JavaScript has had its fair share of trouble around the latter.

[A Lightweight GitHub REST API in 34 Lines of Code](https://javascriptweekly.com/link/120889/web "gist.github.com") — The power of ES proxies strikes again. Not a tutorial, but you might learn something from the code.

[Project Management for Today's (And Tomorrow's) Software Team](https://javascriptweekly.com/link/120890/web "shortcut.com") — We bring the flow to your software team's workflow. Plan, collaborate, build, and measure success with Shortcut.

[Building Serverless Multi-Region WebSocket APIs on AWS](https://javascriptweekly.com/link/120891/web "aws.amazon.com") — A look at an interesting (and very AWS-y!) architecture for a global real-time chat app by using WebSockets and cross-region communications behind the scenes.

[My Experience Building a Chess App in React](https://javascriptweekly.com/link/120892/web "dev.to") — The author describes himself as a self-taught, relative newcomer to React development. As a result, he describes his approach to this well-defined problem in terms that those at a similar point in the learning curve will find easy to understand.

[Creating Native Web Components](https://javascriptweekly.com/link/120893/web "tympanus.net") — Looks at how to create native web components using the [Minze](https://javascriptweekly.com/link/120894/web) JavaScript framework.

[The Tools that Developers Need–and Don't Need–to Build Great Chatbots](https://javascriptweekly.com/link/120912/web "bit.ly")

[How to Build a File Upload Service with Vanilla JavaScript](https://javascriptweekly.com/link/120896/web)  

[A Complete Guide to TypeScript’s `never` Type](https://javascriptweekly.com/link/120897/web)  

[Making a Discord Playlist Bot with Serverless Cloud](https://javascriptweekly.com/link/120898/web)  

## 🛠 Code & Tools

[LemonadeJS V2: A Reactive JavaScript Library with Zero Transpiling Needed](https://javascriptweekly.com/link/120899/web "lemonadejs.net") — Simple, straightforward reactivity anywhere with as little tooling surrounding it as possible.

[striff: Real Simple String Diffing](https://javascriptweekly.com/link/120900/web "github.com") — Given two strings, you can find out which characters were added or removed, and where.

[PSD: A Zero-Dependency PSD (Photoshop) Parser](https://javascriptweekly.com/link/120901/web "webtoon.github.io") — Will parse info for each layer including text and also supports Photoshop’s .PSB (big image) format. [GitHub repo](https://javascriptweekly.com/link/120902/web).

[Studio 3T Manages Your Data, While You Wrestle Your App into Shape](https://javascriptweekly.com/link/120903/web "studio3t.com") — Studio 3T's full suite of MongoDB tools lets you develop with data even faster and turn queries into code.

[Tygo: Generate TypeScript Types from Go(lang) Source Code](https://javascriptweekly.com/link/120904/web "github.com") — Let’s say you’re building an app with Go on the backend and TypeScript on the frontend. This tool scans your Go-based API and creates the relevant TypeScript types for you.

[Reason: Write Fast, Type Safe Code in OCaml, But for the JS Ecosystem](https://javascriptweekly.com/link/120905/web "reasonml.github.io") — You essentially get to write OCaml but compile to JavaScript.

[Ultra: A Modern Streaming React Framework for Deno](https://javascriptweekly.com/link/120906/web "ultrajs.dev") — Built around native browser features like ES modules, import maps, and web streams. [The source](https://javascriptweekly.com/link/120907/web) of the project’s own Ultra-powered homepage may help you weigh up if you like its cutting edge approach or not.

## 🎮 And for some fun..

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/vbjn6ttgbh34n14k2j4p.jpg)](https://javascriptweekly.com/link/120908/web)

[micropolisJS: A JavaScript Clone of a SimCity-Like Game](https://javascriptweekly.com/link/120908/web "www.graememcc.co.uk") — I didn’t get on to the SimCity train until SimCity 2000, but if you liked the vibe of the earlier 1989 version of SimCity, this might be a reasonable way to fritter away some time.

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/580)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/580)
> * 译者：
> * 校对者：
