(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{491:function(s,a,t){"use strict";t.r(a);var e=t(63),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("code",[s._v("CSS")]),s._v(" 早在 "),t("code",[s._v("2.1")]),s._v(" 的版本就提出了 "),t("code",[s._v("@import")]),s._v(" 来实现模块化，但是 "),t("code",[s._v("JavaScript")]),s._v(" 直到 "),t("code",[s._v("ES6")]),s._v(" 才出现官方的模块化方案 "),t("code",[s._v("ES Module")]),s._v("。尽管早期 "),t("code",[s._v("JavaScript")]),s._v(" 语言规范上不支持模块化，但这并没有阻止 "),t("code",[s._v("JavaScript")]),s._v(" 的发展。官方没有模块化标准，那么我们就自己动手创建标准。社区里的前辈们创建并实现了规范，这些规范便是前端模块化发展之路上智慧的结晶。")]),s._v(" "),t("h2",{attrs:{id:"模块化的价值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块化的价值"}},[s._v("#")]),s._v(" 模块化的价值")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("2020")]),s._v(" 年的今天来看，模块化应该具有以下价值：")]),s._v(" "),t("ul",[t("li",[s._v("可维护性")]),s._v(" "),t("li",[s._v("减少全局污染")]),s._v(" "),t("li",[s._v("可复用性")]),s._v(" "),t("li",[s._v("方便管理依赖关系")]),s._v(" "),t("li",[s._v("分治思想的实践")])]),s._v(" "),t("p",[s._v("十年之前，模块化还只是使用"),t("strong",[s._v("闭包")]),s._v("简单的实现一个命名空间。使用这种解决方式可以简单粗暴的处理全局变量和依赖关系等问题。")]),s._v(" "),t("p",[s._v("关于"),t("a",{attrs:{href:"https://juejin.im/post/5d54b91fe51d45620b21c3a0",target:"_blank",rel:"noopener noreferrer"}},[s._v("闭包的概念可以参考我的另一篇文章"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[s._v("#")]),s._v(" CommonJS")]),s._v(" "),t("p",[s._v("让我们把时间追溯到 2009 年 1 月，在这个普通的冬天里，万物开始生长。中国南极科学考察站昆仑站落成，成为南极海拔最高的科学考察站。在 "),t("code",[s._v("JavaScript")]),s._v(" 社区中， "),t("code",[s._v("Mozilla")]),s._v(" 的工程师 "),t("code",[s._v("Kevin Dangoor")]),s._v(" 发起了 "),t("code",[s._v("CommonJS")]),s._v(" 的提案。(最初叫"),t("code",[s._v("ServerJS")]),s._v(")")]),s._v(" "),t("p",[s._v("再到后来横空出世的 "),t("code",[s._v("Node.js")]),s._v(" 采用 "),t("code",[s._v("CommonJS")]),s._v(" 模块化规范，同时还带来了 "),t("code",[s._v("npm")]),s._v(" (全球最大的模块仓库) 。")]),s._v(" "),t("p",[t("strong",[s._v("nodejs 中模块的实现并非完全按照 CommonJS 的规范来的，而是进行了取舍，并增加了少许特性。")])]),s._v(" "),t("p",[t("code",[s._v("CommonJS")]),s._v(" 规范在服务端表现出色，使得 "),t("code",[s._v("JavaScript")]),s._v(" 在服务器端大放异彩，与传统服务器语言(PHP、Python)等产生抗衡甚至压倒之势。程序员们便萌发出了将它移植到浏览器端的想法。")]),s._v(" "),t("p",[s._v("然而由于"),t("code",[s._v("CommonJS")]),s._v("的模块加载是同步的。我们知道，服务器端加载的模块从内存或磁盘中加载，耗时基本可忽略。但是在浏览器端却会造成阻塞，白屏时间过长，用户体验不够友好。")]),s._v(" "),t("p",[s._v("因此，从"),t("code",[s._v("CommonJS")]),s._v("中逐渐产生了一些分支，也就是业内熟知的"),t("code",[s._v("AMD")]),s._v("、"),t("code",[s._v("CMD")]),s._v("等。")]),s._v(" "),t("h2",{attrs:{id:"amd规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amd规范"}},[s._v("#")]),s._v(" AMD规范")]),s._v(" "),t("p",[t("strong",[s._v("James Burke")]),s._v("提出了 "),t("code",[s._v("AMD")]),s._v(" 规范，"),t("code",[s._v("RequireJS")]),s._v(" 也是他的代表作。他同时开发了 "),t("code",[s._v("amdefine")]),s._v("（在node中可以使用AMD规范的库）。")]),s._v(" "),t("p",[t("code",[s._v("AMD")]),s._v(" 主要是为了解决 "),t("code",[s._v("CommonJS")]),s._v(" 规范在浏览器端的不足：")]),s._v(" "),t("ul",[t("li",[s._v("缺少模块封装的能力")]),s._v(" "),t("li",[s._v("使用同步的方式加载依赖")]),s._v(" "),t("li",[t("code",[s._v("export")]),s._v(" 只能导出变量，导出函数需要用 "),t("code",[s._v("module.export")]),s._v(" (这通常不符合直觉)")])]),s._v(" "),t("p",[t("code",[s._v("AMD")]),s._v(" 规范定义了一个 "),t("code",[s._v("define")]),s._v(" 全局方法用来定义和加载模块，"),t("code",[s._v("RequireJS")]),s._v(" 后期也扩展了 "),t("code",[s._v("require")]),s._v(" 全局方法用来加载模块 。"),t("strong",[s._v("其核心实现是内部的模块加载器。")])]),s._v(" "),t("h2",{attrs:{id:"cmd规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd规范"}},[s._v("#")]),s._v(" CMD规范")]),s._v(" "),t("p",[t("strong",[s._v("@玉伯")]),s._v("提出了 "),t("code",[s._v("sea.js")]),s._v(" (CMD规范的实现)。")]),s._v(" "),t("p",[s._v("准确的说 "),t("code",[s._v("CMD")]),s._v(" 是 "),t("code",[s._v("SeaJS")]),s._v(" 在推广过程中对模块定义的规范化产物。")]),s._v(" "),t("p",[s._v("相比于"),t("code",[s._v("AMD")]),s._v("的异步加载，"),t("code",[s._v("CMD")]),s._v("更倾向于懒加载，规范本身也与"),t("code",[s._v("CommonJS")]),s._v("更贴近。")]),s._v(" "),t("p",[s._v("因为是懒加载机制，所以 "),t("code",[s._v("sea.js")]),s._v(" 提供了 "),t("code",[s._v("seajs.use")]),s._v(" 方法，来运行已经定义的模块。所有 "),t("code",[s._v("define")]),s._v(" 的回调函数都不会立即执行，而是将所有的回调函数进行缓存，只有 "),t("code",[s._v("use")]),s._v(" 之后，以及被 "),t("code",[s._v("require")]),s._v("的模块回调才会执行。")]),s._v(" "),t("h3",{attrs:{id:"requirejs-和-sea-js-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirejs-和-sea-js-的区别"}},[s._v("#")]),s._v(" RequireJS 和 sea.js 的区别")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("sea.js")]),s._v(" 只有在 "),t("code",[s._v("require")]),s._v(" 的地方，才会真正执行模块。")]),s._v(" "),t("li",[t("code",[s._v("RequireJS")]),s._v(" 会先运行所有的依赖，得到所有的结果后再执行回调。")])]),s._v(" "),t("h3",{attrs:{id:"amd-和-cmd-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amd-和-cmd-区别"}},[s._v("#")]),s._v(" AMD 和 CMD 区别")]),s._v(" "),t("ul",[t("li",[s._v("对于依赖的模块，"),t("code",[s._v("AMD")]),s._v(" 是提前执行，"),t("code",[s._v("CMD")]),s._v(" 是延迟执行。")]),s._v(" "),t("li",[t("code",[s._v("CMD")]),s._v(" 推崇依赖就近，"),t("code",[s._v("AMD")]),s._v(" 推崇依赖前置。")]),s._v(" "),t("li",[t("code",[s._v("AMD")]),s._v(" 的 "),t("code",[s._v("API")]),s._v(" 一个当多个用，职责单一。"),t("code",[s._v("CMD")]),s._v(" 中，每个API都简单纯粹。")])]),s._v(" "),t("p",[s._v("来自"),t("a",{attrs:{href:"https://www.zhihu.com/question/20351507/answer/14859415",target:"_blank",rel:"noopener noreferrer"}},[s._v("@玉伯的回答"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"umd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#umd"}},[s._v("#")]),s._v(" UMD")]),s._v(" "),t("p",[t("code",[s._v("UMD")]),s._v(" 是 "),t("code",[s._v("AMD")]),s._v(" 和 "),t("code",[s._v("CommonJS")]),s._v(" 的综合产物。"),t("code",[s._v("AMD")]),s._v(" 用于浏览器，"),t("code",[s._v("CommonJS")]),s._v(" 用于服务器。"),t("code",[s._v("UMD")]),s._v(" 则是两者的兼容模式，解决了跨平台问题。")]),s._v(" "),t("p",[s._v("实现原理：if-else")]),s._v(" "),t("p",[s._v("详情请移步github"),t("a",{attrs:{href:"https://github.com/umdjs/umd",target:"_blank",rel:"noopener noreferrer"}},[s._v("UMD"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"es-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-module"}},[s._v("#")]),s._v(" ES Module")]),s._v(" "),t("p",[s._v("天下大势，分久必合。")]),s._v(" "),t("p",[s._v("十年之后，官方爸爸推出的 "),t("code",[s._v("ES6")]),s._v(" 模块化方案，一统浏览器和服务器。采用了完全静态化的方式进行模块加载。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("h4",{attrs:{id:"模块导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块导入"}},[s._v("#")]),s._v(" 模块导入")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认导入default模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./module.js'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端食堂'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果想导入其他模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getName "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./module.js'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端食堂'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("getName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同时导入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v("  name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" getName "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./module.js'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端食堂'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("getName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重命名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" mod "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./module.js'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\nname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\nname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端食堂'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("getName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对单独的变量进行重命名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getName "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" getModName "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"模块导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块导出"}},[s._v("#")]),s._v(" 模块导出")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一种写法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端食堂'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二种写法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" name\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Logger")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第三种写法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端食堂'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" name\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Logger")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Logger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第四种写法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端食堂'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("这里只提供了一些基本语法，更多语法请参考阮一峰老师的 "),t("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module",target:"_blank",rel:"noopener noreferrer"}},[s._v("《ECMAScript 6 入门》"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("当然，不同的规范之中，被规范的语法也有所不同，这里推荐业内公认的语法规范"),t("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[s._v("airbnb"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("这里列举出几个"),t("code",[s._v("airbnb")]),s._v("中模块导出/引入的规范。")]),s._v(" "),t("p",[s._v("1.如果模块只有一个输出值，就使用 "),t("code",[s._v("export default")]),s._v(" ，如果模块有多个输出值，就不使用 "),t("code",[s._v("export default")]),s._v(" ， "),t("code",[s._v("export default")]),s._v(" 与普通的 "),t("code",[s._v("export")]),s._v(" 不要同时使用。")]),s._v(" "),t("p",[s._v("2.模块导入时不要使用通配符。因为这样可以确保你的模块之中，有一个默认输出 "),t("code",[s._v("（export default）")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bad")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" myObject "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./importModule'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// good")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" myObject "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./importModule'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"es-module与commonjs的差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-module与commonjs的差异"}},[s._v("#")]),s._v(" ES Module与CommonJS的差异")]),s._v(" "),t("p",[s._v("1.语法 "),t("code",[s._v("import/export")]),s._v(" "),t("code",[s._v("require/module")])]),s._v(" "),t("p",[s._v("2."),t("code",[s._v("CommonJS")]),s._v(" 模块输出的是一个值的拷贝(不会随原始值变化)，"),t("code",[s._v("ES6")]),s._v(" 模块输出的是值的引用(会随着原始值变化)。")]),s._v(" "),t("p",[s._v("3."),t("code",[s._v("CommonJS")]),s._v(" 模块是运行时加载，"),t("code",[s._v("ES6")]),s._v(" 模块是编译时输出接口。")]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("成天讨论这门语言好，或者那门语言坏的人，甚至是可悲的。既悲其一叶障目，更悲其大愚若智的自得心态。     ——《大道至简》")])]),s._v(" "),t("p",[t("code",[s._v("JavaScrit")]),s._v(" 至今仍有被人诟病的缺憾之处。但历史告诉我们，再多的阻力也阻挡不了真正热爱它的人们。")]),s._v(" "),t("p",[s._v("感谢为 "),t("code",[s._v("JavaScript")]),s._v(" 模块化之路贡献的开发者们。")])])}),[],!1,null,null,null);a.default=n.exports}}]);