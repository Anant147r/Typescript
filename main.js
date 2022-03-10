"use strict";
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
