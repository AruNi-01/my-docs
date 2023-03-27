import{_ as l,Y as e,Z as i,a2 as n,a0 as t,a3 as a,$ as r,J as p,a1 as o}from"./framework-3ccafb52.js";const c={},d={class:"hint-container details"},u=n("summary",null,"本文内容",-1),g={class:"table-of-contents"},k=r(`<div class="hint-container info"><p class="hint-container-title">前言</p><p>今天就来解决一个面试中经常被问到的问题：接口和抽象类有什么区别？</p></div><h2 id="_1-抽象类是什么" tabindex="-1"><a class="header-anchor" href="#_1-抽象类是什么" aria-hidden="true">#</a> 1. 抽象类是什么？</h2><p>在 Java 中，被 <strong>abstract</strong> 关键字修饰的类，称为 <strong>抽象类</strong>。<strong>抽象类不能被实例化（即通过 new 创建对象），只能被继承</strong>。</p><blockquote><p>因为抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。</p></blockquote><p>抽象类除了不能被实例化之外，类的其他功能依旧存在，可以有成员变量、成员方法和构造方法。其中，方法可以有代码实现，也可以没有，<strong>没有代码实现的方法叫做抽象方法</strong>，需要使用 <code>abstract</code> 修饰。</p><p>如果子类继承了抽象类，则 <strong>必须实现该抽象类中的所有抽象方法</strong>，否则子类也要声明为抽象类。</p><p>总的来说，抽象类具有如下三个 <strong>特点</strong>：</p><ul><li>不能被实例化，只能被继承；</li><li>包含方法时，没有具体实现的方法为抽象方法；</li><li>子类继承抽象类，必须实现抽象类中的所有抽象方法，否则也要声明为抽象类。</li></ul><h2 id="_2-接口是什么" tabindex="-1"><a class="header-anchor" href="#_2-接口是什么" aria-hidden="true">#</a> 2. 接口是什么？</h2><p>在 Java 中，<strong>接口使用 interface 定义</strong>。其实，接口是一个 <strong>抽象类型</strong>，主要是 <strong>抽象方法的集合</strong>。</p><p>所以，接口中的 <strong>方法</strong>，<strong>默认都是隐式抽象的</strong>，即使用 <strong><code>public abstract</code></strong> 修饰。</p><p><strong>接口也不能被实例化</strong>，但可以被实现，<strong>一个实现接口的类，必须实现接口中的所有方法</strong>，否则就要声明为抽象类。</p><p>需要注意的是，在 JDK 8 之后，有了如下改动：</p><ul><li>接口中 <strong>可以有成员变量</strong>（类变量），默认使用 <code>public static final</code> 修饰（只能是 public 修饰）；</li><li>接口中 <strong>可以有方法实现</strong>，分为如下两种： <ul><li><strong><code>default</code> 默认方法</strong>，实现类可自行决定是否实现该方法；</li><li><strong><code>private</code> 私有方法</strong>（JDK 9），实现类没有权利实现该方法；</li><li><strong><code>static</code> 静态方法</strong>，实现类没有实现权力，可直接通过 <code>.</code> 调用</li></ul></li></ul><blockquote><p>至于为什么后面要进行这样的改动，我认为是之前接口的定义太严格了。</p><p>如果只能定义方法，还不能有实现，这样导致如果很多实现类中的实现逻辑都一样的话，所有类都要实现一遍相同的逻辑。因此后面就干脆改进一下，可以有默认实现，实现类可以重新实现，也可以使用默认的。</p><p>类变量和私有/静态方法也一样，其实都是为了更灵活的进行编程。</p></blockquote><p>示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IDemo</span> <span class="token punctuation">{</span>
    <span class="token comment">// 变量，默认使用 public static final 修饰</span>
    <span class="token keyword">int</span> publicVal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 普通方法，默认使用 public abstract 修饰，实现类必须实现</span>
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 默认方法，实现类可自行决定是否实现</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">defaultMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 私有方法，实现类没有实现权力</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 静态方法，实现类没有实现权力，可直接通过 . 调用</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-抽象类和接口有什么区别" tabindex="-1"><a class="header-anchor" href="#_3-抽象类和接口有什么区别" aria-hidden="true">#</a> 3. 抽象类和接口有什么区别？</h2><p>讲完了抽象类和接口的概念和特点，其实区别也就自然而然的出来了。</p><blockquote><p>下面的特点都是一条一条对比着写的。</p></blockquote><p>抽象类具有如下特点：</p><ul><li>不能被实例化，只能被继承；</li><li>包含方法时，没有具体实现的方法为抽象方法；</li><li>子类继承抽象类，必须实现抽象类中的所有抽象方法，否则也要声明为抽象类；</li><li>抽象类中的成员变量可以是各种类型的；</li><li>一个类只可以继承一个抽象类。</li></ul><p>接口具有如下特点：</p><ul><li>也不能被实例化，只能被实现；</li><li>接口中的普通方法（没有任何修饰符）默认都是 <code>public abstract</code>； <blockquote><p>JDK 8 之后，接口中也支持默认/私有/静态方法，以及类变量。</p></blockquote></li><li>实现类实现接口，必须实现所有普通方法；</li><li>接口中的成员变量只能是 <code>public static final</code> 类型；</li><li>一个类可以实现多个接口。</li></ul><p>此外，还有一个 <strong>重要的区别</strong>，就是：</p><ul><li>抽象类其实就是类，子类继承后，两者是一种 <strong>is-a 关系</strong>，表示 <strong>类之间的关系</strong>；</li><li>而接口和实现类之间是一种 <strong>has-a 关系</strong>，表示 <strong>具有某些功能</strong>。因此，接口还有一种更形象的叫法，那就是 <strong>协议</strong>（contract）。</li></ul><h2 id="_4-抽象类和接口能解决什么" tabindex="-1"><a class="header-anchor" href="#_4-抽象类和接口能解决什么" aria-hidden="true">#</a> 4. 抽象类和接口能解决什么？</h2><h3 id="_4-1-为什么需要抽象类" tabindex="-1"><a class="header-anchor" href="#_4-1-为什么需要抽象类" aria-hidden="true">#</a> 4.1 为什么需要抽象类？</h3><p>抽象类不能被实例化，只能被继承，我们知道，<strong>继承能解决代码复用问题</strong>，所以，<strong>抽象类自然也是为代码复用而生</strong>。多个子类可以继承抽象类中定义的属性和方法，避免在子类中编写重复的代码。</p><p>但是，继承本身就能够达到这个目的了，而且继承也没有规定父类一定要是抽象类，所以不使用抽象类，也能实现继承和复用，为什么还要定义个抽象类出来呢？</p><p>主要是因为使用 <strong>抽象类</strong>，可以 <strong>使代码更加优雅</strong>。具体来说，假设我们要实现多态：</p><ul><li>如果使用普通的继承，多个子类需要重写父类中的方法，所以父类中必须要定义这个方法，<strong>哪怕父类用不着这个方法，也要包含一个空实现</strong>；</li><li>而使用抽象类，虽然父类中也必须要定义这个方法，但是 <strong>父类中可以定义为抽象方法，不用去实现</strong>，而让子类去实现（也是 <strong>必须的</strong>）。</li></ul><p>所以，主要的原因有下面几点：</p><ul><li><p>普通继承中，父类会莫名其妙的有一个 <strong>空实现的方法</strong>，影响代码的可读性，其他人在看到这个空实现的时候就会有疑问，要看继承关系才明白；而在 <strong>抽象类中的抽象方法，一看就知道是需要给子类继承重写的</strong>。</p></li><li><p>普通继承中，当父类的方法很多时，<strong>子类可能会忘记重写父类的方法</strong>；而使用 <strong>抽象类，则会强制要求重写</strong>。</p></li><li><p>普通继承中，<strong>父类可以被实例化</strong>，所以 <strong>增加了类被误用的风险</strong>；而 <strong>抽象类规定不能被实例化</strong>。</p><blockquote><p>当然，这个问题也可以通过私有的构造器来解决，但是很显然，抽象类更加优雅。</p></blockquote></li></ul><h3 id="_4-2-为什么需要接口" tabindex="-1"><a class="header-anchor" href="#_4-2-为什么需要接口" aria-hidden="true">#</a> 4.2 为什么需要接口</h3><p>抽象类更多的是为了代码复用，而 <strong>接口则更侧重于解耦</strong>。<strong>接口是对行为的一种抽象，相当于一组协议或契约</strong>。</p><p>调用者 <strong>只需要关注抽象的接口，不需要了解具体的实现</strong>，接口实现了约定和实现相分离，可以降低代码间的耦合度，提高代码的可扩展性。</p><p>实际上，接口比抽象类应用更广泛、也更重要，比如常常提到的 “<strong>基于接口而非实现编程</strong>”，它能极大地提高代码地灵活性、扩展性。</p><p>下面简单的讲讲为什么要 “基于接口而非实现编程”？</p><div class="hint-container tip"><p class="hint-container-title">基于接口而非实现编程</p></div><p>其实这里的接口不单单只接口，可以理解为编程语言中的接口或抽象类。</p><p>实际上，这个原则的另一种说法是 “<strong>基于抽象而非实现编程</strong>”。</p><p>在软件开发中，最大的挑战之一就是需求的不断变化，这也是考验代码设计好坏的一个标准。<strong>越抽象、越顶层、越脱离具体某一实现的设计，越能提高代码的灵活性，越能应对未来的需求变化</strong>。而抽象就是提高代码扩展性、灵活性、可维护性最有效的手段之一。</p><p>所以，为了做到 “基于接口而非实现编程”，我们需要做到下面几点：</p><ul><li><strong>函数的命名不能暴露任何实现细节，要抽象为一个广泛的名字</strong>。例如，要定义一个存储图片的函数，应该定义为 <code>upload()</code>，而非 <code>uploadToAliyun()</code>，方便后续修改图片存储位置；</li><li><strong>封装具体的实现细节</strong>，只暴露简单的接口给调用者使用；</li><li><strong>为实现类定义抽象的接口</strong>。具体的实现类都依赖于统一的接口定义，遵从一致的功能协议。</li></ul><p>但是，<strong>并不是一定要为每个类都定义接口</strong>，这条原则是为了 <strong>将接口和实现相分离，封装不稳定的实现，暴露稳定的接口</strong>。上游系统面向接口而非实现编程，<strong>不依赖不稳定的实现细节</strong>，这样 <strong>当实现发生变化的时候，上游系统的代码基本上不需要做改动</strong>，以此来 <strong>降低代码间的耦合性，提高代码的扩展性</strong>。</p><p>所以，如果在业务场景中，<strong>某个功能只有一种实现方式，未来也不可能被其他实现方式替换</strong>，那直接使用实现类就可以了。</p><p>除此之外，越是不稳定的系统，越要在代码的扩展性、维护性上下功夫。相反，如果某个系统特别稳定，在开发完之后，基本上不需要做维护，那我们就没有必要为其扩展性，投入不必要的开发时间。</p><h2 id="_5-如何决定使用抽象类还是接口" tabindex="-1"><a class="header-anchor" href="#_5-如何决定使用抽象类还是接口" aria-hidden="true">#</a> 5. 如何决定使用抽象类还是接口？</h2><p>在实际编码过程中，什么时候应该使用抽象类？什么时候使用接口？</p><p>其实判断的标准很简单：</p><ul><li>如果要表示一种 <strong>is-a 关系</strong>，并且是为了解决 <strong>代码复用</strong> 问题时，就使用 <strong>抽象类</strong>；</li><li>如果要表示一种 <strong>has-a 关系</strong>，并且是为了解决 <strong>抽象</strong> 而非代码复用，就使用 <strong>接口</strong>。</li></ul><p>从类的继承层次上来看，<strong>抽象类是一种自下而上的设计思路，先有子类的代码重复，然后再抽象出上层的父类</strong>（也就是抽象类）。而 <strong>接口是一种自上而下的设计思路，一般都是先设计接口，规定该接口具有什么功能，然后再让含有该功能的类去具体实现功能逻辑</strong>。</p>`,53);function h(v,_){const s=p("router-link");return e(),i("div",null,[n("details",d,[u,n("nav",g,[n("ul",null,[n("li",null,[t(s,{to:"#_1-抽象类是什么"},{default:a(()=>[o("1. 抽象类是什么？")]),_:1})]),n("li",null,[t(s,{to:"#_2-接口是什么"},{default:a(()=>[o("2. 接口是什么？")]),_:1})]),n("li",null,[t(s,{to:"#_3-抽象类和接口有什么区别"},{default:a(()=>[o("3. 抽象类和接口有什么区别？")]),_:1})]),n("li",null,[t(s,{to:"#_4-抽象类和接口能解决什么"},{default:a(()=>[o("4. 抽象类和接口能解决什么？")]),_:1}),n("ul",null,[n("li",null,[t(s,{to:"#_4-1-为什么需要抽象类"},{default:a(()=>[o("4.1 为什么需要抽象类？")]),_:1})]),n("li",null,[t(s,{to:"#_4-2-为什么需要接口"},{default:a(()=>[o("4.2 为什么需要接口")]),_:1})])])]),n("li",null,[t(s,{to:"#_5-如何决定使用抽象类还是接口"},{default:a(()=>[o("5. 如何决定使用抽象类还是接口？")]),_:1})])])])]),k])}const m=l(c,[["render",h],["__file","真正理解接口和抽象类.html.vue"]]);export{m as default};
