---
title: 'JavaScript Weekly #577'
date: '2022-02-20'
categories: ['JavaScript Weekly']
publish: false
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/hkw7nagh4ohgjgfyu2uv.jpg)](https://javascriptweekly.com/link/120043/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[The State of JS 2021 Results](https://javascriptweekly.com/link/120043/web "2021.stateofjs.com") — Despite saying 2021, the survey took place this January, so the results are up to date and represent the answers given by the 16,085 respondents. As with any survey or poll, be careful in how you interpret the results ([many](https://javascriptweekly.com/link/120044/web) [folks](https://javascriptweekly.com/link/120045/web) [have](https://javascriptweekly.com/link/120046/web) [noted](https://javascriptweekly.com/link/120047/web) [problems](https://javascriptweekly.com/link/120048/web) around diversity or methodology) but nonetheless we always enjoy seeing the results from year to year and seeing what people have mentioned. Highlights:

*   [esbuild](https://javascriptweekly.com/link/120050/web) was the tool with the largest year on year satisfaction growth.
*   5.6% of respondents are [using Deno.](https://javascriptweekly.com/link/120051/web)
*   [Long standing libraries](https://javascriptweekly.com/link/120052/web) Axios, Lodash and Moment remain the most popular.
*   _Syntax_ is by far [the most popular podcast](https://javascriptweekly.com/link/120053/web) but there are 24 others in the list to check out.
*   TypeScript is by far the most common [alternative 'flavor' of JavaScript](https://javascriptweekly.com/link/120054/web), with Elm a distant second place.
*   Shawn 'swyx' Wang has a neat [round up / conclusion post.](https://javascriptweekly.com/link/120055/web)

[![](https://copm.s3.amazonaws.com/d3539cee.png)](https://javascriptweekly.com/link/120025/web)

[JavaScript Scratchpad for VS Code, Now with Code Stories](https://javascriptweekly.com/link/120025/web "quokkajs.com") — Quokka.js is the #1 tool for exploring and testing JavaScript. Code runs immediately as you type. The new [Code Story Viewer](https://javascriptweekly.com/link/119999/web) provides a unique and highly efficient way of inspecting runtime values to see what your code is doing in a single continuous view.

[Express.js 5.0 Now in Beta](https://javascriptweekly.com/link/120000/web "github.com") — Considering that the first _alpha_ of 5.0 was over _seven_ years ago, this is a big step for the still wildly popular and influential Node.js Web app library. There’s also [thorough docs of the 5.x API here.](https://javascriptweekly.com/link/120001/web) Requiring Node.js 4 or above is quite the step :-)

## **IN BRIEF:**

*   Microsoft's Angela Zhang writes about [how Microsoft has been improving React Native's ability to call Windows APIs](https://javascriptweekly.com/link/120026/web) and how it's already being used in part of Windows 11.
    
*   Version 100 of both Chrome and Firefox will soon be with us, so it's time to think about [if your code can cope and to test things out.](https://javascriptweekly.com/link/120002/web)
    
*   👾 Enjoyed the Wordle word game? [Jazle](https://javascriptweekly.com/link/120004/web) is Wordle but for JavaScript package/project names.
    
*   Joyent has [transferred the Node.js trademarks](https://javascriptweekly.com/link/120027/web) to the OpenJS Foundation.
    
*   Google has unveiled [the next version of its _Cloud Functions_ serverless platform](https://javascriptweekly.com/link/120028/web) with longer function running times, bigger instances, and more.
    
*   [ESLint 8.9.0 has landed](https://javascriptweekly.com/link/120003/web) with a new `es2022` environment added.
    

## **RELEASES:**

[Next.js 12.1](https://javascriptweekly.com/link/120056/web)  
[TypeScript 4.6 Release Candidate 1](https://javascriptweekly.com/link/120005/web)  
[Remix 1.2](https://javascriptweekly.com/link/120029/web) – The freshest full-stack JS framework in town.  
[zx 5.1](https://javascriptweekly.com/link/120006/web) – Better shell scripting with JS.  
[Strapi 4.1.0](https://javascriptweekly.com/link/120007/web) – Headless Node.js CMS system.  
[Cypress 9.5.0](https://javascriptweekly.com/link/120030/web) – Popular testing system.

## 📒 Articles & Tutorials

[How to Track Down Code Responsible for Polluting the Global Scope](https://javascriptweekly.com/link/120012/web "mmazzarolo.com") — You might not want code adding global variables to the `window` object, and it’s possible to work out where things are going wrong when it does.

[The Basics of `package.json`](https://javascriptweekly.com/link/120013/web "nodesource.com") — Most likely you’ve been working with `package.json` files for years, but it can pay to refamiliarize yourself with their many properties.

[A Deep Dive into React Native’s New Architecture](https://javascriptweekly.com/link/120032/web "medium.com") — A new architecture for React Native is being rolled out in 2022, as described in [this post](https://javascriptweekly.com/link/120033/web) from the React Native team. Here are some independent observations.

[100+ Fully Native Components for High-Quality Modern Angular UI](https://javascriptweekly.com/link/120014/web "ad.doubleclick.net") — Get every component you need to build an enterprise-ready app. Kendo UI for Angular can cover any UI requirements your team may have — with themes, documentation and more.

🏆  [JavaScript to Know for React](https://javascriptweekly.com/link/120034/web "kentcdodds.com") — A golden oldie we’ve seen doing the rounds again this week. It remains a perfect primer of several key JS features though with examples of features that will help you with React development in particular.

[Monorepos Explained](https://javascriptweekly.com/link/120035/web "monorepo.tools") — A new site that rounds up pretty much anything you need to know about monorepos, and the tools to build them.

[Mimicking Rust's `Result` Type in 7 Lines of TypeScript](https://javascriptweekly.com/link/120015/web)  

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/f5lvp6umcum22r30uxvb.jpg)](https://javascriptweekly.com/link/120016/web)

[v8n 1.4: A 'Fluent Validation' Library](https://javascriptweekly.com/link/120016/web "github.com") — Chain together rules to make validations, e.g. `v8n().some.not.uppercase().test("Hello");`

[Neat Example of Using a JS Proxy as a Low Code REST Client](https://javascriptweekly.com/link/120036/web "gist.github.com") — If you’ve never fiddled with [Proxy](https://javascriptweekly.com/link/120037/web) before, this might sell you on a use case.

[Project Management for Software Teams Has Never Been Easier](https://javascriptweekly.com/link/120017/web "shortcut.com") — Shortcut is fast and intuitive project management built for developers. Delight the scrum gods and try it now.

[TypeIt: A Versatile 'Typewriter Effect'](https://javascriptweekly.com/link/120038/web "github.com") — If you need an effect to look like someone is ‘typing’ on a Web page, this is for you. Alternatively you could [create your own from scratch](https://javascriptweekly.com/link/120039/web) or, if you’re using React, consider [Windups.](https://javascriptweekly.com/link/120040/web)

[Marked 4: A Fast Markdown Parser and Compiler](https://javascriptweekly.com/link/120018/web "github.com") — Works in the browser or server-side. [Demo here](https://javascriptweekly.com/link/120019/web) to see it in action.

[Minze: A JavaScript Framework for Native Web Components](https://javascriptweekly.com/link/120020/web "minze.dev") — Based on the latest web component standards and it allows you to build portable component libraries that you can use on any project.

[![](https://res.cloudinary.com/cpress/image/upload/w_200,h_200/lexrqzyprf1cymh90iwa.png)](https://javascriptweekly.com/link/120022/web)

[Heart Switch: A Heart-Shaped Toggle Switch Component for React](https://javascriptweekly.com/link/120022/web "github.com") — Built with accessibility in mind and a late Valentine’s Day gift for you all, perhaps. You can [test it out here.](https://javascriptweekly.com/link/120023/web)

[Stream Is Hiring in Boulder, Amsterdam and Remote. Join the Team, Today](https://javascriptweekly.com/link/120021/web "grnh.se")

[discord-styled-releases: A GitHub Action That Sends Release Messages to Your Discord Server](https://javascriptweekly.com/link/120024/web)  

## 😍 Well, that's useful!

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/gmcrcdhpeh7yn8ngmref.jpg)](https://javascriptweekly.com/link/120041/web)

GitHub has added a handy feature to its custom variant of Markdown so that you can [write diagrams directly in Markdown](https://javascriptweekly.com/link/120041/web) using the same format as [Mermaid.js](https://javascriptweekly.com/link/120042/web). This is a fantastic way to make your README files more interesting if you have processes that can be outlined by way of a diagram – so check it out.

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/577)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/577)
> * 译者：
> * 校对者：
