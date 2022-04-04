---
title: '现代 web 缓存中新的 Http 标准'
date: '2021-10-27'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags:
  - '网络'
  - 'HTTP'
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: true
---

如果你在现代 Web 中运行过任何大型的公共网站或 Web 应用，那么应该了解在 CDN 或者其他缓存服务中缓存你的静态内容是非常重要的。但同时它也非常复杂且令人困惑。

幸好，互联网工程任务组 (IETF) 的 HTTP 工作组正致力于定义新的 HTTP 标准以优化 CDN 或者其他缓存服务。为了发布两个新的 HTTP 标头草案标准，最近的工作量特别大。他们的目的在于使调试缓存更容易，并提供对缓存配置的更多控制。

让我们看看新的 HTTP 标准意味着什么？它是如何运作的？以及为什么每个 web 开发者都得关注它呢？

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

## 标准

我们接下来要讨论的是以下两个拟议标准:

-   [The Cache-Status Header](https://datatracker.ietf.org/doc/draft-ietf-httpbis-targeted-cache-control/)
-   [Targeted Cache-Control Headers](https://datatracker.ietf.org/doc/draft-ietf-httpbis-targeted-cache-control/)

这两个标准旨在更新 HTTP 标准使其可以匹配目前 CDN 驱动 Web 的现状。创建规范，使流行的 CDN 现有实践正式化（例如如 Fastly、Akamai 和 Cloudflare，他们都参与到了这个标准的编写工作中）。

这两个标准都是很新的规范，Cache-Status 已在 2021 年完成了多轮审查，目前正在等待（自 8 月以来）最终审查和作为正式 RFC 发布，而 Targeted Cache-Control Headers 目前是采用的草案标准，但是已经在最后一次征求反馈意见了。这两种标准都得到了 IETF 的支持，同时也引起了广泛讨论，而且它们不太可能在此之后发生太大变化。但是这两个标准毕竟还是比较新的，因此可能支持的不太广泛。

## 为什么缓存非常重要？

如果你正在维护一个用户量很高的 web 项目，想以合理的成本为用户提供良好的性能服务，那么缓存和 CDN 绝对是至关重要的。缓存和 CDN 在位于你的 Web 服务器之前作为一个反向代理以实现以下功能：

-   内容被缓存，因此你的后端服务器只接收偶尔的静态内容请求，而不是直接来 自每个访问者的请求。
-   内容交付的流量峰值可以弹性拓展，因为静态缓存比应用程序服务器更容易扩展。
-   内容请求是批处理的，因此 **1000** 个同时缓存未命中成为对后端的单个请求。
-   内容是物理分布的，因此无论用户身在何处，都可以快速传递响应。

在现代 web 时代，以上的这些功能中对于你的主机资源分配都是严格必要的。

例如，Troy Hunt 为他广受欢迎的 Pwned Passwords 网站写了一篇关于[缓存如何工作](https://www.troyhunt.com/serverless-to-the-max-doing-big-things-for-small-dollars-with-cloudflare-workers-and-azure-functions/)的详细探索。他的资源使用情况如下：

-   每周有**477.6GB**的子资源从他的域名得到服务
-   其中 **476.7GB** 来自缓存（99.8% 的缓存命中率）
-   该网站每周还会收到 **3240** 万次 API 查询调用
-   其中 **3230** 万个查询是从缓存中获得的（99.6% 的缓存率）
-   其余 API 请求由 Azure 的 Serverless 函数处理

总的来说，他这个网站的托管成本——每天处理数百万次密码核对——大约是每天 3 美分。如果在他自己的服务器上处理所有流量成本会很高，而合理的缓存设置可以同时快速、有效且低成本地的处理这些问题。这些都是非常重要的。

## 缓存存在什么问题呢？

缓存当然是一个好东西，但是想要配置好缓存可没有那么容易。

主要问题在于，在大多数案例中，任何一个请求路径都涉及很多层缓存。在后端服务器之前，大多数的设置使用某种负载均衡器/API 网关/反向代理，内置自己的缓存，在经过全球 CDN 之后从广泛分布的低延迟位置向最终用户提供内容。最重要的是，后端服务器本身可以缓存内部结果，企业和 ISP 可以运行自己的缓存代理，许多客户端（尤其是 Web 浏览器）也可以进行自己的缓存（有时使用自己的附加缓存层，例如 Service Worker ）。

这些层中的每一层都需要不同的缓存配置，例如浏览器在某些情况下可以缓存用户特定的数据，但 CDN 绝对不应该。你还需要缓存过期，通过在所有缓存间传播它，以确保最终用户尽快看到新内容。

预测这些层以及其独特的配置将如何交互是很复杂的，并且结果可能会出错的方式有很多，如下例：

-   你的内容根本不会被缓存，导致后端服务器的流量超载。
-   你的内容会被缓存，但仅在较低层，而不是在你的分布式 CDN 中。
-   过时的响应在你的缓存中保留的时间比你预期的要长，因此很难更新你的内容。
-   从你的缓存中提供错误的响应，例如向德国用户提供法语内容，或者（更糟糕的是）向未经身份验证的用户提供登录内容。
-   请求根本不通过你的 CDN，而只是直接从你的后端或反向代理获得服务。
-   你的网站或 API 缓存不一致，提供了旧数据和新数据，创建一个完全不起作用的混合数据组合体。

更糟糕的是，因为大量缓存配置存在于请求和响应元数据本身中，例如 Cache-Control 响应头

如果你不小心缓存了一个“永久缓存”响应而没有意识到，那就痛苦了，如果要修复它强制使缓存的每一层无效以比听起来更难。 ![img](https://imgs.xkcd.com/comics/refresh_types.png)

# Cache-Status 有什么帮助

有一个明显的问题在于你的缓存系统的可追朔性，为了响应一个请求，它从哪里来以及为什么从那里来？

这个响应是来自缓存还是来自真实服务器？如果它来自缓存，是来自哪个缓存？它将缓存多久？如果它不是来自缓存，为什么不来自缓存呢？这个新的响应是否已存储以供以后使用？

[Cache-Status](https://datatracker.ietf.org/doc/draft-ietf-httpbis-cache-header/) 响应头提供了一个结构，这个结构中包含了该响应的信息，所有看到请求的 CDN 和其他缓存的信息。

整体结构如下例：

```
Cache-Status: OriginCache; hit; ttl=1100, "CDN Company Here"; fwd=uri-miss;
```

## Cache-Status 响应头格式

响应头的格式如下：

```
Cache-Status: CacheName; param; param=value; param..., CacheName2; param; param...
```

这里记录了系列的缓存，其中每个缓存都有零到多个状态参数，缓存按响应顺序排列：第一个是最接近源服务器的缓存，最后一个是最接近客户端的缓存。

值得注意的是，响应可能会与此响应头一起保存在缓存中，并且会保留在将来的响应中。尽管如此，可以使用从右侧读取的参数来了解此响应这次具体存储在哪里，以及它之前来自哪里。

这里的 cache-with-parameters 值用逗号分隔，而参数本身用分号分隔（这是现在标准化的 Structured Headers RFCsf-list 中的 andsf-item 语法），当缓存名称包含 else-invalid 时可以引用空格等字符。

Cache-Status 头参数 为了解释每个缓存的行为，定义了一些参数和值：

-   hit - 响应来自此缓存，没有向上游发送请求
-   fwd=<reason>- 如果设置，则向上游发送请求到下一层。这是有原因的：

-   fwd=bypass - 缓存配置为不处理此请求
    -   fwd=method - 由于使用了 HTTP 方法，因此必须转发请求
    -   fwd=uri-miss - 没有可用于请求 URI 的匹配缓存数据
    -   fwd=vary-miss - URI 有匹配的缓存数据，但 Vary 标头中列出的标头不匹配
    -   fwd=miss - 没有可用的匹配缓存数据（由于某些其他原因，例如：缓存不确定原因）
    -   fwd=stale - 有匹配的缓存数据，但是是旧的数据
    -   fwd=partial- 有匹配的缓存数据，但仅限于部分响应（例如，先前的请求使用 Range 标头）
    -   fwd=request - 请求请求的非缓存数据（例如在其 Cache-Control 标头中） fwd-status=<status>- 如果 fwd 设置，这是从下一跳接收到的响应状态 stored- 如果 fwd 设置了，这表明接收到的响应是否被这个缓存存储以供以后使用
-   collapsed- 如果 fwd 已设置，则表明该请求是否与另一个请求合并（即不重复，因为等效请求已在处理中）
-   ttl=<ttl> - 缓存将在多长时间内（以秒为单位）将此响应视为“refresh”（新的数据）
-   key - 此缓存中响应的（具体实施）键
-   detail - 一个额外的自由格式字段，用于附加特定于实现的信息

使用以上这些参数我们就可以解析响应头，例如：

```
Cache-Status: ExampleCache; hit; ttl=30; key=/abc
```

意思是 ExampleCache 收到了请求，它在其缓存中（在键 /abc 下）找到了一个响应并返回它，并希望在接下来的 30 秒内继续这么做。

我们还可以解释更加复杂的情况，例如：

```
Cache-Status:
    Nginx; hit,
    Cloudflare; fwd=stale; fwd-status=304; collapsed; ttl=300,
    BrowserCache; fwd=vary-miss; fwd-status=200; stored
```

（换行只是为了可读性） 这意味着浏览器发送了请求，并且没有使用具有相同 URI 的缓存响应，因为 Vary 响应头中列出的标头不匹配。

然后 Cloudflare 收到了该请求，它缓存了一个匹配的响应（带有`Nginx; hit`的响应，这意味着它本身就是来自 Nginx 缓存的响应），但该响应现在已经过时了。

为了解决这个问题，Cloudflare 向 Nginx 发送了一个请求以重新验证响应，Nginx 发送了一个 304（未修改）响应，告诉 Cloudflare 他们现有的缓存响应仍然有效。发送的请求已折叠，这意味着同一时间有多个请求向 Cloudflare 发送相同的内容，但上游只发送了一个请求。Cloudflare 预计现在将在接下来的 5 分钟内继续提供现已重新验证的数据。

这里面包含了很多有用的信息！通过仔细的解析，仅仅是一个响应头就可以立刻告诉你这个响应内容的确切来源，以及要如何沿着整个请求路径进行缓存。

（如果你不习惯调试缓存配置，上述内容可能听起来令人望而生畏，但相信我，将其写在一个地方比尝试从头开始推断相同的信息要好一百万倍）

## Cache-Status 实践

这并不是一个全新的概念，但是它真正的好处在于从一个地方的所有缓存中提供单一的一致数据源。

现如今，每个不同的缓存提供程序都使用了许多现有的（都有点不匹配）请求头，例如 Nginx 的[X-Cache-Status](https://support.cpanel.net/hc/en-us/articles/4402904983703-How-to-add-the-X-Cache-Status-header-to-NGINX-to-assist-with-optimizing-and-troubleshooting-cache-settings)、Cloudflare 的[CF-Cache-Status](https://developers.cloudflare.com/cache/about/default-cache-behavior#cloudflare-cache-responses)和 Fastly 的[X-Served-By](https://developer.fastly.com/reference/http/http-headers/X-Served-By/)和[X-Cache](https://developer.fastly.com/reference/http/http-headers/X-Cache/)。其中每一个都提供了可以包含在 Cache-Status 的一小部分信息，并且每个都有望在未来被 Cache-Status 慢慢取代。

如今，大多数主要组件和提供商默认不包含 Cache-Status，但来自 Fastly、Akamai、Facebook 和许多其他公司的贡献者已经参与了标准化过程（因此它可能很快就会出现在网络上的许多服务和工具中）并且已经取得了进展，从[Squid](https://github.com/squid-cache/squid/commit/5fdc549054b11eb8bbc7e9640d6d071fa1ef742b)和[Caddy](https://github.com/caddyserver/cache-handler#readme) 的缓存处理程序的内置支持到 Fastly 的插入式配方。

这仅在 2021 年 8 月提交以供 RFC 发布，因此它仍然很新，但希望我们能在未来几个月继续看到对此进一步扩展的支持。如果你正在开发 CDN 或缓存组件，我真的鼓励你采用它来帮助你的用户进行调试（如果你是某个人的客户，我鼓励你向他们提出这个问题！ ）。

# Targeted Cache-Control 有什么帮助

现有的[Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) 请求头是在 web 早期（1999 年）设计的。当时 IE 4.5 刚刚发布，RIM 推出了第一个黑莓，“Web 2.0”第一次被创造用于描述第一波交互式网页。配置多层 CDN 架构以缓存 TB 级数据并不是主要话题。

时过境迁。

1999 年定义的 Cache-Control 标头是一个请求和响应标头，它允许你定义与请求相关的各种缓存参数（你将接受什么样的缓存响应）和响应（将来应该如何缓存此响应） .

我们不太关注于请求配置，但是响应缓存配置非常重要。当今用于响应的 Cache-Control 是用一个指令列表定义的，这些指令告诉缓存要如何处理响应，如下所示：

```
Cache-Control: max-age=600, stale-while-revalidate=300, private
```

以上请求头意思是：“内容将会缓存 10 分钟，然后在尝试重新验证过时内容时将其再提供 5 分钟，但只能在私有（单用户，例如浏览器）缓存中执行此操作。”

这样设置的话就不灵活，所有处理请求的缓存都必须以完全相同的方式遵循此处设置的规则。虽然可以将控制规则的范围限制为仅最终用户缓存（with private），并且在过去添加了一些重复的指令，这些指令仅适用于共享缓存（CDN 等），例如 **s-maxage** 和 **proxy-revalidate** ，但你没有办法比这更精确或更灵活。

这也就意味着你不能实现以下几个功能：

-   为浏览器和 CDN 设置不同的 **stale-while-revalidate(异步缓存更新)** 生命周期
-   将响应标记为需要重新验证内部缓存负载均衡器中的每个请求，而不是 CDN
-   使用 CDN 启用缓存，同时告诉外部共享缓存（如企业代理）不要缓存你的内容

这阻碍了许多高级用例。对于大多数的缓存组件而言，想要处理处理此问题的话，有一些配置选项可用于在该组件中定义规则，但其自身方式不太灵活，因此为不同的响应配置不同的规则要困难得多。

[Targeted Cache-Control](https://datatracker.ietf.org/doc/draft-ietf-httpbis-targeted-cache-control/)旨在通过定义新标头来设置仅针对特定的缓存而非所有缓存的缓存控制指令来解决此问题。

标头以应适用的特定 target 为前缀，它的语法与 **Cache-Control** 略有不同，因为它使用了标准的 [Structured Fields](https://datatracker.ietf.org/doc/rfc8941/) 格式，但是在使用的时候还是特别相似的。

此处使用的 target 可能是唯一的服务或组件名称，或整个缓存类。该规范目前只定义了一个 target - **CDN-Cache-Control** ，它应该是适用于所有分布式 CDN 缓存，但不适用于其他缓存 - 但其他类可以稍后定义。将来，你可以想象 **Client-Cache-Control** 为 HTTP 客户端中的缓存、**ISP** -互联网服务提供商、**Organization** -企业组织缓存等设置规则。

要使用这些标头的话，支持它们的每个缓存都将定义（固定或用户可配置的）它按优先顺序匹配的目标列表。它使用现有第一个匹配的**\<target>-Cache-Control** 标头，或者如果 **Cache-Control** 没有更具体的匹配项，则使用普通标头（如果有设置）。

总而言之，如果你已经熟悉现有的缓存机制，那么新标头也非常简单易用。target 标头与某些目标匹配，你可以根据实际需要，配置每个目标的缓存规则，并且最终选择最佳的匹配。例如：

```
Client-Cache-Control: must-revalidate
CDN-Cache-Control: max-age=600, stale-after-revalidate=300
Squid-Cache-Control: max-age=60
Cache-Control: no-store
```

上面的配置意为：

-   最终客户端（至少得是那些认识我刚才编的 Client-Cache-Control（客户端缓存）控制头的人）可以缓存此内容，但必须在每次使用前重新验证它

-   所有 CDN 都可以将内容缓存 10 分钟，然后使用旧的响应，同时重新验证 5 分钟

-   Squid（一个缓存反向代理）只能缓存内容 60 秒（并且在它是旧数据时不能使用它，因为没有 stale-while-revalidate 指令）
-   任何不理解 Targeted Cache-Control 指令的端都绝对不能缓存此内容。

## Targeted Cache-Control 实践

这是 Cache-Status 标准化过程中比较新且比较早的功能，因此它仍然可能会更改。如果你需要反馈，规范在 GitHub 上，你可以在该 repo 中提交问题（或向工作组邮件列表发送消息）以分享你的想法。

也就是说，规范本身是由代表 Fastly、Akamai 和 Cloudflare 的作者编写的，因此它已经得到了良好的行业支持，而且它在整个过程中已经足够远，不太可能发生巨大变化。

如今，Cloudflare 和 Akamai 都已支持此功能，因此如果你使用这些缓存，你可以立即开始使用**CDN-Cache-Control**，**Akamai-Cache-Control** 和 **Cloudflare-CDN-Cache-Control**进行精确配置。对于许多其他工具和服务，很可能会有类似的支持，所以请注意这个空间。

# 展望未来

缓存的使用在 2021 年可能很困难，但 **Cache-Status** 和 **Targeted Cache-Control** 正在迅速成熟，它们将使缓存的配置和调试变得更加简单。如果你正在使用缓存，值得去仔细研究一下。

IETF 最近只在制定两个 HTTP 标准 - 如果你有兴趣帮助 Web 开发或了解即将推出的标准，还有很多其他标准。从限速标头到 **Proxy-Status**，再到 **HTTP 消息摘要** 和 **HTTP 客户端提示** 应有尽有。HTTP 是一个不断发展的标准，未来还会有更多！如果你对此感兴趣，我强烈建议你加入工作组邮件列表，以关注新的发展并分享你的反馈。

想要测试或调试 HTTP 请求、缓存和错误？可以使用 [HTTP Toolkit](https://httptoolkit.tech/) 从任意位置拦截、检查和模拟 HTTP(S) 。

---

> - 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> - [查看原文](https://httptoolkit.tech/blog/status-targeted-caching-headers/)对比阅读
> - 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/frontend_focus/514/status_targeted_caching_headers.md)
> - 译者：[一绪](http://github.com/myx981008)
> - 校对者：[daodaolee](https://github.com/daodaolee)
