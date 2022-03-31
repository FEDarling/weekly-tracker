---
title: 'Building a Toast Component'
date: '2022-01-24'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['CSS','JavaScript','HTML','TypeScript','ECMAScript','Chrome','游览器','网络','React','Vue','webpack','Babel','Vite','Node','HTTP','Rollup','Parcel','Tool']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
#默认不发布，完成校对之后才发布
---

In this post I want to share thinking on how to build a toast component. Try the [demo](https://gui-challenges.web.app/toast/dist/).
<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->


## Overview

Toasts are non-interactive, passive, and asynchronous short messages for users. Generally they are used as an interface feedback pattern for informing the user about the results of an action.

> [Toast component](https://developer.android.com/guide/topics/ui/notifiers/toasts) on Android

## Interactions
Toasts are unlike notifications, [alerts](https://developer.mozilla.org/docs/Web/API/Window/alert) and [prompts](https://developer.mozilla.org/docs/Web/API/Window/prompt) because they're not interactive; they're not meant to be dismissed or persist. Notifications are for more important information, synchronous messaging that requires interaction, or system level messages (as opposed to page level). Toasts are more passive than other notice strategies.
## Markup 
The `<output>` element is a good choice for the toast because it is announced to screen readers. Correct HTML provides a safe base for us to enhance with JavaScript and CSS, and there will be lots of JavaScript.
### A toast

```html
<output class="gui-toast">Item added to cart</output>
```
It can be [more inclusive](https://www.scottohara.me/blog/2019/07/08/a-toast-to-a11y-toasts.html#:~:text=WCAG%20success%20criteria.-,Inclusive%20UX%20of%20a%20toast,-A%20toast%20component) by adding [role="status"](https://w3c.github.io/aria/#status). This provides a fallback if the browser doesn't give `<output>` elements the `implicit role` per the spec.

```html
<output role="status" class="gui-toast">Item added to cart</output>
```
### A toast container

More than one toast can be shown at a time. In order to orchestrate multiple toasts, a container is used. This container also handles the position of the toasts on the screen.

```html
<section class="gui-toast-group">
  <output role="status">Wizard Rose added to cart</output>
  <output role="status">Self Watering Pot added to cart</output>
</section>
```
## Layouts

I chose to pin toasts to the [inset-block-end](https://developer.mozilla.org/docs/Web/CSS/inset-block-end) of the viewport, and if more toasts are added, they stack from that screen edge.

### GUI container

The toasts container does all the layout work for presenting toasts. It's `fixed` to the viewport and uses the logical property `inset` to specify which edges to pin to, plus a little bit of `padding` from the same `block-end` edge.

```css
.gui-toast-group {
  position: fixed;
  z-index: 1;
  inset-block-end: 0;
  inset-inline: 0;
  padding-block-end: 5vh;
}
```

![](https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/yJfP9FLqpngoR9zIm35J.png?auto=format&w=1600)

In addition to positioning itself within the viewport, the toast container is a grid container that can align and distribute toasts. Items are centered as a group with `justify-content` and individually centered with `justify-items`. Throw in a little bit of gap so toasts don't touch.

```css
.gui-toast-group {
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
}
```
![](https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/kaTSVr7KToPBYqDXKE4T.png?auto=format&w=1600)

### GUI Toast

An individual toast has some padding, some softer corners with `border-radius`, and a `min()` function to aid in mobile and desktop sizing. The responsive size in the following CSS prevents toasts growing wider than 90% of the viewport or `25ch`.

```css
.gui-toast {
  max-inline-size: min(25ch, 90vw);
  padding-block: .5ch;
  padding-inline: 1ch;
  border-radius: 3px;
  font-size: 1rem;
}
```

![](https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/fxZbpWDiuZCfpY2Cxq6A.png?auto=format&w=1600)

## Styles

With layout and positioning set, add CSS that helps with adapting to user settings and interactions.

### Toast container

Toasts are not interactive, tapping or swiping on them doesn't do anything, but they do currently consume pointer events. Prevent the toasts from stealing clicks with the following CSS.

```css
.gui-toast-group {
  pointer-events: none;
}
```
<video style="width: 600px; margin:0 auto; display: block" controls autoplay src="https://storage.googleapis.com/web-dev-uploads/video/vS06HQ1YTsbMKSFTIPl2iogUQP73/3uDub8eM8qYAepz6lbX0.mp4"></video>

### GUI Toast

Give the toasts a light or dark adaptive theme with custom properties, HSL and a preference media query.

```css
.gui-toast {
  --_bg-lightness: 90%;

  color: black;
  background: hsl(0 0% var(--_bg-lightness) / 90%);
}

@media (prefers-color-scheme: dark) {
  .gui-toast {
    color: white;
    --_bg-lightness: 20%;
  }
}
```

<video style="width: 600px; margin:0 auto; display: block" controls autoplay src="https://storage.googleapis.com/web-dev-uploads/video/vS06HQ1YTsbMKSFTIPl2iogUQP73/AUzcAPLccQdvIL2bR3pd.mp4"></video>

### Animation

A new toast should present itself with an animation as it enters the screen. Accommodating reduced motion is done by setting `translate` values to `0` by default, but updating the motion value to a length in a motion preference media query . Everyone gets some animation, but only some users have the toast travel a distance.

Here are the keyframes used for the toast animation. CSS will be controlling the entrance, the wait, and the exit of the toast, all in one animation.

```css
@keyframes fade-in {
  from { opacity: 0 }
}

@keyframes fade-out {
  to { opacity: 0 }
}

@keyframes slide-in {
  from { transform: translateY(var(--_travel-distance, 10px)) }
}
```

The toast element then sets up the variables and orchestrates the keyframes.

```css
.gui-toast {
  --_duration: 3s;
  --_travel-distance: 0;

  will-change: transform;
  animation: 
    fade-in .3s ease,
    slide-in .3s ease,
    fade-out .3s ease var(--_duration);
}

@media (prefers-reduced-motion: no-preference) {
  .gui-toast {
    --_travel-distance: 5vh;
  }
}
```
<video style="width: 600px; margin:0 auto; display: block" src="https://storage.googleapis.com/web-dev-uploads/video/vS06HQ1YTsbMKSFTIPl2iogUQP73/QeeF8vZ5gbXrxfp7EjRf.mp4" autoplay controls></video>

## JavaScript

With the styles and screen reader accessible HTML ready, JavaScript is needed to orchestrate the creation, addition, and destruction of toasts based on user events. The developer experience of the toast component should be minimal and easy to get started with, like this:

```js
import Toast from './toast.js'

Toast('My first toast')
```

### Creating the toast group and toasts

When the toast module loads from JavaScript, it must create a toast container and add it to the page. I chose to add the element before `body`, this will make `z-index` stacking issues unlikely as the container is above the container for all the body elements.

```js
const init = () => {
  const node = document.createElement('section')
  node.classList.add('gui-toast-group')

  document.firstElementChild.insertBefore(node, document.body)
  return node
}
```

![](https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/3O34m8U5Z6BsLUwzcKDx.png?auto=format&w=1600)

The `init(`) function is called internally to the module, stashing the element as `Toaster`:

```js
const Toaster = init()
```

Toast HTML element creation is done with the `createToast()` function. The function requires some text for the toast, creates an `<output>` element, adorns it with some classes and attributes, sets the text, and returns the node.

```js
const createToast = text => {
  const node = document.createElement('output')
  
  node.innerText = text
  node.classList.add('gui-toast')
  node.setAttribute('role', 'status')

  return node
}
```

### Managing one or many toasts

<video style="width: 600px; margin:0 auto; display: block" src="https://storage.googleapis.com/web-dev-uploads/video/vS06HQ1YTsbMKSFTIPl2iogUQP73/3slAqrQiWDmnBnEgSPYz.mp4" autoplay controls></video>

JavaScript now adds a container to the document for containing toasts and is ready to add created toasts. The `addToast()` function orchestrates handling one or many toasts. First checking the number of toasts, and whether motion is ok, then using this information to either append the toast or do some fancy animation so the other toasts appear to "make room" for the new toast.

```js
const addToast = toast => {
  const { matches:motionOK } = window.matchMedia(
    '(prefers-reduced-motion: no-preference)'
  )

  Toaster.children.length && motionOK
    ? flipToast(toast)
    : Toaster.appendChild(toast)
}
```

When adding the first toast, `Toaster.appendChild(toast)` adds a toast to the page triggering the CSS animations: animate in, wait `3s`, animate out. `flipToast()` is called when there are existing toasts, employing a technique called [FLIP](https://aerotwist.com/blog/flip-your-animations/) by [Paul Lewis](https://twitter.com/aerotwist). The idea is to calculate the difference in positions of the container, before and after the new toast has been added. Think of it like marking where the Toaster is now, where it's going to be, then animating from where it was to where it is.

::: tip 
FLIP stands for: First, Last, Invert, and Play. A handy acronym to assist in understanding the animation concept.
:::

```js
const flipToast = toast => {
  // FIRST
  const first = Toaster.offsetHeight

  // add new child to change container size
  Toaster.appendChild(toast)

  // LAST
  const last = Toaster.offsetHeight

  // INVERT
  const invert = last - first

  // PLAY
  const animation = Toaster.animate([
    { transform: `translateY(${invert}px)` },
    { transform: 'translateY(0)' }
  ], {
    duration: 150,
    easing: 'ease-out',
  })
}
```

CSS grid does the lifting of the layout. When a new toast is added, grid puts it at the start and spaces it with the others. Meanwhile, a [web animation](https://developer.mozilla.org/docs/Web/API/Web_Animations_API) is used to animate the container from the old position.

### Putting all the JavaScript together

When `Toast('my first toast')` is called, a toast is created, added to the page (maybe even the container is animated to accommodate the new toast), a promise is returned and the created toast is watched for CSS animation completion (the three keyframe animations) for promise resolution.

```js
const Toast = text => {
  let toast = createToast(text)
  addToast(toast)

  return new Promise(async (resolve, reject) => {
    await Promise.allSettled(
      toast.getAnimations().map(animation => 
        animation.finished
      )
    )
    Toaster.removeChild(toast)
    resolve() 
  })
}
```

I felt the confusing part of this code is in the `Promise.allSettled()` function and `toast.getAnimations()` mapping. Since I used multiple keyframe animations for the toast, to confidently know all of them have finished, each must be requested from JavaScript and each of their `finished` promises observed for completion. `allSettled` does that work for us, resolving itself as complete once all of its promises have been fulfilled. Using await `Promise.allSettled()` means the next line of code can confidently remove the element and assume the toast has completed its lifecycle. Finally, calling `resolve()` fulfills the high level Toast promise so developers can clean up or do other work once the toast has shown.

```js
export default Toast
```
Last, the `Toast` function is exported from the module, for other scripts to import and use.

### Using the Toast component

Using the toast, or the toast's developer experience, is done by importing the `Toast` function and calling it with a message string.

```js
import Toast from './toast.js'

Toast('Wizard Rose added to cart')
```
If the developer wants to do clean up work or whatever, after the toast has shown, they can use async and await.

```js
import Toast from './toast.js'

async function example() {
  await Toast('Wizard Rose added to cart')
  console.log('toast finished')
}
```

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://web.dev/building-a-toast-component/?utm_source=CSS-Weekly&utm_campaign=Issue-485&utm_medium=web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/485/building_a_toast_component.md)
> * 译者：[]()
> * 校对者：[]()