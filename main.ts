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
