# 一些面试题

## Javascript

1. 在哪些情况下会发生**隐式强制类型转换**？

- if 语句里面
- do while 与 while 语句中
- 运算符或||和运算符与&&(都是在运算符前面进行布尔的判断)
- 三元运算符 ? :
- for 语句的第二个条件判断

2. 根据下面 Object.create 创建出的对象，下面的题分别输出的结果是什么？\

   ```
   let a = Object.create({ x: 1 })
   let { ...b } = Object.create({ x: 1 })
   console.log(a.x)  // 1
   console.log(b.x) // undefined
   ```

   > Object.create 传入的对象是原型对象，基于原型对象创建的对象 a 继承了 x 属性，因此可以 a.x，但是扩展运算符属于迭代遍历，原型属性是不可枚举的，因此 b 没有 x 属性。

3. 说说 **==** 操作符的转换规则

- 首先判断类型是否相同,相同的话使用=== 进行比较.
  不同类型进行以下规则比较:
- 查看是否是 undefined 和 null 比较
  是的话,进行比较,null 和 undefined 比较结果为 true,它俩和自身比较为 true,其余都为 false.
- 查看是否是 string 与 number 比较,
  如果有 string 会转行成 number,回到最初重新比较
- 查看是否有布尔类型
  如果有就把布尔类型转换成 number,回到最初重新比较
- 查看是否有引用类型,
  如果有，那么将 object 转为其原始值 primitive 并回到最初重新比较
- 如果两边都是 obejct 类型的话，那么会指向[symbol.primitive]
  首先执行的是 valueOf，如果 valueOf 返回的基础类型(null,unedfined,boolean,string,number)，那么则返回
  如果 valueOf 返回的不是基础类型，那么则执行 toString 方法，如果可以正常转换则返回，如果不能转换则报错。

4. 请说说 js 的内部属性**[[Class]]**是什么？

   [[class]]属性可以理解为一个数据类型的内部属性标签。它不能直接访问，可以通过 Object.prototype.toString.call()这种方式展现。
   [[class]]这个属性对应一个数据类型的构造器。但是也区分具体的场景

   数组和对象：
   `Object.prototype.toString.call([]) // '[object Array]'`
   Array 就是数组的构造器

   null 和 undefined
   `Object.prototype.toString.call(null) // '[object Null]'`
   虽然不存在 Null() 这样的构造器 但是也是[[class]]的属性值

   其它基本数据类型
   Object.prototype.toString.call(123) // '[object Number]'
   每一个简单基本类型都自动地被它们分别对应的对象包装器封箱，这就是为什么"Number"被显示为内部 [[Class]] 值。

5. 分析 3 < 2 < 1 返回的结果

   ```
     3 < 2 < 1
     false < 1
     0 < 1
     true
   ```

6. 分析这个 2 + - + + + - + 3 表达式返回的结果

   这里的 + - 是正号和负号
   当 - 的数量是奇数，相当于 2-3 = -1
   当 - 的数量是偶数（负负得正），相当于 2+3= 5

## Html

1. 说说你对 **text-transform** 属性的理解

   - text-transform:uppercase 全大写
   - text-transform:capitalize 第一个字母大写,其他按原样展示
   - text-transform:lowercase 全小写

2. 说说你对 **-webkit-overflow-scrolling** 属性的理解

   -webkit-overflow-scrolling: touch;，解决 IOs 滚动卡顿问题。是因为这行代码启用了硬件加速特性，所以滑动很流畅。
   实际上，Safari 真的用了原生控件来实现，对于有-webkit-overflow-scrolling 的网页，会创建一个 UIScrollView，提供子 layer 给渲染模块使用。

3. 使用 css 写一个获取 ul 下的第 3 到第 15 个 li 的元素

   `ul li:nth-child(-n+15):nth-child(n+3){}`

4. 你有使用过 css 的 **all** 属性吗？它有什么好处及使用场景？

   all 属性：可以重置选定元素的所有属性，除了两个控制文本方向属性：direction 属性和 unicode-bidi 属性。
   取值：inherit、initial、unset

## Css

## Vue

## React

1. React 如何进行**代码拆分**？拆分的原则是什么？ [参考](https://github.com/haizlin/fe-interview/issues/931)

2. 为什么说 React 中的 **props** 是只读的？
   React 组件都必须像纯函数一样保护它们的 props 不被更改。
   将 react 组件理解成纯函数,数据流驱动,参数传入不允许做更改
   扩展 :

   > state 内容可以更改,但是不允许直接赋值,需要借助 setState

   > props 用于定义外部接口，state 用于记录内部状态

   props 的赋值在于外部世界使用组件，state 的赋值在于组件内部

   组件不应该改变 props 的值，而 state 存在的目的就是让组件来修改的

   state 只能在 constructor 中设置默认值

   setState 修改 state 的值是异步的

3. **super()**和 **super(props)**有什么区别？

   react 中的 class 是基于 es6 的规范实现的, 继承是使用 extends 关键字实现继承的，子类必须在 constructor()中调用 super() 方法否则新建实例
   就会报错，报错的原因是 子类是没有自己的 this 对象的，它只能继承父类的 this 对象，然后对其进行加工，而 super()就是将父类中的 this 对象继承给子类的，没有 super() 子类就得不到 this 对象。

   如果你使用了 constructor 就必须写 super() 这个是用来初始化 this 的，可以绑定事件到 this 上
   如果你想要在 constructor 中使用 this.props,就必须给 super 添加参数 super(props)
   注意，无论有没有 constructor，在 render 中的 this.props 都是可以使用的，这是 react 自动附带的
   如果没有用到 constructor 是可以不写的，react 会默认添加一个空的 constroctor.

4. 如何监听**静态资源加载异常**？
   `window.addEventLister('error',function(e){ //根据目标e.target区分是 js 错误还是标签错误 var target=e.target; if(e.target instanceof HTMLElement){ //js错误 }else{ //静态资源错误 } })`
