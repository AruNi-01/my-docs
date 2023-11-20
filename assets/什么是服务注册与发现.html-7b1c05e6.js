const e=JSON.parse('{"key":"v-86f013f0","path":"/studynotes/microservice/register_and_discover/%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E5%8F%91%E7%8E%B0.html","title":"什么是服务注册与发现","lang":"zh-CN","frontmatter":{"title":"什么是服务注册与发现","date":"2023-06-22T00:00:00.000Z","order":1,"category":["微服务架构"],"tag":["服务注册与发现"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 前言 想要构建微服务、注册服务，首先要解决的是 服务提供者如何发布服务，服务消费者如何引用服务。即 上一章 中所讲的 服务的接口名是什么？传递的参数是什么？返回值是什么？和一些接口描述信息等。 回顾一下，常见的服务发布和引用的方式有 RESTful API、XML 配置和 IDL 文件（Interface Definition Language）三种。 我们定义好服务后，如何让调用者知道该服务的地址呢？也就是怎么知道该服务部署到哪台服务器上的？这就需要引入一个第三方了，即 服务注册与发现中心。","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/studynotes/microservice/register_and_discover/%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E5%8F%91%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"什么是服务注册与发现"}],["meta",{"property":"og:description","content":"本文内容 前言 想要构建微服务、注册服务，首先要解决的是 服务提供者如何发布服务，服务消费者如何引用服务。即 上一章 中所讲的 服务的接口名是什么？传递的参数是什么？返回值是什么？和一些接口描述信息等。 回顾一下，常见的服务发布和引用的方式有 RESTful API、XML 配置和 IDL 文件（Interface Definition Language）三种。 我们定义好服务后，如何让调用者知道该服务的地址呢？也就是怎么知道该服务部署到哪台服务器上的？这就需要引入一个第三方了，即 服务注册与发现中心。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-16T10:04:08.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"服务注册与发现"}],["meta",{"property":"article:published_time","content":"2023-06-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-16T10:04:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是服务注册与发现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-16T10:04:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是服务注册与发现","slug":"_1-什么是服务注册与发现","link":"#_1-什么是服务注册与发现","children":[]},{"level":2,"title":"2. 高可用的服务注册与发现","slug":"_2-高可用的服务注册与发现","link":"#_2-高可用的服务注册与发现","children":[{"level":3,"title":"2.1 服务端崩溃检测","slug":"_2-1-服务端崩溃检测","link":"#_2-1-服务端崩溃检测","children":[]},{"level":3,"title":"2.2 客户端容错","slug":"_2-2-客户端容错","link":"#_2-2-客户端容错","children":[]},{"level":3,"title":"2.3 注册中心选型","slug":"_2-3-注册中心选型","link":"#_2-3-注册中心选型","children":[]},{"level":3,"title":"补充：注册中心崩溃了怎么办？","slug":"补充-注册中心崩溃了怎么办","link":"#补充-注册中心崩溃了怎么办","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]}],"git":{"createdTime":1687442213000,"updatedTime":1694858648000,"contributors":[{"name":"aarynlu","email":"aarynlu@tencent.com","commits":3}]},"readingTime":{"minutes":11.35,"words":3405},"filePathRelative":"studynotes/microservice/register_and_discover/什么是服务注册与发现.md","localizedDate":"2023年6月22日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>想要构建微服务、注册服务，首先要解决的是 <strong>服务提供者如何发布服务，服务消费者如何引用服务</strong>。即 <a href=\\"https://aruni.me/studynotes/microservice/basis/%E5%88%9D%E6%8E%A2%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84.html#_1-%E6%9C%8D%E5%8A%A1%E6%8F%8F%E8%BF%B0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">上一章</a> 中所讲的 <strong>服务的接口名是什么？传递的参数是什么？返回值是什么？和一些接口描述信息等</strong>。</p>\\n<p>回顾一下，常见的服务发布和引用的方式有 <strong>RESTful API、XML 配置和 IDL 文件</strong>（Interface Definition Language）三种。</p>\\n<p>我们定义好服务后，如何让调用者知道该服务的地址呢？也就是怎么知道该服务部署到哪台服务器上的？这就需要引入一个第三方了，即 <strong>服务注册与发现中心</strong>。</p>\\n</div>","autoDesc":true}');export{e as data};
