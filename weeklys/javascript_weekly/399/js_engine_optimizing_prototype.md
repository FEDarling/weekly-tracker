---
title: JavaScript引擎基础(下)：优化原型
date: '2018-08-17'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['JavaScript']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

本文描述 JavaScript 引擎中通用的一些关键的基础知识——不仅仅是 [V8](https://twitter.com/v8js)。作为一名 JavaScript 开发人员，对 JavaScript 引擎的工作原理深入了解一下有助于你更好的编写代码。

**如果你没有看[之前的文章：JavaScript引擎基础(上)：形态和内联缓存](https://github.com/FEDarling/fe-translate-weekly/blob/master/JavaScript_Weekly/399/js_engine_shape_and_inline_caches.md)，请务必看下，本篇有很多相关名词在前文都有介绍。**

之前的文章，我们讨论了 JavaScript 引擎如何通过使用 **Shape** 和 **内联缓存** 来优化对象和数组访问。本文来说一下如何优化 管道(pipeline) 的权衡，并会讲述引擎如何加快对原型属性的访问。

## 优化层级和执行权衡

[之前的文章](https://github.com/FEDarling/fe-translate-weekly/blob/master/JavaScript_Weekly/399/js_engine_shape_and_inline_caches.md)讨论了现代 JavaScript 引擎如何拥有相同的管道：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113220830.png)

我们还提出了，虽然引擎之间的高层管道有点类似，但优化管道这方面往往存在差异。这是为什么？为什么有些引擎比其他引擎有更多的优化层级？事实证明，在运行代码的最快速度和最佳性能之间存在着某种权衡：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114004905.png)

解释器可以快速生成字节码，但字节码通常效率不高。另一方面，优化编译器需要花更长的时间执行，不过最终会产生更高效的机器代码。

这正是 V8 使用的模型。 V8 的解释器称为 **火花塞(Ignition)**，它是所有引擎中最快的解释器（就原始字节码执行速度而言）。 V8 的优化编译器名为 **涡轮风扇(TurboFan)**，它最终会生成高度优化的机器代码：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114005049.png)

启动延迟和执行速度之间的权衡是一些 JavaScript 引擎选择在两者之间添加优化层的原因。例如，SpiderMonkey 在解释器和 IonMonkey 优化编译器之间添加了一个基准层：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114005201.png)

解释器快速生成字节码，但字节码执行速度相对较慢。 Baseline 生成代码虽然需要更长的时间，但它提供了更好的运行时性能。最后，IonMonkey 优化编译器生成机器代码的时间最长，不过该代码可以非常高效地运行。

让我们看一个具体的例子，看看不同引擎中的管道如何处理它。这是一些在热循环中经常重复的代码：

```js
let result = 0;
for (let i = 0; i < 4242424242; ++i) {
	result += i;
}
console.log(result);
```

V8 开始在 **火花塞(Ignition)** 解释器中运行字节码。在某个时刻，引擎确定代码达到了 hot 的程度，并启动 **涡轮风扇(TurboFan)**，这是 **涡轮风扇(TurboFan)** 处理集成分析数据和构建代码的基本机器表示的部分。然后将其发送到不同线程上的 **涡轮风扇(TurboFan)** 优化器以进行进一步改进：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114005434.png)

当优化器运行时，V8 继续在 **火花塞(Ignition)** 中执行字节码。在某些时候优化器完成了，我们有了可执行的机器代码，并且可以继续执行。

> 从 Chrome 91（2021 年发布）开始，V8 在 Ignition 解释器和 TurboFan 优化编译器之间增加了一个名为 Sparkplug 的编译器。

SpiderMonkey 引擎也开始在解释器中运行字节码。但它有额外的基准层，这意味着热代码首先发送到基准层，基准编译器在主线程上生成基准代码并在准备好后继续执行。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114005609.png)

基准代码运行一段时间后，SpiderMonkey 最终会启动 IonMonkey，并启动优化器 — 这与 V8 非常相似。在 IonMonkey 进行优化时，它会继续在基准层中运行。最后，当优化器完成时，将会执行优化代码而不是基准代码。

Chakra 的架构与 SpiderMonkey 的架构非常相似，但 Chakra 会尝试同时运行更多的东西以避免阻塞主线程。 Chakra 没有在主线程上运行编译器的任何部分，而是复制出编译器可能需要的字节码和数据，并将其发送到专用的编译器进程：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114005732.png)

当生成的代码准备好后，引擎开始运行这个 SimpleJIT 代码而不是字节码。 FullJIT 也是如此。这种方法的好处是，与运行 FullJIT 编译器相比，复制发生的暂停时间通常要短得多。但这种方法的缺点是这种复制可能会遗漏某些优化所需的信息，因此它会在某种程度上降低代码质量来换取延迟。

在 JavaScriptCore 中，所有优化编译器与主线程 JavaScript  **完全并发** 运行，注意！这里没有复制！相反，主线程仅触发另一个线程上的编译作业。然后编译器使用复杂的锁定方案从主线程访问分析数据：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114010056.png)

这种方法的优点是它减少了由于 JavaScript 优化在主线程上引起的卡顿，缺点是它需要处理复杂的多线程问题并为各种操作付出一些锁定的成本。

到这里为止，我们已经讨论了使用解释器快速生成代码或使用优化编译器生成快速代码之间的权衡。但是还有另一个权衡：**内存使用**！为了说明这一点，下面是一个代码例子，它将两个数字相加：

```js
function add(x, y) {
	return x + y;
}

add(1, 2);
```

这是我们使用 V8 中的 Ignition 解释器为 add 函数生成的字节码：

```js
StackCheck
Ldar a1
Add a0, [0]
Return
```

**不用完全看懂字节码**，可以简单看出它只有四个指令。

当代码状态变成 hot 时，TurboFan 会生成以下高度优化的机器码：

```js
leaq rcx,[rip+0x0]
movq rcx,[rcx-0x37]
testb [rcx+0xf],0x1
jnz CompileLazyDeoptimizedCode
push rbp
movq rbp,rsp
push rsi
push rdi
cmpq rsp,[r13+0xe88]
jna StackOverflow
movq rax,[rbp+0x18]
test al,0x1
jnz Deoptimize
movq rbx,[rbp+0x10]
testb rbx,0x1
jnz Deoptimize
movq rdx,rbx
shrq rdx, 32
movq rcx,rax
shrq rcx, 32
addl rdx,rcx
jo Deoptimize
shlq rdx, 32
movq rax,rdx
movq rsp,rbp
pop rbp
ret 0x18
```

哇，好多字节码！一般来说，字节码往往比机器码更紧凑，尤其是优化的机器码。另一方面，字节码需要解释器才能运行，而优化后的代码可以直接由处理器执行。

这也是为什么 JavaScript 引擎不只有“优化所有代码”。正如我们之前看到的，生成优化的机器码需要很长时间，最重要的是，我们刚刚了解到 **优化的机器码也需要更多的内存**。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114010613.png)

> 简介： JavaScript 引擎具有很多的优化层的原因是因为需要使用解释器快速生成代码，也需要使用优化编译器生成快速代码。这是一个范围化的东西，添加更多优化层可以让你从 **额外的复杂性/开销** 和 **更细粒度的决策** 之间做出自己的选择。此外，**优化的级别** 和 **生成代码的内存使用** 之间也存在权衡。这就是 JavaScript 引擎尝试 **只优化热函数(hot function)** 的原因。

## 优化原型属性访问

[之前的文章](https://github.com/FEDarling/fe-translate-weekly/blob/master/JavaScript_Weekly/399/js_engine_shape_and_inline_caches.md) 解释了 JavaScript 引擎如何使用 Shapes 和 IC 优化对象属性加载。回顾一下，引擎将对象的 Shape 与 对象的值 分开存储：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114011019.png)

Shapes 支持一种称为 **行内缓存(Inline Caches，IC)** 的优化。结合起来，Shapes 和 IC 可以加快代码中同一位置的重复属性访问。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114011207.png)

###  类(Classes)和基于原型(prototype)的编程

现在我们知道了如何在 JavaScript 对象上快速访问属性，让我们看看 JavaScript 中最近添加的一个：类(Classes)。 JavaScript 类语法如下所示：

```js
class Bar {
	constructor(x) {
		this.x = x;
	}
	getX() {
		return this.x;
	}
}
```

尽管这似乎是 JavaScript 中的一个新概念，但它只是基于原型的编程的语法糖，一直在 JavaScript 中使用：

```js
function Bar(x) {
	this.x = x;
}

Bar.prototype.getX = function getX() {
	return this.x;
};
```

在这里，我们在 `Bar.prototype` 对象上分配了一个 `getX` 属性。这与任何其他对象的工作方式完全相同，因为原型也只是 JavaScript 中的对象！在 JavaScript 等一系列基于原型的编程语言中，方法通过原型共享，而字段存储在具体的实例中。

当我们创建一个名为 `foo` 的新 `Bar` 实例时，看看幕后发生了什么：

```js
const foo = new Bar(true);
```

运行上面的代码创建的实例具有单个属性 `“x”` 的 Shape。 `foo` 的原型是 `Bar` 类的 `Bar.prototype`：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114011543.png)

`Bar.prototype` 有它自己的 Shape，包含一个属性 `“getX”`，属性的值是函数 `getX`，它在调用时只返回 `this.x`。 `Bar.prototype` 的原型是 JavaScript 语言的 `Object.prototype`。` Object.prototype` 是原型树的根，因此它的原型为  `null`。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114011752.png)

如果你创建了另一个类的另一个实例，则两个实例都在我们之前讨论的情况下共享对象 Shape：两个实例都指向同一个 `Bar.prototype` 对象。

### 原型属性访问

好的，现在我们知道当我们定义一个类并创建一个新的实例时会发生什么。但是如果我们在实例上调用方法又会发生什么呢？

```js
class Bar {
	constructor(x) { this.x = x; }
	getX() { return this.x; }
}

const foo = new Bar(true);
const x = foo.getX();
//        ^^^^^^^^^^
```

我们把它拆分一下：

```js
const x = foo.getX();

// 其实就是两步

const $getX = foo.getX;
const x = $getX.call(foo);
```

第 1 步是加载方法，它只是原型上的一个属性（其值恰好是一个函数），第 2 步是以值为 `this` 的实例调用函数。让我们来看看第一步，即从实例 `foo` 加载方法 `getX`：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114012125.png)

引擎从 `foo` 实例开始，并发现 `foo`  的 Shape 上没有 `'getX'` 属性，因此它必须遍历原型链。我们到达 `Bar.prototype`，查看它的原型 Shape，看到它在offset `0` 处具有 `“getX”` 属性。我们在 `Bar.prototype` 中查找此 offset 处的值，并找到我们正在寻找的 `JSFunction getX`。整个过程就是这样！

JavaScript 可以用自己特有的灵活性改变原型链链接，例如：

```js
const foo = new Bar(true);
foo.getX();
// → true

Object.setPrototypeOf(foo, null);
foo.getX();
// → Uncaught TypeError: foo.getX is not a function
```

在这个例子中，我们调用了 `foo.getX()` 两次，但每次它的含义和结果都完全不同。这就是为什么？虽然原型只是 JavaScript 中的对象，但对于 JavaScript 引擎来说，加速原型属性访问比加速常规对象上自己的属性访问更有难度。

看看这个代码，加载原型属性是一个非常频繁的操作：每次调用方法时都会发生！

```js
class Bar {
	constructor(x) { this.x = x; }
	getX() { return this.x; }
}

const foo = new Bar(true);
const x = foo.getX();
//        ^^^^^^^^^^
```

之前，我们讨论了引擎如何通过使用 Shape 和 内联缓存 来优化加载常规的、自己的属性。那我们如何优化重复加载具有相似 Shape 的对象的原型属性？上面的图中我们看到了属性加载是如何发生的：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114012605.png)

为了在这种特殊情况下加快重复加载速度，我们需要知道这三点：

1. `foo` 的 Shape 不包含 `'getX'` 并且没有做改变。这意味着没有人通过添加、删除或更改属性来更改对象 `foo`。
2. `foo` 的原型仍然是最初的 `Bar.prototype`。这意味着没有人通过使用 `Object.setPrototypeOf()` 或设置特殊的 `__proto__` 属性来更改 `foo` 原型。
3. `Bar.prototype` 的 Shape 包含 `“getX”` 并且没有做改变。这意味着没有人通过添加、删除、或更改属性之来修改 `Bar.prototype`。

在一般情况下，这意味着我们必须对实例本身执行 1 次检查，再加上每个原型的 2 次检查，直到拥有我们正在寻找的属性的原型。 1+2N 检查（N 是涉及的原型的数量）在这种情况下可能听起来并不算太坏，因为原型链相对较浅 — 但引擎通常必须处理更长的原型链，例如在常见 DOM 的情况下类。就像下面这个例子：

```js
const anchor = document.createElement('a');
// → HTMLAnchorElement

const title = anchor.getAttribute('title');
```

我们有一个 `HTMLAnchorElement` 并在其上调用 `getAttribute()` 方法。这已经涉及到6个原型！大多数好用的 DOM 方法不在直接的 `HTMLAnchorElement` 原型上，而是在链的更高层：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114013048.png)

`getAttribute()` 方法可以在 `Element.prototype` 上找到。这意味着每次我们调用 `anchor.getAttribute()` 时，JavaScript 引擎需要做.....

1. 检查 `“getAttribute”` 是否不在 `anchor` 对象本身上
2. 检查直接原型是 `HTMLAnchorElement.prototype`
3. 确定那里没有“`getAttribute”`
4. 检查下一个原型是` HTMLElement.prototype`
5. 确定那里也没有 `“getAttribute”`
6. 最终检查下一个原型是 `Element.prototype`
7. 并且那里存在 `“getAttribute”`

总共有 **7** 次检查！这种代码在网络上很常见，引擎会应用一些技巧来减少原型上属性加载所需的检查次数。

再回到前面的例子，我们在 `foo` 上访问 `'getX'` 时总共执行了 3 次检查：

```js
class Bar {
	constructor(x) { this.x = x; }
	getX() { return this.x; }
}

const foo = new Bar(true);
const $getX = foo.getX;
```

每个携带该属性的原型对象，都需要进行 Shape 检查以查找是否缺失。如果我们可以通过把 **原型检查** 变成 **缺勤检查**， 以此来减少检查次数，那就太棒了。本质上这就是引擎使用了一个简单技巧做的事情：引擎不是将原型链存储在实例本身上，而是将其存储在 **Shape** 中。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114014249.png)

每个 Shape 都指向了原型。这也意味着每次 `foo` 的原型发生变化时，引擎都会转换为新的 Shape。现在我们只需要检查一个对象的 Shape 来断言某些属性是否缺失并保护原型链接。

通过这种方法，我们可以将所需的检查次数从 **1+2N** 减少到 1+N，从而更快地访问原型的属性。但这种方式代价也不小，原型链越长，代价也越高。引擎实现了不同的技巧来进一步减少检查的数量，特别是对于相同属性加载的后续执行。

### 有效单元格(ValidityCell)

V8 专门为这种原型 Shape 做处理。每个原型都有一个独特的 Shape，它不与任何其他对象共享（特别是不与其他原型共享），并且这些原型 Shape 中的每一个都有一个与之关联的特殊的 **有效单元格(ValidityCell)**。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114014721.png)

每当有人更改相关原型或它上面的任何原型时，此 ValidityCell 都会失效。让我们来看看它是如何工作的。

为了加快原型的后续加载，V8 放置了一个内联缓存，其中包含四个字段：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114014830.png)

在这段代码的第一次运行到预热内联缓存时，V8 会记住在原型中找到属性的offset、找到属性的原型（当前是 `Bar.prototype`）、实例的Shape（当前是 foo 的 Shape），以及从实例 Shape 链接到的直接原型的当前 ValidityCell 的链接（当前是 `Bar.prototype` ）。

下次命中内联缓存时，引擎必须检查实例的 Shape 和 ValidityCell。如果它仍然有效，引擎可以直接访问原型上的 offset，跳过额外的查找：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114015217.png)

当原型发生变化时，分配一个新的 Shape，之前的 ValidityCell 就失效了。所以 Inline Cache 在下次执行时会丢失，导致性能变差。

回到之前的 DOM 元素示例，这意味着对 `Object.prototype` 来说，不仅会使 `Object.prototype` 本身的内联缓存失效，还会使下面的任何原型失效，包括 `EventTarget.prototype`、`Node.prototype`、`Element.prototype` 等，一直到 `HTMLAnchorElement.prototype`：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220114015338.png)

实际上，在运行代码时修改 `Object.prototype` 意味着优先不考虑性能。尽量不要这样做！

让我们通过一个具体的例子来进一步探讨这一点。假设我们有我们的类 `Bar`，并且我们有一个函数 `loadX`，它调用 `Bar` 对象的方法。我们用同一个类的实例多次调用这个 loadX 函数：

```js
class Bar { /* … */ }

function loadX(bar) {
	return bar.getX(); // Bar 实例上的 getX 的 IC。
}

loadX(new Bar(true));
loadX(new Bar(false));
// loadX 中的 IC 现在为 Bar.prototype 链接 ValidityCell。

Object.prototype.newMethod = y => y;
// loadX IC中的 ValidityCell 现在无效，
// 因为 Object.prototype 发生了变化。
```

`loadX` 中的内联缓存现在指向 `Bar.prototype` 的 ValidityCell。如果你之后做一些像改变 `Object.prototype` 之类的事情。ValidityCell 就会失效，并且现有的内联缓存在下次被命中时会丢失，从而导致性能下降。

尽量不要改变 `Object.prototype` ，因为它会使引擎在此之前放置的原型加载的任何内联缓存失效。这是另一个错误的例子：

```js
Object.prototype.foo = function() { /* … */ };

someObject.foo();

delete Object.prototype.foo;
```

我们扩展了 `Object.prototype`，它使引擎在此之前放置的任何原型内联缓存都失效。然后我们运行一些使用新原型方法的代码。引擎必须从头开始并为所有原型属性访问设置新的内联缓存。最后，我们 “自行清理” 并删除我们之前添加的原型方法。

“自行清理” 看起来不错，但是在这种情况下，它会使情况变得更糟！删除该属性会修改 `Object.prototype`，因此所有内联缓存都会再次失效，引擎必须再次从头开始。

> 总结：虽然原型只是对象，但它们被 JavaScript 引擎特殊处理，从而优化原型上方法查找的性能。别管你的原型了！或者，如果你真的需要接触原型，那么在其他代码运行之前进行操作，这样你至少不会在代码运行时使引擎中的所有优化无效。

## 最后
我们已经了解了 JavaScript 引擎如何存储对象和类，以及 Shapes、Inline Caches 和 ValidityCells 如何帮助优化原型操作。基于这些知识，我们确定了一个实用的 JavaScript 编码技巧，可以帮助提高性能：不要弄乱原型（或者如果你真的非常需要，那么至少在其他代码运行之前这样做）。

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://mathiasbynens.be/notes/prototypes)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/399/js_engine_optimizing_prototype.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)