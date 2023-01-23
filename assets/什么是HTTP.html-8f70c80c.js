import{_ as i,W as r,X as c,$ as n,Z as a,a0 as t,a1 as s,a2 as p,F as o}from"./framework-1180c510.js";const d={},u={class:"hint-container details"},h=n("summary",null,"本文内容",-1),g={class:"table-of-contents"},v=p(`<h2 id="_1-http-是什么" tabindex="-1"><a class="header-anchor" href="#_1-http-是什么" aria-hidden="true">#</a> 1. HTTP 是什么</h2><p>HTTP 全称是 Hyper Text Transfer Protocol，意为超文本传输协议。它是 <strong>应用层</strong> 一个简单的 <strong>请求-响应</strong> 协议，通常运行在 <strong>TCP 之上</strong>（HTTP 3.0 之前）。</p><p>超文本传输协议可以拆分成以下三个部分：</p><ul><li>超文本：HTTP 传输的内容是「<strong>超文本</strong>」。常见的超文本就是 HTML（超文本标记语言），其中很多标签定义了图片、视频等链接；</li><li>传输：HTTP 是基于 B/S 模式，用于浏览器—服务器 <strong>两端之间的数据传输</strong>；</li><li>协议：HTTP 是一种 <strong>网络协议</strong>，它有一套自己的 <strong>约定和规范</strong>。</li></ul><p>所以，可以使用一句话来总结 HTTP：</p><ul><li>HTTP 是网络世界中在「<strong>两端</strong>」之间「<strong>传输</strong>」文字、图片、视频等「<strong>超文本</strong>」数据的「<strong>约定和规范</strong>」。</li></ul><h2 id="_2-http-发展历程" tabindex="-1"><a class="header-anchor" href="#_2-http-发展历程" aria-hidden="true">#</a> 2. HTTP 发展历程</h2><h3 id="_2-1-http-0-9-—-单行协议" tabindex="-1"><a class="header-anchor" href="#_2-1-http-0-9-—-单行协议" aria-hidden="true">#</a> 2.1 HTTP/0.9 — 单行协议</h3><p>HTTP 0.9 是 HTTP 协议的第一个版本，及其简单，其特点如下：</p><ul><li><p>请求由单行指令构成，请求方法 <strong>只有 GET</strong>，后面跟目标资源的路径，如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /home.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>只能响应 <strong>文本</strong> 内容，不过也支持 HTML 标签，如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HTML</span><span class="token punctuation">&gt;</span></span>
    this is a simple page
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HTML</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>没有请求/响应头和状态码</strong>；</p></li></ul><h3 id="_2-2-http-1-0-—-可扩展性" tabindex="-1"><a class="header-anchor" href="#_2-2-http-1-0-—-可扩展性" aria-hidden="true">#</a> 2.2 HTTP/1.0 — 可扩展性</h3><p>由于 HTTP/0.9 协议的局限性，所以迅速扩展其功能，构建了 HTTP/1.0 版本，其特点如下：</p><ul><li>支持三种请求方法：<strong>GET、POST、HEAD</strong>。HEAD 方法和 GET 一样，只是不返回响应主体，只有响应头，常用于确认 URL 的有效性；</li><li>引入 <strong>HTTP 头</strong> 的概念，请求和响应都有对应的头部消息；</li><li>可传输除文本外的其他 <strong>超链接</strong>，如图片、视频、链接等，<strong>使用 <code>Content-Type</code> 头标识</strong>；</li><li>引入 <strong>状态码</strong>，可以方便知道请求的状态是成功还是失败；</li></ul><p>现在一个经典的请求—响应的内容如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/mypage.html</span> <span class="token http-version property">HTTP/1.0</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">NCSA_Mosaic/2.0 (Windows 3.1)</span></span>

200 OK
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Tue, 15 Nov 1994 08:12:31 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">CERN/3.0 libwww/2.17</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html</span></span>
<span class="token text-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HTML</span><span class="token punctuation">&gt;</span></span>
  一个包含图片的页面
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IMG</span> <span class="token attr-name">SRC</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/myimage.gif<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HTML</span><span class="token punctuation">&gt;</span></span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来第二个连接请求获取图片：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/myimage.gif</span> <span class="token http-version property">HTTP/1.0</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">NCSA_Mosaic/2.0 (Windows 3.1)</span></span>

200 OK
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Tue, 15 Nov 1994 08:12:32 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">CERN/3.0 libwww/2.17</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/gif</span></span>
(这里是图片内容)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是 HTTP/1.0 也有很大的 <strong>缺点</strong>：</p><ul><li><strong>短连接</strong>：一次请求—响应对应一次连接，下次请求又要重新建立连接；</li><li><strong>队头阻塞</strong>：一个请求一个响应的应答方式，前一个请求的响应未到达则不能再次发送请求；</li></ul><h3 id="_2-3-http-1-1-—-标准化" tabindex="-1"><a class="header-anchor" href="#_2-3-http-1-1-—-标准化" aria-hidden="true">#</a> 2.3 HTTP/1.1 — 标准化</h3><p>HTTP/1.1 在 HTTP/1.0 的基础上，进行了许多改进，其特点如下：</p><ul><li>默认使用 <strong>长连接</strong>（Connection 头部标识），使得连接可以复用，节省了多次连接的时间；</li><li>支持 <strong>管道网络传输</strong>，允许在前一个请求未响应之前就发送第二个请求； <ul><li>注：解决了请求的队头阻塞，但是 <strong>未解决响应的队头阻塞</strong>；</li></ul></li><li>引入 <strong>内容协商机制</strong>，包括语言、编码、类型等，在 HTTP 请求头中指定；</li><li>凭借 <strong>Host 头部</strong>，能够使不同域名配置在同一个 IP 地址的服务器上；</li></ul><p>一个典型的请求—响应流程，所有请求都通过一个连接实现，看起来就像这样：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/en-US/docs/Glossary/Simple_header</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">developer.mozilla.org</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">en-US,en;q=0.5</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip, deflate, br</span></span>
<span class="token header"><span class="token header-name keyword">Referer</span><span class="token punctuation">:</span> <span class="token header-value">https://developer.mozilla.org/en-US/docs/Glossary/Simple_header</span></span>

200 OK
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Keep-Alive</span></span>
<span class="token header"><span class="token header-name keyword">Content-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Wed, 20 Jul 2016 10:55:30 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Etag</span><span class="token punctuation">:</span> <span class="token header-value">&quot;547fa7e369ef56031dd3bff2ace9fc0832eb251a&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Keep-Alive</span><span class="token punctuation">:</span> <span class="token header-value">timeout=5, max=1000</span></span>
<span class="token header"><span class="token header-name keyword">Last-Modified</span><span class="token punctuation">:</span> <span class="token header-value">Tue, 19 Jul 2016 00:59:33 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">Apache</span></span>
<span class="token header"><span class="token header-name keyword">Transfer-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">chunked</span></span>
<span class="token header"><span class="token header-name keyword">Vary</span><span class="token punctuation">:</span> <span class="token header-value">Cookie, Accept-Encoding</span></span>

(content)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在同一个连接中，继续请求静态资源：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/static/img/header-background.png</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">developer.mozilla.org</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">*/*</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">en-US,en;q=0.5</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip, deflate, br</span></span>
<span class="token header"><span class="token header-name keyword">Referer</span><span class="token punctuation">:</span> <span class="token header-value">https://developer.mozilla.org/en-US/docs/Glossary/Simple_header</span></span>

200 OK
<span class="token header"><span class="token header-name keyword">Age</span><span class="token punctuation">:</span> <span class="token header-value">9578461</span></span>
<span class="token header"><span class="token header-name keyword">Cache-Control</span><span class="token punctuation">:</span> <span class="token header-value">public, max-age=315360000</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">3077</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">image/png</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Thu, 31 Mar 2016 13:34:46 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Last-Modified</span><span class="token punctuation">:</span> <span class="token header-value">Wed, 21 Oct 2015 18:27:50 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">Apache</span></span>

(image content of 3077 bytes)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是 HTTP/1.1 也有一些 <strong>缺点</strong>：</p><ul><li><strong>请求/响应头部未经压缩就发送</strong>，而且就算每次请求的头部相同，也会 <strong>发送冗长首部</strong>；</li><li>虽然请求支持管道传输，但是 <strong>服务器响应还是按照请求的顺序响应</strong>，所以存在 <strong>响应的队头阻塞</strong>；</li><li>请求只能从客户端开始，<strong>服务器不能主动推送消息</strong>；</li><li><strong>明文传输</strong>，数据不安全，存在被 <strong>窃听、篡改、冒充</strong> 的风险；</li></ul><h3 id="_2-4-http-2-0-—-表现优异" tabindex="-1"><a class="header-anchor" href="#_2-4-http-2-0-—-表现优异" aria-hidden="true">#</a> 2.4 HTTP/2.0 — 表现优异</h3><p>HTTP/2.0 解决了 HTTP/1.1 的缺点，可以说是一个非常优异的版本了。其改进的点如下：</p><ul><li><strong>头部压缩</strong>：会压缩头部信息，如果发出多个请求头部都是相似的，协议会消除重复的部分；</li><li><strong>Stream 数据流</strong>：每个请求或响应的所有数据包，称为一个数据流，数据流的帧可以乱序发送，通过 Stream ID 来组装成一条 HTTP 消息；</li><li><strong>多路复用</strong>：可以在一个 TCP 连接中并发多个 HTTP 请求或响应，不需要按顺序一一对应； <ul><li>解决了 <strong>响应的队头阻塞</strong>，可以优先响应处理好的请求；</li></ul></li><li><strong>服务器可以主动推送消息</strong>；</li><li><strong>二进制格式</strong>：请求头和数据体都是二进制，无需进行报文到二进制的转换，增加了数据的传输效率；</li><li><strong>基于 HTTPS</strong>：安全性得到了保障；</li></ul><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121449799.png" alt="image-20221212144904126"></p><p>HTTP/2.0 是现在使用的最广泛的版本。</p><p>但其实 HTTP/2.0 并 <strong>没有完全解决队头阻塞</strong> 问题，因为 HTTP 是基于 TCP 的，而 TCP 是安全可靠的协议，所以 <strong>队头阻塞问题存在 TCP 这层</strong>：</p><ul><li>在发生报文丢失时，TCP 层没有收到完整连续的数据，则内核缓冲区中已到达的数据也不能返回给 HTTP 层，等丢失的数据到达后，HTTP 层才能从内核缓冲区中获取数据；</li><li>而且，如果接收方没有及时回复 ACK，那么发送方的滑动窗口也不能继续向前滑动，因此发送方也会阻塞。</li></ul><p>所以一旦发生了 <strong>丢包</strong> 现象，就会触发 TCP 的 <strong>重传机制</strong>，这样在一个 TCP 连接中的 <strong>所有的 HTTP 请求都必须等待这个丢了的包被重传回来</strong>。</p><h3 id="_2-5-http-3-0-—-强势来袭" tabindex="-1"><a class="header-anchor" href="#_2-5-http-3-0-—-强势来袭" aria-hidden="true">#</a> 2.5 HTTP/3.0 — 强势来袭</h3><p>为了解决 HTTP/2.0 TCP 层的队头阻塞问题，HTTP/3.0 直接抛弃 TCP，采用了 UDP。UDP 发送是不管顺序和丢包的，所以不会出现像 HTTP/2.0 的队头阻塞问题。</p><p>为了保证数据的可靠性，HTTP/3.0 引入了 QUIC 协议，它具有如下特点：</p><ul><li>无队头阻塞；</li><li>更快的连接建立；</li><li>连接迁移；</li></ul><p>但是 HTTP/3.0 引入的 QUIC 协议比较新颖，因此很多网络设备其实识别不出来，只会将它当作 UDP 协议来处理，所以现在还并不适用，但未来可期 ~</p><h2 id="_3-uri-和-url" tabindex="-1"><a class="header-anchor" href="#_3-uri-和-url" aria-hidden="true">#</a> 3. URI 和 URL</h2><h3 id="_3-1-uri-是什么" tabindex="-1"><a class="header-anchor" href="#_3-1-uri-是什么" aria-hidden="true">#</a> 3.1 URI 是什么</h3><p>URI 全称 Uniform Resource Identifier，意为统一资源 <strong>标志符</strong>，标识了网络中的某个对象或者集合。</p><p>注意这里的「标志符」，下面在讲 URL 时会提到。</p><p>URI 可以是 Web 系统中的某个图片地址，也可以是某个人的邮箱地址等等。</p><div class="hint-container tip"><p class="hint-container-title">URI 的格式</p></div><p>下面的 scheme 指的是协议，URI 的通用格式没有太多限制，一般是以 scheme 开头，冒号 &quot;:&quot; 分隔开：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>&lt;scheme&gt;:&lt;scheme-specific-part&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>虽然 URI 的格式没有怎么限制，但是不同 scheme 一般会遵循下面的格式来定义：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>&lt;scheme&gt;://&lt;authority&gt;&lt;path&gt;?&lt;query&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以 scheme = http 为例，scheme 格式如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//www.google.com:80/search?q=什么是URI</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http 的 <code>&lt;authority&gt;</code> 一般不会写在路径上，所以上面的 scheme 格式解析如下：</p>`,54),k=n("li",null,[n("code",null,"<scheme>"),s(" 为 http；")],-1),m=n("code",null,"<path>",-1),T={href:"http://www.google.com:80/search%EF%BC%9B",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,[n("code",null,"<query>"),s(" 为 q=什么是URI；")],-1),_=p('<p>是不是发现，这就是我们通常在地址栏填写的地址，只不过现在大多都是使用 https。</p><p>下面再列举一些其他的 RUI 用法：</p><ul><li><code>ftp://192.168.10.1/baidu/baidu123.txt</code>；</li><li><code>telnet://myhome.me/0</code>；</li></ul><p>所以 scheme（协议）有很多，http 只是其中的一种协议。</p><h3 id="_3-2-url" tabindex="-1"><a class="header-anchor" href="#_3-2-url" aria-hidden="true">#</a> 3.2 URL</h3><p>前面我们知道了 URI 是网络中用于标识某个对象的规约，URI 包含了多个 <code>&lt;scheme&gt;</code>，所以 <strong>URL 是 scheme = http 的 URI</strong>。</p><p>URL 和 URI 只差了一个字母，Location 和 Identifier：</p><ul><li><strong>Location</strong>：定位，着重强调的是 <strong>位置信息</strong>；</li><li><strong>Identifier</strong>：标识符，只是一种 <strong>全局唯一的昵称</strong>。</li></ul><p>URI 就好比告诉了你某个东西表示的是什么，而 RUL 则是具体的告诉你这个东西的具体地址在哪儿。</p><p>例如，中国就是一个标识符，它表示一个国家，但是只通过这个标识符，你能知道这个国家在哪儿吗？</p><p>而如果把定位告诉你，比如中国的经纬度位置，这就是定位，你就知道中国所处的位置信息。</p><h2 id="_4-http-常见字段" tabindex="-1"><a class="header-anchor" href="#_4-http-常见字段" aria-hidden="true">#</a> 4. HTTP 常见字段</h2><div class="hint-container tip"><p class="hint-container-title">Host 字段</p></div><p>客户端发送请求时，<strong>Host 用来指定服务器的域名</strong>，能够使 <strong>不同域名配置在同一个 IP 地址的服务器上</strong>。</p><p>因此，可以将请求发往 <strong>同一个 IP 地址服务器的不同网站</strong>：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121516304.png" alt="image-20221212151656349"></p><div class="hint-container tip"><p class="hint-container-title">Connection 字段</p></div><p>Connection 字段主要用于客户端要求服务器使用长连接，以便其他请求复用。</p><p>HTTP/1.1 版本的默认连接都是持久连接，但为了兼容老版本的 HTTP，需要指定 Connection 首部字段的值为 Keep-Alive。</p><p>如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121638259.png" alt="image-20221212163831330"></p><div class="hint-container tip"><p class="hint-container-title">Content-Type 字段</p></div><p>Content-Type 用于表示 <strong>响应报文的数据格式</strong>，如下表示返回的是一个网页，编码为 utf-8：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121525657.png" alt="image-20221212152545676"></p><p>客户端在请求时，可以通过 Accept 字段声明自己可以接受的数据格式，如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121527335.png" alt="image-20221212152714287"></p><div class="hint-container tip"><p class="hint-container-title">Content-Length</p></div><p>Content-Length 字段表示 <strong>响应数据的长度</strong>，使用此字段可以告诉浏览器本次响应的数据长度，剩下的数据是下一个响应了。</p><p>如下：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121622380.png" alt="image-20221212162241403"></p><div class="hint-container tip"><p class="hint-container-title">Content-Encoding 字段</p></div><p>Content-Encoding 字段表示数据的压缩方法，表示服务器响应的数据使用了什么压缩格式。</p><p>如下图所示，采用了 gzip 压缩格式：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121640295.png" alt="image-20221212164018273"></p><p>和 Content-Type 类似，Content-Encoding 在请求中也有一个对应的字段 Accept-Encoding，表示客户端能接收的压缩格式有哪些。</p><p>如下所示，能接收 gzip，deflate，br 压缩格式：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121642834.png" alt="image-20221212164216000"></p><h2 id="_5-http-常见状态码" tabindex="-1"><a class="header-anchor" href="#_5-http-常见状态码" aria-hidden="true">#</a> 5. HTTP 常见状态码</h2><p>HTTP 有五大类状态码，如下所示：</p><p><img src="https://run-notes.oss-cn-beijing.aliyuncs.com/notes/202212121723272.png" alt="image-20221212172332192"></p><p>下面介绍一些常见的状态码。</p><div class="hint-container info"><p class="hint-container-title">2XX — 成功：</p><ul><li>200 OK：<strong>请求正常处理</strong></li><li>204 No Content：请求处理成功，但 <strong>没有资源可返回</strong></li><li>206 Partial Content：对某资源的 <strong>部分请求</strong>，表示客户端进行了范围请求，响应报文中包含由 Content-Range 指定范围的实体内容</li></ul></div><div class="hint-container info"><p class="hint-container-title">3XX — 重定向：</p><ul><li>301 Moved Permanently：<strong>永久重定向</strong> — 资源的 URI 已更新，让客户端也更新下</li><li>302 Found：<strong>临时重定向</strong> — 资源的 URI 临时定位到了其他的位置</li><li>304 Not Modified：<strong>与重定向无关</strong>，自从上次访问后，服务器对该资源没有做过改变，让浏览器 <strong>使用未过期的本地缓存</strong></li></ul></div><div class="hint-container info"><p class="hint-container-title">4XX — 客户端错误：</p><ul><li>400 Bad Request：服务器 <strong>无法理解该请求</strong>，请求报文可能有语法错误</li><li>401 Unauthorized：<strong>没有请求权限</strong>，通常浏览器会弹出一个对话框，让用户进行登录认证</li><li>403 Forbidden：<strong>不允许访问该资源</strong>，请求的资源被服务器拒绝了</li><li>404 Not Found：服务器上 <strong>不存在该资源</strong>，可能是路径错误等</li></ul></div><div class="hint-container info"><p class="hint-container-title">5XX — 服务端错误：</p><ul><li>500 Internal Server Error：<strong>服务器内部资源出现故障</strong>，可能是服务端出现了 Bug 等</li><li>502 Bad Gateway：<strong>网关错误</strong>，在软件架构中网关通常指用于分发请求的代理服务，如 Nginx 作为代理接收请求，再分发到后面的具体服务器。502 指代理服务器正常，但是 <strong>代理要去访问源站时发生了错误</strong>，代理服务器接收到无效的响应</li><li>503 Service Unavailable：<strong>服务器正忙</strong>，说明服务器超负载或停机维护了</li><li>504 Gateway Timeout：<strong>网关超时，指代理服务器请求源服务器超时了</strong></li></ul></div><h2 id="_6-http-请求方法" tabindex="-1"><a class="header-anchor" href="#_6-http-请求方法" aria-hidden="true">#</a> 6. HTTP 请求方法</h2><h3 id="_6-1-常见-http-请求方法" tabindex="-1"><a class="header-anchor" href="#_6-1-常见-http-请求方法" aria-hidden="true">#</a> 6.1 常见 HTTP 请求方法</h3><p>HTTP 请求方法一览：</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>GET</td><td><strong>请求指定的资源</strong>，用于数据的读取</td></tr><tr><td>HEAD</td><td>类似于 GET，只是不返回主体部分，<strong>只返回响应头</strong>，用于确认 URL 的有效性和测试服务器的性能</td></tr><tr><td>POST</td><td>向指定资源 <strong>提交数据</strong>，请求服务器 <strong>创建资源</strong>，如：表单数据提交、文件上传等，请求数据会被包含在请求体中。</td></tr><tr><td>PUT</td><td>客户端请求的数据 <strong>替换</strong> 服务端的目标资源，<strong>但资源不存在时也会创建资源</strong></td></tr><tr><td>DELETE</td><td><strong>删除</strong> 指定的资源</td></tr><tr><td>PATCH</td><td>PUT 方法的补充，对资源进行 <strong>局部更新</strong></td></tr></tbody></table><h3 id="_6-2-幂等和安全的方法" tabindex="-1"><a class="header-anchor" href="#_6-2-幂等和安全的方法" aria-hidden="true">#</a> 6.2 幂等和安全的方法</h3><div class="hint-container tip"><p class="hint-container-title">什么是幂等？</p></div><p>HTTP 方法的幂等性是指 <strong>一次和多次请求某一个资源，得到的结果是相同的</strong>。</p><p>在 HTTP 方法中，具有幂等性的方法有如下：</p><ul><li>GET：GET 方法用于获取资源，不会对资源产生其他影响，因此是幂等的；</li><li>DELETE：DELETE 方法用于删除资源，虽然会对资源产生影响，但是也满足幂等性。因为 <strong>调用一次和多次对该资源产生的影响是相同的</strong>。</li></ul><p>POST 和 PUT 单独介绍，因为他们比较容易混淆。</p><p>首先要明确一点，POST 和 PUT <strong>都能够创建资源</strong>，PUT 方法在资源不存在时也会创建该资源。</p><p>它们都能创建资源，主要 <strong>区别</strong> 在于：</p><ul><li>N 次 POST 请求，就会 <strong>创建 N 份资源</strong>，它们具有 <strong>不同的 URI</strong>；</li><li>N 次 PUT 请求，<strong>只会在资源不存在时才创建一份资源</strong>，后面的 N - 1 次 PUT 请求只会进行修改，只是修改前和修改后的资源相同罢了；</li></ul><p>因此，POST 和 PUT 的幂等性也很容易判断出来了，即 <strong>POST 不具有，而 PUT 具有</strong>。</p><p>幂等性也是 POST 和 PUT 的 <strong>真正区别</strong>。</p><div class="hint-container tip"><p class="hint-container-title">什么是安全？</p></div><p>HTTP 方法的安全性指的是 <strong>请求方法不会改变服务器的状态，则该方法是安全的</strong>。</p><p>所以具有安全性的方法就只能用于 <strong>只读操作</strong>，即 GET 和 HEAD。</p><p>当然，除了这些常见的方法，还有一些其他方法，例如 OPTIONS 和 TRACE 也是安全的。</p><h2 id="_7-参考文章" tabindex="-1"><a class="header-anchor" href="#_7-参考文章" aria-hidden="true">#</a> 7. 参考文章</h2>',65),P={href:"https://xiaolincoding.com/network/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.imooc.com/wiki/httplesson/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"};function f(w,U){const e=o("router-link"),l=o("ExternalLinkIcon");return r(),c("div",null,[n("details",u,[h,n("nav",g,[n("ul",null,[n("li",null,[a(e,{to:"#_1-http-是什么"},{default:t(()=>[s("1. HTTP 是什么")]),_:1})]),n("li",null,[a(e,{to:"#_2-http-发展历程"},{default:t(()=>[s("2. HTTP 发展历程")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#_2-1-http-0-9-—-单行协议"},{default:t(()=>[s("2.1 HTTP/0.9 — 单行协议")]),_:1})]),n("li",null,[a(e,{to:"#_2-2-http-1-0-—-可扩展性"},{default:t(()=>[s("2.2 HTTP/1.0 — 可扩展性")]),_:1})]),n("li",null,[a(e,{to:"#_2-3-http-1-1-—-标准化"},{default:t(()=>[s("2.3 HTTP/1.1 — 标准化")]),_:1})]),n("li",null,[a(e,{to:"#_2-4-http-2-0-—-表现优异"},{default:t(()=>[s("2.4 HTTP/2.0 — 表现优异")]),_:1})]),n("li",null,[a(e,{to:"#_2-5-http-3-0-—-强势来袭"},{default:t(()=>[s("2.5 HTTP/3.0 — 强势来袭")]),_:1})])])]),n("li",null,[a(e,{to:"#_3-uri-和-url"},{default:t(()=>[s("3. URI 和 URL")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#_3-1-uri-是什么"},{default:t(()=>[s("3.1 URI 是什么")]),_:1})]),n("li",null,[a(e,{to:"#_3-2-url"},{default:t(()=>[s("3.2 URL")]),_:1})])])]),n("li",null,[a(e,{to:"#_4-http-常见字段"},{default:t(()=>[s("4. HTTP 常见字段")]),_:1})]),n("li",null,[a(e,{to:"#_5-http-常见状态码"},{default:t(()=>[s("5. HTTP 常见状态码")]),_:1})]),n("li",null,[a(e,{to:"#_6-http-请求方法"},{default:t(()=>[s("6. HTTP 请求方法")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#_6-1-常见-http-请求方法"},{default:t(()=>[s("6.1 常见 HTTP 请求方法")]),_:1})]),n("li",null,[a(e,{to:"#_6-2-幂等和安全的方法"},{default:t(()=>[s("6.2 幂等和安全的方法")]),_:1})])])]),n("li",null,[a(e,{to:"#_7-参考文章"},{default:t(()=>[s("7. 参考文章")]),_:1})])])])]),v,n("ul",null,[k,n("li",null,[m,s(" 为 "),n("a",T,[s("www.google.com:80/search；"),a(l)])]),b]),_,n("ul",null,[n("li",null,[n("p",null,[n("a",P,[s("图解网络 —— HTTP 篇"),a(l)])])]),n("li",null,[n("p",null,[n("a",H,[s("HTTP 入门教程"),a(l)])])]),n("li",null,[n("p",null,[n("a",y,[s("MDN Web Docs"),a(l)])])])])])}const x=i(d,[["render",f],["__file","什么是HTTP.html.vue"]]);export{x as default};
