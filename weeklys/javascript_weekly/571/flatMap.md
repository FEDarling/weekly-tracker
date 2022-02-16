---
title: 'Array.flatMap：一个灵活好用的 Map 方法'
date: '2022-01-07'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['JavaScript']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

`Array.map()`是我们日常开发过程中经常使用到的一个映射函数，它需要一个映射函数作为入参并随之根据入参生成一个新的函数。

在 es2019 之后，出现了一个新的方法——`Array.flatMap`。它完全可以替代`Array.map`，因为它不仅能完成映射，还可以在生成新数组时删除或者添加你需要的元素。但是使用时要注意兼容性，下面附上在[CanIUse](https://caniuse.com/?search=Array.flatmap)上，`Array.flatMap`的兼容情况。

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4728f70ab9c44ed6aa77b2ab1513fabd~tplv-k3u1fbpfcp-watermark.image?)

### 灵活的映射方法

假如我们有一个数组`const number = [0, 3, 6] `,我们如何将每一个元素都 \*2，并返回一个新的数组呢？

使用`Array.map()`方法

```
const numbers = [0, 3, 6];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // logs [0, 6, 12]
```

`numbers.map(number => 2 * number)`会生成一个新的数组，并根据映射函数其中的每一个元素都会 \* 2。

在我们转换映射的时候，如果元素的情况是 1 对 1 的话，就是说原数组和新数组的长度是一样。那么我们使用`Array.map`就很方便了。

但是如果我们在生成新数组时，要控制去除某些元素时，例如我们要跳过 0 这个数字。

此时，只是使用 array.map 就无法实现了，因为它生成的新数组和原数组的长度是相同的。但是可以同时使用`array.map()` 和 `array.filter()`来实现。

```
const numbers = [0, 3, 6];
const doubled = numbers
  .filter(n => n !== 0)
  .map(n => n * 2);
console.log(doubled); // logs [6, 12]
```

此时生成的数组就满足了我们的要求，不包含 0 且每一个元素都\*2 了。

我觉得使用`Array.map`和`array.filter`结合的方式来完成这个功能有点麻烦，有没有更简短的方式来实现呢？

答案是肯定的。自从有了`array.flatMap`的方法，我们就可以通过只调用这一个方法就能实现这些功能。

下面使用下`array.flatMap`方法来实现元素 \* 2 并且过滤 0 的功能。

```
const numbers = [0, 3, 6];
const doubled = numbers.flatMap(number => {
  return number === 0 ? [] : [2 * number];
});
console.log(doubled); // logs [6, 12]
```

通过`array.flatMap`方法我们可以生成一个新的数组，并且在这个数组生成的过程中，完成我们过滤某些元素的功能。

让我们来看看`Array.flatMap`是如何实现的?

### Array.flatMap()

`array.flatMap`方法必须接受一个回调函数作为入参才可以返回一个新的数组。

```
const mappedArray = array.flatMap((item, index, origArray) => {
  // ...
  return [value1, value2, ..., valueN];
}[, thisArg]);
```

flatMap 会依次遍历每一个函数，并调用回调函数。在回调函数中，我们可以接收到 3 个参数：item(当前元素)，index(当前元素的下表)以及 origArray(原始数组)。会先生成一个二元数组然后通过 flat 进行扁平化处理，就能得到我们想要的结果。

另外，我们可以在 flatMap 中传入第二个参数(可选项)。这个参数会作为回调函数的 this 的值。

```
const arrays = [2, 4, 6];
const flatten = arrays.flatMap(
  function(item) {
    console.log(this); // [Number:123]
    return item;
  },
  123
);
```

值得注意的是，第二个参数如果不是数组或者对象，将会被转为`[类型：值]`格式的关联数组。还要注意当你想使用第二个参数时，要注意不能使用箭头函数哦！

上面我们说过`flatMap`会做扁平化处理，所以下面代码的功能也是可以实现的。

```
const arrays = [[2, 4], [6]];
const flatten = arrays.flatMap(item => item);
console.log(flatten); // logs [2, 4, 6]
```

原数组的值为 [[2, 4], [6]] 经过扁平化处理后，就转变为[2,4,6]了。

扁平化只是`Array.flatMap`的一个简单的功能，他还可以做其他的事。通过控制返回值，你可以实现更多的操作：

-   通过返回一个空数组[]从新数组中移除该项
-   通过返回具有一个新值[ newValue ]的数组来修改原数组对应元素
-   通过返回具有多个值的数组来添加新项: [ newValue1，newValue2，... ]。

在我们上一节的内容中，我们可以通过 flatMap 来创建一个新的数组，并且将原数组中的每一个元素都\*2 以及删除值为 0 的元素。

```
const numbers = [0, 3, 6];
const doubled = numbers.flatMap(number => {
  return number === 0 ? [] : [2 * number];
});
console.log(doubled); // logs [6, 12]
```

让我们详细地了解一下上面的例子是如何工作的。

如果当前元素为 0 时，我们将返回一个空数组[],当前元素不为 0 时，则返回[当前元素*2]。当 flatMap 进行扁平化处理的时候，[]就相当于未提供任何值，[当前元素*2]则正常处理到新数组中。

同理：我们还可以通过`Array.flatMap`来给增加数组中的元素数量。

例如，下面的代码通过增加两倍和三倍的数字生成一个新的数组:

```
const numbers = [1, 4];
const trippled = numbers.flatMap(number => {
  return [number, 2 * number, 3 * number];
});
console.log(trippled);
// logs [1, 2, 3, 4, 8, 12]
```

### 总结

如果我们希望通过一个数组生成一个新的数组，并且还想要控制向新数组中添加新的元素，那么你可以使用`array.flatMap`来实现这个功能。

`array.flatMap`方法的回调函数有 3 个参数，分别为当前元素，下标以及原数组。从回调函数返回的数组将是被扁平化的数组，生成的元素也会被插入到该数组中。

请注意，如果你只想将单个项目映射到单个新值，那么请尽量使用标准 array.map ()。

---

> -   译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> -   [查看原文](https://dmitripavlutin.com/javascript-array-flatmap/)对比阅读
> -   发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/571/flatMap.md)
> -   译者：[HongyuYU](https://github.com/chressYu)
> -   校对者：[LilyChenlin](https://github.com/LilyChenlin)
