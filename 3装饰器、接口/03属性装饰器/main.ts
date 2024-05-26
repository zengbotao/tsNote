// 属性装饰器会在运行时当做函数被调用
// 1、对于静态成员来说是类的构造函数,对于实例成员是类的原型对象
// 2、成员的名字
function Value(value: string) {
    return function(target: any, propertyName: string) {
        target[propertyName] = value
    }
}

class Hello {
    @Value('宋科') name: string
}

// console.log(new Hello().name)
