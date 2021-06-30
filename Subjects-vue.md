# :star: vue :star:

      > 正在连载中 ···

1.  :cloud: vue 中 data 的属性可以和 methods 中的方法同名吗？为什么？

    `[Vue warn]: Method "myname" has already been defined as a data property.`

    ***

2.  :cloud: 你知道 `v-model` 的原理吗？

    `v-model` 為一個語法糖，Vue 會默認使用一個名為 value 的 prop，以及名為 input 的事件。
    為了避免不同的 value 有不同的作用，現在可以使用下面的方式自訂義自己想要的 `v-model` 行為。

    ```
    model: {
      prop: 'checked',
      event: 'change'
    }
    ```

    如果想要更改 checked 這個 prop 可以在 Vue 的 instance 中用以下這行程式發送 change 這個 event，並將目標的變動值傳給 checked 這個 prop。
    `this.$emit('change', $event.target.value);`

    ***

3.  :cloud: 在 vue 项目中如果 methods 的方法用箭头函数定义结果会怎么样？

    因为箭头函数默绑定父级作用域的上下文，所以不会绑定 vue 实例，所以 this 是 undefind

    ***

4.  :cloud: vue 渲染模板时怎么保留模板中的 HTML 注释呢？

    ```
    <template comments>
    </template>
    ```

    ***

5.  :cloud: vue 变量名如果以\_、$开头的属性会发生什么问题？怎么访问到它们的值？

    以 \_ 或 $ 开头的 property 不会被 Vue 实例代理，因为它们可能和 Vue 内置的 property、API 方法冲突。你可以使用例如 `vm.$data.\_property` 的方式访问这些 property。
    详见[vue 官方文档](https://cn.vuejs.org/v2/api/#data)

    ***

6.  :cloud: 如何在子组件中访问父组件的实例？

    vue 中如果父组件想调用子组件的方法，可以在子组件中加上 ref，然后通过 this.$refs.ref.method 调用.[详见](https://www.cnblogs.com/jin-zhe/p/9523029.html)
    Vue 中子组件调用父组件的方法，这里有三种方法提供参考：[详见](https://www.cnblogs.com/jin-zhe/p/9523782.html)

    1. 直接在子组件中通过 this.$parent.event 来调用父组件的方法
    2. 在子组件里用$emit 向父组件触发一个事件，父组件监听这个事件
    3. 父组件把方法传入子组件中，在子组件里直接调用这个方法

    ***

7.  :cloud: 你有使用过 `babel-polyfill` 模块吗？主要是用来做什么的？

    Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。

    举例来说，ES6 在 Array 对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片。

    Babel 默认不转码的 API 非常多，详细清单可以查看 `babel-plugin-transform-runtime` 模块的 `definitions.js` 文件。

    ***

8.  :cloud: vue 边界情况有哪些？

    详见[vue 官方文档](https://cn.vuejs.org/v2/guide/components-edge-cases.html)

    1. 访问元素 & 组件
    2. 程序化的事件侦听器
    3. 循环引用
    4. 模板定义的替代品
    5. 控制更新

    ***

9.  :cloud: vue 使用 `v-for` 遍历对象时，是按什么顺序遍历的？如何保证顺序？

    1. 会先判断是否有 iterator 接口，如果有循环执行 next()方法

    2. 没有 iterator 的情况下，会调用 Object.keys()方法，在不同浏览器中，JS 引擎不能保证输出顺序一致

    3. 保证对象的输出顺序可以把对象放在数组中，作为数组的元素

    ***

10. :cloud: vue 如果想扩展某个现有的组件时，怎么做呢？

    1. 使用 Vue.extend 直接扩展

    2. 使用 Vue.mixin 全局混入

    3. HOC 封装

    4. 加 slot 扩展

    ***

11. :cloud: vue 中什么是递归组件？举个例子说明下？

    **组件自己调用自己，场景有用于生成树形结构菜单**

    ***

12. :cloud: vue 组件里写的原生 addEventListeners 监听事件，要手动去销毁吗？为什么？

    需要，原生 DOM 事件必须要手动销毁，否则会造成内存泄漏

    ***

13. :cloud: 使用 vue 渲染大量数据时应该怎么优化？说下你的思路！

    - 虚拟列表：`vue-virtual-scroll-list`，`vue-virtual-scroller`……
    - 冻结属性，让不必要的属性不响应：`Object.freeze`, 或者使用 `Object.defineProperty` 将对象属性的 `configurable` 设置为 `false`，

    ***

14. :cloud: `<template></template>`有什么特点？

    - 隐藏性：不会显示在页面中
    - 任意性：可以写在页面的任意地方
    - 无效性： 没有一个根元素包裹，任何 HTML 内容都是无效的

    ***

15. :cloud: 你知道`nextTick`的原理吗？

    > 用法：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    > 提到 DOM 的更新是异步执行的，只要数据发生变化，将会开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。

    > 简单来说，就是当数据发生变化时，视图不会立即更新，而是等到同一事件循环中所有数据变化完成之后，再统一更新视图。

    > [NextTick - 源码版 之 独立自身](https://mp.weixin.qq.com/s?__biz=MzUxNjQ1NjMwNw==&mid=2247484373&idx=1&sn=4649539af29f75a060e5ab5bff2e8a97&chksm=f9a669c9ced1e0df91d06e9d06144c9576a300ec4e63f6052b60b67123d16a756f9123377ac3&scene=21#wechat_redirect)

    ***

16. 写出你知道的表单修饰符和事件修饰符

    > 事件修饰符.stop .prevent .capture .self .once .passive
    > 表单修饰符.number .lazy .trim

    ***

17. vue3.0 特性你有什么了解的吗？

    > [尤雨溪：Vue 3.0 计划](https://juejin.cn/post/6844903687207272462)

    > [尤雨溪在 Vue3.0 Beta 直播里聊到了这些…](https://juejin.cn/post/6844904134303301645)

    ***

18. vue-loader 是什么？它有什么作用？

    > 是一个 webpack 的 loader,解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理。

    ***

19. 删除数组用 delete 和 Vue.delete 有什么区别？

    - delete：只是被删除数组成员变为 empty / undefined，其他元素键值不变

    - Vue.delete：直接删了数组成员，并改变了数组的键值（对象是响应式的，确保删除能触发更新视图，这个方法主要用于避开 Vue 不能检测到属性被删除的限制）

20. vue 和 react 有什么不同？使用场景分别是什么？

    1. vue 是完整一套由官方维护的框架，核心库主要有由尤雨溪大神独自维护，而 react 是不要脸的书维护（很多库由社区维护），曾经一段时间很多人质疑 vue 的后续维护性，似乎这并不是题。
    2. vue 上手简单，进阶式框架，白话说你可以学一点，就可以在你项目中去用一点，你不一定需要一次性学习整个 vue 才能去使用它，而 react，恐怕如果你这样会面对项目束手无策。
    3. 语法上 vue 并不限制你必须 es6+完全 js 形式编写页面，可以视图和 js 逻辑尽可能分离，减少很多人看不惯 react-jsx 的恶心嵌套，毕竟都是作为前端开发者，还是更习惯于 html 净。
    4. 很多人说 react 适合大型项目，适合什么什么，vue 轻量级，适合移动端中小型项目，其实我想说，说这话的人是心里根本没点逼数，vue 完全可以应对复杂的大型应用，甚至于说如果你 react 学的不是很好，写出来的东西或根本不如 vue 写的，毕竟 vue 跟着官方文档撸就行，自有人帮你规范，而 react 比较懒散自由，可以自由发挥
    5. vue 在国内人气明显胜过 react，这很大程度上得益于它的很多语法包括编程思维更符合国人思想

    ***

21. 如何引入 scss？引入后如何使用？

    1. 安装 scss 依赖包
    2. 在 webpack 下配置好对应的 loader
    3. 在 style 样式标签上添加 lang="scss"，即<style lang="scss">。

    ***

22. 你有封装过 axios 吗？主要是封装哪方面的？

    - 封装处理配置（路径、时间、token）、
    - 统一管理接口、错误处理、不同形式的请求、消息提示、loading 等。

    ***

23. 分别说说 vue 能监听到数组或对象变化的场景，还有哪些场景是监听不到的？无法监听时有什么解决方案？

    > vue 监听数组的变化:

    - vue **能够监听**数组变化的场景

      - 通过赋值的形式改变正在被监听的数组
      - 通过`splice(index,num,val)`的形式改变正在被监听的数组
      - 通过数组的`push,pop,unshift,shift`的形式改变正在被监听的数组

    - vue **无法监听**的数组变化的场景

      - 通过数组索引改变数组元素的值
      - 改变数组的长度

    - vue **解决**无法监听数组变化的方法
      - this.$set(arr, index, newVal)
      - 通过 splice（index，num，val）
      - 使用临时变量作为中转，重新赋值数组

    > vue 监听对象的变化

    - vue **能够监听**到对象变化的场景

      - 直接赋值

    - vue 无法监听到对象变化的场景

      - 对象的增加、删除、修改无法被 vue 监听到

    - vue **解决**无法监听对象变化的方法

      - 使用 this.$set(object, key, value)_（vue 无法监听 this.set 修改原有属性）_
      - 使用 Object.assign()直接赋值 _（推荐使用）_

    ***

24. :cloud: 实际工作中，你总结的 vue 最佳实践有哪些？

    详见[vue 官方文档/风格指南](https://cn.vuejs.org/v2/style-guide/)

    > 规则归类=> A:必要的 B:强烈推荐 C:推荐 D:谨慎使用

    A:

    1.  组件名为多个单词

        **组件名应该始终是多个单词的，根组件 App 以及 `<transition>、<component>` 之类的 Vue 内置组件除外。**
        这样做可以避免跟现有的以及未来的 HTML 元素**相冲突**，因为所有的 HTML 元素名称都是单个单词的。

    2.  组件数据

        **组件的 `data` 必须是一个函数。**
        当在组件中使用 data property 的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。

    3.  `Prop` 定义

        **Prop 定义应该尽量详细。**
        在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

    4.  为`v-for`设置键值

        总是用 `key` 配合 `v-for`。以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为。

    5.  避免 `v-if` 和 v-for 用在一起

        **永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。**

    6.  为组件样式设置作用域

        **对于应用来说，顶级 `App` 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。**

        这条规则只和单文件组件有关。你不一定要使用 scoped attribute。设置作用域也可以通过 CSS Modules，那是一个基于 class 的类似 BEM 的策略，当然你也可以使用其它的库或约定。

    7.  私有 property 名

        使用模块作用域保持不允许外部访问的函数的私有性。如果无法做到这一点，就始终为插件、混入等不考虑作为对外公共 API 的自定义私有 property 使用 `$_` 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 `$._yourPluginName_`)。

    B:

    1.  组件文件

        **只要有能够拼接文件的构建系统，就把每个组件单独分成文件。**

    2.  单文件组件文件的大小写

        **单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。**

    3.  基础组件名

        **应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`。**

    4.  单例组件名

        **只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。**

        这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

        =>

        ```
        components/
        |- TheHeading.vue
        |- TheSidebar.vue
        ```

    5.  紧密耦合的组件名

        **和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**

        =>

        ```
        components/
        |- SearchSidebar.vue
        |- SearchSidebarNavigation.vue
        ```

    6.  组件名中的单词顺序

        **组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。**

        =>

        ```
        components/
        |- SearchButtonClear.vue
        |- SearchButtonRun.vue
        |- SearchInputQuery.vue
        |- SearchInputExcludeGlob.vue
        |- SettingsCheckboxTerms.vue
        |- SettingsCheckboxLaunchOnStartup.vue
        ```

    7.  模板中的组件名大小写

        **对于绝大多数项目来说，在*单文件组件*和字符串模板中组件名应该总是 `PascalCase` 的——但是在 DOM 模板中总是 `kebab-case` 的。**

        PascalCase 相比 kebab-case 有一些优势：

        - 编辑器可以在模板里自动补全组件名，因为 PascalCase 同样适用于 JavaScript。
        - <MyComponent> 视觉上比 <my-component> 更能够和单个单词的 HTML 元素区别开来，因为前者的不同之处有两个大写字母，后者只有一个横线。
        - 如果你在模板中使用任何非 Vue 的自定义元素，比如一个 Web Component，PascalCase 确保了你的 Vue 组件在视觉上仍然是易识别的。

    8.  完整单词的组件名

        **组件名应该倾向于完整单词而不是缩写。**

    9.  Prop 名大小写

        **在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。**

        =>

        ```
        props: {
          greetingText: String
        }

        <WelcomeMessage greeting-text="hi"/>
        ```

    10. 指令缩写

        **指令缩写 (用 : 表示 `v-bind:`、用 @ 表示 `v-on:` 和用 # 表示 `v-slot:`) 应该要么都用要么都不用。**

    ***
