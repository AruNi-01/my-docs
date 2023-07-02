import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as t,e as l,b as e,w as a,a as u,d as n}from"./app-70e0ac83.js";const c={},h={class:"hint-container details"},o=l("summary",null,"本文内容",-1),v={class:"table-of-contents"},m=u(`<div class="hint-container tip"><p class="hint-container-title">技术支持岗位</p></div><h2 id="一面-2023-3-23" tabindex="-1"><a class="header-anchor" href="#一面-2023-3-23" aria-hidden="true">#</a> 一面（2023/3/23）</h2><h3 id="网络-os" tabindex="-1"><a class="header-anchor" href="#网络-os" aria-hidden="true">#</a> 网络 &amp; OS</h3><ul><li>TCP 为什么握手是三次、挥手是四次</li><li>对 HTTP 了解什么</li><li>HTTP 1.X 对比 HTTP 2 有什么区别</li><li>对 DNS 了解吗</li><li>说一下 CPU 调度算法</li><li>说一些查看系统资源的 Linux 命令</li></ul><h3 id="java-框架" tabindex="-1"><a class="header-anchor" href="#java-框架" aria-hidden="true">#</a> Java &amp; 框架</h3><ul><li>线程池，常用的实现类，它们之间的区别</li><li>IOC 是什么？在 Spring 中的作用</li></ul><h3 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h3><ul><li><p>SQL 题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ip，url，flux

1. 统计每个 ip 总访问次数
2. 统计每个 ip 访问每个 url 产生的流量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Redis 有哪几种持久化方式</p></li><li><p>缓存穿透，如何避免</p></li></ul><h3 id="项目-其他" tabindex="-1"><a class="header-anchor" href="#项目-其他" aria-hidden="true">#</a> 项目 &amp; 其他</h3><ul><li>在项目中遇到过什么问题，怎么去解决的</li><li>有用过一些云产品吗？说说你对它们的看法</li></ul><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3><p>请写一个 Java 程序实现以下功能：<br> 有一个包含若干个字符串的数组，每个字符串都是由大写字母组成的。编写程序计算每个字符串中各个字符出现的次数，并将结果保存在 HashMap 中。最后，输出每个字符串的字符出现次数。</p><p>例如，对于以下数组：<br> String[] arr = {&quot;APPLE&quot;, &quot;BANANA&quot;, &quot;ORANGE&quot;};<br> 程序应该输出以下内容：<br> APPLE: {A=1, E=1, L=1, P=2}<br> BANANA: {A=3, B=1, N=2}<br> ORANGE: {E=1, G=1, N=1, O=1, R=1}<br> 需要注意的是，在输出 HashMap 时，可以使用 for-each 循环和 entrySet() 方法来获取每个键值对，并输出对应的键和值。</p><h2 id="二面-2023-3-24" tabindex="-1"><a class="header-anchor" href="#二面-2023-3-24" aria-hidden="true">#</a> 二面（2023/3/24）</h2><h3 id="算法-1" tabindex="-1"><a class="header-anchor" href="#算法-1" aria-hidden="true">#</a> 算法</h3><ul><li>冒泡排序，时间复杂度</li><li>时间复杂度是什么？怎么计算的</li></ul><h3 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h3><ul><li>七层模型</li><li>应用层有哪些协议</li><li>打开浏览器的开发者工具，点开 Network，随便点击一个资源，依次介绍一下里面的结构</li><li>跨域是什么概念？如何解决跨域问题</li><li>cache-control 是什么</li><li>怎么区分强制缓存和协商缓存</li><li>传输层、网络层有哪些协议</li><li>域名解析什么概念？怎么实现的</li><li>说一下 IP 报文中的字段和字段对应的大小</li></ul><h3 id="数据库-1" tabindex="-1"><a class="header-anchor" href="#数据库-1" aria-hidden="true">#</a> 数据库</h3><ul><li><p>SQL 题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>classname     classno
1                2
1                3
1                4
1                5
2                1
2                2
3                1
3                2
3                3
根据 classname 做分组，保留 classname 超过 2 次的记录，并且按照 classname 做降序排序
输出：
3 3
1 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="hr-面-2023-3-24" tabindex="-1"><a class="header-anchor" href="#hr-面-2023-3-24" aria-hidden="true">#</a> HR 面（2023/3/24）</h2><ul><li>聊天</li></ul>`,22);function b(_,p){const i=r("router-link");return s(),t("div",null,[l("details",h,[o,l("nav",v,[l("ul",null,[l("li",null,[e(i,{to:"#一面-2023-3-23"},{default:a(()=>[n("一面（2023/3/23）")]),_:1}),l("ul",null,[l("li",null,[e(i,{to:"#网络-os"},{default:a(()=>[n("网络 & OS")]),_:1})]),l("li",null,[e(i,{to:"#java-框架"},{default:a(()=>[n("Java & 框架")]),_:1})]),l("li",null,[e(i,{to:"#数据库"},{default:a(()=>[n("数据库")]),_:1})]),l("li",null,[e(i,{to:"#项目-其他"},{default:a(()=>[n("项目 & 其他")]),_:1})]),l("li",null,[e(i,{to:"#算法"},{default:a(()=>[n("算法")]),_:1})])])]),l("li",null,[e(i,{to:"#二面-2023-3-24"},{default:a(()=>[n("二面（2023/3/24）")]),_:1}),l("ul",null,[l("li",null,[e(i,{to:"#算法-1"},{default:a(()=>[n("算法")]),_:1})]),l("li",null,[e(i,{to:"#网络"},{default:a(()=>[n("网络")]),_:1})]),l("li",null,[e(i,{to:"#数据库-1"},{default:a(()=>[n("数据库")]),_:1})])])]),l("li",null,[e(i,{to:"#hr-面-2023-3-24"},{default:a(()=>[n("HR 面（2023/3/24）")]),_:1})])])])]),m])}const N=d(c,[["render",b],["__file","日常实习-七牛云.html.vue"]]);export{N as default};
