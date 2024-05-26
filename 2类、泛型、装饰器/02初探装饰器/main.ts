function test(target: any) {
  console.log(target); //target就是要修饰的类
  target.a = 100;
  target.b = 200;
}

@test
class Person {}

console.log(Person.a); // 100
console.log(Person.b); // 200
