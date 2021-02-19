"use strict";
/*
 * @Author: chentao
 * @Date: 2021-02-01 14:10:11
 * @Last Modified by: chentao
 * @Last Modified time: 2021-02-01 14:16:23
 * ts中的抽象类
 */
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Animal.prototype.run = function () {
        console.log(this.name + "\u4ECA\u5E74" + this.age + "\u5C81");
    };
    return Animal;
}());
