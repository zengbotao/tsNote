var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.say = function () {
        console.log('脱贫脱单不脱发！');
    };
    return User;
}());
var user = new User('xiaolun', 18);
console.log(user);
user.say();
