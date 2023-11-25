const e=JSON.parse('{"key":"v-b74bd76e","path":"/backend/database/mysql/basis/select%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html","title":"select 执行流程","lang":"zh-CN","frontmatter":{"title":"select 执行流程","date":"2023-02-15T00:00:00.000Z","order":2,"category":["数据库"],"tag":["MySQL"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 前言 对于一个 CRUD Boy，每天最多使用的 SQL 语句非 select 莫属了吧。那么你知道一条 select 语句是如何执行的吗？ 下面就以最常见的 MySQL 为例，来探究探究一条 select 语句到底要历经哪些坎坷，才能把数据呈现给我们。 1. 客户端连接服务器","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/backend/database/mysql/basis/select%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"select 执行流程"}],["meta",{"property":"og:description","content":"本文内容 前言 对于一个 CRUD Boy，每天最多使用的 SQL 语句非 select 莫属了吧。那么你知道一条 select 语句是如何执行的吗？ 下面就以最常见的 MySQL 为例，来探究探究一条 select 语句到底要历经哪些坎坷，才能把数据呈现给我们。 1. 客户端连接服务器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T16:55:13.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T16:55:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"select 执行流程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-25T16:55:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 客户端连接服务器","slug":"_1-客户端连接服务器","link":"#_1-客户端连接服务器","children":[]},{"level":2,"title":"2. select 执行流程","slug":"_2-select-执行流程","link":"#_2-select-执行流程","children":[{"level":3,"title":"2.1 查询缓存","slug":"_2-1-查询缓存","link":"#_2-1-查询缓存","children":[]},{"level":3,"title":"2.2 解析阶段","slug":"_2-2-解析阶段","link":"#_2-2-解析阶段","children":[]},{"level":3,"title":"2.3 执行阶段","slug":"_2-3-执行阶段","link":"#_2-3-执行阶段","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"4. 参考文章","slug":"_4-参考文章","link":"#_4-参考文章","children":[]}],"git":{"createdTime":1700931313000,"updatedTime":1700931313000,"contributors":[{"name":"MECHREVO_GGPRO\\\\AarynLu","email":"hello@0x3f4.run","commits":1}]},"readingTime":{"minutes":8.95,"words":2684},"filePathRelative":"backend/database/mysql/basis/select执行流程.md","localizedDate":"2023年2月15日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>对于一个 CRUD Boy，每天最多使用的 SQL 语句非 select 莫属了吧。那么你知道一条 select 语句是如何执行的吗？</p>\\n<p>下面就以最常见的 MySQL 为例，来探究探究一条 select 语句到底要历经哪些坎坷，才能把数据呈现给我们。</p>\\n</div>\\n<h2> <strong>1. 客户端连接服务器</strong></h2>","autoDesc":true}');export{e as data};
