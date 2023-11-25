const e=JSON.parse('{"key":"v-dfae06d6","path":"/backend/framework/small-spring/ioc/%E7%AC%AC10%E7%AB%A0%EF%BC%9A%E5%AE%B9%E5%99%A8%E4%BA%8B%E4%BB%B6%E5%92%8C%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E5%99%A8.html","title":"第10章：容器事件和事件监听器","lang":"zh-CN","frontmatter":{"title":"第10章：容器事件和事件监听器","date":"2023-03-29T00:00:00.000Z","order":10,"category":["框架"],"tag":["Spring"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. 设计 在 Spring 中有一个 Event 事件功能，它可以通过 事件的定义、发布、监听，来完成一些自定义的动作。 例如在项目中定义一个用户注册事件，当用户完成注册时，通过事件监听给用户发送优惠卷和短信通知等。使用 事件 功能就能很好的 将基本功能（注册）和对应的策略服务（发送优惠卷、短信通知等）分离开来，降低系统的耦合。当后续再扩展注册服务时（比如添加实名认证、判断用户属性等），就不会影响到依赖于注册成功后执行的动作。","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/backend/framework/small-spring/ioc/%E7%AC%AC10%E7%AB%A0%EF%BC%9A%E5%AE%B9%E5%99%A8%E4%BA%8B%E4%BB%B6%E5%92%8C%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"第10章：容器事件和事件监听器"}],["meta",{"property":"og:description","content":"本文内容 1. 设计 在 Spring 中有一个 Event 事件功能，它可以通过 事件的定义、发布、监听，来完成一些自定义的动作。 例如在项目中定义一个用户注册事件，当用户完成注册时，通过事件监听给用户发送优惠卷和短信通知等。使用 事件 功能就能很好的 将基本功能（注册）和对应的策略服务（发送优惠卷、短信通知等）分离开来，降低系统的耦合。当后续再扩展注册服务时（比如添加实名认证、判断用户属性等），就不会影响到依赖于注册成功后执行的动作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T16:55:13.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2023-03-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T16:55:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第10章：容器事件和事件监听器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-25T16:55:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 设计","slug":"_1-设计","link":"#_1-设计","children":[]},{"level":2,"title":"2. 实现","slug":"_2-实现","link":"#_2-实现","children":[{"level":3,"title":"2.1 定义和实现事件 Event","slug":"_2-1-定义和实现事件-event","link":"#_2-1-定义和实现事件-event","children":[]},{"level":3,"title":"2.2 事件监听器 Listener","slug":"_2-2-事件监听器-listener","link":"#_2-2-事件监听器-listener","children":[]},{"level":3,"title":"2.3 事件广播器 Multicaster","slug":"_2-3-事件广播器-multicaster","link":"#_2-3-事件广播器-multicaster","children":[]},{"level":3,"title":"2.4 定义和实现事件发布者 Publisher","slug":"_2-4-定义和实现事件发布者-publisher","link":"#_2-4-定义和实现事件发布者-publisher","children":[]},{"level":3,"title":"2.5 目录结构","slug":"_2-5-目录结构","link":"#_2-5-目录结构","children":[]},{"level":3,"title":"2.6 类结构图","slug":"_2-6-类结构图","link":"#_2-6-类结构图","children":[]}]},{"level":2,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]},{"level":2,"title":"4. 流程","slug":"_4-流程","link":"#_4-流程","children":[]}],"git":{"createdTime":1700931313000,"updatedTime":1700931313000,"contributors":[{"name":"MECHREVO_GGPRO\\\\AarynLu","email":"hello@0x3f4.run","commits":1}]},"readingTime":{"minutes":9.64,"words":2892},"filePathRelative":"backend/framework/small-spring/ioc/第10章：容器事件和事件监听器.md","localizedDate":"2023年3月29日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. 设计</h2>\\n<p>在 Spring 中有一个 <strong>Event 事件功能</strong>，它可以通过 <strong>事件的定义、发布、监听，来完成一些自定义的动作</strong>。</p>\\n<p>例如在项目中定义一个用户注册事件，当用户完成注册时，通过事件监听给用户发送优惠卷和短信通知等。使用 <strong>事件</strong> 功能就能很好的 <strong>将基本功能（注册）和对应的策略服务（发送优惠卷、短信通知等）分离开来，降低系统的耦合</strong>。当后续再扩展注册服务时（比如添加实名认证、判断用户属性等），就不会影响到依赖于注册成功后执行的动作。</p>","autoDesc":true}');export{e as data};
