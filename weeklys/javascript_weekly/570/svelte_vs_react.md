---
title: 比较 Svelte 和 React
date: '2022-01-20 02:22:00'
tags:
 - JavaScript Weekly
---

## 前言

`Pomodone`：一个小型时间跟踪应用程序，基于以 25 分钟为间隔工作的番茄工作法。它有一个 25 分钟的计时器（在 Web Worker 中运行）并将“poms”的历史记录保存到一个小型 Firebase 数据库中，[传送门](https://pomod.one/)

## 二者的用法

React的钩子是一个很好的封装，我创建了一个 `useCurrentUser` 钩子，让它侦听身份验证的变化并相应地设置一些状态。然后，当注意到身份验证变化时，我就可以确信 React 会按需重新渲染。

```react
export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((details) => {
      setCurrentUser(
        details
          ? {
              displayName: details.displayName,
              provider: {
                'google.com': 'Google',
                'github.com': 'GitHub',
              }[details.providerData[0].providerId],
              uid: details.uid,
            }
          : null
      )
    })
  }, [])
  return [currentUser]
}
```

在任何组件里，可以这样写：

```react
const [currentUser] = useCurrentUser()
```

这种写法，工作量很小，并且可以让任何组件快速访问当前用户。唯一的缺点就是可能有很多 `onAuthStateChanged` 监听器，这个时候可以通过仅绑定一个监听器 或者 将当前用户放到当前上下文中来避免。

说到上下文，更接近于在 Svelte 中的写法：`Writable Store`

```js
export const currentUser = writable()

export const listenForAuthChanges = () => {
  return firebase.auth().onAuthStateChanged((details) => {
    if (details) {
      currentUser.set({
        displayName: details.displayName,
        provider: {
          'google.com': 'Google',
          'github.com': 'GitHub',
        }[details.providerData[0].providerId],
        uid: details.uid,
      })
    } else {
      currentUser.set(null)
    }
  })
}
```

在高级 Svelte 组件中，可以在 `onMount` 中调用它，它会在组件安装的时候运行一次（该方法会被返回，所以可以在移除组件的时候取消订阅，就像 useEffect 返回一个函数一样）

```js
onMount(() => {
  return listenForAuthChanges()
})
```

现在，在 Svelte 代码里的任何位置，组件都可以导入 `currentUser` 可写store。我比较在意的是，`currentUser` 不是一个值，而是一个store，因此有绝对的状态控制权。当然也可以订阅它并手动修改状态的改变：

```js
currentUser.subscribe(newValue => {
  ...
})
```

或者，如果只想读取最新的值，可以加一个 `$` 前缀：

```js
console.log($currentUser)
```

以上就是 Svelte 的一些语法技巧，`$` 符号会自动订阅store里最新的值，它的好处就是 Svelte 不会每次需要读取最新的值的时候都得订阅一次。

简单来说，两个库似乎都采用了类似的方法：都允许订阅一个 `Firebase` 监听器(上文的demo)，并在状态发生变化的时候更新数据。

## 使用 Worker

我设计的 [Pomodone]((https://pomod.one/)) 必须保持尽可能准确的 25 分钟的计时器运行。如果浏览器选项卡在后台（例如，不是焦点选项卡），大多数浏览器将降低其 setTimeout 调用的优先级，而不是严格按时间运行它们。大多数时候在网络上这不是什么大问题，但是当用户通过您的应用跟踪 25 分钟的工作时，问题就出现了！此外，在 25 分钟的过程中，任何微小的时间差都会导致最终时间相距甚远。但是，如果这些超时被移到 Web Worker 中，它们就会按时运行并且不会被浏览器取消优先级。

因此，在我的 `Tracker` 组件里，需要实例化一个 web worker，发送信息并接收数据（比如剩余时间）。我发现 React 比 Svelte 管理要繁琐。因为每次重新渲染组件时都会重新执行 React 组件，所以就会很容易创建上千个 worker，此时就需要使用 `useRef` 来引用所创建的 worker ，从而避免这个问题。

首先，我设置了组件所需的初始状态：

```react
const [currentPom, setCurrentPom] = useState(null)
const [currentUser] = useCurrentUser()
const worker = useRef(null)
```

然后，创建一个 useEffect 钩子来实例化 worker，必要的话，再绑定一个事件：

```react
useEffect(() => {
  if (!worker.current) {
    worker.current = new Worker(workerURL)
    window.worker = worker.current
  }

  const onMessage = (event) => {
    if (event.data.name === 'tick') {
      setCurrentPom((currentPom) => ({
        ...currentPom,
        secondsRemaining: event.data.counter,
      }))
    } else if (event.data.name === 'start') {
      // More branches removed here to save space...
    }
  }
  worker.current.addEventListener('message', onMessage)

  return () => {
    worker.current.removeEventListener('message', onMessage)
  }
}, [currentUser])
```

接下来，当用户点击 `Start` 按钮的时候，就会给 worker 发送一个消息：

```react
const onStartPom = () => {
  if (!worker.current) return
  worker.current.postMessage('startTimer')
}
```

如果用 Svelte 写的话，代码很类似，不过有两个地方会更简便：

1. 不必将 worker 保留在 userRef 上，只需要分配一个变量就好
2. 可以将事件监听封装到函数里，该函数也不会成为 userEffect 的依赖 — 也就是封装到 userCallback 里。

```js
let worker
onMount(() => {
  worker = new Worker(workerURL)
  worker.addEventListener('message', onWorkerMessage)
  return () => {
    worker.removeEventListener('message', onWorkerMessage)
  }
})
```

也不必使用 React 的 `setX(oldX => newX)` 约束来设置状态，只需要改变局部变量就好：

```js
function onWorkerMessage(event) {
  if (event.data.name === 'tick') {
    currentPom = {
      ...currentPom,
      secondsRemaining: event.data.counter,
    }
  } else if (event.data.name === 'start') {
    // More branches here removed to save space...
  }
}
```

## 条件渲染

我喜欢 React 的部分原因是 在模板语法中嵌入JS：

```react
// React
<ul>
  {pomsForCurrentDay.map(entryData, index) => {
    const finishedAt = format(new Date(entryData.timeFinished), 'H:mm:ss')
    return <li title={`Finished at ${finishedAt}`}>{index + 1}</li>
  })}
</ul>
```
但是 Svelte 的模板语法也很好用：
```jsp
// Svelte
<ul class="poms-list">
  {#each currentDayPoms as value, index}
    <li
      title={`Finished at ${format(
        new Date(value.timeFinished),
        'H:mm:ss'
      )}`}
    >
      {index + 1}
    </li>
  {/each}
</ul>
```

在渲染组件时，Svelte 的语法也很简便，很像JSX：

```js
// Svelte
<History pomodoros={pomodoros} />
  
// Svelte(collapsed props)
<History {pomodoros}/>
```

## Svelte中的响应式$

React 要求使用 userEffect 和 其他钩子控制代码运行，并在重新渲染组件时重新运行代码。Svelte 不同之处在于，默认情况下，大部分代码只会运行一次。当然，当有大量数据的节点渲染夹杂函数运行的时候，React  的重新渲染也有它的优点。比如这样：

```react
const input = props.inputData
const transformed = input.map((item) => transformItem(item))

return <div>{JSON.stringify(transformed, null, 2)}</div>
```

如果用户提供了新的 `props.inputData`，组件将重新渲染更新，拿到的值也是新的。而在 Svelte 中并非如此：

```html
<script>
export let input;
const transformed = input.map((item) => transformItem(item))
</script>

<div>{JSON.stringify(transformed, null, 2)}</div>
```

解决响应式问题，要么使用 `$`  符号，要么将转换逻辑加到模板里：

```html
// 使用 $
<script>
export let input;
$: transformed = input.map((item) => transformItem(item))
</script>

<div>{JSON.stringify(transformed, null, 2)}</div>

// 使用模板
<script>
export let input;
</script>

<div>{JSON.stringify(input.map((item => transformItem(item))), null, 2)}</div>
```

## 组合式组件

组合式组件在组件级别框架里特别重要，React 的  `children` 属性简化了渲染：

```react
function Box(props) {
  return <div>{props.children}</div>
}

function App() {
  return (
    <Box>
      <p>hello world!</p>
    </Box>
  )
}
```

Svelte 里用插槽：

```html
<!-- Box component -->
<div class="box">
  <slot></slot>
</div>

<!-- App component -->
<Box>
  <p>hello world!</p>
</Box>
```

当涉及到多个子组件的时候，二者会有不同的处理方式：

* React 会有多个Props：

  ```react
  function Box(props) {
    return (
      <div>
        <div class="left">{props.left}</div>
        <div class="right">{props.right}</div>
      </div>
    )
  }
  
  function App() {
    return <Box left={<p>hello</p>} right={<p>world!</P>} />
  }
  ```

* 会显示命名多个插槽：

  ```html
  <!-- Box component -->
  <div class="box">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
  
  <!-- App component -->
  <Box>
    <p slot="left">hello</p>
    <p slot="right">world!</p>
  </Box>
  ```

## 类名判断

Svelte 有一个小功能，可以有条件地赋值 class：

```html
<div class:is-active={isActive}>
```

## 事件监听

Svelte 包含了一些用来绑定事件的修饰符：

```html
<script>
function click() {
  // No need to preventDefault ourselves
  // logic here
}
</script>

<button on:click|preventDefault={click}>
  Click me!
</button>
```

## 相关链接

[Comparing Svelte and React](https://www.jackfranklin.co.uk/blog/comparing-svelte-and-react-javascript/)
