import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as g,o as i,c as l,b as s,e as t,w as o,a,d as n}from"./app-4001411e.js";const d={},p={class:"hint-container details"},c=s("summary",null,"本文内容",-1),_={class:"table-of-contents"},u=a(`<h2 id="_1-redis-有哪些阻塞点" tabindex="-1"><a class="header-anchor" href="#_1-redis-有哪些阻塞点" aria-hidden="true">#</a> 1. Redis 有哪些阻塞点？</h2><p>首先来看看 Redis 和不同对象进行交互时发生的操作：</p><ul><li><strong>客户端：网络 IO、键值对的 CURD 操作、数据库操作 (例如 FLUSHDB)</strong>；</li><li><strong>磁盘：生成 RDB 快照、写 AOF 日志、AOF 重写</strong>；</li><li><strong>主从节点：主库生成和传输 RDB 文件、从库接收 RDB 文件、清空数据库、加载 RDB 文件</strong>；</li><li><strong>切片集群：向其他实例传输哈希槽信息、数据迁移</strong>。</li></ul><p>这些操作哪些会引起阻塞呢？一个一个来分析。</p><h3 id="_1-1-和客户端交互的阻塞点" tabindex="-1"><a class="header-anchor" href="#_1-1-和客户端交互的阻塞点" aria-hidden="true">#</a> 1.1 和客户端交互的阻塞点</h3><p>在网络拥堵时，Redis 实例与客户端通过网络 IO 进行交互会比较慢，但 Redis 使用了 <strong>IO 多路复用机制</strong>，并 <strong>不会阻塞在等待网络连接的建立（<code>accept()</code>）或读取未到达的数据 (<code>recv()</code>)</strong>。因此 <strong>网络 IO 并不是 Redis 的一个阻塞点</strong>。</p><p>而键值对的 CURD 操作是由主线程来完成的，需要等待操作完成后才能返回数据，所以，如果 <strong>操作的复杂度较高，那肯定会阻塞 Redis 的</strong>。</p><p>那哪些操作的复杂度较高呢？有一个判断标准，就是看 <strong>操作的复杂度是否为 O(N)</strong>，比如集合元素的全量查询 HGETALL、SMEMBERS，或者集合的聚合统计操作（交并差集），这些操作就是 Redis 的第一个 <strong>阻塞点</strong>：<strong>集合的全量查询或集合操作</strong>。</p><p>除此之外，集合元素还有一个注意的点，就是 <strong>集合的删除操作</strong>，因为当删除一个集合 key 时，value 对应的是一个集合，可能包含很多成员，在删除时需要释放键值对所占用的内存空间，此过程中操作系统需要把释放掉的内存块插入一个空闲内存块的链表中，方便后续管理分配，所以 <strong>当集合中的元素较多时，释放这个集合键值对所需的时间就会很长，导致阻塞</strong>。</p><p><strong>一个集合中包含了大量的元素</strong>，也称为这是一个 <strong>bigkey</strong>，所以 Redis 的第二个 <strong>阻塞点：bitkey 的删除</strong>。</p><p>同理，在清空整个 Redis 数据库（FLUSHDB、FLUSHALL 操作）时，也会涉及到所有键值对的释放，因此 Redis 的第三个 <strong>阻塞点：清空数据库</strong>。</p><h3 id="_1-2-和磁盘交互的阻塞点" tabindex="-1"><a class="header-anchor" href="#_1-2-和磁盘交互的阻塞点" aria-hidden="true">#</a> 1.2 和磁盘交互的阻塞点</h3><p>我们都知道，<strong>磁盘 IO 是比较耗时的</strong>，因此磁盘 IO 的阻塞点需要重点关注。</p><p>其中，<strong>生成 RDB 快照和 AOF 重写都是使用子进程来执行</strong>，因此 <strong>不会阻塞主线程</strong>。</p><p>而写 AOF 日志时，有不同的磁盘写回策略（Always、Everysec、No），<strong>当同步写回磁盘（Always）时，耗时大约是 1~2ms</strong>，所以当有 <strong>大量写操作</strong>，并且采用 <strong>同步写回策略</strong>，就会 <strong>阻塞主线程</strong> 了。这就是 Redis 的第四个 <strong>阻塞点：AOF 同步写回磁盘</strong>。</p><h3 id="_1-3-主从节点交互的阻塞点" tabindex="-1"><a class="header-anchor" href="#_1-3-主从节点交互的阻塞点" aria-hidden="true">#</a> 1.3 主从节点交互的阻塞点</h3><p>主从集群建立连接时，主库需要 <strong>生成 RDB 文件，传输给从库</strong>，这两个操作都是 <strong>由子进程完成</strong>。</p><p>但从库收到 RDB 文件后，需要 <strong>清空数据库，然后加载 RDB 文件</strong>，这两个操作就会 <strong>阻塞从库的主线程了</strong>。因为 <strong>清空数据库操作就是上面的第三个阻塞点</strong>，而 <strong>从库需要加载完 RDB 文件后才能提供完整服务</strong>，因此 RDB 文件过大时，加载就会变慢，因此 Redis 的第五个 <strong>阻塞点：从库加载 RDB 文件</strong>。</p><h3 id="_1-4-切片集群交互的阻塞点" tabindex="-1"><a class="header-anchor" href="#_1-4-切片集群交互的阻塞点" aria-hidden="true">#</a> 1.4 切片集群交互的阻塞点</h3><p>Redis 切片集群中，<strong>每个 Redis 实例上分配的哈希槽信息需要在不同实例间互相传递</strong>；当进行 <strong>负载均衡或实例扩容/缩容时，数据需要进行迁移</strong>。</p><p>不过，<strong>哈希槽的信息量不大，数据迁移也是渐进式的</strong>，所以这两个操作 <strong>对主线程的阻塞影响不大</strong>。</p><p>但是需要注意一个点，<strong>Redis Cluster 方案在数据迁移时只有同步迁移</strong>，所以如果 <strong>迁移的是一个 bigkey，对主线程的阻塞影响就比较大了</strong>，这个点在后续切片集群数据迁移的文章中讲解。所以 Redis 中需要尤其注意 bigkey，尽量拆分开来。</p><p>总结一下，<strong>Redis 中的阻塞点主要有以下五个</strong>：</p><ul><li><strong>集合的全量查询和聚合操作</strong>；</li><li><strong>bigkey 的删除</strong>；</li><li><strong>清空数据库</strong>；</li><li><strong>AOF 同步写回磁盘</strong>；</li><li><strong>从库加载 RDB 文件</strong>。</li></ul><p>那么这些阻塞操作哪些可以异步执行呢？下面来分析下。</p><h2 id="_2-哪些阻塞操作可以异步执行" tabindex="-1"><a class="header-anchor" href="#_2-哪些阻塞操作可以异步执行" aria-hidden="true">#</a> 2. 哪些阻塞操作可以异步执行？</h2><p><strong>操作要想被异步执行</strong>，那它肯定 <strong>不能是主线程的关键路径上的操作</strong>。所谓 <strong>关键路径上的操作</strong>，就是 <strong>客户端把请求发给 Redis 后，等着 Redis 返回结果的操作</strong>。</p><p>比如客户端需要获取一个 key 的值，就是关键路径上的操作，因为客户端需要等待值的返回；而删除一个 key，则不需要返回具体的结果，因此不算关键路径上的操作。</p><p>在 Redis 中，<strong>读操作是最常见的关键路径操作</strong>，客户端需要等待数据返回后才能进行后续的处理。而 <strong>第一个阻塞点：集合的全量查询和聚合操作，都涉及到读操作，所以不能异步执行</strong>。因此尽量使用 <strong>SCAN 命令来分批读取全量数据</strong>。</p><p><strong>删除操作不需要给客户端返回具体的结果</strong>，所以 <strong>不是关键路径操作</strong>。所以 <strong>第二个阻塞点：bigkey 的删除，以及第三个阻塞点：清空数据库，都涉及删除操作，可以异步执行</strong>。</p><blockquote><p>写操作则需要根据实际的业务场景来判断是否是关键路径操作，<strong>有些业务需要根据是否写成功的结果来进行下一步的判断处理</strong>，这就 <strong>属于关键路径操作</strong>。</p></blockquote><p>对于 <strong>AOF 同步写回磁盘</strong> 来说，需要确保 AOF 日志已经将该操作记录落盘，因此不能异步执行。但对于 <strong>Everysec 写回策略</strong>，是 <strong>可以启动一个子线程来执行 AOF 的写回的</strong>。</p><p>最后，<strong>从库加载 RDB 文件后才能提供正常的服务，所以必须先执行完毕</strong>，因此也属于关键路径操作。</p><p>通过上面分析发现，<strong>可以进行异步执行的有：bigkey 的删除、清空数据库、AOF 非同步写回</strong>。</p><p>那 Redis 是如何实现上面三个操作的异步机制呢？</p><h2 id="_3-redis-异步机制" tabindex="-1"><a class="header-anchor" href="#_3-redis-异步机制" aria-hidden="true">#</a> 3. Redis 异步机制</h2><p>Redis 在主线程启动后，会使用 <code>pthread_create</code> 函数创建 <strong>3 个子线程</strong>，分别负责 <strong>AOF 日志的写操作、键值对的删除、文件关闭</strong> 的异步执行。</p><p><strong>主线程会通过一个链表形式的任务队列和子线程进行交互</strong>，当收到一个键值对的删除和清空数据库的操作时，<strong>主线程会把该操作封装成一个任务，放入队列中，然后就可以给客户端返回完成的信息了</strong>。</p><p>但实际这个删除操作还没执行，<strong>等到子线程从队列中读取到任务后，才开始实际的删除，释放空间</strong>。所以这种异步删除也称为 <strong>惰性删除 (lazy free)</strong>。</p><p>AOF 日志写操作类似，当写回策略为 Everysec 时，主线程就会将写日志操作封装成一个任务，也放入队列中即可，子线程读取到任务后，才开始执行 AOF 日志的写入。</p><p>如下图所示：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/https%2Fstatic001.geekbang.org%2Fresource%2Fimage%2Fae%2F69-2024_01_11-1704986996.jpeg" alt="img" loading="lazy"></p><p>注意：异步删除操作是 Redis 4.0 后提供的，并且不是默认开启的，需要使用命令 <strong>手动开启</strong>，然后使用下面的命令来执行：</p><ul><li><p><strong>键值对的删除：UNLINK 命令 (使用 DEL 命令还是同步删除)</strong>；</p><blockquote><p>Redis 6.0 提供了一个 <code>lazyfree-lazy-user-del</code>，使用后 UNLINK 和 DEL 就没区别了。</p></blockquote></li><li><p><strong>清空数据库：在 FLUSHDB 或 FLUSHALL 后面加上 ASYNC 选项</strong>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FLUSHDB ASYNC
FLUSHALL AYSNC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>对于手动开启异步删除，提供了 4 个选项，分别对应不同场景：</p><ul><li><code>lazyfree-lazy-expire</code>：<strong>key 在过期删除时尝试异步释放内存</strong>；</li><li><code>lazyfree-lazy-eviction</code>：<strong>内存达到 maxmemory 并设置了淘汰策略时，尝试异步释放内存</strong>；</li><li><code>lazyfree-lazy-server-del</code>：<strong>执行 RENAME/MOVE 等命令或需要覆盖一个 key，删除旧 key 时尝试异步释放内存</strong> ；</li><li><code>replica-lazy-flush</code>：<strong>主从全量同步，从库清空数据库时异步释放内存</strong>。</li></ul><p>可以发现，除了 <code>replica-lazy-flush</code> 外，其他都是 <strong>尝试异步释放内存，并不是一定</strong>。为什么呢？</p><p>在开启 lazy free 后，Redis 在释放一个 key 的内存时，会先 <strong>评估代价</strong>，<strong>如果释放的内存很小，那直接在主线程中操作了，没有必要放到子线程中执行</strong>，因为在 <strong>将操作封装成任务，再放入任务队列，子线程再取出才能执行，需要一定的性能消耗</strong>。</p><p>那到底什么删除操作代价比较大，会释放较多的内存呢？Redis 中根据 <strong>key 的类型、编码方式、元素数量</strong> 来判断：</p><ul><li><strong>当 Hash、Set 底层采用哈希表时，且元素超过 64 个</strong>；</li><li><strong>当 zSet 底层采用跳表时，且元素数量超过 64 个</strong>；</li><li><strong>当 List 链表节点超过 64 个，注意是链表节点数量，不是元素数量，一个节点包含若干元素</strong>（也就是 Redis 3.2 采用的 quicklist，每个节点上有一个压缩列表来存储元素，Redis 5.0 改为了 listpack）。</li></ul><p>只有上面情况在异步删除 key 时，才是真正的在子线程中异步删除，其他时候还是在主线程中进行。</p><p>可以发现，<strong>String 类型无论在什么时候都使用不到异步删除</strong>，所以 <strong>即使使用了 lazy free，如果删除的是一个 String 类型的 bigkey（值占了很大内存），也有阻塞主线程的风险</strong>。</p><p>从上面分析可以看出，这个评估代价，实际上关注的是 <strong>释放内存的工作量有多大，而不是 key 占用的内存有多大 (String 类型的 bigkey 占用内存很大，但也是同步删除)</strong>：如果需要释放的 <strong>内存是连续的</strong>，Redis 作者认为释放内存的 <strong>代价比较低</strong>，就放在主线程做。如果释放的内存不连续（大量指针类型的数据），这个代价就比较高，所以才会放在异步线程中去执行。</p><h2 id="_4-参考文章" tabindex="-1"><a class="header-anchor" href="#_4-参考文章" aria-hidden="true">#</a> 4. 参考文章</h2><ul><li>《Redis 核心技术与实战》</li></ul>`,55);function h(R,y){const r=g("router-link");return i(),l("div",null,[s("details",p,[c,s("nav",_,[s("ul",null,[s("li",null,[t(r,{to:"#_1-redis-有哪些阻塞点"},{default:o(()=>[n("1. Redis 有哪些阻塞点？")]),_:1}),s("ul",null,[s("li",null,[t(r,{to:"#_1-1-和客户端交互的阻塞点"},{default:o(()=>[n("1.1 和客户端交互的阻塞点")]),_:1})]),s("li",null,[t(r,{to:"#_1-2-和磁盘交互的阻塞点"},{default:o(()=>[n("1.2 和磁盘交互的阻塞点")]),_:1})]),s("li",null,[t(r,{to:"#_1-3-主从节点交互的阻塞点"},{default:o(()=>[n("1.3 主从节点交互的阻塞点")]),_:1})]),s("li",null,[t(r,{to:"#_1-4-切片集群交互的阻塞点"},{default:o(()=>[n("1.4 切片集群交互的阻塞点")]),_:1})])])]),s("li",null,[t(r,{to:"#_2-哪些阻塞操作可以异步执行"},{default:o(()=>[n("2. 哪些阻塞操作可以异步执行？")]),_:1})]),s("li",null,[t(r,{to:"#_3-redis-异步机制"},{default:o(()=>[n("3. Redis 异步机制")]),_:1})]),s("li",null,[t(r,{to:"#_4-参考文章"},{default:o(()=>[n("4. 参考文章")]),_:1})])])])]),u])}const k=e(d,[["render",h],["__file","异步机制：避免单线程阻塞.html.vue"]]);export{k as default};
