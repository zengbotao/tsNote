// private修饰符
class Person {
    private static color: string = '黄色'
    private name: string
    constructor(name: string) {
        this.name = name
    }
    say(): void {
        console.log(this.name) // 私有的东西只能在类的里面使用,出了这个类就不行
        console.log(Person.color)
    }
}
// new Person('haha').say() // 'haha' 黄色
let fe = new Person('憨憨')
// 只有public修饰的属性方法才能在类的外面使用
// console.log(fe.name)
// console.log(Person.color)

// protected修饰符
class Demo {
    // 受保护权限只能在当前类或者子类使用
    constructor(protected name: string, protected color: string) {}
    say() {
        console.log(this.color) // 在当前类使用是可以的
    }
}

class CDemo extends Demo {
    say() {
        console.log(this.name) // 在子类使用也是ok的
    }
}
let xiaohong = new Demo('哈哈', '红色')
// console.log(xiaohong) // {name: '哈哈', color: '红色'}
let xiaoming = new CDemo('嘻嘻', '绿色')
// console.log(xiaoming) // {name: '嘻嘻', color: '绿色'}

// readonly修饰符
class Tab {
    public readonly name: string // readonly只读修饰符只允许赋值一次,一旦赋值不可以修改
    private readonly color: string // readonly只读修饰符可以与访问权限修饰符一起使用
    constructor(name: string, color: string) {
        this.name = name
        this.color = color
    }
}
let tab = new Tab('a', 'b')
// console.log(tab) // {name: 'a', color: 'b'}
// tab.name = 'abc' // 报错，不能赋值
// tab.color = 'red' // 

// 复杂的继承
class Animals {
    name: string
    constructor(theName: string) {
        this.name = theName
    }
    move(num: number = 0) {
        console.log(`${this.name} moved ${num}`)
    }
}

class Snake extends Animals {
    constructor(name: string) {
        super(name)
    }
    move(num = 5) {
        console.log('蛇类')
        super.move(num)
    }
}

class Horse extends Animals {
    constructor(name: string) {
        super(name)
    }
    move(num = 45) {
        console.log('马类')
        super.move(num)
    }
}
let sam = new Snake('hello snake')
let tom: Animals = new Horse('hello Horse')
// sam.move() // '蛇类' hello snake moved 5
// tom.move(34) // '马类' hello Horse moved 34
// 这个例子主要是演示了子类可以重写父类的方法,Snake和Horse都创建了move方法,它们重写了Animals继承来的move方法
// 使得move方法根据不同的类而具有不同的功能

// 泛型
// 没有使用泛型的写法
// 传入任意多数字,包装成一个数组返回
function createArrayNumber(...arg: number[]): number[] {
    return arg
}
// console.log(createArrayNumber(1, 2, 3, 4, 5)) // [1, 2, 3, 4, 5]
// 传入任意多字符串,包装成一个数组返回
function createArrayString(...arg: string[]): string[] {
    return arg
}
// console.log(createArrayString('a', 'b', 'c', 'd', 'e')) // ['a', 'b', 'c', 'd', 'e']
// 传入任意多对象,包装成一个数组返回
function createArrayObject(...arg: Object[]): Object[] {
    return arg
}
// console.log(createArrayObject({a: 1}, {b: 2})) // [{…}, {…}]
// 上面的需要有个特点,就是每次创建的数组中可存储的数据类型是单一的
// 泛型就刚好可以解决上面代码冗余的问题,一个泛型函数可以顶上面全部
function createArray<Type> (...arg: Type[]): Type[] {
    return arg
}
// 使用泛型之后,我们要创建string类型的数组,就用<string>指定
// console.log(createArray<string>('a', 'b', 'c', 'd')) // ['a', 'b', 'c', 'd']
// console.log(createArray<number>(1, 2, 3)) // 需要Number类型的值就用<number>指定
// console.log(createArray<Date>(new Date(), new Date())) // 泛型这里也可以传对象类型

// 类中定义泛型,泛型适用于多个类型
class Caches<T> {
    private data = {}
    set(key: string, val: T): void {
        this.data[key] = val
    }
    get(key: string): T {
        return this.data[key]
    }
}
// 泛型可以是基础类型
let numCache: Caches<number> = new Caches<number>()
numCache.set('abc', 100)
console.log(numCache)
// 也可以是对象
let dataCache: Caches<Date> = new Caches<Date>()
dataCache.set('2022', new Date('2022-02-09'))
console.log(dataCache)

