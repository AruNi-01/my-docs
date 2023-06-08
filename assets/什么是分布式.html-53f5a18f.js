import{_ as e,Z as g,$ as a,a3 as t,a1 as s,a4 as o,a0 as l,E as i,a2 as r}from"./framework-63f054a3.js";const p={},c={class:"hint-container details"},_=t("summary",null,"本文内容",-1),u={class:"table-of-contents"},d=l('<h2 id="_1-分布式起源" tabindex="-1"><a class="header-anchor" href="#_1-分布式起源" aria-hidden="true">#</a> 1. 分布式起源</h2><h3 id="_1-1-单机模式" tabindex="-1"><a class="header-anchor" href="#_1-1-单机模式" aria-hidden="true">#</a> 1.1 单机模式</h3><p><strong>单机模式</strong>，其实就是 <strong>所有的应用程序和数据都部署到一台机器上</strong>，有关这个程序的所有处理，都由这一台机器完成。</p><blockquote><p>这里的处理可以理解为对请求的处理，对数据存储的处理等。</p></blockquote><p>刚开始互联网还没这么发达的时候，大多数项目都是单机模式，比如下面这个售票系统：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306082056371.png" alt="image-20230608205605962"></p><p>可以看到，所有的功能模块、数据存储、请求处理，都是由一台服务器负责。</p><p>这样的系统有个 <strong>好处</strong>，就是所有的功能模块、数据都集中在一起，<strong>非常方便管理和调用执行</strong>。</p><p>但是如果用这个系统的人变多了起来，这单单一个服务器肯定是扛不住这么大的压力的。而且如果这台服务器出现故障，那么将导致整个系统不可用，体验是非常糟糕的。</p><p>所以单机模式的 <strong>问题</strong> 是：</p><ul><li><strong>性能不足</strong>：所有功能仅依靠一台服务器的处理能力；</li><li><strong>可用性差</strong>：这一台服务器挂，整个系统挂。</li></ul><h3 id="_1-2-数据并行-数据分布式" tabindex="-1"><a class="header-anchor" href="#_1-2-数据并行-数据分布式" aria-hidden="true">#</a> 1.2 数据并行（数据分布式）</h3><p>要解决单机模式的性能和可用性问题，出现了数据并行（数据分布式）模式。</p><p>在单机模式中，应用和数据都在一台服务器上。而 <strong>数据并行</strong>，是 <strong>先把应用与数据分离（便于将应用和数据分离到不同服务器上），然后将应用部署到多台服务器上，再对同类型的数据拆分到多个数据库中</strong>。</p><blockquote><p><strong>由于要把应用部署到多台服务器，所以肯定要先将应用与数据分离，否则会造成多台服务器数据库中的数据不一致</strong>。</p></blockquote><p>所以升级后的售票系统如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306082117045.png" alt="image-20230608211756060"></p><p>我们把数据按路线进行拆分，这样应用服务器在处理请求时，就可以根据路线的不同，去不同的应用服务器中进行并行处理了。</p><p><strong>注意</strong>：</p><ul><li><strong>数据拆分</strong> 指的是从应用服务器的角度来说，<strong>对不同的数据请求可以分发到不同的应用服务器中进行并行处理</strong>。而不是真得去拆分数据库（如果数据库本身的并发性能好），这里拆分数据库只是为了得到更好的性能提升。</li></ul><p>这种模式无疑可以 <strong>利用多台计算机并行处理多个请求</strong>，使得我们的系统在相同的时间内可以执行更多的请求了，<strong>性能得到了提升</strong>。而且可以 <strong>将系统部署到更多的服务器上</strong>，以获得 <strong>更高的可用性</strong>。</p><p>但是又引入了新的 <strong>问题</strong>：</p><ul><li>把相同的应用部署到多台服务器上，当请求量增大时，<strong>如何保证流量能均匀的转发到不同的服务器上</strong>。这就涉及到 <strong>负载均衡</strong> 的知识了，在后续会讲解；</li><li>当请求量较大时，如果 <strong>对数据库频繁的写操作，那么数据库的 IO 会成为性能瓶颈</strong>。这就需要对数据进行 <strong>读写分离</strong>，涉及到 <strong>读写数据库之间的数据同步问题</strong>；</li><li>当某些数据成为 <strong>热点数据</strong> 时，会造成 <strong>数据库压力激增</strong>，可能会使数据库崩溃。所以就要引入 <strong>缓存机制</strong>，来减轻数据库的压力，也能提升查询性能，但也会带来 <strong>缓存与数据库的数据一致性问题</strong>。</li></ul><p>而且虽然数据并行模式实现了多个请求并行处理，但是如果 <strong>单个请求很复杂</strong>，需要很长时间才能完成，这时效率还是不够的。</p><h3 id="_1-3-任务并行-任务分布式" tabindex="-1"><a class="header-anchor" href="#_1-3-任务并行-任务分布式" aria-hidden="true">#</a> 1.3 任务并行（任务分布式）</h3><p>由于数据并行对单个复杂请求的提升不够，随着人们对性能的极致追求，出现了任务并行（任务分布式）。</p><p><strong>任务并行</strong> 在数据并行的基础上更细一步，<strong>将一个复杂的任务拆分为多个子任务（将一个大模块拆分为几个小模块），使得多个子任务可以在不同的机器上执行</strong>。</p><p><strong>任务并行是对应用进行拆分</strong>，比如可以按照领域模型对上面的售票系统应用进行拆分，可以大致分为：用户管理、火车票管理和订单管理，如下所示：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306082217059.png" alt="image-20230608221706864"></p><p>可以看到，由于多个子任务可以在多台机器上并行执行，相比于执行单个复杂大任务，执行时间又缩短了很多。</p><p>任务并行模式为系统 <strong>提供了更好的性能、扩展性和可维护性</strong>，使得模块扩展更加便捷，对单个模块的维护也更加简单。</p><p>但是它也带来了如下难题：</p><ul><li>如何对模块进行拆分，这涉及 <strong>模块设计问题</strong>；</li><li>如果模块间存在调用关系，如何跨机器调用，这涉及 <strong>远程通信问题</strong>。</li></ul><p>不过，对于一个大型的业务系统，这样的设计是非常值得去部署的。</p><h2 id="_2-分布式技术概览" tabindex="-1"><a class="header-anchor" href="#_2-分布式技术概览" aria-hidden="true">#</a> 2. 分布式技术概览</h2><p>上面讲了分布式的起源，从中引发出了许多问题，还有一些未提及的。其实分布式技术就是用来解决这些问题的，那么在学习之前，先来看看分布式技术都有哪些。</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202306082245336.jpg" alt="img"></p><p>按照业务的架构层次栈，可以自底向上，按照资源、通信、数据、计算的维度，梳理出 4 个技术层次：<strong>分布式资源池化、分布式通信、分布式数据存储与管理、分布式计算</strong>。</p><p>这样划分后，按照业务架构设计的一般规律，可以理解为：<strong>在一定资源上，进行一定通信，再通过一定计算，完成一定数据的加工和处理，从而对外提供特定的服务</strong>。</p><p>有这 4 个业务层面的横向层次后，还需要一些基础的技术来支撑，所以就出现了 4 条纵向的技术层次。因为 <strong>在分布式环境下，无论是资源、通信、数据还是计算，都需要解决不同机器间的协同、调度，以及链路追踪、高可用和部署问题</strong>。</p>',40);function h(m,f){const n=i("router-link");return g(),a("div",null,[t("details",c,[_,t("nav",u,[t("ul",null,[t("li",null,[s(n,{to:"#_1-分布式起源"},{default:o(()=>[r("1. 分布式起源")]),_:1}),t("ul",null,[t("li",null,[s(n,{to:"#_1-1-单机模式"},{default:o(()=>[r("1.1 单机模式")]),_:1})]),t("li",null,[s(n,{to:"#_1-2-数据并行-数据分布式"},{default:o(()=>[r("1.2 数据并行（数据分布式）")]),_:1})]),t("li",null,[s(n,{to:"#_1-3-任务并行-任务分布式"},{default:o(()=>[r("1.3 任务并行（任务分布式）")]),_:1})])])]),t("li",null,[s(n,{to:"#_2-分布式技术概览"},{default:o(()=>[r("2. 分布式技术概览")]),_:1})])])])]),d])}const x=e(p,[["render",h],["__file","什么是分布式.html.vue"]]);export{x as default};
