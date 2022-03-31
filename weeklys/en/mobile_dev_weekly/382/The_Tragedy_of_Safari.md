---
title: 'The Tragedy of Safari'
date: '2022-02-04'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['CSS','JavaScript','HTML','TypeScript','ECMAScript','Chrome','游览器','网络','React','Vue','webpack','babel','vite','node']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

![](https://www.magiclasso.co/insights/tragedy-of-safari/tragedy-of-safari.jpg)

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

## Why one of the world’s most popular web browsers rarely gets the respect it deserves

Over twenty years ago, in 2001, a small team inside Apple started an effort to develop a new web browser. It was to provide the company with an alternative to Microsoft Internet Explorer, which at the time was bundled as the default on all Macs sold. Why did Apple need to replace the perfectly serviceable, though uninspiring, Internet Explorer with an in-house alternative?

On the road to growth and success, companies learn lessons. The most memorable lessons are those learnt through hardship. Apple itself learnt two such lessons in the 1990’s:

* Always control the key technologies within your products
* Never allow third parties to become more powerful or more important than the platform owner (e.g. Apple)

At the time, Microsoft and Adobe were central to the third party Mac software ecosystem. Microsoft with its Office suite of Word, Excel and PowerPoint and Adobe controlling the key tools used by creatives, including Photoshop and Illustrator. Apple planned to develop a new, modern operating system based upon recently acquired NeXT technologies. So they went to Microsoft and Adobe. They requested that they get on-board this new initiative. It would require both to redevelop their best selling applications for the proposed platform.

Both refused. Risking the viability of the entire initiative. Apple had become captive to the whims of two powerful partners. Partners who, with their own business interests, controlled the success and failure of Apple itself. The decisions forced Apple to completely change their operating system strategy. Leading to the implementation of a compatibility layer named Carbon and delaying the release for many years.

Apple had been taught a powerful lesson. A now wiser company, they started a series of initiatives to ensure they never encountered the same situation again.

### Freedom

A new team, led by [Don Melton](https://donmelton.com/), was tasked with starting a new, secretive web browser project. In fact, they actually needed to first prove to Apple management that such a thing was achievable.

Successful projects need to be clear about their goals. From the outset, Apple’s goal with the web browser project was to control their own platform and remove the Mac’s reliance on Internet Explorer. So central was this goal that one of the options canvassed for the [name of the new browser was ‘freedom’](https://donmelton.com/2012/12/19/when-i-first-heard-the-name-safari/). As in freedom from Microsoft and Internet Explorer. Eventually Steve Jobs settled on the alternative name ‘Safari’ (likely due to his familiarity with the Beach Boys, their album ‘Surfin Safari’ and it’s connotation of surfing the web).

Apple released their Safari web browser at the 2003 MacWorld conference. Web browsing speed, native platform integration and compatibility with most existing websites were key features of the product’s marketing. Less promoted was what the browser achieved for the company itself. It delivered control back to Apple for a key technology within the Mac product line.

It’s a goal that has served the company well. But is has led to an ongoing reputational issue and a refrain, amongst some technical users, that Safari is holding back the web.

### Priorities

History, culture, incentives, values and strategy inevitably influence the products a business decides to release.

In Apple’s case, lessons learned during the 1990’s determined Safari’s goals. To ensure that Apple controls the web browsing technology on it’s platforms. And, just as importantly, to ensure that no third party can use that platform to become more powerful or important than Apple itself.

The result is that Apple will not support anything in Safari that may circumvent this control. No native notification support for web sites. No support for pure web based applications (PWAs) as first class citizens on the iPhone. No third party rendering engines allowed in iOS.

Likewise Google’s values, culture and strategy influences the development of it’s Chrome web browser. Google views Chrome as an opportunity to deliver a full featured application platform. A foundation to deliver rich web-based services to desktop operating systems, unencumbered or filtered by the native platform. Chrome OS takes this premise to it’s logical conclusion – the web browser is the native platform.

Through this lens, Google will support features in Chrome that make it a richer, more full featured application platform. Supporting technologies which replace or minimise those of the native platform. Hence the roll-out of web assembly and service workers for push notifications amongst others.

The decisions that Google and Apple make in regards to their web browsers make strategic sense. They exist to deliver for their core business. Neither exist primarily for end users or to cultivate some nirvana for the web developers of the world.

It just so happens that Google’s priorities for Chrome tend to align closely with the priorities of those loudest online – the web developers, internet entrepreneurs and the technically savvy. At the same time, Apple will try to convince those same people that developing a native app on their platforms is a better approach. Which takes us to the core of Safari’s ongoing reputational issue.

### R-E-S-P-E-C-T

What does Safari have to do to gain some respect?

Apple’s product goals have led to Safari’s reputation struggling amongst the technical class. In online forums such as on Hacker News or Reddit, whenever web browsers are discussed, the lament of Safari begins.

* “[Safari is the new Internet Explorer](https://arstechnica.com/information-technology/2015/06/op-ed-safari-is-the-new-internet-explorer/)” (God forbid!)

* ”[For developers, Safari is crap and outdated](https://news.ycombinator.com/item?id=27968394)”

* “[Safari is killing the web](https://news.ycombinator.com/item?id=27985783)”
* “[How Safari Ruined My Tuesday](https://fly.io/blog/how-safari-ruined-my-tuesday/)”

From a web developers perspective – who simply want the broadest and most powerful feature set to develop with – these complaints are valid. When HTML and JavaScript are your tools of trade, you’d be annoyed at not being able to hit every nail with that particular hammer.

Issues raised include the lack of support for various web technologies. The inability for alternative rendering engines to be allowed on the iPhone. The lack of missing ‘power user’ features expected by heavy web browser users. How restrictive the content blocker API is to stop all online advertising when compared to legacy alternatives (which have their own set of problems).

Some of these are power-user functions of the web browser. Some are capabilities and conformance of the underlying web rendering engine. Others, such as native push notification support, are ways to expose the native platform’s capabilities to the web browser. Why doesn’t Safari just tackle these issues and get the respect it deserves?

Recently Apple has been significantly improving Safari’s [support for power user functions](https://www.apple.com/safari/) and [rendering engine conformance](https://wpt.fyi/compat2021?feature=summary). However Apple will always be dragging their feet on exposing native platform capabilities to the web through Safari.

It’s a tension that won’t be resolved. Technical users, and other browser makers like Google, will want the web to become more and more capable. Apple will want to ensure it doesn’t become too capable. In Apple’s eyes, the web should never feasibly replace it’s native platforms.

From a revenue point of view, they will also not allow web apps, delivered through the browser to do an end run around their App Store business. Why would they want to give up the lucrative 30% cut they receive from all those native app transactions?

Ultimately this is Safari’s burden to bare. Used in over 1.5 billion devices worldwide but always derided as not doing enough to support the web.


---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://www.magiclasso.co/insights/tragedy-of-safari/)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/mobile_dev_weekly/382/The_Tragedy_of_Safari.md)
> * 译者：
> * 校对者：