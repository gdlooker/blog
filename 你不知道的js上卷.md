### 你不知道的js上卷笔记

##### 1.1编译原理

1.js是一门动态类型的解释性语言，它的编译主要经历3个阶段

1.分词/词法分析。比如var a =2   会拆分成 var      a     =      2这样一个一个的单词

2.语法分析 . 将词法分析单元抽象成art语法树

3.将art语法树转化成可执行的代码

##### 1.2作用域

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

