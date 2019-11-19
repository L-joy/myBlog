(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{226:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"第四章-变量，作用域和内存问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四章-变量，作用域和内存问题"}},[t._v("#")]),t._v(" 第四章  变量，作用域和内存问题")]),t._v(" "),s("h3",{attrs:{id:"_4-1-引用类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-引用类型"}},[t._v("#")]),t._v(" 4.1 引用类型")]),t._v(" "),s("p",[t._v("5种基本数据类型：Undefined、Null、Boolean、Number 和 String。这 5 种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值。")]),t._v(" "),s("p",[s("strong",[t._v("引用类型的值是保存在内存中的对象")]),t._v("。与其他语言不同，JavaScript 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。")]),t._v(" "),s("h4",{attrs:{id:"_4-1-1-引用类型和基本类型的不同："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-引用类型和基本类型的不同："}},[t._v("#")]),t._v(" 4.1.1 引用类型和基本类型的不同：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("保存方式不同")])]),t._v(" "),s("li",[s("p",[t._v("从一个变量向另一个变量复制基本类型值和引用类型值不同")]),t._v(" "),s("p",[s("strong",[t._v("基本类型")]),t._v("-----如果从一个变量向另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制 到为新变量分配的位置上。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code")])])])]),t._v(" "),s("p",[t._v("var num1 = 5;\nvar num2 = num1;")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n在此，num1 中保存的值是 5。当使用 num1 的值来初始化 num2 时，num2 中也保存了值 5。但 num2 中的 5 与 num1 中的 5 是完全独立的，该值只是 num1 中 5 的一个副本。此后，这两个变量可以参与任 何操作而不会相互影响。\n\n复制基本类型值的过程：\n\n![复制基本类型值过程](JavaScript高级教程4/复制基本类型值过程.png)\n\n**引用类型**-----当从一个变量向另一个变量复制引用类型的值时，同样也会将存储在变量对象中的值复制一份放到 为新变量分配的空间中。不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一 个对象。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另 一个变量，\n\n例如：\n\n~~~javascript\nvar obj1 = new Object(); \nvar obj2 = obj1; \nobj1.name = "Nicholas"; \nalert(obj2.name); //"Nicholas"\n')])])]),s("p",[t._v("变量 obj1 保存了一个对象的新实例。然后，这个值被复制到了 obj2 中；换句话说，obj1 和 obj2 都指向同一个对象。这样，当为 obj1 添加 name 属性后，可以通过 obj2 来访问这个属性， 因为这两个变量引用的都是同一个对象。")]),t._v(" "),s("p",[t._v("复制引用类型的过程：")]),t._v(" "),s("p",[s("img",{attrs:{src:"JavaScript%E9%AB%98%E7%BA%A7%E6%95%99%E7%A8%8B4/%E5%A4%8D%E5%88%B6%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E8%BF%87%E7%A8%8B.png",alt:"复制基本类型值过程"}})]),t._v(" "),s("h4",{attrs:{id:"_4-1-2-传递参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-传递参数"}},[t._v("#")]),t._v(" 4.1.2 传递参数")]),t._v(" "),s("p",[t._v("ECMAScript 中所有函数的"),s("strong",[t._v("参数都是按值传递")]),t._v("的。也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。基本类型值的传递如同基本类型变量的复制一样，而 引用类型值的传递，则如同引用类型变量的复制一样。函数访问变量有按值和按引用两种方式，而参数只能按值传递。")]),t._v(" "),s("p",[t._v("在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量（即命名参数）。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//20，没有变化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//30")]),t._v("\n")])])]),s("p",[t._v("在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Nicholas"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"Nicholas"')]),t._v("\n")])])]),s("h4",{attrs:{id:"_4-1-3-检测引用类型-instanceof操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-检测引用类型-instanceof操作符"}},[t._v("#")]),t._v(" 4.1.3 检测引用类型------"),s("code",[t._v("instanceof操作符")])]),t._v(" "),s("p",[s("strong",[t._v("instanceof"),s("code",[t._v("和")]),t._v("typeof`的区别")])]),t._v(" "),s("p",[s("code",[t._v("typeof")]),t._v("操作符是确定一个变量是字符串、数值、布尔值，还是 undefined 的最佳工具。如果变")]),t._v(" "),s("p",[t._v("量的值是一个对象或 null，返回"),s("code",[t._v("object")])]),t._v(" "),s("p",[s("code",[t._v("instanceof")]),t._v("操作符可以确定某个值是什么类型的对象")]),t._v(" "),s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" variable "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("constructor")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 person 是 Object 吗？")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 colors 是 Array 吗？")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 pattern 是 RegExp 吗？")]),t._v("\n")])])]),s("p",[t._v("根据规定，所有引用类型的值都是 Object 的实例。因此，在检测一个引用类型值和 Object 构造")]),t._v(" "),s("p",[t._v("函数时，instanceof 操作符始终会返回 true。当然，如果使用 instanceof 操作符检测基本类型的")]),t._v(" "),s("p",[t._v("值，则该操作符始终会返回 false，因为基本类型不是对象。")]),t._v(" "),s("h3",{attrs:{id:"_4-2-执行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-执行环境"}},[t._v("#")]),t._v(" 4.2 执行环境")]),t._v(" "),s("p",[t._v("全局执行环境----window对象（全局执行环境直到应用程序退出——例如关闭网页或浏览器——时才会被销毁）")]),t._v(" "),s("p",[t._v("每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。")]),t._v(" "),s("p",[t._v("而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" anotherColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapColors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tempColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anotherColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    anotherColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tempColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以访问 color、anotherColor 和 tempColor ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以访问 color 和 anotherColor，但不能访问 tempColor ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapColors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里只能访问 color ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("作用域链：")]),t._v(" "),s("p",[s("img",{attrs:{src:"JavaScript%E9%AB%98%E7%BA%A7%E6%95%99%E7%A8%8B4/%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.png",alt:"复制基本类型值过程"}})]),t._v(" "),s("p",[t._v("以上代码共涉及 3 个执行环境：全局环境、changeColor()的局部环境和 swapColors()的局部 环境。全局环境中有一个变量 color 和一个函数 changeColor()。changeColor()的局部环境中有 一个名为 anotherColor 的变量和一个名为 swapColors()的函数，但它也可以访问全局环境中的变 量 color。swapColors()的局部环境中有一个变量 tempColor，该变量只能在这个环境中访问到。 无论全局环境还是 changeColor()的局部环境都无权访问 tempColor。然而，在 swapColors()内部 则可以访问其他两个环境中的所有变量，因为那两个环境是它的父执行环境。")]),t._v(" "),s("p",[t._v("对于这个例子中的 swapColors()而言，其作用域链中包含 3 个对象：swapColors()的变 量对象、changeColor()的变量对象和全局变量对象。swapColors()的局部环境开始时会先在自己的变量对象中搜索变量和函数名，如果搜索不到则再搜索上一级作用域链。")]),t._v(" "),s("p",[t._v("changeColor()的作用域链中只包含两个对象：它自己的变量对象和全局变量对象。这也就是说，它不能访问 swapColors()的 环境。")]),t._v(" "),s("h3",{attrs:{id:"_4-3-垃圾收集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-垃圾收集"}},[t._v("#")]),t._v(" 4.3 垃圾收集")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("标记清除")])]),t._v(" "),s("li",[s("p",[t._v("引用计数")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);