---
title: useEffect视觉指南
date: '2022-01-20 02:22:00'
categories:
 - React Status
tags:
 - React
sidebar: 'auto'
publish: true
---

当你尝试直接从 React 中的功能组件的主体中获取数据时会发生的情况👇

![initial](https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/effect-1.gif)

为什么会发生这种情况，React 提供了哪些工具来解决这个问题？

## 副作用 Side Effects

如果你的 React 组件影响了它自身之外的任何东西，那么它就被称为副作用。

![React 中的副作用示例](https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/side-effect-3.png)

然而在组件渲染期间不应该发生副作用，因此它们不属于功能组件的主体，
所以React 为他们提供了一个特殊的位置。

> 要了解更多关于副作用以及它们为什么需要特殊处理的信息，请查看新的 React 文档 - [Keeping Components Pure](https://beta.reactjs.org/learn/keeping-components-pure)中的精彩部分。

## 处理副作用

副作用的特殊位置在`useEffect`钩子内部，而useEffect的名称就是由此来的。

> 通过使用这个 Hook，告诉 React 你的组件需要在渲染之后做一些事情。React 会记住您传递的函数（我们将其称为“effect(效果)”），并在执行 DOM 更新后调用它。
>
>  [React Docs - Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html#example-using-hooks)

`useEffect`在渲染期间不会运行, 它会在渲染之后运行。但是现在仍然有同样的问题，因为在默认情况下，`useEffect`将在每个组件渲染后运行。

让我们尝试一下我们的初始组件：

![video1](https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/effect-1.gif)

## 有条件地运行Effect(效果)

有一种方法可以让Effect不在每次渲染之后执行，而是有条件的执行。`useEffect`钩子接受依赖列表作为第二个参数，只有列表中的任何依赖项发生更改，React 才会重新运行效果。让我们试一试：

![video1](https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/effect-2.gif)

当你传递一个空数组作为依赖列表时，效果只会在第一次渲染后运行一次。它可以防止在我们的案例中发生无限循环。但是，你可能会注意到我们的 fetch 函数依赖于`props.id`.

## 对变化作出反应

让我们从上次停下来的地方继续，看看当我们改变组件的 props 时会发生什么。

![props-1](https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status/props-1.gif)

我们希望组件对 prop 更改做出反应并获取另一个product，但现在的情况是没有任何反应，这是因为我们传入的是一个空的依赖列表。

如果副作用依赖于任何props或state，我们应该将它们放在依赖列表中。每次渲染后，React 都会检查是否有任何依赖项发生了变化，如果发生了，将重新运行效果。

![props-2](https://cdn.jsdelivr.net/gh/LilyChenlin/-imageStore/React%20Status//props-2.gif)

## 相关链接

[原文链接](https://alexsidorenko.com/blog/useeffect/)
