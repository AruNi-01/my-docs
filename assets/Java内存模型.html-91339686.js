const e=JSON.parse('{"key":"v-72d1ec3e","path":"/backend/java/concurrency/Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html","title":"Java 内存模型","lang":"zh-CN","frontmatter":{"title":"Java 内存模型","date":"2022-12-16T00:00:00.000Z","order":1,"category":["Java"],"tag":["并发编程"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 1. Java 内存模型基础 1.1 为什么需要并发 我们为什么需要并发？并发编程 Bug 的源头是什么？如何解决并发问题？分享一张图告诉大家：","head":[["meta",{"property":"og:url","content":"https://code.0x3f4.run/backend/java/concurrency/Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"AruNi"}],["meta",{"property":"og:title","content":"Java 内存模型"}],["meta",{"property":"og:description","content":"本文内容 1. Java 内存模型基础 1.1 为什么需要并发 我们为什么需要并发？并发编程 Bug 的源头是什么？如何解决并发问题？分享一张图告诉大家："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T16:55:13.000Z"}],["meta",{"property":"article:author","content":"AruNi_Lu"}],["meta",{"property":"article:tag","content":"并发编程"}],["meta",{"property":"article:published_time","content":"2022-12-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T16:55:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 内存模型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-25T16:55:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AruNi_Lu\\",\\"url\\":\\"https://github.com/AruNi-01\\"}]}"]]},"headers":[{"level":2,"title":"1. Java 内存模型基础","slug":"_1-java-内存模型基础","link":"#_1-java-内存模型基础","children":[{"level":3,"title":"1.1 为什么需要并发","slug":"_1-1-为什么需要并发","link":"#_1-1-为什么需要并发","children":[]},{"level":3,"title":"1.2 并发编程的问题","slug":"_1-2-并发编程的问题","link":"#_1-2-并发编程的问题","children":[]}]},{"level":2,"title":"2. Java 内存模型是什么","slug":"_2-java-内存模型是什么","link":"#_2-java-内存模型是什么","children":[{"level":3,"title":"2.1 JMM 的抽象结构","slug":"_2-1-jmm-的抽象结构","link":"#_2-1-jmm-的抽象结构","children":[]},{"level":3,"title":"2.2 JMM 中的 8 个原子操作","slug":"_2-2-jmm-中的-8-个原子操作","link":"#_2-2-jmm-中的-8-个原子操作","children":[]},{"level":3,"title":"2.3 可见性、有序性问题","slug":"_2-3-可见性、有序性问题","link":"#_2-3-可见性、有序性问题","children":[]},{"level":3,"title":"2.4 重排序问题","slug":"_2-4-重排序问题","link":"#_2-4-重排序问题","children":[]},{"level":3,"title":"2.5 小结","slug":"_2-5-小结","link":"#_2-5-小结","children":[]}]},{"level":2,"title":"3. Happens-Before 规则","slug":"_3-happens-before-规则","link":"#_3-happens-before-规则","children":[{"level":3,"title":"3.1 什么是 Happens-Before","slug":"_3-1-什么是-happens-before","link":"#_3-1-什么是-happens-before","children":[]},{"level":3,"title":"3.2 JMM 的设计","slug":"_3-2-jmm-的设计","link":"#_3-2-jmm-的设计","children":[]}]},{"level":2,"title":"4. 内存屏障","slug":"_4-内存屏障","link":"#_4-内存屏障","children":[{"level":3,"title":"4.1 什么是内存屏障","slug":"_4-1-什么是内存屏障","link":"#_4-1-什么是内存屏障","children":[]},{"level":3,"title":"4.2 JMM 提供的内存屏障","slug":"_4-2-jmm-提供的内存屏障","link":"#_4-2-jmm-提供的内存屏障","children":[]}]},{"level":2,"title":"5. 参考文章","slug":"_5-参考文章","link":"#_5-参考文章","children":[]}],"git":{"createdTime":1700931313000,"updatedTime":1700931313000,"contributors":[{"name":"MECHREVO_GGPRO\\\\AarynLu","email":"hello@0x3f4.run","commits":1}]},"readingTime":{"minutes":16.02,"words":4806},"filePathRelative":"backend/java/concurrency/Java内存模型.md","localizedDate":"2022年12月16日","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. Java 内存模型基础</h2>\\n<h3> 1.1 为什么需要并发</h3>\\n<p>我们为什么需要并发？并发编程 Bug 的源头是什么？如何解决并发问题？分享一张图告诉大家：</p>\\n<p><img src=\\"https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212142038920.png\\" alt=\\"image-20221214203801222\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{e as data};
