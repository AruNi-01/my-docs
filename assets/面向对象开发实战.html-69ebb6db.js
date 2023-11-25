import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as g,b as t,e,w as i,d as n,a as p}from"./app-dac29861.js";const h={},d={class:"hint-container details"},c=t("summary",null,"本文内容",-1),u={class:"table-of-contents"},_={class:"hint-container info"},k=t("p",{class:"hint-container-title"},"前言",-1),A=t("p",null,[n("前面几个章节讲解了面向对象编程的基础理论知识，纸上谈来终觉浅，绝知此事要躬行，下面就结合一个真实的开发案例，来实操一波，拉通 "),t("strong",null,"面向对象开发的三个主要环节"),n("：面向对象分析（OOA）、面向对象设计（OOD）、面向对象编程（OOP）。")],-1),f={href:"https://github.com/AruNi-01/DesignPattern/tree/main/oop/src/Auth",target:"_blank",rel:"noopener noreferrer"},m=p('<h2 id="_1-案例介绍" tabindex="-1"><a class="header-anchor" href="#_1-案例介绍" aria-hidden="true">#</a> 1. 案例介绍</h2><p>假设，你正在参与开发一个微服务。微服务通过 HTTP 协议暴露接口给其他系统调用，说直白点就是，其他系统通过 URL 来调用微服务的接口。有一天，你的 leader 找到你说，“<strong>为了保证接口调用的安全性</strong>，我们希望设计实现一个接口调用 <strong>鉴权功能</strong>，只有经过认证之后的系统才能调用我们的接口，没有认证过的系统调用我们的接口会被拒绝。我希望由你来负责这个任务的开发，争取尽快上线。”</p><p>听完你 leader 的话，估计得先懵个半天。这个需求给的不是很明确，而且不是一个常规的业务需求，可以说是一个 <strong>跟具体业务无关、独立的功能</strong>。所以可以把它开发成一个独立的框架，集成到很多业务系统中。</p><p>这就不像简单的纯业务开发那样，套套模板就完成了。我们需要考虑如何让这个框架足够通用，不能局限于单一的某个业务需求，也就是需要具备一定的 <strong>可扩展性</strong>。</p><p>下面来看看如何对这个鉴权功能框架做需求分析、类的设计、以及类之间如何交互。</p><h2 id="_2-需求分析" tabindex="-1"><a class="header-anchor" href="#_2-需求分析" aria-hidden="true">#</a> 2. 需求分析</h2><p>在进行需求分析的时候，一定要 <strong>从最简单、最容易的方案想起，然后再慢慢优化</strong>。如果一上来就想一个大而全的完美方法，容易造成思绪混乱，从而白白浪费了时间。</p><p>所以下面分为四轮分析过程，每轮循序渐进，不断迭代优化，最后形成一个可执行、可落地的需求列表。</p><h3 id="_2-1-第一轮基础分析" tabindex="-1"><a class="header-anchor" href="#_2-1-第一轮基础分析" aria-hidden="true">#</a> 2.1 第一轮基础分析</h3><p>做鉴权功能最简单的一个方案就是使用 <strong>用户名 + 密码</strong>，我们可以给符合条件的调用方派发一个应用名（AppID）和一个对应的密码（密钥）。</p><p>调用者每次进行接口请求时，需要携带自己的 AppID 和密码，微服务在接收到请求后，先解析出 AppID 和密码，然后跟存储在微服务端的 AppID 和密码进行对比（假设存储在数据库）。如果一致则认证成功，允许接口调用；否则拒绝。</p><h3 id="_2-2-第二轮分析优化" tabindex="-1"><a class="header-anchor" href="#_2-2-第二轮分析优化" aria-hidden="true">#</a> 2.2 第二轮分析优化</h3><p>上面的方案虽简单，但是每次都要 <strong>明文传输密码</strong>，被截获后是不安全的。</p><p>既然明文传输不安全，很自然而然想到 <strong>加密算法</strong>（比如 SHA），对密码进行加密后再传输到微服务端验证。这样是不是就安全了呢？其实不然，加密后的 AppID 和密码，照样可以被黑客截获，然后通过这个加密后的内容 <strong>伪装成合法调用者调用接口</strong>，也就是有冒充风险。</p><p>那应该怎么办呢？我们可以借助 OAuth 的验证思路：</p><ol><li>调用者将请求接口的 <strong>URL + AppID + 密码</strong> 拼接在一起，然后进行加密，生成一个 <strong>token</strong>；</li><li>调用者在进行接口请求时，将这个 <strong>token 和 AppID</strong>，<strong>随 URL 一起</strong> 传递给微服务端；</li><li>微服务端收到后，<strong>根据 AppID 从数据库中取出对应的密码</strong>，然后通过 <strong>相同的加密算法</strong>，生成另一个 token。接着 <strong>对比两个 token</strong>，如果一致则允许接口调用；否则拒绝。</li></ol><p>流程图如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202303212018874.png" alt="image-20230321201845250" loading="lazy"></p><h3 id="_2-3-第三轮分析优化" tabindex="-1"><a class="header-anchor" href="#_2-3-第三轮分析优化" aria-hidden="true">#</a> 2.3 第三轮分析优化</h3><p>不过，上面的设计仍具有风险，还不够安全。因为每个 URL + AppID + 密码 <strong>生成的 token 都是固定的</strong>，黑客如果截获到了 URL、token 和 AppID 后，还是可以进行冒充的，因为微服务端就是根据这三者进行判断是否合法的。而且，关键是 <strong>黑客只需截获一次，就能一直冒充</strong>。</p><p>为了解决这个问题，需要进一步优化 token 生成算法，引入一个 <strong>随机变量，让每次接口请求生成的 token 都不一样</strong>。我们这里选择一个 <strong>时间戳作为随机变量</strong>，原来的 token 是对 URL + AppID + 密码三者进行加密生成的，现在将 <strong>URL + AppID + 密码 + 时间戳四者进行加密来生成 token</strong>。调用者在进行接口请求时，将 <strong>token + AppID + 时间戳随 URL</strong> 一并传递给微服务端。</p><p>服务端在收到数据后，会 <strong>先验证当前时间戳跟传递过来的时间戳，是否在一个给定的失效时间窗口内</strong>（比如 5s）：</p><ul><li>如果超过了 5s，则判定 token 过期，拒绝接口请求；</li><li>如果没有超过，则说明 token 没有过期，就从数据库获取该 AppID 对应的密码，通过相同的加密算法生成一个新的 token，然后进行对比，看是否一致。如果一致则允许进行接口调用，否则拒绝。</li></ul><p>优化后的认证流程如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202303212040406.png" alt="image-20230321204040384" loading="lazy"></p><div class="hint-container info"><p class="hint-container-title">如果黑客在失效时间窗口内进行截获，不还是能进行冒充吗？</p><p>确实是这样，不过攻与仿之间，本来就没有绝对的安全。我们能做的，就是尽量提高黑客攻击的成本，而且不影响接口本身的性能。所以，此方案是比较均衡的了。</p><p>在上面的设计中，我们的失效时间窗口设计的很短，<strong>黑客如果想窃取我们传输的内容，每隔 5s 就要重新监听一次</strong>，因为我们的 <strong>token 在 5s 后就失效了</strong>，黑客自然也不能只截获一次，就可一直冒充，大大增加了黑客的攻击成本。</p><blockquote><p>虽然失效时间窗口设计的很短，但也足够调用者发起请求到微服务端所需的时间了。</p></blockquote></div><h3 id="_2-4-第四轮存储方式分析" tabindex="-1"><a class="header-anchor" href="#_2-4-第四轮存储方式分析" aria-hidden="true">#</a> 2.4 第四轮存储方式分析</h3><p>上面光顾着考虑安全问题了，还有一个细节没考虑到，那就是 <strong>如何在微服务端存储合法调用者的 AppID 和密码</strong>？</p><p>虽然这个问题并不难，比如直接存到数据库中。但是 <strong>鉴权功能是一个非业务功能</strong>，所以最好 <strong>不要和第三方系统有过度的耦合</strong>。</p><p>针对 AppID 和密码的存储，最好能灵活地支持各种不同的存储方式，比如 ZooKeeper、本地配置文件、自研配置中心、MySQL、Redis 等。</p><p>我们不一定针对每种存储方式都去做代码实现，但起码 <strong>要留有扩展点</strong>，保证系统有足够的灵活性和扩展性。</p><h3 id="_2-5-最终需求的确定" tabindex="-1"><a class="header-anchor" href="#_2-5-最终需求的确定" aria-hidden="true">#</a> 2.5 最终需求的确定</h3><p>分析到现在，需求已经足够细化和具体了。我们按照鉴权的流程，对需求再重新描述一下：</p><ul><li>调用者发起接口请求时，将 URL + AppID + 密码 + 时间戳拼接在一起，通过加密算法生成 token，然后将 token + AppID + 时间戳拼接到 URL 上，随着 URL 一起发送给微服务端；</li><li>微服务端在接收到请求后，从请求中拆解出 token、AppID、时间戳；</li><li>微服务端先检查时间戳跟当前时间是否在 token 的失效时间窗口内。如果已经超过失效时间，则鉴权失败，拒绝接口请求；</li><li>如果 token 没有超过失效时间，则微服务端再根据 AppID 从存储中获取对应的密码，通过同样的 token 生成算法，生成另外一个 token，与调用者传过来的 token 进行匹配，如果一致，则鉴权成功，否则失败。</li></ul><h2 id="_3-面向对象设计" tabindex="-1"><a class="header-anchor" href="#_3-面向对象设计" aria-hidden="true">#</a> 3. 面向对象设计</h2><p>其实，面向对象分析的产出就是详细的需求描述，那面向对象设计的产出就是类。在面向对象设计环节，需要将需求描述转化为具体的类的设计。</p><p>面向对象设计可以分为下面四个环节：</p><ul><li><strong>划分职责进而识别出有哪些类</strong>；</li><li><strong>定义类及其属性和方法</strong>；</li><li><strong>定义类与类之间的交互关系</strong>；</li><li><strong>将类组装起来并提供执行入口</strong>。</li></ul><p>下面就进入这四个环节，看看如何进行设计。</p><h3 id="_3-1-划分职责进而识别出有哪些类" tabindex="-1"><a class="header-anchor" href="#_3-1-划分职责进而识别出有哪些类" aria-hidden="true">#</a> 3.1 划分职责进而识别出有哪些类</h3><p>我们知道，类是现实世界中事物的一个建模。但是并不是每个需求都能映射到现实世界，也并不是每个类都与现实世界中的事物一一对应。对于一些抽象的概念，是无法通过现实世界中的事物来定义（映射）类的。</p><p>所以，还有另一种识别类的方法，就是 <strong>把需求描述中的名词罗列出来，作为可能的候选类，然后进行筛选</strong>。这个方法比较简单、明确。</p><p>不过，王争老师还提供了一种方法，就是 <strong>根据需求描述，把其中涉及的功能点罗列出来，然后再去看看哪些功能点的职责相近，操作同样的属性，是否应该归为同一个类</strong>。</p><p>下面就使用王争老师的方法，来看看鉴权这个案例，具体如何划分职责，定义出类。</p><p>我们将上面最终的需求描述逐句阅读，将一个个小的功能点罗列出来，拆解出来的功能点要尽可能小，每个功能点只负责做一件事（也就是要符合单一职责原则）。得到的功能点如下：</p><ol><li>把 URL、AppID、密码、时间戳拼接为一个字符串；</li><li>对字符串通过加密算法加密生成 token；</li><li>将 token、AppID、时间戳拼接到 URL 中，形成新的 URL；</li><li>解析 URL，得到 token、AppID、时间戳等信息；</li><li>从存储中取出 AppID 和对应的密码；</li><li>根据时间戳判断 token 是否过期失效；</li><li>验证两个 token 是否匹配。</li></ol><p>根据上面的功能点，来看看哪些功能点的职责相近，操作同样的属性：</p><ul><li>功能点 1、2、6、7 都是跟 token 有关，负责 token 的生成、验证；</li><li>功能点 3、4 都是在处理 URL，负责 URL 的拼接、解析；</li><li>功能点 5 是操作 AppID 和密码，负责从存储中读取 AppID 和密码；</li></ul><p>通过上面的职责划分，可以先简单的得到三个核心类：</p><ul><li><strong>AuthToken</strong>：负责功能点 1、2、6、7；</li><li><strong>Url</strong>：负责功能点 3、4；</li><li><strong>CredentialStorage</strong>：负责能点 5。</li></ul><p>当然，这只是一个初步的类划分，其他一些辅助类等等，需要的时候再引入进来，不断更新优化即可。</p><p>另外，由于接口调用鉴权这个开发需求比较简单，所以面向对象设计并不复杂，类自然也就不多。但如果针对复杂的需求开发，首先要做的是进行模块划分，将需求先简单划分成几个小的、独立的功能模块，然后再在模块内部，应用刚刚的方法进行面向对象设计。</p><h3 id="_3-2-定义类及其属性和方法" tabindex="-1"><a class="header-anchor" href="#_3-2-定义类及其属性和方法" aria-hidden="true">#</a> 3.2 定义类及其属性和方法</h3><p>下面通过功能点来挖掘每个类中都有哪些属性和方法。</p><div class="hint-container tip"><p class="hint-container-title">Url</p></div><p>Url 类相关的功能点有两个：</p><ul><li>将 token、AppID、时间戳拼接到 URL 中，形成新的 URL；</li><li>解析 URL，得到 token、AppID、时间戳等信息。</li></ul><p>对于方法的识别，可以识别出需求描述中的动词，作为候选方法，再进一步过滤筛选。</p><p>对于属性的识别类似，可以把功能点中涉及的名词，作为候选属性，然后进行过滤筛选。</p><p>虽然在需求描述中，我们都是以 URL 来代指接口请求，但是接口请求其实还有其他形式，比如 Dubbo、RPC 等。为了让这个类更加通用，命名更贴切，所以 <strong>把该类命名为 ApiRequest</strong>，表示所有的接口请求。</p><p>类图如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202303222210472.png" alt="image-20230322221035581" loading="lazy"></p><p>其中，解析 fullUrl 封装到了一个工具类中，具体可看源码。</p><div class="hint-container tip"><p class="hint-container-title">AuthToken</p></div><p>AuthToken 类相关的功能点有四个：</p><ul><li>把 URL、AppID、密码、时间戳拼接为一个字符串；</li><li>对字符串通过加密算法加密生成 token；</li><li>根据时间戳判断 token 是否过期失效；</li><li>验证两个 token 是否匹配。</li></ul><p>类图如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202303222231161.png" alt="image-20230322223125144" loading="lazy"></p><p>可以发现：</p><ul><li><p>并没有把 URL、AppID、密码、时间戳这几个名词归为该类的属性，而是以方法参数的形式传入。</p><blockquote><p>从此可知：<strong>不应该属于这个类的属性和方法，不应该被放到这个类里</strong>。比如 URL、AppID 这些信息，从业务模型上来说，不应该属于 AuthToken，所以不应该放到这个类中。</p></blockquote></li><li><p>反而出现了几个没有在功能点中的属性，例如 createTime、expireTimeInterval，它们用在 <code>isExpired()</code> 函数中，用来判断 token 是否过期。</p><blockquote><p>从此可知：在设计类具有哪些属性和方法的时候，<strong>不能单纯地依赖当下的需求</strong>，还要分析这个类从业务模型上来讲，理应具有哪些属性和方法。</p></blockquote></li></ul><div class="hint-container tip"><p class="hint-container-title">CredentialStorage</p></div><p>AuthToken 类相关的功能点有一个：</p><ul><li>从存储中取出 AppID 和对应的密码。</li></ul><p>虽然该类比较简单，但是为了具备可扩展性，我们需要抽象封装具体的存储方式，所以 <strong>将 CredentialStorage 设计成接口</strong>，基于接口而非具体的实现编程。</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202303222148126.png" alt="image-20230322214808993" loading="lazy"></p><h3 id="_3-3-定义类于类之间的交互关系" tabindex="-1"><a class="header-anchor" href="#_3-3-定义类于类之间的交互关系" aria-hidden="true">#</a> 3.3 定义类于类之间的交互关系</h3><p>UML 统一建模语言中定义了六种类之间的关系：泛化、实现、关联、聚合、组合、依赖。其中有些关系其实是比较相近的，例如聚合和组合。</p><p>我们在实际分析中，如果按照这六种关系来设计，就太过于复杂了。所以王争老师从更加贴近编程的角度，对类与类之间的关系做了调整，只保留了四个关系：<strong>泛化、实现、组合、依赖</strong>：</p><ul><li>泛化：即继承关系；</li><li>实现：一般指接口与类之间的实现关系；</li><li>组合：将组合、聚合和关联统称为组合，满足 B 类对象是 A 类对象的成员变量；</li><li>依赖：只要 B 类对象和 A 类对象有任何使用关系，就是依赖关系。</li></ul><p>我们刚刚定义的类就只有 CredentialStorage 和 XxxCredentialStorage 之间的实现关系。其他关系在下面的类组装中会涉及。</p><h3 id="_3-4-将类组装起来并提供执行入口" tabindex="-1"><a class="header-anchor" href="#_3-4-将类组装起来并提供执行入口" aria-hidden="true">#</a> 3.4 将类组装起来并提供执行入口</h3><p>将类和类之间的关系定义好后，就可以考虑如何把这些类组装起来，完成鉴权功能，再提供一个执行的入口，用于给外部调用。</p><p>由于接口鉴权不是一个独立的系统，而是一个供其他调用者调用的组件。所以我们需要 <strong>封装所有的实现细节，设计一个最顶层的接口，暴露给外部调用者即可</strong>。</p><p>具体类的设计如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202303222252295.png" alt="image-20230322225155479" loading="lazy"></p><p>可以看到 DefaultApiAuthenticator 中使用了 CredentialStorage 作为属性，因此它们之间是组合关系，而 DefaultApiAuthenticator 类中的 <code>auth()</code> 方法使用到了 ApiRequest 和 AuthToken 中的方法，因此它们之间是依赖关系。</p><h2 id="_4-面向对象编程" tabindex="-1"><a class="header-anchor" href="#_4-面向对象编程" aria-hidden="true">#</a> 4. 面向对象编程</h2><p>面向对象设计完成了，接下来就是编写具体的代码了，只需要根据类图编写即可。</p>',88),D={href:"https://github.com/AruNi-01/DesignPattern/tree/main/oop/src/Auth",target:"_blank",rel:"noopener noreferrer"},b=p('<p>总体的流程图如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202303222303784.png" alt="image-20230322230303351" loading="lazy"></p><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结" aria-hidden="true">#</a> 5. 总结</h2><p>整个面向对象开发案例就到此结束了，从这个简单的案例中，我们完成了一个完整的接口鉴权功能系统的需求分析、设计、实现。</p><p>其中，在进行需求分析的时候，一定要 <strong>从最简单、最容易的方案想起，然后再慢慢优化</strong>，形成最终细致、完善的方案。</p><p>在进行面向对象设计时，需要通过如下四步来设计类：</p><ul><li><p><strong>划分职责进而识别出有哪些类</strong>：将一个个小的功能点罗列出来，拆解出来的功能点要尽可能小，每个功能点只负责做一件事。再根据功能点，来看看哪些功能点的职责相近，操作同样的属性，然后考虑将它们设计成一个类；</p></li><li><p><strong>定义类及其属性和方法</strong>：通过功能点来挖掘每个类中都有哪些属性和方法，不过也需要合理的判断哪些是与该类无关的属性，以及提供一些额外可方便使用的方法；</p></li><li><p><strong>定义类于类之间的交互关系</strong>：主要看类之间是否有某种联系；</p></li><li><p><strong>将类组装起来并提供执行入口</strong>：完成了上面的三步后，就可以将类组装起来使用，完成某项功能，如果这是功能是暴漏给外部调用的，那么就需要抽象出一个接口，屏蔽实现细节，供外部使用。</p></li></ul><p>设计并没有标答，每个人的设计思路都各不相同。只要设计得合理，满足设计原则，具有良好的扩展性，简单易懂、易于维护，那就是好的设计。</p>',8);function I(U,L){const o=r("router-link"),l=r("ExternalLinkIcon");return a(),g("div",null,[t("details",d,[c,t("nav",u,[t("ul",null,[t("li",null,[e(o,{to:"#_1-案例介绍"},{default:i(()=>[n("1. 案例介绍")]),_:1})]),t("li",null,[e(o,{to:"#_2-需求分析"},{default:i(()=>[n("2. 需求分析")]),_:1}),t("ul",null,[t("li",null,[e(o,{to:"#_2-1-第一轮基础分析"},{default:i(()=>[n("2.1 第一轮基础分析")]),_:1})]),t("li",null,[e(o,{to:"#_2-2-第二轮分析优化"},{default:i(()=>[n("2.2 第二轮分析优化")]),_:1})]),t("li",null,[e(o,{to:"#_2-3-第三轮分析优化"},{default:i(()=>[n("2.3 第三轮分析优化")]),_:1})]),t("li",null,[e(o,{to:"#_2-4-第四轮存储方式分析"},{default:i(()=>[n("2.4 第四轮存储方式分析")]),_:1})]),t("li",null,[e(o,{to:"#_2-5-最终需求的确定"},{default:i(()=>[n("2.5 最终需求的确定")]),_:1})])])]),t("li",null,[e(o,{to:"#_3-面向对象设计"},{default:i(()=>[n("3. 面向对象设计")]),_:1}),t("ul",null,[t("li",null,[e(o,{to:"#_3-1-划分职责进而识别出有哪些类"},{default:i(()=>[n("3.1 划分职责进而识别出有哪些类")]),_:1})]),t("li",null,[e(o,{to:"#_3-2-定义类及其属性和方法"},{default:i(()=>[n("3.2 定义类及其属性和方法")]),_:1})]),t("li",null,[e(o,{to:"#_3-3-定义类于类之间的交互关系"},{default:i(()=>[n("3.3 定义类于类之间的交互关系")]),_:1})]),t("li",null,[e(o,{to:"#_3-4-将类组装起来并提供执行入口"},{default:i(()=>[n("3.4 将类组装起来并提供执行入口")]),_:1})])])]),t("li",null,[e(o,{to:"#_4-面向对象编程"},{default:i(()=>[n("4. 面向对象编程")]),_:1})]),t("li",null,[e(o,{to:"#_5-总结"},{default:i(()=>[n("5. 总结")]),_:1})])])])]),t("div",_,[k,A,t("p",null,[n("项目案例代码地址："),t("a",f,[n("https://github.com/AruNi-01/DesignPattern/tree/main/oop/src/Auth"),e(l)]),n("，推荐看着代码阅读。")])]),m,t("p",null,[n("完整的代码在 "),t("a",D,[n("GitHub"),e(l)]),n("，代码参考了专栏评论中的大佬。")]),b])}const y=s(h,[["render",I],["__file","面向对象开发实战.html.vue"]]);export{y as default};
