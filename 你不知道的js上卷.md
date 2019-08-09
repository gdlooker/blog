### 你不知道的js上卷笔记

### 第一章 作用域是什么

##### 1.1编译原理

1.js是一门动态类型的解释性语言，它的编译主要经历3个阶段

**1.分词/词法分析**。比如var a =2   会拆分成 var      a     =      2这样一个一个的单词

**2.语法分析** . 将词法分析单元抽象成art语法树

**3.将art语法树转化成可执行的代码**

##### 1.2作用域

1.理解作用域。

例如 var a=2; 这里进行了2个操作，首先声明,变量a(这里是进行LHS查询)，右边通过RHS查询2这个值，然后进行赋值操作。

1.其实首先编译器在进行编译的时候，先当前作用域下是不是有这个变量a,

如果有就直接忽略，然后继续向下进行编译，否则会查找上级作用域是否有这个变量，如果有直接忽略，如果没有，编译器会要求在当前的作用域下声明一个新的变量，并命名为a。

2.

指的是编译器编译执行生成运行时所需要的代码。（编译只是为即将运行做准备）

当js引擎在运行的时候会首先查看在当前作用域下是否已经有这个变量，如果有进行赋值，js殷勤就会使用这个变量，如果没有，js引擎会向上级作用域继续查找该变量

### 第二章 词法作用域

1词法阶段

2欺骗词法阶段 eval,with函数   不建议使用，影响性能

1.欺骗词法修改作用域 如eval(),setTimeout(),setInterval()   示例代码如下：

```javascript
  // 定义一个函数
        var b=2
        function foo(str, a) {
            eval(str)
            console.log(a, b)  //输出结果 1，3
        }
        foo("var b=3", 1)
        setTimeout("console.log(6)", 3000)  //3s钟后输出6
		setInterval("console.log(3)"，3000)  //道理相同
```

### 第三章 函数的作用域和块级作用域

3.1隐藏内部实现：主要是讲把变量封装在函数的内部，不要定义全局变量

3.2规避变量冲突 ，也就是建议在函数内部使用局部变量，尽量不要用全局变量

3.3函数作用域

包装函数：是一个函数表达式 ，会立即被执行

```javascript
 (function fob(){
            console.log('闭包执行')
        })()
```

3.3.1匿名函数和具名

### 第五章 作用域和闭包

常见闭包示例：

 ```javascript
function foo(){
    var a=2 ;  //其实这里这个2就是闭包
    function bar(){
        console.log(a)  //内部函数引用外部函数的变量 就是闭包
    }
    return bar
}

var baz=foo(); //正是因为这个 res指向这个foo的返回值结果 也就是bar函数 它的存在导致外部函数foo无法进行回收
baz() ；//调用baz其实是调用bar函数  其实闭包的产生是在var baz=foo()

分析：1 函数bar的词法作用域能够访问foo()的内部作用域
     2 然后我们将这个bar函数本身当作值类型进行传递
     3 执行foo函数之后其返回值也就是bar函数本身赋值给变量baz并调用baz函数
 ```

循环和闭包的示例

```javascript
//来一个for循环
for(var i=0;i<=5;i++){
    setTimeout(function timer(){
         console.log(i)
    },1000)
}
逻辑分析：
输出结果 输出了5个6 究竟是为什么呢？

```

js当中的模块

##### 方式1（外部封闭函数模式）：

```javascript
function CoolModule(){
    var something="cool" ;
    var another=[1,2,3]
    function doSomething(){
        console.log(something);
    }
    function doAnother(){
        console.log(another.join('！'))
    }
    return {
        doSomething:doSomething,
        doAnother:doAnother
    }
}

```

#### 代码分析：

首先，CoolModule() 只是一个函数，必须要通过调用它来创建一个模块实例。如果不执行 

外部函数，内部作用域和闭包都无法被创建。  

其次 CoolModule()返回一个用对象字面量语法{key:value,...}来表示的对象。这个返回的对象中含有对内部函数的引用而不是内部数据变量的引用。这里只是私藏了内部数据变量，就是将这个对象类型的返回值当作是模块的公共API.

模块模式需要具备两个必要条件

1 必须有外部的封闭函数，且该函数至少被调用一次（每次调用都会创建一个新的模块实例）。

2 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。

##### 方式2 立即执行函数模式（可以创建单例模式）

代码如下：

```javascript
var foo = (function CoolModule() { 
var something = "cool"; 
var another = [1, 2, 3]; 
function doSomething() { 
console.log( something ); 
} 

function doAnother() { 
console.log( another.join( " ! " ) ); 
} 
return { 
doSomething: doSomething, 
doAnother: doAnother 
})(); 
```

##### 现代模块机制

```javascript
var MyModules=(function Manager(){
	var modules={}
    function deine(name,deps,impl){
        for(var i=0;i<deps.length;i++){
            deps[i]=modules[deps[i]]
        }
        modules[name]=impl.apply(impl,deps)
    }
    function get(name){
        return modules[name]
    }
    return {
        define:define,
        get:get
    }
})()
```

##### 第二部分 this和对象原型

不知道的js上卷， 人们通常很容易的把this指向理解成指向函数自身，这个推断逻辑在英语语法角度来说就是这样的。

那么现在的问题是this为什么会需要从函数内部引用函数自身呢？ 

常见的原因是递归（自己调用自己）或者可以写一个在第一次被调用后自己解除绑定的事件处理器。

```javascript
 //声明一个foo函数
function foo(num) { 
console.log( "foo: " + num ); 
// 记录 foo 被调用的次数 
this.count++; 
}
//给函数添加属性 count 函数也是对象  可以打印window查看foo函数
foo.count = 0; 
var i; 
for (i=0; i<10; i++) { 

if (i > 5) { 
foo( i ); 
} 
}
//输出结果 6  7  8  9
console.log(foo.count) //输出0
```

以上代码为什么foo.count=0呢？

###### 分析:

当执行foo.count时的确向函数对象foo添加了一个属性count.但是函数内部代码this.count中的

this并不是指向那个函数对象，所以虽然属性名称相同。但是他们的对象不是同一个对象

this.count这个this指的是window这个对象

foo这个函数名称是window的一个属性

这个时候它的this.count 是NaN  为什么会是NaN呢?

因为调用foo函数的时候，this.count是没有被定义的也就是所谓的undefined。 其实就是让undefined++ ，也就是进行数据类型的+法操作  所以NaN+1 之后还是NaN

由此可见，如果要从函数对象内部引用它自身，那只使用this是不够的。一般来说你需要通过一个指向函数对象的词法标识符（变量来引用它）。

思考一下下面这两个函数：

```javascript
function foo(){
    foo.count=4; //foo指向它自身
}
setTimeout(function(){
   //匿名（没有名字）函数无法指向函数本身
},1000)
```

分析：在这个例子中，setTimeout函数的回调函数没有名称标识符（这种函数被称为匿名函数）,因此

你无法从函数内部引用自身的方法。

还有一种传统的但是现在已经被弃用和批判的用法，是使用arguments.callee来引用当前正在运行的函数对象。然而更好的方式是避免使用匿名函数，至少在需要的时候自引用时使用具名函数。arguments.callee已经被弃用，不应该再使用它。



