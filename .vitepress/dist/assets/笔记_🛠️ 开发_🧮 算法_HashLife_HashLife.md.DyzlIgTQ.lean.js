import{_ as r,c as d,J as a,m as i,w as h,a as s,ao as t,E as k,o as E}from"./chunks/framework.E0VnI2yM.js";const g="/assets/figure-1-0604bf1.BbxLRkaU.gif",B="/assets/figure-2-0604bf2.Cas4m4e7.gif",y="/assets/figure-3-0604bf3.DO7MUAU_.gif",C="/assets/figure-4-0604bf4.DHMNvVDz.gif",F="/assets/figure-5-0604bf5.jl1U9wfk.gif",T=JSON.parse('{"title":"HashLife","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/🛠️ 开发/🧮 算法/HashLife/HashLife.md","filePath":"笔记/🛠️ 开发/🧮 算法/HashLife/HashLife.md"}'),o={name:"笔记/🛠️ 开发/🧮 算法/HashLife/HashLife.md"},A=i("h1",{id:"hashlife",tabindex:"-1"},[s("HashLife "),i("a",{class:"header-anchor",href:"#hashlife","aria-label":'Permalink to "HashLife"'},"​")],-1),c=i("h2",{id:"hashlife-tomas-g-rokicki-ddj-april-01-2006",tabindex:"-1"},[s("HashLife - Tomas G. Rokicki, DDJ, April 01, 2006 "),i("a",{class:"header-anchor",href:"#hashlife-tomas-g-rokicki-ddj-april-01-2006","aria-label":'Permalink to "HashLife - Tomas G. Rokicki, DDJ, April 01, 2006"'},"​")],-1),D=i("p",null,"一种压缩空间和时间的算法",-1),u=t("",13),f=t("",34),m=i("p",null,"HashLife 是一种独特的算法，由 sheng ming you 的下一代函数的记忆化组成，适用于宇宙的四叉树表示。同样的技术也可以应用于其他领域。",-1),_=i("p",null,"四叉树相关：",-1),w=i("h2",{id:"贡献者",tabindex:"-1"},[s("贡献者 "),i("a",{class:"header-anchor",href:"#贡献者","aria-label":'Permalink to "贡献者"'},"​")],-1),b=i("h2",{id:"文件历史",tabindex:"-1"},[s("文件历史 "),i("a",{class:"header-anchor",href:"#文件历史","aria-label":'Permalink to "文件历史"'},"​")],-1);function v(N,x,G,L,q,H){const l=k("NolebasePageProperties"),n=k("VPNolebaseInlineLinkPreview"),p=k("NolebaseGitContributors"),e=k("NolebaseGitChangelog");return E(),d("div",null,[A,a(l),c,D,i("p",null,[a(n,{href:"http://www.drdobbs.com/jvm/an-algorithm-for-compressing-space-and-t/184406478",target:"_blank",rel:"noreferrer"},{default:h(()=>[s("http://www.drdobbs.com/jvm/an-algorithm-for-compressing-space-and-t/184406478")]),_:1})]),u,i("p",null,[s("实现生命游戏算法的直接方法是编写一个递归函数，该函数接收给定级别的树，并在原地更新该树或返回一个全新的树。我选择返回一棵全新的树。如果我可以返回同一级别的树，那么这个算法就会非常简单。不幸的是：这在没有一些额外信息的引入的情况下是不可能的，因为该节点的邻居也会影响边界单元的下一代的计算。解决这个问题的一种方法是在同一层传入邻居节点；另一种方法是维护邻居节点指针。相反，我选择了一个更简单的方法。递归函数的结果是一个向下一级的节点，相对于原始节点居中。例如，该函数在第 2 层取一个节点，代表宇宙的一个 4×4 的正方形，并返回第 1 层的一个节点，代表着你从该 4×4 正方形的信息中直接计算出的 2×2 正方形。同样地，它在第 5 级取一个节点，代表宇宙的一个 32×32 的正方形，并返回一个第 4 级的正方形，代表下一层级中中心的 16×16 像素区块。这个可以让你在一个不可变的数据结构上使用完全的功能化方法，如果你喜欢的话。（树状结构的层级命名问题参见："),a(n,{href:"https://stackoverflow.com/questions/59151282/what-is-level-of-root-node-in-a-tree",target:"_blank",rel:"noreferrer"},{default:h(()=>[s("What is level of root node in a tree?")]),_:1}),s("）")]),f,i("p",null,[s("真正的乐趣在于算法，这完全归功于 Bill Gosper，我把所有的功劳和荣誉都归功于他。对于那些想做实验的人来说，开源程序 Golly 可以在"),a(n,{href:"http://sf.net/projects/golly/",target:"_blank",rel:"noreferrer"},{default:h(()=>[s("http://sf.net/projects/golly/")]),_:1}),s("上找到。")]),m,i("p",null,[a(n,{href:"http://twimgs.com/ddj/images/article/2013/0213/compress.zip",target:"_blank",rel:"noreferrer"},{default:h(()=>[s("下载本文附带的源代码。")]),_:1})]),i("p",null,[s("Tomas是Instantis的技术总监。他的联系方式是"),a(n,{href:"mailto:rokicki@gmail.com",target:"_blank",rel:"noreferrer"},{default:h(()=>[s("rokicki@gmail.com")]),_:1}),s("。")]),_,i("p",null,[s("四叉树运算可视化："),a(n,{href:"http://blog.ivank.net/quadtree-visualization.html",target:"_blank",rel:"noreferrer"},{default:h(()=>[s("http://blog.ivank.net/quadtree-visualization.html")]),_:1})]),i("p",null,[s("四叉树可视化："),a(n,{href:"https://codepen.io/afterburn/details/LdQGZV",target:"_blank",rel:"noreferrer"},{default:h(()=>[s("https://codepen.io/afterburn/details/LdQGZV")]),_:1})]),i("p",null,[s("树生成算法："),a(n,{href:"https://cs.brown.edu/people/rtamassi/gdhandbook/chapters/trees.pdf",target:"_blank",rel:"noreferrer"},{default:h(()=>[s("https://cs.brown.edu/people/rtamassi/gdhandbook/chapters/trees.pdf")]),_:1})]),w,a(p),b,a(e)])}const j=r(o,[["render",v]]);export{T as __pageData,j as default};
