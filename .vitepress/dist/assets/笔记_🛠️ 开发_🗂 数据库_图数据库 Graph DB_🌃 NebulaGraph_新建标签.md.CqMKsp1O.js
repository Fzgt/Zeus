import{_ as p,c as r,J as i,m as s,w as d,a as t,ao as e,E as a,o}from"./chunks/framework.E0VnI2yM.js";const L=JSON.parse('{"title":"新建标签","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/🛠️ 开发/🗂 数据库/图数据库 Graph DB/🌃 NebulaGraph/新建标签.md","filePath":"笔记/🛠️ 开发/🗂 数据库/图数据库 Graph DB/🌃 NebulaGraph/新建标签.md"}'),g={name:"笔记/🛠️ 开发/🗂 数据库/图数据库 Graph DB/🌃 NebulaGraph/新建标签.md"},c=s("h1",{id:"新建标签",tabindex:"-1"},[t("新建标签 "),s("a",{class:"header-anchor",href:"#新建标签","aria-label":'Permalink to "新建标签"'},"​")],-1),_=e('<h5 id="文档版本" tabindex="-1">文档版本 <a class="header-anchor" href="#文档版本" aria-label="Permalink to &quot;文档版本&quot;">​</a></h5><table><thead><tr><th>编辑者</th><th>版本</th><th>变更日期</th><th>变更说明</th></tr></thead><tbody><tr><td>Neko</td><td>v1.0.0</td><td>2021-12-01</td><td></td></tr></tbody></table><h3 id="文档兼容性" tabindex="-1">文档兼容性 <a class="header-anchor" href="#文档兼容性" aria-label="Permalink to &quot;文档兼容性&quot;">​</a></h3>',3),B=s("thead",null,[s("tr",null,[s("th",null,"主体"),s("th",null,"版本号"),s("th",null,"文档地址（如果有）")])],-1),y=s("td",null,"NebulaGraph",-1),C=s("td",null,"v2.6.1",-1),u=e(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>标签（Tag）类似于 SQL 的表</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> TAG </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">[IF NOT EXISTS]</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">tag_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">  &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">prop_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">data_type</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [NULL | NOT NULL]</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [DEFAULT &lt;default_value&gt;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [COMMENT &#39;&lt;comment&gt;&#39;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [{, &lt;prop_name&gt; &lt;data_type&gt; [NULL | NOT NULL]</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [DEFAULT &lt;default_value&gt;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [COMMENT &#39;&lt;comment&gt;&#39;]</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} ...] ) </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">[TTL_DURATION = &lt;ttl_duration&gt;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [TTL_COL = &lt;prop_name&gt;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> [COMMENT = &#39;&lt;comment&gt;&#39;]</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>比如创建一个用户标签</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> TAG </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`user\`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  user_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;用户 ID&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  username string </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;用户名&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  create_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">timestamp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;创建时间&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  modified_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">timestamp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;变更时间&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) COMMENT </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;用户&quot;</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,8),E=s("h2",{id:"文件历史",tabindex:"-1"},[t("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function D(A,m,b,T,N,F){const h=a("NolebasePageProperties"),n=a("VPNolebaseInlineLinkPreview"),l=a("NolebaseGitContributors"),k=a("NolebaseGitChangelog");return o(),r("div",null,[c,i(h),_,s("table",null,[B,s("tbody",null,[s("tr",null,[y,C,s("td",null,[i(n,{href:"https://docs.nebula-graph.com.cn/2.6.1/",target:"_blank",rel:"noreferrer"},{default:d(()=>[t("https://docs.nebula-graph.com.cn/2.6.1/")]),_:1})])])])]),u,i(l),E,i(k)])}const f=p(g,[["render",D]]);export{L as __pageData,f as default};
