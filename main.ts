export {};
let message = "Hello World";
// let name = "Anant";
console.log(message);
// console.log(name);

let isBeginner: boolean = true;
let total: number = 5;
let name: string = "Anant";
let statement: string = `My name is ${name}.
I am a beginner in Typescript.`;
console.log(statement);

name = undefined;
name = null;

statement = undefined;
statement = null;

// ARRAY
let arr: number[] = [1, 2, 3, 4];
let arr2: Array<number> = [1, 2, 3, 4, 5];

// Tupple
let tupple: [string, number] = ["Anant", 1];

// ENUM
enum Color {
  Red,
  Green,
  Yellow,
}
let c: Color = Color.Yellow;
console.log(c);

// Any
let value: any = "Anant";
value = 2;
value = true;
console.log(value);

// Type Inference -- works during initialization

let newValue;
newValue = 10;
newValue = true;

let newValue2 = 4;
// newValue2=true      It will show error because of type inference

// MULTITYPE

let multitype: number | boolean;
multitype = true;
multitype = 6;

// FUNCTION

function add(num1: number, num2: number) {
  return num1 + num2;
}

// add() Gives error
add(1, 2);
// add(2,"sdf") Gives error

// return type of a function
function add2(num1: number, num2: number): number {
  return num1 + num2;
}

// optional parameter
function add3(num1: number, num2?: number): number {
  if (num1) return num1 + num2;
  return num2;
}

// default parameter
function add4(num1: number, num2: number = 10): number {
  return num1 + num2;
}
