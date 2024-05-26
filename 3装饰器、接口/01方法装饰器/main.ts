function age(constructor: Function) {
    constructor.prototype.age = 18
}

function method(target: any, propertyKey: string) {
    console.log(target)
    console.log('prop ' + propertyKey)
}

@age
class Hello {
    name: string;
    age: string;
    constructor() {
        console.log('hello')
        this.name = 'casey'
    }

    @method
    hello() {
        return 'hello method'
    }

    @method
    static shello() {
        return 'static method'
    }
}
// console.log(Hello.prototype) // { hello: [Function (anonymous)], age: 18 }
// 我们修饰的hello这个实例方法,第一个参数将是原型对象,Hello.prototype

// console.log(Hello.prototype.constructor) // [Function: Hello] { shello: [Function (anonymous)] }