var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 参数装饰器表达式会在运行时当做函数被调用
function log(config) {
    return function (target, name) {
        console.log(target, name);
        var old = target[name];
        target[name] = function () {
            if (config === 'top' || config === 'all') {
                console.log('hello');
            }
            old();
            if (config === 'bottom' || config === 'all') {
                console.log('world');
            }
        };
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log('我是原来的say方法');
    };
    Person.prototype.run = function () {
        console.log('我是原来的run方法');
    };
    __decorate([
        log('top')
    ], Person.prototype, "say");
    __decorate([
        log('all')
    ], Person.prototype, "run");
    return Person;
}());
var demo = new Person();
demo.say();
demo.run();
