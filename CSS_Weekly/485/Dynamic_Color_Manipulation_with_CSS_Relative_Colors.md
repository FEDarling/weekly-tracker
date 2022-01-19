---
title: 用CSS相对颜色操作动态颜色
toc: true
toc_label: "用CSS相对颜色操作动态颜色"
toc_icon: "clipboard-list"
toc_sticky: true
---

当我第一次了解 CSS 的相关颜色时，我正在阅读 Dave 的帖子[“Alpha Painlet”](https://daverupert.com/2021/10/alpha-paintlet/)。

CSS的相对颜色使得操作动态颜色成为可能，自从 Sass 的颜色函数第一次出现在这些场景中(darken() 变亮() ，等等) ，我就一直想用普通的 CSS 进行这种操作。

请允许我解释一下为什么我如此兴奋。

## 通过透明度在CSS中使用动态颜色


我曾经写过关于使用CSS变量生成颜色阴影的文章，其中详细介绍饿了如何使用自定义属性和支持颜色函数的`alpha`来创建动态颜色。例如：

```css
:root {
  --color: 255 0 0;
}

.selector {
  background-color: rgb(var(--color) / 0.5);
}
```

然而，此方法有些局限性。

首先，必须在一个颜色空间中定义所有自定义属性颜色值，该颜色空间的表示法在其颜色函数中支持`alpha`通道，如`rgb()`、`rgba()`、`hsl()`和`hsla()`。例如：

```css
:root {
  --color-rgb: 251 0 0;
  --color-hsl: 5 10% 50%;
}

.selector {
  background-color: rgb(var(--color-rgb) / 0.5);
  background-color: hsl(var(--color-hsl) / 0.5);
}
```

你不能“强制”一个自定义属性的颜色值从一种类型到另一种类型：

```css
:root {
  --color: #fb0000;
}

.selector {
  /* 将十六进制颜色强制转换为RGB颜色是行不通的 */
  background-color: rgb(var(--color) / 0.5);
}
```

无法使用十六进制颜色值的CSS动态颜色。虽然可以为十六进制颜色指定`alpha`通道，但是只能以声明方式（即 #ff000080）指定。CSS没有连接字符串的概念。

```css
:root {
  --color: #ff0000;
}

.selector {
  /* 你不能动态地指定alpha通道。 */
  background-color: var(--color) + "80";
}
```

你在尝试任何有关动态的事情的时候不建议在CSS中使用命名的颜色。

```css
:root {
  --color: green;
}

.selector {
  /* 你会怎么做??? */
  background-color: var(--color) + "opacity: .5";
}

```

然而，在CSS中使用相对的颜色时这一切都变了！

你可以使用任何你想要的[颜色类型](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)（十六进制、`rgb`、`hsl`、`lch`，甚至关键字如 `green`）声明自定义属性的值，并动态地将其转换为你想要的任何其他颜色类型。

```css
:root {
  --color: #fb0000;
}

.selector {
  /* 不能这么做 */
  background-color: rgb(var(--color) / 0.5);
  
  /* 可以这么做 */
  background-color: rgb(from var(--color) r g b / .5);
}
```

它甚至与颜色关键字一起工作！

```css
:root {
  --color: red;
}

.selector {  
  background-color: rgb(from var(--color) r g b / .5);
}
```

对我来说，描述这里发生的事最简单的方法就是借用JavaScript的术语。使用CSS中的相对颜色，可以声明性地执行从一种颜色类型到另一种颜色类型的[类型强制](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)，然后重新[构造](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)所需的值。

我不知道这是否会让你和我一样感到震惊，但请花一分钟时间让它慢慢消化。想象一下这个语法开始带来的可能性。

## 在CSS中通过`calc()`实现动态颜色

使用`alpha`通道动态更改颜色是有缺点的。透明的颜色和它们所在的颜色混合（并不总是混合成白色）。可以选择一种颜色，通过改变它的不透明度得到一个”稍亮一点“的版本，但是这种颜色不会在任何地方都是一样的，它取决于它所处的颜色。

https://cdn.jim-nielsen.com/blog/2021/relative-colors-opacity.png

有时候你需要一种不透明“稍微浅一点”的颜色。

或者需要一个“稍微暗一点”的颜色时，不能将`alpha`通道设置为1.2。

以前，通过在自定义属性定义中非常冗长并单独定义地每个通道都可以在CSS中灵活地实现。

```css
:root {
  /* 定义颜色地单独通道 */
  --color-h: 0;
  --color-s: 100%;
  --color-l: 50%;
}

.selector {
  /* 动态改变单独通道 */
  color: hsl(
    var(--color-h),
    calc(var(--color-s) - 10%),
    var(--color-l)
  );
}
```

这可能会变得非常详细非常快，如十六进制的颜色值不受支持。

现在和`calc()`结合起来使用CSS相对颜色就非常简单了。

```css
:root {
  --color: #ff0000;
}
.selector {  
  color: hsl(from var(--color) h calc(s - 10%) l);
}
```

为了完整期间，再举几个例子：

```css
:root {
  --color: #ff0000;
}

.selector {
  /* 语法: hsl(from var() h s l / alpha) */
  
  /* 改变透明度 */
  color: hsl(from var(--color) h s l / .5);
  
  /* 改变色调 */
  color: hsl(from var(--color) calc(h + 180deg) s l);
  
  /* 改变饱和度 */
  color: hsl(from var(--color) h calc(s + 5%) l);
  
  /* 改变它们所有 */
  color: hsl(
    from var(--color)
    calc(h + 10deg)
    calc(s + 5%)
    calc(l - 10%)
    /
    calc(alpha - 15%)
  );
}
```

太神奇啦！颜色函数。

## 总结

解构？类型强制？这些词是否属于关于CSS的文章？[CSS是一种编程语言吗？](https://css-tricks.com/is-css-a-programming-language/)


我们现在唯一需要的就是能够[在CSS中使用用户定义的自定义函数](https://github.com/w3c/css-houdini-drafts/issues/1007)——然后你就可以创建自己的可重复使用的`lighten() `and `darken()`函数。

但我离题了。

[Safari技术预览122中](https://developer.apple.com/safari/technology-preview/release-notes/)提供了对这种语法的支持（查看[一些语法示例](https://trac.webkit.org/changeset/278261/webkit/)）。在写这篇文章的时候，它仍然是一个实验功能，所以你必须通过菜单栏““Develop > Experimental Features”来启用它。

相关资源：

- Codepen: [Working example of this syntax](https://codepen.io/jimniels/pen/dyzQeqr)
- The spec: [CSS color module level 5 - relative colors](https://www.w3.org/TR/css-color-5/#relative-colors)
- dev.to: [Fabio Giolito on upcoming color features in CSS](https://dev.to/fabiogiolito/create-a-color-theme-with-these-upcoming-css-features-4o83)


## 相关连接

[原文链接](https://blog.jim-nielsen.com/2021/css-relative-colors/?utm_source=CSS-Weekly&utm_campaign=Issue-485&utm_medium=web)