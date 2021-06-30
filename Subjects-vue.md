# vue

1.  vue 中 data 的属性可以和 methods 中的方法同名吗？为什么？

    [Vue warn]: Method "myname" has already been defined as a data property.

    :cloud::cloud::cloud:

2.  你知道 `v-model` 的原理吗？

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

    :cloud::cloud::cloud:

3.  在 vue 项目中如果 methods 的方法用箭头函数定义结果会怎么样？
    因为箭头函数默绑定父级作用域的上下文，所以不会绑定 vue 实例，所以 this 是 undefind

    :cloud::cloud::cloud:

4.  vue 渲染模板时怎么保留模板中的 HTML 注释呢？

    ```
        <template comments>
        </template>
    ```

    :cloud::cloud::cloud:

5.  vue 变量名如果以\_、$开头的属性会发生什么问题？怎么访问到它们的值？

    以 \_ 或 $ 开头的 property 不会被 Vue 实例代理，因为它们可能和 Vue 内置的 property、API 方法冲突。你可以使用例如 `vm.$data.\_property` 的方式访问这些 property。
    [详见官方文档](https://cn.vuejs.org/v2/api/#data)

    :cloud::cloud::cloud:

6.  如何在子组件中访问父组件的实例？
    vue 中如果父组件想调用子组件的方法，可以在子组件中加上 ref，然后通过 this.$refs.ref.method 调用.[详见](https://www.cnblogs.com/jin-zhe/p/9523029.html)
    Vue 中子组件调用父组件的方法，这里有三种方法提供参考：[详见](https://www.cnblogs.com/jin-zhe/p/9523782.html)

    1. 直接在子组件中通过 this.$parent.event 来调用父组件的方法
    2. 在子组件里用$emit 向父组件触发一个事件，父组件监听这个事件
    3. 父组件把方法传入子组件中，在子组件里直接调用这个方法

    :cloud::cloud::cloud:

7.  你有使用过 `babel-polyfill` 模块吗？主要是用来做什么的？

    Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。

    举例来说，ES6 在 Array 对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片。

    Babel 默认不转码的 API 非常多，详细清单可以查看 `babel-plugin-transform-runtime` 模块的 `definitions.js` 文件。

    :cloud::cloud::cloud:

8.  vue 边界情况有哪些？
    [官方文档](https://cn.vuejs.org/v2/guide/components-edge-cases.html)

    1. 访问元素 & 组件
    2. 程序化的事件侦听器
    3. 循环引用
    4. 模板定义的替代品
    5. 控制更新

    :cloud::cloud::cloud:

9.  实际工作中，你总结的 vue 最佳实践有哪些？
    [风格指南](https://cn.vuejs.org/v2/style-guide/)

    > 规则归类=> A:必要的 B:强烈推荐 C:推荐 D:谨慎使用
    >
    > A:

    1.  组件名为多个单词

        **组件名应该始终是多个单词的，根组件 App 以及 `<transition>、<component>` 之类的 Vue 内置组件除外。**
        这样做可以避免跟现有的以及未来的 HTML 元素**相冲突**，因为所有的 HTML 元素名称都是单个单词的。

    2.  组件数据

        **组件的 `data` 必须是一个函数。**
        当在组件中使用 data property 的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。

    3.  `Prop` 定义

        **Prop 定义应该尽量详细。**
        在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

    4.  为 `v-for` 设置键值
        总是用 `key` 配合 `v-for`。以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为。

    5.  避免 `v-if` 和 v-for 用在一起
        **永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。**

    :cloud::cloud::cloud:

10. vue 使用 `v-for` 遍历对象时，是按什么顺序遍历的？如何保证顺序？

    1、会先判断是否有 iterator 接口，如果有循环执行 next()方法

    2、没有 iterator 的情况下，会调用 Object.keys()方法，在不同浏览器中，JS 引擎不能保证输出顺序一致

    3、保证对象的输出顺序可以把对象放在数组中，作为数组的元素

    :cloud::cloud::cloud:

11. vue 如果想扩展某个现有的组件时，怎么做呢？

    1. 使用 Vue.extend 直接扩展

    2. 使用 Vue.mixin 全局混入

    3. HOC 封装

    4. 加 slot 扩展
