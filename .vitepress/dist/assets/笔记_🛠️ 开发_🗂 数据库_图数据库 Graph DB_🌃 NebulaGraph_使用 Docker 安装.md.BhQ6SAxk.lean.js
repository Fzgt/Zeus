import{_ as r,c as d,J as a,m as s,w as e,a as i,ao as t,E as l,o as c}from"./chunks/framework.E0VnI2yM.js";const f="/assets/image_20211125141616.RYtbFGXC.png",w=JSON.parse('{"title":"使用 Docker 安装","description":"","frontmatter":{"tags":["命令行/docker","开发/容器化/Docker","开发/云原生/Docker","软件/云原生/docker","计算机/数据库/图数据库/nebulagraph","开发/容器化/Docker/Docker-Compose"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🗂 数据库/图数据库 Graph DB/🌃 NebulaGraph/使用 Docker 安装.md","filePath":"笔记/🛠️ 开发/🗂 数据库/图数据库 Graph DB/🌃 NebulaGraph/使用 Docker 安装.md"}'),g={name:"笔记/🛠️ 开发/🗂 数据库/图数据库 Graph DB/🌃 NebulaGraph/使用 Docker 安装.md"},F=s("h1",{id:"使用-docker-安装",tabindex:"-1"},[i("使用 Docker 安装 "),s("a",{class:"header-anchor",href:"#使用-docker-安装","aria-label":'Permalink to "使用 Docker 安装"'},"​")],-1),C=t("",3),u=s("thead",null,[s("tr",null,[s("th",null,"主体"),s("th",null,"版本号"),s("th",null,"文档地址（如果有）")])],-1),y=s("td",null,"NebulaGraph",-1),A=s("td",null,"v2.6.0",-1),P=t("",5),b=t("",16),z=t("",7),B=s("h2",{id:"贡献者",tabindex:"-1"},[i("贡献者 "),s("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),_=s("h2",{id:"文件历史",tabindex:"-1"},[i("文件历史 "),s("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function m(v,E,D,N,q,T){const h=l("NolebasePageProperties"),n=l("VPNolebaseInlineLinkPreview"),p=l("NolebaseUnlazyImg"),k=l("NolebaseGitContributors"),o=l("NolebaseGitChangelog");return c(),d("div",null,[F,a(h),C,s("table",null,[u,s("tbody",null,[s("tr",null,[y,A,s("td",null,[a(n,{href:"https://docs.nebula-graph.com.cn/2.6.0/",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("https://docs.nebula-graph.com.cn/2.6.0/")]),_:1})])])])]),P,s("p",null,[a(p,{src:f,alt:"",thumbhash:"/fcBA4C8v+U0dRxW0WZAWgo=",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAOCAYAAABO3B6yAAAHWklEQVR4AQCBAH7/APP3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/AIEAfv8A8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f8AgQB+/wDz9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5/wCBAH7/APP3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/AIEAfv8A8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f8AgQB+/wDz9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5/wCBAH7/APP3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/AIEAfv8A8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f8AgQB+/wDz9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5/wCBAH7/APP3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/AIEAfv8A8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f8AgQB+/wDz9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5/wCBAH7/APP3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/AYEAfv8A8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f/z9/n/8/f5//P3+f8d5cvbnRGNWwAAAABJRU5ErkJggg==",width:"1528",height:"715",autoSizes:"true"})]),s("p",null,[i("在"),a(n,{href:"https://github.com/vesoft-inc/nebula-docker-compose",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("官方仓库")]),_:1}),i("上查看当前最新的和最推荐的版本，此处写下文档时，最新版本是 2.6.0（对应的分支应该是 v2.6.0），我们切换到 2.6.0 分支")]),b,s("p",null,[i("如果此前没有安装过 nebula-console（Docker 镜像和 docker-compose 不会附带安装这个命令），则需要去 "),a(n,{href:"https://github.com/vesoft-inc/nebula-console/releases/",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("nebula-console 官方仓库 - 发行页面")]),_:1}),i("下载对应的版本（我安装的镜像版本是 2.6.0，此处我也下载 2.6.0 的 nebula-console 程序）。")]),z,s("p",null,[a(n,{href:"https://docs.nebula-graph.com.cn/2.6.1/1.introduction/1.what-is-nebula-graph/",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("什么是 Nebula Graph - Nebula Graph Database 手册")]),_:1})]),s("p",null,[a(n,{href:"https://docs.nebula-graph.com.cn/2.0.1/2.quick-start/2.deploy-nebula-graph-with-docker-compose/#nebula_graph",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("Docker Compose部署Nebula Graph - Nebula Graph Database 手册")]),_:1})]),s("p",null,[a(n,{href:"https://github.com/vesoft-inc/nebula-docker-compose/blob/v2.0.0/README_zh-CN.md",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("nebula-docker-compose/README_zh-CN.md at v2.0.0 · vesoft-inc/nebula-docker-compose")]),_:1})]),B,a(k),_,a(o)])}const G=r(g,[["render",m]]);export{w as __pageData,G as default};
