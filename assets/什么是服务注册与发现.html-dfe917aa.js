import{_ as p,Z as g,$ as e,a3 as n,a1 as o,a4 as r,a2 as t,a0 as a,E as l}from"./framework-63f054a3.js";const c={},u={class:"hint-container details"},d=n("summary",null,"本文内容",-1),_={class:"table-of-contents"},h={class:"hint-container info"},m=n("p",{class:"hint-container-title"},"前言",-1),b=n("strong",null,"服务提供者如何发布服务，服务消费者如何引用服务",-1),f={href:"https://aruni.me/docs/studynotes/microservice/basis/%E5%88%9D%E6%8E%A2%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84.html#_1-%E6%9C%8D%E5%8A%A1%E6%8F%8F%E8%BF%B0",target:"_blank",rel:"noopener noreferrer"},A=n("strong",null,"服务的接口名是什么？传递的参数是什么？返回值是什么？和一些接口描述信息等",-1),C=n("p",null,[t("回顾一下，常见的服务发布和引用的方式有 "),n("strong",null,"RESTful API、XML 配置和 IDL 文件"),t("（Interface Definition Language）三种。")],-1),k=n("p",null,[t("我们定义好服务后，如何让调用者知道该服务的地址呢？也就是怎么知道该服务部署到哪台服务器上的？这就需要引入一个第三方了，即 "),n("strong",null,"服务注册与发现中心"),t("。")],-1),E=a('<h2 id="_1-什么是服务注册与发现" tabindex="-1"><a class="header-anchor" href="#_1-什么是服务注册与发现" aria-hidden="true">#</a> 1. 什么是服务注册与发现</h2><p>为什么需要服务注册与发现呢？在微服务架构中，我们的服务在定义好后，都是 <strong>部署到不同的服务器上的，各服务监听着不同的端口</strong>。那客户端在请求服务时，怎么知道该服务对应的服务器是哪个呢？</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221108942.png" alt="img" loading="lazy"></p><p>就好比你去吃 KFC，你怎么知道你所在的区域哪儿有 KFC？此时一般都会用 App 搜一下附近的 KFC 店。那 App 上为什么会有这家 KFC 店呢？那肯定是这家店提前在 App 上注册了嘛，在注册的时候，KFC 就会把自己的店铺地址告诉 App，这样你就能通过 App 找到这家 KFC 了。</p><p>这就是服务注册与发现模型了，在上面的例子中，你扮演着客户端，KFC 扮演着服务端，而 App 则扮演着注册中心。</p><p>在分布式系统中，<strong>服务注册与发现</strong> 就是指：<strong>服务端将服务部署的地址记录到注册中心，客户端需要调用服务时，先去注册中心查询到该服务名对应的地址，然后向服务端发起请求即可</strong>。</p><p>服务注册与发现的基本模型如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221116531.png" alt="img" loading="lazy"></p><p>在微服务架构下，主要有三种角色：<strong>服务端（服务提供者）、客户端（服务消费者）、服务注册中心</strong>。基于上面的模型，它们之间的交互关系如下：</p><ul><li><p><strong>服务端启动时，向服务中心注册自身信息，主要是定位信息</strong>；</p><blockquote><p>注册成功后，注册中心和服务端要 <strong>保持心跳</strong>。</p></blockquote></li><li><p><strong>客户端第一次发起服务调用时，先去注册中心获取所有可用服务节点列表，接着客户端会在本地缓存每个服务对应的可用节点列表</strong>；</p><blockquote><p>客户端和注册中心也要 <strong>保持心跳</strong>，以及 <strong>数据同步</strong>，服务端有变动时，注册中心会通知客户端，接着客户端会更新本地缓存。</p></blockquote></li><li><p><strong>后续客户端就可以直接向服务端发起请求了，服务端响应即可</strong>。</p></li></ul><p>当服务端不再提供服务时，即 <strong>服务端下线时</strong>，过程如下：</p><ul><li><p><strong>服务端通知注册中心自己准备下线了</strong>；</p></li><li><p><strong>注册中心通知客户端该服务端下线了</strong>；</p></li><li><p><strong>客户端收到通知后，后续的请求便不会发送给该服务端了</strong>；</p></li><li><p><strong>服务端需要等待一段时间后，便可暂停服务并下线</strong>。</p><blockquote><p>因为 <strong>从服务端通知注册中心，再到注册中心通知客户端，是有一段时延的</strong>，这段时延就是服务端需要等待的最短时间。</p></blockquote></li></ul><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221239656.png" alt="img" loading="lazy"></p><p>一些常见的服务注册与发现的组件有 Zookeeper、Eureka、Consul、Nacos 等，后续文章会讲解。</p><h2 id="_2-高可用的服务注册与发现" tabindex="-1"><a class="header-anchor" href="#_2-高可用的服务注册与发现" aria-hidden="true">#</a> 2. 高可用的服务注册与发现</h2><p>服务注册与发现的整体模型还是比较简单的，但是要保证其 <strong>高可用性</strong>，还是有难度的。</p><p>高可用的服务注册与发现主要是围绕 <strong>服务端崩溃检测、客户端容错、注册中心选型</strong> 三个方面进行的。</p><h3 id="_2-1-服务端崩溃检测" tabindex="-1"><a class="header-anchor" href="#_2-1-服务端崩溃检测" aria-hidden="true">#</a> 2.1 服务端崩溃检测</h3><p>在正常情况下，服务端下线会通知注册中心，但如果 <strong>服务端直接崩溃</strong>，就没法通知注册中心了，注册中心自然也不会通知客户端了，此时 <strong>客户端发给该服务端的所有请求就都会失败</strong>。</p><p>为了提高可用性，就需要让 <strong>注册中心尽快发现服务端已崩溃</strong>，然后才能通知客户端。那么注册中心怎么判断服务端已经崩溃了呢？</p><p>从上面的服务注册与发现基本模型可知，注册中心和服务端是维持了一个 <strong>心跳</strong> 的，所以我们可以由此得出：<strong>注册中心和服务端之间的心跳断了，就可以认为服务端已经崩溃了</strong>。</p><p>但是，注册中心和服务端一般是跨网络的，如果 <strong>网络出现抖动，心跳也会失败，而此时服务端并没有崩溃</strong>：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221640778.png" alt="img" loading="lazy"></p><p>所以，<strong>只通过心跳断开来判断服务端崩溃是不合理的</strong>。此时你可能会想 <strong>多发几次心跳</strong> 不就行了？确实可以，<strong>但次数越多，注册中心判断服务端已崩溃的时间也越长，那么就会导致更多的请求发送给了服务端，而如果此时服务端是真的崩溃了，就会导致这些请求全都会失败</strong>。</p><p>那有没有什么能尽可能的保证高可用的方案呢？</p><p>首先，注册中心和服务端心跳失败时，注册中心可以 <strong>马上通知客户端该服务端已经不可用了</strong>，客户端暂时不会发请求过来。</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221648592.png" alt="img" loading="lazy"></p><p>其次，<strong>注册中心还要继续向服务端发送心跳</strong>：</p><ul><li><p>如果只是因为网络 <strong>偶发性的心跳失败</strong>，则肯定能 <strong>心跳成功</strong>，此时注册中心再 <strong>通知客户端该服务是可用的</strong>；</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221651989.png" alt="img" loading="lazy"></p></li><li><p>如果服务端真 <strong>崩溃</strong>，则心跳一段时间还是失败，注册中心也 <strong>无需做任何通知</strong>，因为一开始就通知过了。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">小结</p><p>小结一下，影响服务注册与发现高可用的关键就是需要让注册中心尽快发现服务端已经崩溃了：</p><ul><li>当注册中心与服务端的心跳失败后，就认为该服务端可能已经崩溃了，马上通知客户端停止使用该服务；</li><li>为了避免因网络问题导致的偶发性心跳失败，注册中心需要继续与服务端保持心跳： <ul><li>如果几次都失败，则认为该服务彻底崩溃；</li><li>如果心跳恢复，注册中心再次通知客户端该服务是可用的即可。</li></ul></li></ul></div><p>其实通过心跳机制来判断节点是否崩溃本身也是个棘手的问题。比如 <strong>心跳失败了是否应该重试？是立刻重试还是间隔重试？重试几次</strong>？</p><p>在服务注册与发现中，为了解决偶发性心跳失败的问题，是必须要重试的，但如果重试，就涉及到上面的说道的棘手问题了：</p><ul><li>如果 <strong>间隔重试</strong>，比如规定重试三次，每次间隔 10 秒，那么注册中心要确定服务端崩溃就需要 30 秒。这 30 秒内可能已经 <strong>有成千上万的请求发到崩溃的服务端了</strong>；</li><li>如果 <strong>立刻重试</strong>，而且不设置重试间隔，那么就 <strong>很难避免因网络抖动而引起的偶发性心跳失败</strong>。因为在第一次心跳失败后，<strong>网络恢复没这么快</strong>，所以立刻重试大概率也是失败的。</li></ul><p>比较好的策略是 <strong>立刻重试和间隔重试相结合</strong>：</p><ul><li>第一次心跳失败时，立刻重试几次；</li><li>如果立刻重试几次失败，则进行几次间隔重试；</li></ul><p>所以我们需要设计合理的重试的次数和时间间隔，以确保我们的业务在可接收的范围内重试成功。</p><p>不过 <strong>从服务端崩溃到客户端知晓，中间始终都存在一个时延</strong>，这时候就需要 <strong>客户端自己来做容错了</strong>。</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221738968.png" alt="img" loading="lazy"></p><h3 id="_2-2-客户端容错" tabindex="-1"><a class="header-anchor" href="#_2-2-客户端容错" aria-hidden="true">#</a> 2.2 客户端容错</h3><p>客户端容错指的是 <strong>在注册中心或服务端节点出现问题时，客户端尽量能将请求发送到正常的服务端节点上</strong>。</p><p>如何实现呢？其实很简单，在最开始讲服务注册与发现基本模型的时候说过，客户端在第一次请求时，会先向注册中心获取该服务对应的所有 <strong>可用服务节点列表</strong>，保存到本地缓存中。所以 <strong>客户端发现请求失败后，换另一个可用节点进行重试即可</strong>。</p><blockquote><p>换节点「Failover」是常见的容错机制之一，意为失效转移。</p></blockquote><p>所以，客户端可以在服务端崩溃，到注册中心发现，再到客户端收到通知的这个 <strong>时延内</strong>，可以 <strong>继续正常的进行请求，如果发现请求失败，那么就应该切换节点进行重试</strong>，在短时间内不再使用该节点，将该节点从列表中移除，<strong>后面再根据实际情况判断是否将该节点移回列表中</strong>：</p><ul><li>如果注册中心最终发现该节点崩溃了，会通知客户端，那么客户端此时就不用移回了；</li><li>如果该节点后面恢复正常，那么注册中心会同步数据给客户端，此时客户端更新自己的可用节点列表即可。</li></ul><p>但如果注册中心和服务端都是正常状态，<strong>只是客户端和服务端之间的网络出现问题</strong>，此时就需要 <strong>客户端主动检测了，即对服务端进行心跳测试</strong>。</p><h3 id="_2-3-注册中心选型" tabindex="-1"><a class="header-anchor" href="#_2-3-注册中心选型" aria-hidden="true">#</a> 2.3 注册中心选型</h3><p>在注册中心选型上，主要是考虑分布式系统的 CAP 中，<strong>选 AP 还是 CP 的问题</strong>。</p><blockquote><p>简单说一下 CAP：</p><ul><li>C：Consistency，数据一致性；</li><li>A：Availability，服务可用性；</li><li>P：Partition-tolerance，分区容错性。</li></ul><p>在 CAP 理论中，一个分布式系统不可能同时满足 CAP，<strong>只能同时满足其中两个</strong>。</p></blockquote><p>我们在对 <strong>注册中心选型</strong> 时，其实是 <strong>更倾向于选 AP 的</strong>，在大规模集群上，注册中心崩溃对系统的影响太大了，可能崩溃几秒就会导致成千上万的请求异常。</p><p>而且在注册中心中，放弃 C，也就是客户端可能会拿到一些错误的节点，但这可以通过客户端容错来解决。</p><p>如果是小规模集群，且系统对一致性要求比较高，例如金融场景，可以使用 CP。</p><p>下面给出几个常见的服务注册与发现组件的 CAP 选择：</p><ul><li>Zookeeper 和 Consul 都是 CP；</li><li>Eureka 是 AP；</li><li>Nacos 支持 AP、CP，可按需切换。</li></ul><h3 id="补充-注册中心崩溃了怎么办" tabindex="-1"><a class="header-anchor" href="#补充-注册中心崩溃了怎么办" aria-hidden="true">#</a> 补充：注册中心崩溃了怎么办？</h3><p>我们前面谈的都是服务端崩溃后，注册中心、客户端的高可用方案，那么如果是 <strong>注册中心崩溃</strong> 了，应该怎么保持系统的高可用呢？</p><p>其实也可以借鉴前面的思路，如果注册中心崩溃，可以分两种情况来说：</p><ul><li><p><strong>客户端调用已知服务</strong>：此时虽然注册中心崩溃，但 <strong>客户端的本地缓存中还有已知服务的节点地址列表</strong>，因此可以继续使用这个列表进行请求。如果发现有节点出现异常，则通过客户端的容错来切换到可用节点上即可；</p></li><li><p><strong>客户端调用未知服务</strong>：此时属于第一次调用该服务，而注册中心又崩溃了，因此是拿不到节点列表的，所以只能不断重试，直到 <strong>注册中心恢复或切换注册中心节点</strong> 来获取节点列表后，才可继续请求。</p><blockquote><p>所以说注册中心一般要保证 AP，如果注册中心不是高可用部署，此时就只能返回服务不可用了。</p></blockquote></li></ul><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结" aria-hidden="true">#</a> 3. 总结</h2><p>从服务注册与发现的引出，到其基本模型的解读可以发现，其实注册中心就是充当一个服务与节点列表的存放地。</p><p>其中最关键的是理解服务注册与发现的基本模型：</p><ul><li><p><strong>服务上线</strong>：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221116531.png" alt="img" loading="lazy"></p></li><li><p><strong>服务下线</strong>：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306221239656.png" alt="img" loading="lazy"></p></li></ul><p>紧接着，谈到了如何保证一个服务注册与发现的 <strong>高可用</strong>，主要是围绕 <strong>心跳、客户端容错、切换节点、注册中心选型</strong> 这几个关键词进行分析的。</p>',62);function y(P,x){const s=l("router-link"),i=l("ExternalLinkIcon");return g(),e("div",null,[n("details",u,[d,n("nav",_,[n("ul",null,[n("li",null,[o(s,{to:"#_1-什么是服务注册与发现"},{default:r(()=>[t("1. 什么是服务注册与发现")]),_:1})]),n("li",null,[o(s,{to:"#_2-高可用的服务注册与发现"},{default:r(()=>[t("2. 高可用的服务注册与发现")]),_:1}),n("ul",null,[n("li",null,[o(s,{to:"#_2-1-服务端崩溃检测"},{default:r(()=>[t("2.1 服务端崩溃检测")]),_:1})]),n("li",null,[o(s,{to:"#_2-2-客户端容错"},{default:r(()=>[t("2.2 客户端容错")]),_:1})]),n("li",null,[o(s,{to:"#_2-3-注册中心选型"},{default:r(()=>[t("2.3 注册中心选型")]),_:1})]),n("li",null,[o(s,{to:"#补充-注册中心崩溃了怎么办"},{default:r(()=>[t("补充：注册中心崩溃了怎么办？")]),_:1})])])]),n("li",null,[o(s,{to:"#_3-总结"},{default:r(()=>[t("3. 总结")]),_:1})])])])]),n("div",h,[m,n("p",null,[t("想要构建微服务、注册服务，首先要解决的是 "),b,t("。即 "),n("a",f,[t("上一章"),o(i)]),t(" 中所讲的 "),A,t("。")]),C,k]),E])}const F=p(c,[["render",y],["__file","什么是服务注册与发现.html.vue"]]);export{F as default};
