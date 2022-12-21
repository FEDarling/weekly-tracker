(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{763:function(e,r,t){"use strict";t.r(r);var a=t(10),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("我经常在社交媒体或者评论区看到有人问：”什么是最好的 node.js 框架“，得到的回答往往都非常主观， 一些开发者甚至还会为此争论不休。如果你正在为你的项目找一个合适的 node.js 框架。那这些回答基本对你没啥帮助。")]),e._v(" "),t("p",[e._v("大量可供选择的框架，以及这些偏主观的看法，会让你更难抉择。基于这些框架的功能特性列表来进行选择也会让你很头疼, 而且这些特点也只是框架的一部分描述而已。 如果你有一个清晰的清单可以用于评估和选择 Node.js 框架，那就太棒了。")]),e._v(" "),t("p",[e._v("我无法为你提供详尽的清单，因为每个项目、团队和开发人员都有不同的需求。不过我确实有一些指导方针可以帮助你思考在选择 Node.js 框架时什么对你来说很重要。")]),e._v(" "),t("blockquote",[t("p",[e._v("感谢以下几位朋友，他们"),t("a",{attrs:{href:"https://twitter.com/simonplend/status/1438479239041404932",target:"_blank",rel:"noopener noreferrer"}},[e._v("在 Twitter "),t("OutboundLink")],1),e._v("分享了他们在选择 Node.js 框架时所考虑的因素："),t("a",{attrs:{href:"https://twitter.com/i_like_robots",target:"_blank",rel:"noopener noreferrer"}},[e._v("Matt Hinchcliffe"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://twitter.com/AlexWilsonV1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alex Wilson"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://twitter.com/_aantipov",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alexey Antipov"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://twitter.com/58bits",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anthony Bouch"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"你的具体使用情况如何"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你的具体使用情况如何"}},[e._v("#")]),e._v(" 你的具体使用情况如何?")]),e._v(" "),t("p",[e._v("一切从实际情况出发。在开始寻找一个框架及其功能之前，请先明确的需求。这将帮助你确定框架是否旨在支持你预期的功能。要是没有提前明确好的话，你可能会发现自己在构建应用程序时与框架有冲突。")]),e._v(" "),t("p",[e._v("以下是一些你可能需要考虑的情况:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("全栈应用与 API")]),e._v("。你的应用程序是提供 HTML 页面还是发送 JSON 响应的 API？如果它是一个 API，它是基于"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST"),t("OutboundLink")],1),e._v("还是基于"),t("a",{attrs:{href:"https://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GraphQL"),t("OutboundLink")],1),e._v("？")]),e._v(" "),t("li",[t("strong",[e._v("服务端渲染")]),e._v("。你打算在你的项目里使用 React 或 Vue 组件吗？一些框架提供了帮助程序来简化在你的项目里集成这些框架的过程。")]),e._v(" "),t("li",[t("strong",[e._v("Serverless")]),e._v("。你是否会将你的应用程序部署到 Serverless 平台？对于 AWS Lambda 等 Serverless 平台来说，"),t("a",{attrs:{href:"https://www.techtalksbyanvita.com/post/serverless-cold-starts-can-we-mitigate-these",target:"_blank",rel:"noopener noreferrer"}},[e._v("冷启动时间"),t("OutboundLink")],1),e._v("真的很重要。如果框架在处理请求之前需要进行大量初始化，则可能会对你的请求响应时间产生很大影响。")]),e._v(" "),t("li",[t("strong",[e._v("即时通讯")]),e._v("。如果你想使用 WebSockets，请寻找内置框架支持，或与框架集成的社区维护库。")]),e._v(" "),t("li",[t("strong",[e._v("Typescript")]),e._v("。你想用"),t("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript"),t("OutboundLink")],1),e._v("开发项目吗？有些框架只为 TypeScript 设计，有些框架提供了类型定义，而其他的只提供由社区维护的第三方类型。即使你不打算用 TypeScript 编写代码，你的代码编辑器也可能会根据框架的类型定义为你提供有用的提示。")])]),e._v(" "),t("h2",{attrs:{id:"框架样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架样式"}},[e._v("#")]),e._v(" 框架样式")]),e._v(" "),t("p",[e._v("有些开发者喜欢“开箱即用”的框架，有的人就不喜欢。“开箱即用”指的是 HTTP 请求/响应处理和路由之外的功能。这可能包括验证、日志记录、身份验证、数据库抽象和依赖注入等功能。此类别中的框架往往对如何构建项目做了限制。它们要求你以特定方式进行开发，以便你可以利用它们提供的功能。")]),e._v(" "),t("p",[e._v("而另一个极端是你会发现一些最简单框架。它们倾向于只提供 HTTP 请求/响应处理、路由处理，不集成其他功能。他们并不是特别固执己见，并为你提供根据需要自由构建项目的权利。由于它们提供的“开箱即用”功能数量有限，因此你需要选择并集成其他的包以提供其他需要的功能。")]),e._v(" "),t("p",[e._v("有框架就比较均衡。他们有自己的构思并提供一些除基础功能外附加功能，例如日志记录和验证。你选择的框架风格可以通过我上面提到的用例来指导。这也可能取决于你的个人喜好（或你团队的喜好）。你可能还没有任何偏好，但如果你注意每个框架的风格，将会有所帮助。")]),e._v(" "),t("h2",{attrs:{id:"支持-promises-和-async-await"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持-promises-和-async-await"}},[e._v("#")]),e._v(" 支持 promises 和 async / await")]),e._v(" "),t("p",[e._v("随着 Node.js 和"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/ECMAScript",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMAScript 的"),t("OutboundLink")],1),e._v("发展，围绕"),t("a",{attrs:{href:"https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks",target:"_blank",rel:"noopener noreferrer"}},[e._v("回调模式"),t("OutboundLink")],1),e._v("设计的应用程序已经逐渐消失。相反，我们现在可以愉快地使用 promise 和 async/await 进行开发。这意味着 Node.js 框架具有 promise 化很重要。它们应该允许你编写 async 路由处理函数，并为你安全地处理未捕获的 promise rejections。")]),e._v(" "),t("p",[e._v("如果框架不满足这些基本要求，则会增加应用程序中内存泄漏或崩溃的风险。我写了"),t("a",{attrs:{href:"https://simonplend.com/are-you-using-promises-and-async-await-safely-in-node-js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("一篇深入的文章"),t("OutboundLink")],1),e._v("，解释了为什么这很重要以及需要注意什么。")]),e._v(" "),t("h2",{attrs:{id:"文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[e._v("#")]),e._v(" 文档")]),e._v(" "),t("p",[e._v("首先，你找的框架有文档吗？！如果没有文档，你可能很难使用框架开发项目。要避免使用没有文档的框架。\n一旦你确定框架是有文档的，请尝试了解文档质量。并非所有文档都是一样的，因此需要考虑以下几点：")]),e._v(" "),t("ul",[t("li",[e._v("你可以轻松地使用它吗？文档的结构真的很重要。如果有内置搜索功能，它也会有很大帮助。")]),e._v(" "),t("li",[e._v("这对你有意义吗？可能有很多文档，但如果它写得不好，它不会有太大帮助。")]),e._v(" "),t("li",[e._v("你认为你可以在开发时用上文档吗？阅读和理解如何做某事是一回事，而在构建真正的项目时自己应用它则完全是另一回事。")])]),e._v(" "),t("h2",{attrs:{id:"演示实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#演示实例"}},[e._v("#")]),e._v(" 演示实例")]),e._v(" "),t("p",[e._v("学习使用框架时，阅读长篇大论的文档以可能会让你一时不知所措。如果有可用的实际示例向你展示如何使用它，一旦你对框架的功能有了大致的了解，那对于你上手框架来说很有帮助。“hello world”示例可能会向你展示如何使用框架的基础知识，但如果你想做更复杂的事情，这通常没有多大帮助。实际示例将展示你可能需要解决的实际问题的解决方案。理想情况下，他们还将展示使用该特定框架的“最佳实践”。")]),e._v(" "),t("p",[e._v("你可能会在框架文档中或 examples 在项目的 GitHub 存储库中的文件夹中找到实际示例。一些框架甚至在 GitHub 上有完整的演示示例，你可以浏览、运行和挑选它们。\n了解创建框架的人如何使用它是学习如何自己使用它的绝佳方式。不仅仅是通过文档磨练你的方式，实际示例将帮助你使用新框架加快学习曲线。")]),e._v(" "),t("h2",{attrs:{id:"社区和生态系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#社区和生态系统"}},[e._v("#")]),e._v(" 社区和生态系统")]),e._v(" "),t("p",[e._v("围绕框架存在的社区确实很重要。当遇到莫名其妙的 bug 时，最重要的是知道可以去哪里寻求帮助。看看你正在考虑的框架是否有评论区、Slack 或 Discord 服务器。深入了解并感受社区。那里的人看起来热情和支持吗？他们乐于接受贡献吗？围绕框架的社区在第一天对你来说可能并不重要，但从长远来看，你肯定会需要它。")]),e._v(" "),t("p",[e._v("框架流行度并不是一切，但你将围绕它构建整个项目。因此看看框架当前其他开发者的使用情况特别重要。如果一个框架被广泛采用，会更容易找到一些周边的库（例如中间件或插件）。在你的项目中将一个库替换为另一个库可能相当简单，但框架通常不是这种情况。")]),e._v(" "),t("p",[e._v("GitHub 上 star 通常被引用为受欢迎程度的指标，但我认为将它们视为普遍兴趣而不是实际使用情况的衡量标准更好。确定框架是否有其他开发者使用的一种简单方法是查看其包下载数。")]),e._v(" "),t("p",[e._v("它们不能用来衡量有多少项目在使用一个框架——许多框架与其他库捆绑在一起但没有被使用——但它们可以让你了解一个框架是否被广泛使用。你可以在包的 npm 页面上查看每周下载量，"),t("a",{attrs:{href:"https://www.npmtrends.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm 趋势"),t("OutboundLink")],1),e._v("会显示随时间推移的包下载量。它还允许你比较包。")]),e._v(" "),t("h2",{attrs:{id:"系统健壮性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统健壮性"}},[e._v("#")]),e._v(" 系统健壮性")]),e._v(" "),t("p",[e._v("在选择用于构建项目的框架时，你肯定希望能够保证项目能正常运行，并且在可预见的未来将继续得到维护。以下是一些可以用来评估的指标：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Releases")]),e._v("。一些开发人员认为，如果框架已经“功能完整”，那它不需要新版本了，但安全更新和错误修复是必要的。框架（或其依赖项之一）中始终存在重大漏洞的可能性。避免任何未维护且不再发布版本的框架是明智的。")]),e._v(" "),t("li",[t("strong",[e._v("issues 积极度")]),e._v("。维护人员最近有很多问题没有回复说明这个项目可能没有在维护了。另一方面，如果根本没有人提问题，则可能表明该框架的使用率非常低。")]),e._v(" "),t("li",[e._v("拉取请求。一个持续维护的项目通常会有一些最近的 pull request。许多旧的或者不活跃的的突然开放 pull request，可能表明该项目不再被维护。")]),e._v(" "),t("li",[t("strong",[e._v("贡献者")]),e._v("。如果一个框架只有一两个贡献者，则可能表明它周围没有太多社区。如果这些贡献者退出项目，它也会对该框架的长期维护产生风险。一个可持续的项目将有许多贡献者，添加大大小小的变化。")]),e._v(" "),t("li",[t("strong",[e._v("依赖图表")]),e._v("。一个框架的依赖越多，风险就越大，而且还会使排查项目中的问题变得更加困难。你不需要找到一个零依赖的框架，但你应该对一个框架的依赖图有一定的了解。工具"),t("a",{attrs:{href:"https://npmgraph.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm graph"),t("OutboundLink")],1),e._v("可以为你提供出色的概览。")])]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("事实证明，在选择 Node.js 框架时确实需要考虑很多事情。然而，在评估框架时，你可能要问自己最后一件事：你觉得你会喜欢用它开发项目吗？就我个人而言，如果我不喜欢使用这个框架，那么每次我需要使用它都会成为一件苦差事。最佳的选择是一个满足你的要求并且你喜欢使用的框架。\n选择 Node.js 框架可能会很棘手，但希望我分享的指南将帮助你完善你的框架选择清单。祝愿你能为你的项目选择一个“最佳的”框架！")]),e._v(" "),t("hr"),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("译文出自："),t("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker",target:"_blank",rel:"noopener noreferrer"}},[e._v("weekly-tracker"),t("OutboundLink")],1),e._v(" 项目，期待你的加入！")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://simonplend.com/guidelines-for-choosing-a-node-js-framework/#conclusion",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看原文"),t("OutboundLink")],1),e._v("对比阅读")]),e._v(" "),t("li",[e._v("发现错误？"),t("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/419/Nodejs_Framework_Selection_Guide.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("提交 PR"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("译者："),t("a",{attrs:{href:"https://github.com/oil-oil",target:"_blank",rel:"noopener noreferrer"}},[e._v("oil-oil"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("校对者："),t("a",{attrs:{href:"https://github.com/daodaolee",target:"_blank",rel:"noopener noreferrer"}},[e._v("daodaolee"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=n.exports}}]);