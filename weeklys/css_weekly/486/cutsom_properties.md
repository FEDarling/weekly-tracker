---
title: CSS 自定义属性
date: '2022-01-20'
tags:
 - CSS Weekly
---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://12daysofweb.dev/2021/css-custom-properties/?utm_source=CSS-Weekly&utm_campaign=Issue-486&utm_medium=web)对比阅读
> * 译文已备份[永不失联]()
> * 译者：
> * 校对者：

## 什么是CSS自定义属性？

CSS的自定义属性等同于JS中的`let`,它可以用来定义在样式中重复使用的属性。
同时他仍然遵守CSS的级联规则。
这就意味着我们可以给自定义属性定义默认属性值，然后根据需要来进行覆盖。

可以在属性前面加两个破折号来实现自定义属性`--my-property`
在使用CSS函数 `var()` 进行调用

下面的例子定义了一个`--color`的自定义属性
并将其用于`color`的属性值

```css
.btn{
    --color: blue;
    color: var(--color);
}
```

## 它们与预处理器变量有何不同？

虽然像Sass和Less这样的预处理器早已将变量投入生产，但是在编译后的样式表中，生成的值仍然是不变的。

预处理器中的变量更适用于在样式中重复，但不需要在编译后更改的属性值。

而对于通过内联样式覆盖和样式表上下文动态更改的属性值来说，自定义属性更具优势

此外，如果我们使用预处理器给按钮设置字体颜色，当我们使用类似`:hover`之类的变更按钮的字体颜色时，就只能将属性值重新指向另一个预处理器变量。

换句话说，我们不能在预处理器变量定义后再去更改它的值，但是CSS自定义属性可以通过级联规则做到这点。

预处理器变量的另外一个优势在于，可以定义为字符串在任意地方使用，例如媒体查询的断点，或者是如下的选择器字符串

```scss
// 
$classes: ".class-a, class-b" !default;
#{$classes} {
    // 定义 CSS 属性
}

```

## 为什么要使用自定义属性？
让我们通过之前的按钮例子来回答这个问题。

如果我想在悬停时更改按钮文本和边框的颜色，就可以直接更改`--color`值。

请注意我们如何将`var()`函数仅用作值的一部分，在本例中，用于定义`border-color`。

```css
.btn {
    --color: blue;

    color: var(--color);
    border: 2px solid var(--color);
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    text-decoration: none;
}

.btn:hover {
    --color: red;
}
```

## 使用自定义属性设置默认值

CSS函数`var()`既可以调用自定义属性，也可以设置默认值。如下：

```css
var(--color, blue)
```

我们甚至可以将一个自定义属性设置为默认值，让我们来写一个不同版本的`.btn`类
把 `--color` 当作 `--border-color` 的默认值

```css
.btn-v2 {
  --color: blue;

  color: var(--color);
  border: 2px solid var(--border-color, var(--color));
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  text-decoration: none;
}

.btn-v2:hover {
  --border-color: red;
}
```

## 自定义属性的继承
根据之前对自定义属性的介绍，
可能会让大家认为自定义属性应当全部保存到`:root`选择器上

我要提议的是，在 `:root`选择器上，应当只保存真正的全局属性
而自定义属性要尽可能的接近其被调用的地方

另一个关键点在于，通过CSS计算函数如`calc()`等中使用自定义属性值时，
会让最终计算值继承

计算出的最终值如果保存在`:root`选择器上，那么将无法对其进行更改
如下，虽然`:root`选择器中的`--unit`被覆盖了，
但是`--size-lg`得到的是最终值，所以`margin-top--3xl`的上外边距仍为30px

```css
:root {
  --unit: 10px;
  --size-lg: calc(3 * var(--unit));
}

/* 这将不会使 --size-lg 的值重新计算 */
.margin-top--3xl {
  --unit: 30px;
  margin-top: var(--size-lg);
}
```

解决这种继承问题通常采用`:root`选择器和其余选择器相结合的方式

在下面的例子中，由于`.margin-top--3xl`的`--margin-unit`和`--multiplier`属性覆盖了`.margin-top`相应的属性，所以`margin-top`达到了一种动态的效果

```css
:root {
  --unit: 10px;
}

.margin-top {
  --margin-unit: var(--unit);
  --multiplier: 1;

  margin-top: calc(var(--multiplier) * var(--margin-unit));
}

.margin-top--3xl {
  --margin-unit: 30px;
  --multiplier: 3;
}

div[class*="margin"] {
  background-color: dodgerblue;
  color: white;
  padding: 0.5rem;
  font-size: 1.5rem;
}
```

我们也可以在项目中使用未定义的自定义属性来使项目更加灵活
未定义的好处在于可以从任何祖先元素继承值

使用未定义属性时我们通常有以下两个选项：
1. 属性未定义并没有默认值，这有些像被赋予了`unset`
   例如：`color: var(--color)`
2. 属性未定义但是有默认值，当没有继承值时就会使用默认值
   例如：`color: var(--color, blue)`


## 使用JavaScript引用和定义自定义属性

JavaScript操控CSS自定义属性的应用场景：
1. CSS动画的变换值
2. 响应式布局的视口尺寸
3. 任何不能在CSS中单独获取的值
4. 替代不受支持的CSS属性

要在JavaScript中访问自定义属性的值，需要使用`getComputedStyle()`和`getPropertyValue()`。

```javascript
getComputedStyle(element).getPropertyValue("--my-var");
```

接下来我们将使用JavaScript获取段落的宽度。然后将其作为色调值分配给`hsl()`颜色函数

```css
.js-color {
  background-color: hsl(var(--hue), 100%, 80%);
  color: black;
  font-size: 1.5rem;
  padding: 1rem;
}

.js-color::after {
  content: " Current: " attr(style);
}
```

```javascript
const p = document.querySelector('.js-color');
const setColor = () => p.style.setProperty('--hue', p.offsetWidth);
window.onresize = setColor;
setColor();
```

## 将预处理器变量和CSS自定义属性结合使用
将预处理器变量和自定义变量结合使用，可以充分发挥出两者的优势

我们这里拿Sass举例，将Sass变量作为自定义属性值，可以使用如下插值的办法

```scss
--custom-property: #{$sass-var};
```

在平常的工作中，像是品牌主题色之类的功能。
我们可以使用Sass的`!default`设置一个默认值，这意味着该值是可以覆盖的。
然后，我们可以将其用作于自定义属性值，我们还可以利用Sass的其他功能（例如循环）来生成类似的属性组。

```scss
$color-link: blue !default;
$font-sizes: (
  "small": .875rem,
  "normal": 1rem,
  "medium": 1.25rem,
  "large": 2rem
) !default;

:root {
  --color-link: #{$color-link};

  @each $size, $value in $font-sizes {
    --font-size-#{$size}: #{$value};
  }
}
```
## 相关链接
[CSS Custom Properties](https://12daysofweb.dev/2021/css-custom-properties/?utm_source=CSS-Weekly&utm_campaign=Issue-486&utm_medium=web)