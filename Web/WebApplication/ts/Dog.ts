/*
 * @Author: chentao 
 * @Date: 2021-02-01 14:14:04 
 * @Last Modified by: chentao
 * @Last Modified time: 2021-02-01 14:26:48
 */
class Dog extends Animal{
     constructor(name:string,age:number){
         super(name,age)
         this.name=this.name
         this.age=age;
     }
    eat(){
         console.log(`${this.name}今年${this.age}岁`)
         return 
     }
}
let dog:Dog=new Dog('lisi',22)
dog.eat()