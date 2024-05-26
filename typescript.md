<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-05-25 10:09:20
 * @LastEditTime: 2024-05-25 10:15:10
-->
## TypeScript
### 简介
官网：[https://www.tslang.cn/index.html]
TS是JS类型的超集,它可以编译成纯JS。TS可以在任何浏览器、计算机和任何操作系统上运行,它是开源的。
类型允许JS开发者在开发js应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。

### 使用
```cmd

tsc hello.ts # 编译代码,会输出一个hello.js文件

ts-node xxx.ts //运行文件

```
在编写ts文件出现红色波浪线的话，可以打开vsc的设置，搜索validate,把TypeScript>Validate:Enable的勾取消掉。

### 一、基础类型
为了让程序有价值,我们需要能够处理最简单的数据单元：数字、字符串、结构体、布尔值等。TS支持与JS几乎相同的数据类型,此外还提供了使用的枚举类型方便我们使用。

- 布尔值：与JavaScript一致
- 数字：和JS一样,TS里所有数字都是浮点数，除了支持十进制和十六进制字面量，还支持ES6中引进的二进制和八进制字面量
- 字符串：与JS一样，可以用"或'表示字符串
- 数组：TS与JS一样可以操作数组元素。有两种方式可以定义数组。
    第一种,可以在元素类型后面接上[],表示由此类型元素组成的一个数组
    第二种，是使用数组泛型,Array<元素类型>
- 元组Tuple：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
- 枚举：enum类型是对JS标准数据类型的一个补充,使用枚举类型可以为一组数值赋予友好的名字。
- Any：在编程阶段不清楚类型的变量指定一个类型,可以使用any类型来标记这些变量
- Void：void与any相反,它表示没有任何类型,当一个函数没有返回值时,通常会看到其返回值类型是void。
        声明一个void类型的变量没什么大用,因为你只能为他赋予undefined和null。
- Null和Undefined：用处不大
- Never：never类型表示用不存在的值的类型,可以是任何类型的子类型,也可以赋值给任何类型,没有类型可以赋值给它
- Object：表示非原始类型,也就是number、string、boolean、symbol、null或undefined之外的类型。

```ts
let isDone: boolean = false

let a: number = 6

let name: string = 'bob'
name = 'smith'

let list: number[] = [1, 2, 3] // 第一种
let list2: Array<number> = [1, 2, 3] // 第二种

let x: [string, number] // 定义一对值分别为string和number类型的元组。
x = ['hello', 12]
x[3] = 'world' // 当访问一个越界元素,会使用联合类型替代,字符串可以赋值给(string | number)类型,但是不能赋予布尔值

enum Color {Red, Green, Blue} // 默认情况下,从0开始为元素编号
let c: Color = Color.Green // 1

enum Color {Red = 1, Green, Blue} // 这里我们把上面的例子改成从1开始编号
let c: Color = Color.Green // 2 这里得到的值就是2

// 枚举类型的便利是我们可以由枚举的值得到它的名字。
// 比如我们知道数值是2,但是不确定它映射到Color里的哪个名字,我们可以查找到相应的名字：
enum Color {Red = 1, Green, Blue}
let colorNmae: string = Color[2] // Green

let notSure: any = 4
notSure = 'hello'
notSure = false

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message)
}
```

### 二、接口
TS核心原则之一是对值所具有的结构进行类型检查,它有时被称作'鸭式辨型法'或'结构型子类型化',接口的作用就是为这些类型命名和问你的代码或第三方代码定义契约。



