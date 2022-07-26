---
title: 'JavaScript Weekly #599' # 不可修改
date: '2022-07-26' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

#​599 — July 22, 2022

[Unsubscribe](https://javascriptweekly.com/link/126671/web)  |  [Read on the Web](https://javascriptweekly.com/link/126672/web)

JavaScript Weekly

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/t4kfyaz9aeh5izpuwgru.jpg)](https://javascriptweekly.com/link/126673/web)

[RedwoodJS vs. Blitz.js: The Future of Fullstack Meta-Frameworks](https://javascriptweekly.com/link/126673/web "blog.risingstack.com") — Quite a lengthy review of both frameworks. Redwood is an opinionated React-based framework oriented heavily round the idea of a GraphQL server as the ‘one API’ at the heart of an app. Blitz, on the other hand, is a Ruby on Rails-inspired layer on top of Next.js with SPA, server side rendering _and_ static site generation chops. Don't forget [Remix](https://javascriptweekly.com/link/126717/web) too.. this is a busy space!

Tamas Kadlecsik

[Ten Common JavaScript Issues Developers Face](https://javascriptweekly.com/link/126681/web "www.toptal.com") — If you’ve been working with JavaScript for many years (perhaps since 2014 when this newly-updated article was _first_ penned), these are potholes you (probably) already know how to steer around, but there’s plenty to chew on here otherwise.

Ryan J. Peterson

[![](https://copm.s3.amazonaws.com/20dc038e.jpg)](https://javascriptweekly.com/link/126674/web)

[CSS Animations and Transitions](https://javascriptweekly.com/link/126674/web "frontendmasters.com") — Join David Khourshid on this detailed video course and discover how to bring your interfaces to life with UI animations. Learn about CSS transitions, keyframes, custom properties, choreography, animation states, and much more

Frontend Masters sponsor

[Reducing the Size of a Large JavaScript SDK Package by 29%](https://javascriptweekly.com/link/126675/web "blog.sentry.io") — After some comments on how large their JavaScript package was getting, developers at Sentry (an app monitoring service) set to work trying to get an initial 30% reduction. Tree shaking turned out to have the biggest effect.

Abhijeet Prasad (Sentry)

[Payload 1.0: A Headless CMS Platform Built on Node](https://javascriptweekly.com/link/126676/web "payloadcms.com") — An exciting project that appeared in early 2021 [with a bang](https://javascriptweekly.com/link/126677/web) then [became open source](https://javascriptweekly.com/link/126678/web) just a couple of months ago. There’s a lot to like about Payload if you need a headless CMS including a customizable React-based admin system, GraphQL _or_ REST APIs, flexible auth and file upload systems, and it’s easy to [get started](https://javascriptweekly.com/link/126679/web). [GitHub repo](https://javascriptweekly.com/link/126680/web).

Payload CMS

**IN BRIEF:**

*   **UPDATE / ERROR:** Last week we linked to [a comparison of Bun and Node.js's performance](https://javascriptweekly.com/link/126718/web) but, as is often the case with benchmarks, [there was a flaw:](https://javascriptweekly.com/link/126719/web) Node.js was being run in both cases! 😬 We await further results. _Thanks to Craig Doremus for letting us know._
    
*   Hemanth HM presents a [quick update from the 91st TC39 meeting](https://javascriptweekly.com/link/126730/web) where several language proposals were advanced.
    
*   _Hermes_ is a JS engine built by Facebook primarily for use in _React Native_ and, curiously, it was possible to misuse its quicksort implementation [to run the classic FPS _DOOM_](https://javascriptweekly.com/link/126682/web) – a bug resulting in a $12k bounty payout.
    
*   📊 [A data-driven attempt to compare](https://javascriptweekly.com/link/126683/web) the popularity of React, Angular, Angular.js, Vue and Svelte. Spoiler: React sits on top.
    

**RELEASES:**

[NeutralinoJS 4.7.0](https://javascriptweekly.com/link/126731/web) – Lightweight cross platform apps with JS & HTML.  
[npm-check 6.0](https://javascriptweekly.com/link/126685/web) – Check for outdated or unused dependencies.  
[Fastify 4.3](https://javascriptweekly.com/link/126686/web) – Fast Node.js web framework.  
[ESLint 8.20](https://javascriptweekly.com/link/126684/web)  
[Angular 14.1](https://javascriptweekly.com/link/126687/web)  
[Vue 2.7.8](https://javascriptweekly.com/link/126688/web)  
.. and more releases at end of this issue.

📒 Articles & Tutorials

[Thoughts on Integer Math in JavaScript](https://javascriptweekly.com/link/126690/web "james.darpinian.com") — No concrete examples here but if fast integer math is something you need, you could do worse than to build upon James’ thinking (to which he hopes to write a more complete follow-up).

James Darpinian

[JavaScript Obfuscation Techniques by Example](https://javascriptweekly.com/link/126692/web "www.trickster.dev") — The [Hacker News discussion](https://javascriptweekly.com/link/126693/web) around this article was, perhaps, even more interesting, I thought.

Trickster Dev

[10 npm Security Best Practices](https://javascriptweekly.com/link/126691/web "snyk.io")

Snyk.io sponsor

[JavaScript AST Manipulation with Babel: The First Steps](https://javascriptweekly.com/link/126694/web "www.trickster.dev") — From the same author as the item on obfuscation (above) comes a look at the basics of using Babel to turn obfuscated code into a syntax tree and then back into more readable JavaScript.

Trickster Dev

▶  [An Introduction to SvelteKit in 80 Minutes](https://javascriptweekly.com/link/126695/web "www.youtube.com") — [Svelte](https://javascriptweekly.com/link/126696/web) is an increasingly popular way to build reactive frontend apps and [Svelte_Kit_](https://javascriptweekly.com/link/126697/web) provides a framework and more complete development experience around Svelte. Nacho gives us a tour.

Nacho Falk

▶  [Blazingly Fast 'React' with Fresh](https://javascriptweekly.com/link/126698/web "www.youtube.com") — One of the most popular React YouTubers out there heads Deno-side to look at [Fresh](https://javascriptweekly.com/link/126699/web), a new islands-based web framework that doesn’t use React _per se_ but.. close enough, with Preact and JSX for rendering and templating.

Jack Herrington

[2022 State of the Java Ecosystem Report](https://javascriptweekly.com/link/126700/web "newrelic.com") — New Relic’s report is based on data gathered from millions of applications providing performance data.

New Relic sponsor

[Converting Cypress E2E Specs from JavaScript to TypeScript](https://javascriptweekly.com/link/126701/web) — More to it than you might expect.  
Gleb Bahmutov

🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/cojxryukbkv3szwnvwja.jpg)](https://javascriptweekly.com/link/126721/web)

[Tweakpane 3.1: Compact UI Element for Tweaking Parameters and Viewing Value Changes](https://javascriptweekly.com/link/126721/web "cocopon.github.io") — This is the sort of thing you see in _creative coding_ demos quite often, but could be used almost anywhere. You can create your own mini pane of basic UI controls to dynamically adjust (or just reflect) values relating to something going on on the page. It’s simple and looks great, and if you want a demo, then…

cocopon

[Fireworks.js 2.0: It's Literally Fireworks for Your Web Page](https://javascriptweekly.com/link/126722/web "fireworks.js.org") — Well, literally in a _visual_ sense at least ;-) The homepage is a neat demo given you can dynamically play around with all of the library’s parameters (courtesy of [Tweakpane](https://javascriptweekly.com/link/126721/web), mentioned above!)

Vitalij Ryndin

[Breakpoints and `console.log` Is the Past, Time Travel Is the Future](https://javascriptweekly.com/link/126705/web "wallabyjs.com") — 15x faster JavaScript debugging than with breakpoints and console.log, now with support for Vitest.

Wallaby.js sponsor

[Superstate: A New 'Micro' State Management Library](https://javascriptweekly.com/link/126702/web "superstate.dev") — So micro, even, that the [getting started](https://javascriptweekly.com/link/126703/web) tutorial takes all of 30 seconds to read. [GitHub repo](https://javascriptweekly.com/link/126704/web).

Guilherme Oderdenge

[TanStack Table v8: Headless UI for Building Tables and Datagrids](https://javascriptweekly.com/link/126706/web "tanstack.com") — Want the hard work of managing a table or data grid element taken care of _but_ want to keep 100% control over markup and styles? This is what you need (if the idea of a ‘headless UI’ is new to you, [read this intro](https://javascriptweekly.com/link/126707/web)). Vanilla JS, React, Vue, Solid and Svelte developers are all taken care of.

Tanner Linsley

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/k0p8ezfzsdgj1luvadba.jpg)](https://javascriptweekly.com/link/126729/web)

[Atropos: Create Touch-Friendly 3D Parallax Hover Effects](https://javascriptweekly.com/link/126729/web "atroposjs.com") — Use with plain JS, React, or Vue and it’s easy to configure with no dependencies. The home page includes some quite striking examples that aren’t as over the top as you’d expect.

Vladimir Kharlampidi

**OTHER QUICK RELEASES:**

[PrimeNG 14](https://javascriptweekly.com/link/126720/web) – Suite of 80+ Angular UI components.  
[Acorn 8.8](https://javascriptweekly.com/link/126708/web) – Tiny JS parser written in pure JS.  
[Discord.ts 10.0](https://javascriptweekly.com/link/126709/web) – Framework to create a Discord chat bot.  
[Prisma 4.1](https://javascriptweekly.com/link/126710/web) – Popular ORM for Node.js and TypeScript.  
[MelonJS 13.0](https://javascriptweekly.com/link/126711/web) – 2D sprite-based JS game engine.  
[Secure Electron Template 20.0](https://javascriptweekly.com/link/126712/web) – An Electron boilerplate app.  
[zip.js 2.6.2](https://javascriptweekly.com/link/126713/web) – Zip and unzip files in the browser or Deno.  
[Octokit.js 2.0.4](https://javascriptweekly.com/link/126714/web) – GitHub SDK for browsers, Node, and Deno.

💻 Jobs

[Software Engineers](https://javascriptweekly.com/link/126715/web) — Sticker Mule is the Internet's most "kick ass" brand. Our software team operates from 17 countries, and we're always looking for more exceptional engineers.  
Sticker mule

[Attend Our July 27th 2022 State of Wage Inequality in Tech Discussion](https://javascriptweekly.com/link/126716/web) — Join Hired, Blacks in Technology, Ada’s List, Interview Kickstart, and Speak\_ for a collaborative panel discussion about Hired’s 2022 Impact of Wage Inequality data report.  
Hired

❓ **Did you know..**

*   ... there's a fully [open source online MIDI editor](https://javascriptweekly.com/link/126723/web) called _Signal?_ Quite fun to compose with (or, in my case, just scribble notes over).
*   ... _Smashing Magazine_ has done a roundup of [image compression and optimization tools?](https://javascriptweekly.com/link/126724/web) Mostly online, but some local ones too.
*   ... there's a Web site that [satirizes the modern Web browsing experience?](https://javascriptweekly.com/link/126725/web) Amazing and dispiriting in equal measure.
*   ... 🌆 you can [create a miniature 3D 'city'](https://javascriptweekly.com/link/126726/web) of your GitHub contributions?
*   ... we have [💌 a Node.js newsletter too?](https://javascriptweekly.com/link/126727/web)

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/599)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/599)
> * 译者：
> * 校对者：
