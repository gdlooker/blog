"use strict";
/*
 * @Author: chentao
 * @Date: 2021-02-01 15:11:27
 * @Last Modified by: chentao
 * @Last Modified time: 2021-02-01 15:13:17
 */
var JavaDog = /** @class */ (function () {
    function JavaDog(name) {
        this.name = name;
    }
    JavaDog.prototype.eat = function (str) {
        console.log(this.name + "\u5728\u5403\u996D");
    };
    return JavaDog;
}());
