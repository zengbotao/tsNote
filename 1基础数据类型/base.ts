// 1、number：如果我们要定义一个只存储数字的变量,那么就定义为number类型
let num: number = 10
// console.log(num)
// num = true // 错误
// let numb: number = 'abc'

// 2、string
let str1: string = '123'
// let str2: string = 123
// str2 = true

// 3、null与undefined
let nu: null = null // 如果一个变量的类型为null,那么就只能为null
// nu = '123'
// console.log(nu);
let un: undefined = undefined // 如果一个变量的类型为undefined,那么就只能为undefined

// 4、any
let an: any = 123 // 如果我们使用的变量需要是任何类型,那么就用any声明一下
an = '哈哈哈'
an = true
// console.log(an);

// 5、组合类型
let a: (number | boolean | string) = 123
// console.log(a);
a = '123'
// console.log(a);

// 6、单一类型数组
let numArr: number[] = [1, 2, 3]
let strArr: string[] = ['a', 'b', 'c', 'd']
let booArr: boolean[] = [true, false] // 在元素类型后面接上[],表示有此类型元素组成的一个数组
let boolArr: Array<boolean> = [true, false] // 使用数组泛型,Array<元素类型>
// console.log(boolArr);

// 7、组合类型数组
let numStrArr: (number | string)[] = [1, 2, 'a', 'b']
let boolStrArr: Array<boolean | string> = [true, true, 'a']
// 定义一对值分别为string和number类型的元组
let arr: [string, number]
arr = ['hello', 2]
// console.log(boolStrArr);

// 8、枚举类型
// 利用传统的const方式定义枚举,只是限制了变量的引用不可变,但是对象的属性仍然是可以改变的
const sex = ['男', '女']
sex.push('中性')
sex.push('人妖')
// console.log(sex)

// 如果你需要定义一组固定不变的对象,那么请声明为枚举类型
enum sex2 { '男', '女' } // 默认情况下,从0开始为元素编号
// 枚举数据可以通过下标的方式来取值
// console.log(sex2[0]) // 男
// console.log(sex2[1]) // 女
// 枚举数据有个特点,可以通过值反向取到下标
// console.log(sex2['男']) // 0
// console.log(sex2['女']) // 1

enum sex3 { '男' = 5, '女' = 8 }
// console.log(sex3[5], sex3[8]) // 男 女 枚举数据可以通过下标的方式来取值
// console.log(sex3['男'], sex3['女']) // 5 8 枚举数据有个特点,可以通过值反向取到下标
// console.log(sex3)

enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green
// console.log(c)

// 9、函数
// 有两个参数a和b,求a+b的值并返回
function sum(a: number, b: number): number {
    return a + b
}
// console.log(sum(1, 2))
// console.log(sum(1))         // 报错
// console.log(sum('1', 'b'))  // 报错

// 10、任意参数函数,如果参数不定,使用...,ts会进行自动分析,就不再严格要求参数个数
function sum2(...arg: number[]): number {
    return arg.reduce(function(sum, v) {
        return sum + v
    }, 0)
}
// console.log(sum2(1, 10, 30, 10)) // 41
// console.log(sum2(1, 2, true)) // 报错

// 11、可选参数函数,该方法如果传一个参数获取值,传两个参数就是设置值
let obj = {}
function fn(key: string, val?: any): any {
    if(val) {
        obj[key] = val
    } else {
        return obj[key]
    }
}
fn('a', 10)
// console.log(obj) // {a: 10}
fn('b', 'abc')
// console.log(obj) // {a: 10, b: 'abc'}
console.log(fn('b')) // 'abc'
fn('c', {a: 1, b: 2})
// console.log(obj)

// 12、类
// 对象不可动态添加属性
let o = { a: 1 }
o.a = 100
// o.b = 20 // 错误
// console.log(o)

// 13、class中不可动态添加属性
class Dog {
    // 必须要定义好实例属性,才能赋值
    name: string
    age: number = 0
    // 函数定义形参类型,用来约束调用者
    constructor(name: string, age: number) {
        this.name = '中国' + name
        this.age = age
    }
}
// console.log(new Dog('haha', 123))

// 14、class实例属性简写
class Dogs {
    constructor(public name: string, public age: number) {}
}
let dog: Dogs = new Dogs('中华小狗狗', 20)
console.log(dog);

// 15、静态成员
class Person {
    static maxAge: number = 250
    static getTotal() {
        return '14亿'
    }
}
// 静态成员通过类名调用
// console.log(Person.maxAge, Person.getTotal()) // 250 14亿

// 16、public修饰符
class Persons {
    public static color: string = '黄色'
    public name: string
    constructor(name: string) {
        this.name = name
    }
}
let fei = new Persons('狒狒')
// 只有public修饰的属性方法才能在类的外面调用
console.log(fei.name)
console.log(Persons.color)
