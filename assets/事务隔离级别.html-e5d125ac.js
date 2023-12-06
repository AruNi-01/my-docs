const t=JSON.parse('{"key":"v-75a80800","path":"/backend/database/mysql/transaction/%E4%BA%8B%E5%8A%A1%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html","title":"事务隔离级别","lang":"zh-CN","frontmatter":{"title":"事务隔离级别","date":"2023-12-06T00:00:00.000Z","order":2,"category":["数据库"],"tag":["MySQL"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 前言 上一篇文章中，介绍了事务的基本概念、MySQL 中的事务控制语句、事务的 ACID 特性等，本文将展开其中的 I，也就是 “隔离性”。 1. 并发事务引发的问题 当一个数据库中有 多个事务在同时执行 时，可能会出现 脏读、不可重复读、幻读 的问题。下面来看看这三个问题分别是什么现象。","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/backend/database/mysql/transaction/%E4%BA%8B%E5%8A%A1%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"事务隔离级别"}],["meta",{"property":"og:description","content":"本文内容 前言 上一篇文章中，介绍了事务的基本概念、MySQL 中的事务控制语句、事务的 ACID 特性等，本文将展开其中的 I，也就是 “隔离性”。 1. 并发事务引发的问题 当一个数据库中有 多个事务在同时执行 时，可能会出现 脏读、不可重复读、幻读 的问题。下面来看看这三个问题分别是什么现象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-06T15:21:59.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-06T15:21:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事务隔离级别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-06T15:21:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 并发事务引发的问题","slug":"_1-并发事务引发的问题","link":"#_1-并发事务引发的问题","children":[{"level":3,"title":"1.1 脏读","slug":"_1-1-脏读","link":"#_1-1-脏读","children":[]},{"level":3,"title":"1.2 不可重复读","slug":"_1-2-不可重复读","link":"#_1-2-不可重复读","children":[]},{"level":3,"title":"1.3 幻读","slug":"_1-3-幻读","link":"#_1-3-幻读","children":[]},{"level":3,"title":"1.4 补充：脏写","slug":"_1-4-补充-脏写","link":"#_1-4-补充-脏写","children":[]}]},{"level":2,"title":"2. 事务隔离级别有哪些？","slug":"_2-事务隔离级别有哪些","link":"#_2-事务隔离级别有哪些","children":[]},{"level":2,"title":"3. 举例说明","slug":"_3-举例说明","link":"#_3-举例说明","children":[]},{"level":2,"title":"4. 参考文章","slug":"_4-参考文章","link":"#_4-参考文章","children":[]}],"git":{"createdTime":1701875245000,"updatedTime":1701876119000,"contributors":[{"name":"AarynLu","email":"hello@0x3f4.run","commits":2}]},"readingTime":{"minutes":6.16,"words":1848},"filePathRelative":"backend/database/mysql/transaction/事务隔离级别.md","localizedDate":"2023年12月6日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>上一篇文章中，介绍了事务的基本概念、MySQL 中的事务控制语句、事务的 ACID 特性等，本文将展开其中的 I，也就是 “隔离性”。</p>\\n</div>\\n<h2> 1. 并发事务引发的问题</h2>\\n<p>当一个数据库中有 <strong>多个事务在同时执行</strong> 时，可能会出现 <strong>脏读、不可重复读、幻读</strong> 的问题。下面来看看这三个问题分别是什么现象。</p>","autoDesc":true}');export{t as data};
