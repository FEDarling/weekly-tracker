---
title: 'Node Weekly #440' # 不可修改
date: '2022-06-04' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/flga2w9sleoesaulvfb5.jpg)](https://nodeweekly.com/link/124310/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[Node v18.3.0 (Current) Released](https://nodeweekly.com/link/124310/web "nodejs.org") — It’s not a _huge_ release but there are some solid dependency updates (npm 8.11.0, V8 10.2, Undici 5.4), Windows 32 binary releases are _back_, and one notable new (experimental) feature: the [`util.parseArgs` function](https://nodeweekly.com/link/124311/web) for bringing an official command line argument parsing approach to Node core – here’s [a basic code example](https://nodeweekly.com/link/124312/web) as well as [the docs.](https://nodeweekly.com/link/124313/web)

Bryan English

💡 [Node 17.9.1](https://nodeweekly.com/link/124339/web) and [16.15.1](https://nodeweekly.com/link/124340/web) have been released too but are minor dependency-focused releases.

[What npm Can Learn from Go](https://nodeweekly.com/link/124314/web "engineering.hardfin.com") — Go’s [approach to dependency management](https://nodeweekly.com/link/124315/web) mitigates some key supply chain issues, but could some of Go's ideas be brought into the world of npm? This post introduces an experiment to recreate the `go mod vendor` experience with `npm` as a way to provoke community discussion on ways forward.

Danny Hermes

[![](https://copm.s3.amazonaws.com/8b9a1151.png)](https://nodeweekly.com/link/124305/web)

[Run Node Unikernels 2X as Fast on GCP and 3X as Fast on AWS](https://nodeweekly.com/link/124305/web) — Run your first open source Node.js unikernels in seconds. Node.js unikernels aren't just faster than docker - they are faster than Linux itself. Unikernels are easier to debug, deploy and safer too. Try it now.

NanoVMs sponsor

[Top 500 `npm` Package Maintainers Now Require 2FA](https://nodeweekly.com/link/124316/web "github.blog") — In response to numerous security issues with the npm ecosystem in recent years, GitHub has been keen to encourage package maintainers to use 2FA. The maintainers of many popular packages now _have_ to use 2FA, but if you maintain any packages at all, you can [learn more about how to join the 2FA gang here.](https://nodeweekly.com/link/124317/web)

GitHub

[npm Security Update: What GitHub Learnt About April's Attack](https://nodeweekly.com/link/124318/web "github.blog") — Back in April, GitHub [reported](https://nodeweekly.com/link/124319/web) that stolen OAuth user tokens were used to access some private repositories, private package manifests and metadata, as well as npm user account data, and they've shared the full story here.

Greg Ose (GitHub)

[How We Converted Our Node.js Library to Deno (using Deno)](https://nodeweekly.com/link/124320/web "www.edgedb.com") — _“We landed on a “runtime adapter” pattern that we think represents a general-purpose approach that may be useful to other library authors looking to support Deno.”_

James Clarke (EdgeDB)

[You May Not Need a Bundler for Your NPM Package..](https://nodeweekly.com/link/124321/web "cmdcolin.github.io") — Colin makes a good argument to run as cleanly as possible, but there are plenty of links to other options, if you prefer.

Colin Diesh

[HTTP Testing with Hurl in Node.js](https://nodeweekly.com/link/124322/web "blog.humphd.org") — Hurl is a (Rust-powered) command-line tool for running HTTP requests defined in simple text files and you can use it from within a Node project too.

David Humphrey

[How to Build a Group Chat App with Vanilla JS, Twilio and Node](https://nodeweekly.com/link/124323/web "www.smashingmagazine.com") — Chat apps have long been a popular bucket list project for Node developers. I did a webinar (or _livestream_ to the young'uns) 10 years ago(!) on building a chat app in Node myself but times have moved on and it’s possible to outsource much of the infrastructure now, as seen here.

Zara Cooper

[Node Transactional Notification Management System Saves Time and Money](https://nodeweekly.com/link/124306/web "www.courier.com")

Courier sponsor

[Using N|Solid Runtime from `npm`](https://nodeweekly.com/link/124324/web "nodesource.com") — _N|Solid Runtime_ is a special Node.js distribution that includes N|Solid’s agent to extract live metrics and app behavior information from apps in production.

Adrián Estrada (NodeSource)

[New Express 5 Features to Try](https://nodeweekly.com/link/124325/web) — Still in beta, though.  
Zara Cooper

[How to Deploy a NestJS App on Google Cloud Run with GitHub Actions](https://nodeweekly.com/link/124326/web)  
Tom Ray

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/xugkkmipf8n2vzyfvolb.jpg)](https://nodeweekly.com/link/124327/web)

[pkg.land: A Way to Find Alternative npm Packages](https://nodeweekly.com/link/124327/web "pkg.land") — It’s quite a minimally designed site but it _attempts_ to give you suggestions for related or alternative packages to use. I’m not entirely convinced by the approach so far (consider [Express’s alternatives](https://nodeweekly.com/link/124328/web)) but it’s fast and shows promise (such as for [the colors package](https://nodeweekly.com/link/124329/web).)

pkgland

[Jest Image Snapshot: A Jest Matcher for Image Comparisons](https://nodeweekly.com/link/124330/web "github.com") — Say hello to visual regression testing using this tool from American Express. Take image snapshots of your app within a test and compare them against a baseline. It can even handle tolerances if you want to ignore subtle changes and only throw on huge discrepancies.

American Express

[Vavite: Develop Server-Side Applications with Vite](https://nodeweekly.com/link/124331/web "github.com") — [Vite](https://nodeweekly.com/link/124332/web) is best known as a build tool closely associated with (but that doesn’t require) Vue.js but it supports transpiling server-side code too and Vavite takes advantage of this.

Fatih Aygün

[Try the CI/CD Tool Used by Shopify, Pinterest, and Lyft - Now Free](https://nodeweekly.com/link/124307/web)

Buildkite sponsor

[waitehr: Waits for an HTTP Response and Retries Requests](https://nodeweekly.com/link/124333/web "github.com") — Nice to see a CLI tool written in Node rather than Go or Rust for once. This tool makes and waits for an HTTP response (a la `curl`) but brings timeouts, retries, and redirects into the mix. The [usage examples](https://nodeweekly.com/link/124334/web) may convince you of its value.

Gajus Kuizinas

[Commander 9.3: Node Command-Line Interfaces Made Easy](https://nodeweekly.com/link/124336/web "github.com") — The long standing ‘batteries included’ system for building apps that interface with the command line.

TJ Holowaychuk

[cf-workers-telegram-bot: Run a Serverless Telegram Bot on CloudFlare Workers](https://nodeweekly.com/link/124337/web)  
Sean Behan

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/440)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/440)
> * 译者：
> * 校对者：
