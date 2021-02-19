"use strict";
function printLabel(printInfo) {
    console.log("printInfo对象", printInfo);
}
var printInfo = {
    printLabelName: 'printLabelName'
};
printLabel(printInfo);
