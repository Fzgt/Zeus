import{_ as r,c as o,J as a,m as i,a as s,w as t,ao as l,E as n,o as d}from"./chunks/framework.E0VnI2yM.js";const R=JSON.parse('{"title":"配置 GitLab CI 自动部署","description":"","frontmatter":{"tags":["网站/GitLab","开发/CICD","开发/CICD/GitLab-CI","开发/标记语言/YAML","操作系统/CentOS","命令行/yum","命令行/chmod","开发/DevOps","命令行/git","开发/标记语言/TOML","命令行","计算机/操作系统/Linux","计算机/操作系统/Linux/命令行","操作系统/Linux","开发/Git"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🟢 持续集成 持续交付 CICD/GitLab/配置 GitLab CI CD 自动部署.md","filePath":"笔记/🛠️ 开发/🟢 持续集成 持续交付 CICD/GitLab/配置 GitLab CI CD 自动部署.md"}'),c={name:"笔记/🛠️ 开发/🟢 持续集成 持续交付 CICD/GitLab/配置 GitLab CI CD 自动部署.md"},g=i("h1",{id:"配置-gitlab-ci-自动部署",tabindex:"-1"},[s("配置 GitLab CI 自动部署 "),i("a",{class:"header-anchor",href:"#配置-gitlab-ci-自动部署","aria-label":'Permalink to "配置 GitLab CI 自动部署"'},"​")],-1),y=l('<p>本教程预期实现将前端代码提交到 test 分支或者合并到 test 分支时触发自动部署脚本，从而实现自动部署测试环境的目的。</p><blockquote><p>本篇不包含如何建立网站服务器的内容，只讲述如何配置 GitLab CI。</p></blockquote><h2 id="将要使用到的工具" tabindex="-1">将要使用到的工具 <a class="header-anchor" href="#将要使用到的工具" aria-label="Permalink to &quot;将要使用到的工具&quot;">​</a></h2><h3 id="_1-gitlab-runner" tabindex="-1">1. gitlab-runner <a class="header-anchor" href="#_1-gitlab-runner" aria-label="Permalink to &quot;1. gitlab-runner&quot;">​</a></h3><p>是一个与 GitLab CI/CD 联动，在服务端运行 CI/CD 作业的自动化程序。</p><h3 id="_2-gitlab-ci-yml文件" tabindex="-1">2. <code>.gitlab-ci.yml</code>文件 <a class="header-anchor" href="#_2-gitlab-ci-yml文件" aria-label="Permalink to &quot;2. `.gitlab-ci.yml`文件&quot;">​</a></h3>',6),u=l(`<h2 id="配置流程" tabindex="-1">配置流程 <a class="header-anchor" href="#配置流程" aria-label="Permalink to &quot;配置流程&quot;">​</a></h2><h3 id="安装-gitlab-runner" tabindex="-1">安装 GitLab Runner <a class="header-anchor" href="#安装-gitlab-runner" aria-label="Permalink to &quot;安装 GitLab Runner&quot;">​</a></h3><ol><li>移除旧版本仓库</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/yum.repos.d/runner_gitlab-ci-multi-runner.repo</span></span></code></pre></div><ol start="2"><li>添加 GitLab&#39;s 官方仓库</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bash</span></span></code></pre></div><ol start="3"><li>下载最新版 GitLab Runner</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab-runner</span></span></code></pre></div><h4 id="注册-gitlab-runner" tabindex="-1">注册 GitLab Runner <a class="header-anchor" href="#注册-gitlab-runner" aria-label="Permalink to &quot;注册 GitLab Runner&quot;">​</a></h4><p>安装好了gitlab-runner，还要进行注册，执行以下操作</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab-runner</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> register</span></span></code></pre></div><h4 id="之后会为注册输入一系列信息" tabindex="-1">之后会为注册输入一系列信息 <a class="header-anchor" href="#之后会为注册输入一系列信息" aria-label="Permalink to &quot;之后会为注册输入一系列信息&quot;">​</a></h4><ol><li>填写仓库所在 GitLab 服务器的 URL</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> GitLab</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> instance</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> URL:</span></span></code></pre></div><p>例如：<code>http://gitlab.example.com/</code></p><ol start="2"><li>填写对应 GitLab 仓库的 Runner token 信息</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> token</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> you</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> obtained</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> register</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Runner</span></span></code></pre></div><p>进入 GitLab 仓库的<code>设置</code> -&gt; <code>CI/CD</code> -&gt; <code>Runner</code> 就可以看到 Runner 的 Token 了，把它复制过来，贴上。</p><ol start="3"><li>Runner 的描述</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> description</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Runner,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> you</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> can</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> change</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> later</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> GitLab&#39;s UI:</span></span></code></pre></div><p>简短的描述一下这个 Runner</p><ol start="4"><li>Runner 的标签</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Enter the tags associated with the Runner, you can change this later </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> GitLab</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;s UI:</span></span></code></pre></div><p>GitLab CI 会通过标签来判断需要吧 gitlab-ci.yml 脚本中的任务分配给哪个 Runner。 这里可以填写 <code>test, deploy</code>，用逗号分隔不同的标签。</p><h4 id="启动-runner-服务" tabindex="-1">启动 Runner 服务 <a class="header-anchor" href="#启动-runner-服务" aria-label="Permalink to &quot;启动 Runner 服务&quot;">​</a></h4><p>注册好之后如果在 <code>设置</code> -&gt; <code>CI/CD</code> -&gt; <code>Runner</code> 的界面上看到 Runner 的旁边不是绿点，而是黑色三角的感叹号，可以使用 <code>gitlab-runner start</code>指令来开启 Runner 的 Service 同时支持 <code>restart</code> 重启、<code>stop</code> 停止、<code>run</code> 直接运行 等等的命令。<code>run</code> 可以通过在前面附加 <code>--debug</code> 命令，开启详细的日志输出。</p><h3 id="编写-shell-脚本" tabindex="-1">编写 shell 脚本 <a class="header-anchor" href="#编写-shell-脚本" aria-label="Permalink to &quot;编写 shell 脚本&quot;">​</a></h3><p>接下来我们写脚本文件，因为我们采用的是linux系统，所以用的是shell文件 <strong>shell 脚本要做的事情可以分为这些步骤:</strong></p><ol><li>从 GitLab 上 git clone/fetch 项目资源。 这一步其实 gitlab-runner 会自动帮我们完成，所以可以省略。</li><li>进入项目中 因为我们的脚本是放在项目中的，所以可以使用如下方式获取到 shell 脚本的位置，进而定位到项目路径。</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">BASEDIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $BASEDIR</span></span></code></pre></div><ol start="3"><li>执行 npm install（或者 yarn/pnpm）</li><li>执行 build 打包</li></ol><h4 id="最后完整-shell-脚本如下" tabindex="-1">最后完整 shell 脚本如下 <a class="header-anchor" href="#最后完整-shell-脚本如下" aria-label="Permalink to &quot;最后完整 shell 脚本如下&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># ci/deploy_staging.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 测试网的部署脚本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 遇到错误时退出，更加可读的版本是：set -o errexit</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;============================&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;=== Start deploy staging ===&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;============================&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 访问脚本所在的的项目文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">BASEDIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $BASEDIR</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;==== Copy product files ====&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 拷贝文件到部署文件夹</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 开启 地址通配符功能</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">shopt</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> extglob</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 删除部署文件夹中之前留下的文件，只保留 dist（构建产物） 和 node_modules （依赖）文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/share/frontend/!</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dist</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">node_modules</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 删除 . 开头的隐藏文件，它们是漏网之鱼</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/share/frontend/{.[!.],..?}</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">*</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Remaining files：&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -la</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/share/frontend/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 为了防止因为没有权限复制而出错，预先设置署文件夹的权限组为 gitlab-runner</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab-runner:gitlab-runner</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/share/frontend</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 拷贝至部署文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/share/frontend/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置一次部署文件夹内新放进去文件的权限，允许读写和执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 775</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/share/frontend</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 进入部署文件夹</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/share/frontend/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;==== Start pnpm install ====&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;===== Start build test =====&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 编译项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;=============================&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;== Finished deploy staging ==&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;=============================&quot;</span></span></code></pre></div><blockquote><p>我将其放在了项目的 <code>ci/deploy_staging.sh</code> 目录里</p></blockquote><p>可以看到完整的代码中增加了<strong>拷贝至部署文件夹</strong>的步骤。这是因为，如果直接在 Runner 的项目文件夹中操作的话，可能会导致新创建的文件<strong>无法在下次 CI 作业 git clone 前被移除</strong>，而无法从 git 同步代码将会导致<strong>整个 Runner 被阻塞</strong>。原因可能是因为某些文件的权限组为 root ，也可能是因为版本控制忽略了那些文件，目前这个问题的具体成因不明。为了避免这个问题，<strong>所以我们在一个新文件夹中执行 npm install 和 npm build 操作</strong>来避免这种情况。</p><h3 id="设置-gitlab-runner-用户权限" tabindex="-1">设置 gitlab-runner 用户权限 <a class="header-anchor" href="#设置-gitlab-runner-用户权限" aria-label="Permalink to &quot;设置 gitlab-runner 用户权限&quot;">​</a></h3><p>为了确保 Runner 正常运行这个 shell 脚本，需要给 <code>gitlab-runner</code> 用户添加执行 <code>sudo</code> 命令的权限。</p><h4 id="_1-将-gitlab-runner-用户加入-wheel-用户组" tabindex="-1">1. 将 gitlab-runner 用户加入 wheel 用户组 <a class="header-anchor" href="#_1-将-gitlab-runner-用户加入-wheel-用户组" aria-label="Permalink to &quot;1. 将 gitlab-runner 用户加入 wheel 用户组&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wheel</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab-runner</span></span></code></pre></div><h4 id="_2-设置-whell-组的-sudo-命令权限-允许免密码执行-sudo" tabindex="-1">2. 设置 whell 组的 sudo 命令权限，允许免密码执行 sudo <a class="header-anchor" href="#_2-设置-whell-组的-sudo-命令权限-允许免密码执行-sudo" aria-label="Permalink to &quot;2. 设置 whell 组的 sudo 命令权限，允许免密码执行 sudo&quot;">​</a></h4><ol><li><h5 id="切换到-root-用户下" tabindex="-1">切换到 <code>root</code> 用户下 <a class="header-anchor" href="#切换到-root-用户下" aria-label="Permalink to &quot;切换到 \`root\` 用户下&quot;">​</a></h5></li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">su</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span></span></code></pre></div><ol start="3"><li><h5 id="打开-sudoers-文件" tabindex="-1">打开 <code>sudoers</code> 文件 <a class="header-anchor" href="#打开-sudoers-文件" aria-label="Permalink to &quot;打开 \`sudoers\` 文件&quot;">​</a></h5></li></ol><p><code>sudoers</code> 文件的目录是 <code>/etc/sudoers</code></p><p>有可能出现无法编辑 <code>sudoers</code> 文件的情况，需要添加写权限：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> u+w</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/sudoers</span></span></code></pre></div><p>通过 <code>vim</code> 或者 <code>nano</code> 命令编辑</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/sudoers</span></span></code></pre></div><h5 id="_3-编辑文件-设置-sudo-权限" tabindex="-1">3. 编辑文件，设置 sudo 权限 <a class="header-anchor" href="#_3-编辑文件-设置-sudo-权限" aria-label="Permalink to &quot;3. 编辑文件，设置 sudo 权限&quot;">​</a></h5><p>在 <code>sudoers</code> 文件中找到 <code># %wheel ALL=(ALL) NOPASSWD: ALL</code> 这一行，将它前面的注释，也就是 <code>#</code> 去掉，然后保存文件。如果没有找到，也可以直接新建一行填入这段文本。然后保存文件并退出</p><h5 id="_4-撤销刚刚添加的-sudoers-文件写权限" tabindex="-1">4. 撤销刚刚添加的 sudoers 文件写权限 <a class="header-anchor" href="#_4-撤销刚刚添加的-sudoers-文件写权限" aria-label="Permalink to &quot;4. 撤销刚刚添加的 sudoers 文件写权限&quot;">​</a></h5><p>输入如下命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> u-w</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/sudoers</span></span></code></pre></div><h3 id="编写-gitlab-ci-yml-脚本" tabindex="-1">编写 .gitlab-ci.yml 脚本 <a class="header-anchor" href="#编写-gitlab-ci-yml-脚本" aria-label="Permalink to &quot;编写 .gitlab-ci.yml 脚本&quot;">​</a></h3>`,54),C=i("code",null,"CI/CD",-1),F=i("code",null,"流水线",-1),b=i("code",null,"CI lint",-1),m=l(`<h4 id="完整的-gitlab-ci-yml-脚本如下" tabindex="-1">完整的 .gitlab-ci.yml 脚本如下 <a class="header-anchor" href="#完整的-gitlab-ci-yml-脚本如下" aria-label="Permalink to &quot;完整的 .gitlab-ci.yml 脚本如下&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">stages</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">.deploy_staging_default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">deploy_staging_default</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  stage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">deploy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # 通过 shell 执行的</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">pwd</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 避免克隆下来的 .sh 文件没有执行权限导致执行失败，预先添加执行权限</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">sudo chmod -R a+x .</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 执行部署脚本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">sudo ./ci/deploy_staging.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # tags 标签表示这个 CI 任务在会被分配给哪些 Runner，只有包含如下 tags 中任意一个或多个的 Runner 才会执行这个任务。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  tags</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 合并到 test 分支时执的脚本，通过 only 字段约束为 merge_requests 情况下 目标分支名称为 “test” 时才会执行。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">deploy_staging1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">deploy_staging_default</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  only</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    refs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">merge_requests</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    variables</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">$CI_MERGE_REQUEST_TARGET_BRANCH_NAME == &quot;test&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 在 test 分支上直接操作时执行的脚本。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">deploy_staging2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">deploy_staging_default</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  only</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">test</span></span></code></pre></div><blockquote><p><code>.deploy_staging_default: &amp;deploy_staging_default</code></p><p><code>&lt;&lt;: *deploy_staging_default</code></p></blockquote><p>YAML 有一个名为“锚”的功能，您可以使用它在整个文档中复制内容，这里就用到了这个特性来将两种 CI 策略中相同的部分写在一起。</p><h3 id="完成设置" tabindex="-1">完成设置 <a class="header-anchor" href="#完成设置" aria-label="Permalink to &quot;完成设置&quot;">​</a></h3><p>完成如上步骤后，将编辑好的 yaml 和 shell 脚本保存、推送到 test 分支。</p><p>如果执行顺利的话，就可以看到 <code>CI/CD</code> -&gt; <code>流水线</code> 界面已经发生了变化，并且完成了你设定的自动部署任务。</p><p><strong>下一步：</strong> <em>如果你将希望编译的产物，例如 web 服务器。能够运行起来，并暴露给外部访问，请参考如何部署相关的教程或文档。</em></p><h4 id="故障排除" tabindex="-1">故障排除 <a class="header-anchor" href="#故障排除" aria-label="Permalink to &quot;故障排除&quot;">​</a></h4><h5 id="permission-denied" tabindex="-1">permission denied <a class="header-anchor" href="#permission-denied" aria-label="Permalink to &quot;permission denied&quot;">​</a></h5><p>如果出现执行失败的情况，检查 log 如果存在 <code>permission denied</code> 字样，说明 Runner 访问文件时存在权限问题。通过 <code>ls -la</code> 查看 <code>/home/gitlab-runner</code> 文件夹、以及项<strong>目部署文件夹</strong>是否正常赋予了 gitlab-runner 用户读写和执行权限。</p><p>发现权限设置有误，可以通过 <code>chmod</code> 变更权限，<code>chown</code> 变更所属权之类的方式进行权限的修改。</p><h5 id="查看-gitlab-runner-服务运行时的-log" tabindex="-1">查看 gitlab-runner 服务运行时的 log <a class="header-anchor" href="#查看-gitlab-runner-服务运行时的-log" aria-label="Permalink to &quot;查看 gitlab-runner 服务运行时的 log&quot;">​</a></h5><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab-runner</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -l</span></span></code></pre></div><p>使用 <code>status</code> 获取状态， <code>-l</code> 参数表示显示完整 log，这个办法可以看到最近的十条 log</p><h5 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h5><p>有时也可以检查 Runner 的配置文件，确定是否存在配置错的都的情况。</p><p>Runner 的配置文件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/gitlab-runner/config.toml</span></span></code></pre></div><p>gitlab-runner 的系统服务脚本:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/systemd/system/gitlab-runner.service</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,22),A=i("h2",{id:"文件历史",tabindex:"-1"},[s("文件历史 "),i("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function _(E,B,f,v,q,D){const h=n("NolebasePageProperties"),e=n("VPNolebaseInlineLinkPreview"),p=n("NolebaseGitContributors"),k=n("NolebaseGitChangelog");return d(),o("div",null,[g,a(h),y,i("p",null,[s("一个放在项目根目录下的 yaml 文件，里面描述了 CI/CD 的触发条件和工作流程。 具体语法可以参考 "),a(e,{href:"https://docs.gitlab.com/ee/ci/yaml/index.html",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("官方文档")]),_:1})]),u,i("p",null,[s("接下来我们参考 "),a(e,{href:"https://docs.gitlab.com/ee/ci/yaml/README.html",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("官方文档")]),_:1}),s(" 的格式，在 .gitlab-ci.yml 文件写入要执行的步骤和触发条件。 编写完成后可以进入 GitLab 项目，然后选择 "),C,s(" -> "),F,s(" -> "),b,s("，打开**“验证您的GitLab CI配置”** 页面，在这里可以校验你的 .gitlab-ci.yml 文件语法是否正。")]),m,a(p),A,a(k)])}const P=r(c,[["render",_]]);export{R as __pageData,P as default};
