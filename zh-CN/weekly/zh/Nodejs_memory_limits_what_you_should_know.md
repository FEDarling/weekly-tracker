---
title: '你需要了解的 Node.js 内存限制'
date: '2021-12-09'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags:
  - 'Node'
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

在本篇文章中，我将探索一下 Node 中的堆内存分配，然后试试看把内存提高到硬件能承受的极限。然后我们将找到一些实用的方法来监控 Node 的进程以调试内存相关问题。

OK，准备完成就发车！

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

大家可以在仓库拉一下相关代码 [clone the code from my GitHub](https://github.com/beautifulcoder/node-memory-limitations).

## V8 垃圾回收简介

首先，简单介绍一下 V8 垃圾回收器。内存的存储分配方式是堆（heap），堆被分为几个世代（generational）区域。 对象在它的生命周期中随着年龄的变化，它所属的世代也有所不同。

世代中分为年轻一代和老一代，而年轻的一代还分为了新生代和中间代。随着对象在垃圾回收中幸存下来，它们也会加入老一代。

![image.png](https://v8.dev/_img/trash-talk/02.svg)

世代假说的基本原则是大多数对象都是年轻的。V8 垃圾回收器基于这一点，只提升在垃圾回收中幸存下来的对象。随着对象被复制到相邻区域，它们最终会进入老一代。

在 Node 中内存消耗主要分为三个方面：

-   代码-代码执行时所在的位置
-   调用栈-用于存放具有原始类型（数字，字符串或布尔值）的函数和局部变量
-   堆内存

堆内存是我们今天的主要关注点。 现在您对垃圾回收器有了更多的了解，是时候在堆上分配一些内存了！

```js
function allocateMemory(size) {
    // Simulate allocation of bytes
    const numbers = size / 8;
    const arr = [];
    arr.length = numbers;
    for (let i = 0; i < numbers; i++) {
        arr[i] = i;
    }
    return arr;
}
```

在调用栈中，局部变量随着函数调用结束而销毁。基础类型 `number`永远不会进入堆内存，而是在调用栈中分配。但是对象 arr 将进入堆中并且可能在垃圾回收中幸存下来。

## 堆内存有限制吗？

现在进行勇敢测试——将 Node 进程推到极限看看在哪个地方会耗尽堆内存：

```js
const memoryLeakAllocations = [];

const field = 'heapUsed';
const allocationStep = 10000 * 1024; // 10MB

const TIME_INTERVAL_IN_MSEC = 40;

setInterval(() => {
    const allocation = allocateMemory(allocationStep);

    memoryLeakAllocations.push(allocation);

    const mu = process.memoryUsage();
    // # bytes / KB / MB / GB
    const gbNow = mu[field] / 1024 / 1024 / 1024;
    const gbRounded = Math.round(gbNow * 100) / 100;

    console.log(`Heap allocated ${gbRounded} GB`);
}, TIME_INTERVAL_IN_MSEC);
```

在上面的代码中，我们以 40 毫秒的间隔分配了大约 10 mb，为垃圾回收提供了足够的时间来将幸存的对象提升到老年代。`process.memoryUsage` 是一个用于回收有关堆利用率的粗略指标的工具。随着堆分配的增长，heapUsed 字段会记录堆的大小。这个字段记录 RAM 中的字节数，可以转换为 mb。

你的结果可能会有所不同。在 32GB 内存的 Windows 10 笔记本电脑会得到以下结果：

```log
Heap allocated 4 GB
Heap allocated 4.01 GB

<--- Last few GCs --->

[18820:000001A45B4680A0] 26146 ms: Mark-sweep (reduce) 4103.7 (4107.3) -> 4103.7 (4108.3) MB, 1196.5 / 0.0 ms (average mu = 0.112, current mu = 0.000) last resort GC in old space requested

<--- JS stacktrace --->

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```

在这里，垃圾回收器将尝试压缩内存作为最后的手段，最后放弃并抛出“堆内存不足”异常。这个过程达到了 4.1GB 的限制，需要 26.6 秒才能意识到要把服务给挂掉了。

导致以上结果的原因有些还未知。V8 垃圾回收器最初运行在具有严格内存限制的 32 位浏览器进程中。这些结果表明内存限制可能已经从遗留代码中继承下来。

在撰写本文时，以上代码在最新的 LTS Node 版本下运行，并且使用的是 64 位可执行文件。从理论上讲，一个 64 位进程应该能够分配超过 4GB 的空间，并且可以轻松地增长到 16 TB 的地址空间。

## 扩大内存分配限制

```shell
node index.js --max-old-space-size=8000
```

这将最大限制设置为 8GB。这样做时要小心。我的笔记本电脑有 32GB 的空间。我建议将其设置为 RAM 中实际可用的空间。一旦物理内存耗尽，进程就会开始通过虚拟内存占用磁盘空间。如果您将限制设置得太高，你就 get 了换电脑的新理由，这里咱们尽量避免电脑冒烟了哈~

我们再用 8GB 的限制再跑一次代码：

```log
Heap allocated 7.8 GB
Heap allocated 7.81 GB

<--- Last few GCs --->

[16976:000001ACB8FEB330] 45701 ms: Mark-sweep (reduce) 8000.2 (8005.3) -> 8000.2 (8006.3) MB, 1468.4 / 0.0 ms (average mu = 0.211, current mu = 0.000) last resort GC in old space requested

<--- JS stacktrace --->

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```

这一次堆的大小几乎达到 8GB，但没完全达到。我怀疑是 Node 进程中有一些开销用于分配这么多内存。这次进程结束需要 45.7 秒。

在生产环境中，内存全部用完可能不会少于一分钟。这就是监控和洞察内存消耗有帮助的原因之一。内存消耗会随着时间的推移缓慢增长，并且可能需要几天时间才能知道存在问题。如果进程不断崩溃并且日志中出现“堆内存不足”异常，则代码中可能存在内存泄漏。

进程也可能会占用更多内存，因为它正在处理更多数据。如果资源消耗继续增长，可能是时候将这个单体分解为微服务了。这将减少单个进程的内存压力，并允许节点水平扩展。

## 如何跟踪 Node.js 内存泄漏

process.memoryUsage 的 heapUsed 字段还是有点用的，调试内存泄漏的一个方法是将内存指标放在另一个工具中以进行进一步处理。由于此实现并不复杂，因此主要解析下如何亲自实现。

```js
const path = require('path');
const fs = require('fs');
const os = require('os');

const start = Date.now();
const LOG_FILE = path.join(__dirname, 'memory-usage.csv');

fs.writeFile(LOG_FILE, 'Time Alive (secs),Memory GB' + os.EOL, () => {}); // 请求-确认
```

为了避免将堆分配指标放在内存中，我们选择将结果写入 CSV 文件以方便数据消耗。这里使用了 writeFile 带有回调的异步函数。回调为空以写入文件并继续，无需任何进一步处理。 要获取渐进式内存指标，请将其添加到 console.log：

```js
const elapsedTimeInSecs = (Date.now() - start) / 1000;
const timeRounded = Math.round(elapsedTimeInSecs * 100) / 100;

s.appendFile(LOG_FILE, timeRounded + ',' + gbRounded + os.EOL, () => {}); // 请求-确认
```

上面这段代码可以用来调试内存泄漏的情况下，堆内存随着时间变化而增长。你可以使用一些分析工具来解析原生 csv 数据以实现一个比较漂亮的可视化。

如果你只是赶着看看数据的情况，直接用 excel 也可以，如下图：

![image.png](./img/1.png)

在限制为 4.1GB 的情况下，你可以看到内存的使用率在短时间内呈线性增长。内存的消耗在持续的增长并没有变得平缓，这个说明了某个地方存在内存泄漏。在我们调试这类问题的时候，我们要寻找在分配在老世代结束时的那部分代码。

对象如果再在垃圾回收时幸存下来，就可能会一直存在，直到进程终止。

使用这段内存泄漏检测代码更具复用性的一种方法是将其包装在自己的时间间隔内（因为它不必存在于主循环中）。

```js
setInterval(() => {
    const mu = process.memoryUsage();
    // # bytes / KB / MB / GB
    const gbNow = mu[field] / 1024 / 1024 / 1024;
    const gbRounded = Math.round(gbNow * 100) / 100;

    const elapsedTimeInSecs = (Date.now() - start) / 1000;
    const timeRounded = Math.round(elapsedTimeInSecs * 100) / 100;

    fs.appendFile(LOG_FILE, timeRounded + ',' + gbRounded + os.EOL, () => {}); // fire-and-forget
}, TIME_INTERVAL_IN_MSEC);
```

要注意上面这些方法并不能直接在生产环境中使用，仅仅只是告诉你如何在本地环境调试内存泄漏。在实际实现时还包括了自动显示、警报和轮换日志，这样服务器才不会耗尽磁盘空间。

## 跟踪生产环境中的 Node.js 内存泄漏

尽管上面的代码在生产环境中不可行，但我们已经看到了如何去调试内存泄漏。因此，作为替代方案，可以将 Node 进程包裹在[ PM2 之类](https://pm2.keymetrics.io/docs/usage/restart-strategies/) 的 [守护进程](https://pm2.keymetrics.io/docs/usage/restart-strategies/) 中。

当内存消耗达到限制时设置重启策略：

```shell
pm2 start index.js --max-memory-restart 8G
```

单位可以是 K（千字节）、M（兆字节）和 G（千兆字节）。进程重启大约需要 30 秒，因此通过负载均衡器配置多个节点以避免中断。

另一个漂亮的工具是跨平台的原生模块[node-memwatch](https://github.com/lloyd/node-memwatch)，它在检测到运行代码中的内存泄漏时触发一个事件。

```js
const memwatch = require('memwatch');

memwatch.on('leak', function (info) {
    // event emitted
    console.log(info.reason);
});
```

事件通过 leak 触发，并且它的回调对象中有一个 reason 会随着连续垃圾回收的堆增长而增长。

使用 AppSignal 的 Magic Dashboard 诊断内存限制

[AppSignal 有一个神奇的仪表板，用于](https://blog.appsignal.com/2021/01/19/nodejs-garbage-collection-heap-statistics-magic-dashboard-metrics.html)监控堆增长的[垃圾收集统计信息](https://blog.appsignal.com/2021/01/19/nodejs-garbage-collection-heap-statistics-magic-dashboard-metrics.html)。 ![image.png](./img/2.png)

上图显示请求在 14:25 左右停止了 7 分钟，允许垃圾回收以减少内存压力。当对象在旧的空间中停留太久并导致内存泄漏时，仪表板也会暴露出来。

## 总结：解决 Node.js 内存限制和泄漏

在这篇文章中，我们首先了解了 V8 垃圾回收器的作用，然后再探讨堆内存是否存在限制以及如何扩展内存分配限制。

最后，我们使用了一些潜在的工具来密切关注 Node.js 中的内存泄漏。我们看到内存分配的监控可以通过使用一些粗略的工具方法来实现，比如**memoryUsage**一些调试方法。在这里，分析仍然是手动实现的。

另一种选择是使用 AppSignal 等专业工具，它提供监控、警报和漂亮的可视化来实时诊断内存问题。

## 希望你喜欢这篇关于内存限制和诊断内存泄漏的快速介绍。

> - 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> - [查看原文](https://blog.appsignal.com/2021/12/08/nodejs-memory-limits-what-you-should-know.html)对比阅读
> - 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/node_weekly/417/Nodejs_memory_limits_what_you_should_know.md)
> - 译者：[oil-oil](https://github.com/oil-oil)
> - 校对者：[daodaolee](https://github.com/daodaolee)
