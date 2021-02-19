js的基本类

1 Number
2 String 
3 Null
4 undefined
5 symble
6 boolean
以上6种基本数据类型

复合类型 也可以叫做引用类型  数组和对象
var obj=new Ojbect()
var obj={}  //字面量
var obj=new Function() 


js是弱类型的语言
上一秒的String可能就是Number了

在js中一般进行数据类型转换是通过内部的toString跟内部的valueOf方法进行的

toString 方法使用情况

var str="string123"
var num=123

const arrayList=[12,15,19,99]
undefined
const res=arrayList.every(function(item,index){
    console.log(item,index)
	if(item<19){ return true}else {return false}
})

javascript执行上下文

第一 执行上下文的类型

全局执行上下文 
函数执行上下文
Eval函数执行上下文   //这个一般不建议使用 参见你不知道的javascript上卷

执行栈也叫调用栈 

执行上下文的创建

1.创建阶段
          1.确定this的值  //确定当前this（上下文所在的类型是全局还是函数执行上下文）
           2.词法环境创建
           3.变量环境创建 
         
2 执行阶段



