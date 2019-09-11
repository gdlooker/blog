### mysql 数据库操作

##### mysql数据库的连接：

mysql -hlocalhost -uroot -p   //回车

-h  //表示服务器名

localhost //表示服务器是本地

-uroot  //用户名 root

-p   //密码

show databases ; //显示所有数据库

create database mysqldb ;//创建一个数据库

drop database mysqldb; //删除一个数据库

use mysqldb; //使用哪个数据库 

show tables ; //显示当前数据库下所有表

数据库表格数据字符串类型包括：

char  (0-255字节)  //定长字符串 比如一个name属性设置了 最大长度为30 char name(30) 如果用户只是输入6个那么就会默认补上24个空格。

varchar（0-65535字节）：变长字符串  设置多长，用户输入多少就是多少。

##### 创建数据库表

1.创建表

```
//建表语句  COMMENT 是注释
CREATE TABLE student(
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '学号',
  name VARCHAR(200) COMMENT '姓名',
  age  int COMMENT '年龄'
) COMMENT='学生信息'
```

