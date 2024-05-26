var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器函数
function high(target) {
    console.log(target);
    target.a = 100;
}
// 定义可以接收用户参数的装饰器函数,这种内部必须返回一个函数,用来接收类,进行装饰器增强
function high2(type) {
    console.log(type); // 高
    return function (target) {
        if (type === '高') {
            target.gao = '高细高';
        }
        else if (type === '低') {
            target.di = '低细低';
        }
    };
}
// 装饰器的语法是在要装饰的类/属性/方法前面使用@符号调用函数
// 装饰器会自动调用函数,把类传递过去
/* @high
@high2('高')
class Person {}
console.log(Person.gao)
console.log(Person.a) */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        high,
        high2('低')
    ], Person);
    return Person;
}());
console.log(Person.di);
console.log(Person.a);
