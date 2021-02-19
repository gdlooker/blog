/*
 * @Author: chentao 
 * @Date: 2021-01-23 10:35:16 
 * @Last Modified by: chentao
 * @Last Modified time: 2021-01-23 11:13:06
 * 
 */
class Person {
    public name: string;
    public age: number;
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log(this.name,this.age)
    }
    run(): void {
        console.log('this.name', this.name)
    }
    
}

var p=new Person('张三',23)
p.run()