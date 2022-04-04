---
title: 'Breaking Out of the Box'
date: '2022-01-24'
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
  - 'Babel'
  - 'Vite'
  - 'Node'
  - 'HTTP'
  - 'Rollup'
  - 'Parcel'
  - 'Tool'
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

![](https://i0.wp.com/alistapart.com/wp-content/uploads/2021/12/WindowControlsOverlay.png?w=1800&ssl=1)
<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->
> CSS is about styling boxes. In fact, the whole web is made of boxes, from the browser viewport to elements on a page. But every once in a while a new feature comes along that makes us rethink our design approach.

[Round displays](https://www.w3.org/TR/css-round-display-1/), for example, make it fun to play with circular clip areas. [Mobile screen notches](https://css-tricks.com/the-notch-and-css/) and [virtual keyboards](https://www.w3.org/TR/virtual-keyboard/) offer challenges to best organize content that stays clear of them. And [dual screen or foldable devices](https://blogs.windows.com/msedgedev/2020/09/14/introducing-dual-screen-foldable-web-apis/) make us rethink how to best use available space in a number of different [device postures](https://w3c.github.io/device-posture/).

![](https://i0.wp.com/alistapart.com/wp-content/uploads/2021/12/fig1.png?resize=960%2C452&ssl=1)

These recent evolutions of the web platform made it both more challenging and more interesting to design products. They’re great opportunities for us to break out of our rectangular boxes.

I’d like to talk about a new feature similar to the above: the Window Controls Overlay for Progressive Web Apps (PWAs).

[Progressive Web Apps](https://alistapart.com/article/yes-that-web-project-should-be-a-pwa/) are blurring the lines between apps and websites. They combine the best of both worlds. On one hand, they’re stable, linkable, searchable, and responsive just like websites. On the other hand, they provide additional powerful capabilities, work offline, and read files just like native apps.

As a design surface, PWAs are really interesting because they challenge us to think about what mixing web and device-native user interfaces can be. On desktop devices in particular, we have more than 40 years of history telling us what applications should look like, and it can be hard to break out of this mental model.

At the end of the day though, PWAs on desktop are constrained to the window they appear in: a rectangle with a title bar at the top.

Here’s what a typical desktop PWA app looks like:

![](https://i0.wp.com/alistapart.com/wp-content/uploads/2021/12/fig2.png?resize=960%2C303&ssl=1)

Sure, as the author of a PWA, you get to choose the color of the title bar (using the Web Application Manifest [theme_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color) property), but that’s about it.

What if we could think outside this box, and reclaim the real estate of the app’s entire window? Doing so would give us a chance to make our apps more beautiful and feel more integrated in the operating system.

This is exactly what the [Window Controls Overlay](https://web.dev/window-controls-overlay/) offers. This new PWA functionality makes it possible to take advantage of the full surface area of the app, including where the title bar normally appears.

## About the title bar and window controls

Let’s start with an explanation of what the title bar and window controls are.

The title bar is the area displayed at the top of an app window, which usually contains the app’s name. Window controls are the affordances, or buttons, that make it possible to minimize, maximize, or close the app’s window, and are also displayed at the top.

![](https://lh5.googleusercontent.com/1s_lFmqiRm6Fv3wzeELtsDDiDvOkEJuSRH5K9YIrZZ8rh8rYCxUqbSnfd-f7YrsRvcDzF67fexnEJFlDtw53SKKmOgVk8sv_VUyCQveoR18HkNgACPxcQTtEOb6SmEuRIDlX3EcI)

Window Controls Overlay removes the physical constraint of the title bar and window controls areas. It frees up the full height of the app window, enabling the title bar and window control buttons to be overlaid on top of the application’s web content.

![](https://lh6.googleusercontent.com/k_6o1fBePhbjvtmxoTW3tG1134Gvbo31r2fy7zxmOB39d_eKpjThbh7QL8pVXrA1aLvEWzkoJ_rY4af451BU9XyKZXbSouCTvDJMnRKGlcOhcEpXw_rjQAR8_SFjhrm_-22OxKiR)

If you are reading this article on a desktop computer, take a quick look at other apps. Chances are they’re already doing something similar to this. In fact, the very web browser you are using to read this uses the top area to display tabs.

![](https://lh6.googleusercontent.com/BLL9Rc5othPsw6xYApyyNOZ73j32wi4XkyoZpl4QOv0OL4MnxMe3bl1xLR0O7WSoAvi3KhyeP83hUh4-EezTmGg2axN4RiOVtgiF5ZiapcjUL6gtLqExZOHGCtkOBbthMTgh5Tmr)

Spotify displays album artwork all the way to the top edge of the application window.

![](https://lh3.googleusercontent.com/SzPcq94_7Yu_ARf13Z6dRD0tpdlPM_MdrY-7CA_mv4Yu3fBIL3pJnXirP83cCDVoQxnnIEwDoBwbGzfftHmZ3PZZUfsw_oP-m4QLkB2SqekX8JupR9_xmI0tG1q65IfNFbnXIHUh)

Microsoft Word uses the available title bar space to display the auto-save and search functionalities, and more.

![](https://lh6.googleusercontent.com/VdREVwFFjYHxHF0Gg3l079hxsa8WKPEWiuvuL7cWbGnEDJ2yc3JiOWQK5lUyaeEgzpd1Przji0cNLeooPD7riPKbcMixa6IkXanprdqPJVkQrYSerxSaNmzbJPd1YsA55mlYd9xt)

The whole point of this feature is to allow you to make use of this space with your own content while providing a way to account for the window control buttons. And it enables you to offer this modified experience on a range of platforms while not adversely affecting the experience on browsers or devices that don’t support Window Controls Overlay. After all, PWAs are all about [progressive enhancement](https://alistapart.com/article/understandingprogressiveenhancement/), so this feature is a chance to enhance your app to use this extra space when it’s available.

## Let’s use the feature

For the rest of this article, we’ll be working on a demo app to learn more about using the feature.

The demo app is called 1DIV. It’s a simple CSS playground where users can create designs using CSS and a single HTML element.

The app has two pages. The first lists the existing CSS designs you’ve created:

![](https://lh3.googleusercontent.com/pW2iUTucKfwMJZrAlPGK19vVnEPaHjYT4N-18P-vm9qkhAdGJcRBMexOCu1q9nN9BAfZ7MH6itNP__kY4HPl9uVPucXkbmSX-E9g6AdVAI_uu6TyEsEdH0LUCXdN1f4kqZNgDr30)

The second page enables you to create and edit CSS designs:

![](https://lh5.googleusercontent.com/faaJ3uHbzXg-TFinvOqR_7gyjVPvlk7fuVWuN4aIH6IUxXNAp4GXtIcuVPpo6bd1IOKO1_EMDt4pUgErUh_X2_2r3WnkQ4PzovPp6Zjg0l98W9NBrHA0xAuTNf0uNVBatRsMJzEm)

Since I’ve added a simple web manifest and service worker, we can install the app as a PWA on desktop. Here is what it looks like on macOS:

![](https://i0.wp.com/alistapart.com/wp-content/uploads/2021/12/fig10.png?resize=960%2C466&ssl=1)

And on Windows:

![](https://i0.wp.com/alistapart.com/wp-content/uploads/2021/12/fig11.png?resize=960%2C501&ssl=1)

Our app is looking good, but the white title bar in the first page is wasted space. In the second page, it would be really nice if the design area went all the way to the top of the app window.

Let’s use the Window Controls Overlay feature to improve this.

## Enabling Window Controls Overlay

The feature is still experimental at the moment. To try it, you need to enable it in one of the supported browsers.

As of now, it has been implemented in Chromium, as a collaboration between Microsoft and Google. We can therefore use it in Chrome or Edge by going to the internal **about://flags** page, and enabling the **Desktop PWA Window Controls Overlay** flag.
## Using Window Controls Overlay

To use the feature, we need to add the following **display_override** member to our web app’s manifest file:

```json
{
  "name": "1DIV",
  "description": "1DIV is a mini CSS playground",
  "lang": "en-US",
  "start_url": "/",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display_override": [
    "window-controls-overlay"
  ],
  "icons": [
    ...
  ]
}
```
On the surface, the feature is really simple to use. This manifest change is the only thing we need to make the title bar disappear and turn the window controls into an overlay.

However, to provide a great experience for all users regardless of what device or browser they use, and to make the most of the title bar area in our design, we’ll need a bit of CSS and JavaScript code.

Here is what the app looks like now:

![](https://lh6.googleusercontent.com/YbSJ4vMtrc88Jr8sh7F8uWED-9OVFvLkXNT3xVP9gdmQt9XwC-wGHPmaspcKnfSpPMjSotYzRISGPag1Ugq3mxWTslaVhPK9iP8IHLjFnE_FcIkM0y3olJ4Gzw5ejrZFTRbz9avF)

The title bar is gone, which is what we wanted, but our logo, search field, and NEW button are partially covered by the window controls because now our layout starts at the top of the window.

It’s similar on Windows, with the difference that the close, maximize, and minimize buttons appear on the right side, grouped together with the PWA control buttons:

![](https://lh6.googleusercontent.com/ytqSauTsKKNI6N7YzxlIqhNatK7LwaPw6yY74jq2egOsBIHbzl2vFGPMRK6dqx6tE-UqSCCWS8f1YftsXZygxEB6KALUYfGU9XW4poE1NPpjYKV66bk1k6dy91rh6TMZ1qb3Rph-)

## Using CSS to keep clear of the window controls

Along with the feature, new CSS environment variables have been introduced:

* titlebar-area-x
* titlebar-area-y
* titlebar-area-width
* titlebar-area-height

You use these variables with the CSS env() function to position your content where the title bar would have been while ensuring it won’t overlap with the window controls. In our case, we’ll use two of the variables to position our header, which contains the logo, search bar, and NEW button.

```css
header {
  position: absolute;
  left: env(titlebar-area-x, 0);
  width: env(titlebar-area-width, 100%);
  height: var(--toolbar-height);
}
```

The `titlebar-area-x` variable gives us the distance from the left of the viewport to where the title bar would appear, and `titlebar-area-width` is its width. (Remember, this is not equivalent to the width of the entire viewport, just the title bar portion, which as noted earlier, doesn’t include the window controls.)

By doing this, we make sure our content remains fully visible. We’re also defining fallback values (the second parameter in the `env()` function) for when the variables are not defined (such as on non-supporting browsers, or when the Windows Control Overlay feature is disabled).

![](https://lh5.googleusercontent.com/AYZ7D2ZqvPLip8FtF6IzI6XSAEoajjviCG5fo40_ynrksUesFQBjZVEN6dsTOA8F9CCqXbFWb32ZYUN73hEAkMlyzKnX_1Qzjy7kR6jl42TyyJOeg1FWK7A9WeWn-_7SD57-EOdt)

![](https://lh6.googleusercontent.com/ZxtH5F4v2io8ntHHi8V0YhqgBc_GD5pcq4g52zZy4_bEhbtjC3G7WdyZqQmwc6-D_NIp7Z8dvjsG8qz42DIg7RDhC6HbPHThXEFsknbOgcEfkF7d_cqx45T9vTi6z23pVe0-1nxA)

## Now our header adapts to its surroundings, and it doesn’t feel like the window control buttons have been added as an afterthought. The app looks a lot more like a native app.

Now let’s take a closer look at our second page: the CSS playground editor.

![](https://i0.wp.com/alistapart.com/wp-content/uploads/2021/12/fig16.png?resize=960%2C486&ssl=1)

Not great. Our CSS demo area does go all the way to the top, which is what we wanted, but the way the window controls appear as white rectangles on top of it is quite jarring.

We can fix this by changing the app’s theme color. There are a couple of ways to define it:

* PWAs can define a theme color in the web app manifest file using the theme_color manifest member. This color is then used by the OS in different ways. On desktop platforms, it is used to provide a background color to the title bar and window controls.

* Websites can use the theme-color meta tag as well. It’s used by browsers to customize the color of the UI around the web page. For PWAs, this color can override the manifest theme_color.

In our case, we can set the manifest `theme_color` to white to provide the right default color for our app. The OS will read this color value when the app is installed and use it to make the window controls background color white. This color works great for our main page with the list of demos.

The `theme-color` meta tag can be changed at runtime, using JavaScript. So we can do that to override the white with the right demo background color when one is opened.

Here is the function we’ll use:

```js
function themeWindow(bgColor) {
  document.querySelector("meta[name=theme-color]").setAttribute('content', bgColor);
}
```
With this in place, we can imagine how using color and CSS transitions can produce a smooth change from the list page to the demo page, and enable the window control buttons to blend in with the rest of the app’s interface.

![](https://lh4.googleusercontent.com/YVYktaP8CkIQJFlCtWlwVU4dequS4MutbDJfm-vS8kGx_nedIgzziuHeZICeJ-vsu33VR0rydqwKH0JVIFKjWjlrvbWPYssNvxr7rBsCKKdag7PHMhA_NLV3w0nzBuBzurk1fr1i)

## Dragging the window

Now, getting rid of the title bar entirely does have an important accessibility consequence: it’s much more difficult to move the application window around.

The title bar provides a sizable area for users to click and drag, but by using the Window Controls Overlay feature, this area becomes limited to where the control buttons are, and users have to very precisely aim between these buttons to move the window.

Fortunately, this can be fixed using CSS with the `app-region` property. This property is, for now, only supported in Chromium-based browsers and needs the `-webkit-` vendor prefix.

To make any element of the app become a dragging target for the window, we can use the following:

`-webkit-app-region: drag;`

It is also possible to explicitly make an element non-draggable:

`-webkit-app-region: no-drag;`

These options can be useful for us. We can make the entire header a dragging target, but make the search field and NEW button within it non-draggable so they can still be used as normal.

However, because the editor page doesn’t display the header, users wouldn’t be able to drag the window while editing code. So let’s use a different approach. We’ll create another element before our header, also absolutely positioned, and dedicated to dragging the window.

```html
<div class="drag"></div>
<header>...</header>
```

```css
.drag {
  position: absolute;
  top: 0;
  width: 100%;
  height: env(titlebar-area-height, 0);
  -webkit-app-region: drag;
}
```

With the above code, we’re making the draggable area span the entire viewport width, and using the `titlebar-area-height` variable to make it as tall as what the title bar would have been. This way, our draggable area is aligned with the window control buttons as shown below.

And, now, to make sure our search field and button remain usable:

```css
header .search,
header .new {
  -webkit-app-region: no-drag;
}
```

With the above code, users can click and drag where the title bar used to be. It is an area that users expect to be able to use to move windows on desktop, and we’re not breaking this expectation, which is good.

![](https://lh5.googleusercontent.com/sU0QjlT2R7SrF91GI--WcdHRy0shD7CfnKpfzvgXGz5VptZY6hyoDX_SYFqxFG85dxMgbLidjb8cwJOcnqzd4OAWeNjIVgSiKpaz68orEZEU7DgKHHLkM3NXU5rkALkpUrEl7Pp_)

## Adapting to window resize

It may be useful for an app to know both whether the window controls overlay is visible and when its size changes. In our case, if the user made the window very narrow, there wouldn’t be enough space for the search field, logo, and button to fit, so we’d want to push them down a bit.

The Window Controls Overlay feature comes with a JavaScript API we can use to do this: `navigator.windowControlsOverlay`.

The API provides three interesting things:

* `navigator.windowControlsOverlay.visible` lets us know whether the overlay is visible.
* `navigator.windowControlsOverlay.getBoundingClientRect()` lets us know the position and size of the title bar area.
* `navigator.windowControlsOverlay.ongeometrychange` lets us know when the size or visibility changes.

Let’s use this to be aware of the size of the title bar area and move the header down if it’s too narrow.

```js
if (navigator.windowControlsOverlay) {
  navigator.windowControlsOverlay.addEventListener('geometrychange', () => {
    const { width } = navigator.windowControlsOverlay.getBoundingClientRect();
    document.body.classList.toggle('narrow', width < 250);
  });
}
```
In the example above, we set the `narrow` class on the `body` of the app if the title bar area is narrower than 250px. We could do something similar with a media query, but using the `windowControlsOverlay` API has two advantages for our use case:

* It’s only fired when the feature is supported and used; we don’t want to adapt the design otherwise.
* We get the size of the title bar area across operating systems, which is great because the size of the window controls is different on Mac and Windows. Using a media query wouldn’t make it possible for us to know exactly how much space remains.

```css
.narrow header {
  top: env(titlebar-area-height, 0);
  left: 0;
  width: 100%;
}
```

Using the above CSS code, we can move our header down to stay clear of the window control buttons when the window is too narrow, and move the thumbnails down accordingly.

![](https://lh5.googleusercontent.com/e4oVs-No9pSWdYyfqTJ0QKcKrDzlv11bsoTwSVvFBhi1bUo9dP2ub71MlWa90QLEFUc5C9e81mQtg3xwGpB5Kkfvu1dNqdBVhqetz74N_0TSWh7_RfZ5NkDNJEuhv5_ZVvw-vpDG)

## Thirty pixels of exciting design opportunities

Using the Window Controls Overlay feature, we were able to take our simple demo app and turn it into something that feels so much more integrated on desktop devices. Something that reaches out of the usual window constraints and provides a custom experience for its users.

In reality, this feature only gives us about 30 pixels of extra room and comes with challenges on how to deal with the window controls. And yet, this extra room and those challenges can be turned into exciting design opportunities.

More devices of all shapes and forms get invented all the time, and the web keeps on evolving to adapt to them. New features get added to the web platform to allow us, web authors, to integrate more and more deeply with those devices. From watches or foldable devices to desktop computers, we need to evolve our design approach for the web. Building for the web now lets us think outside the rectangular box.

So let’s embrace this. Let’s use the standard technologies already at our disposal, and experiment with new ideas to provide tailored experiences for all devices, all from a single codebase!

---

> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://alistapart.com/article/breaking-out-of-the-box/?utm_source=CSS-Weekly&utm_campaign=Issue-485&utm_medium=web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/485/breaking_out_of_the_box.md)
> * 译者：[]()
> * 校对者：[]()
