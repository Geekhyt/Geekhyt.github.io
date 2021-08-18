(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{495:function(e,t,a){"use strict";a.r(t);var v=a(63),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("本文记录并整理了 D2 前端技术论坛中揭秘 "),a("code",[e._v("TC39: ES2020 和 ES2021")]),e._v(" 的会议笔记。(截取了 TC39 部分)分享给没时间看或是对 TC39 还不了解的同学们。")]),e._v(" "),a("h1",{attrs:{id:"揭秘tc39-es2020-和-es2021"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#揭秘tc39-es2020-和-es2021"}},[e._v("#")]),e._v(" 揭秘TC39: ES2020 和 ES2021")]),e._v(" "),a("p",[e._v("分享嘉宾："),a("a",{attrs:{href:"https://github.com/ryzokuken",title:"Ujjwal Sharma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ujjwal Sharma"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("TC39 成员、Node.js 核心协作者。")]),e._v(" "),a("h2",{attrs:{id:"tc39"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tc39"}},[e._v("#")]),e._v(" TC39")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tc39",title:"TC39",target:"_blank",rel:"noopener noreferrer"}},[e._v("TC39"),a("OutboundLink")],1),e._v(" 是 "),a("a",{attrs:{href:"https://www.ecma-international.org/",title:"Ecma International",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ecma International"),a("OutboundLink")],1),e._v(" 标准化组织旗下的技术委员会的一员，它负责管理着 ECMAScript 语言和标准化 API。")]),e._v(" "),a("p",[e._v("ECMAScript 语言和标准化 API 又可以分为两个标准：")]),e._v(" "),a("ul",[a("li",[e._v("第一个是 "),a("a",{attrs:{href:"https://github.com/tc39/ecma262",title:"ECMA-262",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMA-262"),a("OutboundLink")],1),e._v(" 标准，它包含了语言的语法和核心的 API。")]),e._v(" "),a("li",[e._v("另一个标准 "),a("a",{attrs:{href:"https://github.com/tc39/ecma402",title:"ECMA-402",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMA-402"),a("OutboundLink")],1),e._v(" 则包含了一些国际化的 API，提供给 ECMAScript 核心 API 选择性支持。")])]),e._v(" "),a("h2",{attrs:{id:"who"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who"}},[e._v("#")]),e._v(" Who?")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Delegates")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("implementers")])]),e._v(" "),a("li",[a("code",[e._v("Large websites")])]),e._v(" "),a("li",[a("code",[e._v("Academics")])]),e._v(" "),a("li",[a("code",[e._v("OpenJS Foundation")])])])]),e._v(" "),a("li",[a("code",[e._v("Invited Experts")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Subject matter exports")])]),e._v(" "),a("li",[a("code",[e._v("Community representatives")])])])]),e._v(" "),a("li",[a("code",[e._v("Contributors")])]),e._v(" "),a("li",[a("code",[e._v("Community")])])]),e._v(" "),a("p",[e._v("TC39 包括会议代表们，可能是执行者、大型的网站、学术研究者以及 OpenJS 基金会。\n同时也会邀请一些主题内容的专家来提供帮助，也会邀请一些社区代表，比如 Babel 和 nodejs 社区。另外还有一些突出贡献者，对某一议题有特殊贡献的人。最后，也包括整个社区，人们的各种反响和奇思妙想对 TC39 的每个决定都非常有帮助。")]),e._v(" "),a("h2",{attrs:{id:"what"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[e._v("#")]),e._v(" What?")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Pull request to the standard GitHub repository")])]),e._v(" "),a("li",[a("code",[e._v("Meta and Markup changes")])]),e._v(" "),a("li",[a("code",[e._v("Editorial Changes")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Editor Group")])])])]),e._v(" "),a("li",[a("code",[e._v("Normative Changes")])]),e._v(" "),a("li",[a("code",[e._v("Proposals")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Authors and Champions")])]),e._v(" "),a("li",[a("code",[e._v("Stage Process")])]),e._v(" "),a("li",[a("code",[e._v("Reviewers")])]),e._v(" "),a("li",[a("code",[e._v("Consensus")])])])])]),e._v(" "),a("p",[e._v("想要修改 JavaScript 规范标准，需要经过一些前置流程。")]),e._v(" "),a("p",[e._v("一些比较小的变更(构建流程、CI 测试文件) -> 编辑上的改变(设计排版)，有专门的编辑者小组进行评审 -> 面向社区讲解，需要证实其效果 -> 长远的重大变更，需要进行提案 -> 提案有作者们和支持者们，需要严格按照 Stage 流程进行 -> TC39 官方指定代表，对提案进行评审，提案需要回答评审中的问题 -> 整个社区达成一致，同意提案。")]),e._v(" "),a("h2",{attrs:{id:"when"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when"}},[e._v("#")]),e._v(" When?")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Quarterly meetings")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("4-day")])]),e._v(" "),a("li",[a("code",[e._v("in-person")])])])]),e._v(" "),a("li",[a("code",[e._v("Light meetings in between")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("2-day")])]),e._v(" "),a("li",[a("code",[e._v("online")])])])]),e._v(" "),a("li",[a("code",[e._v("Monthly ECMA-402 meeting")])]),e._v(" "),a("li",[a("code",[e._v("Smaller，more focussed meetings")])]),e._v(" "),a("li",[a("code",[e._v("Incubator calls")])]),e._v(" "),a("li",[a("code",[e._v("GitHub")])]),e._v(" "),a("li",[a("code",[e._v("Discourse")])])]),e._v(" "),a("p",[e._v("一个季度(每3个月)有一次会议，一年有 4 次，为期 4 天的现场会议，今年由于疫情在线上举办。在季度会议之间会安排一些小型会议，一直采用在线形式为期 2 天。")]),e._v(" "),a("p",[e._v("除此之外，还有月度 ECMA-402 会议，作为另外一项独立的标准规范，它包含很多国际化的相关内容。")]),e._v(" "),a("p",[e._v("还会有一些更小、更聚焦的会议，例如 ECMAScript 安全的会议和研究相关主题的会议。")]),e._v(" "),a("p",[e._v("(Incubator calls) 孵化召集，用来讨论一些特定的提案。")]),e._v(" "),a("p",[e._v("最后还有 GitHub 和论坛，GitHub 是完成大部分开发和决定的地方，论坛则是提案更早期讨论发起的地方。")]),e._v(" "),a("h2",{attrs:{id:"how"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how"}},[e._v("#")]),e._v(" How?")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("No voting")])]),e._v(" "),a("li",[a("code",[e._v("Consensus-based decision making")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Diverse set of people in the committee")])]),e._v(" "),a("li",[a("code",[e._v("Work to satisfy everyone‘s needs and goals")])]),e._v(" "),a("li",[a("code",[e._v("Objections and concerns")])]),e._v(" "),a("li",[a("code",[e._v("Backing rationales")])])])]),e._v(" "),a("li",[a("code",[e._v("No stakeholder kept over another")])]),e._v(" "),a("li",[a("code",[e._v("Don't standardize things which aren't ready")])])]),e._v(" "),a("p",[e._v("没有投票，目的是为了达成一致。")]),e._v(" "),a("p",[e._v("委员会由多样化的人组成，代表了不同的利益群体。TC39 委员会的工作就是要满足大家的需求和目标。")]),e._v(" "),a("p",[e._v("大家都有不同的需求，也会有异议和意见，但终极目标是为了解决问题，达成一致，而不是用投票来满足大部分人的需求。")]),e._v(" "),a("p",[e._v("最好的地方在于没有利益方相互阻塞。")]),e._v(" "),a("p",[e._v("还有一个重要原则：事情如果没有准备好就不会将标准落地。")]),e._v(" "),a("h2",{attrs:{id:"tc39-stage-process-tc39-的-stage-阶段进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tc39-stage-process-tc39-的-stage-阶段进程"}},[e._v("#")]),e._v(" TC39 Stage Process (TC39 的 Stage 阶段进程)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Stage 0: Strawperson")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Just an idea")])])])]),e._v(" "),a("li",[a("code",[e._v("Stage 1: Proposal")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Describe shape of solution")])]),e._v(" "),a("li",[a("code",[e._v("Identify potential blockers")])])])]),e._v(" "),a("li",[a("code",[e._v("Stage 2: Draft")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Describe precise syntactic and semantic details")])])])]),e._v(" "),a("li",[a("code",[e._v("Stage 3: Candidate")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Further feedback from implementations and users")])])])]),e._v(" "),a("li",[a("code",[e._v("Stage 4: Finished")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Tested and ready for addition to the standard")])])])])]),e._v(" "),a("h3",{attrs:{id:"阶段-0：strawperson-稻草人"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段-0：strawperson-稻草人"}},[e._v("#")]),e._v(" 阶段 0：Strawperson 稻草人")]),e._v(" "),a("p",[e._v("代表目前仅仅是一个想法。")]),e._v(" "),a("h3",{attrs:{id:"阶段1-proposal-提案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段1-proposal-提案"}},[e._v("#")]),e._v(" 阶段1: Proposal 提案")]),e._v(" "),a("p",[e._v("当想法变成提案，就需要进入阶段 1，面向委员会讲解和介绍，你需要概述解决方案，并且提出一些潜在的困难。委员会可能会接受你的提案，但并不代表就要在浏览器中生效。它仅仅是委员会觉得这是一个值得讨论的议题且愿意继续讨论。")]),e._v(" "),a("h3",{attrs:{id:"阶段2-draft-草案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段2-draft-草案"}},[e._v("#")]),e._v(" 阶段2: Draft 草案")]),e._v(" "),a("p",[e._v("进入这一阶段的讨论会更加严肃，需要讨论具体的语法和语义的细节。你需要提供具体的解决方案，如何在语言中实现它，就像一个具体的 API 的实现。")]),e._v(" "),a("h3",{attrs:{id:"阶段3-candidate-候选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段3-candidate-候选"}},[e._v("#")]),e._v(" 阶段3: Candidate 候选")]),e._v(" "),a("p",[e._v("这个阶段设计的工作已经结束，你需要接受来自具体实现者和用户们的反馈。这个阶段也会有不同的 JavaScript 引擎来实现你的新特性。")]),e._v(" "),a("h3",{attrs:{id:"阶段4-finished-结束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段4-finished-结束"}},[e._v("#")]),e._v(" 阶段4: finished 结束")]),e._v(" "),a("p",[e._v("一旦这个特性被添加进至少两个 JavaScript 实现并且通过具体的测试，代表着可以被大家使用了，提案的标准和规范也会进入到主要的标准规范中，我们会制定测试去保证未来的实现都会包含这项特性，也会添加参考文档。")]),e._v(" "),a("h2",{attrs:{id:"building-consensus-达成共识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-consensus-达成共识"}},[e._v("#")]),e._v(" Building Consensus (达成共识)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Authors develop the proposal with stakeholder input")])]),e._v(" "),a("li",[a("code",[e._v("Champions may act as a bridge between authors and TC39")])]),e._v(" "),a("li",[a("code",[e._v("Any aspects may be discussed，feedback may be given openly")])]),e._v(" "),a("li",[a("code",[e._v("Concerns raised early and asynchronously")])]),e._v(" "),a("li",[a("code",[e._v("Consensus is given as an indicator of the current stage")])]),e._v(" "),a("li",[a("code",[e._v("A delegate may post a constraint as necessary for advancement")])]),e._v(" "),a("li",[a("code",[e._v("Many constraints with rationales，committee may make a trade-off")])]),e._v(" "),a("li",[a("code",[e._v("Stage 3 consensus implies completeness and any design concerns should be raised before Stage 3")])])]),e._v(" "),a("p",[e._v("作者会从利益相关者(一些活跃用户或者提案的推动者)那里得到一些输入，并形成提案。")]),e._v(" "),a("p",[e._v("支持者们会在作者和 TC39 之间扮演中间人的角色，支持者会带着作者完成的提案到 TC39 委员会。")]),e._v(" "),a("p",[e._v("在委员会中，提案的方方面面将会被讨论到，反馈也将公开表达。")]),e._v(" "),a("p",[e._v("会议代表将会表达他们的意见，然后作者和支持者们会针对这些声音作出回应并进一步推动提案。只会讨论当前阶段的提案并达成当前阶段的共识。")]),e._v(" "),a("p",[e._v("当讨论趋向一致时，某个会议代表可以对这个提案进入下一阶段提出限制，可以基于自己对 JavaScript 的视角，提出提案的约束范围。")]),e._v(" "),a("p",[e._v("不同的代表都会有自己的见解，每个人的思考原则也不同，大家会进行一些权衡和让步。")]),e._v(" "),a("p",[e._v("阶段 3 会进行比较特殊的一致性讨论，因为到了候选阶段，意味着所有的 API 设计工作都已经完成，在此阶段过后将不会轻易的进行更改。")]),e._v(" "),a("h2",{attrs:{id:"official-communication-channels-官方交流渠道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#official-communication-channels-官方交流渠道"}},[e._v("#")]),e._v(" Official communication channels (官方交流渠道)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GitHub")])]),e._v(" "),a("li",[a("code",[e._v("IRC")])]),e._v(" "),a("li",[a("code",[e._v("Discourse")])]),e._v(" "),a("li",[a("code",[e._v("Incubator Calls")])]),e._v(" "),a("li",[a("code",[e._v("TC39")])])]),e._v(" "),a("p",[e._v("大部分的讨论都在 GitHub，有很多 Issues 会讨论 API 的细节。除此之外还有 IRC(Internet Relay Chat)，一个聊天社交媒体。")]),e._v(" "),a("p",[e._v("论文和刊物一般是比较早阶段的提案所提出的地方，这里有很多人的头脑风暴。")]),e._v(" "),a("p",[e._v("Incubator Calls(孵化阶段的召集)，这里通常会召集大家讨论不同利益相关者的提案，\n有作者和委员会里对这个提案感兴趣的人。")]),e._v(" "),a("p",[e._v("还有 "),a("a",{attrs:{href:"https://tc39.es/",title:"TC39 官网",target:"_blank",rel:"noopener noreferrer"}},[e._v("TC39 官网"),a("OutboundLink")],1),e._v("，中文版的貌似是正在开发。")]),e._v(" "),a("p",[e._v("(群友发了一个中文兴趣组)\n"),a("a",{attrs:{href:"https://jscig.github.io/#",title:"JavaScript 中文兴趣组",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 中文兴趣组"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"tc39-outreach-groups-tc39-向外拓展工作小组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tc39-outreach-groups-tc39-向外拓展工作小组"}},[e._v("#")]),e._v(" TC39 Outreach Groups (TC39 向外拓展工作小组)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TC39 Outreach to important focus groups")])]),e._v(" "),a("li",[a("code",[e._v("Tools and Transpilers")])]),e._v(" "),a("li",[a("code",[e._v("Frameworks")])]),e._v(" "),a("li",[a("code",[e._v("Educators")])]),e._v(" "),a("li",[a("code",[e._v("Monthly calls")])]),e._v(" "),a("li",[a("code",[e._v("Discuss ongoing TC39 proposals")])])]),e._v(" "),a("p",[e._v("这个小组会和工业界的一些焦点小组进行交流，比如 Babel 、TypeScript 等。还有一些大家喜爱的很多前端的框架以及一些从事教育工作的人。他们会通过月度的通话来进行工作，讨论一些 TC39 的提案。")]),e._v(" "),a("h2",{attrs:{id:"how-do-i-get-involved？-我如何参与？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-involved？-我如何参与？"}},[e._v("#")]),e._v(" How do I get involved？(我如何参与？)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Issue trackers of any relevant proposals")])]),e._v(" "),a("li",[a("code",[e._v("Contribute to documentation on MDN")])]),e._v(" "),a("li",[a("code",[e._v("Discourse to discuss new proposals")])]),e._v(" "),a("li",[a("code",[e._v("File issues，create pull requests and write tests")])]),e._v(" "),a("li",[a("code",[e._v("Your employer can become a member")])]),e._v(" "),a("li",[a("code",[e._v("Join as an invited expert if you care about a specific topic")])])]),e._v(" "),a("p",[e._v("你可以通过 GitHub 的 Issues 板块去参与任何提案，提出自己的见解和反馈，帮助给出一些测试。")]),e._v(" "),a("p",[e._v("也可以在"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/",title:"MDN",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),a("OutboundLink")],1),e._v(" 贡献文档，一些新的提案的文档可能是缺失的，也可能质量不高，这些都是你可以帮助做到的。")]),e._v(" "),a("p",[e._v("也可以去一些讨论集中的论坛讨论新的提案。")]),e._v(" "),a("p",[e._v("如果你非常感兴趣，我推荐你的公司去成为国际化组织的会员，这样可以提 Issues、创建 pull requests，对阶段 3 的提案写测试，这些测试结果非常有用。")]),e._v(" "),a("p",[e._v("如果你决定参与测试，"),a("a",{attrs:{href:"https://github.com/tc39/test262",title:"test262",target:"_blank",rel:"noopener noreferrer"}},[e._v("test262"),a("OutboundLink")],1),e._v("这里有很多 Issues，可以帮助你很好的开展工作。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tc39/test262/blob/main/test/built-ins/BigInt/is-a-constructor.js",title:"这是一个 test262 测试的例子",target:"_blank",rel:"noopener noreferrer"}},[e._v("这是一个 test262 测试的例子"),a("OutboundLink")],1),e._v("，就是 JavaScript 比较常见的测试例子。")]),e._v(" "),a("p",[e._v("如果您对某一领域有特别的建树，您可以和 TC39 主席团联系，以受邀专家的身份加入。")]),e._v(" "),a("p",[e._v("好了，笔记就整理到这里了，希望大家对 TC39 以及 TC39 的 Stage 阶段进程有所了解。")])])}),[],!1,null,null,null);t.default=r.exports}}]);