---
title: 'JavaScript Weekly #601' # 不可修改
date: '2022-08-18' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

#​601 — August 5, 2022

[Unsubscribe](https://javascriptweekly.com/link/127294/web)  |  [Read on the Web](https://javascriptweekly.com/link/127295/web)

JavaScript Weekly

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/glelkm75qu8jwap5jmnl.jpg)](https://javascriptweekly.com/link/127345/web)

[JS1024 2022 Competition Winners](https://javascriptweekly.com/link/127345/web "js1024.fun") — JS1024 is a ‘code golfing’ contest where you get 15 days to create a JavaScript or GLSL program within 1024 bytes. This results in lots of creative ideas, complete with fantastic (non-minified) source to check out. The winning JS entry is [this quirky typing game](https://javascriptweekly.com/link/127346/web) and the winning shader-based entry is [a 3D tunnel experience.](https://javascriptweekly.com/link/127347/web) There’s much to learn here as these folks have used every trick in the book, including **compressing 1900+ English words in [a heavily commented entry that uses](https://javascriptweekly.com/link/127348/web) Brotli and a specially crafted WOFF2 font file(!)**

JS1024

[Docusaurus 2.0 Released](https://javascriptweekly.com/link/127349/web "docusaurus.io") — Docusaurus powered sites are everywhere in the JS space (e.g. [the Babel docs](https://javascriptweekly.com/link/127350/web)) and after four years of effort, [version 2.0](https://javascriptweekly.com/link/127351/web) of the popular React-powered documentation-focused static site generator is here. Rebuilt from scratch, it adds [MDX](https://javascriptweekly.com/link/127352/web) support, a new plugin system, theming, dark mode, SPA navigation, offline support, and more.

Meta (Facebook)

[![](https://copm.s3.amazonaws.com/3e86d376.jpg)](https://javascriptweekly.com/link/127296/web)

[Announcing EdgeDB 2.0](https://javascriptweekly.com/link/127296/web "www.edgedb.com") — Try the database that makes ORMs obsolete. EdgeDB’s TypeScript client has the simplicity of an ORM but the power of a full-fledged query language. And with the release of EdgeDB 2.0 it’s better than ever—read the announcement for details.

EdgeDB sponsor

[Electron 20: The Cross Platform Desktop App Framework](https://javascriptweekly.com/link/127305/web "www.electronjs.org") — 20 sounds like a big, round release number but it’s mostly a typical release. Chromium is bumped up to v104, V8 to 10.4, and Node to 16.15.0. Windows gains an ‘immersive dark mode’ and Electron windows can now [‘float’ over full-screen apps panel-style](https://javascriptweekly.com/link/127306/web).

Charles Kerr

**IN BRIEF:**

*   🔎 [`npm query` is a new command](https://javascriptweekly.com/link/127337/web) in the latest version of `npm` to query a project's dependencies using a CSS-like selector string.
    
*   Remember the guy who built JavaScript games using Microsoft Excel and PowerPoint as a canvas? He's back building [▶️ a multiplayer game in Word](https://javascriptweekly.com/link/127298/web). Just 3 minutes and much fun.
    
*   There's [a new VS Code release](https://javascriptweekly.com/link/127338/web) and while the [JS debugging features](https://javascriptweekly.com/link/127339/web) see improvements, [▶️ this 'sticky scrolling' feature](https://javascriptweekly.com/link/127340/web) is particularly neat as it keeps your function signatures on screen even during long functions.
    
*   If you use AWS's _Lambda_ serverless platform for running your functions and you use it _a lot_, their [new tiered pricing structure](https://javascriptweekly.com/link/127297/web) may yield some big savings.
    

**RELEASES:**

[Parcel 2.7](https://javascriptweekly.com/link/127341/web)  
[Ember 4.6](https://javascriptweekly.com/link/127356/web)  
[Ionic 6.2](https://javascriptweekly.com/link/127336/web) – Cross-platform app building toolkit.  
[Redwood 2.2](https://javascriptweekly.com/link/127299/web) – React-backed full-stack framework.  
[Cypress 10.4](https://javascriptweekly.com/link/127321/web) – Popular testing approach for anything browser-based.  
[Ohm 16.4](https://javascriptweekly.com/link/127322/web) – Parser / interpreter building toolkit.

📒 Articles & Tutorials

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/shpvbpmdj9y1lx5y28dg.jpg)](https://javascriptweekly.com/link/127300/web)

[Checking if Native JavaScript Functions are 'Monkey Patched'](https://javascriptweekly.com/link/127300/web "mmazzarolo.com") — Along with JavaScript’s dynamism comes the potential for functions to be overridden (or ‘monkey patched’, as some people call the idea of runtime modifications) but there are (imperfect) ways to see if this has occurred.

Matteo Mazzarolo

[On Building Modern Webapps Faster with Bud](https://javascriptweekly.com/link/127324/web "goingwithgo.com") — [Bud](https://javascriptweekly.com/link/127325/web) (no, not _Bun_) is a relatively new Go(lang) and JavaScript powered full-stack web framework with a lot of good ideas – [▶️ this 15-minute video](https://javascriptweekly.com/link/127326/web) on creating a Hacker News clone with it is a fun demo. If Go works for you on the backend, it's worth a look.

Preslav Rachev

[Level-Up Your Cypress Testing Knowledge for Free](https://javascriptweekly.com/link/127301/web "learn.cypress.io") — Learn from top industry experts with over 25 lessons on how to get started with Cypress.

Cypress.io sponsor

[From 500ms to 1.7ms in React](https://javascriptweekly.com/link/127302/web "orizens.com") — A sluggish customized grid triggered a journey to analyze some bottlenecks, followed by some tweaks resulting in a dramatic perf improvement.

Oren Farhi

[Parsing Command Line Arguments with `util.parseArgs()` in Node.js](https://javascriptweekly.com/link/127343/web "2ality.com") — A feature added in Node 18.3, just this year.

Dr. Axel Rauschmayer

[Use Jest to Replace Default Test Runners in an Angular Project](https://javascriptweekly.com/link/127304/web)  
Rob Bell

🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/zis2oetjn4a5ch0daajf.jpg)](https://javascriptweekly.com/link/127353/web)

[vue-grid-layout: Draggable and Resizable Grid Layout for Vue.js](https://javascriptweekly.com/link/127353/web "jbaysolutions.github.io") — Like [Gridster.js](https://javascriptweekly.com/link/127354/web) (from the jQuery days!) , but for Vue.js. There’s a demo right on the homepage. [GitHub repo.](https://javascriptweekly.com/link/127355/web)

JBay Solutions

[safe-json-value: For When JSON Serialization Mustn't Fail](https://javascriptweekly.com/link/127307/web "github.com") — Prevents `JSON.serialize()` from throwing an exeception, changing types, or otherwise transforming values unexpectedly, because sometimes you need that sort of reassurance.

ehmicky

[Quokka.js Is the #1 JavaScript / TypeScript Scratchpad for VS Code](https://javascriptweekly.com/link/127308/web "quokkajs.com") — Ideal for exploring and testing JavaScript. Code runs immediately as you type with feedback right next to your code.

Wallaby.js sponsor

[colorgrad: High-Perf, Rust-Powered Color Gradient Library](https://javascriptweekly.com/link/127309/web "github.com") — Uses Rust compiled to WebAssembly behind the scenes – very modern! It’s also a nice small codebase with which to learn the technique if you want to try it too. [Live demo](https://javascriptweekly.com/link/127310/web).

Nor Khasyatillah

[Embla Carousel 7: Carousel with Fluid Motion and 'Swipe Precision'](https://javascriptweekly.com/link/127311/web "www.embla-carousel.com") — A much maligned UI element, but the [examples](https://javascriptweekly.com/link/127312/web) worked pretty well for us. Library agnostic but has easy integrations for React, Vue, and Svelte, if you need them.

David Jerleke

[Nativefier: Make Any Web Page a Desktop App](https://javascriptweekly.com/link/127313/web "github.com") — A basic Node.js-powered tool for creating a desktop ‘app’ for any Web site using Electron as the webview. For Windows, macOS and Linux.

Goh Jia Hao

[ts-version: Access the Current TypeScript Version from Types](https://javascriptweekly.com/link/127314/web "www.npmjs.com") — The creator puts it best: _“Frustrated how TS versions handle your package slightly differently, but don’t want to ship a full copy of your types with TypesVersions? Now you can adjust your types depending on the TS version!”_

Lenz Weber-Tronic

[Integrate eSignatures in Your App in Less Than a Week](https://javascriptweekly.com/link/127303/web "www.hellosign.com")

HelloSign, a Dropbox Company sponsor

[PowerGlitch: A Tiny Library to 'Glitch' Images on the Web](https://javascriptweekly.com/link/127315/web)  
PowerHat

**OTHER QUICK RELEASES:**

[React Native Boilerplate 3.5](https://javascriptweekly.com/link/127316/web) – A starter template for RN apps.  
[Stripe Node 10.0](https://javascriptweekly.com/link/127317/web) – Node.js library for Stripe's API.  
[Electron Store 8.1](https://javascriptweekly.com/link/127327/web) – Simple data persistence for Electron apps.  
[Meriyah 4.3](https://javascriptweekly.com/link/127328/web) – Compliant, self-hosted JS parser. ([Demo](https://javascriptweekly.com/link/127329/web))  
[React Spreadsheet Grid 2.3](https://javascriptweekly.com/link/127330/web) – Excel-like grid component for React.  
[Inferno 8.0.2](https://javascriptweekly.com/link/127331/web) – Fast, React-like library.  
[∿ Peaks.js 2.0.3](https://javascriptweekly.com/link/127332/web) – BBC's audio waveform UI component.

💻 Jobs

[Senior JavaScript Developer (Warsaw or Remote) 🇵🇱 🇺🇦](https://javascriptweekly.com/link/127319/web) — Open Source rich text editor used by millions of users around the world. Strong focus on code quality. Join the CKEditor team.  
CKEditor

[Find JavaScript Jobs with Hired](https://javascriptweekly.com/link/127320/web) — Create a profile on Hired to connect with hiring managers at growing startups and Fortune 500 companies. It's free for job-seekers.  
Hired

❓ **Did you know..**

*   There's a useful curated [list of over 150 static site generators](https://javascriptweekly.com/link/127333/web) and related resources? If you want to cast a wider net and stretch the SSG definition a little, [here are hundreds more.](https://javascriptweekly.com/link/127334/web)
    
*   On macOS, if you hold down Option (⌥) when resizing a window, it resizes from all directions at once? Handy for those windows that wander off screen.
    
*   🐶 Rewarding a dog for rescuing people in danger can have [unintended negative consequences?](https://javascriptweekly.com/link/127335/web)

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/601)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/601)
> * 译者：
> * 校对者：
