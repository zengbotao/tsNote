var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function One() {
    return function (target) {
        console.log('I am class One');
    };
}
function Two() {
    return function (target, methodName) {
        console.log('I am method-class Two');
    };
}
function Three() {
    return function (target, paramsName) {
        console.log('I am params-class Three');
    };
}
function Four() {
    return function (target, paramsName) {
        console.log('I am params-class Four');
    };
}
function Five() {
    return function (target, protoName) {
        console.log('I am proto-class Five');
    };
}
// @One()
// class Hello {
//     @Five()
//     hello: string
//     @Two()
//     haha( @Three() p1: string, @Four() p2: string ) {
//         console.log(p1, p2)
//     }
// }
// 方法和属性装饰器,谁在前面先执行谁,因为参数是属于方法的一部分,所以参数会一直紧紧挨着方法执行   5  2
// 方法和方法参数中,参数装饰器先执行   5 3 4 2 / 5 4 3 2
// 有多个参数装饰器时：从最后一个参数依次向前执行  5 4 3 2
// 类装饰器总是最后执行  5 4 3 2 1
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.haha = function (p1, p2) {
        console.log(p1, p2);
    };
    __decorate([
        Two(),
        __param(0, Three()),
        __param(1, Four())
    ], Hello.prototype, "haha");
    __decorate([
        Five()
    ], Hello.prototype, "hello");
    Hello = __decorate([
        One()
    ], Hello);
    return Hello;
}());
