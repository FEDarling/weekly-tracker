---
title: '移动先行还是桌面先行'
date: '2021-12-24'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['JavaScript']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

不知道你是否经常考虑新项目首先应该适配移动端还是桌面端？最近，我在Twitter发起了一次关于此项的投票

总票数为648票，比例如下
* 移动优先：33.3%
* 桌面优先：21.9%
* 两者混合：24.7%

在下文中，我们将一起了解每种方法的含义和一些响应式设计技巧，然后再去讨论在今天这些方法是否适用。
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
## 简介：移动优先和桌面优先的含义
`移动优先`意味着在网站开发时，我们首先以较小的视口尺寸编写CSS，然后使用CSS媒体查询来优化大视口的体验

考虑以下示例：

```css
.section {
    padding: 2rem 1rem;
}

@media (min-width: 62.5rem) {
    .section {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 4rem 2rem;
    }
}
```

我们为移动端设备配置了一个`padding`属性，当视口大小足够大时，他应该会是个拥有更大`padding`的弹性盒

这仅仅是一个简单的例子，可以想象一下们有一个足够大的网站或移动APP，那么我们要设置的东西就会多得多。

![](https://ishadeed.com/assets/mobile-desktop-first/intro-1.png)

而当我们采取`桌面优先`的方式时，情况刚好相反

```css
.section {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 4rem 2rem;
}

@media (max-width: 62.5rem) {
    .section {
        display: block;
        padding: 2rem 1rem;
    }
}
```

我们首先为较大的视口编写CSS，然后再使用媒体查询为小视口更改CSS

![](https://ishadeed.com/assets/mobile-desktop-first/intro-2.png)


## 移动优先的开发流程是怎么样的？

你是喜欢直接在浏览器F12调成移动设备进行开发，不去适配桌面？还是更喜欢两者同时进行？也就是在优先写移动设备样式的同时，也去适配桌面的视口尺寸。

这是我能够设想到的两种情况：
1. 先处理移动设备所有页面的CSS样式，最后再去适配桌面端
2. 同时进行，每做好一个移动端的页面或组件，都先对于大视口进行适配。

你通常使用哪一种哪？对我来说，第二种是更适合我的方式，这样能使我更专注我当前组件或页面，而且也会减少编写CSS的错误。

当你使用第一种方法时，很可能会为平板电脑或者桌面端重写CSS，我们来看下面这张图：

![](https://ishadeed.com/assets/mobile-desktop-first/intro-3.png)

我们拿`.hero`选择器来做例子：

```css
.hero {
  display: flex;
  align-items: flex-end;
  background-image: url('hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.hero__title {
  font-size: 1rem;
}

.hero__thumb {
  display: none;
}

@media (min-width: 60rem) {
  .hero {
    align-items: center;
    background-image: initial;
    background-color: #7ecaff;
  }

  .hero__title {
    font-size: 2rem;
  }

  .hero__thumb {
    max-width: 320px;
    display: block;
  }
}
```

就像上述代码所写的那样，`.hero`选择器在移动端有一个背景图片，而在桌面端则是一个纯色背景，并且有一张位于最右边的图片。就像你所看到的那样，这是移动端优先的CSS样式 ，除了`font-size`和`background`之外，我们没有太多需要重写的地方。

那么导航哪，移动端优先的方式会怎么写？

```css
.nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 2rem; /* 导航按钮的空隙 */
}

.nav__toggle {
    position: absolute;
    right: 1rem;
    top: 1rem;
}

.nav__item {
    padding: 1rem;
    display: block;
}

.nav__item:not(:last-child) {
    border-bottom: 1px solid #fff;
}

/* 桌面端样式 */
@media (min-width: 60rem) {
    .nav {
        position: initial;
        width: initial;
        height: initial;
        overflow-y: initial;
        display: flex;
        align-items: center;
        padding-top: 0;
        background-color: blue;
    }

    .nav__toggle {
        display: none;
    }

    .nav__item:hover {
        color: blue;
        background-color: initial;
    }

    .nav__item:not(:last-child) {
        border-bottom: 0;
        border-left: 1px solid #fff;
    }
}
```

不知道你有没有看出来，桌面端要重写的样式大概跟移动端的已有样式持平，这可不是件好事。

另外，有时候也会因为CSS特性导致一些莫名其妙的问题，比如说我希望从`.nav_item`中删除`border-bottom`。

```css
.nav__item {
    border-bottom: 0;
}
```

这并不会起作用，因为`:not`伪类在这种情况下拥有更高的优先级

![](https://ishadeed.com/assets/mobile-desktop-first/mobile-first-specificity.png)

使用如下方法，会使之生效：

```css
.nav .nav__item {
    border-bottom: 0;
}

/* 或者 */

.nav__item:not(:last-child) {
    border-bottom: 0;
    border-left: 1px solid #fff;
}
```

## 桌面端优先的开发流程是怎样的？

依旧还是导航栏的案例，我们来看一下桌面优先的方案是怎样的？

```css
.nav {
    display: flex;
    align-items: center;
    background-color: blue;
}

.nav__toggle {
    position: absolute;
    right: 1rem;
    top: 1rem;
}

.nav__item {
    padding: 1rem;
    display: block;
}

.nav__item:hover {
    color: blue;
    background-color: initial;
}

.nav__item:not(:last-child) {
    border-bottom: 0;
    border-left: 1px solid #fff;
}

@media (max-width: 25rem) {
    .nav {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        padding-top: 2rem; /* Space for the toggle */
    }

    .nav__toggle {
        display: block;
    }

    .nav__item:not(:last-child) {
        border-bottom: 1px solid #fff;
    }
}
```

当以桌面端为先时，我们可以看出，覆盖次数相对于移动端优先少了许多。这不是很有意思吗？主要的原因是我们通过媒体查询的`max-width`审查了特定视口所有的特定样式。

我提倡我们应该先为桌面端编写CSS样式，然后再去适配移动端。

通过下面这张对比图我们可以看出，以桌面优先编写CSS样式看起来更短并且没有不必要的重复（好吧，他有一点点~~）

![](https://ishadeed.com/assets/mobile-desktop-first/mobile-vs-desktop.png)

## 小学生才做选择，成年人两个都要

对我而言，我不愿去拘泥于任何一种方法。而我更愿意尝试去将两种方法结合起来。
这意味着，我们需要先编写基本的样式，然后再去考虑在移动端和桌面端下会发生什么？
我喜欢Elad Shechter在[这篇文章](https://elad.medium.com/the-new-responsive-design-evolution-2bfb9b504a4e)中提到的。

让我们来举一个抽象的例子：

```css
.nav {
    /* 基础样式：不涉及任何窗口尺寸 */
}

/* 桌面端样式 */
@media (min-width: 800px) {
    .nav { ... }
}

/* 移动端样式 */
@media (max-width: 799px) {
    .nav { ... }
}
```

就像你看到的那样，媒体查询的范围对应着不同的窗口大小，这意味着我们不会做任何覆盖属性的操作。这种方法对于在移动端和桌面端看起来完全不同的组件很有用。在我们的例子中，他就是导航。

但是，对于像`<section>`这样的，在移动端和桌面端区别不大的，混合方式起不到太大的作用

```css
.section {
    padding: 1rem;
}

/* 桌面样式 */
@media (min-width: 800px) {
    .section {
        padding: 2rem 1rem;
    }
}
```

## 我应该如何处理响应式设计

在有些时候，我会觉得讨论移动先行还是桌面先行没那么重要，因为现代CSS给我们提供了用更少CSS代码编写响应式布局CSS样式的方法

话虽如此，我认为移动先行和桌面先行的争论将仅限于在特定的视口下显示或隐藏元素。除了那些特别复杂的和特定视口下变化很大页面或组件。

让我们找一个现实中的案例去说明这些概念：

![](https://ishadeed.com/assets/mobile-desktop-first/example-1.png)

在移动设备和桌面设备上有一些不同的组件，比如导航栏和标题，其余地方仅有一些细微的差别。对于标题，我们可以通过`min-width`和`max-width`的混合使用来确定特定视口下的样式设计。

但是，`<section>`和文章网格就需要使用基本样式，然后将`min-width`用在必要的地方。

把思想放开，不要把他关在笼子里。这只是我手头上的一个设计，不需要严格的按照我的方式去做。现在让我们展示更多细节

![](https://ishadeed.com/assets/mobile-desktop-first/example-1-menu.png)

如果标题和导航采用移动优先的方式，就会导致大量的CSS属性重复，这不是我们提倡的方式。下面是我想到的方法：
```css
.header {
    /* 基础样式 */
}

/* 桌面端样式 */
@media (min-width: 1000px) {
    .nav__toggle,
    .nav__close {
        display: none;
    }
}

/* 移动端样式 */
@media (max-width: 999px) {
    .nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #4777dB;
    }
}
```

对于`<section>`部分，我们使用弹性盒去处理行与列的样式，也可以用于重新排序或移动元素

```html
<section class="hero">
    <div class="wrapper">
        <img src="thumb.jpg" alt="" />
        <h2><!-- Headline --></h2>
        <p><!-- Description --></p>
    </div>
</section>
```

```css
.hero {
    display: flex;
    flex-direction: column;
}

@media (min-width: 1000px) {
    flex-direction: row;
}

@media (max-width: 999px) {
    .hero__thumb {
        order: -1;
    }
}
```

在这里，`order:-1`这个属性我只在`max-width`确定范围中使用了一次。
我可以做这样的事：

```css
.hero__thumb {
    order: -1;
}

@media (min-width: 1000px) {
    .hero__thumb {
        order: initial;
    }
}
```

怎么样？没有看到重复吧哈哈哈~
此外，请注意如果在弹性盒中使用了`order`，会导致视觉顺序与HTML中的DOM顺序不匹配

在下面这个可视化图表中，解释了我如何抉择移动先行还是桌面先行：

![](https://ishadeed.com/assets/mobile-desktop-first/my-approach-1.png)


## 避免双断点媒体查询

对`min-width`和`max-width`使用相同的视口大小可能会导致难以想象的问题。

```css
@media (max-width: 500px) {
    .nav {
        display: none; 
    }
}

@media (min-width: 500px) { 
    .nav__toggle {
        display: none; 
    }
}
```

上面这段代码看起来可以做到无缝衔接，但是在大多数的情况下，你会忘记测试一个重要的断点：500px，即两个断点之间那一像素的间隔。在这个断点处，导航和展开按钮都不可见。

![](https://ishadeed.com/assets/mobile-desktop-first/media-debug-1.jpg)

在F12的移动模式下，如果不手动输入500px,很难发现这个问题。
为防止出现这种问题，请尽量避免在`min-width`和`max-width`中使用相同的值。

```css
@media (max-width: 499px) {
    .nav {
        display: none; 
    }
}

@media (min-width: 500px) { 
    .nav__toggle {
        display: none; 
    }
}
```

你以为这个问题是我发现的吗？
哈哈哈哈，其实是我从[Debugging CSS](https://debuggingcss.com/)这本书中借来的。

## 设计师怎么看移动先行

我自己也是一名设计师，坦白了讲，我不喜欢移动先行的设计。

* 移动先行的设计图是有限制的，很难发挥创意
* 处理过高的设计很令人心烦，因为你要不断的将设计图上下滚动

而桌面先行的设计图就要好得多，至少对我来说，它可以立即尝试我的新想法，而且我不需要通过频繁的上下滚动来查看设计图有哪些不合理的地方。

## 现代CSS减少了考虑移动先行还是桌面先行的必要

有很多当下和即将推出的CSS功能，它将使响应式设计更容易实现

## Flexbox Wrapping

在 Geoffrey Crofte 的文章 [如何不适用媒体查询制作响应式卡片](https://css-tricks.com/how-to-make-a-media-query-less-card-component/)中，他探索了如何在不使用媒体查询的情况下制作响应式卡片。我会在这里解释他的基本概念，你也可以选择阅读原文了解更多细节。

![](https://ishadeed.com/assets/mobile-desktop-first/media-query-less-1.jpg)

设置一个固定的`flex-basis`值，并允许`item`在需要的时候增长和伸缩，这可以实现一个无媒体查询的响应式组件。

这个示例展示了空间不足时卡片的外观

![](https://ishadeed.com/assets/mobile-desktop-first/media-query-less-2.jpg)


## CSS网格布局和minmax函数

幸亏有了`CSS Grid`，我们可以拥有不依赖媒体查询的响应式网格布局，考虑以下示例：

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}
```

这是一个响应式网格，为每个项目提供最小`200px`的宽度。
如果没有CSS网格，我们就需要使用媒体查询来根据视口改变元素宽度。

在[本文](https://ishadeed.com/article/css-grid-minmax/)了解更多有关`CSS Gird`和`Minmax()`

## 视口单位与clamp函数

将视口单位和clamp函数结合使用可以有效减少有关`font-size`,`padding`,`margin`等元素尺寸的使用。

```css
.title {
    font-size: clamp(16px, (1rem + 5vw), 50px);
}

.hero {
    padding: clamp(2rem, 10vmax, 10rem) 1rem;
}

.sidebar {
    flex-basis: max(30vw, 150px);
}
```

## 容器查询

CSS新特性 容器查询现在在Chrome下可用了。有了他们，我们可以在不使用媒体查询的情况下做很多事。

考虑以下示例：

![](https://ishadeed.com/assets/mobile-desktop-first/media-query-less-3.png)

这是一个基于容器宽度的响应式分页。不需要媒体查询！

```css
.wrapper {
  contain: layout inline-size;
}

@container (min-width: 250px) {
  .pagination {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .pagination li:not(:last-child) {
    margin-bottom: 0;
  }
}

@container (min-width: 500px) {
  .pagination {
    justify-content: center;
  }

  .pagination__item {
    display: block;
  }
}
```

就像我展示的这样，现代CSS支持我们不通过媒体查询的方式制作响应式布局。那么问题来了，我们还需要考虑移动先行还是桌面先行的问题吗？

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://ishadeed.com/article/the-state-of-mobile-first-and-desktop-first/)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/mobile_dev_weekly/383/modile_first_or_desktop_first.md)
> * 译者：[一绪](http://github.com/myx981008)
> * 校对者：[daodaolee](https://github.com/daodaolee)