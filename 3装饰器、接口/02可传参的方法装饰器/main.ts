// 参数装饰器表达式会在运行时当做函数被调用
function log(config) {
    return function(target: any, name: string): void {
        console.log(target, name)
        let old = target[name]
        target[name] = function() {
            if(config === 'top' || config === 'all') {
                console.log('hello')
            }
            old()
            if(config === 'bottom' || config === 'all') {
                console.log('world')
            }
        }
    }
}

class Person {
    @log('top')
    say(): void {
        console.log('我是原来的say方法')
    }

    @log('all')
    run(): void {
        console.log('我是原来的run方法')
    }
}

let demo = new Person()
demo.say()
demo.run()

