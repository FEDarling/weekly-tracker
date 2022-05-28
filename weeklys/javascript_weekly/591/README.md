---
title: 'JavaScript Weekly #591' # 不可修改
date: '2022-05-28' # 不可修改
categories: ['JavaScript Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/sfvzhechlufacs6s0zie.jpg)](https://javascriptweekly.com/link/124114/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Comparing Three Ways of Processing Arrays Non-Destructively](https://javascriptweekly.com/link/124114/web "2ality.com") — The good doctor of JavaScript puts `for-of`, `.reduce()`, and `.flatMap()` up against each other so you can pick which makes the most sense for your own array processing work.

Dr. Axel Rauschmayer

[npm Security Update: What GitHub's Learnt About April's Attack](https://javascriptweekly.com/link/124161/web "github.blog") — Last month, GitHub, the stewards of the npm registry, [reported](https://javascriptweekly.com/link/124162/web) that stolen OAuth tokens were used to access certain private repositories, private package manifests & metadata, as well as npm user account data. Here's an update. Notably: _“GitHub discovered a number of plaintext user credentials for the npm registry that were captured in internal logs following the integration of npm into GitHub logging systems.”_ Ouch. **Don't store secrets or credentials in version control (or logs).**

Greg Ose (GitHub)

[![](https://copm.s3.amazonaws.com/e6af5f4d.jpg)](https://javascriptweekly.com/link/124110/web)

[Making TypeScript 'Stick'](https://javascriptweekly.com/link/124110/web "frontendmasters.com") — Test your knowledge through quizzes, challenges, and even a TypeScript gameshow in this new course by Mike North!

Frontend Masters sponsor

[TypeScript 4.7 Released](https://javascriptweekly.com/link/124111/web "devblogs.microsoft.com") — The headline feature for the typed JavaScript superset is ES module support for Node.js – a feature that has been infamously difficult to implement, and whose reliance on file extensions [continues to provoke debate](https://javascriptweekly.com/link/124112/web) – plus CommonJS interoperability (from ES modules), improved function inference, control-flow analysis for bracketed element access, and more.

Daniel Rosenwasser

[Next.js's Layouts RFC: Big Changes Ahead for Next.js](https://javascriptweekly.com/link/124113/web "nextjs.org") — If you’re a Next.js user, you’ll want to read this as some significant updates are on the way, particularly around routing, app structure, and layouts (including nested layouts).

Neutkens, Markbage, et al. (Vercel)

## **IN BRIEF:**

*   DigitalOcean has launched [a new serverless functions-as-a-service platform](https://javascriptweekly.com/link/124115/web) – yes, you can run your JS code on it.
    
*   Angular 14 (currently in RC phase) is due imminently – [a look at what's new.](https://javascriptweekly.com/link/124116/web)
    
*   Netlify has hired Ryan Carniato, the founder of the [SolidJS](https://javascriptweekly.com/link/124151/web) project, to work on it full-time – [here's his story.](https://javascriptweekly.com/link/124152/web)
    
*   [Node 17 goes 'end of life'](https://javascriptweekly.com/link/124117/web) next week, joining Node 12 which went EOL in April.
    
*   [GitHub Actions can now use Node 16](https://javascriptweekly.com/link/124118/web) – Node 12 support remains for now.
    
*   _Ghost_ is a Node.js-built CMS and blogging platform that has become an ecosystem and business all of its own, and there's a new major version out now: [Ghost 5.0](https://javascriptweekly.com/link/124156/web)
    

## **RELEASES:**

*   [Electron 19](https://javascriptweekly.com/link/124153/web) – Gets Chromium 102, V8 10.2, and Node 16.14.2.
*   [Neutralino.js 4.6](https://javascriptweekly.com/link/124119/web) – Lightweight cross-platform desktop app framework.
*   [fast-check 3.0](https://javascriptweekly.com/link/124120/web) – Property based testing framework.
*   [Knex 2.1.0](https://javascriptweekly.com/link/124121/web) – SQL builder for Node.js.
*   [Cypress 9.7.0](https://javascriptweekly.com/link/124122/web) – Testing for anything in a browser.
*   [Storybook 6.5](https://javascriptweekly.com/link/124157/web) – UI component dev tool.

## 📒 Articles & Tutorials

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/vzarncukhzvu7kjn1acv.jpg)](https://javascriptweekly.com/link/124131/web)

[What is 'Edge Compute?' 'It's Kind of Like Knitting Dog Hats'](https://javascriptweekly.com/link/124131/web "austingil.com") — Look, the metaphor made us laugh, and the author stretches it out quite a long way here. _“Cloud functions are like robots trained to knit dog-hats”_ – got it?

Austin Gil

[How Airbnb Gets Faster JavaScript Builds with Metro](https://javascriptweekly.com/link/124127/web "medium.com") — The story of Airbnb’s migration from Webpack to [Metro](https://javascriptweekly.com/link/124128/web) (a JavaScript bundler aimed at React Native – but Airbnb uses it for Web projects) and how it made their development feedback loop ‘nearly instantaneous’.

Rae Liu

[Dark Patterns in UX](https://javascriptweekly.com/link/124130/web "www.telerik.com") — Higher-order functions are an important feature that cannot be overlooked in functional programming, allowing for easy nesting of functions to archive a specific task. Learn more about them from this article.

Kendo UI for Angular sponsor

[How We Converted Our Node.js Library to Deno (using Deno)](https://javascriptweekly.com/link/124129/web "www.edgedb.com") — _“We landed on a “runtime adapter” pattern that we think represents a general-purpose approach that may be useful to other library authors looking to support Deno.”_

James Clarke (EdgeDB)

[A Roundup of React State Management Libraries in 2022](https://javascriptweekly.com/link/124132/web "www.albertgao.xyz") — There are a lot of options in this space including Zustand, Recoil, XState and, of course, Redux.

Albert Gao

[JSON and the Stringification Oddities in JavaScript](https://javascriptweekly.com/link/124133/web "www.zhenghao.io") — It’s not the most straightforward thing, although there is at least a (complicated) [written spec](https://javascriptweekly.com/link/124134/web) for `JSON.stringify`’s operation.

Zhenghao

[The Balance Has Shifted Away From SPAs](https://javascriptweekly.com/link/124135/web "nolanlawson.com") — “_how the context has changed in recent years to give MPAs more of an upper hand against SPAs_”. (MPAs are Multi-Page Apps. Or just ‘apps’ to me.)

Nolan Lawson

[Add a Professional Scheduling Widget to Your MES App](https://javascriptweekly.com/link/124136/web "www.bryntum.com")

Bryntum sponsor

[Avoiding Puppeteer Antipatterns](https://javascriptweekly.com/link/124137/web)  
Greg Gorlen

[5 Things That Make Astro Unique for Building Web Apps](https://javascriptweekly.com/link/124154/web)  
Brian Rinaldi

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/ssm1zigkskugu5gvhmar.jpg)](https://javascriptweekly.com/link/124138/web)

🥷  [Ninja Keys: Add a Command Palette / Keyboard Shortcuts Interface to Your App/Site](https://javascriptweekly.com/link/124138/web "github.com") — If you’ve used Cmd/Ctrl+K on GitHub or the command palette in tools like VS Code, this will feel familiar to you and it’s at home in vanilla JS apps or alongside Vue, React or Svelte. [Try it here](https://javascriptweekly.com/link/124139/web). [Kbar](https://javascriptweekly.com/link/124140/web) is another player in this space focused more on React.

Sergei Sleptsov

[Filesize.js: Generate Human Readable Strings From File Sizes](https://javascriptweekly.com/link/124141/web "filesizejs.com") — For example, 123456 bytes could turn into `"120.56 KB"` - though different standards of conversion can also be used. [GitHub repo](https://javascriptweekly.com/link/124142/web).

Jason Mulligan

[LunchboxJS: A Custom Vue 3 Renderer for Three.js](https://javascriptweekly.com/link/124143/web "lunchboxjs.com") — Straight in with a snazzy full-page demo here. [The docs](https://javascriptweekly.com/link/124144/web) may prove more useful after checking it out. _“Think of it like react-three-fiber for Vue.”_

Breakfast Studio LLC

[Try the CI/CD Tool Used by Shopify, Pinterest, and Lyft](https://javascriptweekly.com/link/124145/web) — Join the best engineering teams running the fastest, most reliable build and deploy pipelines at scale. Now with a free plan.

Buildkite sponsor

[React-Uploady 1.0: File Upload Components and Hooks](https://javascriptweekly.com/link/124146/web "react-uploady.org") — Aims to be simple while highly customizable. You can have a file upload button, a preview, a zone for drag and drop uploads, and more. The [docs](https://javascriptweekly.com/link/124147/web) are good and show off a basic example and there’s [a screencast](https://javascriptweekly.com/link/124148/web) too.

Yoav Niran

[EStimator.dev: The Modern JavaScript Savings Calculator](https://javascriptweekly.com/link/124150/web "estimator.dev") — Calculate the size improvement a site could achieve by switching to more modern JavaScript syntax.

Google Chrome Labs

[Browser Extension Template: Quickly Flesh Out a Browser Extension Codebase](https://javascriptweekly.com/link/124155/web "github.com") — Think create-react-app but for an extension, kinda.

Debdut Karmakar

[Nuxt Content v2: A Nuxt Module That Uses Markdown, YAML, CSV or JSON Files From a `content` Directory](https://javascriptweekly.com/link/124158/web)  
Chopin, Guilloux, Birang, and Ollivier

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://javascriptweekly.com/issues/591)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/591)
> * 译者：
> * 校对者：
