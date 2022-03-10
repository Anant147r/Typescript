"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World";
// let name = "Anant";
console.log(message);
// console.log(name);
var isBeginner = true;
var total = 5;
var name = "Anant";
var statement = "My name is ".concat(name, ".\nI am a beginner in Typescript.");
console.log(statement);
name = undefined;
name = null;
statement = undefined;
statement = null;
// ARRAY
var arr = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4, 5];
// Tupple
var tupple = ["Anant", 1];
// ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var c = Color.Yellow;
console.log(c);
// Any
var value = "Anant";
value = 2;
value = true;
console.log(value);
// Type Inference -- works during initialization
var newValue;
newValue = 10;
newValue = true;
var newValue2 = 4;
// newValue2=true      It will show error because of type inference
// MULTITYPE
var multitype;
multitype = true;
multitype = 6;
// FUNCTION
function add(num1, num2) {
    return num1 + num2;
}
// add() Gives error
add(1, 2);
// add(2,"sdf") Gives error
// return type of a function
function add2(num1, num2) {
    return num1 + num2;
}
// optional parameter
function add3(num1, num2) {
    if (num1)
        return num1 + num2;
    return num2;
}
// default parameter
function add4(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Anant",
    lastName: "Rawat"
};
fullName(p);
// CLASS
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    return Employee;
}());
var emp = new Employee("Anant");
emp.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        var _this = _super.call(this, name) || this;
        _this.managerName = name;
        return _this;
    }
    Manager.prototype.managerTask = function () {
        console.log("Task done by manager");
    };
    return Manager;
}(Employee));
var manager = new Manager("Rawat");
manager.managerTask();
manager.greet();
