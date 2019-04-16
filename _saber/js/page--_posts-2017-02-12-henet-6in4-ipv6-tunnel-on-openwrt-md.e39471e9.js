(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{49:function(t,e,r){"use strict";r.r(e);var n=r(0),a=function(t){var e={attributes:{slug:"henet-6in4-ipv6-tunnel-on-openwrt",layout:"post",title:"Openwrt 配置 he.net IPv6 隧道",date:"2017-02-12 20:44:53",updated:"2017-02-12 20:44:53",keywords:"OpenWrt IPv6,IPv6 隧道,Openwrt 6in4,he.net",description:"本文将介绍关于 OpenWrt IPv6 He.net 相关的内容，记录如何利用 he.net  在 Openwrt 配置 IPv6 隧道，以及配置完成后进行 ipv6 测试验证， 确定 Openwrt 6in4 的可用性。 ",cover:"/uploads/2018/12/20181225009.png",excerpt:"<p>之前还在大学时，除开锐捷，由于内网的原因，要玩 IPv6 的话就只能用六飞之类的工具。工作后，发现在住所报装的网络，居然给（是的，长这么大第一次在家用宽带得到）了公网 IP。刚开始时想过利用这个公网 IP 来搞个 Minecraft“家庭服”，对小伙伴们开放。但折腾下来发现上传太可怜了，还是不祸害小伙伴了。</p>\n",createdAt:"2017-02-12T12:44:53.000Z",updatedAt:"2017-02-12T12:44:53.000Z",type:"post",permalink:"/blog/2017/02/henet-6in4-ipv6-tunnel-on-openwrt"},contentType:"markdown"},r=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=e}].concat(r);var n=t.options.PageComponent;n&&(t.options.transition=n.transition),void 0===t.options.transition&&(t.options.transition=e.attributes.transition),t.options.name="page-wrapper-"+e.attributes.slug.replace(/[^0-9a-z\-]/i,"-")},o=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-manager",{attrs:{page:t.$page}},[r("p",[t._v("之前还在大学时，除开锐捷，由于内网的原因，要玩 IPv6 的话就只能用六飞之类的工具。工作后，发现在住所报装的网络，居然给（是的，长这么大第一次在家用宽带得到）了公网 IP。刚开始时想过利用这个公网 IP 来搞个 Minecraft“家庭服”，对小伙伴们开放。但折腾下来发现上传太可怜了，还是不祸害小伙伴了。")]),t._v(" "),r("p",[t._v("就这样过了许久。突然心血来潮，看能不能试试在校时想搞的 "),r("a",{attrs:{href:"http://he.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("he.net")]),t._v(" 6in4 隧道，发现配置下来还挺简单的。因为这个玩法其实已经有好多人实践过了"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn3",id:"fnref3"}},[t._v("[3]")])]),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn4",id:"fnref4"}},[t._v("[4]")])]),t._v("，我也就是搜搜折腾记录下。")]),t._v(" "),r("h2",{attrs:{id:"%E5%88%9B%E5%BB%BA-he-6in4-%E9%9A%A7%E9%81%93"}},[t._v("创建 HE 6in4 隧道")]),t._v(" "),r("p",[t._v("支持 IPv6 以及 6in4 的 Openwrt 路由器是前提了。到 "),r("a",{attrs:{href:"https://tunnelbroker.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tunnelbroker.net/")]),t._v(" 注册一个新帐号。登录后，点击左侧的 User Functions 中的 Create Regular Tunnel 创建新的隧道。")]),t._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"","data-src":"/uploads/2017/02/20170212002.png"}})]),t._v(" "),r("p",[t._v("在 Ipv4 Endpoint 中填入路由器 wan 口的公网 IP。然后在下面的 Available Tunnel Servers 选择一个 he 的 6in4 隧道服务器。列表有显示地区和服务器的 IPv4，可选择一个连接速度较快延迟较低的（提示：并不是亚洲区就最快，建议本机 ping 一下看看，我选的就不是亚洲区）。最后点击 Create Tunnel 便创建了一个 6in4 隧道。")]),t._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"","data-src":"/uploads/2017/02/20170212003.png"}})]),t._v(" "),r("p",[t._v("其中 IPv6 Tunnel Endpoints 部分是这个 6in4 隧道两端的 IPv4 和 IPv6 地址。Server 是 HE 的隧道服务器，Client 是我们的路由器或计算机。下方的 Routed IPv6 Prefixes 是该隧道可用于分配的 IPv6 地址段，可为路由器背后的内网机器都分配上唯一的 IPv6 地址。")]),t._v(" "),r("h2",{attrs:{id:"openwrt-%E9%85%8D%E7%BD%AE-he-6in4"}},[t._v("Openwrt 配置 HE 6in4")]),t._v(" "),r("p",[t._v("在 Luci 界面中，依次点击“网络”-“接口”-“添加新接口”创建新接口。接口名称随意，这里为方便辨认以 HENET 为例，协议选择 IPv6-in-IPv4 (RFC4213)，然后提交。")]),t._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"","data-src":"/uploads/2017/02/20170212004.png"}})]),t._v(" "),r("p",[t._v("接着“基本配置”。“本地IPv4地址”留空，“远程IPv4地址”填写上面创建的 HE 6in4 隧道中的“Server IPv4 Address”，“本地IPv6地址”填写隧道中的“Client IPv6 Address”，“IPv6 routed prefix”填写隧道中的“Routed /64”。")]),t._v(" "),r("p",[t._v("然后勾选“启用HE.net动态终端更新”，填写相应的“隧道ID”，“HE.net用户ID”，“HE.net密码”。这里注意“HE.net用户ID”提示说“这是32 byte hex编码的用户ID，不是登录名”，也即不是注册时的用户名，这个值可以点击左侧的 Main Page 中找到。")]),t._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"","data-src":"/uploads/2017/02/20170212005.png"}})]),t._v(" "),r("p",[t._v("接着在防火墙设置页中，确保防火墙区域跟 wan 的相同。最后保存应用，到此配置就完成了。剩下的就是测试了。看下网卡能否正常获得 IPv6 地址，到 "),r("a",{attrs:{href:"http://ipv6-test.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ipv6-test.com/")]),t._v(" 检查一下 IPv6 状态。访问 "),r("a",{attrs:{href:"https://ipv6.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ipv6.google.com/")]),t._v(" 试试，可用！聊胜于无，哈~")]),t._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"","data-src":"/uploads/2017/02/20170212006.png"}})]),t._v(" "),r("hr",{staticClass:"footnotes-sep"}),t._v(" "),r("section",{staticClass:"footnotes"},[r("ol",{staticClass:"footnotes-list"},[r("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[r("p",[r("a",{attrs:{href:"https://ekszz.com/blog/?p=20",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用HE的6in4隧道来访问ipv6")]),t._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[r("p",[r("a",{attrs:{href:"https://ekszz.com/blog/?p=115",target:"_blank",rel:"noopener noreferrer"}},[t._v("Openwrt配置6in4访问ipv6网络")]),t._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])]),t._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[r("p",[r("a",{attrs:{href:"http://demon.tw/hardware/openwrt-6in-ipv6.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenWrt配置he.net的6in4隧道访问IPv6")]),t._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[t._v("↩︎")])])]),t._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[r("p",[r("a",{attrs:{href:"https://typeblog.net/tunnelbroker-on-openwrt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在OpenWRT上配置HE IPv6隧道的正确姿势")]),t._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[t._v("↩︎")])])])])])])},[],!1,null,null,null);"function"==typeof a&&a(o);e.default=o.exports}}]);