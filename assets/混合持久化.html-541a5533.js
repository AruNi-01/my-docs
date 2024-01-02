import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c,b as e,e as t,w as n,a as d,d as a}from"./app-be06d90c.js";const i={},_={class:"hint-container details"},p=e("summary",null,"本文内容",-1),u={class:"table-of-contents"},g=d(`<h2 id="_1-为什么需要混合持久化" tabindex="-1"><a class="header-anchor" href="#_1-为什么需要混合持久化" aria-hidden="true">#</a> 1. 为什么需要混合持久化？</h2><p>上一篇文章中说到，<strong>RDB 快照的最大优势是恢复速度快，但快照的频率不好控制；AOF 快照的最大优势是丢失数据少，但恢复速度较慢</strong>。</p><p>Redis 4.0 中提出的 <strong>混合持久化</strong> 既能利用 RDB 的快速恢复优势，又能以较小的开销做到尽量少丢数据。</p><p>下面就来看看混合持久化到底是什么，是如何做到的上面效果的。</p><h2 id="_2-什么是混合持久化" tabindex="-1"><a class="header-anchor" href="#_2-什么是混合持久化" aria-hidden="true">#</a> 2. 什么是混合持久化？</h2><p><strong>混合持久化就是将 RDB 快照和 AOF 日志结合起来使用</strong>，以发挥各自的优势，要开启混合持久化，需要修改如下配置：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>aof<span class="token operator">-</span>use<span class="token operator">-</span>rdb<span class="token operator">-</span>preamble yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>混合持久化发生在 AOF 重写的过程中</strong>，在 AOF 重写时，fork 出来的子进程会将内存中的数据 <strong>以 RDB 的方式写到 AOF 文件中</strong>，在此期间的更新操作会被记录到 AOF 重写缓冲区中，重写完成后，<strong>重写缓冲区中的增量数据就会以 AOF 的方式写到 AOF 文件中</strong>，然后用该 AOF 文件替换掉旧的即可。</p><p>可以发现，使用了混合持久化后，<strong>AOF 文件的前面大部分是 RDB 格式的全量数据，而后面小部分是 AOF 格式的增量数据</strong>。</p><p>这样在数据恢复时，由于前面大部分都是 RDB 内容，<strong>恢复速度很快</strong>；而且在后台子进程进行 AOF 重写期间，主线程处理的修改操作，也能记录到 AOF 文件的后面部分，做到了 <strong>尽量少丢数据</strong>。</p><p>所以在实践中是很推荐使用混合持久化的，有种 “鱼和熊掌都可兼得” 的感觉。</p>`,11);function h(m,f){const s=r("router-link");return l(),c("div",null,[e("details",_,[p,e("nav",u,[e("ul",null,[e("li",null,[t(s,{to:"#_1-为什么需要混合持久化"},{default:n(()=>[a("1. 为什么需要混合持久化？")]),_:1})]),e("li",null,[t(s,{to:"#_2-什么是混合持久化"},{default:n(()=>[a("2. 什么是混合持久化？")]),_:1})])])])]),g])}const O=o(i,[["render",h],["__file","混合持久化.html.vue"]]);export{O as default};
