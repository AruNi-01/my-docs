const e=JSON.parse(`{"key":"v-11a2fc7f","path":"/studynotes/framework/small-spring/ioc/%E7%AC%AC08%E7%AB%A0%EF%BC%9AAware%20%E6%84%9F%E7%9F%A5%E5%AE%B9%E5%99%A8%E5%AF%B9%E8%B1%A1.html","title":"第08章：Aware 感知容器对象","lang":"zh-CN","frontmatter":{"title":"第08章：Aware 感知容器对象","date":"2023-3-26","order":8,"icon":"write","category":["框架"],"tag":["Spring"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. 设计 在上一章中，我们对 Spring 框架添加了初始化/销毁方法的扩展，使得框架的功能更强大，现在的框架所提供的功能有：Bean 对象的定义和注册、在操作 Bean 过程中执行的 BeanFactoryPostProcessor、BeanPostProcessor、InitializingBean、DisposableBean 处理，以及在 XML 中新增的配置处理。 现在，我们希望能够 获取 Spring 容器中的内部对象，比如获取其中的 BeanFactory、BeanName、BeanClassLoader、ApplicationContext 等，获取后就可以进一步对框架进行扩展使用。","head":[["meta",{"property":"og:url","content":"https://aruni.me/docs/studynotes/framework/small-spring/ioc/%E7%AC%AC08%E7%AB%A0%EF%BC%9AAware%20%E6%84%9F%E7%9F%A5%E5%AE%B9%E5%99%A8%E5%AF%B9%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"AruNi's domain"}],["meta",{"property":"og:title","content":"第08章：Aware 感知容器对象"}],["meta",{"property":"og:description","content":"本文内容 1. 设计 在上一章中，我们对 Spring 框架添加了初始化/销毁方法的扩展，使得框架的功能更强大，现在的框架所提供的功能有：Bean 对象的定义和注册、在操作 Bean 过程中执行的 BeanFactoryPostProcessor、BeanPostProcessor、InitializingBean、DisposableBean 处理，以及在 XML 中新增的配置处理。 现在，我们希望能够 获取 Spring 容器中的内部对象，比如获取其中的 BeanFactory、BeanName、BeanClassLoader、ApplicationContext 等，获取后就可以进一步对框架进行扩展使用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-26T05:37:49.000Z"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2023-03-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-26T05:37:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第08章：Aware 感知容器对象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-26T05:37:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 设计","slug":"_1-设计","link":"#_1-设计","children":[]},{"level":2,"title":"2. 实现","slug":"_2-实现","link":"#_2-实现","children":[]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"4. 流程","slug":"_4-流程","link":"#_4-流程","children":[]}],"git":{"createdTime":1679809069000,"updatedTime":1679809069000,"contributors":[{"name":"AruNi-01","email":"1298911600@qq.com","commits":1}]},"readingTime":{"minutes":4.52,"words":1357},"filePathRelative":"studynotes/framework/small-spring/ioc/第08章：Aware 感知容器对象.md","localizedDate":"2023年3月26日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. 设计</h2>\\n<p>在上一章中，我们对 Spring 框架添加了初始化/销毁方法的扩展，使得框架的功能更强大，现在的框架所提供的功能有：Bean 对象的定义和注册、在操作 Bean 过程中执行的 BeanFactoryPostProcessor、BeanPostProcessor、InitializingBean、DisposableBean 处理，以及在 XML 中新增的配置处理。</p>\\n<p>现在，我们希望能够 <strong>获取 Spring 容器中的内部对象</strong>，比如获取其中的 BeanFactory、BeanName、BeanClassLoader、ApplicationContext 等，获取后就可以进一步对框架进行扩展使用。</p>","autoDesc":true}`);export{e as data};
