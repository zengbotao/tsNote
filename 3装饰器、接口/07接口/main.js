function printFn(obj) {
    console.log(obj.label);
}
var myObj = { size: 1, label: 'hello world' };
printFn(myObj);
function printFun(obj) {
    console.log(obj.label);
}
var myObj2 = { size: 1, label: 'hello world22222' };
printFun(myObj2);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
var myA = createSquare({ color: 'red', width: 1000 });
console.log(myA);
var p1 = { x: 10, y: 20 };
console.log(p1);
p1.x = 5;
