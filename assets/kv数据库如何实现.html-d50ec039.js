import{_ as r,W as i,X as l,Z as e,$ as t,a0 as a,Y as o,G as d,a1 as n}from"./framework-66e96579.js";const p={},h={class:"hint-container details"},u=e("summary",null,"本文内容",-1),g={class:"table-of-contents"},c=o('<div class="hint-container info"><p class="hint-container-title">前言</p><p>我们都知道，Redis 是一个典型的 kv 数据库，即数据都是以 key-value 的形式来存储的。那么一个简单的 kv 数据库是如何实现的，它又包含什么内容呢？</p><p>Redis 是比较复杂的，它发展至今已经属于一个比较完善的 NoSQL 了，其中包含的模块也比较多，如果我们一开始学习 Redis 就往某个模块里钻，很容易找不到方向。</p><p>所以，我们先来简单的了解一下 kv 数据库是如何实现的，它应该包含哪些功能模块，然后再引申到 Redis。先做到纵览全局，再去细扣某个功能模块的实现，会得心应手很多。</p></div><h2 id="_1-存哪些数据" tabindex="-1"><a class="header-anchor" href="#_1-存哪些数据" aria-hidden="true">#</a> <strong>1. 存哪些数据</strong></h2><p>不管对于什么数据库而言，最首要的目标就是能存数据，那么能存什么样的数据呢？</p><p>对于 kv 数据库而言，最基本的就是存储 key-value 形式的数据。我们一般把 key 定义成 String 类型，因为 String 比较万能，它可以表示很多类型的数据。那 value 也要定义成 String 类型的吗？</p><p>显然不是，这样能保存的 value 就太单一了，所以 value 一般是基本数据类型，可以是 String、也可以是整型，还可以是更复杂的哈希表、集合、链表等等。value 的类型越多元化，那么这个 kv 数据库的应用场景就越多。</p><p>Redis 中的 value 就支持多种数据类型，因此 Redis 的应用场景非常多元，而 Memcached 的 value 只支持 String。</p><h2 id="_2-对数据做什么操作" tabindex="-1"><a class="header-anchor" href="#_2-对数据做什么操作" aria-hidden="true">#</a> <strong>2. 对数据做什么操作</strong></h2><p>我们实现一个数据库，肯定是用来保存数据的，那么一个最简单的数据库对数据的操作莫非就是简单的 CRUD。</p><p>所以应该对该数据库提供 CRUD 的接口，让外界能调用，对数据库进行操作：</p><ul><li>PUT 接口：写入一个 kv 对；</li><li>GET 接口：根据 key 获取对应的 value；</li><li>DELETE 接口：根据 key 删除整个 kv 对。</li></ul><p>这样，就可以对一个简单的 kv 数据库进行存取数据了。</p><p>但是，有时候我们需要获取某个 key 中所有的数据/某个范围的数据，所以要需要支持范围查询的操作；如果使用用户 id 作为 key 时，我们还希望能快速判断这个用户是否存在，所以还需要增加一个判断 key 是否存在的接口。</p><p>人们的需求是无穷无尽的，因此 Redis 提供了很多额外的操作供我们使用，其中就包括上面提到的。</p><h2 id="_3-数据存到哪里" tabindex="-1"><a class="header-anchor" href="#_3-数据存到哪里" aria-hidden="true">#</a> <strong>3. 数据存到哪里</strong></h2><p>我们可以对数据做存取操作了，那这些数据应该保存到哪里呢？常用的存储介质有两种，一种是硬盘、另一种就是内存。</p><p>这两种介质各有优缺点：</p><ul><li>硬盘容量大，而且不会丢失，但是对磁盘的操作速度非常慢；</li><li>内存的操作速度很快，但是断电即失。</li></ul><p>数据库种保存的数据肯定是不能丢失的，这么一看，应该选择硬盘？</p><p>但是 Redis 是一个追求速度的男人，它选择的是内存。所以 Redis 就要考虑 <strong>数据的持久性</strong> 问题，如何保证数据不丢失。</p><h2 id="_4-如何定位数据" tabindex="-1"><a class="header-anchor" href="#_4-如何定位数据" aria-hidden="true">#</a> <strong>4. 如何定位数据</strong></h2><p>对数据进行操作时，首先要做的就是定位到某个 key 对应的 value 在哪里，也就是如何通过 key 定位到它对应的 value，这种定位操作其实就是索引。</p><p>索引的类型有很多，常见的有哈希表、B+ 树、跳表等，不同的索引结构对性能、空间占用、并发控制都是不同的。</p><p>Redis 是一个基于内存的数据库，所有的数据都是存储在内存中，操作数据的速度是很快的。如果我们使用 B+ 树或跳表，那么定位的时间复杂度近似为 O(logn)，这速度显然是于内存速度匹配不上的，所以 Redis 采用的是时间复杂度为 O(1) 的哈希表索引来定位 value 的。</p><p>不过，通过哈希表索引定位到 value 后，value 的类型有很多，比如哈希表、链表、集合。所以在定位到 value 后，还需要从 value 的复杂结构中进一步定位实际的数据，这个操作效率就依赖它们本身的结构实现了。</p><blockquote><p>例如，当 value 是哈希表时，通过 key 定位到 value 后，再根据 value 中的 key 查找到对应的数据即可，value 定位到实际数据的时间复杂度就是 O(1)。</p><p>而当 value 是 set 时，定位到 value 后，还需要遍历 set，才能找到对应的数据，value 定位到实际数据的时间复杂度就是 O(n)。所以 set 不支持随机访问。</p></blockquote><h2 id="_5-如何组织整体结构" tabindex="-1"><a class="header-anchor" href="#_5-如何组织整体结构" aria-hidden="true">#</a> <strong>5. 如何组织整体结构</strong></h2><p>我们知道，一个哈希表其实就是一个数组，这个数组中的每个位置就称为一个桶，桶中保存了具体的键值对。那么复杂类型的 value 是怎么保存到桶中的呢？这就涉及到 Redis 的结构组织了。</p><p>其实，Redis 中哈希桶中的元素保存的并不是值本身，而是 <strong>指向具体值的指针</strong>。桶中的 **每个 entry 保存的是 <em>key 和 <em>value 指针</em></em>，分别指向了键和值，这样就算是再复杂的 value，也能用 *value 指针找到它</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202302211402931.jpeg" alt="img"></p><p>因为这个哈希表保存了所有的键值对，所以，我也把它称为 <strong>全局哈希表</strong>。</p><h2 id="_6-哈希冲突怎么解决" tabindex="-1"><a class="header-anchor" href="#_6-哈希冲突怎么解决" aria-hidden="true">#</a> <strong>6. 哈希冲突怎么解决</strong></h2><p>哈希表一个最典型的缺点就是会发生 <strong>哈希碰撞</strong>，常用的解决方法是 <strong>拉链法</strong>，但是如果链表长度太长，那查找的时间复杂度将会大大增加，这对于 Redis 追求快的理念是不相符的。</p><p>所以，Redis 会对哈希表做 <strong>rehash 操作</strong>，让数组的长度更长，使元素在新数组中分布的更加分散，从而减少哈希冲突。</p><p>那么在做 rehash 的时候，直接将原来所有的元素一次性进行 rehash 吗？这会导致 Redis 在进行 rehash 的时候性能突然骤降，是不能接受的。</p><p>因此，Redis 使用了 <strong>两个全局哈希表</strong>：哈希表 1 和哈希表 2。一开始的时候，数据都是加入到哈希表 1 中的，哈希表 2 为空。当哈希表 1 容量到达一定限度后，就会触发 rehash。为了避免所有的数据一次性 rehash 到新表里，Redis 采用了 <strong>渐进式 rehash</strong>。</p><p>rehash 过程如下：</p><ol><li>给哈希表 2 分配更大的空间，例如是哈希表 1 大小的 2 倍；</li><li>把哈希表 1 中的数据重新做哈希映射，拷贝到哈希表 2 中，使用的是 <strong>渐进式 rehash</strong>；</li><li>将哈希表 1 和哈希表 2 交换，释放掉哈希表 2 的空间，后面继续使用哈希表 1 存数据。</li></ol><p>注意上面的步骤 2，并不是一次性就把所有数据拷贝到新的哈希表中。<strong>在此期间，Redis 可以正常处理客户端请求，每次处理一个请求时，会从哈希表 1 的第一个位置开始，顺便把这个位置上的所有 entry 拷贝到哈希表 2 中；处理下一个请求时，再顺便拷贝下一个位置的所有 entry</strong>。</p><p>下面给出前两次 rehash 的情况：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202302211507841.jpeg" alt="img"></p><p>这就是一种 <strong>分摊思想</strong>，将 rehash 操作分摊到多个请求中执行，从而分摊了 rehash 时的时间消耗。</p><p>所以，<strong>在进行 rehash 的过程中，两个全局哈希表都是需要使用到的</strong>，新写入的数据就保存到哈希表 2 中（保证了哈希表 1 中的数据只增不减，从而逐步清空），查找数据需要先在哈希表 1 中查找，然后再去哈希表 2 中查找。</p><p>为了方便知道 <strong>rehash 操作的进度</strong>，Redis 会用一个 <strong>全局变量 idx 来表示 rehash 的位置</strong>。</p><h2 id="_7-redis-整体实现" tabindex="-1"><a class="header-anchor" href="#_7-redis-整体实现" aria-hidden="true">#</a> <strong>7. Redis 整体实现</strong></h2><p>通过上面的分析，Redis 的大致实现已经被勾画出来了。</p><p>Redis 采用哈希表做 key 到 value 的映射，value 有多种类型，所以哈希表中的 entry 使用指针来找到对应的元素。那么一个 Redis 的存储结构如下图所示：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202302211402931.jpeg" alt="img"></p><p>由于 Redis 中的数据是存储在内存中的，所以还应该有对应的 <strong>持久化机制</strong>，来保证数据不会随意丢失。</p><p>由于 Redis 的查询效率很高，所以通常用来做缓存，缓存一般是需要有过期时间的，所以 Redis 提供了 <strong>过期机制</strong>。</p><p>这里还可以想到，内存资源是很宝贵的，如果存储的数据多了，导致内存过载，这肯定也是不行的。所以 Redis 还提供了 <strong>内存淘汰策略</strong>，用于防止内存爆表。我们一般为了提高系统的安全稳定性，肯定会在多几台服务器上部署 Redis 实例，这样可以保证一台实例挂掉之后，其他实例还能继续提供服务。所以在高可用方面，Redis 提供了 **主从复制、哨兵模式 **等。</p><p>如果我们的数据量过大，那么还可能需要横向扩展，即把数据分别保存到不同的 Redis 实例上，这就需要 <strong>集群和分片</strong> 功能了。</p><p>现在，你就大概的了解了整个 Redis 的设计架构是怎样的，每个模块的提出主要是为了解决什么问题。然后再开始细入研究每个模块是如何实现的。</p><h2 id="_8-参考文章" tabindex="-1"><a class="header-anchor" href="#_8-参考文章" aria-hidden="true">#</a> <strong>8. 参考文章</strong></h2><ul><li>《Redis 核心技术与实战》</li></ul>',54);function _(v,R){const s=d("router-link");return i(),l("div",null,[e("details",h,[u,e("nav",g,[e("ul",null,[e("li",null,[t(s,{to:"#_1-存哪些数据"},{default:a(()=>[n("1. 存哪些数据")]),_:1})]),e("li",null,[t(s,{to:"#_2-对数据做什么操作"},{default:a(()=>[n("2. 对数据做什么操作")]),_:1})]),e("li",null,[t(s,{to:"#_3-数据存到哪里"},{default:a(()=>[n("3. 数据存到哪里")]),_:1})]),e("li",null,[t(s,{to:"#_4-如何定位数据"},{default:a(()=>[n("4. 如何定位数据")]),_:1})]),e("li",null,[t(s,{to:"#_5-如何组织整体结构"},{default:a(()=>[n("5. 如何组织整体结构")]),_:1})]),e("li",null,[t(s,{to:"#_6-哈希冲突怎么解决"},{default:a(()=>[n("6. 哈希冲突怎么解决")]),_:1})]),e("li",null,[t(s,{to:"#_7-redis-整体实现"},{default:a(()=>[n("7. Redis 整体实现")]),_:1})]),e("li",null,[t(s,{to:"#_8-参考文章"},{default:a(()=>[n("8. 参考文章")]),_:1})])])])]),c])}const f=r(p,[["render",_],["__file","kv数据库如何实现.html.vue"]]);export{f as default};
