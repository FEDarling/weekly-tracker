---
title: ES2022 特性：类静态初始化块
date: '2021-09-03'
tags:
 - JavaScript Weekly
---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://2ality.com/2021/09/class-static-block.html)对比阅读
> * 译文已备份[永不失联]()
> * 译者：
> * 校对者：

Ron Buckton的ECMAScript提案“[类静态初始化块](https://github.com/tc39/proposal-class-static-block)”处于[第 4 阶段](https://exploringjs.com/impatient-js/ch_history.html#tc39-process)，并计划包含在ECMAScript2022中。


为了建立一个类的实例，我们在JavaScript中有两个构造:
- 字段：创建（可选的初始化）实例属性。
- 构造函数：完成设置前执行的代码块

为了设置类的静态部分，我们只有静态字段。ECMAScript建议引入了类的静态初始化块，这些块对于静态类的作用大致相当于构造函数对于实例的作用。


## 1 我们为什么要在类中使用静态块?

当我们设置静态字段的时候，使用外部函数效果通常很好：

```js
class Translator {
    static translations = {
        yes: 'ja',
        no: 'nein',
        maybe: 'vielleicht',
    };
    static englishWords = extractEnglish(this.translations);
    static germanWords = extractGerman(this.translations);
}
function extractEnglish(translations) {
  return Object.keys(translations);
}
function extractGerman(translations) {
  return Object.values(translations);
}
```

使用外部函数`extractEnglish()`和`extractGerman()`时没什么问题，因为我们可以看到它们是从类内部调用的， 并且它们完全独立于类。但是如果我们想同时设置两个静态字段，那么就会有点奇怪：

```js
class Translator {
    static translations = {
        yes: 'ja',
        no: 'nein',
        maybe: 'vielleicht',
    };
    static englishWords = [];
    static germanWords = [];
    static _ = initializeTranslator( // (A)
    this.translations, this.englishWords, this.germanWords);
}
function initializeTranslator(translations, englishWords, germanWords) {
  for (const [english, german] of Object.entries(translations)) {
    englishWords.push(english);
    germanWords.push(german);
  }
}
```

这样写会有两个问题：
- 额外调用initializeTranslator()，且必须在创建类之后在类之外执行。或者在 A 处执行。
- initializeTranslator()是无法访问的私有数据Translator的。

如果使用静态块 A ，可以这样写：

```js
class Translator {
    static translations = {
        yes: 'ja',
        no: 'nein',
        maybe: 'vielleicht',
    };
    static englishWords = [];
    static germanWords = [];
    static { // (A)
        for (const [english, german] of Object.entries(this.translations)) {
        this.englishWords.push(english);
        this.germanWords.push(german);
        }
    }
}

```

## 2 更复杂的例子

在 JavaScript 中实现枚举的一种方法是通过`Enum`超类（具体请参阅库[enumify](https://github.com/rauschma/enumify)）

```js
class Enum {
  static collectStaticFields() {
    // Static methods are not enumerable and thus ignored
    this.enumKeys = Object.keys(this);
  }
}
class ColorEnum extends Enum {
  static red = Symbol('red');
  static green = Symbol('green');
  static blue = Symbol('blue');
  static _ = this.collectStaticFields(); // (A)

  static logColors() {
    for (const enumKey of this.enumKeys) { // (B)
      console.log(enumKey);
    }
  }
}
ColorEnum.logColors();

// Output:
// 'red'
// 'green'
// 'blue'
```

这里需要收集静态字段，以便我们可以遍历enum条目(第B行)的键值。创建所有静态字段到这里结束。然后我们再次调用第 A 行的代码，这样的写法将更加优雅些。

## 3 细节

相对来说，静态块的细节是合乎逻辑的（相比更复杂的规则例如实例成员）：
- 每个类可以有多个静态块。
- 静态块与静态字段初始化交错执行。
- 超类的静态成员在子类的静态成员之前执行。
以下代码演示了这些规则：

```js
class SuperClass {
  static superField1 = console.log('superField1');
  static {
    assert.equal(this, SuperClass);
    console.log('static block 1 SuperClass');
  }
  static superField2 = console.log('superField2');
  static {
    console.log('static block 2 SuperClass');
  }
}

class SubClass extends SuperClass {
  static subField1 = console.log('subField1');
  static {
    assert.equal(this, SubClass);
    console.log('static block 1 SubClass');
  }
  static subField2 = console.log('subField2');
  static {
    console.log('static block 2 SubClass');
  }
}

// Output:
// 'superField1'
// 'static block 1 SuperClass'
// 'superField2'
// 'static block 2 SuperClass'
// 'subField1'
// 'static block 1 SubClass'
// 'subField2'
// 'static block 2 SubClass'
```

## 4 支持类静态块的工具

- V8:在v9.4.146中未标记（[源码](https://github.com/tc39/proposal-class-static-block#stage-4-entrance-criteria)）
- SpiderMonkey:标记在v92中，v93不标记[源码](https://github.com/tc39/proposal-class-static-block#stage-4-entrance-criteria)）
- TypeScript:v4.4([源码](https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-rc/))

## 5 JavaScript是否变得越来越像Java或者变得很乱?

这是一个很小的功能并不会和其他功能有冲突，我们已经可以通过带有`static _ = ...`字段的工作区运行静态代码。静态块意味着这个工作区不再是必要的。
除此之外，类只是 JavaScript 程序员的众多工具之一。我们可以使用也可以不使用，而且还有很多其他代替方案。

## 6 结论

类静态块是一个相对简单的特性，它完善了类的静态特性。粗略地说，它是实例构造函数的静态版本。当我们必须设置多个静态字段时，它是非常有用的。

## 相关链接 

[原文链接](https://2ality.com/2021/09/class-static-block.html)
