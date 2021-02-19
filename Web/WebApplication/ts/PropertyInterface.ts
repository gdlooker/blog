/*
 * @Author: chentao 
 * @Date: 2021-02-01 15:42:35 
 * @Last Modified by: chentao
 * @Last Modified time: 2021-02-01 15:47:12
 * 属性接口 对json对象里面属性的约束
 */
 interface PrintInfo{
     printLabelName:string,

 }
 function printLabel(printInfo:{printLabelName:string}){
    console.log("printInfo对象",printInfo)
 }
 const printInfo:PrintInfo={
     printLabelName:'printLabelName'
 }
printLabel(printInfo) 
