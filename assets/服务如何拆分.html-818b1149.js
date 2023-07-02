import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as e,c as a,e as t,b as s,w as o,a as p,d as r}from"./app-70e0ac83.js";const g={},c={class:"hint-container details"},_=t("summary",null,"本文内容",-1),d={class:"table-of-contents"},h=p('<div class="hint-container info"><p class="hint-container-title">前言</p><p>上一篇文章中讲解了什么是微服务，微服务的演进。那么我们应该 <strong>在什么时候进行服务的拆分，如何拆分？拆分后会到来哪些问题，如何解决</strong>？这些都是微服务需要考虑的问题。</p></div><h2 id="_1-什么时候应该拆分服务" tabindex="-1"><a class="header-anchor" href="#_1-什么时候应该拆分服务" aria-hidden="true">#</a> 1. 什么时候应该拆分服务？</h2><p>虽然现在微服务、容器化非常火爆，但并不意味着我们的每个项目都直接无脑使用微服务架构，需要根据项目实际的体量来选择。</p><p>在项目刚起步的时候，一般都是快速开发，展现产品，看看产品思路是否可行，所以架构不宜过度设计，使用常规的快速开发、迭代的方式就好。当产品的可行性得到验证后，就可以一步步增加新特性、新功能了。</p><p>比如一个社交 App，初期可以只开发首页信息流、评论等基础功能。产品上线后，用户量逐渐增多，觉得产品的可行性比较好的时候，就可以增加更多的玩法，比如附近好友、随机匹配等。</p><p>当项目的规模变大后，所需的开发人员也会随之扩张，以支持多个功能的开发。如果此时还采用单体架构，将会面临如下问题：</p><ul><li><strong>多个功能模块混合在一起开发、测试、部署，就会导致不同模块之间互相影响，降低了开发效率</strong>。</li><li><strong>多个模块耦合在一起，线上服务的稳定性和可靠性都得不到很好的保证。当用户量激增时，单体架构的系统性能也跟不上</strong>。</li></ul><p>此时就需要对单体架构进行服务拆分了，让不同小团队负责不同的功能模块，<strong>模块之间独立开发、测试、部署，大大降低了复杂度，不同的服务部署到不同的机器上，也增加了系统的性能和可靠性</strong>。</p><h2 id="_2-如何拆分服务" tabindex="-1"><a class="header-anchor" href="#_2-如何拆分服务" aria-hidden="true">#</a> 2. 如何拆分服务？</h2><p>当意识到要拆分服务后，如何拆分才是真正的一大难题，因为拆分不能一概而论，需要根据实际项目的情况而定。</p><p>在业界有两种服务拆分的思路，分别是 <strong>纵向拆分</strong>（<strong>业务维度</strong>）和 <strong>横向拆分</strong>（<strong>公共独立的功能维度</strong>）。</p><div class="hint-container tip"><p class="hint-container-title">纵向拆分（业务维度）</p><p><strong>纵向拆分</strong> 是按照 <strong>业务的关联程度</strong> 来进行拆分：</p><ul><li><strong>关联比较紧密的业务</strong> 适合拆分为一个微服务；</li><li>如果 <strong>一个业务比较独立</strong>，那么可以将其单独拆分为一个微服务。</li></ul><p>例如在上面的社交 App 中，首页信息流是一个服务、评论是一个服务、消息通知是一个服务、附近好友是一个服务......</p></div><div class="hint-container tip"><p class="hint-container-title">横向拆分（公共独立的功能维度）</p><p><strong>横向拆分</strong> 是按照 <strong>该服务是否会被多个其他服务调用，且该功能依赖的资源独立，不与其他的业务耦合，此时拆分出来的该服务就能被复用</strong>。</p><p>例如在上面的社交 App 中，位置服务就可以独立运行，不与其他业务耦合，这就是一个公共独立的服务。在附近好友、共享实时位置的服务中，都可以调用位置服务。</p><p>还有一些常见的公共微服务，例如用户的认证授权服务、图片和视频处理服务等等。</p></div><h2 id="_3-微服务会带来什么问题" tabindex="-1"><a class="header-anchor" href="#_3-微服务会带来什么问题" aria-hidden="true">#</a> 3. 微服务会带来什么问题？</h2><p>从单体架构演进来微服务架构后，架构复杂度无疑肯定是增加了不少的，那么新架构会带来什么问题呢？</p><p>在微服务结构中，常见的几个问题如下：</p><ul><li><strong>服务如何定义</strong>： <ul><li>单体架构中，不同功能模块之间通常是以类库的方式进行使用；</li><li>微服务架构中，服务是跨进程的，怎么定义服务给外界使用呢？答案是 <strong>接口</strong>，无论是使用 HTTP 还是 RPC，服务之间都是通过接口来描述一个服务，包括接口名、接口参数和接口返回值。</li></ul></li><li><strong>服务如何发布和订阅</strong>： <ul><li>单体架构中，服务都是在进程内调用，使用一个服务直接调用方法即可；</li><li>微服务架构中，服务提供者如何对外暴露自己的地址，服务调用者又如何查询到服务的地址呢？答案是 <strong>注册中心</strong>，这里会记录所有服务提供者的地址，以供服务调用者查询。</li></ul></li><li><strong>服务如何监控</strong>：我们需要清楚的知道每一个微服务的 <strong>健康状态、性能、可用性</strong> 等，当服务出现问题时要及时报警通知。</li><li><strong>服务如何治理</strong>：当服务的数量变多后，服务的依赖关系、调用链也会变得更加复杂。<strong>如果一个服务出问题，那我们要保证全局服务不会受影响</strong>，因此就需要一些服务治理的手段了，包括 <strong>服务熔断、服务降级</strong> 等。</li><li><strong>故障如何跟踪</strong>：服务都部署到不同的机器上，当调用链出现问题时，就需要快速排查问题出现在哪个服务上，这就需要一个 <strong>链路跟踪系统</strong>。</li></ul><p>当然，在具体的微服务架构中可能还会出现其他各种各样的问题，这些都是微服务拆分后需要考虑的，在有了可行的解决方案后，才能真正开始系统的微服务化。</p>',18);function u(f,m){const n=l("router-link");return e(),a("div",null,[t("details",c,[_,t("nav",d,[t("ul",null,[t("li",null,[s(n,{to:"#_1-什么时候应该拆分服务"},{default:o(()=>[r("1. 什么时候应该拆分服务？")]),_:1})]),t("li",null,[s(n,{to:"#_2-如何拆分服务"},{default:o(()=>[r("2. 如何拆分服务？")]),_:1})]),t("li",null,[s(n,{to:"#_3-微服务会带来什么问题"},{default:o(()=>[r("3. 微服务会带来什么问题？")]),_:1})])])])]),h])}const b=i(g,[["render",u],["__file","服务如何拆分.html.vue"]]);export{b as default};
