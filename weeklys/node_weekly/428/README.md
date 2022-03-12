---
title: 'Node Weekly #428' # 不可修改
date: '2022-03-11' # 不可修改
categories: ['Node Weekly'] # 不可修改
publish: false # 翻译完成后修改
---

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/knuhuxscyfpp9eipnwer.jpg)](https://nodeweekly.com/link/120700/web)

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

[What's Really Going On Inside Your `node_modules` Folder?](https://nodeweekly.com/link/120700/web "socket.dev") — A running joke is that `node_modules` folders are so huge they’re [heavier than black holes](https://nodeweekly.com/link/120701/web) but when packages get taken over by nefarious groups, the contents of node\_modules becomes somewhat less funny. This post looks into what malicious packages can do and the broad problem of supply chain attacks generally.

[Node v17.7.0 (Current) Released](https://nodeweekly.com/link/120702/web "nodejs.org") — Updates to nghttp2 and npm (8.5.2), some [new options](https://nodeweekly.com/link/120703/web) for `net.Socket` and `net.Server`, and Ben Noordhuis (one of the most prolific Node contributors who [stepped back](https://nodeweekly.com/link/120704/web) as a core committer for [reasons](https://nodeweekly.com/link/120705/web) in 2013) is officially fully back as a Node.js collaborator (though he has [continued](https://nodeweekly.com/link/120706/web) to contribute code all along).

[![](https://copm.s3.amazonaws.com/ee129dc0.png)](https://nodeweekly.com/link/120707/web)

[Introducing the Elastic CI Stack for EC2 Mac](https://nodeweekly.com/link/120707/web "buildkite.com") — This new open source stack is created specifically for mobile teams, helping you migrate to AWS-managed servers for increased reliability, security, and speed. 📱

[Socket: See Potential Security Issues for `npm` Packages](https://nodeweekly.com/link/120708/web "socket.dev") — An interesting new project that scans the code of each npm package in an attempt to characterize their behavior which is then reported on project specific pages, such as [this one for lodash](https://nodeweekly.com/link/120709/web) or [this one for zx](https://nodeweekly.com/link/120710/web).

[A Case Study on Moving from Next.js to Remix](https://nodeweekly.com/link/120711/web "www.adamcollier.co.uk") — [Remix](https://nodeweekly.com/link/120712/web) is the newest full stack Web framework on the block, and the first case studies are beginning to come in. In this case, the author covers the rewrite of his personal site (where this article is hosted).

[Making a Discord Playlist Bot with Serverless Cloud](https://nodeweekly.com/link/120714/web "www.serverless.com") — _Serverless Cloud_ is a serverless platform from Serverless Inc., the folks behind [Serverless Framework](https://nodeweekly.com/link/120715/web). (Have we said ‘serverless’ enough yet?) This post ties together Node.js with some specific Serverless Cloud features to easily create a Discord chat bot that can add songs to a shared Spotify playlist.

[A Guide to Node Process Management with PM2](https://nodeweekly.com/link/120720/web "blog.appsignal.com") — [PM2](https://nodeweekly.com/link/120721/web) is one of the longest standing Node utilities used for managing processes and is worth checking out if you have a Node process you need to stay up 24/7.

[Malicious Node.js Packages: Niche Configurations & Invisible Characters](https://nodeweekly.com/link/120722/web "snyk.io")

[Diving into Node's Streams](https://nodeweekly.com/link/120723/web "nodesource.com") — Streams provide a defined interface and abstraction over the idea of working with streaming data in Node – they seem to suffer from often being misunderstood, though, so tutorials always tend to be popular.

▶  [USB Reverse Engineering and Writing Drivers](https://nodeweekly.com/link/120724/web "www.youtube.com") — If you’ve got a hankering to do some hardware hackery with Node, you might enjoy this truly low level stream.

▶  [Discussing Securing the Open Source Supply Chain with Feross Aboukhadijeh](https://nodeweekly.com/link/120725/web "changelog.com") — Feross Aboukhadijeh is one of the minds behind Socket (featured above) and he joined the popular _Changelog_ podcast to discuss the launch and why making the assumption that all your dependencies are malicious may be a necessary step to take.

[Deploying Your Node API to AWS Using Elastic Beanstalk](https://nodeweekly.com/link/120727/web)  

[The Fetch API is Finally Coming to Node](https://nodeweekly.com/link/120729/web)  

## 🛠 Code & Tools

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/rmx9mhempnqdpfaexg14.jpg)](https://nodeweekly.com/link/120731/web)

[PSD: A Zero-Dependency PSD (Photoshop) Parser for Browser and Node.js](https://nodeweekly.com/link/120731/web "webtoon.github.io") — Will parse info for each layer including text and also supports Photoshop’s .psb (big image) format. [GitHub repo](https://nodeweekly.com/link/120733/web).

[Undici 4.15: The Fresh HTTP/1.1 Client for Node](https://nodeweekly.com/link/120735/web "github.com") — Undici’s goal to be the best HTTP/1.1 client for Node takes another step forward.

[Bree 8.0: A Versatile Job Scheduler for Node](https://nodeweekly.com/link/120737/web "jobscheduler.net") — Supports cron, dates, ms, later, and human-friendly for scheduling things.

[Stream Video in Your Node App in Two API Calls](https://nodeweekly.com/link/120739/web "get.mux.com")

[exiftool-vendored: Fast, Cross-Platform Node.js Access to ExifTool](https://nodeweekly.com/link/120741/web "github.com") — Use this when you want to access embedded EXIF data within image files (particularly those taken with phones or DSLRs).

[elasticsearch-js 8.1.0: Official Elasticsearch Client for Node](https://nodeweekly.com/link/120743/web "github.com") — [Elasticsearch](https://nodeweekly.com/link/120745/web) is a great open source search database system for adding powerful search features to your apps. This update adds Elasticsearch 8.1 compatibility.

[AVA 4.1: The Node.js Test Runner](https://nodeweekly.com/link/120747/web "github.com") — A popular test runner known for its simplicity and speed.

[fastify-websocket: Basic WebSocket Support for Fastify](https://nodeweekly.com/link/120749/web)  

[Dynamodump 2.0: A CLI Tool for Backing Up and Restoring Schema and Data from DynamoDB](https://nodeweekly.com/link/120751/web)  

[ssh2 v1.7: Pure JavaScript SSH2 Client and Server Modules for Node](https://nodeweekly.com/link/120753/web)  

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://nodeweekly.com/issues/428)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/428)
> * 译者：
> * 校对者：
