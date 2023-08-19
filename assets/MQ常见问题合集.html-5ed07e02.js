const t=JSON.parse('{"key":"v-2b8a0216","path":"/studynotes/middleware/mq/common_question/MQ%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%90%88%E9%9B%86.html","title":"MQ 常见问题合集","lang":"zh-CN","frontmatter":{"title":"MQ 常见问题合集","date":"2023-06-19T00:00:00.000Z","icon":"write","order":1,"category":["中间件"],"tag":["消息队列"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 为什么要使用 MQ？ MQ 主要有下面几个作用，这也是为什么要使用 MQ 的原因： 异步处理：当业务需要处理的逻辑非常多的时候，可以 把一些用户不关心的、耗时的逻辑丢到 MQ 中做异步处理，从而尽快将结果返回给用户； 业务解耦：在我的抽奖系统中，可以将抽奖和发奖解耦开来，用户抽奖后，直接返回奖品信息，具体的奖品类型是什么，应该怎么发放，后续由 MQ 去执行，最后将结果持久化到 DB 即可； 流量削峰：当并发量过大时，可以利用 MQ 进行缓解。在我的校园社区项目中，发送系统通知就是用 MQ 来削峰的，避免在点赞、评论、私信消息过多时，影响系统性能。","head":[["meta",{"property":"og:url","content":"https://aruni.me/studynotes/middleware/mq/common_question/MQ%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%90%88%E9%9B%86.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"MQ 常见问题合集"}],["meta",{"property":"og:description","content":"本文内容 为什么要使用 MQ？ MQ 主要有下面几个作用，这也是为什么要使用 MQ 的原因： 异步处理：当业务需要处理的逻辑非常多的时候，可以 把一些用户不关心的、耗时的逻辑丢到 MQ 中做异步处理，从而尽快将结果返回给用户； 业务解耦：在我的抽奖系统中，可以将抽奖和发奖解耦开来，用户抽奖后，直接返回奖品信息，具体的奖品类型是什么，应该怎么发放，后续由 MQ 去执行，最后将结果持久化到 DB 即可； 流量削峰：当并发量过大时，可以利用 MQ 进行缓解。在我的校园社区项目中，发送系统通知就是用 MQ 来削峰的，避免在点赞、评论、私信消息过多时，影响系统性能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T12:28:10.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:published_time","content":"2023-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T12:28:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MQ 常见问题合集\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-10T12:28:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"为什么要使用 MQ？","slug":"为什么要使用-mq","link":"#为什么要使用-mq","children":[]},{"level":2,"title":"如何设计一个 MQ？","slug":"如何设计一个-mq","link":"#如何设计一个-mq","children":[]},{"level":2,"title":"消息积压问题","slug":"消息积压问题","link":"#消息积压问题","children":[]},{"level":2,"title":"顺序消费问题","slug":"顺序消费问题","link":"#顺序消费问题","children":[]},{"level":2,"title":"如何解决幂等问题？","slug":"如何解决幂等问题","link":"#如何解决幂等问题","children":[]},{"level":2,"title":"高可用性—多副本机制","slug":"高可用性—多副本机制","link":"#高可用性—多副本机制","children":[]},{"level":2,"title":"未完待续...","slug":"未完待续","link":"#未完待续","children":[]}],"git":{"createdTime":1687183079000,"updatedTime":1688992090000,"contributors":[{"name":"aarynlu","email":"aarynlu@tencent.com","commits":2}]},"readingTime":{"minutes":6.05,"words":1816},"filePathRelative":"studynotes/middleware/mq/common_question/MQ常见问题合集.md","localizedDate":"2023年6月19日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 为什么要使用 MQ？</h2>\\n<p>MQ 主要有下面几个作用，这也是为什么要使用 MQ 的原因：</p>\\n<ul>\\n<li><strong>异步处理</strong>：当业务需要处理的逻辑非常多的时候，可以 <strong>把一些用户不关心的、耗时的逻辑丢到 MQ 中做异步处理</strong>，从而尽快将结果返回给用户；</li>\\n<li><strong>业务解耦</strong>：在我的抽奖系统中，可以将抽奖和发奖解耦开来，用户抽奖后，直接返回奖品信息，具体的奖品类型是什么，应该怎么发放，后续由 MQ 去执行，最后将结果持久化到 DB 即可；</li>\\n<li><strong>流量削峰</strong>：当并发量过大时，可以利用 MQ 进行缓解。在我的校园社区项目中，发送系统通知就是用 MQ 来削峰的，避免在点赞、评论、私信消息过多时，影响系统性能。</li>\\n</ul>","autoDesc":true}');export{t as data};
