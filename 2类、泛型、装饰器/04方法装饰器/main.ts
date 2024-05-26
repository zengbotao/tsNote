// 方法装饰器函数会接收到3个参数,3个参数规定好的
/** 
 * @param target 普通方法target对应的是类的prototype,静态方法里target对应的是类的构造函数
 * @param name 装饰器方法的名字
 * 
 * */
function log(target: any, name: string) {
    console.log(target, name)
    let old = target[name]
    target[name] = function() {
        console.log('hello')
        old()
        console.log('world')
    }
}

class Person {
    @log
    ha(): void {
        console.log('我是oldhahahah')
    }
}
new Person().ha()



