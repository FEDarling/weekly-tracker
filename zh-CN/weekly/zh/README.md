---
title: 'React Status #271'
date: '2022-01-26'
categories:
  - 'React Status'
publish: true
---

🗓 我们回来了并且准备迎接 React 的又一个精彩的一年(不过我们还是会先快速回顾一下 React Conf 2021). React 18 即将到来，这真是太激动人心了！

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

## React Status

⚛️ 这是每周 React 新闻文刊, _每周三_.

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/chkepxfwyol46ieebmis.jpg)

▶  [React Conf 2021 概述](https://react.statuscode.com/link/118282/web "reactjs.org") — React Conf 在 2021 年首次发布，这是一个非常棒的总结，其中包括了所有的演讲视频，以及你需要去了解的原因。[包括](https://react.statuscode.com/link/118283/web) 并发状态, Suspense , server components (服务器端组件), React Native 等。

[`useEffect` 可视化教程](./a_visual_guide_to_useEffect.md) — 我们已经介绍了作者的 _Visual Guide to React Rendering_ 前几个系列（比如 [useMemo](https://react.statuscode.com/link/118285/web) and [Props](https://react.statuscode.com/link/118286/web) ）现在他转移注意力到了 `useEffect`。对于视觉型读者来说，作者这种通过一系列的 gif 动画来说明这些概念的方式是非常聪明且有效的。 这里还有一篇 [First-class Function 可视化介绍](https://react.statuscode.com/link/118287/web)

[![](https://copm.s3.amazonaws.com/c195ee88.jpg)](https://react.statuscode.com/link/118288/web)

[来自 David Khourshid 的带有 XState 的 State Machines 新课程](https://react.statuscode.com/link/118288/web "frontendmasters.com") — 如果你需要构建一个大型 JavaScript 程序并且想要规避一些奇怪的边界问题，那么你可能需要学习一下 state machine 。请多花费时间在提高程序的健壮性和灵敏性上。

[Relay 13 Released: 一个构建数据驱动 React 应用框架](https://react.statuscode.com/link/118289/web "github.com") — 这是一种可以避免在 React 应用中使用命令式 API 获取数据的方法。你可以使用 GraphQL 定义数据需求，剩下的工作交由 Relay 完成。[新的 Relay 编译器](https://react.statuscode.com/link/118366/web) 是这个版本的重要组成部分。

[React 项目结构](https://react.statuscode.com/link/118290/web "blog.testdouble.com") — 作者认为项目中 `src` 的目录结构应该更加标准化，类似于 _Ruby on Rails_ 所采取的方法。本文是他使目录更加规范与标准的一些建议。

[使用 Watchables 来实现 React 项目的实时反应](https://react.statuscode.com/link/118291/web "www.shortwave.com") — [Shortwave](https://react.statuscode.com/link/118292/web) 创建开源库的动力是为了解决一个小而棘手的需求问题：使用户不需要刷新就能直接看到邮箱的更新。本文描述了它的使用以及在领域之外的潜在应用。

[我们曾经真正使用过的两个自定义 React Hooks](https://react.statuscode.com/link/118299/web)

[如何避免不必要的状态更新导致重新渲染](https://react.statuscode.com/link/118297/web)

[反思 React 中的 Modals 管理](https://react.statuscode.com/link/118301/web)

[React 和 Vue 的 computed 属性比较](https://react.statuscode.com/link/118302/web)

## 🛠  代码 & 工具

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/zhxndq6iavr0dehtxv4y.jpg)

[react-tree-graph: 呈现 SVG 树](https://react.statuscode.com/link/118303/web "jpb12.github.io") — 这是树组件的第七次发布。请查看 [demo](https://react.statuscode.com/link/118304/web) 以及其他[示例](https://react.statuscode.com/link/118305/web)。

[React-Grid-Layout](https://react.statuscode.com/link/118306/web "github.com") — 可拖拽的网格组件，类似于 [Packery](https://react.statuscode.com/link/118307/web) 或者 [Gridster](https://react.statuscode.com/link/118308/web)。 [展示 demo](https://react.statuscode.com/link/118309/web) 以及一系列 [重要 demos](https://react.statuscode.com/link/118310/web) 证明了它的能力。

[使用 ReactJS 、Nivo 和 InfluxDB 使数据可视化变得容易](https://react.statuscode.com/link/118311/web "www.influxdata.com")

[Elf: '具有魔法' 的反应状态管理 ?](https://react.statuscode.com/link/118312/web "github.com") — React 状态管理空间中的另一个入口，这个人声称拥有 [“magical powers”](https://react.statuscode.com/link/118313/web) ！ (说句公道话，商标也很可爱) 在 [StackBlitz](https://react.statuscode.com/link/118315/web) 上的 [互动 demo](https://react.statuscode.com/link/118314/web) 可能能帮助你判断事实是否如此。

[ActiveMDX：更简单的复用和协作开发的文档](https://react.statuscode.com/link/118316/web "active-mdx.soederpop.com") — 对于任何依赖于准确和最新技术文档的领域(如软件开发)，一个典型的痛点就是如何保持各种可复用的内容块是最新的。基于 [MDX](https://react.statuscode.com/link/118317/web)， 这个库承诺能够随着源文档内容的发展保持文档的同步。

[Markdown Editor 3.9：更简单且富有动力的 Markdown 预览编辑器](https://react.statuscode.com/link/118318/web)

[Rendition：Figma 如何一键反应？](https://react.statuscode.com/link/118319/web)

[use-cannon 4.5：面向于 react-three-fiber 的基础 Hooks](https://react.statuscode.com/link/118320/web)

## ⚡️ 快览:

-   [Reacord](https://react.statuscode.com/link/118321/web) — 使用 React 和 Discord API 创建交互式的 Discord 消息。
-   [react-grid-heatmap](https://react.statuscode.com/link/118322/web) — 流行的[热力图](https://react.statuscode.com/link/118323/web)数据可视化。
-   [react-use-focus-trap](https://react.statuscode.com/link/118324/web) — 是否曾通过一个 Modal 点击 Tab 但是找不到返回的方式？
-   [react-query-helper](https://react.statuscode.com/link/118325/web) — 使 [React Query](https://react.statuscode.com/link/118326/web) 变得更加简单和容易。
-   [react-google-calendar-api](https://react.statuscode.com/link/118327/web) — 将您的应用程序与谷歌日历集成。

## 🥦  有关健康..

[Calories-In：新的一年, 新的自己？](https://react.statuscode.com/link/118328/web "github.com") — 常年坚持新年决心的人在某种程度上通常是通过吃得更好来实现的减肥或改善健康。因此，还有什么能比 React 膳食计划更好的方式来迎接 2022 年的到来呢？ 由 React Status 阅读器提交，你可以查看 [实时版本](https://react.statuscode.com/link/118329/web) 或者观看 [视频演示](https://react.statuscode.com/link/118330/web)。

---

> - 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> - [查看原文](https://react.statuscode.com/link/118281/web)对比阅读
> - 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/react_status/271/README.md)
> - 译者：[LilyChenlin](https://github.com/LilyChenlin)
> - 校对者：[daodaolee](https://github.com/daodaolee)
