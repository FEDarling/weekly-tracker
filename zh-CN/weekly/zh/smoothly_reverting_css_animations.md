---
title: 'Smoothly Reverting CSS Animations'
date: '2022-01-25'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags:
  - 'CSS'
  - 'JavaScript'
  - 'HTML'
  - 'TypeScript'
  - 'ECMAScript'
  - 'Chrome'
  - '游览器'
  - '网络'
  - 'React'
  - 'Vue'
  - 'webpack'
  - 'babel'
  - 'vite'
  - 'node'
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

![](https://pragmaticpineapple.com/static/dfdeba4bebbbfc6890d861ba3feae977/fbd2c/cover.jpg)
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
Hey there, you probably tried to animate some HTML elements in your time using transitions, transforms, and animations in the CSS. I tried the same, but one problem occurred when I animated something on hover.

For example, you can look at the theme switch button on this blog (it’s in the menu at the top if you’re on mobile):

![](https://pragmaticpineapple.com/static/3506b816b1aa9f3fae8cc09d8c22d554/652c7/theme-switch-button.png)

When I first added the button and the animation to it, I made a mistake. You can see the mistake below:

![](https://pragmaticpineapple.com/bcf2212802f0c7a50a21c0ee14f5ee56/abruptly-ended-animation.gif)

The mistake I made can be easily overlooked. If you look closely, you can see when I start to hover over it, the animation starts, but as soon as I move the mouse away, it abruptly resets to its starting point. It might be a small detail, and most folks can miss this, but it annoyed me from the start. Imagine the code for the theme switch to be something like this:

```css
.theme-switch:hover {
  transition: transform 2s ease-in-out;
  transform: rotate(360deg);
}
```

It was all fine, and it made the sun spin using CSS rotate, but the rotation would suddenly reset once I moved the mouse away from the sun icon. Thankfully, there’s a simple solution for it. We need to put the transition rule to the general `.theme-switch rule`, not just the `:hover` rule.

```css
.theme-switch {
  transition: transform 2s ease-in-out;
}

.theme-switch:hover {
  transform: rotate(360deg);
}
```

Let’s see what we get when we moved the transition rule:

![](https://pragmaticpineapple.com/7f8c7b1016a8346a2c33622f3c9bbda5/smoothly-revert-animation.gif)

If we try to hover and move our mouse away, it will revert smoothly using our transition rule. No more annoying abrupt reset of the animation, yay!

OK, this was fun and easy if you use CSS transitions, but what if you decide to go with the keyframe animations? Read on to find out.

## Smoothly Reverting Keyframe Animation

First off, if you are looking into reverting a keyframe animation, did you try to reconsider the approach you are taking? If you did and you realized that there’s no chance in the world you could use a transition animation, then read on. But if you can achieve what you need with a simple transition, scroll back to the first part of this blog post.

OK, so you are stuck with some keyframes, and you want to revert them, let’s say, on hover. How do you achieve that? First off, the solution is pretty hard to do with just CSS and HTML, but there is a way.

For example, let’s say you have a sun icon that is constantly spinning like so:

![](https://pragmaticpineapple.com/de7e28fb61772bd0dd5d017100e7b1c4/constantly-spinning-sun.gif)

The code for it would look something like this:

```css
.sun-icon {
  animation: in 4s linear 0s infinite normal;
}

@keyframes in {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
Here we use `@keyframes`, the CSS [at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) that defines intermediate steps in a CSS animation. It differs from using `transition` by giving you more control over what happens at certain points in the animation. We want the element affected by the animation to go from 0 degrees to 360 degrees, and we use the `from to` syntax of keyframes. We could’ve also put `0% 100%` instead of`from to`. They are synonyms, pretty much.

And, finally, at the `.sun-icon rule`, we use the shorthand animat`ion rule where we define the following:

* `in` - the name of the animation
* `4s` - the duration of the animation
* `linear` - the animation timing function
* `0s` - the animation delay (meaning our animation starts immediately since the delay is 0 seconds)
* `infinite` - the iteration count of our animation (how many times the animation will play out)
* `normal` - the direction of the animation (can also be `reverse`, which we will see later) Phew, that is a lot of occurrences of the animation word.

Now that we have that, we should be able to revert the animation somehow. How can we do it? You might think we can leverage the`animation-direction` and put it into `reverse` instead of `normal`. Well, if we do that, we have a jumping animation like so:

![](https://pragmaticpineapple.com/5d7931f3e73c1d143356a6873234c1dc/jumping-sun-animation.gif)

We added this bit of code to achieve the above mentioned:

```css
.sun-icon:hover {
  animation-direction: reverse;
}
```

But that is obviously unwanted behavior. How else can we revert the animation?

We can add a little trick. We can wrap the sun icon into a container that will spin in reverse while hovering on it. It will look like this:

![](https://pragmaticpineapple.com/f9e54810e95cc8dd40f3ecfd3817b984/smooth-constant-sun-keyframes-animation.gif)

This will be the HTML part:

```css
<div class="sun-container">
  <img class="sun-icon" src="sun.png" />
</div>
```
And this the CSS part:

```css
.sun-container {
  width: 128px;
  height: 128px;

  animation: in 2s linear 0s infinite reverse;
  animation-play-state: paused;
}

.sun-icon {
  animation: in 4s linear 0s infinite normal;
}

.sun-container:hover {
  animation-play-state: running;
}

@keyframes in {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

The container animation will run for 2 seconds (twice as fast as the sun icon animation, which runs for 4 seconds). Also, the container animation will start as paused, but it will run when we hover over the sun container element.

## Other Ways To Revert Keyframe Animations

There are other ways to do it, but it will never be as smooth as the trick I showed you with both parent and child element spinning. There is a way to do it with JavaScript and playing around with keyframes in the [CSS Tricks article](https://css-tricks.com/controlling-css-animations-transitions-javascript/#obtaining-the-current-keyvalue-percentage).

The main problem with keyframe animations is that there is no way to track their progress. Once the animation starts, there is no browser API to let you figure out if the animation is at 46% of completion, for example. You can, potentially, `setInterval` and make it fire on every 10% of animation and mess with it there, but it is an unreliable solution.

Let me explain why the solution with `setInterval` (like the one in the CSS Tricks article I shared above) is unreliable. Imagine if the `setInterval` fires a bit late, and you presume you are at 10%, but you’re actually at 12% of the progress. If you change the animation, assuming you are still at 10%, you will get a slight jumping of the animation if you try to edit it. This brings us back to the similar problem we are trying to solve in the first place.

As we saw, we can’t utilize the `animation-direction` rule and just change it from `normal` to `reverse` and vice-versa. The animation resets every time you change that.

There is potentially one solution that might work, and that is with multiple animations. We can split one keyframe animation into multiple small ones and listen for `animationend` [event](https://www.w3.org/TR/css-animations-1/#animation-events). If you’re interested in this solution, consider subscribing to the [newsletter](https://pragmaticpineapple.com/newsletter) and follow me [on Twitter](https://twitter.com/nikolalsvk), where I will post more about this.

## Think Before You Animate

We’ve gone through a couple of solutions to revert an animation, but we never went through the most important point - consider what you are trying to animate and how you are doing it. It probably doesn’t make sense to use keyframes to rotate an element in our examples. We can quickly achieve that with CSS transitions. I ended up using that approach on my blog in the end.

What I am trying to say is that maybe there is a more straightforward solution for you out there. You might avoid developing complex solutions and breaking your head trying to solve something. If you need to take the more complicated route, go ahead, nothing is stopping you. I showed a couple of ways here to choose and follow through.

But I hope this blog post is helpful to those with this kind of problem. It was fun to go through and figure out how to solve the keyframes part. I am sad that there isn’t a proper solution for this in the CSS spec, but I hope it is coming in the future.


---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://pragmaticpineapple.com/smoothly-reverting-css-animations/?utm_source=CSS-Weekly&utm_campaign=Issue-486&utm_medium=web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/486/smoothly_reverting_css_animations.md)
> * 译者：
> * 校对者：