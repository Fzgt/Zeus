import{_ as d,c as p,J as t,m as e,a as s,w as o,ao as l,E as n,o as _}from"./chunks/framework.E0VnI2yM.js";const u="/assets/canvas-referenced-oss-cross-origin-image-as-source-img-element-caused-cors-error-record-screenshot-01.BXWdqQQh.png",se=JSON.parse('{"title":"记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题","description":"","frontmatter":{"tags":["开发/前端","计算机/网络/跨域","计算机/网络/跨域/CORS","开发/标记语言/HTML","开发/标记语言/HTML/Canvas","基础设施/存储/对象存储/阿里云/OSS","基础设施/云服务商/阿里云/Aliyun"]},"headers":[],"relativePath":"笔记/🛠️ 开发/记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题.md","filePath":"笔记/🛠️ 开发/记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题.md"}'),g={name:"笔记/🛠️ 开发/记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题.md"},k=e("h1",{id:"记一次-canvas-内引用了-oss-域的图片标签绘制时出现的-cors-错误问题",tabindex:"-1"},[s("记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题 "),e("a",{class:"header-anchor",href:"#记一次-canvas-内引用了-oss-域的图片标签绘制时出现的-cors-错误问题","aria-label":'Permalink to "记一次 Canvas 内引用了 OSS 域的图片标签绘制时出现的 CORS 错误问题"'},"​")],-1),A=l('<h5 id="文档版本" tabindex="-1">文档版本 <a class="header-anchor" href="#文档版本" aria-label="Permalink to &quot;文档版本&quot;">​</a></h5><table><thead><tr><th>编辑者</th><th>版本</th><th>变更日期</th><th>变更说明</th></tr></thead><tbody><tr><td>Neko</td><td>v1.0.0</td><td>2022-09-02</td><td>创建</td></tr></tbody></table><h3 id="文档兼容性" tabindex="-1">文档兼容性 <a class="header-anchor" href="#文档兼容性" aria-label="Permalink to &quot;文档兼容性&quot;">​</a></h3><p>无</p><h2 id="起因" tabindex="-1">起因 <a class="header-anchor" href="#起因" aria-label="Permalink to &quot;起因&quot;">​</a></h2><p>小音和我说她使用的 <code>html2canvas</code> 引用的图片会随机丢失，有时候能稳定复现，有时候又会正常，但是总是有图片会丢失。</p>',6),f=e("code",null,"Access-Control-Allow-Origin: *",-1),C=e("code",null,"useCORS: true",-1),S=l(`<ul><li><code>toDataURL()</code></li><li><code>toBlob()</code></li><li><code>getImageData()</code></li></ul><p>这影响了我们需求的开发和实现。</p><h2 id="解决过程" tabindex="-1">解决过程 <a class="header-anchor" href="#解决过程" aria-label="Permalink to &quot;解决过程&quot;">​</a></h2><h3 id="检查-cors" tabindex="-1">检查 CORS <a class="header-anchor" href="#检查-cors" aria-label="Permalink to &quot;检查 CORS&quot;">​</a></h3><p>我先去检查了 OSS 的设置，发现 OSS 已经在 UAT 环境下配置好了 CORS 策略，并且允许了所有域访问、使用所有方法、包含所有 Header。</p><p>于是我又通过命令行直接检查了相关资源的 OPTIONS 请求结果：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Origin: https://localhost:3333&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;Access-Control-Request-Method: GET&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> OPTIONS</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;https://oss.domain/image_key.jpg&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -v</span></span></code></pre></div><p>发现服务器确实有好好返回期望的 <code>Access-Control-Allow-Origin: *</code> 头部</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> HTTP/1.1 200 OK</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Server: AliyunOSS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Date: Fri, 02 Sep 2022 08:57:21 GMT</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Content-Length: 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Connection: keep-alive</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> x-oss-request-id: 6311C571DC44E0353601CA74</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Access-Control-Allow-Origin: </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Access-Control-Allow-Methods: GET, POST, PUT, DELETE, HEAD</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Access-Control-Max-Age: 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> x-oss-server-time: 0</span></span></code></pre></div><p>所以能排除部分 OSS 的问题了。</p><h3 id="走弯路" tabindex="-1">走弯路 <a class="header-anchor" href="#走弯路" aria-label="Permalink to &quot;走弯路&quot;">​</a></h3>`,11),v=e("code",null,"<img>",-1),m=e("code",null,"crossorigin",-1),b=l("<p>由于我一开始没有正确理解 html2canvas 的工作原理，导致在这里我期望能够通过给 DOM 树中的 <code>&lt;img&gt;</code> 标签添加 <code>crossorigin=&quot;anonymous&quot;</code> 属性配置来解决问题，但实际上问题根源不在这里，添加了属性配置也无济于事。 实际的情况是，由 <code>&lt;img&gt;</code> 标签参与的 DOM 树需要预先渲染一遍到浏览器中，然后再被 html2canvas 库读取到内部，再去使用独属于 <code>&lt;canvas&gt;</code> 标签上下文的处理逻辑来处理图片，此时此刻图片又会再次被通过 XHR 请求读取一次，而就像先前提到的 MDN 文档中所描述的：<code>&lt;canvas&gt;</code> 标签的安全要求远比 <code>&lt;img&gt;</code> 高得多，如果此时此刻出现了 CORS 错误，那么 canvas 的图片将会丢失，无法被渲染出来。对应的，也会影响到 <code>toDataURL()</code> 的调用。</p><p>所以我们不断去删除属性，开关浏览器开发者工具中网络选项卡的「停用缓存」选项来尝试稳定复现该问题，甚至一度怀疑是 Chrome 的缓存策略写的有 Bug 导致的。不过我们还是想的太简单，这个问题不仅在 Chrome 上能够出现，在首次打开开发环境网站的 Safari 中也有出现，观察请求序列和记录的时候能发现，部分的图片资源请求有时候会有 <code>Access-Control-Allow-Origin: *</code> 头存在，有时候又会没有，这个问题在图片资源来源为内存缓存、网络、磁盘缓存的请求中都能找到，而且结果经常反复闪烁，有时候有有时候无，但是如果一旦打开「停用缓存」选项，这个问题又会消失。</p><p>这个问题一度陷入无法解决的僵局之中。</p><p>我后来又找到两篇内容讲述了类似的遭遇，分别是：</p>",4),O=l('<p>他们都或多或少提到了：</p><blockquote><p>It works well whether <code>crossorigin=&quot;anonymous&quot;</code> or not, but sometimes it works, sometimes not either.</p></blockquote><p>亦或是</p><blockquote><p>If I add the <code>crossOrigin=&quot;anonymous&quot;</code> I get the CORS error. If I leave that out, the images display but then the <code>html2canvas</code> plugin throws a CORS error as well when trying to generate the &quot;screenshot&quot;.</p></blockquote><p>这些情况都太过相似，我甚至一度以为就是 OSS 的服务端缓存实现问题导致了这个问题。 而他们的解决方案都是：<strong>在请求资源 URL 中添加一段随机字符串作为 query 参数进行传递</strong>。如果从已经解决了问题的我们的视角来看，这样的方法也确实能够解决缓存问题，只不过是从请求的资源 URL 上下手罢了，但是不太优雅，也许我们应该再探究探究问题的原因所在。</p><p>小音在这个时候提了一个问题：</p><p><strong>如果是 CDN 或者是服务端请求导致的缓存滞后或是延迟问题，为什么同一个资源有时候有 CORS 错误，有时候无 CORS 错误呢？</strong></p><p>这个问题其实我也不太清楚，也就是在这个时候我才坚定下来这是浏览器侧的缓存错误导致的问题，可是，如何修复呢？</p><h3 id="偶然的一瞥" tabindex="-1">偶然的一瞥 <a class="header-anchor" href="#偶然的一瞥" aria-label="Permalink to &quot;偶然的一瞥&quot;">​</a></h3>',9),B=e("strong",null,[e("code",null,"<img>"),s(" 标签能够加 crossorigin 属性来强制 CORS，那 CSS 里面的图片怎么办？")],-1),w=e("p",null,"意思是说：",-1),y=e("blockquote",null,[e("p",null,[s("在做了一些研究之后，我确定真正的问题是即使将 Amazon S3 配置为支持 CORS 的情况下，Amazon S3 依然没有"),e("strong",null,'自动设置 "Vary:Origin "头'),s("。如果有人知道如何让S3做到这一点，那也将是一个很好的答案。")])],-1),P=e("p",null,[s("咦，这个 "),e("code",null,"Vary: Origin"),s(" 看起来非常眼熟，之前在 OSS 的跨域配置中看到过，但是从未仔细了解过具体的含义。但是我们能在另一个回答中能找到些许线索：")],-1),T=e("code",null,"Access-Control-Allow-Origin",-1),q=e("code",null,"Vary: Origin",-1),R=e("code",null,"Access-Control-Allow-Origin",-1),D=e("p",null,"其含义是：",-1),N=e("blockquote",null,[e("p",null,[s("是的，如果一个请求可能包含有不同值的 "),e("code",null,"Access-Control-Allow-Origin"),s("，即使请求没有包含 "),e("code",null,"Access-Control-Allow-Origin"),s(" 头的响应，那么 CDN 应该总是包含返回 "),e("code",null,"Vary:Origin"),s(" 头部，你的分析是正确的：如果头信息不总是存在，就有可能用不正确的值填充缓存。")])],-1),E=e("code",null,"Vary",-1),V=e("blockquote",null,[e("p",null,[e("strong",null,[e("code",null,"Vary")]),s(" 是一个 HTTP 响应头部信息，它决定了对于未来的一个请求头，应该用一个缓存的回复 (response) 还是向源服务器请求一个新的回复。")])],-1),F=e("p",null,"这句话可能不太能说明问题，我们继续看 MDN 提供的下面的例子：",-1),I=e("code",null,"Vary",-1),x=e("code",null,"User-Agent",-1),H=e("p",null,[s("即此时需要设置为 "),e("code",null,"Vary: User-Agent")],-1),z=e("p",null,[s("也就是说如果我们需要根据 User-Agent 的不同指挥浏览器去读写缓存，那么我们就使用 "),e("code",null,"Vary: User-Agent"),s(" 头来实现。")],-1),M=e("p",null,[s("此刻我们再去看看阿里云 OSS 的跨域设置选项当中的最后一项下面的注释："),e("strong",null,"返回 Vary: Origin")],-1),U=e("p",null,[s("关键的信息是："),e("strong",null,"如果浏览器同时存在 CORS 和非 CORS 请求，请启用该选项否则会出现跨域问题。")],-1),L=e("code",null,"Origin: <请求来源域名>",-1),j=e("code",null,"Vary: Origin",-1),G=l('<blockquote><p>根据不同的 Origin 值采用不同的缓存。</p></blockquote><p>而 CORS 是会指定 Origin 头的，非 CORS 不会，那么此刻这两种看似相似的请求就能够被浏览器区分了，浏览器将能以此够决断对于未来的一个请求头，应该用一个缓存的响应还是向源服务器请求一个新的响应。此处的答案就是：<strong>它能知道应该采用 CORS 的响应而不是非 CORS 的响应</strong>。</p><p>如果理论正确，浏览器中的缓存错乱问题就能被解决了。（找答案找的歪打正着了属于是）</p><h2 id="修复" tabindex="-1">修复 <a class="header-anchor" href="#修复" aria-label="Permalink to &quot;修复&quot;">​</a></h2><p>在阿里云 OSS 的 Bucket 后台中选择「权限设置」-「跨域设置」-「跨域设置」-「编辑」-「勾选 <strong>返回 Vary: Origin</strong>」。</p><p>勾选后重新刷新浏览器缓存，再次尝试复现先前的错误，能够发现问题已经被解决了。</p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>',7),X=e("h2",{id:"文件历史",tabindex:"-1"},[s("文件历史 "),e("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function W(Q,Y,J,$,K,Z){const i=n("NolebasePageProperties"),a=n("VPNolebaseInlineLinkPreview"),r=n("NolebaseUnlazyImg"),h=n("NolebaseGitContributors"),c=n("NolebaseGitChangelog");return _(),p("div",null,[k,t(i),A,e("p",null,[s("调查浏览器的开发者工具的控制台的时候发现是图片相关的响应未正确按照 CORS 期望的设定返回 "),f,s(" 头部，触发了 CORS 策略错误导致。 而如果不使用 CORS 策略（即打开 html2canvas 配置选项中的 "),C,s(" 选项）请求图片的话，会导致 canvas 变成不安全的 canvas，或者说是被污染的 canvas（参见："),t(a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("启用了 CORS 的图片 - HTML（超文本标记语言） | MDN")]),_:1}),s("），在这样的情况下，将不可使用 canvas 上下文 context 调用下列函数：")]),S,e("p",null,[s("在网络上搜索相关资料的时候发现大多数人都提到了一个之前我们开发时忽略的 "),v,s(" 属性 "),m,s("（参考资料："),t(a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin#value",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("HTMLImageElement.crossOrigin - Web APIs | MDN")]),_:1}),s("）。")]),b,e("ul",null,[e("li",null,[e("p",null,[t(a,{href:"https://stackoverflow.com/questions/29105249/html2canvas-with-cors-in-s3-and-cloudfront",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("javascript - HTML2Canvas with CORS in S3 and CloudFront - Stack Overflow")]),_:1})])]),e("li",null,[e("p",null,[t(a,{href:"https://stackoverflow.com/questions/46257444/how-to-avoid-cors-error-when-drawing-image-onto-canvas",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("javascript - How to avoid CORS error when drawing image onto canvas? - Stack Overflow")]),_:1})])])]),O,e("p",null,[s("先前的问题还是没有解决，于是我去继续寻找其他问题的答案。有另一个问题是小音询问我的："),B,s("。说实话我也不知道这个问题的答案，于是在网络上搜索。也就是在这个时候，我在 "),t(a,{href:"https://stackoverflow.com/questions/21638606/using-cors-headers-with-css-background-image",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("cross domain - Using CORS headers with CSS background-image - Stack Overflow")]),_:1}),s(" StackOverflow 问答上见到了一句评论：")]),e("blockquote",null,[e("p",null,[s(`After doing some research I have determined that the real problem is that Amazon S3 doesn't set the "Vary: Origin" header even if it is configured to support CORS. If anyone knows how to get S3 to do that, that would also be a good answer. – `),t(a,{href:"https://stackoverflow.com/users/2543666/thayne",title:"6,381 reputation",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Thayne")]),_:1}),s(),t(a,{href:"https://stackoverflow.com/questions/21638606/using-cors-headers-with-css-background-image#comment32821554_21638606",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Feb 11, 2014 at 16:17")]),_:1})])]),w,y,P,e("blockquote",null,[e("p",null,[s("Yes. If a request may contain a "),T,s(" with different values, then the CDN should always respond with "),q,s(", even for responses without an "),R,s(" header. Your analysis is correct: if the header isn't always present, it would be possible to fill the cache with incorrect values. – "),t(a,{href:"https://stackoverflow.com/users/107250/monsur",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("monsur")]),_:1}),t(a,{href:"https://stackoverflow.com/a/25329887",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("answered Aug 15, 2014 at 16:02")]),_:1})])]),D,N,e("p",null,[s("此时此刻我们去寻找 MDN 关于 "),E,s(" 头部的文档 "),t(a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Vary - HTTP | MDN")]),_:1}),s("，就能看到：")]),V,F,e("blockquote",null,[e("p",null,[s("哪种情况下使用 "),I,s("？对于 "),x,s(" 头部信息，例如你提供给移动端的内容是不同的，可用防止你客户端误使用了用于桌面端的缓存。 并可帮助 Google 和其他搜索引擎来发现你的移动端版本的页面，同时告知他们不需要 "),t(a,{href:"https://en.wikipedia.org/wiki/Cloaking",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("Cloaking")]),_:1}),s("。")]),H,e("p",null,[s("—— 来源 "),t(a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary#%E5%8A%A8%E6%80%81%E6%9C%8D%E5%8A%A1",title:"Permalink to 动态服务",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("动态服务")]),_:1})])]),z,M,e("p",null,[t(r,{src:u,alt:"",thumbhash:"/fcFAYCplmdZhfdU+w2131A=",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAFCAYAAAAkG+5xAAACpElEQVR4AQCBAH7/APP3+f/0+Pr/9/v9//r+///8/////v////7////+/////v////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AIEAfv8A8vb4//P3+f/1+fv/9vr8//f7/f/3+/3/9fn7//P3+f/w9Pb/7vL0/+3x8//t8fP/7vL0//D09v/x9ff/8vb4//H1+P/w9Pb/7fHz/+ru8P/n6+3/5urs/+bq7P/o7O7/6u7w/+3x8//w9Pb/8/f5//T4+v/0+fv/9fn7//X5+/8AgQB+/wD0+Pr/9fn7//b6/P/2+vz/9vr8//T4+v/x9ff/7PDy/+js7v/k6Or/4eXn/9/j5f/f4+X/3+Pl/9/j5f/f4+X/3eHj/9vf4f/X293/1Nja/9HV1//Q1Nb/0NTX/9PX2f/W2tz/29/h/9/j5f/i5uj/5Onr/+bq7P/n6+3/5+vt/wCBAH7/APv////8/////P////3////8////+/////j8/v/0+Pr/8PT2/+zw8v/q7vD/6O3v/+jt7//p7e//6u7w/+nt7//o7O7/5enr/+Lm6P/e4uT/29/h/9re4P/a3uD/3OHj/+Dk5v/l6ev/6e3v/+3x8//w9Pb/8vb4//P3+f/z9/n/AYEAfv8A///////////////////////////////////////////9////+/////r+///6/v//+/////3////+//////////7////7////+Pz+//T4+v/x9ff/8PT2//D09v/y9vj/9fn7//r+///+//////////////////////////////8WnGjDG0qwxgAAAABJRU5ErkJggg==",width:"1212",height:"246",autoSizes:"true"})]),U,e("p",null,[s("综上所述，对于在跨域场景下的 GET 请求而言，我们能知道由于 CORS 策略所产生的的 OPTIONS 预检请求相比非 CORS 策略限制的的 GET 请求多了 "),L,s(" 头部，那么先前在 "),t(a,{href:"https://stackoverflow.com/questions/21638606/using-cors-headers-with-css-background-image",target:"_blank",rel:"noreferrer"},{default:o(()=>[s("cross domain - Using CORS headers with CSS background-image - Stack Overflow")]),_:1}),s(" StackOverflow 问答中看到的评论所提到的 "),j,s(" 头部的作用就可以理解为：")]),G,t(h),X,t(c)])}const te=d(g,[["render",W]]);export{se as __pageData,te as default};
