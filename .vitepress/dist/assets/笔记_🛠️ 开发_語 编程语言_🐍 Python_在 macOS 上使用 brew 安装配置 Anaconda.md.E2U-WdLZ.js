import{_ as e,c as p,J as i,m as s,a as n,ao as k,o as d,E as a}from"./chunks/framework.E0VnI2yM.js";const m=JSON.parse('{"title":"在 macOS 上使用 brew 安装配置 Anaconda","description":"","frontmatter":{"tags":["AI","开发/语言/Python","开发/语言/Python/Anaconda","操作系统/macOS","命令行/brew","开源/软件/zsh","AI/JinaAI"]},"headers":[],"relativePath":"笔记/🛠️ 开发/語 编程语言/🐍 Python/在 macOS 上使用 brew 安装配置 Anaconda.md","filePath":"笔记/🛠️ 开发/語 编程语言/🐍 Python/在 macOS 上使用 brew 安装配置 Anaconda.md"}'),o={name:"笔记/🛠️ 开发/語 编程语言/🐍 Python/在 macOS 上使用 brew 安装配置 Anaconda.md"},r=s("h1",{id:"在-macos-上使用-brew-安装配置-anaconda",tabindex:"-1"},[n("在 macOS 上使用 "),s("code",null,"brew"),n(" 安装配置 Anaconda "),s("a",{class:"header-anchor",href:"#在-macos-上使用-brew-安装配置-anaconda","aria-label":'Permalink to "在 macOS 上使用 `brew` 安装配置 Anaconda"'},"​")],-1),c=k(`<h2 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> anaconda</span></span></code></pre></div><p>在 <code>.zshrc</code> 中添加下面的 <code>anaconda</code> 配置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Python ---------------------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Anaconda</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $HOMEBREW_PREFIX</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/anaconda3/bin/activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># ------------------------------------------------------------------------------------</span></span></code></pre></div><p>然后执行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.zshrc</span></span></code></pre></div><p>来重新加载 <code>zsh</code></p><p>如果你有 [[Neko 配置使用的 zsh alias|<code>reload</code> <code>alias</code>]] 的配置，也可以直接通过</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">reload</span></span></code></pre></div><p>来重新加载 <code>zsh</code></p><h2 id="验证安装" tabindex="-1">验证安装 <a class="header-anchor" href="#验证安装" aria-label="Permalink to &quot;验证安装&quot;">​</a></h2><p>安装成功之后可以通过运行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> list</span></span></code></pre></div><p>来查看是否安装正常和配置成功，理论上它会输出：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">❯</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> conda</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> list</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># packages in environment at /opt/homebrew/anaconda3:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Name                    Version                   Build  Channel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">_anaconda_depends</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">         2023.09</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">         py311_openblas_1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">abseil-cpp</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">                20211102.0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">           hc377ac9_0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aiobotocore</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">               2.5.0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">           py311hca03da5_0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aiofiles</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">                  22.1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          py311hca03da5_0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aiohttp</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">                   3.8.5</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">           py311h80987f9_0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aioitertools</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">              0.7.1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">              pyhd3eb1b0_0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aiosignal</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">                 1.2.0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">              pyhd3eb1b0_0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">aiosqlite</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">                 0.18.0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          py311hca03da5_0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">alabaster</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">                 0.7.12</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">             pyhd3eb1b0_0</span></span></code></pre></div><h2 id="其他配置注意事项" tabindex="-1">其他配置注意事项 <a class="header-anchor" href="#其他配置注意事项" aria-label="Permalink to &quot;其他配置注意事项&quot;">​</a></h2><p>安装 <code>jina</code> 相关的 CLI 工具之后 <code>.zshrc</code> 可能会出现下面这样的脚本配置：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># JINA_CLI_BEGIN</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## autocomplete</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -o</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> interactive ]]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">compctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -K</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> _jina</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> jina</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">_jina</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  local</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> words</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> completions</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">  read</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -cA</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> words</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">words</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">}&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    completions</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jina</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> commands)&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    completions</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jina</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> completions \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">words</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">[2,-2]})&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  reply</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(\${(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ps</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">completions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># session-wise fix</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">ulimit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4096</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> OBJC_DISABLE_INITIALIZE_FORK_SAFETY</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">YES</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># JINA_CLI_END</span></span></code></pre></div><p>不用担心，这是 <code>jina</code> CLI 给配置的，可以把这部分脚本移动到 <code># Python -----</code> 括起来的部分方便阅读和管理</p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,20),g=s("h2",{id:"文件历史",tabindex:"-1"},[n("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function y(C,F,A,_,E,D){const l=a("NolebasePageProperties"),h=a("NolebaseGitContributors"),t=a("NolebaseGitChangelog");return d(),p("div",null,[r,i(l),c,i(h),g,i(t)])}const u=e(o,[["render",y]]);export{m as __pageData,u as default};
