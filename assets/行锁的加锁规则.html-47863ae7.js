const e=JSON.parse('{"key":"v-4b7b7300","path":"/studynotes/database/mysql/lock/%E8%A1%8C%E9%94%81%E7%9A%84%E5%8A%A0%E9%94%81%E8%A7%84%E5%88%99.html","title":"行锁的加锁规则","lang":"zh-CN","frontmatter":{"title":"行锁的加锁规则","date":"2023-07-29T00:00:00.000Z","order":2,"category":["数据库"],"tag":["MySQL"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 前言 上一篇文章 中，介绍了 MySQL 中的锁类型，其中行级锁分为 Record Lock、Gap Lock 和 Next-Key Lock，那一条 SQL 语句要加行级锁时，应该加那个锁？具体是怎么加的呢？本文就来讲讲 MySQL 行级锁的加锁规则是怎样的。","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/studynotes/database/mysql/lock/%E8%A1%8C%E9%94%81%E7%9A%84%E5%8A%A0%E9%94%81%E8%A7%84%E5%88%99.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"行锁的加锁规则"}],["meta",{"property":"og:description","content":"本文内容 前言 上一篇文章 中，介绍了 MySQL 中的锁类型，其中行级锁分为 Record Lock、Gap Lock 和 Next-Key Lock，那一条 SQL 语句要加行级锁时，应该加那个锁？具体是怎么加的呢？本文就来讲讲 MySQL 行级锁的加锁规则是怎样的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-16T10:04:08.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-07-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-16T10:04:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"行锁的加锁规则\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-16T10:04:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 行级锁回顾","slug":"_1-行级锁回顾","link":"#_1-行级锁回顾","children":[]},{"level":2,"title":"2. 行级锁加锁规则","slug":"_2-行级锁加锁规则","link":"#_2-行级锁加锁规则","children":[{"level":3,"title":"2.1 唯一索引等值查询","slug":"_2-1-唯一索引等值查询","link":"#_2-1-唯一索引等值查询","children":[]},{"level":3,"title":"2.2 唯一索引范围查询","slug":"_2-2-唯一索引范围查询","link":"#_2-2-唯一索引范围查询","children":[]},{"level":3,"title":"2.3 非唯一索引等值查询","slug":"_2-3-非唯一索引等值查询","link":"#_2-3-非唯一索引等值查询","children":[]},{"level":3,"title":"2.4 非唯一索引范围查询","slug":"_2-4-非唯一索引范围查询","link":"#_2-4-非唯一索引范围查询","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]}],"git":{"createdTime":1690631492000,"updatedTime":1694858648000,"contributors":[{"name":"aarynlu","email":"aarynlu@tencent.com","commits":2}]},"readingTime":{"minutes":11.35,"words":3404},"filePathRelative":"studynotes/database/mysql/lock/行锁的加锁规则.md","localizedDate":"2023年7月29日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p><a href=\\"https://aruni.me/studynotes/database/mysql/lock/MySQL%E4%B8%AD%E7%9A%84%E9%94%81.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">上一篇文章</a> 中，介绍了 MySQL 中的锁类型，其中行级锁分为 Record Lock、Gap Lock 和 Next-Key Lock，那一条 SQL 语句要加行级锁时，应该加那个锁？具体是怎么加的呢？本文就来讲讲 MySQL 行级锁的加锁规则是怎样的。</p>\\n</div>","autoDesc":true}');export{e as data};
