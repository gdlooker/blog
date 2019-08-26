### 彻底搞懂js继承专题

**一 js原型链：**

使用原型继承形成原型链，就是让自己的prototype=new Super() 指向父类构造器，因为每次创建一个对象就会有一个\___prototype\___指向原型对象,形成原型链。

**二** 借用构造函数来实现继承:

```javascript
function SupterType(){
   this.colors = ["red", "blue", "green"];
}
function SubType(){
    //继承了 SuperType 
 SuperType.call(this);
}
//创建子类实例

```

**三 组合继承实例代码**：

 1.构造器调用父类方法。

2.将子类的原型对象指向父类的实例。

```javascript
function SuperType(name){ 
 this.name = name; 
 this.colors = ["red", "blue", "green"]; 
}

function SubType(name, age){ 
 //继承属性
 SuperType.call(this, name); 
 this.age = age; 
}
//继承方法
SubType.prototype = new SuperType();
//这就是组合继承
```

**四.原型式继承：**

1.就是让子类的原型对象（prototype）指向父类实例。

```javascript
//临时性构造函数
function object(){
     function F(){} 
     F.prototype = o; 
     return new F();
}
复制。来看下面的例子。
var person = { 
 name: "Nicholas", 
 friends: ["Shelby", "Court", "Van"] 
}; 
var anotherPerson = object(person);
```

**五 寄生式继承 就是跟工厂模式一样**：

```javascript
//工厂方法
function createAnother(original){ 
 var clone = object(original); //通过调用函数创建一个新对象
 clone.sayHi = function(){ //以某种方式来增强这个对象
 alert("hi"); 
 }; 
 return clone; //返回这个对象
}
//父类对象
var person = { 
 name: "Nicholas", 
 friends: ["Shelby", "Court", "Van"] 
};
var anotherPerson = createAnother(person);
```

**六 寄生组合式继承:（建议方式）**

思想：1 给一个方法在 里面创建一个临时实例 ，让该实例的原型 直接指向父实例的原型，然后返回该实例

2.得到临时实例，然后把子类的原型指向临时实例。

实例代码如下：

```javascript
//给一个临时创建实例的方法
function object(superObj){
     function F(){}
    //让该实例的原型 直接指向父实例的原型
    F.prototype=superObj.prototype
    return new F();
}

//定义父类
function SuperType(){
    
}
//定义子类
function SubType(){
    
}
 //创建父类实例
 var superType=new SuperType();
 //调用object获取子类实例
 var linShiObject=object(superType);
 //然后把子类的原型对象指向临时实例。
 SubType.prototype=linShiObject

```

以上就是对js继承的总结。

