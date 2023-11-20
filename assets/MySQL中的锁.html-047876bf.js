const e=JSON.parse('{"key":"v-2b0d808d","path":"/studynotes/database/mysql/lock/MySQL%E4%B8%AD%E7%9A%84%E9%94%81.html","title":"MySQL 中的锁","lang":"zh-CN","frontmatter":{"title":"MySQL 中的锁","date":"2023-02-21T00:00:00.000Z","order":1,"category":["数据库"],"tag":["MySQL"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. MySQL 中的锁有哪些 根据加锁的范围，MySQL 中的锁分为 全局锁、表锁和行级锁。 全局锁和表级锁是在 Server 层实现的，而行级锁是在存储引擎层实现的。 2. 全局锁 2.1 什么是全局锁 全局锁，顾名思义会对整个 MySQL 实例加锁，也就是锁库中所有的表。","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/studynotes/database/mysql/lock/MySQL%E4%B8%AD%E7%9A%84%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"MySQL 中的锁"}],["meta",{"property":"og:description","content":"本文内容 1. MySQL 中的锁有哪些 根据加锁的范围，MySQL 中的锁分为 全局锁、表锁和行级锁。 全局锁和表级锁是在 Server 层实现的，而行级锁是在存储引擎层实现的。 2. 全局锁 2.1 什么是全局锁 全局锁，顾名思义会对整个 MySQL 实例加锁，也就是锁库中所有的表。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-16T10:04:08.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-02-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-16T10:04:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 中的锁\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-16T10:04:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. MySQL 中的锁有哪些","slug":"_1-mysql-中的锁有哪些","link":"#_1-mysql-中的锁有哪些","children":[]},{"level":2,"title":"2. 全局锁","slug":"_2-全局锁","link":"#_2-全局锁","children":[{"level":3,"title":"2.1 什么是全局锁","slug":"_2-1-什么是全局锁","link":"#_2-1-什么是全局锁","children":[]},{"level":3,"title":"2.2 全局锁的使用场景","slug":"_2-2-全局锁的使用场景","link":"#_2-2-全局锁的使用场景","children":[]}]},{"level":2,"title":"3. 表级锁","slug":"_3-表级锁","link":"#_3-表级锁","children":[{"level":3,"title":"3.1 表锁","slug":"_3-1-表锁","link":"#_3-1-表锁","children":[]},{"level":3,"title":"3.2 元数据锁","slug":"_3-2-元数据锁","link":"#_3-2-元数据锁","children":[]},{"level":3,"title":"3.3 意向锁","slug":"_3-3-意向锁","link":"#_3-3-意向锁","children":[]},{"level":3,"title":"3.4 AUTO-INC 锁","slug":"_3-4-auto-inc-锁","link":"#_3-4-auto-inc-锁","children":[]}]},{"level":2,"title":"4. 行级锁","slug":"_4-行级锁","link":"#_4-行级锁","children":[{"level":3,"title":"4.1 两阶段锁协议","slug":"_4-1-两阶段锁协议","link":"#_4-1-两阶段锁协议","children":[]},{"level":3,"title":"4.2 Record Lock","slug":"_4-2-record-lock","link":"#_4-2-record-lock","children":[]},{"level":3,"title":"4.3 Gap Lock","slug":"_4-3-gap-lock","link":"#_4-3-gap-lock","children":[]},{"level":3,"title":"4.4 Next-Key Lock","slug":"_4-4-next-key-lock","link":"#_4-4-next-key-lock","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]},{"level":2,"title":"6. 参考文章","slug":"_6-参考文章","link":"#_6-参考文章","children":[]}],"git":{"createdTime":1677758434000,"updatedTime":1694858648000,"contributors":[{"name":"AruNi-01","email":"1298911600@qq.com","commits":3},{"name":"aarynlu","email":"aarynlu@tencent.com","commits":3}]},"readingTime":{"minutes":16.9,"words":5069},"filePathRelative":"studynotes/database/mysql/lock/MySQL中的锁.md","localizedDate":"2023年2月21日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> <strong>1. MySQL 中的锁有哪些</strong></h2>\\n<p>根据加锁的范围，MySQL 中的锁分为 <strong>全局锁、表锁和行级锁</strong>。</p>\\n<p>全局锁和表级锁是在 Server 层实现的，而行级锁是在存储引擎层实现的。</p>\\n<h2> <strong>2. 全局锁</strong></h2>\\n<h3> <strong>2.1 什么是全局锁</strong></h3>\\n<p>全局锁，顾名思义会对整个 MySQL 实例加锁，也就是锁库中所有的表。</p>","autoDesc":true}');export{e as data};
