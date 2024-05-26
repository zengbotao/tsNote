var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function age(constructor) {
    constructor.prototype.age = 18;
}
function method(target, propertyKey) {
    console.log(target);
    console.log('prop ' + propertyKey);
}
var Hello = /** @class */ (function () {
    function Hello() {
        console.log('hello');
        this.name = 'casey';
    }
    Hello.prototype.hello = function () {
        return 'hello method';
    };
    Hello.shello = function () {
        return 'static method';
    };
    __decorate([
        method
    ], Hello.prototype, "hello");
    __decorate([
        method
    ], Hello, "shello");
    Hello = __decorate([
        age
    ], Hello);
    return Hello;
}());
// console.log(Hello.prototype) // { hello: [Function (anonymous)], age: 18 }
// 我们修饰的hello这个实例方法,第一个参数将是原型对象,Hello.prototype
// console.log(Hello.prototype.constructor) // [Function: Hello] { shello: [Function (anonymous)] }
