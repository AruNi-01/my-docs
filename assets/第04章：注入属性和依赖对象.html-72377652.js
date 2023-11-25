const e=JSON.parse('{"key":"v-6edb7cf4","path":"/backend/framework/small-spring/ioc/%E7%AC%AC04%E7%AB%A0%EF%BC%9A%E6%B3%A8%E5%85%A5%E5%B1%9E%E6%80%A7%E5%92%8C%E4%BE%9D%E8%B5%96%E5%AF%B9%E8%B1%A1.html","title":"第04章：注入属性和依赖对象","lang":"zh-CN","frontmatter":{"title":"第04章：注入属性和依赖对象","date":"2023-03-13T00:00:00.000Z","order":4,"category":["框架"],"tag":["Spring"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. 设计 在上一章的设计中，按照是否带有参数的构造函数实现了不同的类实例化策略。但是并 没有考虑类中是否有属性，如果类包含属性，那么 在实例化时就需要填充属性信息，这样创建的对象才是完整的。 举个例子，如果在 UserService 类中使用到了 userDao（private UserDao userDao)，那么 在实例化 UserService 时，也需要将 UserDao 实例化，得到 userDao 对象（依赖对象），将其注入进 UserService 类，填充为 UserService 类的属性。","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/backend/framework/small-spring/ioc/%E7%AC%AC04%E7%AB%A0%EF%BC%9A%E6%B3%A8%E5%85%A5%E5%B1%9E%E6%80%A7%E5%92%8C%E4%BE%9D%E8%B5%96%E5%AF%B9%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"第04章：注入属性和依赖对象"}],["meta",{"property":"og:description","content":"本文内容 1. 设计 在上一章的设计中，按照是否带有参数的构造函数实现了不同的类实例化策略。但是并 没有考虑类中是否有属性，如果类包含属性，那么 在实例化时就需要填充属性信息，这样创建的对象才是完整的。 举个例子，如果在 UserService 类中使用到了 userDao（private UserDao userDao)，那么 在实例化 UserService 时，也需要将 UserDao 实例化，得到 userDao 对象（依赖对象），将其注入进 UserService 类，填充为 UserService 类的属性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T16:55:13.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T16:55:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第04章：注入属性和依赖对象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-25T16:55:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 设计","slug":"_1-设计","link":"#_1-设计","children":[]},{"level":2,"title":"2. 实现","slug":"_2-实现","link":"#_2-实现","children":[]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"4. 流程","slug":"_4-流程","link":"#_4-流程","children":[]}],"git":{"createdTime":1700931313000,"updatedTime":1700931313000,"contributors":[{"name":"MECHREVO_GGPRO\\\\AarynLu","email":"hello@0x3f4.run","commits":1}]},"readingTime":{"minutes":3.53,"words":1058},"filePathRelative":"backend/framework/small-spring/ioc/第04章：注入属性和依赖对象.md","localizedDate":"2023年3月13日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. 设计</h2>\\n<p>在上一章的设计中，按照是否带有参数的构造函数实现了不同的类实例化策略。但是并 <strong>没有考虑类中是否有属性</strong>，如果类包含属性，那么 <strong>在实例化时就需要填充属性信息</strong>，这样创建的对象才是完整的。</p>\\n<p>举个例子，如果在 UserService 类中使用到了 userDao（<code>private UserDao userDao</code>)，那么 <strong>在实例化 UserService 时，也需要将 UserDao 实例化，得到 userDao 对象（依赖对象），将其注入进 UserService 类，填充为 UserService 类的属性</strong>。</p>","autoDesc":true}');export{e as data};
