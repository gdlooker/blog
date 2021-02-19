"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Author: chentao
 * @Date: 2021-02-01 14:14:04
 * @Last Modified by: chentao
 * @Last Modified time: 2021-02-01 14:26:48
 */
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.name = _this.name;
        _this.age = age;
        return _this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "\u4ECA\u5E74" + this.age + "\u5C81");
        return;
    };
    return Dog;
}(Animal));
var dog = new Dog('lisi', 22);
dog.eat();
