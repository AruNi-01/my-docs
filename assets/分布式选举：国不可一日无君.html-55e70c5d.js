const e=JSON.parse(`{"key":"v-6e5a62fe","path":"/studynotes/distributed/coord_and_sync/%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%89%E4%B8%BE%EF%BC%9A%E5%9B%BD%E4%B8%8D%E5%8F%AF%E4%B8%80%E6%97%A5%E6%97%A0%E5%90%9B.html","title":"分布式选举：国不可一日无君","lang":"zh-CN","frontmatter":{"title":"分布式选举：国不可一日无君","shortTitle":"分布式选举","date":"2023-06-10T00:00:00.000Z","icon":"write","order":2,"category":["分布式技术"],"tag":["分布式协调与同步"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 前言 谈到分布式，那必定涉及到集群了，因为分布式无非就是加几台机器，那么这一群机器就组成了一个集群。集群中的各台机器，也叫作节点。 那集群中的节点都是怎么协同、怎么管理的呢？这就需要一个 Leader 来负责调度和管理其他节点，以达到集群中的数据一致性。 在分布式中，这个 Leader 被称为 主节点，而选举 Leader 的过程，就叫作 分布式选举。","head":[["meta",{"property":"og:url","content":"https://aruni.me/docs/studynotes/distributed/coord_and_sync/%E5%88%86%E5%B8%83%E5%BC%8F%E9%80%89%E4%B8%BE%EF%BC%9A%E5%9B%BD%E4%B8%8D%E5%8F%AF%E4%B8%80%E6%97%A5%E6%97%A0%E5%90%9B.html"}],["meta",{"property":"og:site_name","content":"AruNi's domain"}],["meta",{"property":"og:title","content":"分布式选举：国不可一日无君"}],["meta",{"property":"og:description","content":"本文内容 前言 谈到分布式，那必定涉及到集群了，因为分布式无非就是加几台机器，那么这一群机器就组成了一个集群。集群中的各台机器，也叫作节点。 那集群中的节点都是怎么协同、怎么管理的呢？这就需要一个 Leader 来负责调度和管理其他节点，以达到集群中的数据一致性。 在分布式中，这个 Leader 被称为 主节点，而选举 Leader 的过程，就叫作 分布式选举。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:28:37.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"分布式协调与同步"}],["meta",{"property":"article:published_time","content":"2023-06-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:28:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式选举：国不可一日无君\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-18T15:28:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 为什么要有分布式选举？","slug":"_1-为什么要有分布式选举","link":"#_1-为什么要有分布式选举","children":[]},{"level":2,"title":"2. Bully 算法：长者为大","slug":"_2-bully-算法-长者为大","link":"#_2-bully-算法-长者为大","children":[{"level":3,"title":"2.1 基本概念","slug":"_2-1-基本概念","link":"#_2-1-基本概念","children":[]},{"level":3,"title":"2.2 选举过程","slug":"_2-2-选举过程","link":"#_2-2-选举过程","children":[]},{"level":3,"title":"2.3 Bully 优缺点","slug":"_2-3-bully-优缺点","link":"#_2-3-bully-优缺点","children":[]}]},{"level":2,"title":"3. Raft 算法：民主投票","slug":"_3-raft-算法-民主投票","link":"#_3-raft-算法-民主投票","children":[{"level":3,"title":"3.1 基本概念","slug":"_3-1-基本概念","link":"#_3-1-基本概念","children":[]},{"level":3,"title":"3.2 选举过程","slug":"_3-2-选举过程","link":"#_3-2-选举过程","children":[]},{"level":3,"title":"3.3 Raft 优缺点","slug":"_3-3-raft-优缺点","link":"#_3-3-raft-优缺点","children":[]}]},{"level":2,"title":"4. ZAB 算法：具备优先级的民主投票","slug":"_4-zab-算法-具备优先级的民主投票","link":"#_4-zab-算法-具备优先级的民主投票","children":[{"level":3,"title":"4.1 基本概念","slug":"_4-1-基本概念","link":"#_4-1-基本概念","children":[]},{"level":3,"title":"4.2 选举过程","slug":"_4-2-选举过程","link":"#_4-2-选举过程","children":[]},{"level":3,"title":"4.3 ZAB 的优缺点","slug":"_4-3-zab-的优缺点","link":"#_4-3-zab-的优缺点","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":1687102117000,"updatedTime":1687102117000,"contributors":[{"name":"aarynlu","email":"aarynlu@tencent.com","commits":1}]},"readingTime":{"minutes":9.84,"words":2953},"filePathRelative":"studynotes/distributed/coord_and_sync/分布式选举：国不可一日无君.md","localizedDate":"2023年6月10日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>谈到分布式，那必定涉及到集群了，因为分布式无非就是加几台机器，那么这一群机器就组成了一个集群。集群中的各台机器，也叫作节点。</p>\\n<p>那集群中的节点都是怎么协同、怎么管理的呢？这就需要一个 <strong>Leader 来负责调度和管理其他节点，以达到集群中的数据一致性</strong>。</p>\\n<p>在分布式中，这个 Leader 被称为 <strong>主节点</strong>，而选举 Leader 的过程，就叫作 <strong>分布式选举</strong>。</p>\\n</div>","autoDesc":true}`);export{e as data};
