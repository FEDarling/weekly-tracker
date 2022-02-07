---
title: Details / Summary
date: '2022-01-24'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['CSS','JavaScript','HTML','TypeScript','ECMAScript','Chrome','游览器','网络','React','Vue','webpack','Babel','Vite','Node','HTTP','Rollup','Parcel','Tool']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: false
#默认不发布，完成校对之后才发布
---
The `details` and `summary` pair of HTML elements provide a native disclosure pattern, no extra JavaScript required!
<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->
Using details and summary is appropriate to reveal (aka "disclose") supplemental information. However, there is a fine line between acceptable and inaccessible usage. While we won't dive into that in this post, be sure to check the additional resources for more information.

## Setting up details and summary

Here is the most essential markup for this pattern. The `details` element is the parent, and the first child is the `summary`.

```html
<details>
   <summary>Summary text</summary>
   <p>The content that appears when the details element is open</p>
</details>
```

Which produces the following, which is shown using default browser styles:

<details>
   <summary>Summary text</summary>
   <p>The content that appears when the details element is open</p>
</details>


You can also predefine that the details should be `open` which means the full content is revealed as the default state.

**Important to note**: you have to remove the `open` attribute completely to close the details, not just set it to "false".

```html
<details open>
   <summary>Open summary text</summary>
   <p>This content is visible by default</p>
</details>
```

When the details element open attribute is toggled, it emits a "toggle" event that you can listen for in JavaScript. You can also programmatically add or remove the `open` attribute.

```js
const details = document.querySelector('.js-ds');
details.addEventListener('toggle', event => {
  const summary = details.querySelector('summary');
  if (details.open) {
    summary.style.backgroundColor = 'pink';
  } else {
    summary.style.backgroundColor = 'tomato';
  }
});
```
## Styling considerations for details and summary

One of the main issues with browser (aka user agent) styles is that they don't ship with very good `focus` or `hover` indicators to reinforce the interactivity. So, let's fix those two items up first. These styles will be attached to the `summary` since that receives those states.

```css
summary.styled {
  /* Provide a more expected visual affordance for this clickable element */
  cursor: pointer;
}

summary.styled:hover {
  background-color: #ddd;
}

summary.styled:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

We can take it further by customizing the native arrow indicator thanks to a modern CSS selector for `::marker` (which also can [style list bullets](https://moderncss.dev/totally-custom-list-styles/#upgrading-to-css-marker)).

```css
summary.styled--marker::marker {
  color: magenta;
}
```
## Ways to use details and summary

* FAQs as long as [you aren't intending them to be an accordion](https://adrianroselli.com/2020/05/disclosure-widgets.html#Accordion), which would be an inaccessible use case
* A tangential fact within a longer post
* An audio or video full transcript
* Allowing expanding/collapsing code snippets related to a demo as you'll see throughout this site

## Additional Resources

Due to there being a narrow range for ensuring your use of details and summary is accessible, I encourage you to check out [Adrian Roselli's post on Disclosure Widgets](https://adrianroselli.com/2020/05/disclosure-widgets.html). You'll learn about a few other similar patterns that would not be appropriate to use `details` and `summary`, and also find the very simple JS and CSS required if you choose to roll your own.

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://12daysofweb.dev/2021/details-summary/?utm_source=CSS-Weekly&utm_campaign=Issue-485&utm_medium=web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/485/details_and_summary.md)
> * 译者：[]()
> * 校对者：[]()