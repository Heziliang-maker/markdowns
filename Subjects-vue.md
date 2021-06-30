# :star: vue :star:

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

11. :cloud: 实际工作中，你总结的 vue 最佳实践有哪些？

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
