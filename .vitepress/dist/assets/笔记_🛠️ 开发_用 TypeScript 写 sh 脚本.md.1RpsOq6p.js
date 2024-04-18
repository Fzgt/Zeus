import{_ as n,c as h,J as a,m as s,a as i,ao as o,o as r,E as e}from"./chunks/framework.E0VnI2yM.js";const x=JSON.parse('{"title":"用 TypeScript 写 shell 脚本","description":"","frontmatter":{"tags":["开发/语言/TypeScript","命令行/sh"]},"headers":[],"relativePath":"笔记/🛠️ 开发/用 TypeScript 写 sh 脚本.md","filePath":"笔记/🛠️ 开发/用 TypeScript 写 sh 脚本.md"}'),c={name:"笔记/🛠️ 开发/用 TypeScript 写 sh 脚本.md"},d=s("h1",{id:"用-typescript-写-shell-脚本",tabindex:"-1"},[i("用 TypeScript 写 shell 脚本 "),s("a",{class:"header-anchor",href:"#用-typescript-写-shell-脚本","aria-label":'Permalink to "用 TypeScript 写 shell 脚本"'},"​")],-1),k=o('<p>想要直接执行 TypeScript 或者把它当作 shell 脚本时可以尝试以下方法</p><h4 id="首先在全局安装-tsx" tabindex="-1">首先在全局安装 <code>tsx</code> <a class="header-anchor" href="#首先在全局安装-tsx" aria-label="Permalink to &quot;首先在全局安装 `tsx`&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tsx</span></span></code></pre></div><h4 id="然后你可以直接使用这个命令来执行-typescript-文件" tabindex="-1">然后你可以直接使用这个命令来执行 TypeScript 文件 <a class="header-anchor" href="#然后你可以直接使用这个命令来执行-typescript-文件" aria-label="Permalink to &quot;然后你可以直接使用这个命令来执行 TypeScript 文件&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ./myScript.ts</span></span></code></pre></div><h4 id="想要像-sh-文件一样可以直接执行" tabindex="-1">想要像 <code>.sh</code> 文件一样可以直接执行？ <a class="header-anchor" href="#想要像-sh-文件一样可以直接执行" aria-label="Permalink to &quot;想要像 `.sh` 文件一样可以直接执行？&quot;">​</a></h4><p>在文件头部添加这行注释吧：<code>#!/usr/bin/env tsx</code> 像这样：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#!/usr/bin/env tsx</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>别忘了添加「执行」权限：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ./myScript.ts</span></span></code></pre></div><p>然后就可以像 <code>.sh</code> 文件一样直接使用了</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ./myScript.ts</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">hello</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> world</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>',13),g=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function y(_,b,u,m,C,v){const t=e("NolebasePageProperties"),l=e("NolebaseGitContributors"),p=e("NolebaseGitChangelog");return r(),h("div",null,[d,a(t),k,a(l),g,a(p)])}const B=n(c,[["render",y]]);export{x as __pageData,B as default};
