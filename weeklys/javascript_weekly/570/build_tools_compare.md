---
title: 新一代构建工具对比
date: '2021-12-24'
tags:
 - JavaScript Weekly
---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://css-tricks.com/comparing-the-new-generation-of-build-tools/)对比阅读
> * 译文已备份[永不失联]()
> * 译者：
> * 校对者：

在过去的一年里，一系列新的开发工具拔地而起，包括但不限于 webpack、Babel、Rollup、Parcel、create-react-app等，在前端开发配合这方面也很友好。这些新的工具目标和功能上各有千秋，每个工具都有不同的目标和功能，但都有一个共同的目标：提高开发人员的使用体验。

其实，其实我想对他们每一个都评估一下，概述一下他们做了什么，我们为什么需要他们，以及他们的用例。但是后来我意识到了这样的比较总会有点不公平。比如，Snowpack 和 Vite 大多会在后台使用 esbuild 来完成某些任务。我们应该更多更好地了解当下的任务情况，才可以在我们需要它们的时候选择最合适的。

当然，关于这些新的构建工具，已经有了一大堆文章来介绍它们，这里我推荐几集ShopTalk Show网站的资源供大家学习：[454-Vite](https://shoptalkshow.com/454/)、[448-wmr和Snowpack的作者](https://shoptalkshow.com/448/)。

## 为什么会产生这么多的工具？

在某种程度上，我认为这些工具的产生原因是因为 JavaScript 工具有时候很不方便——这篇[关于早在 2016 年学习 JavaScript 的文章](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)提出了一些痛点。

Snowpack、Vite 和 wmr 都是用浏览器中的[原生 JavaScript Modules](https://css-tricks.com/life-with-esm/)写的。早在 2018 年，Firefox 60 就默认启用了 ECMAScript 2015 模块。从那时起，所有主要的浏览器引擎都支持原生 JavaScript Modules。 Node.js 还在 2019 年 11 月发布了原生 JavaScript Modules。到现在，我们也仍在探索 JavaScript Modules 更多的特性。

## 这些与现有的工具有何不同？

无论我们使用 webpack、Rollup 还是 Parcel 当做开发环境的服务，这些工具都会将我们的整个代码库从我们的源代码和一个 node_modules 文件夹中打包，通过构建过程运行一些代码（像 Babel、TypeScript 或 PostCSS），然后将打包后的代码放到我们的浏览器上运行。提到的这些工作我们都需要去做，如果代码量大的话，就算加入缓存和优化策略。

Snowpack、Vite 和 wmr 服务却不这么做。相反，它们会等到浏览器找到 import 语句并对 modules 发出 HTTP 请求。只有在发出此请求后，这些工具才会将转换 所请求的模块 和 `import module tree` 中的任何子节点，然后将它们提供给浏览器。。这样速度会很快，因为在推送到开发环境服务的过程中工作量减少了。

## 做一个简单的总结

首先它们都支持以下开箱即用的功能（在不同程度上）：

* 支持原生 JavaScript modules
* 都可以用 TypeScript 编译
* 支持 JSX
* 都有可扩展性的插件 API
* 都内置了开发环境的服务
* 支持CSS bundle 和 CSS-in-JS 库

这些工具都可以将 TypeScript 编译成 JavaScript，即使存在类型错误也会这样做。如果需要正确的类型检查，您需要安装 TypeScript 并在根 JavaScript 文件上运行 tsc --noEmit，或者使用编辑器插件来监视类型错误。

下面来这些工具逐一分析吧！

## esbuild

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220107151203.png)

esbuild 由 Evan Wallace（Figma 的 CTO）创建。它的主要特点是它提供的构建步骤比基于 Node 的打包器快 10 倍-100 倍（根据它们自己的基准）。尽管它没有提供类似 create-react-app 包的依赖支持，但是有越来越多的 esbuild 使用者做了这些事情，包括但不限于 create-react-app-esbuild、estrella 和 Snowpack。

esbuild 出生的时间比较晚。它还没有达到 1.0 版本，目前还没有完全准备好投入生产使用 — 但也不远了。

### 使用场景

esbuild 是打包器中的一个新的创始者。在 esbuild 和 node bundlers 之间的速度差异成倍增加的大型代码库中，它的特点特别明显。当 esbuild 版本到 1.0 时，它就可以在大型生产环境中大显身手，并为团队节省大量等待构建完成的时间。

### 设置

我想用命令行的方式在 esbuild 中启动一个 React 项目：npm 安装 esbuild、React 和 ReactDOM。我创建了一个 `src/app.jsx` 文件和一个` dist/index.html` 文件。然后，我使用以下命令将应用程序编译成一个 `dist/bundle.js` 文件：

```sh
./node_modules/.bin/esbuild src/app.jsx --bundle --platform=browser --outfile=dist/bundle.js
```

当我在浏览器打开 index.html 时，白屏了，并且报了一个错：“Uncaught ReferenceError: process is not defined”。这就是不仔细看文档会引发的问题，它在构建 React 时需要一个额外的参数：

```sh
--define:process.env.NODE_ENV=\"production\"
```

或者，也可以加转义符号：

```sh
--define:process.env.NODE_ENV=\\\"production\\\"
```

对于需要环境变量参数的库，都需要此定义参数。 Vue 2.0 当然也需要， Preact则不需要。

### 用法

esbuild 为开发环境服务提供了 `--serve` 选项。该配置绕过了文件系统并直接从内存中提供模块，确保浏览器不会拉取旧版本的模块。但是，它不包括实时/热重新加载。这时候我们可以用一下 servor 这个包来保存我们的更改：

```sh
npm install servor --save-dev
```

然后我们可以使用 esbuild Javascript API 作为服务器启动，同时运行 esbuild 的 watch 模式。在项目的根目录创建一个名为 watch.js 的文件：

```js
// watch.js
const esbuild = require("esbuild");
const servor = require("servor");

esbuild.build({
  // 这里配置 esbuild
  entryPoints: ["src/app.jsx"],
  outdir: "dist",
  define: { "process.env.NODE_ENV": '"production"' },
  watch: true,
});

async function serve(){
  console.log("running server from: http://localhost:8080/");
  await servor({
    // 这里配置服务器
    browser:true,
    root: "dist",
    port: 8080,
  });
}

serve();
```

现在在命令行中运行 node watch.js。目前为止，可以看到我们的改动，但是它不会为我们提供热模块替换或快速刷新（即不会保留您的客户端状态）。

如果你需要一个带有实时重新加载和一些 React 默认值的预配置版本的 esbuild，可以看下这个[仓库](https://github.com/Elliotclyde/esbuild-react-starter)。

### 支持的文件类型

esbuild 可以在 JavaScript 中导入 CSS。它会把 CSS 编译到和主要输出 JavaScript 文件同名的目录下。默认情况下，它还可以捆绑 CSS @import 语句，不过目前不支持 CSS Modules。

现在，esbuild 的[插件](https://github.com/esbuild/community-plugins)越来越多了，比如 [Vue SFC](https://github.com/few-far/esbuild-vue-plugin)插件和 [Svelte 组件](https://github.com/EMH333/esbuild-svelte)插件。

它还可以在 JavaScript 中导入图片，可以把它们转换为URL 或将它们复制到输出文件夹中。默认情况下不启用改功能，但可以在 esbuild 配置中添加以下内容来启用任一选项：

```json
loader: { '.png': 'dataurl' } // Converts to data url in JS bundle
loader: { '.png': 'file' } // Copies to output folder
```

代码拆分是一项正在增加的功能，一般会以 ESM 格式输出。还有就是，esbuild 默认内置了 tree-shaking，并且无法关闭。

### 生产环境

在 esbuild 命令中使用 “minify” 和 “bundle” 配置不会创建类似于 Rollup/Terser 那种小的 bundle。这是因为 esbuild 牺牲了一些包的大小优化。不过这些可以忽略不计。

### 总结

| **esbuild**                 |         |
| :-------------------------- | ------- |
| 支持多个前端框架模板配置    | ❌       |
| 支持热更新/替换开发环境服务 | ❌       |
| 流式引入                    | ❌       |
| 生产环境预配置              | ❌       |
| 自动 PostCSS 和预处理器转换 | ❌       |
| HTML转换                    | ❌       |
| 支持 Rollup                 | ❌       |
| 大小                        | 7.34 MB |

## Snowpack

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220107154604.png)

Snowpack 是 Skypack 和 Pika 的创建者的构建工具。它提供了一个很棒的开发环境服务，并以“[非捆绑开发](https://www.snowpack.dev/concepts/how-snowpack-works#unbundled-development)”理念创建。引用文档里的一句话：“你使用打包器是因为你想，而不是因为你需要。”

默认情况下，Snowpack 的构建步骤不会将文件捆绑到单个包中，而是提供在浏览器中运行的未捆绑的 esmodules。 esbuild 实际上是其中的作为依赖项，但它的想法是使用 JavaScript 模块，并且仅在需要时与 esbuild 捆绑。

Snowpack 有很棒的[文档](https://www.snowpack.dev/)，里面也包括了它与 JavaScript 框架一起使用的[指南](https://www.snowpack.dev/guides)，以及[一堆模板](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app)。看起来 Snowpack 将 Svelte 视为一等公民。实际上，我是从 Rich Harris 在 2020 年 Svelte 峰会上的“未来 Web 开发”演讲中第一次听说 Snowpack。也就是说，即将推出的 [SvelteKit 框架](https://svelte.dev/blog/whats-the-deal-with-sveltekit) 本来是由 Snowpack 提供支持的，但后来还是改用了 Vite。

### 使用场景

如果您喜欢非捆绑式部署，Snowpack 是一个不错的选择。

其次，我认为 Snowpack 是 esbuild 的一个很好的封装。如果您想尝试 esbuild，但又想要一个开发环境的服务和为前端框架预编译的模板，那么选择 Snowpack 不会出错。

就目前的情况而言，我认为 Snowpack 不是像 create-react-app 这样的零配置工具的最佳替代品。

### 设置

从命令行安装：

```sh
mkdir snowpackproject
cd snowpackproject
npm init #fill with defaults 
npm install snowpack
```

接着，在 package.json 中加入以下配置：

```js
// package.json
"scripts": {
  "start": "snowpack dev",
  "build": "snowpack build"
},
```

再创建一个配置文件：

```js
// Mac or Linux
touch snowpack.config.js
// Windows
new-item snowpack.config.js
```

将其粘贴到配置文件中：

```js
// snowpack.config.js
module.exports = {
  packageOptions: {
    "source": "remote",
  }
};
```

Source：远程启用[流式导入](https://www.snowpack.dev/guides/streaming-imports#how-streaming-imports-work)。流式导入可以跳过npm，直接进行cdn导入。

接下来，创建一个 index.html：

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">>
  <title>Snowpack streaming imports</title>
</head>
<body>
  <div id="root"></div>
  <!-- Note the type="module". This is important for JavaScript module imports. -->
  <script type="module" src="app.js"></script>
</body>
</html>
```

最后，我们将添加一个 app.jsx 文件：

```js
// app.jsx
import React from 'react'
import ReactDOM from 'react-dom'
const App = ()=>{
  return <h1>Welcome to Snowpack streaming imports!</h1>
}
ReactDOM.render(<App />,document.getElementById('root')); 0
```

请注意，我们没有在任何阶段 npm install React 或 ReactDOM。然后我们启动以下 Snowpack 开发环境服务：

```sh
./node_modules/.bin/snowpack dev
```

我们的程序仍然可以跑！

Snowpack 不是从 node_modules 文件夹中提取 npm 包，而是从 Skypack 中提取 npm 包，这是一个托管 npm 注册表的 CDN，并且它已预先优化为在浏览器中工作。然后，Snowpack 在 `./_snowpack/pkg URL` 中提供它。

### 用法

这和基于 Node/npm 的工作流程差别很大。实际上我们看到的是一个新的基于 CDN/JavaScript 模块的工作流。

但是，如果我们按原样运行我们的应用程序并打包，Snowpack 会抛出错误。这是因为它需要知道在构建时使用哪个版本的 React 和 ReactDOM。这种情况下，可以通过运行以下命令来自动创建 `snowpack.deps.json`，从而解决问题：

```sh
./node_modules/.bin/snowpack add react
./node_modules/.bin/snowpack add react-dom
```

这样不会从 npm 下载包，只会记录用于 Snowpack 构建的包的版本。

即使我们不使用流式导入，Snowpack开发环境服务也会将 node_modules 中的每个依赖关系捆绑成一个JavaScript文件，将这些文件转换为一个本地JavaScript模块，然后将其提供给浏览器。这意味着浏览器可以缓存这些脚本，只有在它们发生变化时才重新请求它们。开发环境服务在保存时自动刷新，但并不保留客户端的状态。所有来自节点的依赖似乎都能开箱即用~。

在 React 中保留客户端状态需要 [react-refresh](https://www.skypack.dev/view/@snowpack/plugin-react-refresh)，它需要一些自己的 Babel 依赖包，这还不算本身的默认配置项。这时候可以使用更强大的 React 模板。该模板引入了 react-refresh、Prettier、Chai 和 React 测试库，总共有 80 MB 的 Node 依赖包：

```sh
npx create-snowpack-app my-react-project --template @snowpack/app-template-react
```

### 支持的文件类型

支持 JSX，但同样，默认情况下仅支持 .jsx 文件。 Snowpack 会自动检测是使用 React 还是 Preact，并相应地决定使用哪个渲染函数进行 JSX 转换。然而，如果我们想进一步定制 JSX，我们需要通过他们的插件引入 Babel。还有一个 Snowpack 插件可用于 Vue 单文件组件，当然也可用于 Svelte 组件。此外，Snowpack 可以编译 TypeScript，但由于类型检查，我们也需要 TypeScript 插件。

CSS 可以导入到 JavaScript 中，并在运行时放入文档  `<head>`  中。也支持  `.module.css`  为扩展名的 CSS 模块的开箱即用般体验。
导入的 JSON 文件将被转换为 JavaScript module，并将对象默认导出。 Snowpack 会把图片复制到生产环境的文件夹中。根据其非捆绑式理念，Snowpack 不会将图片作为 URL 包含在捆绑包中。

### 生产环境

默认的 `snowpack build` 命令会将源文件结构复制到输出文件夹中。对于编译为 JavaScript 的文件（例如 TypeScript、JSX、JSON、.vue、.svelte），它会将每个单独的文件转换为 JavaScript module。

可以看出来这对生产环境不太友好，因为如果源代码被分成很多文件，它就会导致大量的请求。

但是，Snowpack 将 esbuild 作为依赖项，我们可以在 Snowpack 配置里添加“优化”参数来启用 esbuild ，从而捆绑、压缩和编译代码：

```js
// snowpack.config.js
module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};
```

这样会使用 esbuild 提供的优化功能，我们就可以获得与之前使用 esbuild 相同的构建。
由于 esbuild 还没有达到 1.0，Snowpack 建议使用 [webpack](https://www.npmjs.com/package/@snowpack/plugin-webpack) 或 [Rollup](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) 插件进行生产构建，两者都需要配置。

### 总结

Snowpack 目前有功能齐全的开发环境服务、详细的文档和易于上手的模板。

| **Snowpack**                |       |
| :-------------------------- | ----- |
| 支持多个前端框架模板配置    | ✅     |
| 支持热更新/替换开发环境服务 | ✅     |
| 流式引入                    | ✅     |
| 生产环境预配置              | ❌     |
| 自动 PostCSS 和预处理器转换 | ❌     |
| HTML转换                    | ❌     |
| 支持 Rollup                 | ✅     |
| 大小                        | 16 MB |

## Vite

<img src="https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220107163519.png" style="width: 30%">

Vite 由 Evan You 开发。 esbuild 专注于构建步骤，Snowpack 专注于开发环境服务，Vite 把两者都包含了：完整的开发环境服务和使用 Rollup 的优化构建命令。

### 使用场景

如果你想找一个 create-react-app 或 Vue CLI 的竞争对手，Vite 是最接近的一个，因为它具有完善的功能。闪电般快速的开发环境服务和零配置生产构建意味着您可以在没有任何配置的情况下使用。Vite 任何大型的单页应用程序都很友好。

如果你想要零配置的服务器端渲染框架，你最好使用 webpack 的框架，比如 Nuxt.js 和 Next.js，等 Vite 服务器端渲染部分再完善一下之后再使用。

### 设置

Vite 比 esbuild 和 Snowpack 有更多特定的默认设置。它的[文档](https://vitejs.dev/)也很友好，Vite 可以与任何前端框架一起使用，甚至提供了一个模板列表来帮助您入门。

### 用法

Vite 的开发环境服务非常强大。 Vite 使用 esbuild 将项目的所有依赖项预先捆绑到单个原生 JavaScript 模块中，然后使用缓存的 HTTP 标头为其提供服务。这意味着在第一次编译之后不会浪费更多的时间再提供或请求导入的依赖项上。 Vite 还提供清晰的错误消息，打印确切的代码块和行号以进行故障排除。

Vite 的 React 和 Vue 模板都引入了支持热模块替换的插件。 Vue 模板插件提供了为[单文件组件](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)和[JSX插件](https://github.com/vitejs/vite/blob/main/packages/plugin-vue-jsx/package.json)。 React 模板引入了 react-refresh 插件。无论哪种方式，两者都会为您提供热模块替换和客户端状态保存。当然，他们也有更多依赖项，包括 Babel 包等，但是，在 Vite 中使用 JSX 时实际上不需要 Babel。默认情况下，JSX 的工作方式与 esbuild 相同—— 它会转换为 `React.createElement`。

 Vite 不支持像 Snowpack 和 wmr 那样的流式导入，所以只能像往常一样 npm 安装依赖项使用。

 Vite正在做对服务器端渲染的实验性功能，选择框架并生成直接发送到客户端的静态 HTML。 Evan You 已经有一项名为 VitePress 的工作正在进行中，它是 VuePress 的替代品，也有使用 Vite 的优点。并且 Sveltekit 也将 Vite 添加到其依赖项列表中。这样看起来， [CSS 代码拆分](https://vitejs.dev/guide/features.html#css-code-splitting)的原因可能和 Sveltekit 转向 Vite 有关。

### 支持的文件类型

对于 CSS，Vite 支持捆绑 CSS 导入以及 CSS modules。我们也可以用  `npm install PostCSS` 插件来创建一个 `postcss.config.js` 文件，Vite 会自动将这些转换应用到 CSS。

Vite也支持CSS预处理器 — 只需 `npm install` 预处理器并将文件重命名为正确的扩展名即可（例如 .filename.scss）。

图片导入默认为公共 URL，但我们也可以通过在 URL 字符串末尾使用 `?raw` 参数将它们作为字符串加载到包中。

JSON 文件可以导入并转换为导出单个对象的 esmodule。也可以提供一个命名的导入，Vite 将在 JSON 文件的根字段中查找导入并 treeshake 其余部分。

### 生产环境

Vite 使用 Rollup 进行预配置的生产构建，并进行了一系列优化。它专门提供了一个零配置构建，这对于大多数用例来说应该足够了。
该构建功能也携带了期望的 Rollup 具有的功能：捆绑、压缩 和 tree shaking。除此之外也有别的东西，比如代码分割、动态导入和异步chunk加载，这个很有意思，如果我们请求一个导入另一个模块的 JavaScript 模块，将会异步构建它们。

### 总结

Vite 的特性使其成为当前构建工具强有力的竞争者，在真正无缝的开发体验和开箱即用上，确实做了很多工作。

| **Vite**                    |         |
| :-------------------------- | ------- |
| 支持多个前端框架模板配置    | ✅       |
| 支持热更新/替换开发环境服务 | ✅       |
| 流式引入                    | ❌       |
| 生产环境预配置              | ✅       |
| 自动 PostCSS 和预处理器转换 | ✅       |
| HTML转换                    | ❌       |
| 支持 Rollup                 | ✅       |
| 大小                        | 17.1 MB |

## wmr

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220107170003.png)

与 Vite 一样，wmr 是另一种比较有特点的构建工具，它提供了开发环境服务和构建步骤。它是由 Preact 的创建者 Jason Miller 构建的，因此对于 Preact 开发人员来说，这绝对是一个舒服的选择。 Jason Miller 在 JS Party 播客中作为嘉宾出现时解释了 [wmr 背后的思考](https://changelog.com/jsparty/158)。

您可能想知道 wmr 的全称是什么？可能是 “Web Modules Runtime”，也可能是 “Wet Module Replacement”，谁知道呢（类似于npm）。

wmr 很小，只有 2.6 MB，并且不带有任何的 npm 依赖项。尽管如此，它还是包含了很多非常棒的功能，包括热模块替换开发环境服务和优化的生产构建。

### 使用场景

如果我想尽快使用 Preact 创建一个项目，我会使用 wmr。无需配置，下载只需几秒钟。感觉就像使用增压的静态文件服务器。借助 TypeScript、优化构建步骤和静态 HTML 渲染，wmr 提供了交付中小型应用程序所需的一切功能。
如果您不使用 Preact、React 或 vanilla JavaScript，wmr 可能不适合您。 Preact 团队尚未为其他框架提供模板，文档也没有我们看过的其他工具详细。

### 设置

如果你使用 preact，除了快速安装 npm 之外，别的配置都不需要。在 wmr 下使用 React 的话需要两步，首先将 `htm/preact` 名称改为 `htm/react`，并在 package.json 中配置 `es-react`：

```json
"alias": {
  "htm/preact": "htm/react",
  "react": "es-react"
},
```

然后将导入添加到组件中：

```js
// ReactDOM only needed on root render
import { React, ReactDOM,} from 'es-react';
```

这样我们实际上并没有使用普通 React 包，而是从 es-react 中引入了 React。这是因为 wmr 依赖于与原生 JavaScript 模块兼容的包。默认情况下，React 不使用原生modules，而是用 [UMD 模块](https://github.com/umdjs/umd)。 es-react 是一个取自 React 且提供与 Web 平台兼容的包。

还有一种方法，可以使用 Skypack 导入，它会在浏览器里预加载：

```js
import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
```

wmr 有很多插件API，比如一个支持用于构建步骤的 Rollup 插件API。文档上也带有一些 wmr 示例，比如[一个压缩 HTML 的插件](https://github.com/preactjs/wmr/wiki/Configuration-Recipes#minifying-html)、 [基于文件系统的路由插件](https://github.com/preactjs/wmr/wiki/Configuration-Recipes#filesystem-based-routing--page-component-loading)。

wmr 支持不同的框架，但是没有任何预构建的模板。

### 用法

在命令行中运行下面的命令即可：

```sh
npm init wmr your-project-name
```

或者，可以手动构建：

```sh
npm init -y
npm install wmr
mkdir public
touch public/index.html
touch public/index.js 
```

然后在 index.html 中添加一个脚本导入（再次确保使用 type="module"）：

```html
<script type="module" src="./index.js"></script>  
```

现在您可以将 hello world 写入您的 index.js 文件：

```js
import { render } from 'preact';
render(<h1>Hello World!</h1>, document.body);
```

最后，启动服务：

```sh
node_modules/.bin/wmr
```

现在我们有了一个完整的热模块替换开发环境服务，它会立即响应我们源代码的任何更改。

wmr 在转换 JSX 时使用了一个叫做 [htm](https://github.com/developit/htm) 的工具，假设我们正在 wmr 中使用 Preact 编写一个计数器并犯了一个错误：

```jsx
import { render } from 'preact';
import { useState } from 'preact/hooks';
function App() {
  const [count,setCount] = useState(0)
  return <>
  <button onClick={()=>{setCount(cout+5)}}>Click to add 5 to count</button> // HIGHLIGHT
  <p>count: {count}</p>
  </>
}
render(<App />, document.body);
```

`count` 在 `onClick` 处理函数中拼写错误，因此会报错。通常，我们将不得不依靠我们的工具和源映射来收集有关错误所在位置的信息，但 wmr 采取了不同的解决方案。如果使用 [htm](https://github.com/developit/htm)，会可能接近原生 JSX 写法，所以编写 React 或 Preact 代码的地方通常是这样的：

```html
<MyComponent>I am JSX. I am not actually valid Javascript</MyComponent>
```

htm 看起来更像这样：

```html
html`<${MyComponent}>I am about as close as it gets to JSX as you can get while being able to run in the browser</MyComponent>`
```

现在，如果我们F12打开控制台的“Sources”面板，我们应该会看到下面那这张图:

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220107172501.png)

通过这种方式，我们可以正确调查浏览器中的错误所在，而无需使用源映射。

wmr 默认支持流式导入，因此裸导入(不带相对/绝对路径的import) 将从 npm 注册表中拉取。这个过程有点复杂，该过程会检查 npm 包中的所有源代码，删除所有测试和元数据，并将其转换为单个原生 JavaScript import。与 Snowpack 类似，可以在不使用 npm 安装任何东西的情况下构建复杂的应用程序。事实上，wmr 是第一个支持这个想法的工具。

### 支持的文件类型

wmr 支持可以在 JavaScript 中导入 CSS 文件，也支持 CSS module。

对 Vue 单文件组件或 Svelte 组件没有任何内置支持。但是，wmr 的构建步骤可以和 Rollup 插件配合使用，并且开发环境服务可以配置 [Polka](https://github.com/lukeed/polka)/ [Express](https://expressjs.com/) 中间件，因此可以使用这些将 import 转换为 Vue 和 Svelte 组件。

如果没有插件的话，我们无法将图片作为 wmr 中的 URL 导入 JavaScript。因此，如果我们有一张小狗的图片，我们可能会将它包含在 Preact 组件中，如下所示：

```js
function Dog() {
  return <img src={new URL('./dog.jpg', import.meta.url)} alt="dog hanging out"></img>
}
```

一旦构建开始，图片就会被复制并从可以从文件内夹访问。开发环境服务中的图片有热模块替换，所以图片的变化会立即反映在浏览器中。

关于文件支持的另一个注意事项：可以导入 JSON，并会将其转换为 JavaScript 对象。但是在实际构建应用程序时，我们需要 [Rollup JSON 插件](https://github.com/rollup/plugins/tree/master/packages/json)。

### 生产环境

wmr 有完整的生产构建步骤，包括捆绑、压缩和 tree shaking，没有任何额外的依赖。
还有一种配置 wmr 的方法是将应用程序呈现为静态 HTML 并使用 preact-iso 在浏览器上水合(hydrates)。这意味着 wmr 可以用作 Preact 的元框架，类似于 Next.js。

### 总结

| **wmr**                     |         |
| :-------------------------- | ------- |
| 支持多个前端框架模板配置    | ✅       |
| 支持热更新/替换开发环境服务 | ✅       |
| 流式引入                    | ✅       |
| 生产环境预配置              | ✅       |
| 自动 PostCSS 和预处理器转换 | ✅       |
| HTML转换                    | ❌       |
| 支持 Rollup                 | ✅       |
| 大小                        | 17.1 MB |

## 功能对比

### 简介

| **工具** | 特点                                                         |
| :------- | :----------------------------------------------------------- |
| esbuild  | 大型代码库，还没准备好生产。                                 |
| Snowpack | 不需要捆绑的小型应用程序，也适用于在服务器渲染的应用程序。   |
| Vite     | 可以生成单页应用程序，代替了 Vue CLI/Create-React-App， Vue 玩家的快乐水。 |
| wmr      | 适用于中小型应用程序，可用于单页或服务器渲染的应用程序， Preact 玩家的快乐水。 |

### 使用

| **esbuild**              | **Snowpack** | **Vite** | **wmr** |         |
| :----------------------- | :----------- | :------- | :------ | ------- |
| 支持多个前端框架模板     | ❌            | ✅        | ✅       | ❌       |
| 安装默认磁盘占用大小     | 7.34 MB      | 16 MB    | 17.1 MB | 2.57 MB |
| 零配置构建打包           | ❌            | ❌        | ✅       | ✅       |
| 零配置热更新开发环境服务 | ❌            | ✅        | ✅       | ✅       |
| Node包的环境变量处理     | ❌            | ✅        | ✅       | ✅       |

### 开发环境服务

| **esbuild**                | **Snowpack** | **Vite** | **wmr** |      |
| :-------------------------- | :----------- | :------- | :------ | ---- |
| 热更新 | ❌            | ✅        | ✅       | ✅    |
| CSS热替换      | ❌            | ✅        | ✅       | ✅    |
| npm依赖预捆绑 | ❌            | ✅        | ✅       | ❌    |
| 浏览器报错提示 | ❌            | ✅        | ✅       | ❌    |
| HTM转换                | ❌            | ❌        | ❌       | ✅    |

### 生产构建

|                | **esbuild** | **Snowpack**           | **Vite** | **wmr** |
| :------------- | :---------- | :--------------------- | :------- | :------ |
| 依赖Go         | ✅           | ✅在构建使用 esbuild 时 | ❌        | ❌       |
| 预配置构建     | ❌           | ❌                      | ✅        | ✅       |
| 异步chunk加载  | ❌           | ❌                      | ✅        | ✅       |
| 支持Rollup插件 | ❌           | ✅                      | ✅        | ✅       |

### 其它特性

| **esbuild**                 | **Snowpack** | **Vite** | **wmr**  |      |
| :-------------------------- | :----------- | :------- | :------- | ---- |
| 流式输入                    | ❌            | ✅        | ❌        | ✅    |
| 服务端渲染                  | ❌            | ❌        | ✅ (实验) | ✅    |
| CSS Modules                 | ❌            | ✅        | ✅        | ✅    |
| 自动 PostCSS 和预处理器转换 | ❌            | ❌        | ✅        | ❌    |

## 相关链接

[Comparing the New Generation of Build Tools](https://css-tricks.com/comparing-the-new-generation-of-build-tools/)
