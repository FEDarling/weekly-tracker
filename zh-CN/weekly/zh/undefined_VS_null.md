---
title: 'null vs undefinded'
date: '2021-01-29'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags:
  - 'JavaScript'
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

多数编程语言都有一个“空值”的定义，为 null。它表示变量当前不指向对象——例如，当它尚未初始化时。 与其他语言相比，JavaScript 包含两个这样的空值：undefined 和 null。在这篇文章中，我们将会探讨他们之间的区别，以及如何去最好的使用或者避免使用他们。

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

### undefined vs. null

这两个值是非常相似的，并且可以互换使用的。所以他们的区别是很微妙的。

#### ECMAScript 上对 undefined 和 null 的定义：

ECMAScript 对 undefined 和 null 的定义如下：

-   undefinde：当一个变量并没有被赋予一个值。
-   null：并没有表示任何对象； 我们将在后面看到作为程序员如何最好的处理这两个值。

#### 两个空值--一个无法删除的错误

Javascript 有两个空值到现在都被认为是一个错误的设计(即便是 JavaScript 的创建者，Brendan Eich)。 那么为什么不从其中删除一个呢？一个 JavaScript 的核心原则就是永远不要打破向下的兼容。这个原则有很多好处。但它最大的缺点就是无法去除错误的设计。

#### undefined 和 null 的历史

在 Java 中(对 JavaScript 有很多启发)，初始化值依赖于变量的静态类型： 初始化的时候就包含了 null 对象。 任何基础类型都包含它初始化的值。例如：int 类型被初始化为 0. 在 JavaScript 中，每一个变量都可以同时包含对象值和默认值。因此，如何 null 意味着“不是一个对象”，JavaScript 就需要一个初始值，这个初始值意味着“既不是对象也不是一个初始化的值”。这个基础值就是 undefined。

### undefined 是如何产生的

如果一个变量 myVar 没有初始化一个值，那么他的值就是 undefined：

```js
let myVar;
assert.equal(myVar, undefined);
```

如果一个对象中没有 unknownProp 属性，当访问该属性时就会生成 undefined：

```js
const obj = {};
assert.equal(obj.unknownProp, undefined);
```

如果一个函数没有明确的返回值，那么这个函数会返回 undefined：

```js
function myFunc() {}
assert.equal(myFunc(), undefined);
```

如果一个函数的 return 并没有返回任何值，那么他会返回 undefined：

```js
function myFunc() {
    return;
}
assert.equal(myFunc(), undefined);
```

如果一个函数的形参 x 在调用时被省略，那么它会是 undefined：

```js
function myFunc(x) {
    assert.equal(x, undefined);
}
myFunc();
```

如果一个变量是 undefined 或者 null 时，当使用链式调用 ojb?someProp 时会返回 undefined：

```js
undefined?.someProp;
// undefined
null?.someProp;
// undefined
```

### null 是如何产生的

一个对象的原型要么是一个对象，要么在原型链的末尾是 null。Prototype 没有原型:

```js
Object.getPrototypeOf(Object.prototype);
// null
```

如果我们通过一个正则表达式/a/，用这个正则去匹配字符串'x'，如果匹配失败了，则会返回一个 null：

```js
/a/.exec('x');
// null
```

在调用 JSON.stringify 时，JSON 是只支持 null 的，不支持 undefined

```js
JSON.stringify({ a: undefined, b: null });
// '{"b":null}'
```

### 如何处理 undefined 和 null

undefined 和参数的默认值 参数默认值用于:

1.  当参数缺少时
2.  入参未定义时

例如:

```js
function myFunc(arg = 'abc') {
    return arg;
}
assert.equal(myFunc('hello'), 'hello');
assert.equal(myFunc(), 'abc');
assert.equal(myFunc(undefined), 'abc');
```

undefined 同样可以触发形参使用默认值。

下面的例子说明了哪些地方是有用的:

```js
function concat(str1 = '', str2 = '') {
    return str1 + str2;
}
function twice(str) {
    // (A)
    return concat(str, str);
}
```

在第 A 行中，我们不为 str 指定参数默认值。当缺少这个参数时，twice 函数会使用默认值。

### undefined 和解构默认值

在解构时赋予默认值类似于函数的默认值，如果在解构时，变量没有匹配到或者匹配到 undefined，那么他会采用默认值：

```js
const [a = 'a'] = [];
assert.equal(a, 'a');

const [b = 'b'] = [undefined];
assert.equal(b, 'b');

const { prop: c = 'c' } = {};
assert.equal(c, 'c');

const { prop: d = 'd' } = { prop: undefined };
assert.equal(d, 'd');
```

### undefined，null 以及可选链

当使用可选链 value?.prop 时：

-   如果 value 是 undefined 或者 null，返回 undefined，也就是说，当 value.prop 抛出异常时就会发生这种情况。
-   否则，返回 value.prop。

```js
function getProp(value) {
    // optional static property access
    return value?.prop;
}
assert.equal(getProp({ prop: 123 }), 123);
assert.equal(getProp(undefined), undefined);
assert.equal(getProp(null), undefined);
```

下面的操作是类似的：

```js
obj?.[«expr»] // optional dynamic property access
func?.(«arg0», «arg1») // optional function or method call
```

### undefined、null 以及空值合并符

空值合并运算符 **??** 是让我们在遇到 undefined 和 null 时，使用默认值：

```js
undefined ?? 'default value';
// 'default value'
null ?? 'default value';
// 'default value'

0 ?? 'default value';
// 0
123 ?? 'default value';
// 123
'' ?? 'default value';
// ''
'abc' ?? 'default value';
// 'abc'
```

逻辑空赋值 **??=** 将空值合并符和赋值合并在一起：

```js
function setName(obj) {
    obj.name ??= '(Unnamed)';
    return obj;
}
assert.deepEqual(setName({}), { name: '(Unnamed)' });
assert.deepEqual(setName({ name: undefined }), { name: '(Unnamed)' });
assert.deepEqual(setName({ name: null }), { name: '(Unnamed)' });
assert.deepEqual(setName({ name: 'Jane' }), { name: 'Jane' });
```

### 如何处理 null 和 undefined

下面的小节解释了在我们自己的代码中处理未定义和 null 的最常见方法。

#### undefined 和 null 都不做为实际值

例如，我们可能希望属性 file.title 始终存在并始终为字符串。有两种常见的方法可以达到这个目的。

请注意，在这篇博文中，我们只考虑 undefined 和 null，而不关注值是否是字符串。您必须自己决定是否将其实现为附加的安全措施。

undefined 和 null 都被禁止使用

例如：

```js
function createFile(title) {
    if (title === undefined || title === null) {
        throw new Error('`title` must not be nullish');
    }
    // ···
}
```

为什么选择这种方法？

-   我们希望同事处理 undefined 和 null，因此我们经常会这么写，例如:

    ```js
    // Detecting if a property exists
    if (!obj.requiredProp) {
        obj.requiredProp = 123;
    }

    // Default values via nullish coalescing operator
    const myValue = myParameter ?? 'some default';
    ```

-   如果我们的代码因为 undefined 和 null 导致一些问题，我们希望他尽快抛出。

#### 遇到 undefined 和 null 时，触发默认值。

例如：

```js
function createFile(title) {
    title ??= '(Untitled)';
    // ···
}
```

我们不能在这里使用函数的默认值，因为它只能被 undefined 触发，因此我们在这里使用了空值合并运算符 **??=**

为什么选择这种方法？

-   我们希望对 undefined 和 null 的处理是一致的。
-   我们希望代码能准确地处理 undefined 和 null

#### undefined 或 null 表示空值

例如，我们可能希望属性 file.title 为字符串或空值(file 没有 title 属性)。有几种方法可以达到这个目的。

#### 这里用 null 表示空值

例如：

```js
function createFile(title) {
    if (title === undefined) {
        throw new Error('`title` must not be undefined');
    }
    return { title };
}
```

或者 undefined 触发一个默认值：

```js
function createFile(title = '(Untitled)') {
    return { title };
}
```

为什么选择这种方式：

-   我们需要一个空值来表示没有
-   我们不希望 null 触发参数默认值和解构默认值。
-   我们希望将空值字符串化为 JSON (所以不能使用 undefined)。

#### undefined 来表达一个空值

例如：

```js
function createFile(title) {
    if (title === null) {
        throw new Error('`title` must not be null');
    }
    return { title };
}
```

为什么选择这种方式：

-   我们需要一个空值来表示没有
-   我们确实希望空值触发参数默认值和解构默认值。

undefined 的一个缺点是，它通常是由 JavaScript 无意中创建的: 由一个未初始化的变量，属性名中的一个输入错误，忘记从函数返回一些东西，等等。

#### 为什么不能同时使用 undefined 和 null

当接收到一个值时，将 undefined 和 null 都视为“空值”是有意义的。因为，当我们创建一个值时，我们希望是明确的，以便可以方便的处理这个值。

当我们不想使用 undefined 或者 null 来表示空值时，该如何处理呢？请往下看！

### 其他方式表示一个空值

#### 特殊的一个值

我们可以创建一个特殊的值，来表示 .title 是空的：

```js
const UNTITLED = Symbol('UNTITLED');
const file = {
    title: UNTITLED,
};
```

####   空对象模式

空对象模式源自面向对象编程:

-   公共类都继承相同的接口。
-   每个子类实现一个实例在其中操作的不同模式。
-   这些模式之一是“空”。

在下面的示例中，UntitledFile 实现了“ null”模式。

```js
// Abstract superclass
class File {
    constructor(content) {
        if (new.target === File) {
            throw new Error('Can’t instantiate this class');
        }
        this.content = content;
    }
}

class TitledFile extends File {
    constructor(content, title) {
        super(content);
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
}

class UntitledFile extends File {
    constructor(content) {
        super(content);
    }
    getTitle() {
        return '(Untitled)';
    }
}

const files = [
    new TitledFile('Dear diary!', 'My Diary'),
    new UntitledFile('Reminder: pick a title!'),
];

assert.deepEqual(
    files.map((f) => f.getTitle()),
    ['My Diary', '(Untitled)']
);
```

我们也可以只使用空对象模式 File 来处理 title 属性(而不是处理整个文件对象)。

#### 有可能的类型

写出所有有可能的类型，来处理问题：

```js
function getTitle(file) {
    switch (file.title.kind) {
        case 'just':
            return file.title.value;
        case 'nothing':
            return '(Untitled)';
        default:
            throw new Error();
    }
}

const files = [
    {
        title: { kind: 'just', value: 'My Diary' },
        content: 'Dear diary!',
    },
    {
        title: { kind: 'nothing' },
        content: 'Reminder: pick a title!',
    },
];

assert.deepEqual(
    files.map((f) => getTitle(f)),
    ['My Diary', '(Untitled)']
);
```

我们可以通过数组对“ just”和“nothing”进行编码。我们方法的好处是，它得到了 TypeSript 的良好支持。

---

> - 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> - [查看原文](https://2ality.com/2021/01/undefined-null-revisited.html)对比阅读
> - 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/523/undefined_VS_null.md)
> - 译者：[chressYu](https://github.com/chressYu)
> - 校对者：[daodaolee](https://github.com/daodaolee)
