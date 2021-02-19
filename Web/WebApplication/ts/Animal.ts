/*
 * @Author: chentao 
 * @Date: 2021-02-01 14:10:11 
 * @Last Modified by: chentao
 * @Last Modified time: 2021-02-01 14:16:23
 * ts中的抽象类
 */
abstract class Animal{
    protected name:string=''
    protected age:number=0;
    protected constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    //抽象类声明抽象方法  
    abstract eat():any;
    
    protected run(){
        console.log(`${this.name}今年${this.age}岁`)
    }
}