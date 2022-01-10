---
title: 一个价值800万美元的娇羞按钮
toc: true
toc_label: "一个价值800万美元的娇羞按钮"
toc_icon: "clipboard-list"
toc_sticky: true
---

我的岳父很喜欢 Olive Garden 这家店，疫情过后这家店也成了点外卖的首选。拿起 iPad ，挑选，加入购物车，下单....一切都很顺利，直到我开始结帐：

![123](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110160813.gif)

*点不到啊！*

太恶心了！结帐按钮位于屏幕底部边缘下方，向上滚动可以看到。但是当我放手时，按钮弹回到屏幕外的位置，我根本没法下单。实在不行的话，我只能给他们打电话了......

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110161314.gif)

机智的我还是找到了解决方法！我点击了弹出 iPad 键盘的优惠券代码字段，这样可以点击结帐按钮。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110161514.gif)

我很庆幸我的工作经常涉及移动设备的测试，所以我知道触发虚拟键盘经常会改变布局（即使你不需要）。
大多数人可能只是做个网页应付差事，但是这可能导致成千上万的人因为“娇羞”的结帐按钮而下无法支付。让我们来看看为什么会发生这种情况，然后猜测一下这可能会让 Olive Garden 付出多少代价。

## 什么时候 `100vh` 不是视窗高度的 100%？

在不看代码的情况下，我的同事 Tyler Sticka 立即发现这个问题：视口高度单位在触摸设备上很棘手，因为浏览器 chrome 经常随着用户滚动而变化。

Nicolas Hoizey 早在 2015 年就在 Mobile Safari 上首次注意到这个问题。他向 Apple 和 Webkit 提交了一个错误，但却被告知该行为是故意的！ 2016 年 12 月，Chrome 更改了其行为以与 Safari 保持一致：

> 在视窗单位（即 vh）中定义的值不会因为 URL 栏的显示或隐藏而调整大小。相反，vh 单位将被调整为视口高度，就比如 URL 栏总是隐藏的。也就是说，vh 单位将被调整为“最大可能的视窗”。这意味着 100vh 将大于显示 URL 栏时的可见高度。

那么，让我们看看 Olive Garden 的代码，看看 Tyler 最初的直觉是否正确。包含购物车的 div 声明高度为：

```css
height: calc(100vh);
```

我不懂为什么 `calc()` 要嵌套 100vh，尽管结果是一样的。购物车抽屉应占垂直屏幕空间的 100%。当我尝试下订单时，Safari 的地址栏和选项卡是可见的，但是当浏览器计算 100vh 时，浏览器 chrome 的这些部分不包括在内。结果是购物车抽屉太高而无法容纳，并且结帐按钮不在屏幕上。

为了解决这个问题，我们将使用 Louis Hoebregts 创建的 [解决方案](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)，它使用 CSS 自定义属性和 JavaScript 来始终找到页面可见部分的正确高度。Louis 写道：
> 假设我们的 CSS 自定义变量在这个例子中是 `--vh`，那我们可以这样使用：
>
> ```css
> .my-element {
>  	height: 100vh; /* Fallback for browsers that do not support Custom Properties */
>  	height: calc(var(--vh, 1vh) * 100);
> }
>```
>
> 现在让我们在 JavaScript 中获取视口的内部高度：
>
> ```css
> // 首先，我们得到视口高度，然后将其乘以 1% 以获得 vh 单位的值
> let vh = window.innerHeight * 0.01;
> // 然后我们将 --vh 自定义属性中的值设置为文档的根目录
> document.documentElement.style.setProperty('--vh', `${vh}px`);
> ```
> 我们告诉了 JavaScript 要抓取视窗的高度，然后将其向下取到总数的 1/100，这样我们就有了一个值作为我们的视窗高度单位值。然后我们要求 JS 在 :root 中创建 CSS 变量 (`--vh`)。
> 
> 结果，我们现在可以像使用任何其他 vh 单位一样使用 `--vh` 作为我们的高度值，将它乘以 100，我们就得到了我们想要的完整高度。

我比较建议大家阅读 Louis 在 CSS Tricks 上的 [完整文章](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)，里面包括了有关该问题的描述以及解决方案。
我将 iPad 连接到电脑上，并使用 Safari 的 Web Inspector 来修改 Olive Garden 的购物车抽屉。我将高度更改为 `calc(var(--vh, 1vh) * 100);` 然后在控制台中运行：

```js
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
```

效果如下：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110163514.gif)

## 一个结账的按钮值多少钱？

几年前，我试图计算一个损坏的自动填充实现可能会给 Chipotle 带来多少成本。在与 Chipotle 或 Olive Garden 规模的公司打交道时，我发现微小的变化如何产生巨大的影响令人着迷。此外，挖掘收益电话以查看是否有足够的信息进行猜测是一种乐趣。 2
所以我决定看看我能不能算出 Olive Garden 的结账按钮 bug 可能值多少钱。

Olive Garden 归 Darden 餐厅所有，这是一家上市公司。Darden 旗下有八个餐厅品牌：`Olive Garden`，`Longhorn Steakhouse`，`Cheddar’s Scratch Kitchen`，`Yard House`，`The Capital Grille`，`Seasons 52`，`Bahama Breeze`，`Eddie V’s`。我发现了八家餐厅在 iPad 上都有类似的问题：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110163929.gif)

 Dardens 报告称，截至 2021 年 2 月 28 日的 2021 年第三季度销售额为 17 亿美元。在这 17 亿美元中，3.02 亿美元与其他业务有关。这为餐厅留下了 14.3 亿美元的销售额。

他们还在第三季度财报电话会议上报告称，“在本季度，近 19% 的总销售额是数字交易。”这意味着在线销售额约为 2.72 亿美元。 

在他们的twitter上找到了一些信息：

> 在我们的 CMS 上，2021 年 iPad 的使用率似乎在 1.7% 左右。这涉及 659 个网站，平均每月的页面浏览量为350万到4百万。
>
> 我们每月约有 1.86% 的用户使用 iPad。

假设遇到结帐按钮消失的 iPad 用户中有四分之一的人用电话下单。有了这些粗略的猜测，数学看起来像这样：

```bash
默认 第三季度财务季度销售额:  1,430,000,000 美元
乘以 		  0.19:  在线销售额
等于    第三季度在线销售额:  271,700,000 美元
乘以              .0075:  估算流失的 iPad 用户百分比
等于    约2,032,500 美元:  每季度损失的销售额
乘以	        四个季度:  一年有4个季度
等于 	 8,120,000 美元:  因为 100vh 导致的潜在损失额
```

如果修复该结账按钮，那么 Darden 的年收入可能将增加 810 万美元！

## 相关资料

[A Bashful Button Worth $8 Million](https://cloudfour.com/thinks/a-bashful-button-worth-8-million/)