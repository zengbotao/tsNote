function One() {
    return function(target) {
        console.log('I am class One')
    }
}

function Two() {
    return function(target, methodName: string) {
        console.log('I am method-class Two')
    }
}

function Three() {
    return function(target, paramsName: string) {
        console.log('I am params-class Three')
    }
}

function Four() {
    return function(target, paramsName: string) {
        console.log('I am params-class Four')
    }
}

function Five() {
    return function(target, protoName: string) {
        console.log('I am proto-class Five')
    }
}

@One()
class Hello {
    @Five()
    hello: string

    @Two()
    haha( @Three() p1: string, @Four() p2: string ) {
        console.log(p1, p2)
    }
}
// 方法和属性装饰器,谁在前面先执行谁,因为参数是属于方法的一部分,所以参数会一直紧紧挨着方法执行   5  2
// 方法和方法参数中,参数装饰器先执行   5 3 4 2 / 5 4 3 2
// 有多个参数装饰器时：从最后一个参数依次向前执行  5 4 3 2
// 类装饰器总是最后执行  5 4 3 2 1

// @One()
// class Hello {
//     @Two()
//     haha( @Three() p1: string, @Four() p2: string ) {
//         console.log(p1, p2)
//     }

//     @Five()
//     hello: string
// }

