---
title: 'ES2021 新特性'
date: '2021-12-24'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['JavaScript', 'ECMAScript']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

## 逻辑赋值操作符(&&= ||= ??=)

> 逻辑赋值操作符[📖](https://github.com/tc39/proposal-logical-assignment).

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

```js
// 或 或等
x ||= y;
x || (x = y);

// 与 与等
x &&= y;
x && (x = y);

// 零合并
x ??= y;
x ?? (x = y);
```

```js
const updateID = (user) => {
    // 可以这样写
    if (!user.id) user.id = 1;

    // 或者这样
    user.id = user.id || 1;

    // 或者用逻辑赋值运算符
    user.id ||= 1;
};
```

```js
function setOpts(opts) {
    opts.cat ??= 'meow';
    opts.dog ??= 'bow';
}

setOpts({ cat: 'meow' });
```

## 数字分隔符

> 数字组合之间的分隔[📖](https://github.com/tc39/proposal-numeric-separator).

```js
1_000_000_000; // 啊，十亿
101_475_938.38; // 这是好多亿

let fee = 123_00; // 123 美元
let fee = 12_300; // 12,300 美元
let amount = 12345_00; // 12,345
let amount = 123_4500; // 123.45
let amount = 1_234_500; // 1,234,500
```

```js
0.000_001; // 百万分之1
1e10_000; // 10^10000
0xa0_b0_c0;
```

## Promise.any 和错误合集

> Promise.any + 错误合集[📖](https://github.com/tc39/proposal-promise-any).

```js
Promise.any([
    fetch('https://v8.dev/').then(() => 'home'),
    fetch('https://v8.dev/blog').then(() => 'blog'),
    fetch('https://v8.dev/docs').then(() => 'docs'),
])
    .then((first) => {
        // 任意一个 promise 状态为 fulfilled
        console.log(first);
        // → 'home'
    })
    .catch((error) => {
        // 所有 promise 状态都为 rejected
        console.log(error);
    });
```

## String.prototype.replaceAll

> 替换所有[📖](https://github.com/tc39/proposal-string-replaceall).

```js
// String.prototype.replaceAll(searchValue, replaceValue)

'x'.replace('', '_');
// → '_x'

'xxx'.replace(/(?:)/g, '_');
// → '_x_x_x_'

'xxx'.replaceAll('', '_');
// → '_x_x_x_'
```

## WeakRefs 和 FinalizationRegistry 对象

> WeakRefs 和 FinalizationRegistry [📖](https://github.com/tc39/proposal-weakrefs)

```js
let target = {};
let wr = new WeakRef(target);

//wr 和 target 不是同一个，wr是弱引用

// 创建一个新的注册者
const registry = new FinalizationRegistry((heldValue) => {
    // ....
});

registry.register(myObject, 'some value', myObject);
// 执行一些逻辑处理之后，如果你不再使用 `myObject`，可以解绑
registry.unregister(myObject);
```

---

> -   译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> -   [查看原文](https://h3manth.com/ES2021/)对比阅读
> -   发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/570/ES2021_new_feature.md)
> -   译者：[daodaolee](https://github.com/daodaolee)
> -   校对者：[daodaolee](https://github.com/daodaolee)
