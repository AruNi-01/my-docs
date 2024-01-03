const e=JSON.parse('{"key":"v-9b664150","path":"/backend/database/redis/high_availability/%E4%B8%BB%E4%BB%8E%E6%A8%A1%E5%BC%8F.html","title":"主从模式","lang":"zh-CN","frontmatter":{"title":"主从模式","date":"2024-01-03T00:00:00.000Z","order":1,"category":["数据库"],"tag":["Redis"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. 为什么需要主从模式？ Redis 提供了 AOF 日志、RDB 快照，以及混合持久化的持久化方式，可以保障 Redis 的可用性。但是只有持久化是不够的，如果只运行了一个 Redis 实例，当这个实例宕机后，该 Redis 就无法向外提供服务了。 其实，Redis 的高可用性主要体现在两个方面，一是 数据尽量少丢失，二是 服务尽量少中断。所以只有持久化方式是不够的，还需要保证 一台 Redis 实例宕机后，还有其他的实例来继续提供服务，也就是 增加副本冗余量，将一份数据同时保存到多个实例上。","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/backend/database/redis/high_availability/%E4%B8%BB%E4%BB%8E%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"主从模式"}],["meta",{"property":"og:description","content":"本文内容 1. 为什么需要主从模式？ Redis 提供了 AOF 日志、RDB 快照，以及混合持久化的持久化方式，可以保障 Redis 的可用性。但是只有持久化是不够的，如果只运行了一个 Redis 实例，当这个实例宕机后，该 Redis 就无法向外提供服务了。 其实，Redis 的高可用性主要体现在两个方面，一是 数据尽量少丢失，二是 服务尽量少中断。所以只有持久化方式是不够的，还需要保证 一台 Redis 实例宕机后，还有其他的实例来继续提供服务，也就是 增加副本冗余量，将一份数据同时保存到多个实例上。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-03T14:41:02.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2024-01-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-03T14:41:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"主从模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-03T14:41:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 为什么需要主从模式？","slug":"_1-为什么需要主从模式","link":"#_1-为什么需要主从模式","children":[]},{"level":2,"title":"2. 主从库模式","slug":"_2-主从库模式","link":"#_2-主从库模式","children":[]},{"level":2,"title":"3. 主从库间的数据同步","slug":"_3-主从库间的数据同步","link":"#_3-主从库间的数据同步","children":[{"level":3,"title":"3.1 第一次同步","slug":"_3-1-第一次同步","link":"#_3-1-第一次同步","children":[]},{"level":3,"title":"3.2 后续同步","slug":"_3-2-后续同步","link":"#_3-2-后续同步","children":[]}]},{"level":2,"title":"4. 主从级联模式分担全量复制时的主库压力","slug":"_4-主从级联模式分担全量复制时的主库压力","link":"#_4-主从级联模式分担全量复制时的主库压力","children":[]},{"level":2,"title":"5. 主从库间的网络断了怎么办？","slug":"_5-主从库间的网络断了怎么办","link":"#_5-主从库间的网络断了怎么办","children":[]},{"level":2,"title":"6. 参考文章","slug":"_6-参考文章","link":"#_6-参考文章","children":[]}],"git":{"createdTime":1704292862000,"updatedTime":1704292862000,"contributors":[{"name":"AarynLu","email":"hello@0x3f4.run","commits":1}]},"readingTime":{"minutes":9.99,"words":2996},"filePathRelative":"backend/database/redis/high_availability/主从模式.md","localizedDate":"2024年1月3日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. 为什么需要主从模式？</h2>\\n<p>Redis 提供了 AOF 日志、RDB 快照，以及混合持久化的持久化方式，可以保障 Redis 的可用性。但是只有持久化是不够的，如果只运行了一个 Redis 实例，当这个实例宕机后，该 Redis 就无法向外提供服务了。</p>\\n<p>其实，Redis 的高可用性主要体现在两个方面，一是 <strong>数据尽量少丢失</strong>，二是 <strong>服务尽量少中断</strong>。所以只有持久化方式是不够的，还需要保证 <strong>一台 Redis 实例宕机后，还有其他的实例来继续提供服务</strong>，也就是 <strong>增加副本冗余量</strong>，将一份数据同时保存到多个实例上。</p>","autoDesc":true}');export{e as data};
