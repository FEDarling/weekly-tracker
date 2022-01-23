---
title: 'JavaScript Weekly #399'
date: '2018-08-17'
categories: ["JavaScript Weekly"]
publish: true
---

A blast from the past this week as we take some time out to ask Dr. Axel Rauschmayer, a former editor of _JavaScript Weekly_, some questions on the release of his new book, _[JavaScript for Impatient Programmers](https://javascriptweekly.com/link/51522/web)_. You can find that further down in this issue :-)  
_— Peter Cooper, editor_
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/dgt2wojtjualvh9aiwvs.jpg)](https://javascriptweekly.com/link/51540/web)

[JavaScript Engine Fundamentals: Optimizing Prototypes](https://javascriptweekly.com/link/51540/web) — Having a deeper understanding of how JavaScript engines work can help you reason about the performance characteristics of your code and this diagram-rich post digs into engines optimize around JavaScript’s use of prototype-based inheritance.

▶  [Kyle Simpson says 'Keep Betting on JavaScript'](https://javascriptweekly.com/link/51541/web) — A look back at “how far we’ve come” to see what the path ahead may look like for JavaScript. Filmed at JSCamp Barcelona. [Associated slides here](https://javascriptweekly.com/link/51542/web).

[![](https://copm.s3.amazonaws.com/32fbb648.png)](https://javascriptweekly.com/link/51523/web)

[How to Choose the Best Framework for Mobile Development?](https://javascriptweekly.com/link/51523/web) — The mobile development landscape has changed and we've put together a list of modern options for you. This is a long term decision, you must choose wisely. Download our free ebook to learn more.

[16 JavaScript Data Visualization and Charting Libraries](https://javascriptweekly.com/link/51543/web) — A rather extensive summary and comparison of charting libraries, comparing key factors such as chart types, commercial vs free, and their open-source status.

[V8's Embedded Builtins and Reducing V8's Median Heap Size by 19%](https://javascriptweekly.com/link/51544/web) — The V8 JavaScript engine ships with an extensive library of built-in functions and a lot of work has gone into reducing the memory overhead these can represent.

[Creating a Chrome Extension in 2018: The Good, the Bad and the Meh](https://javascriptweekly.com/link/51545/web) — Talks through the development lifecycle of creating an extension and lists some of the architectural gotchas.

[Visual Studio Code's July 2018 Update](https://javascriptweekly.com/link/51546/web) — The most popular editor in the JavaScript world has added a variety of features, many of them JS-oriented, including [JSX tag completion](https://javascriptweekly.com/link/51547/web), a [‘add all missing imports’](https://javascriptweekly.com/link/51548/web) feature, and better JS/TS error reporting.

## 📘 Tutorials and Opinions

[10 Things You Will Eventually Learn About JavaScript Projects](https://javascriptweekly.com/link/51549/web) — A collection of common patterns that made working on even the most uncoordinated projects somehow manageable.

[Setting Up Constants via Proxies](https://javascriptweekly.com/link/51550/web)

[Build a Netflix Style Video Delivery Platform](https://javascriptweekly.com/link/51527/web) — SDKs for all platforms - Play videos at the same quality and speed as Netflix & YouTube.

[How Angular CLI Budgets Save My Day And How They Can Save Yours](https://javascriptweekly.com/link/51551/web) — Runs through what Angular application budgets are and what problems they can help surface.

[The Generic Sensor API](https://javascriptweekly.com/link/51552/web) — The [Generic Sensor API](https://javascriptweekly.com/link/51553/web) aims to provide a consistent JS API for client device sensors.

[Handling Authentication in Vue with Vuex](https://javascriptweekly.com/link/51554/web)


▶  [Web Performance For Third Party Scripts: Two Talks](https://javascriptweekly.com/link/51555/web) — Two talks to help you take into account the effect third party scripts may have on your site’s performance.

▶  [Next-Generation Frontend Testing with Cypress.io](https://javascriptweekly.com/link/51556/web)

[See Why Facebook, Spotify, & Sony Trust CircleCI with Their CI/CD](https://javascriptweekly.com/link/51528/web)

▶  [A Conversation with Ember Co-Creator Tom Dale on Ember 3.0 and Ember's Future](https://javascriptweekly.com/link/51557/web)

[A Proposal: Elixir-Style Modules in JavaScript](https://javascriptweekly.com/link/51558/web)

[Three Reasons to Use Vue.js in Your Next Web Project](https://javascriptweekly.com/link/51559/web)

---

![Dr. Axel Rauschmayer](https://res.cloudinary.com/cpress/image/upload/v1534501855/xm6jiym0dfvjwzh2t6hp.png)

💬 A Q&A with…  
Dr. Axel Rauschmayer  
JavaScript book author and trainer  
_Munich, Germany_

To celebrate the release of his new book, _[JavaScript for Impatient Programmers](https://javascriptweekly.com/link/51522/web)_, we've caught up with once-_JavaScript Weekly_ editor [Dr. Axel Rauschmayer](https://javascriptweekly.com/link/51529/web) to ask him a couple of questions:

What _is_ an 'impatient' programmer?

I’m assuming that readers of my latest book are 'impatient' in the sense that they want to get started with JavaScript as quickly as possible.

Most chapters are split into two parts. First, the basics, or what is the absolute minimum that you need to know? Then, more advanced stuff, or what should you know once you are more familiar with the language?

This is the only book, that I’m aware of, that covers _all_ of JavaScript, up to and including the very latest version (ES2018). That allowed me to omit old features that were superseded by better features in recent versions (but I do include references that explain the omitted features).

What recent JavaScript features do you think are underused and deserve more attention?

Three stand out for me:

*   In the category “boring, but important”, I count modules and classes, because they provide standardization where we previously had competing and incompatible approaches.
*   Built-in support for iteration is great, especially if combined with destructuring: `for (const [i, x] of arr.entries()) console.log(i, x);`
*   Asynchronous functions and asynchronous iteration make asynchronous programming much more pleasant. They are the culmination of a standardization process that started with Promises in ES6.

Dr. Axel Rauschmayer is the author of [JavaScript for Impatient Programmers](https://javascriptweekly.com/link/51522/web) — out now.

## 🔧 Code and Tools

[Tone.js: A Web Audio Framework for Making Interactive Music in the Browser](https://javascriptweekly.com/link/51560/web) — Lots of [examples here.](https://javascriptweekly.com/link/51561/web)

[SpaceTime: A Lightweight JavaScript Timezone Library](https://javascriptweekly.com/link/51562/web)

[Move Fast and Fix Stuff. Over 500K Developers Fix Errors with Sentry](https://javascriptweekly.com/link/51530/web) — Notify only the right person based on the commit and see unminified code in the stack trace with source maps.

[from-html: Get Element References Directly From a String of HTML](https://javascriptweekly.com/link/51563/web) — An interesting and straightforward way to create nested DOM elements.

[flowchart.js: Turn Textual Representation of Diagrams into Flow Charts](https://javascriptweekly.com/link/51564/web) — Want something similar for UML sequence diagrams? [Here you go.](https://javascriptweekly.com/link/51565/web)

## 📅 Some forthcoming JavaScript events

*   [JSCamp 2018 (Sep 22 in Chicago, IL)](https://javascriptweekly.com/link/51531/web) — A one day single track event.
*   [Framework Summit 2018 (Oct 2-3 in Park City, UT)](https://javascriptweekly.com/link/51532/web) — A new 2 day conference focused on all front end frameworks with keynotes from the teams of the most popular ones.
*   [JS Interactive (Oct 10-12 in Vancouver, Canada)](https://javascriptweekly.com/link/51533/web) — One of the largest JavaScript events. Organized by the Linux Foundation.
*   [JSMobileConf (Oct 25-26 in Boston, MA)](https://javascriptweekly.com/link/51534/web) — An impressive roster of speakers for this event with a focus on mobile and IoT.

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/link/51521/web)对比阅读
> * 发现错误？[提交 PR]()
> * 译者：
> * 校对者：