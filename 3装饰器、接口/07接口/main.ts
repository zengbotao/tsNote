function printFn(obj: {label: string}) {
    console.log(obj.label)
}

let myObj = {size: 1, label: 'hello world'}
printFn(myObj)

// 用接口改写上面的示例
interface ObjValue {
    label: string
}

function printFun(obj: ObjValue) {
    console.log(obj.label)
}

let myObj2 = {size: 1, label: 'hello world22222'}
printFun(myObj2)

// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: 'white', area: 100}
    if(config.color) {
        newSquare.color = config.color
    }
    if(config.width) {
        newSquare.area = config.width
    }
    return newSquare
}
let myA = createSquare({color: 'red', width: 1000})
console.log(myA)

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {x: 10, y: 20}
console.log(p1);
// p1.x = 5 // 错误

let a: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = a

// 函数类型
interface SearchFn {
    (source: string, sub: string): boolean
}
let mySearch: SearchFn
// 对于函数类型检查来说,函数的参数名不需要与接口里定义的名字相匹配
mySearch = function(src: string, sub: string) {
    let res = src.search(sub)
    return res > -1
}
