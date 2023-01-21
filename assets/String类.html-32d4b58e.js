const t=JSON.parse(`{"key":"v-5c3a1208","path":"/studynotes/java/java%E5%9F%BA%E7%A1%80/String%E7%B1%BB.html","title":"String 类","lang":"zh-CN","frontmatter":{"title":"String 类","icon":"write","category":["Java"],"tag":["Java 基础"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"本文内容 [[toc]] 1. String 基础 String 类表示字符串。Java 程序中的所有字符串字面值，例如 \\"abc\\"，都被实现为该类的实例，因此字符串属于对象。 可以看见，String 实现了如下类： java.io.Serializable：可以被序列化；; Comparable：支持作比较；; CharSequence：描述字符串结...","head":[["meta",{"property":"og:url","content":"https://aruni.me/docs/studynotes/java/java%E5%9F%BA%E7%A1%80/String%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"AruNi's docs"}],["meta",{"property":"og:title","content":"String 类"}],["meta",{"property":"og:description","content":"本文内容 [[toc]] 1. String 基础 String 类表示字符串。Java 程序中的所有字符串字面值，例如 \\"abc\\"，都被实现为该类的实例，因此字符串属于对象。 可以看见，String 实现了如下类： java.io.Serializable：可以被序列化；; Comparable：支持作比较；; CharSequence：描述字符串结..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-20T17:36:52.000Z"}],["meta",{"property":"article:tag","content":"Java 基础"}],["meta",{"property":"article:modified_time","content":"2023-01-20T17:36:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"String 类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-20T17:36:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. String 基础","slug":"_1-string-基础","link":"#_1-string-基础","children":[{"level":3,"title":"1.1 创建字符串的两种方式","slug":"_1-1-创建字符串的两种方式","link":"#_1-1-创建字符串的两种方式","children":[]},{"level":3,"title":"1.2 String 常用方法","slug":"_1-2-string-常用方法","link":"#_1-2-string-常用方法","children":[]}]},{"level":2,"title":"2. String 的不可变性","slug":"_2-string-的不可变性","link":"#_2-string-的不可变性","children":[{"level":3,"title":"2.1 什么是不可变？","slug":"_2-1-什么是不可变","link":"#_2-1-什么是不可变","children":[]},{"level":3,"title":"2.2 探索 String 不可变的真正原因","slug":"_2-2-探索-string-不可变的真正原因","link":"#_2-2-探索-string-不可变的真正原因","children":[]},{"level":3,"title":"2.3 String 为什么要设计成不可变？","slug":"_2-3-string-为什么要设计成不可变","link":"#_2-3-string-为什么要设计成不可变","children":[]}]},{"level":2,"title":"3. String 常见问题","slug":"_3-string-常见问题","link":"#_3-string-常见问题","children":[{"level":3,"title":"3.1 String、StringBuffer、StringBuilder 的区别","slug":"_3-1-string、stringbuffer、stringbuilder-的区别","link":"#_3-1-string、stringbuffer、stringbuilder-的区别","children":[]},{"level":3,"title":"3.2 字符串拼接用 \\"+\\" 还是 StringBuilder？","slug":"_3-2-字符串拼接用-还是-stringbuilder","link":"#_3-2-字符串拼接用-还是-stringbuilder","children":[]},{"level":3,"title":"3.3 String 类型的变量和常量做 \\"+\\" 运算时发生了什么？","slug":"_3-3-string-类型的变量和常量做-运算时发生了什么","link":"#_3-3-string-类型的变量和常量做-运算时发生了什么","children":[]},{"level":3,"title":"3.4 JDK 9 为什么要把 char[] 改为 byte[]？","slug":"_3-4-jdk-9-为什么要把-char-改为-byte","link":"#_3-4-jdk-9-为什么要把-char-改为-byte","children":[]}]},{"level":2,"title":"4. JDK 8 方法区的更变","slug":"_4-jdk-8-方法区的更变","link":"#_4-jdk-8-方法区的更变","children":[{"level":3,"title":"4.1 永久代与元空间","slug":"_4-1-永久代与元空间","link":"#_4-1-永久代与元空间","children":[]},{"level":3,"title":"4.2 字符串延迟加载","slug":"_4-2-字符串延迟加载","link":"#_4-2-字符串延迟加载","children":[]},{"level":3,"title":"4.3 intern() 方法","slug":"_4-3-intern-方法","link":"#_4-3-intern-方法","children":[]}]},{"level":2,"title":"5. 参考文章","slug":"_5-参考文章","link":"#_5-参考文章","children":[]}],"git":{"createdTime":1674236212000,"updatedTime":1674236212000,"contributors":[{"name":"AruNi-01","email":"1298911600@qq.com","commits":1}]},"readingTime":{"minutes":16.16,"words":4847},"filePathRelative":"studynotes/java/java基础/String类.md","localizedDate":"2023年1月20日","autoDesc":true}`);export{t as data};
