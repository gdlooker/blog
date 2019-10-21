##### 框架
1.Spring框架 4天
2.SpringMVC框架 3天
3.Redis-NoSql数据库 2天

框架怎么学习？
1.框架做什么的
2.框架的使用方式,语法

Spring的核心IOC
依赖：UserService--UserDao完成一个操作
classA使用了classB的属性或者方法,叫做classA依赖classB
IOC:控制反转,是一个概念,一个思想。用来指导我们如何创建,管理,使用对象的。  
AOP：面向切面编程

spring是一个企业级开发框架，是软件设计层面的框架

示例工程地址：https://github.com/gdchent/SpringTest

### 如何使用IOC 
创建maven工程,通过pom.xml添加spring

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>SpringTest</groupId>
    <artifactId>SpringTest</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
         <!--单元测试-->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.0.11.RELEASE</version>
        </dependency>
        <!--简化bean的，不用写get跟set方法 它自动帮你生成-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.6</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>1.2.17</version>
        </dependency>
    </dependencies>

</project>
```

##### 创建实体类 Student

```java
package com.gdchent.cn;
import lombok.Data;

@Data
public class Student {
    private long id;
    private String name;
    private int age;
}

```

##### 传统方式要手动创建bean对象

```java
package com.gdchent.cn;

public class Application {

    public static void main(String[] args) {
      

        Student student=new Student();
        //student.set
    }
}

```

##### 通过IOC创建对象，在配置文件中添加管理的对象，xml格式的配置文件，文件名可以自定义

spring.xml示例代码如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!--bean元素：表示当前的对象需要有spring容器管理
     class:被管理对象的类全名
     -->
    <bean id="service" class="com.gdchent.cn.service.MessageService"></bean>
    <bean id="printer" class="com.gdchent.cn.service.MessagePrinter">
        <property name="messageService" ref="service" ></property>

    </bean>

    <!--对象是放入到Spring的容器（Map<id,对象>）-->
    <bean id="someServiceBean" class="com.gdchent.cn.service.SomeServiceImpl">

    </bean>
    <bean id="student" class="com.gdchent.cn.service.Student">
        <property name="age" value="22" />
        <property name="id"  value="1" />
        <property name="name" value="lisi" />
    </bean>
</beans>
<!--xsd:是约束文件的拓展名,xsd的约束文件功能强,验证比较全面
 文件的url地址，是唯一的
 -->

```

##### 复习Spring ioc容器

##### 1.使用BeanFactory 这个容器来创建实例对象

示例代码如下：

```java
  /**
 * 需求：测试 从xml配置文件 读取Java的bean实例
 */
public class HelloWorldApplication {

    public static void main(String ...args){
        // 第一步从配置文件 读取xml文件信息
        ClassPathResource classPathResource=new ClassPathResource("HelloWorldBeans.xml");
        //第一步  读取xml文件信息
        XmlBeanFactory factory=new XmlBeanFactory(classPathResource);
        //获取bean实例之后
        HelloWorld helloWorld=factory.getBean(HelloWorld.class);
        System.out.println("get:"+helloWorld.getMessage());
    }
}
```

##### 2 使用ApplicationContext容器 

首先 通过点进去看源码我们可以发现，ApplicationContext它是一个接口，它有3个具体实现类。

1.**FileSystemXmlApplicationContext** ：该容器从 XML 文件中加载已被定义的 bean。在这里，你需要提供给构造器 XML 文件的完整路径。就是你xml配置文件路径必须是绝对路径 否早找不到资源 工厂无法生产具体的实例。

使用示例代码如下：

```java
 /**
 * 使用FileSystemXmlApplicationContext这个类来读取xml文件配置  必须使用绝对路径
 */
public class HelloWorldFileSystemXmlApplicationContextTest {

    public static void main(String ...args){

        // 第一步还是需要获取 上下问对象实例
        String config="D:/software/SpringTest/src/main/resources/HelloWorldBeans.xml";
        ApplicationContext context= new FileSystemXmlApplicationContext(config);//使用绝对路径
        //HelloWorld helloWorld= (HelloWorld) context.getBean("helloWorld"); //可以通过xml的id来获取bean对象实例
        HelloWorld helloWorld=context.getBean(HelloWorld.class);
        System.out.println("输出message字段:"+helloWorld.getMessage());  //输出message字段:Hello World!
    }
}

```

2.**ClassPathXmlApplicationContext**：就是你的xml的文件路径可以是相对路径 你只需要配置环境变量CLASSPATH中配置即可,因为，容器会从 CLASSPATH 中搜索 bean 配置文件。

示例测试代码如下：

```java
public class HelloWorldClassPathXmlApplicationContextTest {

    public static void main(String ...args){

        // 第一步还是需要获取 上下问对象实例
        String config="HelloWorldBeans.xml"; //如果使用这种方式这里用的就是相对路径
        ApplicationContext context= new ClassPathXmlApplicationContext(config);//使用绝对路径
        HelloWorld helloWorld= (HelloWorld) context.getBean("helloWorld"); //可以通过xml的id来获取bean对象实例
        HelloWorld helloWorld2= (HelloWorld) context.getBean("helloWorld"); //这个是实例2

        //如果这2个是使用单例模式创建出来的  那么他们的内存地址 肯定是一样的
        System.out.println("h1:"+helloWorld);
        System.out.println(helloWorld2==helloWorld); //通过输出结果可以确定 默认是使用单例模式创建bean实例的
        //HelloWorld helloWorld=context.getBean(HelloWorld.class);
        System.out.println("输出message字段:"+helloWorld.getMessage());

    }
}

```

给出Spring容器的HelloWorldBeans.xml的配置文件

示例代码如下：

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

    <!-- class就是这个xml的bean要映射到哪个bean的class
      scope确定作用域 只有2个属性
      默认使用单例方式创建实例对象
      可以通过在Java程序中创建2个bean的实例的内存地址是否一样来确定
    -->
    <bean id="helloWorld" name="helloWorld" class="com.gdchent.cn.service.HelloWorld" lazy-init="true"
        scope="singleton"
    >
        <property name="message" value="Hello World!"/>
    </bean>

</beans>
```

##### Spring Bean的后置处理器



先看examBean.xml配置文件示例代码如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">


    <bean id="exampleBean" class="com.gdchent.cn.scope.ExampleBean"
     init-method="init" destroy-method="destroy"
    >

    </bean>
    <bean class="com.gdchent.cn.scope.InitExampleBean"/>
</beans>
```



示例代码如下：

```java
public class ExampleBean  {

    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ExampleBean(){
        System.out.println("构造器初始化");
    }
    //对应xml指定的初始化方法
    public void init() {
        System.out.println("实例初始化回调方法 触发");
    }

    public void destroy(){
        System.out.println("销毁实例bean");
    }
}
```

这是实现 BeanPostProcessor 的非常简单的例子，它在任何 bean 的初始化的之前和之后输入该 bean 的名称。你可以在初始化 bean 的之前和之后实现更复杂的逻辑，因为你有两个访问内置 bean 对象的后置处理程序的方法。这里是 **InitExampleBean.java** 文件的内容：

```java
package com.gdchent.cn.scope;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class InitExampleBean implements BeanPostProcessor {


    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("beforeInitialization:"+beanName);
        return bean;
    }

    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("afterInitialization:"+beanName);
        return bean;
    }

}
```

##### Spring 依赖注入

TextEditor.java文件

```java
package com.gdchent.cn.di;

public class TextEditor {

    private SpellChecker spellChecker; 
    public TextEditor(){
        System.out.println("TextEditor无参数构造器");
    }
    public TextEditor(SpellChecker spellChecker){ //这个类依赖于SpellChecker这个类
        System.out.println("TextEditor有参数构造器");
        this.spellChecker=spellChecker;
    }
    public void spellCheck() {
        spellChecker.checkSpelling();
    }
}

```

上面这个类依赖于SpellChecker这个类，来做自己的事，这在Java开发中经常会写这样的代码。

下面给出SpellChecker.java文件代码：

```java
package com.gdchent.cn.di;

/**
 * 这个类 被其它的类依赖着
 */
public class SpellChecker {

    public SpellChecker(){
        System.out.println("Inside SpellChecker constructor");
    }
    public void checkSpelling(){
        System.out.println("Inside checkSpelling");
    }
}

```

然后我们看下textEditorBeans.xml的配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="textEditor" class="com.gdchent.cn.di.TextEditor">
         <!--构造函数-->
        <constructor-arg ref="spellChcker"/>
    </bean>
    <bean id="spellChcker" class="com.gdchent.cn.di.SpellChecker"/>
</beans>
```

最后我们通过main函数进行测试，示例代码如下：

```java
package com.gdchent.cn.di;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApplication {

    public static void main(String[] args) {
        String config="textEditorBeans.xml";
        ApplicationContext context=new ClassPathXmlApplicationContext(config);
        TextEditor textEditor=context.getBean(TextEditor.class);
        textEditor.spellCheck();
    }
}

```

输出结果：

```txt
Inside SpellChecker constructor
TextEditor有参数构造器
Inside checkSpelling
```

