---
title: 'JavaScript Weekly #554'
date: '2022-02-01'
categories: ['JavaScript Weekly']
publish: true
---

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/chakx4rmc7iv0d3wob8d.jpg)

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

[Visual Studio Code 2021 年 8 月更新](https://javascriptweekly.com/link/113306/web 'code.visualstudio.com') — 新功能包括自动语言检测、内置括号着色（通过 `editor.bracketPairColorization.enabled` 启用）、改进了终端字形渲染、JS/TS 的内联提示参数名称和类型，也改进了异步函数和 Node.js 内部的调试步骤。

[ES2022 特性：类静态初始化块](./es2022_feature_class_static_initialization_blocks.md) — 这个提议处于包含在 ES2022 的第 4 阶段，看起来也不觉得 JavaScript 的这种写法偏向于 Java。

💡 像这样 ↑ ？ Hemanth HM 汇总了 [TC39 第 85 次会议](https://javascriptweekly.com/link/113309/web) 在未来（潜在）JavaScript 新特性的更新，包括 [hack pipe](https://javascriptweekly.com/link/113310/web) 运算符和 [Array.fromSync](https://javascriptweekly.com/link/113311/web)。

![](https://copm.s3.amazonaws.com/d99a6231.png)

[使用 Sourcegraph 在开源宇宙中搜索](https://javascriptweekly.com/link/113286/web 'sourcegraph.com') — Sourcegraph 可以在 GitHub 和 GitLab 的超过 100 万个开源存储库以及您自己的公共和私有（公共测试版）存储库上使用，无需安装。 Sourcegraph 让搜索、发现和阅览开源项目变得更加容易。

[Electron 14.0.0 发布](https://javascriptweekly.com/link/113312/web 'www.electronjs.org') — 流行的跨平台桌面应用程序框架的最新版本已发布。预计稳定发布还有八周，因此 Electron 15 将在三周后发布。现在您可以获得 Chromium 93、Node.js 14.17 和 V8 9.3 支持、实验性 cookie 加密支持和一些删除（例如作为 [远程模块](https://javascriptweekly.com/link/113313/web)）。

[Neutralino 2.7：便携、轻量级的桌面应用程序框架](https://javascriptweekly.com/link/113314/web 'neutralino.js.org') — 想想 Electron，它没有在每个应用程序中都包含 Chromium 发行版，而是使用本地平台的内置“webview”。也就是说它会更小、更快，虽然您得必须了解每个 webview 的兼容性。

## **快览**

-   Node.js v12 和 v14 [已更新](https://javascriptweekly.com/link/113315/web)，以修复一些与路径和符号链接相关的漏洞。v16 很棒！
-   一组用于前端开发概念的 [交互式学习](https://javascriptweekly.com/link/113316/web) 工具。
-   [讲述了 Twitter 的 “div soup” 和 “uglified” CSS](https://javascriptweekly.com/link/113317/web) 以及如何使用 React Native for Web。
-   开发人员创建了一种 [概念验证反调试技术](https://javascriptweekly.com/link/113318/web)，JS 代码可以检测到它正在被调试并更改执行流程。

## **新特性:**

[socket.io 4.2.0](https://javascriptweekly.com/link/113287/web) — 实时通讯库。  
[Relay 12.0](https://javascriptweekly.com/link/113288/web) — 数据驱动的 React 应用程序框架。
[OpenPGP.js 5.0.0](https://javascriptweekly.com/link/113289/web) — JS 中的 OpenPGP 实现。
[on-change 4.0](https://javascriptweekly.com/link/113290/web) — 观察对象和数组的变化。
[AdonisJS August Release](https://javascriptweekly.com/link/113319/web) — 功能齐全的 Node.js Web 应用程序框架。

## 📖  文章，意见 & 教程

[我构建了一个 30 万美元/年的 Vue.js 组件库](https://javascriptweekly.com/link/113320/web 'www.starterstory.com') — 本篇没有太多技术内容，而是对 [Vuetify](https://javascriptweekly.com/link/113321/web)（一个 Vue.js UI 库）的创建者进行了一次有趣的（并且可能是鼓舞人心的！）采访，讲述了他如何创建、维护项目并因此获得收入。

[使用树数据结构](https://javascriptweekly.com/link/113322/web 'stackfull.dev') — 遍历的基础：广度优先和深度优先。完整的视觉效果可帮助您更快的构思。

[使用 AWS Lambda 构建 Serverless GIF 生成器](https://javascriptweekly.com/link/113323/web 'aws.amazon.com') — 假设您想托管视频并希望将 GIF 动画显示为 UI 中的一种预览功能。从视频生成此类 GIF 文件是一种计算密集型操作，您可以使用 AWS Lambda 之类的工具来创建可扩展的服务来处理它。

[构建一个 React 聊天应用程序](https://javascriptweekly.com/link/113294/web 'getstream.io') — 通过几个简单的步骤，我们将向您展示如何使用我们的 React 组件库构建一个聊天应用程序。

[每个开发人员都应该避免的常见“npm”错误](https://javascriptweekly.com/link/113324/web 'blog.bitsrc.io') — 了解如何在管理依赖项、发布包等时避免常见错误。

[Svelte 应用程序中的状态管理](https://javascriptweekly.com/link/113325/web 'auth0.com') — 如何使用 Svelte 状态管理存储来管理 Svelte 应用程序中的状态。

[为什么 Electron 应用程序很棒](https://javascriptweekly.com/link/113326/web 'nielsleenheer.com') — 虽然 Niels 接受 Electron 的很多批评，但他的用户并不关心，他说你也不应该关心。

[Next.js 应用程序中的状态管理](https://javascriptweekly.com/link/113327/web 'www.smashingmagazine.com') — 在 Next.js 应用程序中管理状态会很棘手。本文将着眼于一些模式，避免一些复杂操作和 “provider 地狱”。

[React Context 和 `useContext()` Hook 指南](https://javascriptweekly.com/link/113328/web)

[JavaScript 中的内存异步函数](https://javascriptweekly.com/link/113329/web)

## 🛠  代码 & 工具

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/eaddyuhb98c2dzo607ou.jpg)

[TypeIt：一个多功能的假装打字效果实用程序](https://javascriptweekly.com/link/113330/web 'typeitjs.com') — 自称是 “地球上最通用的 JavaScript 打字机实用程序”。有易用的 API，但请注意，虽然它对个人/OSS 使用是免费的，但您需要支付（少量）商业许可证。

[Stitches 1.0：现代样式库](https://javascriptweekly.com/link/113331/web 'stitches.dev') — 另一种 CSS-in-JS 解决方案，它提供了高性能、SSR、主题、关键路径 CSS、直观的 API 等等。

[使用开源 Unikernel 要比 Linux 运行得更快、更安全](https://javascriptweekly.com/link/113296/web) — 无需操作和云锁定即可部署。在 Google 上以 2 倍的速度运行。在 AWS 上以 3 倍的速度运行并在 10 秒内完成部署。

[smartcrop.js：内容感知图像裁剪](https://javascriptweekly.com/link/113332/web 'github.com') — 给定一张图像，它可以对图像的 “最佳” 部分进行裁剪，且运行在浏览器和 Node.js 中。

[Roadroller：JavaScript 代码的重量级 “破碎机”](https://javascriptweekly.com/link/113333/web 'lifthrasiir.github.io') — 该工具是为了生成演示风格的编码而不是构建应用程序，其目标是将 JavaScript 代码压缩/缩小到尽可能小的尺寸，[GitHub 存储库](https://javascriptweekly.com/link/113334/web)。

[Crank.js：使用 Functions、Promises 和 Generators 编写 JSX 驱动的组件](https://javascriptweekly.com/link/113335/web 'crank.js.org') — 您可能喜欢直接在 JavaScript 中编写类似 HTML 的代码的常用 JSX 写法，但是所有组件也都只是 Functions 或 Generators。 [查看一些示例代码](https://javascriptweekly.com/link/113336/web)。

[在 SnykCon 上宣布 JavaScript 安全会议 | 免费注册](https://javascriptweekly.com/link/113295/web 'snyk.io')

[parse-domain：将主机名拆分为多个部分](https://javascriptweekly.com/link/113337/web 'github.com') — 给定主机名，提取子域、域和顶级域，包括 [公共后缀列表](https://javascriptweekly.com/link/113338/web) 中的 “有效” 顶级域。

[Mafs：用于数学可视化的 React 组件](https://javascriptweekly.com/link/113339/web 'mafs.dev') — 一套较完善的的复杂数学可视化组件。它有一套不错的 [“你需要知道的” 指南](https://javascriptweekly.com/link/113340/web) 支持，其中包括一个可以让您计划自己的 [亚轨道太空飞行](suborbital spaceflight)的指南。

[bundle：一个快速检查 npm 包大小的检查器](https://javascriptweekly.com/link/113342/web 'bundle.js.org') — 输入包名称，然后点击 “run” 按钮，此工具将为您提供压缩、捆绑和展示 gzip 压缩后的包大小。

---

> -   译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> -   [查看原文](https://javascriptweekly.com/link/113285/web)对比阅读
> -   发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/554/README.md)
> -   译者：[daodaolee](https://github.com/daodaolee)
> -   校对者：[daodaolee](https://github.com/daodaolee)
