# :star: react :star:

      > 正在连载中 ···

1.  :cloud: React 如何进行**代码拆分**？拆分的原则是什么？

    [参考](https://github.com/haizlin/fe-interview/issues/931)

    ***

2.  为什么说 React 中的 **props** 是只读的？

    React 组件都必须像纯函数一样保护它们的 props 不被更改。
    将 react 组件理解成纯函数,数据流驱动,参数传入不允许做更改
    扩展 :

    > state 内容可以更改,但是不允许直接赋值,需要借助 setState

    > props 用于定义外部接口，state 用于记录内部状态

    props 的赋值在于外部世界使用组件，state 的赋值在于组件内部

    组件不应该改变 props 的值，而 state 存在的目的就是让组件来修改的

    state 只能在 constructor 中设置默认值

    setState 修改 state 的值是异步的

    ***

3.  **super()**和 **super(props)**有什么区别？

    react 中的 class 是基于 es6 的规范实现的, 继承是使用 extends 关键字实现继承的，子类必须在 constructor()中调用 super() 方法否则新建实例
    就会报错，报错的原因是 子类是没有自己的 this 对象的，它只能继承父类的 this 对象，然后对其进行加工，而 super()就是将父类中的 this 对象继承给子类的，没有 super() 子类就得不到 this 对象。

    如果你使用了 constructor 就必须写 super() 这个是用来初始化 this 的，可以绑定事件到 this 上
    如果你想要在 constructor 中使用 this.props,就必须给 super 添加参数 super(props)
    注意，无论有没有 constructor，在 render 中的 this.props 都是可以使用的，这是 react 自动附带的
    如果没有用到 constructor 是可以不写的，react 会默认添加一个空的 constroctor.

    ***

4.  如何监听**静态资源加载异常**？

    ```
    window.addEventLister('error',function(e){
       //根据目标e.target区分是 js 错误还是标签错误 var target=e.target;
       if(e.target instanceof HTMLElement){
         //js错误
         }else{ //静态资源错误 } })
    ```

    ***
