(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{758:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("我的岳父很喜欢 Olive Garden 这家店，疫情过后这家店也成了点外卖的首选。拿起 iPad ，挑选，加入购物车，下单....一切都很顺利，直到我开始结帐：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110160813.gif",alt:"123"}})]),t._v(" "),s("p",[s("em",[t._v("点不到啊！")])]),t._v(" "),s("p",[t._v("太恶心了！结帐按钮位于屏幕底部边缘下方，向上滚动可以看到。但是当我放手时，按钮弹回到屏幕外的位置，我根本没法下单。实在不行的话，我只能给他们打电话了......")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110161314.gif",alt:""}})]),t._v(" "),s("p",[t._v("机智的我还是找到了解决方法！我点击了弹出 iPad 键盘的优惠券代码字段，这样可以点击结帐按钮。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110161514.gif",alt:""}})]),t._v(" "),s("p",[t._v("我很庆幸我的工作经常涉及移动设备的测试，所以我知道触发虚拟键盘经常会改变布局（即使你不需要）。\n大多数人可能只是做个网页应付差事，但是这可能导致成千上万的人因为“娇羞”的结帐按钮而下无法支付。让我们来看看为什么会发生这种情况，然后猜测一下这可能会让 Olive Garden 付出多少代价。")]),t._v(" "),s("h2",{attrs:{id:"什么时候-100vh-不是视窗高度的-100"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么时候-100vh-不是视窗高度的-100"}},[t._v("#")]),t._v(" 什么时候 "),s("code",[t._v("100vh")]),t._v(" 不是视窗高度的 100%？")]),t._v(" "),s("p",[t._v("在不看代码的情况下，我的同事 Tyler Sticka 立即发现这个问题：视口高度单位在触摸设备上很棘手，因为浏览器 chrome 经常随着用户滚动而变化。")]),t._v(" "),s("p",[t._v("Nicolas Hoizey 早在 2015 年就在 Mobile Safari 上首次注意到这个问题。他向 Apple 和 Webkit 提交了一个错误，但却被告知该行为是故意的！ 2016 年 12 月，Chrome 更改了其行为以与 Safari 保持一致：")]),t._v(" "),s("blockquote",[s("p",[t._v("在视窗单位（即 vh）中定义的值不会因为 URL 栏的显示或隐藏而调整大小。相反，vh 单位将被调整为视口高度，就比如 URL 栏总是隐藏的。也就是说，vh 单位将被调整为“最大可能的视窗”。这意味着 100vh 将大于显示 URL 栏时的可见高度。")])]),t._v(" "),s("p",[t._v("那么，让我们看看 Olive Garden 的代码，看看 Tyler 最初的直觉是否正确。包含购物车的 div 声明高度为：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("我不懂为什么 "),s("code",[t._v("calc()")]),t._v(" 要嵌套 100vh，尽管结果是一样的。购物车抽屉应占垂直屏幕空间的 100%。当我尝试下订单时，Safari 的地址栏和选项卡是可见的，但是当浏览器计算 100vh 时，浏览器 chrome 的这些部分不包括在内。结果是购物车抽屉太高而无法容纳，并且结帐按钮不在屏幕上。")]),t._v(" "),s("p",[t._v("为了解决这个问题，我们将使用 Louis Hoebregts 创建的 "),s("a",{attrs:{href:"https://css-tricks.com/the-trick-to-viewport-units-on-mobile/",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方案"),s("OutboundLink")],1),t._v("，它使用 CSS 自定义属性和 JavaScript 来始终找到页面可见部分的正确高度。Louis 写道：")]),t._v(" "),s("blockquote",[s("p",[t._v("假设我们的 CSS 自定义变量在这个例子中是 "),s("code",[t._v("--vh")]),t._v("，那我们可以这样使用：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Fallback for browsers that do not support Custom Properties */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * 100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("现在让我们在 JavaScript 中获取视口的内部高度：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("// 首先，我们得到视口高度，然后将其乘以 1% 以获得 vh 单位的值\nlet vh = window.innerHeight * 0.01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 然后我们将 --vh 自定义属性中的值设置为文档的根目录\ndocument.documentElement.style.setProperty('--vh', `$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("px`"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("我们告诉了 JavaScript 要抓取视窗的高度，然后将其向下取到总数的 1/100，这样我们就有了一个值作为我们的视窗高度单位值。然后我们要求 JS 在 :root 中创建 CSS 变量 ("),s("code",[t._v("--vh")]),t._v(")。")]),t._v(" "),s("p",[t._v("结果，我们现在可以像使用任何其他 vh 单位一样使用 "),s("code",[t._v("--vh")]),t._v(" 作为我们的高度值，将它乘以 100，我们就得到了我们想要的完整高度。")])]),t._v(" "),s("p",[t._v("我比较建议大家阅读 Louis 在 CSS Tricks 上的 "),s("a",{attrs:{href:"https://css-tricks.com/the-trick-to-viewport-units-on-mobile/",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整文章"),s("OutboundLink")],1),t._v("，里面包括了有关该问题的描述以及解决方案。\n我将 iPad 连接到电脑上，并使用 Safari 的 Web Inspector 来修改 Olive Garden 的购物车抽屉。我将高度更改为 "),s("code",[t._v("calc(var(--vh, 1vh) * 100);")]),t._v(" 然后在控制台中运行：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--vh'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("vh"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("px")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110163514.gif",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一个结账的按钮值多少钱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个结账的按钮值多少钱"}},[t._v("#")]),t._v(" 一个结账的按钮值多少钱？")]),t._v(" "),s("p",[t._v("试着算一下 Olive Garden 的结账按钮 bug 可能值多少钱。")]),t._v(" "),s("p",[t._v("Olive Garden 归 Darden 餐厅所有，这是一家上市公司。Darden 旗下有八个餐厅品牌："),s("code",[t._v("Olive Garden")]),t._v("，"),s("code",[t._v("Longhorn Steakhouse")]),t._v("，"),s("code",[t._v("Cheddar’s Scratch Kitchen")]),t._v("，"),s("code",[t._v("Yard House")]),t._v("，"),s("code",[t._v("The Capital Grille")]),t._v("，"),s("code",[t._v("Seasons 52")]),t._v("，"),s("code",[t._v("Bahama Breeze")]),t._v("，"),s("code",[t._v("Eddie V’s")]),t._v("。我发现了八家餐厅在 iPad 上都有类似的问题：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220110163929.gif",alt:""}})]),t._v(" "),s("p",[t._v("Dardens 报告称，截至 2021 年 2 月 28 日的 2021 年第三季度销售额为 17 亿美元。在这 17 亿美元中，3.02 亿美元与其他业务有关。这为餐厅留下了 14.3 亿美元的销售额。")]),t._v(" "),s("p",[t._v("他们还在第三季度财报电话会议上报告称，“在本季度，近 19% 的总销售额是数字交易。”这意味着在线销售额约为 2.72 亿美元。")]),t._v(" "),s("p",[t._v("在他们的 twitter 上找到了一些信息：")]),t._v(" "),s("blockquote",[s("p",[t._v("在我们的 CMS 上，2021 年 iPad 的使用率似乎在 1.7% 左右。这涉及 659 个网站，平均每月的页面浏览量为 350 万到 4 百万。")]),t._v(" "),s("p",[t._v("我们每月约有 1.86% 的用户使用 iPad。")])]),t._v(" "),s("p",[t._v("假设遇到结帐按钮消失的 iPad 用户中有四分之一的人用电话下单，现在我们来推断一下：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("默认 第三季度财务季度销售额:  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,430")]),t._v(",000,000 美元\n乘以 \t\t  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.19")]),t._v(":  在线销售额\n等于    第三季度在线销售额:  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("271,700")]),t._v(",000 美元\n乘以              .0075:  估算流失的 iPad 用户百分比\n等于    约2,032,500 美元:  每季度损失的销售额\n乘以\t        四个季度:  一年有4个季度\n等于 \t "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8,120")]),t._v(",000 美元:  因为 100vh 导致的潜在损失额\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("如果修复该结账按钮，那么 Darden 的年收入可能将增加 810 万美元！")]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("译文出自："),s("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker",target:"_blank",rel:"noopener noreferrer"}},[t._v("weekly-tracker"),s("OutboundLink")],1),t._v(" 项目，期待你的加入！")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cloudfour.com/thinks/a-bashful-button-worth-8-million/",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看原文"),s("OutboundLink")],1),t._v("对比阅读")]),t._v(" "),s("li",[t._v("发现错误？"),s("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/mobile_dev_weekly/383/bashful_button.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交 PR"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("译者："),s("a",{attrs:{href:"https://github.com/daodaolee",target:"_blank",rel:"noopener noreferrer"}},[t._v("daodaolee"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("校对者："),s("a",{attrs:{href:"https://github.com/daodaolee",target:"_blank",rel:"noopener noreferrer"}},[t._v("daodaolee"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=n.exports}}]);