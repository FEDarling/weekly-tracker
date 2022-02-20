---
title: '是开始使用 JavaScript Temporal API 的时候了吗？'
date: '2022-02-17'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['JavaScript','ECMAScript','Chrome']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0fbf1f85f1d45d7bd53525cb5958d6e~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)
<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->
在JavaScript中,日期的处理是非常简陋的。自从1995年受到Java的启发实现了 [`Date()`](https://developer.mozilla.org/Web/JavaScript/Reference/Global_Objects/Date)对象以来，`Date()`就再也没有发生过迭代。随着时间的推移，java选择了放弃`Date()`,但是浏览器为了向后兼容，所以`Date()`一直保留在 JavaScript 中。

`Date()`的问题在于：
- 过于简陋
- 它只支持 UTC 和用户的 PC 时间
- 它不支持除[格里高利历](https://www.hautehorlogerie.org/zh/watches-and-culture/encyclopaedia/glossary-of-watchmaking/s/gregorian-calendar-1/)以外的日历
- 字符串到日期解析很容易出现错误
- 日期对象是可变的。例如:
```js
const today = new Date();
const tomorrow = new Date( today.setDate( today.getDate() + 1 ) );
console.log( tomorrow );  // 打印的tomorrow的时间
console.log( today );     // 打印出相同的内容
```
开发者经常会使用诸如 [moment.js](https://momentjs.com/)这样的日期库，但是它占有74KB的空间，时间同样是可变的。像[Day.js](https://day.js.org/)或者[date-fns](https://date-fns.org/)这样的库或许会是更好地替代品。但是当你的程序中只要很少的时间处理的功能，是否需要去使用一个日期库呢？

浏览器为了兼容性，需要继续支持`Date()`，但是一个全新的静态时间对象的提案正处在[TC39标准批准流程](https://tc39.es/proposal-temporal/)的第三阶段的候选方案中。这个新的API解决了上面所有提出的问题，Chrome 浏览器将会很快就推出这个新的API。但是他可能不会在2022年底进行推广使用，所以要小心兼容性产生的问题。
### 当前日期及时间

[`Temporal.Now`](https://tc39.es/proposal-temporal/docs/#Temporal-Now) 会返回一个当前日期和时间的对象:
```js
// 时间同样和Date一样，从1970年1月开始，也就是北京时间1970年1月08:00:00
Temporal.Now.instant().epochSeconds;
Temporal.Now.instant().epochMilliseconds;

// 本地时间
Temporal.Now.zonedDateTimeISO();

// 当前时区
Temporal.Now.timeZone();

// 另一个时区的当前时间
Temporal.Now.zonedDateTimeISO('Europe/London');
```
### 当前日期和时间
[`Temporal.Instant`](https://tc39.es/proposal-temporal/docs/#Temporal-Instant)会返回一个以纳秒为单位的最接近的，并且符合ISO8601标准的字符串来表示日期和时间格式的对象。

![Temporal date time string](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a61b2123f1841f7bbbcfbd4f0b010a1~tplv-k3u1fbpfcp-zoom-1.image)

```js
Temporal.Instant.from('2022-03-04T05:56:78.999999999+02:00[Europe/Berlin]');
Temporal.Instant.from('2022-03-04T05:06+07:00');
```

还可以使用 epoch 格式的值:

```js
Temporal.Instant.fromEpochSeconds(1.0e8);
```
### 时区日期和时间
[`Temporal.ZonedDateTime`](https://tc39.es/proposal-temporal/docs/#Temporal-ZonedDateTime)将会返回一个在指定时区上的指定日期和时间，例如：
```js 
new Temporal.ZonedDateTime(
  1234567890000, // 时间戳
  Temporal.TimeZone.from('Europe/London'), // 时区
  Temporal.Calendar.from('iso8601') // 默认日历格式
);

Temporal.ZonedDateTime.from('2025-09-05T02:55:00+02:00[Africa/Cairo]');

Temporal.Instant('2022-08-05T20:06:13+05:45').toZonedDateTime('+05:45');

Temporal.ZonedDateTime.from({
  timeZone: 'America/New_York'
  year: 2025,
  month: 2,
  day: 28,
  hour: 10,
  minute: 15,
  second: 0,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0
});
```

### 计划日期和时间
计划时间/日期是指在不考虑时区的情况下实现的简单的日历事件。例如：

- [`Temporal.PlainTime`](https://tc39.es/proposal-temporal/docs/#Temporal-PlainTime)指定一个特殊的时间，例如 *在每个工作日下午三点举行会议*

 ```js
 // 以下全都表示为 15:00:00
 new Temporal.PlainTime(15, 0, 0);
 Temporal.PlainTime.from('15:00:00');
 ```

- [`Temporal.PlainDate`](https://tc39.es/proposal-temporal/docs/#Temporal-PlainDate)指定一个特殊的日期，例如*你需要在2022年1月31日前提交报税表*
```js 
 // 一下都表示2022年1月31日
new Temporal.PlainDate(2022, 1, 31);
Temporal.PlainDate.from('2022-01-31');
```

- [`Temporal.PlainDateTime`](https://tc39.es/proposal-temporal/docs/#Temporal-PlainDateTime)指定一个不分时区的日期合时间
```js
new Temporal.PlainDateTime(2022, 5, 4, 10, 11, 12);
Temporal.PlainDateTime.from('2022-05-04T10:11:12');
```

- [`Temporal.PlainYearMonth`](https://tc39.es/proposal-temporal/docs/#Temporal-PlainYearMonth) 指定某一个月的计划。例如*2022年6月计划已经完成*
```js
new Temporal.PlainYearMonth(2022, 6);
Temporal.PlainYearMonth.from('2022-06');
```

- [`Temporal.PlainMonthDay`](https://tc39.es/proposal-temporal/docs/#Temporal-PlainMonthDay) 指定不限年份的时间，例如：*十月一日是国庆*：
```js
new Temporal.PlainMonthDay(10, 1);
Temporal.PlainMonthDay.from('10-01');
```
### 开源会话重播
在生产环境中，调试web应用可能是非常耗时又困难的。[OpenReplay](https://github.com/openreplay/openreplay)是一个可以替代 FullStory、 LogRocket 和 Hotjar 的开源开源产品。它可以帮助你监听和回放用户的所有操作，并且会告诉你是如何处理用户的每一步操作的。就犹如你打开了控制台并看着用户在操作一样。OpenReplay是目前唯一可用的开源产品。

![OpenReplay](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47dea57692774cb5834c74bcc37c970e~tplv-k3u1fbpfcp-zoom-1.image)

### 日期和时间值
你可以从指定时区的时间值中获取到你想要的信息，例如：
```js
const t1 = Temporal.ZonedDateTime.from('2022-12-07T03:24:30+02:00[Africa/Cairo]');
```

你可以从中获取到:

```js
t1.year;        // 2022
t1.month;       // 12
t1.day;         // 7
t1.hour;        // 3
t1.minute;      // 24
t1.second;      // 30
t1.millisecond; // 0
t1.microsecond; // 0
t1.nanosecond;  // 0
```

其他特性：

-   `dayOfWeek` — 周一返回1，周天返回7
-   `dayOfYear` — 返回1到365或366
-   `weekOfYear` — 返回1-到52或者53
-   `daysInMonth` — 返回28、29、30或31
-   `daysInYear` — 返回 `365` 或者 `366`
-   `inLeapYear` — 闰年返回true，平年返回false

### 日期和时间的比较和排序
所有 `Temporal`对象都包含一个`.compare(date1, date2)` 方法，该方法返回:
-   `0` ==> date1和date2相等
-   `1` ==> date1大于date2
-   `-1` ==> date1小于date2
例如:
```js
const
  date1 = Temporal.Now,
  date2 = Temporal.PlainDateTime.from('2022-05-04');

Temporal.ZonedDateTime.compare(date1, date2);
// 1
```
你可以将`compare()`函数作为`sort`函数的参数传入来实现日期的升序/降序排列：
```js
const t = [

    '2022-01-01T00:00:00+00:00[Europe/London]',
    '2022-01-01T00:00:00+00:00[Africa/Cairo]',
    '2022-01-01T00:00:00+00:00[America/New_York]'

  ].map( d => Temporal.ZonedDateTime.from(d) )
  .sort( Temporal.ZonedDateTime.compare );
```
### 日期和时间的计算
`Temporal`对象将提供计算方法： [add()](https://tc39.es/proposal-temporal/docs/duration.html#add)， [subtract()](https://tc39.es/proposal-temporal/docs/duration.html#subtract), 和 [round()](https://tc39.es/proposal-temporal/docs/duration.html#round) ：

你可以通过[`Temporal.Duration` object](https://tc39.es/proposal-temporal/docs/duration.htm) 定义一个开始时间，然后可以分别以`years`， `months`， `weeks`， `days`， `hours`， `minutes`， `seconds`， `milliseconds`， `microseconds` and `nanoseconds`为单位来计算时间，或者使用`sign`键用1或者-1来表示相反的运算。这些方法都仅支持一段时间，所以不需要创建一个指定的实践对象。例如：
```js
const t1 = Temporal.ZonedDateTime.from('2022-05-04T00:00:00+00:00[Europe/London]');

// 增加8小时59分
t1.add({ hours: 8, minutes: 59 }); // 或者
t1.add(Temporal.Duration.from({ hours: 8, minutes: 59 }));

// 减少两周
t1.subtract({ weeks: 2 }); // 或者
t1.add({ weeks: 2, sign: -1 });

// 最近的一个月
t1.round({ smallestUnit: 'month' });
```
使用`until()` 和`since()` 方法可以返回一个`Temporal.Duration` 对象，他可以基于某一个日期/时间来返回直到某一个时间或者从某个时间开始的时间范围，例如：
```js
// months to t1
t1.until().months;

// days to t2
t2.until().days;

// weeks since t3
t3.since().weeks;
```
 `equals()`可以实现判断两个时间是否相等，例如：

```js
const  d1 = Temporal.PlainDate.from('2022-01-31');
  d2 = Temporal.PlainDate.from('2023-01-31');
d1.equals(d2); // false
```

### 格式化日期和时间字符串
`Temporal`对象都包含一个`.toString()` 来返回一个字符串，例如：Temporal. now.toString () :

```js
2022-09-05T02:55:00+02:00[Europe/London]
```
这种表示格式对用户来说是不友好的，所以[国际化API](https://blog.openreplay.com/the-complete-guide-to-localizing-your-app-with-javascript-s-internationalization-api)提供了一个更方便的本地化方法，例如：
```js
// 初始化时间
const d = new Temporal.PlainDate(2022, 3, 14);

// 美式时间格式: 3/14/2022
new Intl.DateTimeFormat('en-US').format(d);

// 英式时间格式: 14/03/2022
new Intl.DateTimeFormat('en-GB').format(d);

// 西班牙时间格式: miércoles, 14 de abril de 2022
new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' }).format(d);
```
### Temporal Time
我们从一开始就接受了不方便的`Date`对象，`Temporal`的出现,将会给JavaScript开发者带来些许的期待。以后我们将脱离使用日期库的烦恼。

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://blog.openreplay.com/is-it-time-for-the-javascript-temporal-api)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/571/Is_It_Time_for_the_JavaScript_Temporal_API.md)
> * 译者：[HongyuYU](https://github.com/chressYu)
> * 校对者：[Kim Yang](https://github.com/KimYangOfCat)，[DaoDaolee](https://github.com/daodaolee)
