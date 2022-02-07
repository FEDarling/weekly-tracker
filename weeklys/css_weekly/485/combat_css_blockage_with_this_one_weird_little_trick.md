---
title: Combat CSS Blockage With This One Weird Little Trick
date: '2022-01-24'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['CSS','JavaScript','HTML','TypeScript','ECMAScript','Chrome','游览器','网络','React','Vue','webpack','Babel','Vite','Node','HTTP','Rollup','Parcel','Tool']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: false
#默认不发布，完成校对之后才发布
---
CSS is the worst. Not only it blocks rendering, but it may slow down JavaScript execution, depending on what’s around it. Let’s see an example.
<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->
## Baseline: before

Here we have a more or less ordinary web page’s `<head>`: some initial inline JavaScript, followed by a couple of external styles and scripts and then an inline script in the body.

```html
<head>
  <script>
  const log = {};
  const start = +new Date;
  log['inline HEAD script'] = +new Date - start;
  </script>
  <title>Baseline: before</title>
  
  <link rel="stylesheet" href="css1.css.php" type="text/css" />
  <script src="js.js" async></script>
  <link rel="stylesheet" href="css2.css.php" type="text/css" />
  <script src="js2.js" async></script>
  
</head>
<body>
  <script>
    log['inline BODY script'] = +new Date - start;
  </script>
  <!-- -->
</body>
```

To spot any issues, the first external CSS files has been delayed by 5 seconds and the second by 10. Because… network hiccups happen, it’s not a perfect world out there.

And what do we have as a result (the numbers are milliseconds since an initial `start` timestamp in the `<head>`):

![](https://calendar.perfplanet.com/images/2021/stoyan/baseline-before.png)

You see that the inline head script and the external JavaScript execute as expected – as soon as possible. On the other hand, `DOMContentLoaded` and `onload` are blocked by the slowest CSS (about 10 seconds), which is unfortunate but it’s the nature of the beast. CSS does block rendering/`DOMContentLoaded`.

But why is the inline `<body>` script also taking 10+ seconds to run? It’s literally in there in the page. And the external JS is `async` on top of everything. Well, there’s a justification for this: the browser has no idea what this inline script does. Maybe it’s asking for styling or layout info, e.g. `innerHeight` of some element. To provide this the browser needs to apply all styles and do the layout. Which means wait for all the CSS known to be present at the time. And so, looks like…

> A slow CSS prevents JavaScript from executing.

Could this be true? Let’s investigate some more.

(You can view the full source and [play with the example here](https://www.phpied.com/files/css-loading-async/baseline-before.php).)

## Baseline: after

In this example, let’s have an inline script after the first pair of external JS and CSS:

```html
<head>
  <script>
  const log = {};
  const start = +new Date;
  </script>
  <title>Baseline: before</title>
  
  <link rel="stylesheet" href="css1.css.php" type="text/css" />
  <script src="js.js" async></script>
  
  <script>
    log['inline HEAD script'] = +new Date - start;
  </script> 
  
  <link rel="stylesheet" href="css2.css.php" type="text/css" />
  <script src="js2.js" async></script>
  
</head>
<body>
  <script>
    log['inline BODY script'] = +new Date - start;
  </script>
  <!-- -->
</body>
```

And what happens now with the few metrics we’re tracking:

![](https://calendar.perfplanet.com/images/2021/stoyan/baseline-after.png)

As you can see, now the inline `<head>` script execution was delayed. As much as the first CSS took to load.

Also the execution of the second external JS was delayed. By the same 5 seconds. Note: the download was not blocked, the download was fine (whew!) but the execution was delayed.

Both delays were obviously caused by the slow CSS, because the delays were 5 seconds – as much as it took the external CSS to load. So looks like this holds again:

> A slow CSS prevents the JavaScript following it from executing.

Blocking JS execution is bad. In today’s JS-rich apps a delay like this is a life/death situation. If it was a “progressive enhancement” JS that makes a readable article even more enjoyable, fine. But an app not showing your email message you’ve beeen eagerly awaiting just because of a network packet hiccup in CSS… that sucks.

(You can view the full source and [play with the example #2 here](https://www.phpied.com/files/css-loading-async/baseline-after.php).)

### Sync vs async JS

How come none the external JS files wasn’t blocked in the first example? Because they are marked `async` and therefore obviously don’t care about getting styling info on time. But the inline JS is treated as synchronous and therefore blocked by a slow CSS.

Additionally once the inline (sync) JS waits for the slow CSS, the async second external JS is blocked too. Bummer.

Seems like encountering a sync JS causes everything else to wait for the slow CSS.

How can we fix this? Maybe… if we can make the inline JS async too? It’s sync by convention (see above), but can we make it async? Worth trying, for sure.
## Just make it async already

Simple, right? Just add an async attribute to the inline `<script>`.

```html
<head>
  <script>
  const log = {};
  const start = +new Date;
  </script>
  <title>Baseline: before</title>
  
  <link rel="stylesheet" href="css1.css.php" type="text/css" />
  <script src="js.js" async></script>
  
  <script async>
    log['inline HEAD script'] = +new Date - start;
  </script>  
  
  <link rel="stylesheet" href="css2.css.php" type="text/css" />
  <script src="js2.js" async></script>
  
</head>
<body>
  <script async>
    log['inline BODY script'] = +new Date - start;
  </script>
  <!-- -->
</body>
```

Sorry to say that accomplishes nothing. Try it yourself [here](https://www.phpied.com/files/css-loading-async/baseline+inline+async.php).

## How about a defer?

That `defer` attribute should count for something, right?

```html
<head>
  <script>
  const log = {};
  const start = +new Date;
  </script>
  <title>Baseline: before</title>
  
  <link rel="stylesheet" href="css1.css.php" type="text/css" />
  <script src="js.js" async></script>
  
  <script defer>
    log['inline HEAD script'] = +new Date - start;
  </script>  
  
  <link rel="stylesheet" href="css2.css.php" type="text/css" />
  <script src="js2.js" async></script>
  
</head>
<body>
  <script defer>
    log['inline BODY script'] = +new Date - start;
  </script>
  <!-- -->
</body>
```

Sorry, [nope](https://www.phpied.com/files/css-loading-async/baseline+inline+defer.php).

## Did someone say… ay, ay, ay, data URI?

Here comes the “weird little trick” (sorry for the obnoxious expression from yesteryear’s clickbait buzz-style headlines). The idea is to kinda “externalize” the inline script and as a side effect, benefit from the `async` attribute that external scripts have going for them.

Implementation is pretty simple, [URL-encode](https://mothereff.in/url) the JavaScript code and use it as `src` prefixed by `data:text/javascript`,. It’s not even base64-encoded or anything.

```html
<head>
  <script>
  const log = {};
  const start = +new Date;
  </script>
  <title>Baseline: before</title>
  
  <link rel="stylesheet" href="css1.css.php" type="text/css" />
  <script src="js.js" async></script>
  
  <script 
    async 
    src="data:text/javascript,log%5B%27inline%20HEAD%20script%27%5D%20%3D%20%2Bnew%20Date%20-%20start%3B">
  </script>   
  
  <link rel="stylesheet" href="css2.css.php" type="text/css" />
  <script src="js2.js" async></script>
  
</head>
<body>
  <script 
    async 
    src="data:text/javascript,log%5B%27inline%20BODY%20script%27%5D%20%3D%20%2Bnew%20Date%20-%20start%3B">
  </script>  
  
  <!-- -->
</body>
```

Here is [example #3 in action](https://www.phpied.com/files/css-loading-async/baseline+inline+data.php).

And the results? They speak for themselves:

![](https://calendar.perfplanet.com/images/2021/stoyan/inline-data-uri.png)

Suddenly all JS executes with no delay and even `DOMContentLoaded` is unblocked. The `onload` is no worse then before while everything else is better.

Caveat: in Firefox you get flush of partially-styled content before the first CSS arrives and another one after the first CSS. So three layouts in total, one for every time new styling info arrives. Is this important? You be the judge. Do you want to split all CSS into critical and stuff that can wait? Up to you.

## Conclusion

So here is it – a little trick that can prevent CSS from blocking by simply dataURI-fying your inline JavaScript. Weird, isn’t it? Thoughts?

Remember: in addition to the data URI, do not forget `async` attribute.




---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://calendar.perfplanet.com/2021/combat-css-blockage-with-this-one-weird-little-trick/?utm_source=CSS-Weekly&utm_campaign=Issue-485&utm_medium=web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/485/combat_css_blockage_with_this_one_weird_little_trick.md)
> * 译者：[]()
> * 校对者：[]()