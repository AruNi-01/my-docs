import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,a as n,d as a,w as o,b as s,e as u}from"./app-22bd47c7.js";const k={},d={class:"hint-container details"},r=n("summary",null,"本文内容",-1),v={class:"table-of-contents"},m={class:"hint-container info"},b=n("p",{class:"hint-container-title"},"前言",-1),g={href:"https://aruni.me/studynotes/design_pattern/pattern/behaviour_type/%E6%A8%A1%E6%9D%BF%E6%A8%A1%E5%BC%8F%EF%BC%88%E4%B8%8A%EF%BC%89%EF%BC%9A%E7%90%86%E8%A7%A3%E6%A8%A1%E6%9D%BF%E6%A8%A1%E5%BC%8F.html",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"提高代码的复用性、基于扩展点可以在不改变源码的情况下方便的扩展功能",-1),h=n("p",null,"而我们常用的 Callback 回调技术，也能起到模板模式的两大作用，那他们有什么区别呢？",-1),y=u(`<h2 id="_1-什么是回调" tabindex="-1"><a class="header-anchor" href="#_1-什么是回调" aria-hidden="true">#</a> 1. 什么是回调？</h2><p><strong>回调</strong> 是一种 <strong>双向调用</strong> 关系，当调用一个 A 函数时，可以 <strong>以某种方式将另一个 B 函数注册到 A 函数中</strong>，在 A 函数执行时，可以在合适的时机 <strong>反过来调用其注册进来的 B 函数</strong>，这种机制就叫作回调。</p><p>那么如何将回调函数注册到某个函数中呢？</p><p>函数参数支持传递函数的编程语言可以直接通过参数来注册，比如 Golang、Python。</p><p>而像 Java，就需要使用包裹了回调函数的类对象来实现，这个对象称为回调对象。</p><p>下面先来看看 Golang 的实现，比较简单：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 调用 funcB，传入回调函数</span>
	<span class="token function">funcB</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>args <span class="token operator">...</span>any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;I am callback function. received args: %v\\n&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcB</span><span class="token punctuation">(</span>callback <span class="token keyword">func</span><span class="token punctuation">(</span>args <span class="token operator">...</span>any<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// funcB 逻辑...</span>
	<span class="token function">callback</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 执行回调（funcA 传入的方法）</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出：I am callback function. received args: [1 a]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看看 Java，其实就是把函数参数改成了某个接口的实现类，然后再调用类的回调方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ICallback</span> <span class="token punctuation">{</span>
  	<span class="token keyword">void</span> <span class="token function">methodToCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">ICallback</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 逻辑处理...</span>
        callback<span class="token punctuation">.</span><span class="token function">methodToCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 执行回调函数</span>
        <span class="token comment">// 逻辑处理...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BClass</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        b<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ICallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 	<span class="token comment">// 回调对象</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodToCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Call back me.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，<strong>回调</strong> 也具有 <strong>复用和扩展</strong> 的功能：</p><ul><li>复用：BClass 类中的 <code>process()</code> 方法中的逻辑处理都可以复用，只是回调方法有所不同；</li><li>扩展：ICallback 接口中的回调方法可自行定义，扩展 <code>process()</code> 的功能。</li></ul><p>回调还分为 <strong>同步回调和异步回调</strong>，同步回调是在 <strong>函数返回之前</strong> 执行回调函数，而异步回调则是在 <strong>函数返回之后</strong> 才执行回调函数（比如可以开启另一个线程去执行处理逻辑和回调函数）。</p><p>我们上面的例子就是一个同步回调，在 <code>process()</code> 返回之前执行了回调函数。</p><p>异步回调通常用在处理比较耗时的任务，如网络请求、IO 处理等。下面来看看一个异步的网络请求例子，为了方便就使用 Go 来编写了：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Result 响应结果</span>
<span class="token keyword">type</span> Result <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Data <span class="token builtin">string</span>
	Err  <span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">requestAsync</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">,</span> callback <span class="token keyword">func</span><span class="token punctuation">(</span>Result<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 异步处理</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 模拟网络请求，睡眠一段时间</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

		<span class="token comment">// 返回结果</span>
		result <span class="token operator">:=</span> Result<span class="token punctuation">{</span>
			Data<span class="token punctuation">:</span> url <span class="token operator">+</span> <span class="token string">&quot;&#39;s response: {Hello, World!}&quot;</span><span class="token punctuation">,</span>
			Err<span class="token punctuation">:</span>  <span class="token boolean">nil</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 调用回调函数处理结果</span>
		<span class="token function">callback</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 发起异步请求</span>
	<span class="token function">requestAsync</span><span class="token punctuation">(</span><span class="token string">&quot;https://aruni.me&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>result Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> result<span class="token punctuation">.</span>Err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Error:&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>Err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Data:&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// 继续处理其他任务</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Waiting for response...&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Done.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
输出：
Waiting for response...
Data: https://aruni.me&#39;s response: {Hello, World!}
Done.
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断一个回调是否是异步回调很简单，只需要看 <strong>在调用回调方法时，是否需要等待该回调方法执行完毕，才能执行后续逻辑</strong>，不需要则属于异步回调。</p><h2 id="_2-模板模式-vs-回调" tabindex="-1"><a class="header-anchor" href="#_2-模板模式-vs-回调" aria-hidden="true">#</a> 2. 模板模式 vs 回调</h2><p>回调的原理和用法讲完后，来看看模板模式跟回调，到底有什么区别？</p><p>从 <strong>应用场景</strong> 来看，需要分为同步回调和异步回调：</p><ul><li><strong>同步回调</strong>：与模板模式几乎一致，都是在一个大的算法骨架中，自由替换其中的几个步骤，起到代码复用和扩展的功能；</li><li><strong>异步回调</strong>：其实更像是 <strong>观察者模式</strong>，因为异步回调其实并不是按照某套算法骨架的顺序执行，而是在执行完算法骨架后，在某个时间点（有不同的规则）触发这个回调函数。</li></ul><div class="hint-container info"><p class="hint-container-title">为了方便理解，再列举一个异步回调的例子</p><p>在 JVM 中有一个 shutdown hook（钩子函数 hook 是基于回调的一种应用），可以在程序中事先注册一个 JVM 关闭的 Hook，等到程序关闭前，JVM 会自动调用 Hook。代码实例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShutdownHookDemo</span> <span class="token punctuation">{</span>
  
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ShutdownHook</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;I am called during shutting down.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 注册一个 shutdown hook</span>
        <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addShutdownHook</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ShutdownHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就完成了一个 Hook 的注册，下面来看看 <code>addShutdownHook()</code> 的源码实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Runtime</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addShutdownHook</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> hook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SecurityManager</span> sm <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getSecurityManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sm <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sm<span class="token punctuation">.</span><span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RuntimePermission</span><span class="token punctuation">(</span><span class="token string">&quot;shutdownHooks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 实际调用 ApplicationShutdownHooks.add(hook);</span>
        <span class="token class-name">ApplicationShutdownHooks</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>hook<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ApplicationShutdownHooks</span> <span class="token punctuation">{</span>
    <span class="token comment">/* The set of registered hooks */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">IdentityHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Thread</span><span class="token punctuation">,</span> <span class="token class-name">Thread</span><span class="token punctuation">&gt;</span></span> hooks<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
            hooks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IdentityHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalStateException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            hooks <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> hook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>hooks <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token string">&quot;Shutdown in progress&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>hook<span class="token punctuation">.</span><span class="token function">isAlive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Hook already running&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>hooks<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>hook<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Hook previously registered&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        hooks<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>hook<span class="token punctuation">,</span> hook<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">runHooks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Thread</span><span class="token punctuation">&gt;</span></span> threads<span class="token punctuation">;</span>
        <span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token class-name">ApplicationShutdownHooks</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            threads <span class="token operator">=</span> hooks<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            hooks <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		
        <span class="token comment">// 遍历 hooks，执行</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span> hook <span class="token operator">:</span> threads<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            hook<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span> hook <span class="token operator">:</span> threads<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    hook<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> ignored<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，当应用程序关闭时，JVM 会调用 <code>runHooks()</code> 方法，将注册进来的 Hooks 并发的执行。</p><p>我们在注册完 Hook 后，并不需要等待 Hook 执行完成，而是在程序关闭时，JVM 会执行这些 Hook，所以是一种异步调用。而 JVM 就像是观察者模式中的观察者，当发先程序要关闭时，就会触发之前注入的事件（Hook）。</p></div><p>从 <strong>代码实现</strong> 来看，<strong>回调和模板模式完全不同</strong>：</p><ul><li>回调基于 <strong>组合关系</strong> 来实现，把一个对象传递给另一个对象，是一种对象之间的关系；</li><li>模板模式基于 <strong>继承关系</strong> 来实现，子类重的抽象方法，是一种类之间的关系。</li></ul><p>在设计原则中也说过，组合优于继承，所以回调其实比模板模式更加灵活，主要体现在下面几个方面：</p><ul><li>像 Java 这种只支持单继承的语言，基于模板模式编写的子类，只能继承一个父类，即只具备一种能力；</li><li>回调可以使用匿名类（或直接传递函数）来创建回调对象，无需先定义类；而模板模式不同的实现就需要定义多个不同的子类；</li><li>模板方法中的步骤方法是抽象方法时，子类需要实现每一个方法；而回调则没有限制，只需要往模板方法中注入回调对象/方法即可。</li></ul>`,25);function f(_,q){const t=p("router-link"),e=p("ExternalLinkIcon");return l(),i("div",null,[n("details",d,[r,n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#_1-什么是回调"},{default:o(()=>[s("1. 什么是回调？")]),_:1})]),n("li",null,[a(t,{to:"#_2-模板模式-vs-回调"},{default:o(()=>[s("2. 模板模式 vs 回调")]),_:1})])])])]),n("div",m,[b,n("p",null,[s("在 "),n("a",g,[s("上一章"),a(e)]),s(" 中，讲解了模板模式的原理和应用，其主要功能就是 "),w,s("。")]),h]),y])}const H=c(k,[["render",f],["__file","模板模版（下）：模板模式与Callback.html.vue"]]);export{H as default};
