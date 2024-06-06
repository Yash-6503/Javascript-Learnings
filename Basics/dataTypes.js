"use Strict";
//Which are the Javascript datatypes.
//There are all 8 datatypes in javascript.
// 1. number    =>  123
// 2. string    =>  "Hello World!"
// 3. boolean   =>  ture or false
// 4. undefined =>  undefined
// 5. null    =>  null (standalone value)
// 6. object    =>  {name: "John Doe", age: 25}
// 7. symbol    =>  Symbol("This is a Symbol")  unique and immutable value
// 8. bigint    =>  1234567890123456789012345678901234567890n

//Examples of all datatypes.
//Primitive Data Types
let Num = 123;
let Str = "Hello World!";
let bool = true;
let state;
let Sym = Symbol("This is a Symbol");
let nullValue = null;
let bigInt = 1234567890123456789012345678901234567890n;

console.log("Primitive Datatypes in Javascript:");
console.log(typeof Num);    //output is number
console.log(typeof Str);    //output is string
console.log(typeof bool);   //output is boolean
console.log(typeof state);  //output is undefined
console.log(typeof nullValue);  //output is object
console.log(typeof Sym);    //output is symbol
console.log(typeof bigInt); //output is bigint

//Non-Primitive Data Types
let obj = { name: "John Doe", age: 25 };
let fun = function () {
    return "This is a function";
};

console.log("\nNon-Primitive Datatypes in Javascript:");
console.log(typeof obj);    //output is object
console.log(typeof fun);    //output is function


//Theory of Datatypes.
//Define Data types in Javascript.
//Data types are the classification or categorization of data items.
//It represents the kind of value that tells what operations can be performed on a particular data.
//Data types are divided into two types:
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

//Primitive Data Types
//Primitive data types are predefined data types.
//They are the basic data types provided by a programming language.
//Primitive data types are passed by value.
//There are 6 primitive data types in javascript.
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol

//Non-Primitive Data Types
//Non-primitive data types are not defined by the programming language, but are created by the programmer.
//They are sometimes called reference types.
//Non-primitive data types are passed by reference.
//There are 5 non-primitive data types in javascript.
// 1.Object
// 2.Array
// 3.Function
// 4.Date
// 5.RegExp

