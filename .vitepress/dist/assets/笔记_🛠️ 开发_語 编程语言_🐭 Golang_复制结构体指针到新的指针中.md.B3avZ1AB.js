import{_ as l,c as o,J as a,m as s,a as i,ao as r,o as p,E as t}from"./chunks/framework.E0VnI2yM.js";const D=JSON.parse('{"title":"复制结构体指针到新的指针中","description":"","frontmatter":{"tags":["开发/代码/代码片段","开发/语言/Golang"]},"headers":[],"relativePath":"笔记/🛠️ 开发/語 编程语言/🐭 Golang/复制结构体指针到新的指针中.md","filePath":"笔记/🛠️ 开发/語 编程语言/🐭 Golang/复制结构体指针到新的指针中.md"}'),d={name:"笔记/🛠️ 开发/語 编程语言/🐭 Golang/复制结构体指针到新的指针中.md"},k=s("h1",{id:"复制结构体指针到新的指针中",tabindex:"-1"},[i("复制结构体指针到新的指针中 "),s("a",{class:"header-anchor",href:"#复制结构体指针到新的指针中","aria-label":'Permalink to "复制结构体指针到新的指针中"'},"​")],-1),c=r(`<h5 id="文档版本" tabindex="-1">文档版本 <a class="header-anchor" href="#文档版本" aria-label="Permalink to &quot;文档版本&quot;">​</a></h5><table><thead><tr><th>编辑者</th><th>版本</th><th>变更日期</th><th>变更说明</th></tr></thead><tbody><tr><td>Neko</td><td>v1.0.0</td><td>2021-11-02</td><td>创建</td></tr></tbody></table><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">s1</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">s2</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">s2</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">s1</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,4),_=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function g(b,C,y,m,E,B){const e=t("NolebasePageProperties"),n=t("NolebaseGitContributors"),h=t("NolebaseGitChangelog");return p(),o("div",null,[k,a(e),c,a(n),_,a(h)])}const A=l(d,[["render",g]]);export{D as __pageData,A as default};
