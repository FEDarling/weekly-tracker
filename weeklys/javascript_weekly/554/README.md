---
title: 'JavaScript Weekly #554'
date: '2021-09-03'
categories: ["JavaScript Weekly"]
publish: true
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/chakx4rmc7iv0d3wob8d.jpg)](https://javascriptweekly.com/link/113306/web)
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
[Visual Studio Code August 2021 Released](https://javascriptweekly.com/link/113306/web "code.visualstudio.com") — It always feels odd linking to these as they name releases for the _prior_ month, but new features include automatic language detection, built-in bracket colorization (enabled via `editor.bracketPairColorization.enabled`), improved terminal glyph rendering, inline hints for JS/TS param names and types, and improved debug stepping in async functions and Node.js internals.

[A Look at an ES2022 Feature: Class Static Initialization Blocks](https://javascriptweekly.com/link/113307/web "2ality.com") — You might not be blamed for [thinking JavaScript is going a bit Java-y](https://javascriptweekly.com/link/113308/web) here but, nonetheless, this proposal is at stage 4 and scheduled to be included in ES2022.

[ES2022 特性：类静态初始化块](./es2022_feature_class_static_initialization_blocks.md) — 这个提议处于包含在 ES2022 的第 4 阶段，看起来也不觉得 JavaScript 的这种写法偏向于 Java。

💡 Like this ↑? Hemanth HM has a [roundup of updates from TC39's 85th meeting](https://javascriptweekly.com/link/113309/web) on more future (potential) JavaScript features, including the [hack pipe operator](https://javascriptweekly.com/link/113310/web) and [`Array.fromSync`](https://javascriptweekly.com/link/113311/web).

[![](https://copm.s3.amazonaws.com/d99a6231.png)](https://javascriptweekly.com/link/113286/web)

[Search Across the Open Source Universe with Sourcegraph](https://javascriptweekly.com/link/113286/web "sourcegraph.com") — Sourcegraph searches over 1 million open source repos from GitHub & GitLab along with your own public & private (public beta) repos. No installation required. Sourcegraph makes it easier to search, discover & understand open source projects. Start searching now.

[Electron 14.0.0 Released](https://javascriptweekly.com/link/113312/web "www.electronjs.org") — The latest major version of the popular cross-platform desktop app framework is here. It’s moving to an eight week stable release schedule, so Electron 15 is due in just three weeks.. but for now you get Chromium 93, Node.js 14.17, and V8 9.3 support, experimental cookie encryption support, and a few _removals_ (such as [the `remote` module](https://javascriptweekly.com/link/113313/web)).

[Neutralino 2.7: Portable, Lightweight Desktop App Framework](https://javascriptweekly.com/link/113314/web "neutralino.js.org") — Think Electron (above) but rather than _including_ a Chromium distribution with every app, it uses the local platform’s built-in ‘webview.’ This equals (much) smaller, faster apps, though you then have to be aware of each webview’s different quirks.

## **QUICK BITS:**

*   Node.js branches v12 and v14 have [received new releases](https://javascriptweekly.com/link/113315/web) to fix some path and symlink related vulnerabilities. Node v16 is fine.
    
*   A collection of [interactive learning tools](https://javascriptweekly.com/link/113316/web) for front-end dev concepts.
    
*   [An explanation of Twitter's '`div` soup' and 'uglified' CSS](https://javascriptweekly.com/link/113317/web) and how _React Native for Web_ is used.
    
*   A developer has created a proof-of-concept [anti debugging technique](https://javascriptweekly.com/link/113318/web) where JS code can detect that it's being debugged and change the flow of execution, if it so wished.
    
## **RELEASES:**

[socket.io 4.2.0](https://javascriptweekly.com/link/113287/web) – Realtime comms library.  
[Relay 12.0](https://javascriptweekly.com/link/113288/web) – Data-driven React app framework.  
[OpenPGP.js 5.0.0](https://javascriptweekly.com/link/113289/web) – OpenPGP implementation in JS.  
[on-change 4.0](https://javascriptweekly.com/link/113290/web) – Watch objects and arrays for changes.  
[AdonisJS August Release](https://javascriptweekly.com/link/113319/web) – Full-featured Node.js web app framework.

## 📖 Tutorials, Opinions & Stories

['I Built A $300K/Year Vue.js Component Library'](https://javascriptweekly.com/link/113320/web "www.starterstory.com") — Not much technical stuff here, but an interesting (and possibly inspiring!) interview with the creator of [Vuetify](https://javascriptweekly.com/link/113321/web), a Vue.js UI library, on how he’s made the project sustainable and a good source of income.

[Working with Tree Data Structures](https://javascriptweekly.com/link/113322/web "stackfull.dev") — The basics of traversal: both breadth first and depth first. Complete with visuals to help you get the ideas more quickly.

[Building a Serverless GIF Generator with AWS Lambda](https://javascriptweekly.com/link/113323/web "aws.amazon.com") — Let’s say you host videos and want to show GIF animations as a sort of preview feature in the UI. Generating such GIF files from videos is a compute-intensive operation but you can use something like AWS Lambda to create a scalable service to handle it for you.

[Build a React Chat Application](https://javascriptweekly.com/link/113294/web "getstream.io") — In a few simple steps we’ll show you how to launch a chat app using our React component library.

[Common `npm` Mistakes Every Developer Should Avoid](https://javascriptweekly.com/link/113324/web "blog.bitsrc.io") — Learn how to avoid common mistakes when managing dependencies, publishing packages, and more.

[State Management in Svelte Apps](https://javascriptweekly.com/link/113325/web "auth0.com") — A tutorial on how to use the Svelte state management store to manage state in Svelte applications.

[Why Electron Apps Are Fine](https://javascriptweekly.com/link/113326/web "nielsleenheer.com") — While Niels agrees with many common criticisms of Electron, his users don’t care, and he says you shouldn’t care either.

[State Management in Next.js Apps](https://javascriptweekly.com/link/113327/web "www.smashingmagazine.com") — Managing state in a Next.js application can get tricky very quickly. This looks at some patterns to help avoid complexity in common scenarios and avoid “provider hell.”

[A Guide to React Context and the `useContext()` Hook](https://javascriptweekly.com/link/113328/web)  

[Memoizing Async Functions in JavaScript](https://javascriptweekly.com/link/113329/web)  

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/eaddyuhb98c2dzo607ou.jpg)](https://javascriptweekly.com/link/113330/web)

[TypeIt: A Versatile Pretend-Typing Effect Utility](https://javascriptweekly.com/link/113330/web "typeitjs.com") — Bills itself as _‘the most versatile JavaScript typewriter utility on the planet’_. Has a very nice fluent API, but note while it’s free for personal/OSS use, you need to pay (a modest amount) for a commercial license.

[Stitches 1.0: The Modern Styling Library](https://javascriptweekly.com/link/113331/web "stitches.dev") — Another CSS-in-JS solution, this one offering high performance, SSR, theming, critical path CSS, an intuitive API, and lots more.

[Run Faster and Safer Than Linux with Open Source Unikernels](https://javascriptweekly.com/link/113296/web) — Deploy with no ops and no cloud lock-in. Run 2X as fast on Google. Run 3X as fast on AWS and deploy in 10s of seconds.

[smartcrop.js: Content Aware Image Cropping](https://javascriptweekly.com/link/113332/web "github.com") — Given an image, this can help find the ‘best’ part of the image to crop down to. Works in the browser _and_ in Node.

[Roadroller: A Heavyweight 'Crusher' for JavaScript Code](https://javascriptweekly.com/link/113333/web "lifthrasiir.github.io") — Aimed more at demo-style coding than production apps, the goal of this tool is to crush/minify down JavaScript code to as small a size as possible. [GitHub repo](https://javascriptweekly.com/link/113334/web).

[Crank.js: Write JSX-Driven Components with Functions, Promises and Generators](https://javascriptweekly.com/link/113335/web "crank.js.org") — The usual JSX syntax you know and love for writing HTML-like code directly in JavaScript but all components are just functions or generator functions. See some [example code](https://javascriptweekly.com/link/113336/web).

[Announcing JavaScript Security Sessions at SnykCon | Register for Free](https://javascriptweekly.com/link/113295/web "snyk.io")

[parse-domain: Split Hostnames Into Parts](https://javascriptweekly.com/link/113337/web "github.com") — Given a hostname, pull out the subdomains, domain, and top-level domains, including ‘effective’ top-level domains as on the [public suffix list](https://javascriptweekly.com/link/113338/web).

[Mafs: React Components for Math Visualization](https://javascriptweekly.com/link/113339/web "mafs.dev") — A well thought out set of sophisticated mathematics visualizations. It is supported with a nicely executed just-what-you-need-to-know [set of guides](https://javascriptweekly.com/link/113340/web) including one which will allow you to plan your own [suborbital spaceflight](https://javascriptweekly.com/link/113341/web).

[bundle: A Quick npm Package Size Checker](https://javascriptweekly.com/link/113342/web "bundle.js.org") — Enter a package name, then hit the “run” button and this tool will give you the minified, bundled, and gzipped size of the package.
---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/link/113285/web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/554/README.md)
> * 译者：
> * 校对者：