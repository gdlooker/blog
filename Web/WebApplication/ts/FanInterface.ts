/*
 * @Author: chentao 
 * @Date: 2021-02-01 16:21:36 
 * @Last Modified by: chentao
 * @Last Modified time: 2021-02-01 16:52:30
 */
interface FanInterface<T> {
    (t: T): T
}

function getData<T>(t: T): T {
    return t;
}

//使用
var fanInterface:FanInterface<string> = getData

