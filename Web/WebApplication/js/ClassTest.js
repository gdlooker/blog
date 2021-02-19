"use strict";
/*
 * @Author: chentao
 * @Date: 2021-01-23 10:35:16
 * @Last Modified by: chentao
 * @Last Modified time: 2021-01-23 11:13:06
 *
 */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name, this.age);
    }
    Person.prototype.run = function () {
        console.log('this.name', this.name);
    };
    return Person;
}());
var p = new Person('张三', 23);
p.run();
