(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{69:function(t,o,e){"use strict";e.r(o);var s=e(0),a=function(t){var o,e,s=(e=void 0,{attributes:{slug:"talk-about-scoop-the-package-manager-for-windows-again",layout:o="post",title:"再谈谈 Scoop 这个 Windows 下的软件包管理器",keywords:"Windows 包管理器,windows package manager,Scoop Chocolatey, Scoop 安装,Windows 包管理工具,Chocolatey vs Scoop",description:"与 Chocolatey Windows 包管理工具（Package Manager）相比， Scoop 是一款更为轻量的 Windows 包管理器。本文将对比 Chocolatey Scoop 这两款工具的区别，介绍一下 Scoop 安装使用体验，如果你没有重度的包管理需求， 不妨可以尝试一下 Scoop PowerShell Concfg 这套组合。",date:"2018-05-12 21:44:39",updated:"2018-11-03 00:46:50",cover:"/uploads/2018/12/20181225004.png",excerpt:'<p>在 2015 年的《<saber-link to="/blog/2015/08/use-scoop-to-enhance-windows-powershell">用 Scoop 改善 Windows Powershell</saber-link>》博文中，我曾经介绍过这个令我眼前一亮的 Windows 软件包管理器。那是我刚开始使用上 Scoop 的时候，回看过去对它的介绍，也确像是一见钟情后的入坑纪实。简单，直接。</p>\n',createdAt:new Date(1526132679e3),updatedAt:new Date(154117721e4),type:o,permalink:"/blog/2018/05/talk-about-scoop-the-package-manager-for-windows-again"},internal:e,contentType:"markdown",content:e}),a=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=s}].concat(a);["layout","transition"].forEach(function(o){var e=t.options.PageComponent;e&&(t.options[o]=e[o]),void 0===t.options[o]&&(t.options[o]=s.attributes[o])}),t.options.name="page-wrapper-"+s.attributes.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(s.a)({},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("layout-manager",[e("figure",{attrs:{"data-type":"image"}},[e("img",{attrs:{src:"/static/img/loading.gif",alt:"Let us Scoop it!",title:"Let us Scoop it!","data-src":"/uploads/2018/05/20180512001.gif"}}),e("figcaption",[t._v("Let us Scoop it!")])]),t._v(" "),e("p",[t._v("在 2015 年的《"),e("saber-link",{attrs:{to:"/blog/2015/08/use-scoop-to-enhance-windows-powershell"}},[t._v("用 Scoop 改善 Windows Powershell")]),t._v("》博文中，我曾经介绍过这个令我眼前一亮的 Windows 软件包管理器。那是我刚开始使用上 Scoop 的时候，回看过去对它的介绍，也确像是一见钟情后的入坑纪实。简单，直接。")],1),t._v(" "),e("p",[t._v("那会我很快适应了 Scoop，并一直使用至今。经过这两年多的使用，我渐渐地更加依赖 Scoop 来管理一些软件。在我日常的 Windows 使用中，它带给我的便利，已不再仅仅是那时所言的“改善 Windows Powershell”。其实感觉就现在的 Scoop 而言，它确实还是挺小众的。只是最近我发现有些人通过搜索引擎浏览了我的那篇旧文，我觉得那篇文章太旧且简单了。于是挖下这么一个坑，写下这篇新文章更新下对 Scoop 的介绍与体会。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"%E8%BD%AF%E4%BB%B6%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8"}},[t._v("软件包管理器")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://scoop.sh/")])])]),t._v(" "),e("p",[t._v("这是 Scoop 的官网首页。网站正中央醒目的 Slogan 已表明了它的定位，一个 Windows 下的命令行式的（软件）安装工具。")]),t._v(" "),e("blockquote",[e("p",[t._v("A command-line installer for Windows")])]),t._v(" "),e("p",[t._v("虽然 Scoop 的作者在项目的 GitHub Wiki 中谈到，\nScoop 只是一个安装工具（installer），不应该被称为包管理器（package manager）。但是对于使用者而言，它与我们一般认为的软件包管理工具其实很是相似。")]),t._v(" "),e("p",[t._v("作为对比，我列举一下常见的不同系统下类似的工具：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("系统")]),t._v(" "),e("th",[t._v("工具")]),t._v(" "),e("th",[t._v("范例")]),t._v(" "),e("th",[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Arch Linux")]),t._v(" "),e("td",[t._v("Pacman")]),t._v(" "),e("td",[t._v("pacman -S pyenv")]),t._v(" "),e("td",[t._v("Built-in")])]),t._v(" "),e("tr",[e("td",[t._v("CentOS/RHEL")]),t._v(" "),e("td",[t._v("yum")]),t._v(" "),e("td",[t._v("yum install python-wheel")]),t._v(" "),e("td",[t._v("Built-in")])]),t._v(" "),e("tr",[e("td",[t._v("Debian/Ubuntu")]),t._v(" "),e("td",[t._v("apt/apt-get")]),t._v(" "),e("td",[t._v("apt install python3")]),t._v(" "),e("td",[t._v("Built-in")])]),t._v(" "),e("tr",[e("td",[t._v("Fedora")]),t._v(" "),e("td",[t._v("dnf")]),t._v(" "),e("td",[t._v("dnf install python-pip")]),t._v(" "),e("td",[t._v("Built-in")])]),t._v(" "),e("tr",[e("td",[t._v("macOS")]),t._v(" "),e("td",[t._v("Homebrew")]),t._v(" "),e("td",[t._v("brew install python")]),t._v(" "),e("td",[t._v("3rd-party")])]),t._v(" "),e("tr",[e("td",[t._v("openSUSE")]),t._v(" "),e("td",[t._v("zypper")]),t._v(" "),e("td",[t._v("zypper install python3-pip")]),t._v(" "),e("td",[t._v("Built-in")])]),t._v(" "),e("tr",[e("td",[t._v("Windows")]),t._v(" "),e("td",[t._v("Chocolatey")]),t._v(" "),e("td",[t._v("choco install docker")]),t._v(" "),e("td",[t._v("3rd-party")])])])]),t._v(" "),e("p",[t._v("这些工具的一个重要的特征是在终端下以"),e("strong",[t._v("命令行")]),t._v("形式工作。所以很多情况下，安装一个软件时你不再需要使用浏览器打开\n"),e("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.python.org/")]),t._v("\n网页，找到并下载安装包，双击安装程序。而是直接一句命令，然后等完成就行了。")]),t._v(" "),e("figure",{staticClass:"right",attrs:{"data-type":"image"}},[e("img",{attrs:{src:"/static/img/loading.gif",alt:"Homebrew",title:"Homebrew","data-src":"/uploads/2018/02/20180213002.png"}}),e("figcaption",[t._v("Homebrew")])]),t._v(" "),e("p",[t._v("作为一个以桌面环境专长的系统，Windows 自然不会有像 Arch Linux 亦或者 Debian\n等以命令行环境起家的 Linux 系统那样，内置有这样的工具。不过，苹果家的 macOS\n这个无论命令行环境还是桌面环境都好使的系统，却也没类似的工具。但在用户社区的不断发展下，"),e("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Homebrew")]),t._v(" 这个神器从社区中诞生，弥补了 macOS 的一大“缺陷”。那句充满自信的 Slogan，足以体现出 Homebrew\n的地位。（更别提以"),e("s",[t._v("小号")]),t._v(" Linuxbrew 身份扩散至 Linux 社区……会不会有\nWindowsbrew/Winbrew 呢哈哈……）")]),t._v(" "),e("blockquote",[e("p",[t._v("Homebrew: The "),e("strong",[t._v("missing")]),t._v(" package manager for macOS")])]),t._v(" "),e("p",[t._v("回到 Windows 这边厢。用户的需求与社区的发展必然也会催生类似的工具。在产生的这为数不多的几种工具中，巧克力（Chocolatey）是目前最为出名，相信也是用户数最为多的一个。从最初的开源项目，到现在的独立公司商业项目（仍开源），收获近 6000 个软件包与近 3 亿次包安装次数（2018 年 5 月官网数据）。甚至在 Windows 10 系统开始集成的官方“包管理器”（这里打引号是因为我觉得它已经超出了包管理器的基本范畴，更像是一个聚合物，一个超集）—— "),e("a",{attrs:{href:"https://github.com/OneGet/oneget",target:"_blank",rel:"noopener noreferrer"}},[t._v("OneGet")]),t._v(" 都提供了对 Chocolatey 源的支持，你可以直接用 OneGet 安装 Chocolatey 的软件包。")]),t._v(" "),e("p",[t._v("但就像 NPM 之后的 Yarn 那样，轮子还是会有人重新造的。在 Chocolatey 之后的\n2013 年，"),e("a",{attrs:{href:"https://github.com/lukesampson",target:"_blank",rel:"noopener noreferrer"}},[t._v("lukesampson")]),t._v(" 开发了 Scoop。我了解过但没并用过 Chocolatey，所以接下来我只能根据我对 Chocolatey 的短浅认识，来说一说我为什么一开始就选择用上了 Scoop。")]),t._v(" "),e("h2",{attrs:{id:"why-scoop"}},[t._v("Why Scoop")]),t._v(" "),e("p",{staticStyle:{position:"relative","padding-bottom":"56.25%"}},[e("iframe",{staticStyle:{position:"absolute",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/a85QLUJ0Wbs",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})]),t._v(" "),e("p",[t._v("上方是 Scoop 刚发布时（我想也是唯一）的介绍视频，观看要能访问 Youtube。")]),t._v(" "),e("p",[t._v("如上文说的我对 Scoop 的“一见钟情”，这里我换个表达：第一感觉。很多情况下第一感觉确实很能影响一些事情，不管人还是物。就从上面的视频里拿出来说一下，\nScoop 的安装说明真的很直截了当，有且仅有那一行命令，没有任何选择余地。就像 Homebrew 那样，将命令粘贴至终端回车就好了。我也看过 Chocolatey 的安装说明"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),t._v("，虽然也提供了无脑一行命令的安装方式，但看到 More Install Options\n我还是会研究一番看看怎么安装最优最合适，然后就不由自主地陷进去了。这里有个趣闻，Chocolatey 的创始人曾经在 Scoop 的 GitHub 项目下提 issue"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),t._v("\n询问 Scoop 能否整合 Chocolatey，并表示 Scoop 非常"),e("strong",[t._v("利落")]),t._v("。")]),t._v(" "),e("p",[t._v("上面是第一感观。第二个是 Scoop 跟 Chocolatey 对于管理员权限安装的部分的不同处理方式，直接让我倾向于先入手了 Scoop。Chocolatey 的安装脚本默认要求管理员权限安装，同时非管理员安装默认路径是 "),e("code",{pre:!0},[t._v("C:\\ProgramData\\chocoportable")]),t._v("，这对于非高权限用户来说不太友好（比如没有管理员权限的工作机安装会比较折腾），而 Scoop 默认仅需普通用户权限，安装路径是 "),e("code",{pre:!0},[t._v("%USERPROFILE%\\scoop")]),t._v(" 则显得比较清新，不过这都是可以根据需求修改的了。")]),t._v(" "),e("figure",{staticClass:"left",attrs:{"data-type":"image"}},[e("img",{attrs:{src:"/static/img/loading.gif",alt:"Want some Chocolatey?",title:"Want some Chocolatey?","data-src":"/uploads/2018/05/20180506001.png"}}),e("figcaption",[t._v("Want some Chocolatey?")])]),t._v(" "),e("p",[t._v("关于 Chocolatey 默认管理员权限安装的原因，应该是比较明显的：\nChocolatey 需要能处理安装更多的软件包，比如 Flash Player Plugin，\nVirtualBox，以及 Windows 的各种 KB 补丁。因为默认管理员，所以很多只能以管理员身份安装到高权限目录的软件 Chocolatey 就能比较方便地处理了。而 Scoop 的处理方式则反过来，默认普通用户权限。软件包能限当前用户，不全局安装的就不全局安装。如果需要全局安装则自行利用 "),e("code",{pre:!0},[t._v("-g")]),t._v(" 参数提升为管理员权限安装。")]),t._v(" "),e("p",[t._v("这极大地方便了低权限用户，同时用户目录安装不污染系统目录，比较讨喜“绿色用户”。我觉得 Chocolatey 才更像是命令行式软件安装工具（Installer），通过命令行来执行各种软件的安装。而 Scoop 在我看来优先解压包体的理念，反而更有 Homebrew\n那种装瓶（bottle）与倾倒（poured）的感觉"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn3",id:"fnref3"}},[t._v("[3]")])]),t._v("。")]),t._v(" "),e("p",[t._v("第三个就是软件包（package）及其仓库。二者在这一部分的不同设计，让我决定了先放弃尝试 Chocolatey。首先是关于软件包的定义，Chocolatey 用的是\n"),e("code",{pre:!0},[t._v(".ps1")]),t._v(" 脚本和 "),e("code",{pre:!0},[t._v(".nuspec")]),t._v(" 定义文件（xml），Scoop 用的是 json。乍一看你便会像\nChocolatey 作者对 Scoop 的评价那样：")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("ferventcoder")]),t._v(": this is super neat...")])]),t._v(" "),e("p",[t._v("另一个是 Scoop 有用户软件包仓库的概念，官方仓库里没有你想用的软件包，又或者你想自定义一些软件包，那么可以自己建一个仓库，存放自己的软件包定义文件。在实际的使用体验上，相信也会更加喜欢 Scoop 这样的设计，它更接近于 Homebrew：软件包 manifest -> Formula，仓库 bucket -> tap。")]),t._v(" "),e("p",[t._v("剩下的可以再通过上面的视频介绍自行体会一下。总的来说，\nChocolatey 能更加全面地包办绝大多数的软件安装，适应重度需求；而 Scoop 则更加简单利落，容易自定义软件包，适应中低需求。而我恰是后者，对于像 VirtualBox、Docker for Windows 这些需要高权限的软件还是会用安装包在用户界面下自定义安装。更特殊的用户倒是更可以将 Chocolatey 和 Scoop 结合使用。")]),t._v(" "),e("h2",{attrs:{id:"how-scoop"}},[t._v("How Scoop")]),t._v(" "),e("p",[t._v("Scoop 需要 PowerShell 3 以上进行安装使用。最新的 Windows 10 系统已经是\nPowerShell 5 了所以可以直接使用安装命令。Windows 7 的话默认是 PowerShell 2，可以根据微软的文档"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn4",id:"fnref4"}},[t._v("[4]")])]),t._v("升级到 PowerShell 5，或者可以安装使用新的 "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/scripting/setup/installing-powershell-core-on-windows?view=powershell-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("PowerShell Core")]),t._v("，即 PowerShell 6。然后两句命令很快就安装好了：")]),t._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[e("code",{pre:!0,attrs:{class:"language-powershell"}},[t._v("# 先设置 PowerShell 允许执行未签名脚本\nset-executionpolicy remotesigned -s currentuser\n# 下载 Scoop 安装脚本进行安装\niex (new-object net.webclient).downloadstring('https://get.scoop.sh')")])])]),e("figure",{attrs:{"data-type":"image"}},[e("img",{attrs:{src:"/static/img/loading.gif",alt:"我这里已经安装过了",title:"我这里已经安装过了","data-src":"/uploads/2018/05/20180510001.png"}}),e("figcaption",[t._v("我这里已经安装过了")])]),t._v(" "),e("p",[t._v("由于 Scoop 的安装脚本托管在 GitHub 的仓库里，所以对于无法正常访问 GitHub\n的用户来说，安装的时候可能需要加一层全局代理后再进行安装"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn5",id:"fnref5"}},[t._v("[5]")])]),t._v("。")]),t._v(" "),e("p",[t._v("执行 "),e("code",{pre:!0},[t._v("scoop help")]),t._v(" 看一下子命令就能快速上手，用过 Homebrew 的话应该更不在话下。比如 "),e("code",{pre:!0},[t._v("scoop info <app>")]),t._v(" 是最近新集成的子命令"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn6",id:"fnref6"}},[t._v("[6]")])]),t._v("，在安装软件前可以对包体有个了解。")]),t._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[e("code",{pre:!0,attrs:{class:"language-powershell"}},[t._v("$ scoop info grep\nName:      grep\nVersion:   2.5.4\nWebsite:   http://gnuwin32.sourceforge.net/packages/grep.htm\nLicense:   GPL-2.0 (https://spdx.org/licenses/GPL-2.0.html)\nManifest:\n  C:\\Users\\hanabi\\scoop\\apps\\scoop\\current\\lib\\..\\bucket\\grep.json\nInstalled: No\nBinaries:\n  bin\\grep.exe")])])]),e("p",[t._v("然后就能像上面的视频里那样安装和使用软件包了。这里说一下，由于 Scoop 的设计以及其基于GitHub 的特性，一些软件包相信你会必定安装的：")]),t._v(" "),e("blockquote",[e("p",[t._v("scoop install git 7zip")])]),t._v(" "),e("p",[t._v("就像介绍视频里说的那样，Scoop 默认不会污染用户的 PATH 环境变量（除非软件包有修改环境变量的定义），而是使用垫片（shims）来进行统一管理调用执行文件。")]),t._v(" "),e("figure",{staticClass:"right",attrs:{"data-type":"image"}},[e("img",{attrs:{src:"/static/img/loading.gif",alt:"嗯，Bucket",title:"嗯，Bucket","data-src":"/uploads/2018/05/20180510002.png"}}),e("figcaption",[t._v("嗯，Bucket")])]),t._v(" "),e("p",[t._v("当你通过 "),e("code",{pre:!0},[t._v("scoop search <app>")]),t._v(" 搜不到需要的软件包的时候，这时候便是你开始进阶使用 Scoop 的时候了。Scoop 管存放软件包描述文件的地方叫做桶（Bucket），桶里面就是一个个 json 格式的软件包描述文件，Scoop 的默认桶的名字就叫 "),e("a",{attrs:{href:"https://github.com/lukesampson/scoop/tree/master/bucket",target:"_blank",rel:"noopener noreferrer"}},[t._v("bucket")]),t._v("。当找不到需要的软件的时候，最直接的自然是可以向仓库提交你想要的软件包的描述文件，比如像这些这样："),e("a",{attrs:{href:"https://github.com/lukesampson/scoop/pull/2151",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoop/pull/2151")]),t._v("、\n"),e("a",{attrs:{href:"https://github.com/lukesampson/scoop/pull/2143",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoop/pull/2143")]),t._v("、\n"),e("a",{attrs:{href:"https://github.com/lukesampson/scoop/pull/2002",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoop/pull/2002")]),t._v("。")]),t._v(" "),e("p",[t._v("不过在你进一步使用 Scoop 时，除了会遇到找不到软件包而可能会频繁提交描述文件之外，你还可能会对已有的某些软件包，有一些自己的“差异需求”，比如“不想某软件包设置某个环境变量”、或者“修改某个软件包的安装行为”。这时候，一个更好的办法："),e("strong",[t._v("自定义桶")]),t._v("。")]),t._v(" "),e("p",[t._v("桶其实就像 Homebrew 的 Tap，关于桶的详细概念可以查看一下 Scoop 的 Wiki 页"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn7",id:"fnref7"}},[t._v("[7]")])]),t._v("。通过自定义桶就可以将自己的“使用习惯”收纳起来，而不用频繁向 Scoop 的 main bucket\n提交请求（Scoop 维护者一般也不能马上处理你的请求）。我维护着自己的桶，所以自己的软件包需求随时可以进行自定义：")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/h404bi/dorado",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/h404bi/dorado")])])]),t._v(" "),e("p",[t._v("比如 Scoop 的 main bucket 中的 nvm-windows 使用时会有 UAC 提权，我自己编译了一份没有 UAC 弹窗的 nvm-windows，放到了自己的桶里面。另外要说一下的是，Scoop 的自定义桶不一定要求存放到 GitHub 的公开仓库上的，所以完全可以在本地创建一个 git 仓库，做成一个不公开的私有桶，用于存放一些不宜公开的软件包。")]),t._v(" "),e("figure",{attrs:{"data-type":"image"}},[e("img",{attrs:{src:"/static/img/loading.gif",alt:"Add a scoop bucket","data-src":"/uploads/2018/05/20180512002.gif"}}),e("figcaption",[t._v("Add a scoop bucket")])]),t._v(" "),e("p",[t._v("Scoop 还自带一个切换软件包版本的功能，可以让你在不同的软件包版本中进行自由切换。这个我想在上文的视频中你已经有看到了。这在你同时需要几个版本的软件包时会比较有用，比如 Python2 和 Python3（虽然 Python2 即将退役）。")]),t._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[e("code",{pre:!0,attrs:{class:"language-powershell"}},[t._v("$ scoop install python27 python\n$ python --version        # -> Python 3.6.x\n\n$ scoop reset python27\n$ python --version        # -> Python 2.7.x\n\n$ scoop reset python\n$ python --version        # -> Python 3.6.x")])])]),e("p",[t._v("我看到网络上有不少使用 Chocolatey 的人吐槽其下载安装软件包的时候奇慢，有的甚至因此而放弃继续使用 Chocolatey。通过 Scoop 本地自定义桶的话，拉取软件包描述文件的时候可以说是毫秒级的。然后还可以在描述文件里，自行修改软件包的下载链接，比如改成适合自己的 CDN 下载或者是私有软件源等。这样安装软件时会特别快速。这一切都得益于 Scoop 比 Chocolatey 更利落的软件包描述文件设计以及桶设计，用户自定义软件包所需的学习成本更低。")]),t._v(" "),e("h2",{attrs:{id:"%E4%BD%86-scoop-%E8%BF%98%E6%9C%89%E9%97%AE%E9%A2%98"}},[t._v("但 Scoop 还有问题")]),t._v(" "),e("p",[t._v("Scoop 是一个从个人项目开始，发展到现在由社区维护的开源项目。Scoop 不像 Chocolatey\n那样已经成立公司，并推出商业版，它仍然是一个“个人”项目，只是目前靠着社区在维护。所以它的活跃度与维护情况肯定是不如 Chocolatey 的，一些缺点还是有的。这里我只说一下几点我认为的 Scoop 应该要在后续发展中优先考虑处理的问题。")]),t._v(" "),e("h3",{attrs:{id:"%E6%B2%A1%E6%9C%89%E7%A8%B3%E5%AE%9A%E7%89%88"}},[t._v("没有稳定版")]),t._v(" "),e("p",[t._v("目前的 Scoop 本身的核心功能是“滚动更新”的，它没有版本号的概念，不像 Chocolatey"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn8",id:"fnref8"}},[t._v("[8]")])]),t._v(" 和 Homebrew"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn9",id:"fnref9"}},[t._v("[9]")])]),t._v(" 那样有 Releases，所以也就没有所谓稳定版本。只要 Scoop 的 GitHub 仓库有新的 commits，用户通过 "),e("code",{pre:!0},[t._v("scoop update")]),t._v(" 命令就会拉取所有的 commits 更新。")]),t._v(" "),e("figure",{staticClass:"right",attrs:{"data-type":"image"}},[e("img",{attrs:{src:"/static/img/loading.gif",alt:"图来源于网络","data-src":"/uploads/2018/05/20180512004.png"}}),e("figcaption",[t._v("图来源于网络")])]),t._v(" "),e("p",[t._v("如此的滚动更新，对于一个社区维护的开源软件来说，会很容易产生问题。没有 tags，没有 releases，如果维护者或者贡献者在 commit 时不小心手抖加入或者修改了一些代码，造成了 BUG，并且 commit 的人还并不知情。这个 BUG 将很快地传到最终用户那里，因为用户更新时是立刻拉取最新 commit 的。这时遇到问题的用户，需要到 GitHub 上开 issue 反馈，或者开 Pull-Request。但有权限处理合并的协作者也就那么几位（创始人 Luke 不怎么活跃了"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn10",id:"fnref10"}},[t._v("[10]")])]),t._v("，除了目前的 commit 数最多那位主要维护者外，其他几位协作者也是最近才加的），按以往的情况来看多数得半天以上时间才完成修复。")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/2144",target:"_blank",rel:"noopener noreferrer"}},[t._v("更新历史新功能导致 BUG 大概半天之后修复")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/2243",target:"_blank",rel:"noopener noreferrer"}},[t._v("重构核心函数导致 BUG 大概半天之后修复")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/2239",target:"_blank",rel:"noopener noreferrer"}},[t._v("重构核心函数导致 BUG 数天尚未完成修复")])])]),t._v(" "),e("p",[t._v("Scoop 目前的设计是很直接的，核心功能组件跟 main bucket 揉在一起，一更新 bucket\n核心文件跟着更新。如果我没记错的话，早期的 Homebrew 也是这样的设计，而 Scoop\n又是借鉴了 Homebrew 的设计。如今的 Homebrew 已经拆分为 brew 和 homebrew-core 两部分，前者是 brew 的核心功能代码，后者是默认的软件包仓库。brew 核心会打 release 包，用户在更新时会检查 brew 有没有新版本，如果没有则不会更新 brew 本身，只更新软件包仓库。")]),t._v(" "),e("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[e("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("$ brew -v\nHomebrew 1.6.3\nHomebrew/homebrew-core (git revision bdb1ff; last commit 2018-05-03)")])])]),e("p",[t._v("我觉得 brew 这个新设计 Scoop 是需要跟进的。将 main bucket 从 Scoop 主仓库中分离出来，\nScoop 本身的仓库维护其核心功能代码，并打上 tags，发布 release 包，给 Scoop 一个版本号，定期更新稳定可用的版本。所有用户安装 Scoop 时，默认使用最新的稳定版，并克隆 main bucket 的最新 commit。而 Scoop 主仓库继续向前推进开发，开发者及少数激进的用户可以通过修改 "),e("code",{pre:!0},[t._v("channel")]),t._v(" 设置使用 nightly/insider 版本的 Scoop。这样即时新功能出 BUG 了，也不会马上传播到所有的 Scoop 用户，因为大部分用户用着稳定版。")]),t._v(" "),e("h3",{attrs:{id:"%E4%BB%8D%E9%9C%80%E4%BC%98%E5%8C%96%E7%9A%84%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD"}},[t._v("仍需优化的核心功能")]),t._v(" "),e("p",[t._v("在我使用的这近三年里，除了一次默认安装路径的变动之外"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn11",id:"fnref11"}},[t._v("[11]")])]),t._v("，在使用上其实并没有感受到 Scoop 有什么巨大的改动。它并没有什么 Breaking Changes，一直是平平淡淡稳定前进，加加子命令完善体验之类的，虽然 Scoop 似乎是被越来越多人发现，当然越来越多人用意味着会有越来越多的新需求和新问题（所以我才觉得得有稳定版本）。")]),t._v(" "),e("figure",{attrs:{"data-type":"image"}},[e("img",{attrs:{src:"/static/img/loading.gif",alt:"Scoop 的 GitHub Stars 指数","data-src":"/uploads/2018/05/20180512003.png"}}),e("figcaption",[t._v("Scoop 的 GitHub Stars 指数")])]),t._v(" "),e("p",[t._v("不过没有大改动的同时，Scoop 的一些存在设计不足的核心功能，也照样是稳稳定定没有优化。这里我就说几个在使用 Scoop 时一定会遇到的情况：")]),t._v(" "),e("p",[t._v("第一个。"),e("code",{pre:!0},[t._v("scoop install <app>")]),t._v(" 安装软件包的命令。当你使用的自定义 bucket 当中有跟主 bucket 有相同名字的软件包描述文件的时候，直接执行 "),e("code",{pre:!0},[t._v("scoop install <app>")]),t._v("\n默认会选择主 bucket 中的描述文件进行安装。你不得不卸载软件包并重新执行\n"),e("code",{pre:!0},[t._v("scoop install <bucket>/<app>")]),t._v(" 进行安装。对于有自定义桶的用户来说，估计会经常遇到，因为一时疏忽就忘了 bucket 名字直接敲软件名字安装了。关于这个点，最近才有人开了个新 issue 讨论这个问题"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn12",id:"fnref12"}},[t._v("[12]")])]),t._v("。")]),t._v(" "),e("p",[t._v("第二个。"),e("code",{pre:!0},[t._v("scoop uninstall <app>")]),t._v(" 卸载软件包的命令。当你卸载一个软件包，而恰好这个软件正在运行的时候。目前的卸载指令会让这个软件包处于一个\n“没卸载干净”的状态"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn13",id:"fnref13"}},[t._v("[13]")])]),t._v("。只要执行卸载，便会马上清理相关的 shims，shortcuts，然后删到一些不能删的文件了，就会提示文件正在使用不能清理。更好的设计应该是先检查文件是否有占用，是否有服务在运行。没有才开始清理 shims 等。这样软件包可以要么是完全卸载干净了、要么还是正常的安装状态。")]),t._v(" "),e("p",[t._v("第三个。"),e("code",{pre:!0},[t._v("scoop cleanup <app>")]),t._v(" 清理旧版本软件包的命令。这个命令有跟上面的卸载命令有类似的问题。用 Scoop 更新了软件后，当前运行着的其实还是旧版本的软件，然后清理会把旧版本的清理掉，这时会跟卸载命令一样，删到一些不能删的文件了，才会提示文件正在使用不能清理，让旧版本软件变成一个“没卸载干净又不再可用”的状态。")]),t._v(" "),e("p",[t._v("第四个。"),e("code",{pre:!0},[t._v("scoop update <app>")]),t._v(" 更新软件包的命令。Scoop 的更新命令的逻辑是这样的，当执行更新一个软件包时，它会先卸载旧的版本（清理 shims、shortcuts 等），给新版本预创建目录，然后下载新版本并检查安装包的哈希值。当哈希值正确时，才进行安装。那如果下载软件包过程中断线了呢？或者哈希值不对呢？于是问题来了，恰恰是这样的逻辑，会导致一个大概会是你用 Scoop 时最经常遇到的问题——软件实际上没更新成功，但 Scoop 却给你显示软件已经是最新的版本，并且旧版本无法使用"),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn14",id:"fnref14"}},[t._v("[14]")])]),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn15",id:"fnref15"}},[t._v("[15]")])]),t._v("。你不得不执行 uninstall 命令并重新安装软件，或者 reset 命令重置软件。这个问题我相信只要是 Scoop 用户，都会经历过。")]),t._v(" "),e("p",[t._v("回头看一下你会发现，我所讲的这几点基本上覆盖了 Scoop 最常用的几个命令：安装、卸载、更新、清理，这几个都是 Scoop 最最核心的功能。自我开始用 Scoop 到现在，这几个毛病就一直存在着。所以我才说，Scoop 的一些核心功能仍然存在不足需要改进。到目前还没有优化，也许是没有很好的解决方案吧。")]),t._v(" "),e("h2",{attrs:{id:"%E7%BB%93%E8%AF%AD"}},[t._v("结语")]),t._v(" "),e("p",[t._v("回看全文下来，我觉得文章算了符合了我原本想写成的，以我的角度更新对 Scoop\n的介绍与体会的形式。对比、优点、缺点都稍微讲到了，应该不会有强烈的安利感觉。我看到访问记录有人从搜索引擎搜 Chocolatey 和 Scoop 的对比，找到了我原来那篇文章。想必也是想做个选择。其实如果你是偏重度的用户，想尽量多的软件可以用命令行管理，又不在乎我前文说的 Chocolatey 的软件包描述文件相对复杂等缺点的话，其实可以去试试使用 Chocolatey。而如果你没那么强烈的需求，只是像我一样有一点点\n“绿色软件洁癖”，同时想用命令行管理部分软件包，并且以此构建一个相对轻量的命令行环境的话，不妨可以尝试一下 PowerShell + Scoop + Cmder 这套组合。或者，Chocolatey 和 Scoop 二者一起用也是可以的。")]),t._v(" "),e("hr",{staticClass:"footnotes-sep"}),t._v(" "),e("section",{staticClass:"footnotes"},[e("ol",{staticClass:"footnotes-list"},[e("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[e("p",[e("a",{attrs:{href:"https://chocolatey.org/install#more-install-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://chocolatey.org/install#more-install-options")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/issues/2")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[e("p",[e("a",{attrs:{href:"https://github.com/Homebrew/brew/blob/master/docs/Bottles.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Homebrew/brew/blob/master/docs/Bottles.md")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[e("p",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/scripting/setup/installing-windows-powershell?view=powershell-6#upgrading-existing-windows-powershell",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/en-us/powershell/scripting/setup/installing-windows-powershell?view=powershell-6#upgrading-existing-windows-powershell")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/2227",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/issues/2227")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/pull/2165",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/pull/2165")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/wiki/Buckets",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/wiki/Buckets")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[e("p",[e("a",{attrs:{href:"https://github.com/chocolatey/choco/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/chocolatey/choco/blob/master/CHANGELOG.md")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref8"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn9"}},[e("p",[e("a",{attrs:{href:"https://github.com/Homebrew/brew/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Homebrew/brew/releases")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref9"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn10"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/graphs/contributors",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/graphs/contributors")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref10"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn11"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/blob/master/lib/core.ps1#L1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/blob/master/lib/core.ps1#L1")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref11"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn12"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/2121",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/issues/2121")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref12"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn13"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/488",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/issues/488")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref13"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn14"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/2220",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/issues/2220")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref14"}},[t._v("↩︎")])])]),t._v(" "),e("li",{staticClass:"footnote-item",attrs:{id:"fn15"}},[e("p",[e("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/2245",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lukesampson/scoop/issues/2245")]),t._v(" "),e("a",{staticClass:"footnote-backref",attrs:{href:"#fnref15"}},[t._v("↩︎")])])])])])])},[],!1,null,null,null);"function"==typeof a&&a(r);o.default=r.exports}}]);