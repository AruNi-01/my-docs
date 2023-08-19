const e=JSON.parse('{"key":"v-3b2c507c","path":"/studynotes/microservice/basis/%E5%88%9D%E6%8E%A2%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84.html","title":"初探微服务架构","lang":"zh-CN","frontmatter":{"title":"初探微服务架构","date":"2023-06-16T00:00:00.000Z","icon":"write","order":3,"category":["微服务架构"],"tag":["基础"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 前言 在前面两篇文章中，讲解了什么是微服务，何时进行服务拆分，拆分后会到来什么问题等。 这篇文章将带你走进微服务架构，看看它的各个组成部分，主要的几个基本组件如下： 服务描述； 注册中心； 服务框架； 服务监控； 服务追踪； 服务治理。 一次微服务之间的调用流程如下： 服务提供者 按照一定格式的服务描述，向注册中心注册服务，声明自己能提供哪儿服务以及服务所在的地址是什么，完成服务发布； 服务消费者向注册中心发起请求，查询要调用服务的地址，然后 按照约定好的通信协议发起请求 即可得到结果； 在服务调用过程中： 服务的请求耗时、调用次数等指标会被服务追踪组件记录下来，用于故障问题的定位； 如果发现请求量过大、出现调用失败等情况，则将通过服务降级、熔断、重试等服务治理手段保证系统的可用性。 微服务架构的模块图：","head":[["meta",{"property":"og:url","content":"https://aruni.me/studynotes/microservice/basis/%E5%88%9D%E6%8E%A2%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"初探微服务架构"}],["meta",{"property":"og:description","content":"本文内容 前言 在前面两篇文章中，讲解了什么是微服务，何时进行服务拆分，拆分后会到来什么问题等。 这篇文章将带你走进微服务架构，看看它的各个组成部分，主要的几个基本组件如下： 服务描述； 注册中心； 服务框架； 服务监控； 服务追踪； 服务治理。 一次微服务之间的调用流程如下： 服务提供者 按照一定格式的服务描述，向注册中心注册服务，声明自己能提供哪儿服务以及服务所在的地址是什么，完成服务发布； 服务消费者向注册中心发起请求，查询要调用服务的地址，然后 按照约定好的通信协议发起请求 即可得到结果； 在服务调用过程中： 服务的请求耗时、调用次数等指标会被服务追踪组件记录下来，用于故障问题的定位； 如果发现请求量过大、出现调用失败等情况，则将通过服务降级、熔断、重试等服务治理手段保证系统的可用性。 微服务架构的模块图："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-22T02:33:17.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:published_time","content":"2023-06-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-22T02:33:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"初探微服务架构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-22T02:33:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 服务描述","slug":"_1-服务描述","link":"#_1-服务描述","children":[{"level":3,"title":"1.1 RESTful API","slug":"_1-1-restful-api","link":"#_1-1-restful-api","children":[]},{"level":3,"title":"1.2 XML 配置","slug":"_1-2-xml-配置","link":"#_1-2-xml-配置","children":[]},{"level":3,"title":"1.3 IDL 文件","slug":"_1-3-idl-文件","link":"#_1-3-idl-文件","children":[]}]},{"level":2,"title":"2. 注册中心","slug":"_2-注册中心","link":"#_2-注册中心","children":[]},{"level":2,"title":"3. 服务框架","slug":"_3-服务框架","link":"#_3-服务框架","children":[]},{"level":2,"title":"4. 服务监控","slug":"_4-服务监控","link":"#_4-服务监控","children":[]},{"level":2,"title":"5. 服务追踪","slug":"_5-服务追踪","link":"#_5-服务追踪","children":[]},{"level":2,"title":"6. 服务治理","slug":"_6-服务治理","link":"#_6-服务治理","children":[]},{"level":2,"title":"7. 总结","slug":"_7-总结","link":"#_7-总结","children":[]}],"git":{"createdTime":1686933168000,"updatedTime":1687401197000,"contributors":[{"name":"aarynlu","email":"aarynlu@tencent.com","commits":2}]},"readingTime":{"minutes":7.77,"words":2332},"filePathRelative":"studynotes/microservice/basis/初探微服务架构.md","localizedDate":"2023年6月16日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>在前面两篇文章中，讲解了什么是微服务，何时进行服务拆分，拆分后会到来什么问题等。</p>\\n<p>这篇文章将带你走进微服务架构，看看它的各个组成部分，主要的几个基本组件如下：</p>\\n<ul>\\n<li>服务描述；</li>\\n<li>注册中心；</li>\\n<li>服务框架；</li>\\n<li>服务监控；</li>\\n<li>服务追踪；</li>\\n<li>服务治理。</li>\\n</ul>\\n<p>一次微服务之间的调用流程如下：</p>\\n<ol>\\n<li><strong>服务提供者</strong> 按照一定格式的服务描述，<strong>向注册中心注册服务</strong>，声明自己能提供哪儿服务以及服务所在的地址是什么，完成服务发布；</li>\\n<li><strong>服务消费者向注册中心发起请求，查询要调用服务的地址</strong>，然后 <strong>按照约定好的通信协议发起请求</strong> 即可得到结果；</li>\\n</ol>\\n<p>在服务调用过程中：</p>\\n<ul>\\n<li>服务的请求耗时、调用次数等指标会被服务追踪组件记录下来，用于故障问题的定位；</li>\\n<li>如果发现请求量过大、出现调用失败等情况，则将通过服务降级、熔断、重试等服务治理手段保证系统的可用性。</li>\\n</ul>\\n<p>微服务架构的模块图：</p>\\n<p><img src=\\"https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306152238598.png\\" alt=\\"img\\" loading=\\"lazy\\"></p>\\n</div>","autoDesc":true}');export{e as data};
