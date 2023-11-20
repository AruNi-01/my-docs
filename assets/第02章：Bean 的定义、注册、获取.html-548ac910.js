const e=JSON.parse('{"key":"v-2a36acc8","path":"/studynotes/framework/small-spring/ioc/%E7%AC%AC02%E7%AB%A0%EF%BC%9ABean%20%E7%9A%84%E5%AE%9A%E4%B9%89%E3%80%81%E6%B3%A8%E5%86%8C%E3%80%81%E8%8E%B7%E5%8F%96.html","title":"第02章：Bean 的定义、注册、获取","lang":"zh-CN","frontmatter":{"title":"第02章：Bean 的定义、注册、获取","date":"2023-03-09T00:00:00.000Z","order":2,"category":["框架"],"tag":["Spring"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. 设计 上面创建的 Bean 容器比较简单，接下来我们需要提供一个 单例 Bean 缓存（因为缓存中保存一个实例 Bean 即可，所以采用单例），在获取 Bean 的时候，如果缓冲中存在就直接返回，否则才需要创建 Bean。 另外，在上面的设计中，BeanDefinition 中的 bean 变量是 Object 类型，那么在初始化阶段就要实例化这个 Bean。所以我们考虑 将 bean 变量定义成 Class 类型，这样 在初始化阶段就可以只传一个类信息，转而把 Bean 的实例化也交给容器来做。","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/studynotes/framework/small-spring/ioc/%E7%AC%AC02%E7%AB%A0%EF%BC%9ABean%20%E7%9A%84%E5%AE%9A%E4%B9%89%E3%80%81%E6%B3%A8%E5%86%8C%E3%80%81%E8%8E%B7%E5%8F%96.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"第02章：Bean 的定义、注册、获取"}],["meta",{"property":"og:description","content":"本文内容 1. 设计 上面创建的 Bean 容器比较简单，接下来我们需要提供一个 单例 Bean 缓存（因为缓存中保存一个实例 Bean 即可，所以采用单例），在获取 Bean 的时候，如果缓冲中存在就直接返回，否则才需要创建 Bean。 另外，在上面的设计中，BeanDefinition 中的 bean 变量是 Object 类型，那么在初始化阶段就要实例化这个 Bean。所以我们考虑 将 bean 变量定义成 Class 类型，这样 在初始化阶段就可以只传一个类信息，转而把 Bean 的实例化也交给容器来做。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-16T10:04:08.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2023-03-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-16T10:04:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第02章：Bean 的定义、注册、获取\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-16T10:04:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 设计","slug":"_1-设计","link":"#_1-设计","children":[]},{"level":2,"title":"2. 实现","slug":"_2-实现","link":"#_2-实现","children":[]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"4. 流程","slug":"_4-流程","link":"#_4-流程","children":[]}],"git":{"createdTime":1678763923000,"updatedTime":1694858648000,"contributors":[{"name":"aarynlu","email":"aarynlu@tencent.com","commits":2},{"name":"AruNi-01","email":"1298911600@qq.com","commits":1}]},"readingTime":{"minutes":2.69,"words":807},"filePathRelative":"studynotes/framework/small-spring/ioc/第02章：Bean 的定义、注册、获取.md","localizedDate":"2023年3月9日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. 设计</h2>\\n<p>上面创建的 Bean 容器比较简单，接下来我们需要提供一个 <strong>单例 Bean 缓存</strong>（因为缓存中保存一个实例 Bean 即可，所以采用单例），在获取 Bean 的时候，如果缓冲中存在就直接返回，否则才需要创建 Bean。</p>\\n<p>另外，在上面的设计中，BeanDefinition 中的 bean 变量是 Object 类型，那么在初始化阶段就要实例化这个 Bean。所以我们考虑 <strong>将 bean 变量定义成 Class 类型</strong>，这样 <strong>在初始化阶段就可以只传一个类信息，转而把 Bean 的实例化也交给容器来做</strong>。</p>","autoDesc":true}');export{e as data};
