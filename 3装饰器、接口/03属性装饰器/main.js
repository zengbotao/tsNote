var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 属性装饰器会在运行时当做函数被调用
// 1、对于静态成员来说是类的构造函数,对于实例成员是类的原型对象
// 2、成员的名字
function Value(value) {
    return function (target, propertyName) {
        target[propertyName] = value;
    };
}
var Hello = /** @class */ (function () {
    function Hello() {
    }
    __decorate([
        Value('宋科')
    ], Hello.prototype, "name");
    return Hello;
}());
// console.log(new Hello().name)
