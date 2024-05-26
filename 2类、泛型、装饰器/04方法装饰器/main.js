var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 方法装饰器函数会接收到3个参数,3个参数规定好的
/**
 * @param target 普通方法target对应的是类的prototype,静态方法里target对应的是类的构造函数
 * @param name 装饰器方法的名字
 *
 * */
function log(f, he) {
    console.log(f, he);
    var old = f[he];
    f[he] = function () {
        console.log('hello');
        old();
        console.log('world');
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.ha = function () {
        console.log('我是oldhahahah');
    };
    __decorate([
        log
    ], Person.prototype, "ha");
    return Person;
}());
new Person().ha();
