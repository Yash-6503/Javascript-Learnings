"use strict";

//Tricky Operations in JavaScript
console.log("\nTricky Operations in JavaScript:");
console.log("1" + 2);   //"1" + 2 = "12"
console.log(1 + "2");   //1 + "2" = "12"
console.log("1" + 2 + 2);   //"12" + 2 = "122"
console.log(1 + 2 + "2");   //3 + "2" = "32"
console.log(+true);
console.log(+"");

//Mathematical Operations in JavaScript
console.log("\nMathematical Operations in JavaScript:");
console.log(1 + 2);   //3
console.log(1 - 2);   //-1
console.log(1 * 2);   //2
console.log(1 / 2);   //0.5
console.log(5 % 2);   //1
console.log(2 ** 3);   //8


//Prefix and Postfix Operations in JavaScript
console.log("\nPrefix and Postfix Operations in JavaScript:");
console.log("Postfix Operations:");
let a = 1;
console.log(a++);   //1
console.log(a);   //2
console.log(++a);   //3

let b = 1;
console.log(++b);   //2
console.log(a);   //3
console.log(b++);   //2