import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as s,e as l,b as e,w as t,a as p,d as n}from"./app-70e0ac83.js";const d={},u={class:"hint-container details"},g=l("summary",null,"本文内容",-1),c={class:"table-of-contents"},h=p('<div class="hint-container info"><p class="hint-container-title">前言</p><p>谈到分布式，那必定涉及到集群了，因为分布式无非就是加几台机器，那么这一群机器就组成了一个集群。集群中的各台机器，也叫作节点。</p><p>那集群中的节点都是怎么协同、怎么管理的呢？这就需要一个 <strong>Leader 来负责调度和管理其他节点，以达到集群中的数据一致性</strong>。</p><p>在分布式中，这个 Leader 被称为 <strong>主节点</strong>，而选举 Leader 的过程，就叫作 <strong>分布式选举</strong>。</p></div><h2 id="_1-为什么要有分布式选举" tabindex="-1"><a class="header-anchor" href="#_1-为什么要有分布式选举" aria-hidden="true">#</a> 1. 为什么要有分布式选举？</h2><p>在分布式中，主节点负责调度、管理和协调其他节点，在主节点的管理下，能保证集群正确有序的运行。</p><p>试想一下，如果主节点一旦故障，其他节点应该如何应对？就好比皇上驾崩，天下大乱一样。这就像 “国不可一日无君”，在分布式中称为 “<strong>集群不可一刻无主</strong>”。</p><p>所以就需要有一个机制，<strong>在主节点故障后，能在其他节点中选举出一个新的主节点，以保证集群能正常的运行</strong>，这个过程就是 <strong>分布式选举</strong>。</p><p>目前常见的分布式选举方法有：</p><ul><li><strong>基于序号选举的算法</strong>：Bully 算法；</li><li><strong>多数派算法</strong>：Raft 算法、ZAB 算法。</li></ul><h2 id="_2-bully-算法-长者为大" tabindex="-1"><a class="header-anchor" href="#_2-bully-算法-长者为大" aria-hidden="true">#</a> 2. Bully 算法：长者为大</h2><h3 id="_2-1-基本概念" tabindex="-1"><a class="header-anchor" href="#_2-1-基本概念" aria-hidden="true">#</a> 2.1 基本概念</h3><p><strong>Bully 算法是一种以 “长者” 为大的集群选主算法，即在所有活着的节点中，选择 ID 最大的作为主节点</strong>。</p><blockquote><p>Bully（&#39;bʊli），翻译为横行霸道、仗势欺人。</p></blockquote><p>在 Bully 算法中，需要使用 3 种消息：</p><ul><li><strong>Election 消息</strong>：用于发起选举；</li><li><strong>Alive 消息</strong>：对 Election 消息的应答；</li><li><strong>Victory 消息</strong>：向其他节点发送宣誓主权的消息。</li></ul><p>由于 Bully 算法的选举原则是 ID 最大，因此集群中的 <strong>每个节点都要知道其他节点的 ID</strong>。</p><p><strong>当主节点故障或与其他节点失去联系后，或者有更大 ID 的节点加入集群，才会重新选主</strong>。节点会定期向主节点发送 <strong>心跳消息</strong> 来检测它是否在线，若一段时间后没有收到主节点的回复，则认为该主节点已经故障，则会发起选举。</p><h3 id="_2-2-选举过程" tabindex="-1"><a class="header-anchor" href="#_2-2-选举过程" aria-hidden="true">#</a> 2.2 选举过程</h3><p>一次 Bully 算法选举的过程如下：</p><ol><li>每个节点判断自己 ID 是否为集群中的最大值： <ul><li>如果是则向其他节点发送 Victory 消息宣誓主权；</li><li>如果不是则向比自己大的节点发送 Election 消息；</li></ul></li><li>若节点收到比自己 ID 小的 Election 消息，则回复 Alive 消息，告诉它我比你大，你不可能成为主节点；</li><li>在给定时间范围内： <ul><li>节点没有收到 Alive 消息，则认为自己成为主节点，并向其他节点发送 Victory 消息宣誓主权；</li><li>若收到比自己 ID 大的 Alive 消息，则等待其他节点发送 Victory 消息。</li></ul></li></ol><p>举个例子，假设原来集群的主节点是 4，现在出现了故障，其他节点通过心跳检测发现主节点已经故障，触发了选举，则 Bully 算法的选举过程如下：</p><ul><li><p>由于其他节点的 ID 都不是集群中最大的，所以他们都会发送 Election 消息：</p><blockquote><p>节点 4 虽然是主节点，但它已经故障了，自然也发不出 Victory 消息。</p></blockquote><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306101420074.png" alt="image-20230610141114839" loading="lazy"></p></li><li><p>各节点收到 Election 消息后，向比自己 ID 小的发出 Alive 消息：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306101420970.png" alt="image-20230610141634686" loading="lazy"></p></li><li><p>一段时间后，节点 3 发生没有收到 Alive 消息，则向其他节点发送 Victory 宣誓主权，自己成为主节点：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306101420399.png" alt="image-20230610141940821" loading="lazy"></p></li></ul><h3 id="_2-3-bully-优缺点" tabindex="-1"><a class="header-anchor" href="#_2-3-bully-优缺点" aria-hidden="true">#</a> 2.3 Bully 优缺点</h3><p>优点：</p><ul><li>选举简单、速度快：由于确定了选主的唯一性（ID 最大者）</li></ul><p>缺点：</p><ul><li><p><strong>额外存储</strong>：每个节点需要保存其他节点的 ID 信息；</p></li><li><p><strong>主节点假死</strong>：若主节点负载过高，无法对其他节点及时做出响应，就是出现假死现象。这会导致重新选举后，原来的主节点又恢复了，则又要进行一轮选举；</p></li><li><p><strong>脑裂问题</strong>：脑裂问题是由于网络问题而造成一个集群中出现了两个或以上的主节点，进而导致整个集群的数据出现不一致。</p><blockquote><p>假设选举过程中，ID 最大的节点给 ID 第二大的节点发送的 Alive 消息由于网络问题丢失了，那么 ID 第二大的节点也会认为自己是主节点，这就导致了一个集群中有两个主节点。</p></blockquote></li></ul><div class="hint-container tip"><p class="hint-container-title">解决方案</p><p>主节点假死的解决：</p><ul><li>让集群中一半以上的节点都认为主节点故障了，才开始新的选举。</li></ul><p>脑裂问题的解决：</p><ul><li>向比自己 ID 大的节点发送 Election 消息后，如果没有收到对应的 Alive 回复，则发送一次 <strong>探活消息</strong>，以确保比自己 ID 大的节点是否真的已经故障了。</li></ul></div><h2 id="_3-raft-算法-民主投票" tabindex="-1"><a class="header-anchor" href="#_3-raft-算法-民主投票" aria-hidden="true">#</a> 3. Raft 算法：民主投票</h2><h3 id="_3-1-基本概念" tabindex="-1"><a class="header-anchor" href="#_3-1-基本概念" aria-hidden="true">#</a> 3.1 基本概念</h3><p><strong>Raft 算法</strong> 的核心思想是 <strong>通过投票选举，最后以少数服从多数来确定主节点</strong>。就跟我们平时进行民主投票选举什么书记一样。</p><p>在 Raft 算法中，集群节点有 3 种角色：</p><ul><li><strong>Leader</strong>：主节点，负责协调和管理其他节点；</li><li><strong>Candidate</strong>：候选者，每个节点都可成为 Candidate，Candidate 有机会被选为新的 Leader；</li><li><strong>Follower</strong>：Leader 的跟随者，不可发起选举。</li></ul><p>在 Raft 算法中，选举后的 Leader 节点是有任期的，到了后就需要重新选举。当然了，如果 Leader 节点故障，则会马上发起选举。</p><h3 id="_3-2-选举过程" tabindex="-1"><a class="header-anchor" href="#_3-2-选举过程" aria-hidden="true">#</a> 3.2 选举过程</h3><p>Raft 选举分为下面几步：</p><ol><li>初始化时，所有节点均为 Follower 状态；</li><li>开始选主时，所有节点变为 Candidate 状态，并向其他节点发起选举请求；</li><li>其他节点按照收到请求的先后顺序，回复是否同意其成为主。注意：<strong>每一轮的选举中，一个节点只能投一次票</strong>。</li><li>若发起选举请求的节点获得超过一半的投票，则可成为主节点。 <ul><li>此时该节点的状态变为 Leader，其他节点则由 Candidate 降为 Follower；</li><li>Leader 节点与 Follower 节点会定期发送心跳包来检测存活状态。</li></ul></li><li>Leader 节点任期（term）到后，状态降为 Follower，开始进入新一轮的选主。</li></ol><p>可以发现，Raft 算法在正常工作期间只有 Leader 和 Followers，Candidate 只有在选举时才出现。</p><p><strong>Raft 算法将时间分为一段一段的任期（term），每段 term 的开始都是选举</strong>，然后以选举是否成功来觉得该 term 是否继续：</p><ul><li>若选举失败，则该 term 直接结束，开启一下段 term；</li><li>若选举成功，则集群正常运行，直到下一个任期的到来。</li></ul><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306101643425.png" alt="img" loading="lazy"></p><p>在选举过程中，各个状态的转变如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306101714677.png" alt="image-20230610171414435" loading="lazy"></p><h3 id="_3-3-raft-优缺点" tabindex="-1"><a class="header-anchor" href="#_3-3-raft-优缺点" aria-hidden="true">#</a> 3.3 Raft 优缺点</h3><p>优点：</p><ul><li>选举速度快、实现复杂度低；</li><li>稳定性比 Bully 好，因为只有在票数过半时才会切主，不会因为主节点假死而导致频繁切主。</li></ul><p>缺点：</p><ul><li>节点间通信量大：每个节点都要互相通信，且需要票数过半才能选主成功。</li></ul><h2 id="_4-zab-算法-具备优先级的民主投票" tabindex="-1"><a class="header-anchor" href="#_4-zab-算法-具备优先级的民主投票" aria-hidden="true">#</a> 4. ZAB 算法：具备优先级的民主投票</h2><h3 id="_4-1-基本概念" tabindex="-1"><a class="header-anchor" href="#_4-1-基本概念" aria-hidden="true">#</a> 4.1 基本概念</h3><p>ZAB（Zookeeper Atomic Broadcast，Zookeeper 原子广播）选举算法是为 Zookeeper 实现分布式协调而设计的，用于保证 Zookeeper 在分布式环境下的一致性和可靠性。</p><p>相比于 Raft 的投票机制，<strong>ZAB 添加了节点 ID 和数据 ID 作为参考进行选主。节点 ID 和数据 ID 越大，说明数据越新，越优先成为主</strong>。</p><blockquote><ul><li>节点 ID 用来标识节点的顺序，单调递增，ID 越大表示加入集群的事件越晚；</li><li>数据 ID 用来标识数据的写操作顺序，每个写操作都会将数据 ID +1，ID 越大表示数据越新。</li></ul></blockquote><p>在 ZAB 算法选举时，集群节点有 3 种角色：</p><ul><li><strong>Leader</strong>：主节点；</li><li><strong>Follower</strong>：跟随者节点；</li><li><strong>Observer</strong>：观察者节点，无投票权。</li></ul><p>在选举过程中，节点拥有 4 种状态：</p><ul><li><strong>Looking 状态</strong>：选举状态，节点处于 Looking 时，它会认为集群中没有 Leader，因此自己进入选举状态；</li><li><strong>Leading 状态</strong>：领导者状态，表示已经选出主，当前节点为 Leader；</li><li><strong>Following 状态</strong>：跟随者状态，选出主后，其他非主节点状态就为 Following 状态；</li><li><strong>Observing 状态</strong>：观察者状态，表示节点持观望态度，没有投票和选举权。</li></ul><p>投票过程中，<strong>每个节点都有一个唯一的三元组</strong>：</p><ul><li><strong>server_id</strong>：节点的唯一 ID；</li><li><strong>server_zxID</strong>：节点存放的数据 ID，数据 ID 越大数据越新；</li><li><strong>epoch</strong>：当前选举轮数，一般用逻辑时钟表示。</li></ul><p>ZAB 选举算法的核心是 “<strong>少数服从多数，ID 大的节点优先</strong>”，选举时通过 <strong>(vote_id、vote_zxID)</strong> 来表明投票给哪个节点。</p><ul><li>vote_id：被投票节点的 ID；</li><li>vote_zxID：被投票节点的服务器 zxID。</li></ul><p><strong>ZAB 选主原则：server_zxID 最大者成为 Leader，若 server_zxID 相同，则 server_id 最大者成为 Leader</strong>。</p><h3 id="_4-2-选举过程" tabindex="-1"><a class="header-anchor" href="#_4-2-选举过程" aria-hidden="true">#</a> 4.2 选举过程</h3><p>以 3 个 Server（节点）的集群为例，下面来看看 ZAB 算法的选主过程：</p><ol><li><p>系统启动时，3 个服务器都是第一轮投票（epoch=1），且无操作数据（zxID=0），此时每台服务器都推选自己成为主。将投票信息 &lt;epoch, vote_id, vote_zxID&gt; 广播出去：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306102027880.png" alt="img" loading="lazy"></p></li><li><p>根据选主规则，由于 3 个服务器的 epoch、zxID 都相同，因此将 server_id 较大者推选为主。所以 Server 1 和 Server 2 将 vote_id 改为 3，然后重新广播：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306102027346.png" alt="img" loading="lazy"></p></li><li><p>所有服务器都推选了 Server 3，票数过半，因此它成为 Leader，处于 Leading 状态。此时向其他服务器发送心跳包并维护连接，然后 Server 1 和 2 处于 Following 状态：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306102027516.png" alt="img" loading="lazy"></p></li></ol><p>这样这一轮的选举就完成了。</p><h3 id="_4-3-zab-的优缺点" tabindex="-1"><a class="header-anchor" href="#_4-3-zab-的优缺点" aria-hidden="true">#</a> 4.3 ZAB 的优缺点</h3><p>优点：</p><ul><li>稳定性好，选主时得票数过半，且节点数据 ID（server_zxID）和节点 ID（server_id）较大者，才会切主；</li></ul><p>缺点：</p><ul><li>采用广播发送信息，若集群中信息量较大时，容易引发广播风暴；</li><li>选举时间较长：除了投票外，还要一一对比节点 ID 和数据 ID。</li></ul><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结" aria-hidden="true">#</a> 5. 总结</h2><p>在讲解了分布式选举的 3 种经典算法 Bully、Raft、ZAB 后，下面从消息传递内容、选举机制和选举过程，对它们进行一个简单的对比：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306102049706.jpg" alt="img" loading="lazy"></p><p>注：性能是根据算法的选举延迟、正确性、稳定性等特性来综合考量的。</p><div class="hint-container tip"><p class="hint-container-title">LastTip</p><p>对于 “少数服从多数” 的选举算法而言，一般集群中的节点数量会是奇数个，是为了避免选举过程中出现平票而重新进行多次选举。</p></div>',74);function _(f,b){const i=r("router-link");return a(),s("div",null,[l("details",u,[g,l("nav",c,[l("ul",null,[l("li",null,[e(i,{to:"#_1-为什么要有分布式选举"},{default:t(()=>[n("1. 为什么要有分布式选举？")]),_:1})]),l("li",null,[e(i,{to:"#_2-bully-算法-长者为大"},{default:t(()=>[n("2. Bully 算法：长者为大")]),_:1}),l("ul",null,[l("li",null,[e(i,{to:"#_2-1-基本概念"},{default:t(()=>[n("2.1 基本概念")]),_:1})]),l("li",null,[e(i,{to:"#_2-2-选举过程"},{default:t(()=>[n("2.2 选举过程")]),_:1})]),l("li",null,[e(i,{to:"#_2-3-bully-优缺点"},{default:t(()=>[n("2.3 Bully 优缺点")]),_:1})])])]),l("li",null,[e(i,{to:"#_3-raft-算法-民主投票"},{default:t(()=>[n("3. Raft 算法：民主投票")]),_:1}),l("ul",null,[l("li",null,[e(i,{to:"#_3-1-基本概念"},{default:t(()=>[n("3.1 基本概念")]),_:1})]),l("li",null,[e(i,{to:"#_3-2-选举过程"},{default:t(()=>[n("3.2 选举过程")]),_:1})]),l("li",null,[e(i,{to:"#_3-3-raft-优缺点"},{default:t(()=>[n("3.3 Raft 优缺点")]),_:1})])])]),l("li",null,[e(i,{to:"#_4-zab-算法-具备优先级的民主投票"},{default:t(()=>[n("4. ZAB 算法：具备优先级的民主投票")]),_:1}),l("ul",null,[l("li",null,[e(i,{to:"#_4-1-基本概念"},{default:t(()=>[n("4.1 基本概念")]),_:1})]),l("li",null,[e(i,{to:"#_4-2-选举过程"},{default:t(()=>[n("4.2 选举过程")]),_:1})]),l("li",null,[e(i,{to:"#_4-3-zab-的优缺点"},{default:t(()=>[n("4.3 ZAB 的优缺点")]),_:1})])])]),l("li",null,[e(i,{to:"#_5-总结"},{default:t(()=>[n("5. 总结")]),_:1})])])])]),h])}const D=o(d,[["render",_],["__file","分布式选举：国不可一日无君.html.vue"]]);export{D as default};
