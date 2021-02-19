/*
 * @Author: chentao 
 * @Date: 2021-02-01 15:11:27 
 * @Last Modified by: chentao
 * @Last Modified time: 2021-02-01 15:13:17
 */
class JavaDog implements InterfaceAnimal{
    
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(str:string){
        console.log(`${this.name}在吃饭`)
    }
}