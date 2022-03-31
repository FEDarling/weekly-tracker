---
title: "Container Queries"
date: '2022-01-26'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['CSS','JavaScript','HTML','TypeScript','ECMAScript','Chrome','游览器','网络','React','Vue','webpack','Babel','Vite','Node','HTTP','Rollup','Parcel','Tool']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
#默认不发布，完成校对之后才发布
---

Get ready for this incoming CSS feature that will allow developing components that respond to their container's width and other properties.

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

CSS Container Queries are an upcoming way to move beyond media queries that are tied to the viewport and instead will enable us to modify an element's behavior based on the container it's within. This has been a requested feature for many years, with developers desiring to change an element based on its own width. However, the in-progress spec will allow querying for other property values - including [from custom properties](https://12daysofweb.dev/2021/css-custom-properties/) - to alter a component.

Back in May, I wrote "[A Primer on CSS Container Queries](https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/)" and since that time the spec has moved into being [a Public Working Draft](https://drafts.csswg.org/css-contain-3/) and some of the syntax has been updated.

## Enabling container queries

If you would like to view the demos in this article and experiment with container queries yourself, you'll need to get Chrome Canary. Then, enable container queries by visiting `chrome://flags` and searching for it.

![](https://images.prismic.io/12daysofwebdev/297f3967-cd5e-44b5-8df5-86ec0fcdaeb9_enable-container-queries.png?auto=compress,format)

## Defining containment

Given that the container query spec is not final, keep in mind that the syntax discussed in this post is at risk of changing.

> Why talk about container queries if they aren't stable? Because the CSS Working Group and browser makers need your feedback! If you find a bug, have a feature request, or want to know the current status, check out [the css-contain issues on GitHub](https://github.com/w3c/csswg-drafts/projects/18).

A key concept of container queries is that you must explicitly define which elements allow containment. Then you query against those containers which allow you to affect the properties of its children. This can be a bit of a gotcha, which we'll look at in action a bit later.

At minimum for queries intended to be based on width, containment is defined by setting `container-type: inline-size` on a containing element.

```css
main {
  container-type: inline-size;
}
```

Optionally, you can also name your container with `container-name` which is useful if you have several layers of containment so that you can be more explicit about which queries affect elements.

Both type and name can be defined using the shorthand `container` property, where the type is first and separated from the name by a forward slash.

```css
main {
  container: inline-size / main;
}
```

> 🔑 If a container query is applied to an element that has no defined containing ancestor, the query will fail to apply. In other words - there is no default fallback containment on either the `body` or `html` elements.

# Defining a container query

Now that we know how to apply containment to an element, we're ready to actually write a container query!

[One of the most recent syntax changes](https://twitter.com/TerribleMia/status/1466835751224721408) was to be more explicit about the query type given that the spec was increased to be able to not just query based on size but also style properties (at time of writing, querying on style was not yet supported in Chrome Canary).

With our current `container-type` using `inline-size`, we'll write our first query against the `size()`. We'll also explicitly query against our named container of "main". If we left off the name, this query would be against the `h2`'s nearest ancestor with containment.

```css
@container main size(width >= 40ch) {
  h2 {
    color: blue;
  }
}
```

Oh, and what's that? A new syntax for the query definition using math comparisons? Oh yes! [This is an update](https://www.w3.org/TR/mediaqueries-5/#mq-range-context) that will be coming to "old fashioned" media queries against the viewport as well! Thanks, CSS Working group 🥰

## Demo of responding to size containment

Let's put the pieces we've learned so far together. For myself, so far treating container queries similar to the idea of "mobile first" has made the most sense in developing my "breakpoints" across component states. By which I mean styling for the narrowest view as the default then handling updates for larger widths via the container queries.

> Container queries can absolutely start being used today as a progressive enhancement. If you plan to do that, starting with the narrowest width may not be the best "fallback" for your context so you may adjust from this strategy.

We'll be using CSS grid and grid areas to adjust a card layout, and particularly to update the card image location and aspect ratio.

### Narrow container card styles

For the narrowest expected container, our card elements simply stack and the image is set at `aspect-ratio: 4/3`.

Our initial HTML is very simple:

```html
<div class="card">
  <img src="https://source.unsplash.com/V7SKRhXskv8/400x300" alt="">
  <h3>Container Queries Rule</h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis magni eveniet natus nulla distinctio eaque?</p>
</div>
```

```css
.card {
  display: grid;
  gap: 1rem;
  margin: 5vh auto;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 .25rem 0.5rem -.15rem hsla(0 0% 0% / 55%);
}

.card > * {
  margin: 0;
}

.card img {
  max-width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: inherit;
}
```

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220212145916.png)

This may look a little strange if you are viewing this on a larger viewport because the card currently has no width constraints.

I mentioned we'd be updating the card layout using CSS grid template areas, and we want those to apply based on container queries. Let's see what happens if we add containment to the card class, and then add a container query to define the grid template areas.

```css
.card--contained {
  container-type: inline-size;
}

@container size(width >= 30ch) {
  .card--contained {
    grid-template-areas: "image title" "content content";
  }
}
```

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220212145943.png)

If you're in Chrome Canary with the container query experiment enabled, you might be surprised that no change has occurred... unless you remember the "gotcha" I noted earlier.

Since an element can't change it's properties within a container query unless it has an ancestor with containment, our attempt at updating the display of the card was unsuccessful.

In this case, we need to add a wrapping element to provide containment. Let's make that adjustment to our HTML and then adjust the styles. Note that the demo styles require a bit of extra scoping to be able to show the change from the previous state.

```html
<div class="card-container">
  <div class="card">
    <img src="https://source.unsplash.com/V7SKRhXskv8/400x300" alt="">
    <h3>Container Queries Rule</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis magni eveniet natus nulla distinctio eaque?</p>
  </div>
</div>
```

```css
.card-container {
  container-type: inline-size;
  margin: 0;
}

@container size(width >= 30ch) {
  .card-container .card {
    grid-template-areas: "image title" "content content";
    grid-auto-columns: 33% 1fr;
    align-items: center;
  }
  
  .card-container .card p {
    grid-area: content;
  }
  
  .card-container .card img {
    aspect-ratio: 1;
  }
}
```

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220212150004.png)

Hooray, our query was successfully applied!

You can probably assess that we can improve the layout here even more for larger widths, so let's do that. We'll adjust the template areas so the image takes up the left third and the title and content share the remaining inline space. There is no change needed for our HTML.

```css
@container size(width >= 60ch) {
  .card-container--large .card {
    grid-template-areas: "img title" "img content";
  }
  
  .card-container--large .card img {
    grid-area: img;
  }
 
  .card-container--large .card h3 {
    align-self: end;
  }
  
  .card-container--large .card p {
    align-self: start;
  }
}
```

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220212150023.png)


## Multi-card layout

Now, as a standalone card the variations still aren't too impressive, and you may be thinking the container query hasn't added much value.

Let's add a few more cards and place them within a flexbox-based grid layout.

```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-grid .card-container {
  flex: 1 1 30ch;
}

.card-grid .card {
  margin: 0;
}
```

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220212145530.png)

If you are unable to use Chrome Canary on your device, here's a preview of what these cards look like within the grid. Because of how we've setup our flexbox behavior, when there is enough room the third card can expand fullwidth. So in this preview we see the first and second card have taken on our medium container size and the third has taken on the large container size.

![](https://images.prismic.io/12daysofwebdev/b3c6fce4-43ae-4cb1-b020-4a326ff146d3_Screen+Shot+2021-12-23+at+9.56.32+PM.png?auto=compress,format)

## Container query units

Along with the main spec is the inclusion of a new set of units related to the container size.

To me, one of the most exciting applications for these is responsive typography. Today, we can create what's often called [fluid typography](https://moderncss.dev/generating-font-size-css-rules-and-creating-a-fluid-type-scale/) using the CSS function `clamp()` and viewport units. But those are not contextually ideal for smaller components like the cards we created since they are tied to the viewport.

We can take our cards one step further by applying the relevant container query unit as a swap for what we previously used a viewport unit for to make our card typography responsive.

> [The spec lists these units](https://drafts.csswg.org/css-contain-3/#container-lengths) with a `c` prefix but Chrome Canary does not yet seem to support that version. They could make that update at any time, so if you find the demo doesn't show an adjusted `font-size` that is likely why.

We're still using `clamp()` to provide a range of acceptable values, and the container unit we've selected is `qi` which represents increments of `1%` of the container's inline size.

```css
.card-container--units .card h3 {
  font-size: clamp(1.25rem, 3qi + 1rem, 2.5rem);
}

.card-container--units .card p {
  font-size: clamp(.9rem, .5qi + 1rem, 1.5rem);
}
```

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220212145731.png)

## Additional resources on CSS container queries

I hope this overview has sparked your interest in container queries! It's definitely the CSS feature I'm most hopeful will make it into more browsers in 2022.

If you'd like more of a background on what problem container queries are trying to solve and some additional considerations, be sure to read [my original primer](https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/). Just note that the current syntax shown is out of date (hopefully I'll have time to send edits after the holidays 😉).

The primary spec author for container queries is Miriam Suzanne, and I highly recommend [watching one of her presentations](https://www.miriamsuzanne.com/speaking/responsive-components/) that covers not just CQ but also the other specs she's working on that are very exciting: layers and scope. I also encourage you to read her additional [explainer doc](https://css.oddbird.net/rwd/query/explainer/).

[There is already a page on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries), although at time of writing it had not been updated to add new recently required query type of `size()`.

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://frontendfoc.us/link/118075/web)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/frontend_focus/523/container_queries.md)
> * 译者：
> * 校对者：