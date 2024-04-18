import{_ as o,c as d,J as i,m as s,w as t,a as e,ao as l,E as a,o as r}from"./chunks/framework.E0VnI2yM.js";const O=JSON.parse('{"title":"Nginx 迁移 OpenResty","description":"","frontmatter":{"tags":["计算机/网络/网关/Nginx","计算机/网络/网关/OpenResty","操作系统/Debian","开发/迁移"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🚪 网关/Nginx 迁移 OpenResty.md","filePath":"笔记/🛠️ 开发/🚪 网关/Nginx 迁移 OpenResty.md"}'),c={name:"笔记/🛠️ 开发/🚪 网关/Nginx 迁移 OpenResty.md"},g=s("h1",{id:"nginx-迁移-openresty",tabindex:"-1"},[e("Nginx 迁移 OpenResty "),s("a",{class:"header-anchor",href:"#nginx-迁移-openresty","aria-label":'Permalink to "Nginx 迁移 OpenResty"'},"​")],-1),y=l('<h5 id="文档版本" tabindex="-1">文档版本 <a class="header-anchor" href="#文档版本" aria-label="Permalink to &quot;文档版本&quot;">​</a></h5><table><thead><tr><th>编辑者</th><th>版本</th><th>变更日期</th><th>变更说明</th></tr></thead><tbody><tr><td>Neko</td><td>v1.0.0</td><td>2022-08-17</td><td>创建</td></tr></tbody></table><h3 id="文档兼容性" tabindex="-1">文档兼容性 <a class="header-anchor" href="#文档兼容性" aria-label="Permalink to &quot;文档兼容性&quot;">​</a></h3>',3),u=s("thead",null,[s("tr",null,[s("th",null,"主体"),s("th",null,"版本号"),s("th",null,"文档地址（如果有）")])],-1),C=s("tr",null,[s("td",null,"Debian"),s("td",null,"11/5.10.127-1/amd64"),s("td")],-1),F=s("td",null,"Nginx",-1),b=s("td",null,"nginx/1.21.1",-1),m=s("td",null,"OpenResty",-1),v=s("td",null,"openresty/1.21.4.1",-1),_=l(`<h2 id="debian-11" tabindex="-1">Debian 11 <a class="header-anchor" href="#debian-11" aria-label="Permalink to &quot;Debian 11&quot;">​</a></h2><h3 id="安装前置软件包" tabindex="-1">安装前置软件包 <a class="header-anchor" href="#安装前置软件包" aria-label="Permalink to &quot;安装前置软件包&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> libpcre3-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> libssl-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> perl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build-essential</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> curl</span></span></code></pre></div><h3 id="安装导入-gpg-公钥时所需的几个依赖包-整个安装过程完成后可以随时删除它们" tabindex="-1">安装导入 GPG 公钥时所需的几个依赖包（整个安装过程完成后可以随时删除它们） <a class="header-anchor" href="#安装导入-gpg-公钥时所需的几个依赖包-整个安装过程完成后可以随时删除它们" aria-label="Permalink to &quot;安装导入 GPG 公钥时所需的几个依赖包（整个安装过程完成后可以随时删除它们）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --no-install-recommends</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gnupg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ca-certificates</span></span></code></pre></div><h3 id="导入我们的-gpg-密钥" tabindex="-1">导入我们的 GPG 密钥 <a class="header-anchor" href="#导入我们的-gpg-密钥" aria-label="Permalink to &quot;导入我们的 GPG 密钥&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://openresty.org/package/pubkey.gpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt-key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> -</span></span></code></pre></div><h3 id="添加-openresty-官方-apt-仓库" tabindex="-1">添加 OpenResty 官方 APT 仓库 <a class="header-anchor" href="#添加-openresty-官方-apt-仓库" aria-label="Permalink to &quot;添加 OpenResty 官方 APT 仓库&quot;">​</a></h3><p>对于 <code>x86_64</code> 或 <code>amd64</code> 系统，可以使用下面的命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> codename</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -Po</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;VERSION=&quot;[0-9]+ \\(\\K[^)]+&#39; /etc/os-release\`</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;deb http://openresty.org/package/debian </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$codename</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/apt/sources.list.d/openresty.list</span></span></code></pre></div><p>而对于 <code>arm64</code> 或 <code>aarch64</code> 系统，则可以使用下面的命令:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> codename</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -Po</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;VERSION=&quot;[0-9]+ \\(\\K[^)]+&#39; /etc/os-release\`</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;deb http://openresty.org/package/arm64/debian </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$codename</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/apt/sources.list.d/openresty.list</span></span></code></pre></div><h3 id="更新-apt-索引" tabindex="-1">更新 APT 索引 <a class="header-anchor" href="#更新-apt-索引" aria-label="Permalink to &quot;更新 APT 索引&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> update</span></span></code></pre></div><h3 id="先停止-nginx" tabindex="-1">先停止 Nginx <a class="header-anchor" href="#先停止-nginx" aria-label="Permalink to &quot;先停止 Nginx&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> nginx</span></span></code></pre></div><h3 id="安装-openresty-软件包" tabindex="-1">安装 OpenResty 软件包 <a class="header-anchor" href="#安装-openresty-软件包" aria-label="Permalink to &quot;安装 OpenResty 软件包&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty-opm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty-restydoc</span></span></code></pre></div><p>这个包同时也推荐安装 <code>openresty-opm</code> 和 <code>openresty-restydoc</code> 包，所以后面两个包会缺省安装上。 如果你不想自动关联安装，可以用下面方法关闭自动关联安装：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --no-install-recommends</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty</span></span></code></pre></div><h3 id="停止安装好的-openresty" tabindex="-1">停止安装好的 OpenResty <a class="header-anchor" href="#停止安装好的-openresty" aria-label="Permalink to &quot;停止安装好的 OpenResty&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty</span></span></code></pre></div><h3 id="更新-openresty-的配置文件" tabindex="-1">更新 OpenResty 的配置文件 <a class="header-anchor" href="#更新-openresty-的配置文件" aria-label="Permalink to &quot;更新 OpenResty 的配置文件&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/openresty/nginx.conf</span></span></code></pre></div><p>可以参考我的配置：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">user </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> nginx;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">worker_processes </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /var/log/nginx/error.log </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">notice</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">pid </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">       /usr/local/openresty/nginx/logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">events</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    worker_connections </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      mime.types;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    default_type </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    log_format </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">json </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;{&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;@timestamp&quot;:&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time_iso8601</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;client_ip&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">remote_addr</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;request_uri&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uri</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;host&quot;:&quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;method&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">request_method</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;request&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">request</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;status&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">status</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;body_bytes_sent&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">body_bytes_sent</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;referer&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">http_referer</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;ua&quot;: &quot;$</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">http_user_agent</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;request_time&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">request_time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;upstream_connect_time&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">upstream_connect_time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;upstream_header_time&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">upstream_header_time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">,&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &#39;&quot;upstream_response_time&quot;: $</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">upstream_response_time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &#39;}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    access_log </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /var/log/nginx/access.log json;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    sendfile </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">       on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    keepalive_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 65</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    #gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/etc/openresty/conf.d/*.conf;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/etc/openresty/sites-enabled/*;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="开始迁移剩余的网站配置文件" tabindex="-1">开始迁移剩余的网站配置文件 <a class="header-anchor" href="#开始迁移剩余的网站配置文件" aria-label="Permalink to &quot;开始迁移剩余的网站配置文件&quot;">​</a></h3><p>创建必要的目录</p><ul><li><p><code>/etc/openresty/conf.d</code></p></li><li><p><code>/etc/openresty/sites-available</code></p></li><li><p><code>/etc/openresty/sites-enabled</code></p></li><li><p>复制 <code>/etc/nginx/conf.d/</code> 下面的文件到 <code>/etc/openresty/conf.d</code></p></li><li><p>复制 <code>/etc/nginx/sites-available/</code> 下面的文件到 <code>/etc/openresty/sites-available</code></p></li><li><p>手动为每一个 <code>/etc/openresty/sites-available</code> 下的配置文件创建软链接</p></li></ul><p>使用下面的命令检查配置文件有效性：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/openresty/nginx/sbin/nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span></span></code></pre></div><p>使用下面的命令重载配置文件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/openresty/nginx/sbin/nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> reload</span></span></code></pre></div><h3 id="服务切换" tabindex="-1">服务切换 <a class="header-anchor" href="#服务切换" aria-label="Permalink to &quot;服务切换&quot;">​</a></h3><p>准备好之后，停止 Nginx，开启 OpenResty：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty</span></span></code></pre></div><h3 id="更新开机自启策略" tabindex="-1">更新开机自启策略 <a class="header-anchor" href="#更新开机自启策略" aria-label="Permalink to &quot;更新开机自启策略&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresty</span></span></code></pre></div><h3 id="卸载-nginx" tabindex="-1">卸载 Nginx <a class="header-anchor" href="#卸载-nginx" aria-label="Permalink to &quot;卸载 Nginx&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> nginx</span></span></code></pre></div><h3 id="创建新的-nginx-二进制文件软链接" tabindex="-1">创建新的 Nginx 二进制文件软链接 <a class="header-anchor" href="#创建新的-nginx-二进制文件软链接" aria-label="Permalink to &quot;创建新的 Nginx 二进制文件软链接&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/openresty/nginx/sbin/nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/bin/nginx</span></span></code></pre></div><h3 id="其他的关联配置" tabindex="-1">其他的关联配置 <a class="header-anchor" href="#其他的关联配置" aria-label="Permalink to &quot;其他的关联配置&quot;">​</a></h3><h4 id="logrotate" tabindex="-1">Logrotate <a class="header-anchor" href="#logrotate" aria-label="Permalink to &quot;Logrotate&quot;">​</a></h4><p>如果是使用软件管理器安装的 Nginx，其安装脚本可能会自动为 Nginx 配置 Logrotate 策略，且如果你在上述的 OpenResty 配置文件（<code>/etc/openresty/nginx.conf</code>）中修改了 <code>pid</code> （OpenResty 的进程 ID 文件）字段对应的值，或者说你的 OpenResty 配置文件中 <code>pid</code> 字段的值和原先 Nginx 配置文件（<code>/etc/nginx/nginx.conf</code>）中配置的 <code>pid</code> 字段的值不一样的话，请一定检查并在必要情况下修改 Logrotate 策略配置脚本。</p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,48),q=s("h2",{id:"文件历史",tabindex:"-1"},[e("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function A(E,D,x,B,f,P){const h=a("NolebasePageProperties"),n=a("VPNolebaseInlineLinkPreview"),p=a("NolebaseGitContributors"),k=a("NolebaseGitChangelog");return r(),d("div",null,[g,i(h),y,s("table",null,[u,s("tbody",null,[C,s("tr",null,[F,b,s("td",null,[i(n,{href:"https://docs.nginx.com/",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("NGINX Documentation")]),_:1})])]),s("tr",null,[m,v,s("td",null,[i(n,{href:"https://openresty.org/en/",target:"_blank",rel:"noreferrer"},{default:t(()=>[e("OpenResty® - Official Site")]),_:1})])])])]),_,i(p),q,i(k)])}const R=o(c,[["render",A]]);export{O as __pageData,R as default};
