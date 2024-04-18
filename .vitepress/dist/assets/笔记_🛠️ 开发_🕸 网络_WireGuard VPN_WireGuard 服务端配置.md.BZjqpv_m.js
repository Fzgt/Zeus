import{_ as k,c as o,J as a,m as s,a as i,w as l,ao as n,E as t,o as r}from"./chunks/framework.E0VnI2yM.js";const z=JSON.parse('{"title":"WireGuard 服务端配置","description":"","frontmatter":{"tags":["计算机/操作系统/Linux","计算机/操作系统/Linux/命令行","操作系统/Linux","计算机/网络/WireGuard","计算机/网络/VPN","计算机/网络/VPN/WireGuard","操作系统/macOS","命令行/vim","命令行/mkdir","命令行/ip","命令行/sysctl","运维/内核","计算机/操作系统/Linux/内核","运维/网络","运维","计算机/网络/组网","命令行/chmod","计算机/网络/协议/UDP"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🕸 网络/WireGuard VPN/WireGuard 服务端配置.md","filePath":"笔记/🛠️ 开发/🕸 网络/WireGuard VPN/WireGuard 服务端配置.md"}'),c={name:"笔记/🛠️ 开发/🕸 网络/WireGuard VPN/WireGuard 服务端配置.md"},g=s("h1",{id:"wireguard-服务端配置",tabindex:"-1"},[i("WireGuard 服务端配置 "),s("a",{class:"header-anchor",href:"#wireguard-服务端配置","aria-label":'Permalink to "WireGuard 服务端配置"'},"​")],-1),u=n(`<h2 id="先决条件" tabindex="-1">先决条件 <a class="header-anchor" href="#先决条件" aria-label="Permalink to &quot;先决条件&quot;">​</a></h2><h3 id="配置-ipv4-转发" tabindex="-1">配置 IPv4 转发 <a class="header-anchor" href="#配置-ipv4-转发" aria-label="Permalink to &quot;配置 IPv4 转发&quot;">​</a></h3><p>要使 NAT 正常工作，我们需要启用 IP 转发： 该命令配置系统选项 <code>net.ipv4.ip_forward</code> 值为 <code>1</code>，表示开启 IPv4 协议下 IP 转发</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-7xtCh" id="tab-4JSDh05" checked="checked"><label for="tab-4JSDh05">以非 root 用户执行</label><input type="radio" name="group-7xtCh" id="tab-RCCz8-B"><label for="tab-RCCz8-B">以 root 用户执行</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> net.ipv4.ip_forward=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> net.ipv4.ip_forward=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span></span></code></pre></div></div></div><h3 id="创建必要的配置目录" tabindex="-1">创建必要的配置目录 <a class="header-anchor" href="#创建必要的配置目录" aria-label="Permalink to &quot;创建必要的配置目录&quot;">​</a></h3><p>WireGuard 的配置目录一般在 <code>/etc/wireguard</code>，但是不同的系统也会有不同的路径：</p><h4 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xmFzh" id="tab-POqy0V7" checked="checked"><label for="tab-POqy0V7">以非 root 用户执行</label><input type="radio" name="group-xmFzh" id="tab-MJe2hnl"><label for="tab-MJe2hnl">以 root 用户执行</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard</span></span></code></pre></div></div></div><h4 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/etc/wireguard</span></span></code></pre></div><h4 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>⚠️ 该文档尚未完成，仍在编写中...</p></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="创建公私密钥对" tabindex="-1">创建公私密钥对 <a class="header-anchor" href="#创建公私密钥对" aria-label="Permalink to &quot;创建公私密钥对&quot;">​</a></h3><h4 id="linux-1" tabindex="-1">Linux <a class="header-anchor" href="#linux-1" aria-label="Permalink to &quot;Linux&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-KGE4F" id="tab--y99nZS" checked="checked"><label for="tab--y99nZS">以非 root 用户执行</label><input type="radio" name="group-KGE4F" id="tab-89AgS6S"><label for="tab-89AgS6S">以 root 用户执行</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> genkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard/privatekey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pubkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard/publickey</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> genkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard/privatekey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pubkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard/publickey</span></span></code></pre></div></div></div><h4 id="macos-1" tabindex="-1">macOS <a class="header-anchor" href="#macos-1" aria-label="Permalink to &quot;macOS&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> genkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/etc/wireguard/privatekey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pubkey</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/etc/wireguard/publickey</span></span></code></pre></div><h4 id="windows-1" tabindex="-1">Windows <a class="header-anchor" href="#windows-1" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>⚠️ 该文档尚未完成，仍在编写中...</p></div><h3 id="创建一个新的-wireguard-网络接口配置文件" tabindex="-1">创建一个新的 WireGuard 网络接口配置文件 <a class="header-anchor" href="#创建一个新的-wireguard-网络接口配置文件" aria-label="Permalink to &quot;创建一个新的 WireGuard 网络接口配置文件&quot;">​</a></h3><h4 id="创建配置文件" tabindex="-1">创建配置文件 <a class="header-anchor" href="#创建配置文件" aria-label="Permalink to &quot;创建配置文件&quot;">​</a></h4><p>WireGuard 的 VPN 网络都是通过自行配置网络接口并自动连接实现的，网络接口中设定了诸如我们的 IP、DNS、监听端口等等的参数，这些字段和常规的网络接口配置几乎是一致的。 一般我们把第一个 WireGuard 网络接口称之为 <code>wg0</code>，来自 WireGuard 的缩写 <code>wg</code> 和数字 <code>0</code>，表示：第 0 位 WireGuard 网络设备。 使用 Vim 编辑器创建一个对应的 WireGuard 网络接口配置文件 <code>wg0.conf</code> 到 <code>/etc/wireguard</code>目录下：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-VUBuo" id="tab-fFzQC9F" checked="checked"><label for="tab-fFzQC9F">以非 root 用户执行</label><input type="radio" name="group-VUBuo" id="tab-Lm6Z-BR"><label for="tab-Lm6Z-BR">以 root 用户执行</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard/wg0.conf</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard/wg0.conf</span></span></code></pre></div></div></div><h4 id="填写配置文件" tabindex="-1">填写配置文件 <a class="header-anchor" href="#填写配置文件" aria-label="Permalink to &quot;填写配置文件&quot;">​</a></h4><p>写入接口配置信息：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[Interface]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Address</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10.0.0.1/24</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">SaveConfig</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ListenPort</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 51820</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">PrivateKey</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> SERVER_PRIVATE_KEY</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 如果没有启用 firewalld 防火墙服务，可以省略下面两行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">PostUp</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">     =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --add-port</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 51820/udp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --add-masquerade</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">PostDown</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remove-port</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 51820/udp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remove-masquerade</span></span></code></pre></div><p>该接口可以命名为任意名称，但建议使用诸如include <code>wg0</code>或<code>wgvpn0</code>之类的名称。 网络接口 <strong><code>[Interface]</code></strong> 部分中的设置具有以下含义：</p>`,28),y=s("strong",null,"Address",-1),F=s("code",null,"wg0",-1),C=s("li",null,[s("strong",null,"ListenPort"),i(": 在其上使用的端口 WireGuard 将接受传入的连接。")],-1),v=s("strong",null,"PrivateKey",-1),b=s("code",null,"wg genkey",-1),m=s("code",null,"sudo cat /etc/wireguard/privatekey",-1),A=n("<li><strong>SaveConfig</strong>: 设置为 <code>true</code> 时，关闭接口时的当前状态保存到配置文件中。</li><li><strong>（可选）PostUp</strong>: （可选，尤其是在防火墙服务不启动的时候）在启动网络接口 <strong><code>[Interface]</code></strong> 之前执行的命令或脚本。在此示例中，我们使用 <code>firewall-cmd</code> 打开 WireGuard 端口并启用伪装。</li><li><strong>（可选）PostDown</strong>: （可选，尤其是在防火墙服务不启动的时候）在关闭接口之前执行的命令或脚本，这将允许流量离开服务器，从而使VPN客户端可以访问互联网。网络接口 <strong><code>[Interface]</code></strong> 关闭后，防火墙规则将被删除。</li>",3),f=s("h4",{id:"调整配置文件权限",tabindex:"-1"},[i("调整配置文件权限 "),s("a",{class:"header-anchor",href:"#调整配置文件权限","aria-label":'Permalink to "调整配置文件权限"'},"​")],-1),_=s("code",null,"wg0.conf",-1),w=s("code",null,"privatekey",-1),P=s("code",null,"chmod",-1),E=s("code",null,"600",-1),B=n(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-cElxA" id="tab-6-mFABj" checked="checked"><label for="tab-6-mFABj">以非 root 用户执行</label><input type="radio" name="group-cElxA" id="tab-3hTvuez"><label for="tab-3hTvuez">以 root 用户执行</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard/{privatekey,wg0.conf}</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/wireguard/{privatekey,wg0.conf}</span></span></code></pre></div></div></div><h3 id="测试配置" tabindex="-1">测试配置 <a class="header-anchor" href="#测试配置" aria-label="Permalink to &quot;测试配置&quot;">​</a></h3><p>使用 <code>wg-quick</code> 命令快速将我们刚刚配置好的 <code>wg0</code> 接口设定为「启用」：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-G34IE" id="tab-mzLnAPa" checked="checked"><label for="tab-mzLnAPa">以非 root 用户执行</label><input type="radio" name="group-G34IE" id="tab-iZQnx6P"><label for="tab-iZQnx6P">以 root 用户执行</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg-quick</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wg-quick</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span></code></pre></div></div></div><p>该命令将输出以下内容：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg-quick</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[#] ip link add wg0 type wireguard</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[#] wg setconf wg0 /dev/fd/63</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[#] ip -4 address add 10.0.0.1/24 dev wg0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[#] ip link set mtu 1420 up dev wg0</span></span></code></pre></div><p>要查看接口状态和配置，请执行下面的命令：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Hf1iu" id="tab-fqaq_2r" checked="checked"><label for="tab-fqaq_2r">以非 root 用户执行</label><input type="radio" name="group-Hf1iu" id="tab-G1PXcF0"><label for="tab-G1PXcF0">以 root 用户执行</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span></code></pre></div></div></div><p>执行效果：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">interface:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  public</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> key:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> My3uqg8LL9S3XZBo8alclOjiNkp+T6GfxS+Xhn5a40I=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  private</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> key:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (hidden)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  listening</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> port:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 51820</span></span></code></pre></div><p>也可以使用 <code>ip</code> 命令来验证接口状态：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">4:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0:</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">POINTOPOINT,NOARP,UP,LOWER_U</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mtu</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1420</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> qdisc</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> noqueue</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> state</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> UNKNOWN</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> group</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> qlen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    link/none</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    inet</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10.0.0.1/24</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> scope</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">       valid_lft</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> forever</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> preferred_lft</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> forever</span></span></code></pre></div><h3 id="激活开机自启" tabindex="-1">激活开机自启 <a class="header-anchor" href="#激活开机自启" aria-label="Permalink to &quot;激活开机自启&quot;">​</a></h3><p>要在启动时自动启用 <code>wg0</code> 网络接口 <strong><code>[Interface]</code></strong>，请运行以下命令：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4Dj4V" id="tab-Pfrxuzz" checked="checked"><label for="tab-Pfrxuzz">以非 root 用户执行</label><input type="radio" name="group-4Dj4V" id="tab-nTKVQXH"><label for="tab-nTKVQXH">以 root 用户执行</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg-quick@wg0</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> wg-quick@wg0</span></span></code></pre></div></div></div><h2 id="错误排查" tabindex="-1">错误排查 <a class="header-anchor" href="#错误排查" aria-label="Permalink to &quot;错误排查&quot;">​</a></h2><h3 id="usr-bin-wg-quick-line-32-resolvconf-command-not-found" tabindex="-1"><code>/usr/bin/wg-quick: line 32: resolvconf: command not found</code> <a class="header-anchor" href="#usr-bin-wg-quick-line-32-resolvconf-command-not-found" aria-label="Permalink to &quot;\`/usr/bin/wg-quick: line 32: resolvconf: command not found\`&quot;">​</a></h3><p>Debian 11 如果在使用 <code>wg-quick up &lt;interface&gt;</code> 的时候遭遇以下错误：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">/usr/bin/wg-quick:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> line</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 32:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> resolvconf:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> command</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> found</span></span></code></pre></div><p>可以通过下面的命令修复：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openresolv</span></span></code></pre></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2>`,22),q=s("code",null,"/usr/bin/wg-quick: line 31: resolvconf: command not found",-1),x=s("h2",{id:"贡献者",tabindex:"-1"},[i("贡献者 "),s("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),D=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function G(N,I,S,W,V,T){const h=t("NolebasePageProperties"),e=t("VPNolebaseInlineLinkPreview"),p=t("NolebaseGitContributors"),d=t("NolebaseGitChangelog");return r(),o("div",null,[g,a(h),u,s("ol",null,[s("li",null,[y,i(": "),F,i("接口的 IPv4 或 IPv6 地址的逗号分隔列表。使用保留给专用网络的范围内的 IP（10.0.0.0/8（包含 10.0.0.0 到 10.255.255.255）、172.16.0.0/12（包含 172.16.0.0 到 172.15.255.255）或 192.168.0.0/16（包含 192.168.0.0 到 192.168.255.255）这样的 IP 格式是什么样的含义可以参考 "),a(e,{href:"./../IP 后面的斜杠是什么？.html"},{default:l(()=>[i("IP 后面的斜杠是什么？")]),_:1}),i("）")]),C,s("li",null,[v,i(": 由"),b,i("命令生成的私钥。 （使用 "),a(e,{href:"./../../../📟 终端/Linux 命令/文档读写/cat 输出文件.html"},{default:l(()=>[i("cat 输出文件")]),_:1}),i(" 命令获取私钥文件的内容："),m,i("）")]),A]),f,s("p",null,[_,i("和"),w,i("文件对普通用户不可读。 使用 "),P,i(" （参考 "),a(e,{href:"./../../../📟 终端/Linux 命令/权限管理/chmod 变更权限.html"},{default:l(()=>[i("chmod 变更权限")]),_:1}),i("）将权限设置为"),E,i("：")]),B,s("ul",null,[s("li",null,[a(e,{href:"https://superuser.com/a/1546280",target:"_blank",rel:"noreferrer"},{default:l(()=>[q,i(" [WireGuard | Debian] - Super User")]),_:1})]),s("li",null,[a(e,{href:"https://github.com/StreisandEffect/streisand/issues/1434#issuecomment-417792239",target:"_blank",rel:"noreferrer"},{default:l(()=>[i("Issue connecting to Wireguard Linux ubuntu 18.04 · Issue #1434 · StreisandEffect/streisand")]),_:1})])]),x,a(p),D,a(d)])}const O=k(c,[["render",G]]);export{z as __pageData,O as default};
