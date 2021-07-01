# :star: Typescript :star:

      > 正在连载中 ···

文章参考:

[TypeScript 官方文档](https://www.tslang.cn/index.html)

[TypeScript 入门教程-阮一峰](http://ts.xcatliu.com/)

### _1.主要特点_

- 跨平台:TypeScript 编译器可以安装在任何操作系统上,包括 Windows、macOS 和 Linux。

- ES6 特性:TypeScript 包含计划中的 ECMAScript 2015 (ES6) 的大部分特性,例如箭头函数。

- 面向对象的语言:TypeScript 提供所有标准的 OOP 功能,如类、接口和模块。

- 静态类型检查:TypeScript 使用静态类型并帮助在编译时进行类型检查。因此,你可以在编写代码时发现编译时错误,而无需运行脚本。

  可选的静态类型:如果你习惯了 JavaScript 的动态类型,TypeScript 还允许可选的静态类型。

- DOM 操作:您可以使用 TypeScript 来操作 DOM 以添加或删除客户端网页元素。

### _2.优点_

- TypeScript 更具表现力,这意味着它的语法混乱更少。

- 由于高级调试器专注于在编译时之前捕获逻辑错误,因此**调试**很容易。

- **静态类型**使 TypeScript 比 JavaScript 的动态类型更易于阅读和结构化。

- 由于通用的转译,它可以**跨平台**使用,在客户端和服务器端项目中

### _3.原始数据类型_

- _数字_:和 JavaScript 一样,TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 `number`。 除了支持十进制和十六进制字面量,TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量。

  `let identifier: number = value;`

- _布尔_:最基本的数据类型就是简单的 true/false 值

  `let identifier: bool = Boolean value;`

- _字符串_:使用 `string` 表示文本数据类型。 和 JavaScript 一样,可以使用双引号（ "）或单引号（'）表示字符串。

  `let name: string = "bob";`

- _Any_ 不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any 类型来标记这些变量:

  ```
  let notSure: any = 4;
  notSure = "maybe a string instead";
  notSure = false; // okay, definitely a boolean
  ```

- _Void_ 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void:

  ```
  function warnUser(): void {
    console.log("This is my warning message");
  }
  ```

  声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null:

  ```
  let unusable: void = undefined;
  ```

- _Null 和 Undefined_ undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 和 void 相似，它们的本身的类型用处不是很大:

  ```
  // Not much else we can assign to these variables!
  let u: undefined = undefined;
  let n: null = null;
  ```

- _Never_ `never` 类型表示的是那些永不存在的值的类型。 例如， `never` 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never` 类型，当它们被永不为真的类型保护所约束时。

  `never` 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 `never` 的子类型或可以赋值给 `never` 类型（除了 `never` 本身之外）。 即使 `any` 也不可以赋值给 `never`。

### _4.非原始数据类型_

- _枚举 Enum_ : `enum` 类型是对 JavaScript 标准数据类型的一个补充。 像 C#等其它语言一样,使用枚举类型可以为一组数值赋予友好的名字。

  ```
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;
  ```

  默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1 开始编号:

  ```
  enum Color {Red = 1, Green, Blue}
  let c: Color = Color.Green;
  ```

  枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字:

  ```
  enum Color {Red = 1, Green, Blue}
  let colorName: string = Color[2];
  console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
  ```

- _元祖 Tuple_ :元组类型允许表示一个已知元素数量和类型的数组,各元素的类型不必相同。 比如,你可以定义一对值分别为 `string` 和 `number` 类型的元组。

  ```
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  // Initialize it incorrectly
  x = [10, 'hello']; // Error
  ```

- _数组_:TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。

  - 第一种,可以在元素类型后面接上 [],表示由此类型元素组成的一个数组

  `let list: number[] = [1, 2, 3];`

  - 第二种,是使用数组泛型,`Array<元素类型>`

  `let list: Array<number> = [1, 2, 3];`

- \_
