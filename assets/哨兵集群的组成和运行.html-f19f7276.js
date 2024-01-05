import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as p,c as g,b as s,e as t,w as o,d as n,a as l}from"./app-8f1e35f9.js";const d={},c={class:"hint-container details"},u=s("summary",null,"本文内容",-1),_={class:"table-of-contents"},h={class:"hint-container info"},E=s("p",{class:"hint-container-title"},"前言",-1),B={href:"https://code.0x3f4.run/backend/database/redis/high_availability/%E5%93%A8%E5%85%B5%E6%9C%BA%E5%88%B6%EF%BC%9A%E4%B8%BB%E5%BA%93%E6%8C%82%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E.html",target:"_blank",rel:"noopener noreferrer"},b=s("strong",null,"哨兵集群",-1),m=s("strong",null,"主从库切换",-1),A=s("strong",null,"判定主库是否下线、选择新主库、通知从库和客户端",-1),k=s("p",null,[n("这篇文章就来看看，"),s("strong",null,"哨兵集群是如何组成、如何运行的"),n("。")],-1),f=l(`<h2 id="_1-pub-sub-—-哨兵集群的组成" tabindex="-1"><a class="header-anchor" href="#_1-pub-sub-—-哨兵集群的组成" aria-hidden="true">#</a> 1. pub/sub — 哨兵集群的组成</h2><p>在部署哨兵集群时，只需要使用下面这个配置，设置 <strong>主库的 IP 和端口</strong> 即可，并没有配置其他哨兵的连接信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sentinel monitor <span class="token operator">&lt;</span>master-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>redis-port<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>quorum<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以哨兵之间是不知道彼此的地址的，那是如何组成哨兵集群的呢？这就要提到 Redis 的 <strong>pub/sub 机制</strong> 了，这是一种发布/订阅机制，其使得 <strong>哨兵实例之间可以相互发现</strong>。</p><h3 id="_1-1-哨兵之间建立连接" tabindex="-1"><a class="header-anchor" href="#_1-1-哨兵之间建立连接" aria-hidden="true">#</a> 1.1 哨兵之间建立连接</h3><p>哨兵和主库建立连接后，就可以 <strong>在主库上发布消息了</strong>，比如发布自己的 <strong>连接信息</strong>（IP + 端口）。同时也能 <strong>从主库上订阅消息，获得其他哨兵发布的连接信息</strong>。</p><p>所以，<strong>只需要通过主库</strong>，多个哨兵实例就可以知道 <strong>彼此的连接信息</strong>。</p><p>当然了，客户端也可以进行发布和订阅，为了区分不同的消息，Redis <strong>以频道（类似于 topic）的形式，对消息进行分类管理</strong>。只有订阅了同一个频道，才能互相交换消息。</p><p><strong>不同的哨兵是通过一个名为 <code>__sentinel__:hello</code> 的频道来互相发现、互相通信的</strong>。例如，有三个哨兵实例，哨兵 1 把自己的连接信息发布到主库的该频道上，哨兵 2 和 3 订阅了该频道，就可以从中获取哨兵 1 的连接信息，从而和它建立网络连接。同理，哨兵 2 和 3 也可以通过该方法建立起网络连接，这样哨兵之间就都连接起来了，哨兵集群就形成了。<strong>它们之间可以通过网络连接进行通信</strong>，完成主从库切换过程。如下图所示：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/https%2Fstatic001.geekbang.org%2Fresource%2Fimage%2Fca%2Fb1-2024_01_05-1704449805.jpeg" alt="img" loading="lazy"></p><h3 id="_1-2-哨兵监控从库" tabindex="-1"><a class="header-anchor" href="#_1-2-哨兵监控从库" aria-hidden="true">#</a> 1.2 哨兵监控从库</h3><p>不过，除了哨兵彼此之间建立连接外，<strong>还需要和从库建立连接</strong>，因为哨兵需要 <strong>对主库和从库都进行监控</strong>，而且在主从库切换完成后，还要 <strong>通知其他从库与新主库进行数据同步</strong>。</p><p>那哨兵如何知道从库的 IP 和端口？这需要使用 INFO 命令。</p><p>具体来说，哨兵向主库发送 INFO 命令，主库就会返回从库列表给哨兵，然后哨兵就可以根据从库列表中的连接信息，和每个从库建立连接，监控从库的状态。如下图所示：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/https%2Fstatic001.geekbang.org%2Fresource%2Fimage%2F88%2Fe0-2024_01_05-1704450631.jpeg" alt="img" loading="lazy"></p><p><strong>通过 pub/sub 机制，哨兵之间可以建立连接来组成集群</strong>，同时，哨兵又 <strong>通过 INFO 命令</strong>，可以获取到从库的连接信息，从而 <strong>与从库建立连接监控它们</strong>。</p><h3 id="_1-3-哨兵通知客户端" tabindex="-1"><a class="header-anchor" href="#_1-3-哨兵通知客户端" aria-hidden="true">#</a> 1.3 哨兵通知客户端</h3><p>主从库切换后，<strong>哨兵还需要通知客户端新主库的连接信息</strong>，那哨兵如何通知客户端呢？这任然需要依赖 pub/sub 机制。</p><p>哨兵也是一个特别的 Redis 实例，只是它不服务请求操作，只是完成监控、选主和通知。所以 <strong>每个哨兵实例也提供 pub/sub 机制，客户端可以从哨兵订阅消息</strong>，哨兵提供了很多订阅频道，如下所示：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/https%2Fstatic001.geekbang.org%2Fresource%2Fimage%2F4e%2F25-2024_01_05-1704466585.jpeg" alt="img" loading="lazy"></p><p>具体来说，<strong>客户端需要读取哨兵的配置文件，获得哨兵的地址和端口，和哨兵建立网络连接后，就可以订阅不同的频道来获取不同的消息了</strong>。</p><blockquote><p>哨兵的配置一般配置在配置文件或配置中心中，所以直接读取对应的配置即可。</p></blockquote><p>例如，可以通过如下命令，订阅相关信息： ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SUBSCRIBE +odown	<span class="token comment"># 订阅主库实例进入客观下线状态的事件</span>

PSUBSCRIBE  *	<span class="token comment"># 订阅所有事件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端订阅了 <code>+switch-master</code> 频道后，当哨兵选出新主库，客户端就会看到下面的事件消息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>switch-master <span class="token operator">&lt;</span>master name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>oldip<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>oldport<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>newip<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>newport<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>该消息中就有新主库的连接信息</strong>，因此客户端就可以从该消息中获取新主库的地址和端口，从而进行请求了。</p>`,27),F={href:"https://code.0x3f4.run/backend/database/redis/high_availability/%E5%93%A8%E5%85%B5%E6%9C%BA%E5%88%B6%EF%BC%9A%E4%B8%BB%E5%BA%93%E6%8C%82%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E.html#_3-%E5%93%A8%E5%85%B5%E5%9C%A8%E4%B8%BB%E4%BB%8E%E5%88%87%E6%8D%A2%E8%BF%87%E7%A8%8B%E4%B8%AD-%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%98%E8%83%BD%E6%AD%A3%E5%B8%B8%E8%AF%B7%E6%B1%82%E5%90%97",target:"_blank",rel:"noopener noreferrer"},v=s("strong",null,"sentinel get-master-addr-by-name 命令，从哨兵集群中获取主从库的地址进行访问",-1),x=s("h2",{id:"_2-由哪个哨兵执行主从切换",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-由哪个哨兵执行主从切换","aria-hidden":"true"},"#"),n(" 2. 由哪个哨兵执行主从切换？")],-1),C={href:"https://code.0x3f4.run/backend/database/redis/high_availability/%E5%93%A8%E5%85%B5%E6%9C%BA%E5%88%B6%EF%BC%9A%E4%B8%BB%E5%BA%93%E6%8C%82%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E.html#_4-%E5%93%A8%E5%85%B5%E9%9B%86%E7%BE%A4%E5%88%A4%E6%96%AD%E4%B8%BB%E5%BA%93%E5%AE%A2%E8%A7%82%E4%B8%8B%E7%BA%BF%E5%90%8E-%E7%94%B1%E5%93%AA%E4%B8%AA%E5%93%A8%E5%85%B5%E6%9D%A5%E6%89%A7%E8%A1%8C%E4%B8%BB%E4%BB%8E%E5%88%87%E6%8D%A2",target:"_blank",rel:"noopener noreferrer"},y=s("strong",null,"哨兵领导者",-1),I=s("strong",null,"之后的整个过程都由它来完成主从切换",-1),L=l('<p>下面来看看详细的过程。</p><p>哨兵集群要判定主库 “客观下线”，需要有一定数量的实例都认为主库已经 “主观下线” 了。</p><p>一个哨兵自己认为主库 “主观下线” 后，会给其他哨兵发送 is-master-down-by-addr 命令，其他哨兵收到后会根据自己和主库的连接情况，做出 Y（赞成票）或 N（反对票）响应：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/https%2Fstatic001.geekbang.org%2Fresource%2Fimage%2Fe0%2F84-2024_01_05-1704467632.jpeg" alt="img" loading="lazy"></p><p><strong>当一个哨兵获取了一定的赞成票数后，就可以标记主库为 “客观下线” 了</strong>。这个一定的赞成票数由哨兵配置文件中的 <strong>quorum 配置项</strong> 设定。例如有 5 个哨兵，quorum 配置等于 3，那一个哨兵获取了 3 张赞成票就可以了，其中包括自己的赞成票。</p><blockquote><p>注意：<strong>此时还没选出哨兵 Leader，只是把主库标记为了 “客观下线”，还有一轮投票才能选出哨兵 Leader</strong>。</p></blockquote><p>接着，<strong>该哨兵会给其他哨兵发送命令，表明希望由自己来执行主从切换，并让其他哨兵进行投票，其他哨兵会给首先收到命令的哨兵投赞成票</strong>。这个投票过程就是 <strong>Leader 选举</strong>。</p><p>想要成为哨兵 Leader，需要满足 <strong>两个条件</strong>：</p><ul><li><strong>拿到哨兵集群数量的半数以上赞成票</strong>；</li><li><strong>拿到的赞成票要大于等于配置项 quorum 的值</strong>。</li></ul><p>例如，有 5 个哨兵实例，quorum 配置等于 3，那哨兵需要拿到 3 张赞成票，才能成为哨兵 Leader。</p><p>如果在这一轮投票中 <strong>没有达到两个条件</strong>，那 <strong>这一轮就不会产生哨兵 Leader</strong>，此时会 <strong>等待一段时间（哨兵故障转移超时时间的 2 倍），再重新选举</strong>。</p><p>为什么要等待一段时间？因为 <strong>在网络压力较大或短时堵塞时</strong>，就可能会导致哨兵没能获取半数以上的赞成票，所以需要等待一会，<strong>让网络恢复后再进行投票，成功率会更高</strong>。</p><p>注意：<strong>如果哨兵集群只有 2 个实例，那要选举出哨兵 Leader 就必须获取 2 票，而不是 1 票</strong>。所以如果有一个哨兵挂了，该集群就无法进行主从切换了。所以一般 <strong>至少要配置 3 个哨兵实例</strong>。</p><p>不过 <strong>哨兵实例也不是越多越好</strong>，毕竟哨兵在 <strong>判断主库 “客观下线” 和 “选举哨兵 Leader” 时</strong>，都需要和其他节点进行通信，<strong>哨兵实例越多，通信的次数也越多，会导致通信时间边长，主从库的切换耗时增加</strong>。</p><h2 id="_3-参考文章" tabindex="-1"><a class="header-anchor" href="#_3-参考文章" aria-hidden="true">#</a> 3. 参考文章</h2><ul><li>《Redis 核心技术与实战》</li></ul>',16);function q(j,w){const e=r("router-link"),a=r("ExternalLinkIcon");return p(),g("div",null,[s("details",c,[u,s("nav",_,[s("ul",null,[s("li",null,[t(e,{to:"#_1-pub-sub-—-哨兵集群的组成"},{default:o(()=>[n("1. pub/sub — 哨兵集群的组成")]),_:1}),s("ul",null,[s("li",null,[t(e,{to:"#_1-1-哨兵之间建立连接"},{default:o(()=>[n("1.1 哨兵之间建立连接")]),_:1})]),s("li",null,[t(e,{to:"#_1-2-哨兵监控从库"},{default:o(()=>[n("1.2 哨兵监控从库")]),_:1})]),s("li",null,[t(e,{to:"#_1-3-哨兵通知客户端"},{default:o(()=>[n("1.3 哨兵通知客户端")]),_:1})])])]),s("li",null,[t(e,{to:"#_2-由哪个哨兵执行主从切换"},{default:o(()=>[n("2. 由哪个哨兵执行主从切换？")]),_:1})]),s("li",null,[t(e,{to:"#_3-参考文章"},{default:o(()=>[n("3. 参考文章")]),_:1})])])])]),s("div",h,[E,s("p",null,[n("在 "),s("a",B,[n("哨兵机制：主库挂了怎么办"),t(a)]),n(" 中简单介绍了哨兵机制，它其实是由多个哨兵实例组成的 "),b,n("，所以即使有实例出现故障，其他哨兵还能继续完成 "),m,n(" 的工作，包括 "),A,n("。")]),k]),f,s("p",null,[n("在 "),s("a",F,[n("哨兵机制：主库挂了怎么办"),t(a)]),n(" 中也说过，还可以通过 "),v,n("。")]),x,s("p",null,[n("在 "),s("a",C,[n("哨兵机制：主库挂了怎么办"),t(a)]),n(" 中简单提到过，哨兵集群在判断出主库 “客观下线” 后，会选出一个 “"),y,n("”，"),I,n("。")]),L])}const R=i(d,[["render",q],["__file","哨兵集群的组成和运行.html.vue"]]);export{R as default};
