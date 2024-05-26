interface UserInterface {
    name: string;
    age: number;
    say(): void
}
// 类和接口建立关联,靠implements建立,只要建立了关系,那么我们的类型就必须严格实现接口中的每个属性和方法
class User implements UserInterface {
    constructor(public name: string, public age: number) {}
    say(): void {
        console.log('脱贫脱单不脱发！')
    }
}

let user = new User('xiaolun', 18)
console.log(user)
user.say()

