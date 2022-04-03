---
title: 'JavaScript Weekly #583' # 不可修改
date: '2022-04-02' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

🤞 Fingers crossed, but unless we've been successfully pranked ourselves, **this is an April Fools' prank free zone!** Sorry if you like a bit of frivolity on April 1st, but completeness and accuracy come before entertainment here. Boring, I know, but we don't stand a chance against YouTube or video games 😆  
\_\_  
_Peter Cooper, your (boring, though still quite foolish) editor._

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/f6n7ivm1hsdpd4dhblk9.jpg)](https://javascriptweekly.com/link/121739/web)

[Decorators for ES6 Classes Proposal (Mostly) Reaches Stage 3 at TC39](https://javascriptweekly.com/link/121739/web "github.com") — We first linked to this proposal three years ago but it’s now [conditionally made it to stage 3](https://javascriptweekly.com/link/121740/web) (with some tweaks required) and people are [very excited](https://javascriptweekly.com/link/121741/web). Despite dating from 2019, [Mike Green’s explanation of the idea](https://javascriptweekly.com/link/121742/web) remains a good accessible overview of the basic idea, if the proposal feels too technical.

Ecma TC39

[React 18 Released](https://javascriptweekly.com/link/121743/web "reactjs.org") — [The plan](https://javascriptweekly.com/link/121744/web) was for v18 to be an easy upgrade even if there were many changes under the hood.. and despite the introduction of a new concurrent renderer, Suspense, new hooks, automatic batching, and more, they’ve done a great job keeping the ship steady. [The React 18 upgrade guide](https://javascriptweekly.com/link/121745/web) covers some things you need to consider, and if you’re a completist, [the changelog](https://javascriptweekly.com/link/121746/web) digs deep.

The React Team

[![](https://copm.s3.amazonaws.com/8595daba.png)](https://javascriptweekly.com/link/121747/web)

[Studio 3T Manages Your Data, While You Wrestle Your App into Shape](https://javascriptweekly.com/link/121747/web "studio3t.com") — Studio 3T's full suite of MongoDB tools lets you query quicker, develop with data even faster and turn queries into code automatically. Try it free for 30 days - no credit card needed.

Studio 3T sponsor

[Electron 18.0 Released](https://javascriptweekly.com/link/121748/web "www.electronjs.org") — Not content to let let React get all the v18 glory, the popular Electron cross-platform 'build desktop apps with JS, CSS and HTML' framework also reaches v18 with upgrades to Chrome 100 (also out this week), V8 10.0, and Node 16.13.2.

Keeley Hammond and Sofia Nguy

▶  [The Story of Next.js](https://javascriptweekly.com/link/121749/web "www.youtube.com") — A good balance of detail and high level overview to tell the [Next.js](https://javascriptweekly.com/link/121750/web) story. Despite being just 12 minutes long, it goes into a lot more background and history than you’d expect, too. Fingers crossed for Gatsby and Remix next, perhaps?

Tyler McGinnis

## **IN BRIEF:**

*   [VisibleV8](https://javascriptweekly.com/link/121851/web) is a patched version of the V8 JavaScript engine specifically for monitoring and logging running JavaScript as explained [📄 in this academic paper.](https://javascriptweekly.com/link/121852/web)
    
*   👾 Kyle Simpson, of You Don't Know JS Yet fame, has been keeping me updated on progress with [his Dwordly game](https://javascriptweekly.com/link/121853/web) – it's quite fun, and an interesting change to Wordle.
    
*   Mish Ushakov wants to remind us that [Next.js and Gatsby are not 'static site generators'](https://javascriptweekly.com/link/121751/web) - a common confusion.
    
*   The British government's official public facing sites have eventually [all dropped jQuery as a dependency.](https://javascriptweekly.com/link/121854/web) 😢
    

## **RELEASES:**

[Preact 10.7.0](https://javascriptweekly.com/link/121752/web) – Tiny, fast React alternative.  
[wavesurfer 6.1.0](https://javascriptweekly.com/link/121753/web) – Navigable audio visualization.  
[Vite 2.9.0](https://javascriptweekly.com/link/121855/web) – Next gen frontend tooling.  
[D3 7.4.0](https://javascriptweekly.com/link/121755/web) – The Data-Driven Document library.  
[React Testing Library 13](https://javascriptweekly.com/link/121754/web) – Adds React 18 support.  
[MIDIVal 0.0.16](https://javascriptweekly.com/link/121756/web) – MIDI messaging library now has MIDI clock support.  
[ioredis 5](https://javascriptweekly.com/link/121757/web) – High perf Node.js Redis client.

## 📒 Articles & Tutorials

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/jeepuzgsl9jpomvrs69a.jpg)](https://javascriptweekly.com/link/121763/web)

[Locale Aware Sorting in JavaScript](https://javascriptweekly.com/link/121763/web "elijahmanor.com") — When building a localized app, the default sorting logic for strings might not do quite what you want.. `localeCompare` and `Intl.Collator` to the rescue.

Elijah Manor

[How to Use Props in React](https://javascriptweekly.com/link/121764/web "www.robinwieruch.de") — We first linked to this three years ago but Robin has been updating his posts to modern standards, so it remains a fantastic resource now too and is packed with prop-oriented examples.

Robin Wieruch

[14 Linting Rules To Help You Write Asynchronous JS Code](https://javascriptweekly.com/link/121765/web "maximorlov.com") — Walks through a variety of rules shipped by default with ESLint – an interesting way to learn some best practices.

Maxim Orlov

[How Lyft's Mobile Team Does Mobile CI at Scale](https://javascriptweekly.com/link/121766/web "buildkite.com") — How does Lyft do mobile CI/CD, and unblock their ~200 mobile app contributors? Lyft shares all the details.

Buildkite sponsor

[The What, When, Why and How of Next.js’ New Middleware Feature](https://javascriptweekly.com/link/121856/web "www.smashingmagazine.com") — A look at a new beta feature in Next.js 12.0: middleware.

Sam Poder (Smashing Magazine)

[Conquering JavaScript Hydration](https://javascriptweekly.com/link/121767/web "dev.to") — Hydration plays a big role in many JS-based site generators but can sometimes be a performance bottleneck. This article is conceptual but digs into some of the ways in which newer frameworks are rethinking things.

Ryan Carniato

[How to Deal with Optional Things and `undefined` in TypeScript](https://javascriptweekly.com/link/121770/web)  
Mattie Behrens

[How to Write a Linter Using `tree-sitter` in An Hour](https://javascriptweekly.com/link/121771/web)  
Siraben

[Remix: The Yang to React's Yin?](https://javascriptweekly.com/link/121768/web)  
Kent C. Dodds

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/dlpfe1bpoejahlenqcmy.jpg)](https://javascriptweekly.com/link/121772/web)

[Visual Studio Code March 2022 Released](https://javascriptweekly.com/link/121772/web "code.visualstudio.com") — VS Code gets updated every month, but this feels like one of the bigger updates for JavaScript developers in particular. Native _local history_ support is the headline feature but the JS debugger now lets you collect and visualize heap profiles to keep an eye on memory allocation. We also now get JS highlighting when within HTML files.

Microsoft

[a11y-dialog: A Lightweight, Accessible Way to Create Dialogs](https://javascriptweekly.com/link/121773/web "a11y-dialog.netlify.app") — It’s possible to [replace JS dialogs with the `<dialog>` element](https://javascriptweekly.com/link/121774/web) in many cases now, but that’s not _always_ desired. This is a nice implementation – [demo](https://javascriptweekly.com/link/121775/web).

Kitty Giraudel

[Integrate eSignatures in Your App in Less Than a Week](https://javascriptweekly.com/link/121776/web "www.hellosign.com") — Enable document signing from anywhere with HelloSign's eSignature functionality. Test the API for free.

HelloSign, a Dropbox Company sponsor

[PLV8 3.1: Bringing the V8 Engine to the PostgreSQL Database](https://javascriptweekly.com/link/121777/web "github.com") — Postgres is both a hugely popular and hugely extensible relational database, and being able to write procedures in JavaScript rather than PL/pgSQL could appeal to you. [Documentation](https://javascriptweekly.com/link/121778/web).

plv8 team

[Hackathon Starter: A Boilerplate for Node Web Apps](https://javascriptweekly.com/link/121779/web "github.com") — For when you might want to start building a Node app _quickly_ including key features like auth/OAuth, Bootstrap 5, account management, email forms..

Sahat Yalkabov

[Encoding.js 2.0: Convert or Detect (.jp) Character Encodings](https://javascriptweekly.com/link/121780/web "github.com") — Specifically for encodings that support _Japanese_ characters, including Shift\_JIS, EUC-JP, and UTF-8/16.

polygonplanet

[Build Internal Tools in Minutes with Retool, Where Visual Programming Meets the Power of Real Code](https://javascriptweekly.com/link/121781/web "retool.com")

Retool sponsor

[ts-audio 0.7.0: Simple API for AudioContext and Playing Audio Playlists](https://javascriptweekly.com/link/121782/web "github.com") — [Here's a demo](https://javascriptweekly.com/link/121783/web).

Evandro Leopoldino Gonçalves

[Flatbush: Fast Static Spatial Index for 2D Points and Rects](https://javascriptweekly.com/link/121784/web)  
Vladimir Agafonkin

📥 Reader Submissions

In recent months, we've been receiving an increasing amount of submissions from readers (thanks!) and while we use many of them, we don't have enough time to review _everything_ to the right level. Given the backlog, we want to try out a new section to share things from our inbox to you more quickly:

*   [Golgi](https://javascriptweekly.com/link/121785/web) by Rob Tweed is an interesting take on a UI framework built around [Web Components](https://javascriptweekly.com/link/121786/web) and with no build steps required.
    
*   Maxim Orlov has written about [how to run concurrent tasks within a defined limit](https://javascriptweekly.com/link/121787/web) using purely JavaScript.
    
*   [spotify-mini](https://javascriptweekly.com/link/121788/web) is a Node wrapper around Spotify's Web API.
    
*   [neo.mjs](https://javascriptweekly.com/link/121857/web) (which has just hit [version 4.0](https://javascriptweekly.com/link/121858/web)) is a performance-oriented framework built around workers and its team is continuing to [implement cool looking stuff.](https://javascriptweekly.com/link/121859/web)
    

If _you_ have something to submit, email `jsw@peterc.org` or just hit reply to any issue of this newsletter and we'll see it :-)

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/583)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/583)
> * 译者：
> * 校对者：
