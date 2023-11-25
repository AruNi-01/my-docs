const e=JSON.parse('{"key":"v-3efa6159","path":"/backend/java/jvm/compile_and_optimize/%E9%80%83%E9%80%B8%E5%88%86%E6%9E%90.html","title":"逃逸分析","lang":"zh-CN","frontmatter":{"title":"逃逸分析","date":"2023-08-15T00:00:00.000Z","order":1,"category":["Java"],"tag":["JVM"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 前言 在 Java 中，几乎所有的对象都分配在堆上，“几乎” 说明了还是有个别可以不分配到堆上的，那么到底是哪些个别对象呢？这就要涉及到本篇文章要讲的 逃逸分析 了。 1. 什么是逃逸分析？","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/backend/java/jvm/compile_and_optimize/%E9%80%83%E9%80%B8%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"逃逸分析"}],["meta",{"property":"og:description","content":"本文内容 前言 在 Java 中，几乎所有的对象都分配在堆上，“几乎” 说明了还是有个别可以不分配到堆上的，那么到底是哪些个别对象呢？这就要涉及到本篇文章要讲的 逃逸分析 了。 1. 什么是逃逸分析？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T16:55:13.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2023-08-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T16:55:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"逃逸分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-25T16:55:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是逃逸分析？","slug":"_1-什么是逃逸分析","link":"#_1-什么是逃逸分析","children":[]},{"level":2,"title":"2. 栈上分配","slug":"_2-栈上分配","link":"#_2-栈上分配","children":[]},{"level":2,"title":"3. 标量替换","slug":"_3-标量替换","link":"#_3-标量替换","children":[]},{"level":2,"title":"4. 同步消除","slug":"_4-同步消除","link":"#_4-同步消除","children":[]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]},{"level":2,"title":"6. 参考文章","slug":"_6-参考文章","link":"#_6-参考文章","children":[]}],"git":{"createdTime":1700931313000,"updatedTime":1700931313000,"contributors":[{"name":"MECHREVO_GGPRO\\\\AarynLu","email":"hello@0x3f4.run","commits":1}]},"readingTime":{"minutes":4.1,"words":1231},"filePathRelative":"backend/java/jvm/compile_and_optimize/逃逸分析.md","localizedDate":"2023年8月15日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>在 Java 中，<strong>几乎所有的对象都分配在堆上</strong>，“几乎” 说明了还是有个别可以不分配到堆上的，那么到底是哪些个别对象呢？这就要涉及到本篇文章要讲的 <strong>逃逸分析</strong> 了。</p>\\n</div>\\n<h2> 1. 什么是逃逸分析？</h2>\\n","autoDesc":true}');export{e as data};
