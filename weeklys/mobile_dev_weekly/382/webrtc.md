---
title: 'WebRTC 简介'
date: '2021-12-17'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['Tool']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220112171045.png)
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
## 前言

如果你对 **WebRTC** 这个概念有疑惑，你大可能会去谷歌上查相关资料，然后你会看到类似这样的句子：

> WebRTC 是一个开源项目，允许您向应用程序添加点对点实时通信功能。

我们来分析一下这句话都告诉了我们什么：

1. 开源项目

   顾名思义，它是一个可以免费使用的开源项目。

2. 点对点

   你不需要专门为 WebRTC 而去准备一个昂贵的媒体服务器。一般的媒体服务器，视频通话可能需要 1 Mbit/s 的带宽。如果你有一个 1000 活跃用户的平台，你需要准备 1Gbit/s 的带宽，那如果你有 100 万用户怎么办？

3. 实时通讯

   一般我们听到实时通讯这个概念的时候，普通人都会想到音频-视频通话，而实时通讯则是一个更为广泛的概念。

   > 您可以使用 WebRTC 传输实时数据。

   比如一款名叫 [Haxball](https://www.haxball.com/) 的在线游戏，也可以使用 WebRTC 功能来完成。又比如[ShareDrop](https://www.sharedrop.io/) 是一个允许您点对点发送文件的网站。您可以将文件发送到本地网络，甚至可以点对点地发送到不同的网络。
	
4. 应用程序
	
	WebRTC 最初发布时，它的目标是运行在 Chrome 上的 Web 应用程序。但是今天，你可以在几乎所有流行的浏览器、Android、iOS 和桌面平台上开发 WebRTC 应用程序。
	
	![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220112172211.png)
	
	Chrome、Firefox、Safari、Edge 和 Opera 等流行浏览器在桌面和移动浏览器上都支持 WebRTC。 WebRTC 还允许应用程序开发人员使用原生框架进行 iOS 和 Android 原生开发。

## 哪些产品使用了 WebRTC？

WebRTC 目前成为了视频和音频通话的网络通信标准。大多数流行的视频通话应用程序已经在使用它了，就像:

- Zoom
- Microsoft Teams
- Google Meet & Google Duo
- Facebook Messenger
- Jitsi
- Twilio
- Discord

根据 2017 年的 Kranky Geek 活动，谷歌在[活动](https://youtu.be/PEXnbTyygi4?t=104)上分享了一个统计数据：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220112172607.png)

**注意！这个统计数据是 4 年前的，也就是说在其开始流行之前，视频和音频通话的使用量猛增。如果某一天内的 WebRTC 使用量超过数十亿分钟，也不用觉得惊讶。**

## WebRTC有什么优势？

那为什么这这么多平台会使用 WebRTC 呢？它又能带来什么好处？

如果是之前的情况，你在创建实时通讯的应用程序或平台的时候，需要考虑很多因素，比如：

* 通讯的质量（延迟、媒体质量、稳定性等）
* 访问设备硬件（相机、麦克风等）
* 网络使用（带宽使用、网络限制等）
* 视频和音频的编码/解码
* 安全性
* UX 改进功能（降噪、回声消除等）
* 支持跨平台（Windows、Mac、Linux、Android、iOS 等）

这些是我目前能想到的，可能还有更多。

**如果使用 WebRTC的话， 你不需要考虑上面这些！WebRTC 可以使应用程序开发人员能够使用简单的 API 启动实时通讯能力。**

提供的 API 就像 `getUserMedia()` 一样简单。不仅如此，应用程序还可以使用此 API 访问设备的摄像头和麦克风。对于其他重要的 API，会在接下来的文章中详细介绍。

## 应用程序的职责是什么？

到这里，你可能会想 “如果 WebRTC 这么厉害，我应该怎么去使用它？”。

信令信道 和 媒体信道 是通讯中的两个不同的概念：

* 当你呼叫你的朋友的时候，你的手机首先会向你朋友的手机发送呼叫请求。然后，如果你的朋友接听电话，它将向您的手机发送接听电话响应。这个过程发生在信令信道上。

* 在你的设备收到接受响应后，你可以听到你的朋友的声音，这发生在 媒体信道上。 WebRTC 技术遵循了和其他通讯技术一样的方法。

下图是 信令信道(Signalling) 和 媒体信道(media) 的示例图：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220112174210.gif)

WebRTC 负责媒体信道中的数据传输，它会让应用程序去处理信令信道。

再来看一张图，你在 Device-1 上的应用程序会调用 WebRTC 的 API 并向 Device-2 发送请求。然后 Device-2 也应该做同样的事情：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220112174815.png)

到此为止，我们对 WebRTC 有了一个简单的认识，在后面的文章里，将会详细的介绍 WebRTC 相关内容，敬请期待！

---

> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://mobiledevweekly.com/link/117731/web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/mobile_dev_weekly/382/webrtc.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)