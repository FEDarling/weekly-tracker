---
title: 重新思考 JavaScript 的三元运算符
date: '2021-12-24'
#请根据文章内容在下面数组中选择标签，删除无关的标签！
tags: ['CSS','JavaScript','HTML','TypeScript','ECMAScript','Chrome','游览器','网络','React','Vue','webpack','babel','vite','node']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

## 前言

我们都希望编写的代码既清晰又简洁，但是有时候我们只能二选一：要么清晰，要么简洁。更少的代码行意味着隐藏的错误更少，但是清晰、可读的代码更容易维护和修改。总的来说，传统思路告诉我们，**清晰胜过简洁**。如果您必须在可读性和简洁性之间做出选择，请选择**可读性**。

因此，许多人对三元运算符持怀疑态度不是没有道理的。当然，它比 if 语句更简洁，但是把三元写成屎山也是很容易的。所以处理问题的时候要小心一点。我一般更喜欢 if 语句，尽管他在可读性方面有点小问题。

### 三元的复杂度

那为什么有的开发者会怀疑三元运算符？让我们仔细看看其中的一些。

#### 怪异

人们不喜欢三元运算符的原因之一是它们太怪异了。 JavaScript 有很多二元运算符—作用于两个表达式的运算符。这里提一下算术运算符，例如  `+`、`-`、`*`  和  `/`，以及像  `&&`、`||` 这样的布尔运算符和  `===`，总共至少有 28 个二元运算符（这取决于当前的的 ECMAScript 版本）。它们用起来很直观：左侧的表达式、运算符符号和右侧的表达式。

一元运算符比较少，但它们也没有那么怪异。这里提一下否定运算符：`!`。你可能也使用过一元形式的 `+` 和 `-` ，例如 -1。大多数情况下，它们对符号右侧的表达式进行操作，而且使用更方便。

三元运算符，顾名思义，它对三个表达式进行操作。因此，我们使用两个符号来编写它： `?`  和  `:` 。不然，我们无法分辨中间表达式的开始和结束位置。所以写法就是这个样子：

```js
(/* First expression*/) ? (/* Second expression */) : (/* Third expression */)
```

真实场景里，是这样子：

```js
const protocol = (request.secure) ? 'https' : 'http';
```

如果第一个表达式是“truthy”，则三元解析为第二个表达式的值，否则它将解析为第三个表达式的值。

但这并不是它唯一的怪异之处。大多数二元运算符具有一致的类型：算术运算符处理数字，布尔运算符适用于布尔值，位运算符同样适用于数字。对于这些，两边的类型是相同的。但是三元运算符有奇怪的类型：使用三元运算符，第二个和第三个表达式可以是任何类型，但是**解释器总是将第一个转换为布尔值**。对于开发者而言，这就很怪异。

#### 对初学者不友好

与 if 语句不同的是，很难将三元语句解读为伪语法。例如，假设我们有一个像这样的 if 语句：

```js
if (someCondition) {
    takeAction();
} else {
    someOtherAction();
}
```

如果 someCondition 是 true，则调用函数 takeAction ，否则调用函数 someOtherAction 。相比较，三元的特点不是很明显。三元运算符虽然由神秘符号组成，但是读起来不像正常的英文语法。对于初学者，可能会有点头疼。

#### 不宜读

即使您不是初学者，三元组也很难阅读。特别是三元括号长表达式：

```js
const ten = Ratio.fromPair(10, 1);
const maxYVal = Ratio.fromNumber(Math.max(...yValues));
const minYVal = Ratio.fromNumber(Math.min(...yValues));
const yAxisRange = (!maxYVal.minus(minYVal).isZero()) ? ten.pow(maxYVal.minus(minYVal).floorLog10()) : ten.pow(maxYVal.plus(maxYVal.isZero() ? Ratio.one : maxYVal).floorLog10());
```

是不是很难看懂发生了什么。三元组中的每个表达式至少有两个链接的方法调用。更不用说嵌套在最终表达式中的另一个三元组了。我很不建议你写这样的代码！

当然，我们可以通过添加空格和换行符使其稍微好一点：

```js
const ten        = Ratio.fromPair(10, 1);
const maxYVal    = Ratio.fromNumber(Math.max(...yValues));
const minYVal    = Ratio.fromNumber(Math.min(...yValues));
const yAxisRange = !maxYVal.minus(minYVal).isZero()
                 ? ten.pow(maxYVal.minus(minYVal).floorLog10())
                 : ten.pow(maxYVal.plus(maxYVal.isZero() ? Ratio.one : maxYVal).floorLog10());
```

> 正如马丁福勒所说：任何傻瓜都可以编写计算机可以理解的代码，只有优秀的程序员才会编写人类可以理解的代码。 

### if 真的好么

三元组有自己的缺点，不过还是有点好处的：

1. 一般使用三元最大的原因是简洁
2. if 语句在三元的位置上也同样适用

当然它们还是有很大的不同，来看两段代码：

```js
// if语句
let result;
if (someCondition) {
    result = calculationA();
} else {
    result = calculationB();
}

// 三元
const result = (someCondition) ? calculationA() : calculationB();
```

从某种角度来说，两段代码是等价的。在这两段代码的末尾，一个 result 变量将被设置为一个值：`calculationA()` 或者 `calculationB()` 的返回值。但从另一种角度看，这两个例子是完全不同的：if 是一个语句，而三元是一个表达式，换句话说：表达式总是会计算出某个值，它是一个单独的代码块，而声明不是。

这是一个重要的概念。表达式的计算结果为一个值，而声明不能将语句的结果分配给变量，也不能将语句的结果作为函数参数传递。 if 是一个语句，不是一个表达式。

在某种程度上，这是函数式编程的核心思想。为了避免代码无形中产生的小问题，会用语句来避免一些问题。可以的话，我更喜欢使用纯函数。如果一个函数是纯函数，知道它除了进行逻辑处理并返回一个值之外什么都不做就可以了。

再来看这段代码：

```js
if (someCondition) {
    takeAction();
} else {
    someOtherAction();
}
```

`takeAction` 和 `someOtherAction` 都没有返回值，并且会跳出当前块，那它们会不会造成一定的隐患？

### 再来看三元运算符

我们喜欢表达式，因为表达式比语句更能组合。我们可以用运算符和函数把简单表达式构建出来复杂表达式。例如，我们可以使用连接运算符构建复杂的字符串：

```html
('<h1>' + page.title + '</h1>');
```

我们可以将这个表达式作为函数参数传递。或者我们可以使用更多的运算符将它与其他表达式结合起来，组合表达式是编写代码的绝佳方式。

比如if语句和for循环，他们本身没有任何关系，但是他们可以随意嵌套。

表达式更像是乐高积木。它们的创作方式是有限的，顶部的小块与砖底部的缝隙相连。但是一旦加入，砖块就会形成新的形状。并且该形状可以与具有相同配置的任何其他形状互换。考虑下图。我们有两个相连的形状。虽然形状由不同的块组成，但最终的形状是相同的。换句话说，它们是可以互换的。同样，表达式可以与其计算的结果互换。如何计算并不重要，重要的是结果：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220105163223.png)

### 如何选择

我能给出的建议就是，考虑团队的开发规范、编码风格和效率，权衡好可能会造成的问题(比如代码块，作用域等)。

### 说点别的

#### return

我建议在 if 语句里添加 return：

```js
if (someCondition) {
    return resultOfMyCalculation();
}
```

return 会将函数调用解析为一个值，函数调用当成表达式。这样就会像变量赋值一样了。

#### 三元优化

如果你的三元很长，特别建议做拆分处理：

```js
const ten     = Ratio.fromPair(10, 1);
const maxYVal = Ratio.fromNumber(Math.max(...yValues));
const minYVal = Ratio.fromNumber(Math.min(...yValues));

// 创建四个变量
const rangeEmpty = maxYVal.minus(minYVal).isZero();
const roundRange = ten.pow(maxYVal.minus(minYVal).floorLog10());
const zeroRange  = maxYVal.isZero() ? Ratio.one : maxYVal;
const defaultRng = ten.pow(maxYVal.plus(zeroRange).floorLog10());

// 组合起来
const yAxisRange = !rangeEmpty ? roundRange : defaultRng;
```

如果觉得这样造成了更多的变量声明，那可以这样：

```js
const ten     = Ratio.fromPair(10, 1);
const maxYVal = Ratio.fromNumber(Math.max(...yValues));
const minYVal = Ratio.fromNumber(Math.min(...yValues));

// 创建两个函数
const rangeEmpty = maxYVal.minus(minYVal).isZero();
const roundRange = () => ten.pow(maxYVal.minus(minYVal).floorLog10());
const defaultRng = () => {
    const zeroRange  = maxYVal.isZero() ? Ratio.one : maxYVal;
    return ten.pow(maxYVal.plus(zeroRange).floorLog10());
};

// 组合起来
const yAxisRange = !rangeEmpty ? roundRange() : defaultRng();
```

不过说实话，太多的三元嵌套的我更建议使用 `switch-case`

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://jrsinclair.com/articles/2021/rethinking-the-javascript-ternary-operator/)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/570/ternary.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)