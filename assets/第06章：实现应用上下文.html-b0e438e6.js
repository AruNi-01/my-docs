const e=JSON.parse(`{"key":"v-0a5a8e36","path":"/studynotes/framework/small-spring/ioc/%E7%AC%AC06%E7%AB%A0%EF%BC%9A%E5%AE%9E%E7%8E%B0%E5%BA%94%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87.html","title":"第06章：实现应用上下文","lang":"zh-CN","frontmatter":{"title":"第06章：实现应用上下文","date":"2023-3-20","order":6,"icon":"write","category":["框架"],"tag":["Spring"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. 设计 在上一章的设计中，将类和属性都配置到 XML 文件中，完成了通过 XML 配置文件的方式进行类的实例化操作及依赖属性注入。 我们在测试时，是使用 DefaultListableBeanFactory 和 XmlBeanDefinitonReader 的实例化对象来进行初始化 BeanFactory，读取配置文件以及注册 Bean。但这其实是 提供给 Spring 框架的，不可能把这些暴露给用户。而且目前也 不能对 Class 类、Bean 对象进行扩展操作。","head":[["meta",{"property":"og:url","content":"https://aruni.me/docs/studynotes/framework/small-spring/ioc/%E7%AC%AC06%E7%AB%A0%EF%BC%9A%E5%AE%9E%E7%8E%B0%E5%BA%94%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87.html"}],["meta",{"property":"og:site_name","content":"AruNi's domain"}],["meta",{"property":"og:title","content":"第06章：实现应用上下文"}],["meta",{"property":"og:description","content":"本文内容 1. 设计 在上一章的设计中，将类和属性都配置到 XML 文件中，完成了通过 XML 配置文件的方式进行类的实例化操作及依赖属性注入。 我们在测试时，是使用 DefaultListableBeanFactory 和 XmlBeanDefinitonReader 的实例化对象来进行初始化 BeanFactory，读取配置文件以及注册 Bean。但这其实是 提供给 Spring 框架的，不可能把这些暴露给用户。而且目前也 不能对 Class 类、Bean 对象进行扩展操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-20T14:55:38.000Z"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2023-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-20T14:55:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第06章：实现应用上下文\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-20T14:55:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 设计","slug":"_1-设计","link":"#_1-设计","children":[]},{"level":2,"title":"2. 实现","slug":"_2-实现","link":"#_2-实现","children":[{"level":3,"title":"2.1 工厂扩展模块","slug":"_2-1-工厂扩展模块","link":"#_2-1-工厂扩展模块","children":[]},{"level":3,"title":"2.2 上下文的实现","slug":"_2-2-上下文的实现","link":"#_2-2-上下文的实现","children":[]},{"level":3,"title":"2.3 目录结构","slug":"_2-3-目录结构","link":"#_2-3-目录结构","children":[]},{"level":3,"title":"2.4 类结构图","slug":"_2-4-类结构图","link":"#_2-4-类结构图","children":[]}]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"4. 流程","slug":"_4-流程","link":"#_4-流程","children":[]}],"git":{"createdTime":1679324138000,"updatedTime":1679324138000,"contributors":[{"name":"AruNi-01","email":"1298911600@qq.com","commits":1}]},"readingTime":{"minutes":7.5,"words":2250},"filePathRelative":"studynotes/framework/small-spring/ioc/第06章：实现应用上下文.md","localizedDate":"2023年3月20日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. 设计</h2>\\n<p>在上一章的设计中，将类和属性都配置到 XML 文件中，完成了通过 XML 配置文件的方式进行类的实例化操作及依赖属性注入。</p>\\n<p>我们在测试时，是使用 <code>DefaultListableBeanFactory</code> 和 <code>XmlBeanDefinitonReader</code> 的实例化对象来进行初始化 BeanFactory，读取配置文件以及注册 Bean。但这其实是 <strong>提供给 Spring 框架的，不可能把这些暴露给用户</strong>。而且目前也 <strong>不能对 Class 类、Bean 对象进行扩展操作</strong>。</p>","autoDesc":true}`);export{e as data};
