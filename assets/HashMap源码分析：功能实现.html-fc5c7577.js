const e=JSON.parse('{"key":"v-47c06550","path":"/studynotes/java/collection/HashMap%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90%EF%BC%9A%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0.html","title":"HashMap 源码分析：功能实现","lang":"zh-CN","frontmatter":{"title":"HashMap 源码分析：功能实现","date":"2023-02-15T00:00:00.000Z","order":4,"icon":"write","category":["Java"],"tag":["集合"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. 前言 注：本篇是 HashMap 源码分析的第二篇文章，建议先阅读 上一篇文章 后，再阅读本篇会更清晰。","head":[["meta",{"property":"og:url","content":"https://aruni.me/studynotes/java/collection/HashMap%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90%EF%BC%9A%E5%8A%9F%E8%83%BD%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"HashMap 源码分析：功能实现"}],["meta",{"property":"og:description","content":"本文内容 1. 前言 注：本篇是 HashMap 源码分析的第二篇文章，建议先阅读 上一篇文章 后，再阅读本篇会更清晰。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T12:28:10.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"集合"}],["meta",{"property":"article:published_time","content":"2023-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T12:28:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap 源码分析：功能实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-10T12:28:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. 插入/更新操作","slug":"_2-插入-更新操作","link":"#_2-插入-更新操作","children":[{"level":3,"title":"2.1 插入流程","slug":"_2-1-插入流程","link":"#_2-1-插入流程","children":[]},{"level":3,"title":"2.2 源码分析","slug":"_2-2-源码分析","link":"#_2-2-源码分析","children":[]}]},{"level":2,"title":"3. 扩容机制","slug":"_3-扩容机制","link":"#_3-扩容机制","children":[{"level":3,"title":"3.1 扩容流程","slug":"_3-1-扩容流程","link":"#_3-1-扩容流程","children":[]},{"level":3,"title":"3.2 源码分析","slug":"_3-2-源码分析","link":"#_3-2-源码分析","children":[]}]},{"level":2,"title":"4. 链表和树的互转","slug":"_4-链表和树的互转","link":"#_4-链表和树的互转","children":[{"level":3,"title":"4.1 链表树化","slug":"_4-1-链表树化","link":"#_4-1-链表树化","children":[]},{"level":3,"title":"4.2 红黑树链化","slug":"_4-2-红黑树链化","link":"#_4-2-红黑树链化","children":[]}]},{"level":2,"title":"5. 查找","slug":"_5-查找","link":"#_5-查找","children":[]},{"level":2,"title":"6. 删除","slug":"_6-删除","link":"#_6-删除","children":[]}],"git":{"createdTime":1676442483000,"updatedTime":1688992090000,"contributors":[{"name":"AruNi-01","email":"1298911600@qq.com","commits":3},{"name":"aarynlu","email":"aarynlu@tencent.com","commits":2}]},"readingTime":{"minutes":16.05,"words":4815},"filePathRelative":"studynotes/java/collection/HashMap源码分析：功能实现.md","localizedDate":"2023年2月15日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> <strong>1. 前言</strong></h2>\\n<blockquote>\\n<p>注：本篇是 HashMap 源码分析的第二篇文章，建议先阅读 <a href=\\"https://aruni.me/studynotes/java/collection/HashMap%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90%EF%BC%9A%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">上一篇文章</a> 后，再阅读本篇会更清晰。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
