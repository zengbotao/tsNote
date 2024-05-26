/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-05-25 10:09:21
 * @LastEditTime: 2024-05-25 17:02:34
 */
// 对象接口可以用来设定或限制对象里面每个属性的类型
interface a { a: number, b: boolean, c: string }

// 这样就可以给这个变量赋值满足接口数据类型的对象
let obj: a = {
    a: 123,
    b: true,
    c: 'aa'
}

console.log(obj)
