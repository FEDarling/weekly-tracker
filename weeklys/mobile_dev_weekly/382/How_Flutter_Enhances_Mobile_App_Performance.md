---
title: 'How Flutter 2.8 Enhances Mobile App Performance'
date: '2022-02-04'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags: ['CSS','JavaScript','HTML','TypeScript','ECMAScript','Chrome','游览器','网络','React','Vue','webpack','babel','vite','node']
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: false
---

![](https://i1.wp.com/flutteragency.com/wp-content/uploads/2021/12/How-Flutter-2.8-Enhance-Mobile-App-Performance.jpg?w=1200&ssl=1)

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

Google released Flutter 2.8 with multiple improvements & updates. So, lets have a look at **how Flutter 2.8 enhance mobile performance**. We will focus on the key factors which are improved in the latest release of Flutter.

> How Flutter 2.8 improves mobile performance?

Flutter 2.8 includes the update of the Dart 2.15 programming language. The update was presented at the same time. Also, higher performance is an important factor in this update. The Flutter team has announced that this update should also benefit existing mobile apps. The update will reduce the startup time and lower the storage requirements. Below we have explained the other features of this update in detail.

## Low latency in app startup

The Flutter team has been working on various aspects to reduce the latency when starting apps. This includes the interaction of the standard font manager with Dart VM’s garbage collection (GC). There was always a bottleneck in the setup of Dart when setting the font manager. Now developers can use **Isolate** so that both processes will run concurrently the next time. In addition, Flutter 2.8 avoids unnecessary GC cycles in DartVM during the app launch sequence. Let us understand this though the example. In Android, the framework will only notify DartVM before the first frame is rendered if a message about a memory bottleneck comes from **TRIM_LEVEL_RUNNING_CRITICAL** or later.

Fast loading of Dart VM AOT code will isolates services. This can be a problem for devices with low memory resources. For Android, Flutter 2.8 allows you to load services on more need-based way. It is now available in a separate bundle. Also very soon, platform threads will no longer have to wait for the platform view to be created. The purpose of all these measures is to reduce the boot time by half on weak Android hardware. But you’ll also get to see an improvement of 10% on more powerful devices.

## Concurrency Model with Isolate

In addition, Dart 2.15 has made a significant contribution by revising the concurrency model. Dart is built on the separation of independent execution units. This is to avoid common shared storage issues such as race conditions. In the new version, the darts team also introduced Isolate Groups. In such group releases, isolation includes various internal data structures of the current program. It allows individual elements to be leaner. This reduces the start time and reduces the memory requirements of individual execution units. According to blog posts, it’s up to 100 times higher in each case.

The Dart 2.15 syntax also allows you to dismantle the constructor. Previously, developers could only use function pointers when working with Dart’s core libraries. For example, when creating the Flutter UI, there was no useful feature. In the future, constructor tearoffs will make it easier to create column widgets in particular, as shown in the following TextWidgets example:

```js
class FruitWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: ['Apple', 'Orange'].map(Text.new).toList());
  }
}
```
## Memory:

Flutter enthusiastically loads Dart VM’s “Service Isolate” and the AOT code is bundled with the app, so Flutter developers targeting memory-constrained devices struggle to create performance traces. This was because Flutter was reading both things into memory simultaneously. For Android version 2.8, the Dart VM service isolation is split into separate bundles that can be loaded individually. This saves upto 40MB of memory until service isolate is required. Dart-VM further reduced memory requirements by up to 10% by notifying the operating system that the memory pages used by the AOT program are supported for files that probably do not need to be read again. Therefore, you can reuse and redirect pages that contain copies of file-based data.

## Firebase

Another big part of the Flutter ecosystem is the FlutterFire. It is used in two-thirds of the Flutter app. This version adds many new features that make it easier to build applications with Flutter and Firebase:

* All FlutterFire plugins can be switched from beta to stable.
* New support for DartPad for many Firebase services.
* New libraries that will facilitate the creation of user interfaces for authentication and live Firestore queries.
* Last but not least, the new Firestore object / document mapping for Flutter available in alpha.

**Conclusion:**

So, in this article, we discussed about **how Flutter 2.8 enhance mobile performance**. Flutter will keep getting new updates and improvements.To know more you can read the official documentation of Flutter. Also, Do let us know your feedback/comments for further improvements.

Flutter agency is the best Flutter App development agency with a highly experienced team of Flutter developers. You can [hire Flutter developers](https://flutteragency.com/hire-flutter-developer/) on hourly basis or for fixed budget. We promise to deliver the best application developed in Flutter, which will excel in the market. Also, Flutter Agency is a portal full of excellent resources like Flutter Widget Guide, Flutter Projects, Code libs, etc. So, contact us for your next project.

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](https://flutteragency.com/how-flutter-2-8-enhance-mobile-app-performance/)对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/mobile_dev_weekly/382/How_Flutter_Enhances_Mobile_App_Performance.md)
> * 译者：
> * 校对者：