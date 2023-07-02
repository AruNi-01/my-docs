import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as l,e as t,b as n,w as e,a as i,d as r}from"./app-70e0ac83.js";const h={},_={class:"hint-container details"},c=t("summary",null,"本文内容",-1),p={class:"table-of-contents"},g=i('<h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h2><p>在 MySQL 的体系结构中，有一个非常重要且不同于其他数据库的特性，那就是其 <strong>插件式的表存储引擎</strong>。</p><p>注意：<strong>存储引擎是基于表的，而不是数据库</strong>，意味着同一个数据库不同的表可能有不同的存储引擎。</p><p>有存储引擎的好处在于，每个存储引擎都有各自的特点，能够根据 <strong>具体的应用建立不同的存储引擎表</strong>。</p><p>MySQL 常见的存储引擎有 InnoDB、MyISAM、Memory。其中 InnoDB 是最为常用的一种引擎，现在的 MySQL 默认也是使用它。</p><h2 id="_2-innodb" tabindex="-1"><a class="header-anchor" href="#_2-innodb" aria-hidden="true">#</a> 2. InnoDB</h2><p>InnoDB 存储引擎 <strong>支持事务和外键</strong>。支持 <strong>行级锁</strong>，并支持 <strong>非锁定读</strong>（即默认读取操作不会产生锁）。</p><p>创建表时，会创建两个文件：<code>.frm</code> 存放表结构、<code>.ibd</code> 存放数据和索引。</p><p>InnoDB 通过使用 MVCC（多版本并发控制）来获得高并发性，并且实现了 SQL 标准的 4 种隔离级别（默认为 REPEATABLE 级别）。</p><p>对于表中数据的存储，InnoDB 采用聚簇的方式，每张表都有一个 <strong>主键索引（聚簇索引），数据就是存放在聚簇索引中的</strong>（<strong>索引即数据</strong>）。</p><blockquote><p>如果没有显示的在表定义时指定主键，InnoDB 则会使用 <strong>第一个非 null 的唯一列</strong> 作为聚簇索引的索引列，如果再没有，则会使用 <strong>隐藏列 row_id 作为聚簇索引的索引列</strong>。</p><p>所以，<strong>主键索引一定是聚簇索引，但聚簇索引不一定是主键索引</strong>。</p></blockquote><h2 id="_3-myisam" tabindex="-1"><a class="header-anchor" href="#_3-myisam" aria-hidden="true">#</a> 3. MyISAM</h2><p>MyISAM 存储引擎 <strong>不支持事务，只支持表级锁</strong>。</p><p>创建表时，会创建三个文件：<code>.frm</code> 存放表结构，<code>.MYI</code> 存放索引，<code>.MYD</code> 存放数据。</p><p>MyISAM 中 <strong>索引和数据是分开存储的</strong>。索引中不存放数据，而是只存放 <strong>索引列 + 数据记录的地址</strong>。所以查询数据时在定位到索引记录后，还需要去硬盘中获取完整的数据。</p><p>另外，MyISAM 的缓冲池只缓冲索引文件，而不缓冲数据文件。</p><h2 id="_4-memory" tabindex="-1"><a class="header-anchor" href="#_4-memory" aria-hidden="true">#</a> 4. Memory</h2><p>Memory 将表中的数据存放在 <strong>内存中</strong>，如果数据库重启或崩溃，表中的数据都将全部消失（适用于存储临时数据的临时表）。</p><p>默认使用 <strong>Hash 索引</strong>（InnoDB 和 MyISAM 都是使用 B+ 树）。</p><p>只支持 <strong>表级锁</strong>，即使是数据存放在内存中，并发性能也较差。</p><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结" aria-hidden="true">#</a> 5. 总结</h2><p>一个表总结上面三种存储引擎的区别：</p><table><thead><tr><th>特性</th><th>InnoDB</th><th>MyISAM</th><th>Memory</th></tr></thead><tbody><tr><td>事务、外键支持</td><td>√</td><td>×</td><td>×</td></tr><tr><td>锁的粒度</td><td>行级别</td><td>表级别</td><td>表级别</td></tr><tr><td>索引类型</td><td>B+ 树</td><td>B+ 树</td><td>Hash 索引</td></tr><tr><td>索引即数据</td><td>√</td><td>×</td><td>×</td></tr></tbody></table><h2 id="_6-参考文章" tabindex="-1"><a class="header-anchor" href="#_6-参考文章" aria-hidden="true">#</a> 6. 参考文章</h2><ul><li>《MySQL 技术内幕：InnoDB 存储引擎》</li></ul>',25);function u(m,M){const o=a("router-link");return s(),l("div",null,[t("details",_,[c,t("nav",p,[t("ul",null,[t("li",null,[n(o,{to:"#_1-介绍"},{default:e(()=>[r("1. 介绍")]),_:1})]),t("li",null,[n(o,{to:"#_2-innodb"},{default:e(()=>[r("2. InnoDB")]),_:1})]),t("li",null,[n(o,{to:"#_3-myisam"},{default:e(()=>[r("3. MyISAM")]),_:1})]),t("li",null,[n(o,{to:"#_4-memory"},{default:e(()=>[r("4. Memory")]),_:1})]),t("li",null,[n(o,{to:"#_5-总结"},{default:e(()=>[r("5. 总结")]),_:1})]),t("li",null,[n(o,{to:"#_6-参考文章"},{default:e(()=>[r("6. 参考文章")]),_:1})])])])]),g])}const I=d(h,[["render",u],["__file","MySQL常见存储引擎.html.vue"]]);export{I as default};
