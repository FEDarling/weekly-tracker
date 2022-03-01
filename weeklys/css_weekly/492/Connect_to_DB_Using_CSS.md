---
title: '使用 CSS 连接数据库'
date: '2022-02-28'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['CSS']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f2b5ebbb70d43a9ae117c4edfd5297f~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
某条特推在网上流传了一阵子。

-  招聘人员是这么说的：
-  我们正在寻找一个人可以使用css连接到数据库

我已经很长时间没有写出来质量很高的项目了，实际上，在我的字典中已经很长时间都没有 shitpost 这个词了。

为了实现这个功能，我从一个早期很棒的项目中获取了灵感，这个项目是一个区块链创业公司将投资人的脸放到了一个 3D 的立方体上。这让我想起来在起初的互联网上，很多事情都很有意思。

我并非是要在这里介绍我的琐碎生活，而是向你介绍我是如何管理我自己的新的项目： sqlcss.xyz 。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bf48d5f9060431ca3b940f4209cec37~tplv-k3u1fbpfcp-watermark.image?)

顾名思义，这个是为了帮助你用 CSS 来连接数据库，但是它只能在 *Chrome* 中运行。虽说如此，你依然可以提供不同的 *SQLite* 数据库，并通过 *CSS* 查询。

### 如何实现？

我们需要一个被称为 [Houdini](https://www.leemeichin.com/posts/yes-i-can-connect-to-a-db-in-css.html?utm_source=CSS-Weekly&utm_campaign=Issue-492&utm_medium=web#fn.4) 的新 API ,它给浏览器提供了使用 JavaScript 对象模型来控制 CSS 的能力。这意味这你可以自定义 CSS 样式， 添加自定义属性，等等。

这个功能的核心可能就是 [the CSS Paint Worklet](https://www.leemeichin.com/posts/yes-i-can-connect-to-a-db-in-css.html?utm_source=CSS-Weekly&utm_campaign=Issue-492&utm_medium=web#fn.5) ，它允许在一个元素上进行绘制，就像你所熟悉的 Canvas 一样，并且让浏览器将它当做一个 CSS 图片来处理。在 [houdini.how](https://houdini.how/) 上有很多例子可以参考。

但是这个工作仅仅提供了 `Worker API` 的一个子集，而且 `Canvas` 本身的上下文也被严重剥离。这样的实际结果会导致自定义的 CSS 绘制代码提供的沙箱比预期要小。

这就意味着你没有了网络，所以你可以和 `fetch` 以及 `XmlHttpRequest` 说再见了。你也无法在绘图的上下文中使用 `drawText` 方法。其他各种 JS APIs 都无法使用，导致你无法解决其中的一些问题。

但是我们可以把问题分为几步来实现：

### 设置数据库

这是必须实现的第一步，尝试去寻找一个可行的思路。

使用 [`sql.js`](https://www.leemeichin.com/posts/yes-i-can-connect-to-db-in-css.html?utm_source=CSS-Weekly&utm_campaign=Issue-492&utm_medium=web#fn.7)库通过 emscripten 将 SQLite 编译成 webasbly 和 old-skool ASM.js 。但是我们不能使用 WASM ，因为它必须通过网络来获取二进制文件。ASM 则没有这个限制，因为所有代码都可以在一个模块中使用、

尽管 PaintWorklet 限制网络请求功能 `import` 来导入 ES6 的模块。这就意味着，引入的文件必须含有 `export` 语句。但是 `sql.js` 并没有支持 es6 的版本，所以我修改了代码来实现功能。

现在的关键：我如何在我的工作区来建立一个数据库？

```js
const SQL = await initSqlJs({ 
    locateFile: file => `./${file}`, 
}); 
const DB = new SQL.Database();
```
### 查询数据库
最简单的方法就是使用一些模拟数据。 Sql.js 有一些方法可以实现。
```js
DB.run('CREATE TABLE test (name TEXT NOT NULL)') 
DB.run( 
    'INSERT INTO test VALUES (?), (?), (?), (?)',
    ['A', 'B', 'C', 'D'] 
)
```
现在我已经有了一个包含数据的测试表。我们就可以查询到这些数据，尽管我不知道该如何进行构建。
```js
const result = DB.exec('SELECT * FROM test') 
console.log(result)
```
### 渲染结果
我认为这就像在 Canvas 上画文字一样。
```js
class SqlDB { 
    async paint(ctx, geom, properties) { 
    const result = DB.exec('SELECT * FROM test'); 
    ctx.font = '32px monospace'; 
    ctx.drawText(JSON.stringify(result), 0, 0, geom.width);
    } 
}
```
这里的上下文跟 Canvas 的是不同的，它只提供了功能的子集。

它也可以绘制路径和曲线，缺乏的 API 只是一个阻碍，但不是问题。

### 不通过文本 API 创建文本
[opentype.js](https://www.leemeichin.com/posts/yes-i-can-connect-to-a-db-in-css.html?utm_source=CSS-Weekly&utm_campaign=Issue-492&utm_medium=web#fn.8)提供了解决的希望。它可以解析一个字体文件，然后通过给定的字符串给每一个字符生成字母形式。这个操作的结果就是生成了一个表示字符串的 path 对象，然后将其显示上下文中。

这次我不必修改 opentype 库来实现导入，因为他可以从 [JSPM](https://www.leemeichin.com/posts/yes-i-can-connect-to-a-db-in-css.html?utm_source=CSS-Weekly&utm_campaign=Issue-492&utm_medium=web#fn.9) 中获得。如果你给 JSPM 一个 npm 包，它会自动的生成一个 ES6 的模块，你可以导入到你的项目中。
```js
import opentype from 'https://ga.jspm.io/npm:opentype.js@1.3.4/dist/opentype.module.js' 
opentype.load('fonts/firasans.otf')
```
还有一个问题，它想加载一个网络上的字体，而项目却不可以。

但是它还可以接收一个 `array buffer` 。所以我可以将字体进行 base64 编码，然后在我的模块中进行解码。
```js
import opentype from 'https://ga.jspm.io/npm:opentype.js@1.3.4/dist/opentype.module.js' 
import base64 from 'https://ga.jspm.io/npm:base64-js@1.5.1/index.js' 
const font = 'T1RUTwAKAIAAAwA ... 3 days later ... wAYABkAGgAbABwAIAKM' 
export default opentype.parse(base64.toByteArray(font).buffer)
```
这个工具并没有处理 base64 的 API。`atob` 和 `btoa` 也一样不可以。所以我必须找到一个简单的方法去实现。

我将这段代码放到一个单独的文件中，因为它太大了，所以将它隔离出来，单独处理这 200kb 的编码代码。
### 另一种渲染方式
从现在开始，opentype 会完成所有的工作，而我要做的就是稍微进行一下数字计算，将他们结合起来。
```js
import font from './font.js' 
const SQL = await initSqlJs({ 
    locateFile: file => `./${file}`, 
}); 

const DB = new SQL.Database(); 

DB.run('CREATE TABLE test (name TEXT NOT NULL)') 
DB.run( 
    'INSERT INTO test VALUES (?), (?), (?), (?)', 
    ['A', 'B', 'C', 'D'] 
) 

class SqlDB { 
    async paint(ctx, geom, properties) { 
        const query = DB.exec('SELECT * FROM test') 
        const result = query[0].values.join(', ') 
        const size = 48 
        const width = font.getAdvanceWidth(queryResults, size) 
        const point = { x: (geom.width / 2) - (width / 2), y: geom.height / 2 } 
        const path = font.getPath(result, point.x, point.y, size) 
        path.draw(ctx) 
    } 
} 
registerPaint('sql-db', SqlDb)
```
HTML 和 CSS 部分
```html
<html> 
    <head> 
    <script>
        CSS.paintWorklet.addModule('./cssdb.js') 
    </script> 
    <style> 
        main { 
            width: 100vw; 
            height: 100vh; 
            background: paint(sql-db); 
        } 
    </style>
    </head> 
    <body> 
        <main></main> 
    </body> 
</html>
```
这样是可以使用的，但是没有足够的 CSS 以及 查询是硬编码。

### 通过 CSS 查询
如果你通过 CSS 来查询数据库拿将更满足要求。实际上，这是我们唯一能将绘制功能和外部进行通信的方式。因为我们没有特定的 API 能实现这个功能。

为此，需要一个自定义的 CSS 属性。定义 `inputProperties` 是为了方便监听该属性的变化，因此当该属性发生改变的时候，可以自动进行更新，不需要我们设置监听器。
```js
class SqlDb { 
    static get inputProperties() {
        return [ 
        '--sql-query', 
        ] 
    } 
    async paint(ctx, geom, properties) { 
        // ... 
        const query = DB.exec(String(properties.get('--sql-query'))) 
    }
}
```
这些 CSS 属性被称为类型化属性，它们实际上被放在一个 `CSSProperty` 的类中，但是这个类并不是特别好用。你必须将它转换为字符串，数字，或者类似的东西才能使用它。

对CSS做一点调整：
```js
main { 
    // ... 
    --sql-query: SELECT name FROM test; 
}
```
这里故意了省略引号，否则我必须在数据库查询之前将引号删除。
### BYODB
对数据库模式进行硬编码时导致数据有点混乱。它能证明这个方案是对的，但是我们可以做的更好。

我们期望可以查询任何我们想要查询的数据库，只要我们有数据库文件。我们只需要读取这个文件，然后对其进行 base64 编码。
```js
const fileInput = document.getElementById('db-file') 
fileInput.onchange = () => {
    const reader = new FileReader()
    reader.readAsDataURL(fileInput.files[0]) 
    reader.onload = () => {
        document.documentElement.style.setProperty( 
            '--sql-database', 
            `url('${reader.result}')` 
        ) 
    } 
}
```
我使用了额外的 CSS 属性用来保存 SQLLite 数据库的 Base64 格式的 URI。数据的 URI 基本上只是为了显示并不影响 DOM。

这样会使得用起来更方便，你不需要进入调试器来操作元素的 CSS、

### 其它的问题
这个项目最简单的部分。定制属性和分号有点问题，既然 SQLite 并不在乎是否有分号，所以最简单的办法就是如果输入了就删除它。

```js
const queryInput = document.getElementById('db-query') 
queryInput.onchange = () => { 
    let query = queryInput.value; 
    if (query.endsWith(';')) { 
        query = query.slice(0, -1) 
    } 
    document.documentElement.style.setProperty( 
    '--sql-query', 
    queryInput.value 
    ) 
}
```


---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://www.leemeichin.com/posts/yes-i-can-connect-to-a-db-in-css.html?utm_source=CSS-Weekly&utm_campaign=Issue-492&utm_medium=web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/554/Connect_to_DB_Using_CSS.md)
> * 译者：[HongyuYU](https://github.com/chressYu)
> * 校对者：