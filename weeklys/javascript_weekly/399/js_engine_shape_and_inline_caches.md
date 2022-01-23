---
title: JavaScript引擎基础(上)：形态和内联缓存
date: '2018-08-17'
tags:
 - JavaScript Weekly
publish: true
---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://mathiasbynens.be/notes/shapes-ics)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/399/js_engine_shape_and_inline_caches.md)
> * 译者：[daodaolee](https://github.com/daodaolee)
> * 校对者：[daodaolee](https://github.com/daodaolee)

本文描述 JavaScript 引擎中通用的一些关键的基础知识——不仅仅是 [V8](https://twitter.com/v8js)。作为一名 JavaScript 开发人员，对 JavaScript 引擎的工作原理深入了解一下有助于你更好的编写代码。

## JavaScript 引擎管道
 JavaScript 代码在运行时候， JavaScript 引擎会解析源代码并将其转换为抽象语法树 (AST)。基于该 AST，解释器会执行自己的任务并生成字节码。WOW！引擎这时候实际上正在执行着你写的 JavaScript 代码。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113220929.png)

为了使其运行得更快，可以将字节码与数据分析一起发送到优化编译器。优化编译器根据这些数据做出判断，然后生成高度优化的机器代码。

如果在执行过程期间某个执行错误了，优化编译器会取消优化并返回到解释器。

### JavaScript 引擎中的解释器/编译器管道
现在，让我们看下这个管道中实际运行 JavaScript 代码的部分，也就是代码被解释和优化的地方。

一般来说，会有一个包含解释器和优化编译器的管道。解释器快速生成未优化的字节码，然后优化编译器通过耗时稍长的逻辑来生成最终高度优化的机器码。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113221324.png)

这个管道基本上就是 V8（Chrome 和 Node.js 中使用的 JavaScript 引擎）的工作原理：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113221427.png)

V8 中的解释器的名字叫 **火花塞(Ignition)**，负责生成和执行字节码。在运行字节码时，它会收集分析数据，这些数据可用于稍后加快执行速度。当一个函数运行时，生成的字节码和分析数据被传递给我们的优化编译器 **涡轮风扇(TurboFan)**，从而根据分析数据生成高度优化的机器代码。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113221648.png)

**SpiderMonkey** 是 Mozilla 在 Firefox 和 SpiderNode 中使用的 JavaScript 引擎，它的做法略有不同。他们不是一个，而是两个优化编译器：**基准编译器(Baseline compiler)** 和 **离子猴编译器(IonMonkey compiler)**。解释器优化到基准编译器时，会输出一些优化的代码。结合运行代码时收集的分析数据，离子猴编译器可以生成高度优化的代码。如果中途优化失败，离子猴编译器会退回到基准代码。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113222115.png)

**Chakra** 是 Microsoft 在 Edge 和 [Node-ChakraCore](https://github.com/nodejs/node-chakracore) 中使用的 JavaScript 引擎，也带有两个优化编译器：**简易编译器(SimpleJIT)** 和 **完全体编译器(FullJIT)**。解释器优化为 **简易编译器** — 其中 **JIT** 代表 Just-In-Time 编译器，该编译器会产生一些优化的代码。然后结合分析数据，完全体编译器可以生成更加优化的代码。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113222456.png)

**JavaScriptCore(JSC)** 是 Apple 在 Safari 和 React Native 中使用的 JavaScript 引擎，它通过三种不同的优化编译器将其发挥到了极致：**低级解释器( LLInt，low-level-Interprete)**，优化到 **基准编译器(Baseline compiler)**，然后优化到 **数据流图形编译器(DFG，Data Flow Graph)**，而 DFG 编译器又可以优化到 **超光速编译器(FTL，Faster Than Light)**。

那为什么有些厂商的引擎比其他的优化编译器的个数要多呢？当然这些都是权衡之后的。解释器可以快速生成字节码，但字节码通常效率不高。另一方面，优化编译器的执行需要更长的时间，但最终会产生更高效的机器代码。一些引擎会选择添加具有不同时间/效率的多个优化编译器，以牺牲更多的复杂性为代价来增加更细粒度的控制权。除此之外，内存也是一个权衡引擎个数和工作流程要考虑的原因，相关文章请见：[JavaScript引擎基础(下)：优化原型](https://github.com/FEDarling/fe-translate-weekly/blob/master/JavaScript_Weekly/399/js_engine_optimizing_prototype.md)。

到现在为止，我们介绍了每个 JavaScript 引擎的解释器和优化编译器管道的区别。除了这些差异之外，在高层次上，所有 JavaScript 引擎都具有相同的架构：**有一个解析器和某种解释器/编译器管道**。

## JavaScript 对象模型

通过放大代码的内部结构来看看 JavaScript 引擎还有哪些共同点。比如这个问题，JavaScript 引擎是如何实现 JavaScript 对象模型的，它们使用哪些技巧来加速访问 JavaScript 对象的属性？

ECMAScript 规范本质上将所有对象定义为字典：字符串key 映射到 [property 属性](https://tc39.es/ecma262/#sec-property-attributes)。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113235201.png)

除了 `[[Value]]` 本身之外，规范还定义了以下属性：

* `[[Writable]]`  属性表示是否可以重写
* `[[Enumerable]]`  属性表示是否可以枚举
* `[[Configurable]]` 表示是否可以删除该属性

`[[xx]]` 这个双括号写法看起来很时髦，但这确实是规范，表示不直接暴露给 JavaScript 的属性的方式。你可以使用 `Object.getOwnPropertyDescriptor` 这个 API 来获取 JavaScript 中任何给定对象和属性的这些值：

```js
const object = { foo: 42 };
Object.getOwnPropertyDescriptor(object, 'foo');
// → { value: 42, writable: true, enumerable: true, configurable: true }
```

OK！这就是 JavaScript 定义对象的方式，那，数组呢？

你可以将数组视为对象的一种特殊情况。

其中有一个区别就是数组对数组索引有着特殊的处理。这里所说的数组索引是 ECMAScript 规范中的一个特殊术语。数组的长度 JavaScript 中被限制为 2³²−1 。数组的索引是该限制内的任何有效索引，即从 0 到 2³²−2 的任意整数。

另一个区别是数组有一个 **length** 属性：

```js
const array = ['a', 'b'];
array.length; // → 2
array[2] = 'c';
array.length; // → 3
```

在此示例中，数组在创建时的长度为 2。然后我们将另一个元素分配给索引 2，长度便会自动更新。

JavaScript 定义数组的方式与对象类似。例如，包括数组索引在内的所有键都明确表示为字符串。数组中的第一个元素存储在键“0”下。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113225414.png)

`length` 属性只是一个碰巧不可枚举且不可配置的属性。

将元素添加到数组后，JavaScript 会自动更新 `length` 属性的 `[[Value]]` ：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113225546.png)

## 优化属性访问

到此为止我们知道了对象是如何在 JavaScript 中定义的，现在让我们深入了解 JavaScript 引擎是如何有效地处理对象的。

纵观 JavaScript 程序，访问属性是最常见的操作，所以让 JavaScript 引擎快速访问属性至关重要。

```js
const object = {
	foo: 'bar',
	baz: 'qux',
};

// Here, we’re accessing the property `foo` on `object`:
doSomething(object.foo);
//          ^^^^^^^^^^
```

### 形态(Shape)

在 JavaScript 程序中，多个对象具有相同的属性键是很常见的，这些对象具有相同的形态：

```js
const object1 = { x: 1, y: 2 };
const object2 = { x: 3, y: 4 };
// `object1` 和 `object2` 长的一样.
```

在具有相同形态的对象上访问相同的属性也很常见：

```js
function logX(object) {
	console.log(object.x);
	//          ^^^^^^^^
}

const object1 = { x: 1, y: 2 };
const object2 = { x: 3, y: 4 };

logX(object1);
logX(object2);
```

从这里可以看出，JavaScript 引擎可以根据对象的形态优化对象属性访问，这也是它的工作原理。

假设我们有一个具有属性 `x` 和 `y` 的对象，它使用我们之前讨论过的字典数据结构：包含作为字符串的键，并且这些键指向它们各自的属性：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113225930.png)

如果你想访问一个属性，例如 `object.y`，JavaScript 引擎会在 `JSObject` 中查找键 `'y'`，然后加载相应的属性，最后返回 `[[Value]]`。

但是这些属性存储在内存中的什么位置呢？我们应该将它们存储为 `JSObject` 的一部分吗？如果我们以后经常看到这种结构的对象，那么这种完整的字典格式存储在 `JSObject` 上是很浪费的，因为属性名称对于具有相同形态的所有对象都是重复的！这样会导致很多重复和不必要的内存使用。此时有一个优化方案：引擎单独存储对象的形态。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113230354.png)

该引擎包含了除了它们的 `[[Value]]`之外所有属性名称和属性值。**形态(Shape)** 里包含 `JSObject` 内部值的offset，以便 JavaScript 引擎知道在哪里可以找到这些值。每个具有相同形状的 `JSObject` 都指向这个 Shape 实例。现在每个 `JSObject` 只需要存储该对象唯一的值即可。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113230617.png)

当我们有多个对象时，这种方法就显得很好。**不管有多少对象，只要它们的形态相同，我们只需要存储一次Shape和属性信息！**

所有 JavaScript 引擎都使用 Shape 作为优化，但它们并不都称它们为形态：

* 学术论文称它们为隐藏类（混淆 w.r.t. JavaScript 类）
* V8 称它们为 Maps（混淆 w.r.t. JavaScript Maps）
* Chakra 称它们为类型（混淆 w.r.t. JavaScript 的动态类型和 typeof）
* JavaScriptCore 称它们为结构
* SpiderMonkey 称它们为形态

在该篇文章中，我们将继续使用术语 — 形态。

### 转换链和树(Transition chains and trees)

如果你有一个具有特定形态的对象，随后向它添加了一个属性，会发生什么？ JavaScript 引擎如何找到新的形态？

```js
const object = {};
object.x = 5;
object.y = 6;
```

这些形态在 JavaScript 引擎中形成所谓的转换链，看下面这个例子：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113231001.png)

该对象最开始没有任何属性，因此它指向了空 Shape。下面一条语句将值为 `5` 的属性 `“x”` 添加到此对象，因此 JavaScript 引擎转换为包含属性 `“x”` 的 Shape，并且在第一个offset `0` 处将值 `5` 添加到 `JSObject`。接着，下一行添加了一个属性 `“y”`，引擎会转换到另一个包含 `“x”` 和 `“y”` 的 Shape，并将值 `6` 附加到 `JSObject`（offset 1）上。

> 注意：添加属性的顺序会影响形态。例如，{ x: 4, y: 5 } 会产生与 { y: 5, x: 4 } 不同的形态。

我们不需要为每个 `Shape` 存储完整的属性表。相反，每个 Shape 只需要知道它引入的新属性即可。例如，在这种情况下，我们不必将关于 `“x”` 的信息存储在最后一个 Shape 中，因为它可以在链的头部位置找到。为了正确解析，每个 Shape 都链接回其先前的形状：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113231520.png)

如果你在 JavaScript 代码中编写` o.x`，则 JavaScript 引擎会通过遍历转换链来查找属性 `“x”`，直到找到引入属性 `“x”` 的 `Shape`。

那，如果无法创建转换链会怎样？例如，如果你有两个空对象，并且为每个对象添加不同的属性怎么办？

```js
const object1 = {};
object1.x = 5;
const object2 = {};
object2.y = 6;
```

在这种情况下，我们得利用分支，而不是链，最终可以得到一个转换树：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113231741.png)

如上图，我们创建一个空对象 `a`，然后为其添加一个属性 `“x”`。我们最终得到一个包含 单个值 和 两个 Shape 的 `JSObject`：空Shape 和 只有属性 `x` 的 Shape。

第二个示例也以空对象 `b` 开头，随后添加了不同的属性 `“y”`。我们最终得到两个 Shape 链，总共有三个Shape。

那是不是说我们一定要从空的 Shape 开始执行呢？不是的。引擎对已经包含属性的对象应用了一些优化。看下面这个例子，从空对象字面量开始添加 `x` 和 拥有一个已经包含 `x` 的对象字面量：

```js
const object1 = {};
object1.x = 5;
const object2 = { x: 6 };
```

在 object1 中，我们从空 Shape 开始并执行转换到包含 `x` 的Shape，在 object2 中，直接生成了一个从一开始就已经有 `x` 的对象。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113232323.png)

包含属性 `“x”` 的对象字面量从包含 `“x”` 的 Shape 开始执行，直接跳过了 空Shape！这就是 V8 和 SpiderMonkey 所做的。这种优化缩短了转换链，并提高了构造对象的效率。

下面是一个具有 `“x”`、`“y”` 和 `“z”` 属性的 3D 点位对象的示例：

```js
const point = {};
point.x = 4;
point.y = 5;
point.z = 6;
```

正如我们之前所了解的，这会在内存中创建一个具有 3 个 Shape 的对象（除空Shape之外）。如果你在程序中编写 `point.x`，JavaScript 引擎就会遵循链表：从底部的 Shape 开始，然后一直到顶部引入了 `“x”` 的 Shape 结束。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113232714.png)

如果我们更频繁地这样做，效率就会非常慢，尤其是当对象有很多属性时。找到属性的时间是 O(n)，即对象的属性数量是线性的。为了加快属性搜索速度，JavaScript 引擎添加了一个 ShapeTable 数据结构。这个 ShapeTable 是一个字典，将属性键映射到引入给定属性的各个 Shapes。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113232822.png)

现在，我们回到字典查找，也就是我们开始添加 Shape 之前的位置！显然要查找很多很多次！这时候怎么办？

Shape 启用了另一种称为 **内联缓存** 的优化。

### 内联缓存(Inline Caches，ICs)

Shape 背后的主要逻辑是 **内联缓存**(IC) 。 IC 是让 JavaScript 快速运行的关键因素！ JavaScript 引擎使用 IC 来记忆有关在何处查找对象属性的信息，以减少昂贵的查找次数。
这是一个 `getX` 函数，它接受一个对象参数并从中加载属性 x：

```js
function getX(o) {
	return o.x;
}
```

如果我们在 JSC 中运行这个函数，它会生成以下字节码：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113235749.png)

第一条 `get_by_id` 指令从第一个参数 (arg1) 加载属性 `“x”` 并将结果存储到 `loc0`。第二条指令将我们存储的内容返回到 `loc0`。
JSC 还在 `get_by_id` 指令中嵌入了一个内联缓存，该指令由两个未初始化的插槽组成：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113233432.png)

现在假设我们传入一个对象 `{ x: 'a' }` 给 `getX`。正如我们所了解的，这个对象有一个带有属性 `“x”` 的 Shape，并且该 Shape 存储了该属性 `x` 的offset和属性。第一次执行该函数时，`get_by_id` 指令查找属性 `'x'` 并发现该值存储在offset `0` 处：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113233700.png)

嵌入到 `get_by_id` 指令中的 `IC` 会记住找到属性的 Shape 和offset：

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113235630.png)

对于后续的运行，IC只需比较 Shape 即可，如果与之前相同，则从内存的offset中加载值。具体来说，如果 JavaScript 引擎看到具有 IC 之前记录的 Shape 的对象，它就不再需要访问属性信息——相反，可以完全跳过代价极大的属性信息查找。这比每次查找属性要快得多。

## 高效存储数组

对于数组，通常会存储作为数组索引的属性，此类属性的值称为数组元素。在每个数组中存储每个数组元素的属性都会浪费内存。相反，JavaScript 引擎会使用数组索引属性操作（是可写、可枚举和可配置的时候），并将数组元素与其他命名属性分开存储。

来看这个例子：

```js
const array = [
	'#jsconfeu',
];
```

引擎存储数组长度为 1，并指向包含offset  和 “length”属性 的 Shape。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113234314.png)

这与我们之前看到的结构很像，但是数组值存储在哪里？

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113234359.png)

每个数组都有一个单独的元素后备存储，其中包含所有数组索引的属性值。 JavaScript 引擎不必为数组元素存储任何属性，因为通常它们都是可写、可枚举和可配置的。
但是，在不寻常的情况下会发生什么？如果更改数组元素的属性属性怎么办？

```js
// 千万不要这样做！
const array = Object.defineProperty(
	[],
	'0',
	{
		value: 'Oh noes!!1',
		writable: false,
		enumerable: false,
		configurable: false,
	}
);
```

上面的代码片段定义了一个名为 `'0'` 的属性（它恰好是一个数组索引），但将其属性设置为非默认值。
在这种边缘情况下，JavaScript 引擎将整个后备存储元素表示为将数组索引映射到属性属的字典。

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220113235823.png)

即使只有一个数组元素具有非默认属性，整个数组的后备存储也会进入这种缓慢且低效的模式。一定要避免在数组索引上使用 `Object.defineProperty`！

## 最后

我们已经了解了 JavaScript 引擎如何存储对象和数组，以及 Shapes 和 IC 如何帮助优化它们的常见操作。基于这些知识，我们确定了一些有助于提高性能的实用 JavaScript 编码技巧：

* 始终以相同的方式初始化你的对象，它们最终不会具有不同的 Shape。
* 不要乱用数组元素的属性。

## 相关资料

[JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)