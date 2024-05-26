// 装饰器函数
function high(target: any) {
    console.log(target)
    target.a = 100
}

// 定义可以接收用户参数的装饰器函数,这种内部必须返回一个函数,用来接收类,进行装饰器增强
function high2(type: any) { // 这是一个装饰器工厂
    console.log(type) // 高
    return function(target: any) { // 这是装饰器
        if (type === '高') {
            target.gao = '高细高'
        } else if (type === '低') {
            target.di = '低细低'
        }
    }
}
// 装饰器的语法是在要装饰的类/属性/方法前面使用@符号调用函数
// 装饰器会自动调用函数,把类传递过去
/* @high
@high2('高')
class Person {}
console.log(Person.gao)
console.log(Person.a) */

@high
@high2('低')
class Person {}
console.log(Person.di)
console.log(Person.a)

