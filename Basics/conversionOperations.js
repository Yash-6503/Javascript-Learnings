"use Strict";

//Conversion Operations in Javascript
//Example 1: String to Number
console.log("\nExapmle 1: String to Number:");
let score = "33";   //It will convert the string to number.
let total = Number(score);

console.log(score);
console.log(typeof score);
console.log(total);
console.log(typeof total);

//Example2: Alpha-Numeric String to Number
console.log("\nExample 2: Alpha-Numeric String to Number:");
let runs = "12abc"; //It will convert the string to number but if the string contains any alphabets then it will return NaN.//NaN stands for Not a Number.
let totalRuns = Number(runs);

console.log(runs);
console.log(typeof runs);
console.log(totalRuns);
console.log(typeof totalRuns);


//Example3: Boolean to Number
console.log("\nExample 3: Boolean to Number:");
let isLoggedIn = true; //It will convert the boolean to number.
let isLogged = Number(isLoggedIn);

console.log(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(isLogged);
console.log(typeof isLogged);

//Example4: Number to Boolean
console.log("\nExample 4: Number to Boolean:");
let isLoggedOff = 0;    //It will convert the number to boolean.
let isLoggedOut = Boolean(isLoggedOff);

console.log(isLoggedOff);
console.log(typeof isLoggedOff);
console.log(isLoggedOut);
console.log(typeof isLoggedOut);

//Explain about NaN
//NaN stands for Not a Number.
//It is a property of the global object.
//It is a value representing Not-a-Number.
//It indicates that a value is not a legal number.
//It is returned when Math functions fail.
//It is also returned when a function trying to parse a number fails.
//It is a number data type.
//It is a property of the global object.
//It is a variable in global scope.
//It is a property of the global object.
//It is a read-only property.
//It is a static property of the Number object.
//It is a constant in global scope.