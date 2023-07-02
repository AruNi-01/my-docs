const e=JSON.parse(`{"key":"v-234200dd","path":"/studynotes/design_pattern/pattern/create_type/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html","title":"单例模式","lang":"zh-CN","frontmatter":{"title":"单例模式","date":"2023-03-30T00:00:00.000Z","order":1,"icon":"write","category":["设计模式"],"tag":["设计模式与范式"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. 为什么需要单例模式？ 单例设计模式 很简单，意思就是 一个类只能有一个唯一的实例（对象）。 那么为什么需要单例模式呢？或者说，什么情况下需要使用到单例模式？下面通过两个例子来说明。 1.1 资源访问冲突 如果我们要自定义实现一个 Logger 类，用于往文件中打印日志。这个 Logger 类的设计如下：","head":[["meta",{"property":"og:url","content":"https://aruni.me/studynotes/design_pattern/pattern/create_type/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"AruNi's domain"}],["meta",{"property":"og:title","content":"单例模式"}],["meta",{"property":"og:description","content":"本文内容 1. 为什么需要单例模式？ 单例设计模式 很简单，意思就是 一个类只能有一个唯一的实例（对象）。 那么为什么需要单例模式呢？或者说，什么情况下需要使用到单例模式？下面通过两个例子来说明。 1.1 资源访问冲突 如果我们要自定义实现一个 Logger 类，用于往文件中打印日志。这个 Logger 类的设计如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T13:25:13.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"设计模式与范式"}],["meta",{"property":"article:published_time","content":"2023-03-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-10T13:25:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单例模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-10T13:25:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 为什么需要单例模式？","slug":"_1-为什么需要单例模式","link":"#_1-为什么需要单例模式","children":[{"level":3,"title":"1.1 资源访问冲突","slug":"_1-1-资源访问冲突","link":"#_1-1-资源访问冲突","children":[]},{"level":3,"title":"1.2 全局唯一类","slug":"_1-2-全局唯一类","link":"#_1-2-全局唯一类","children":[]}]},{"level":2,"title":"2. 如何实现单例？","slug":"_2-如何实现单例","link":"#_2-如何实现单例","children":[{"level":3,"title":"2.1 饿汉式","slug":"_2-1-饿汉式","link":"#_2-1-饿汉式","children":[]},{"level":3,"title":"2.2 懒汉式","slug":"_2-2-懒汉式","link":"#_2-2-懒汉式","children":[]},{"level":3,"title":"2.3 双重检测锁","slug":"_2-3-双重检测锁","link":"#_2-3-双重检测锁","children":[]},{"level":3,"title":"2.4 静态内部类","slug":"_2-4-静态内部类","link":"#_2-4-静态内部类","children":[]},{"level":3,"title":"2.5 枚举","slug":"_2-5-枚举","link":"#_2-5-枚举","children":[]}]},{"level":2,"title":"3. 为什么不推荐使用单例模式？","slug":"_3-为什么不推荐使用单例模式","link":"#_3-为什么不推荐使用单例模式","children":[{"level":3,"title":"3.1 单例存在什么问题？","slug":"_3-1-单例存在什么问题","link":"#_3-1-单例存在什么问题","children":[]},{"level":3,"title":"3.2 有何替代单例的方案？","slug":"_3-2-有何替代单例的方案","link":"#_3-2-有何替代单例的方案","children":[]}]},{"level":2,"title":"4. 如何实现集群环境下的分布式单例？","slug":"_4-如何实现集群环境下的分布式单例","link":"#_4-如何实现集群环境下的分布式单例","children":[{"level":3,"title":"4.1 单例模式中的唯一性","slug":"_4-1-单例模式中的唯一性","link":"#_4-1-单例模式中的唯一性","children":[]},{"level":3,"title":"4.2 如何实现线程唯一的单例？","slug":"_4-2-如何实现线程唯一的单例","link":"#_4-2-如何实现线程唯一的单例","children":[]},{"level":3,"title":"4.3 如何实现集群环境下的单例？","slug":"_4-3-如何实现集群环境下的单例","link":"#_4-3-如何实现集群环境下的单例","children":[]},{"level":3,"title":"4.4 如何实现多例模式？","slug":"_4-4-如何实现多例模式","link":"#_4-4-如何实现多例模式","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":1680182594000,"updatedTime":1686403513000,"contributors":[{"name":"AruNi-01","email":"1298911600@qq.com","commits":2},{"name":"aarynlu","email":"aarynlu@tencent.com","commits":1}]},"readingTime":{"minutes":22.34,"words":6702},"filePathRelative":"studynotes/design_pattern/pattern/create_type/单例模式.md","localizedDate":"2023年3月30日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. 为什么需要单例模式？</h2>\\n<p><strong>单例设计模式</strong> 很简单，意思就是 <strong>一个类只能有一个唯一的实例</strong>（对象）。</p>\\n<p>那么为什么需要单例模式呢？或者说，什么情况下需要使用到单例模式？下面通过两个例子来说明。</p>\\n<h3> 1.1 资源访问冲突</h3>\\n<p>如果我们要自定义实现一个 Logger 类，用于往文件中打印日志。这个 Logger 类的设计如下：</p>","autoDesc":true}`);export{e as data};
