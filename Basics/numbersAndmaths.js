//Numbers and Maths in Javascript
//In this lesson, we will learn about numbers and maths in Javascript.
//Numbers in Javascript
//In Javascript, numbers can be written with, or without decimals.
//Javascript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
//This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.
//In Javascript, numbers are object. Javascript has only one type of number. Numbers can be written with, or without decimals.
//Extra large or extra small numbers can be written with scientific (exponential) notation.


let score = 400;
console.log(score);

const balance = new Number(100.1);
console.log(balance);

//Give toFixed method information
//toFixed() method returns a string, with the number written with a specified number of decimals:
//The toFixed() method converts a number into a string, keeping a specified number of decimals.
//The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length.
//The number of decimals is specified in the toFixed() method:

console.log(balance.toString().length);
console.log(balance.toFixed(2));

let bal = balance * 2;
console.log(bal.toFixed(1));

//Give toPrecision method information
//The toPrecision() method formats a number to a specified length.
//A number can be written with a specified length with toPrecision().
//The toPrecision() method formats a number to a specified length.

let num1 = 123.456;
console.log(num1.toPrecision(5));

let num2 = 123.6;
console.log(num2.toPrecision(4));

let num3 = 1222.10;
console.log(num3.toPrecision(6));

//give toLocaleString method information
//The toLocaleString() method converts a number into a string, using a local language format.
//The toLocaleString() method returns a string with a language sensitive representation of this number.
//The toLocaleString() method converts a number into a string, with the number formatted according to the locale rules.

let lakhs = 100000;
console.log(lakhs.toLocaleString('en-IN'));

let corores = 10000000;
console.log(corores.toLocaleString());
console.log("\n");

//Maths in Javascript
//Math is a built-in object that has properties and methods for mathematical constants and functions.
//It is not a function object.
//Math works with the Number type. It does not work with BigInt.

console.log(Math);  //Math object
console.log(Math.PI);   //returns PI
console.log(Math.abs(-4.7));    //returns the absolute value of a number
console.log(Math.round(4.7));   //rounds a number to the nearest integer
console.log(Math.ceil(4.4));    //rounds a number upwards to the nearest integer, and returns the result
console.log(Math.floor(4.7));   //rounds a number downwards to the nearest integer, and returns the result
console.log(Math.sqrt(25)); //returns the square root of a number
console.log(Math.min(1, 5, 10, -2, 7)); //returns the number with the lowest value
console.log(Math.max(1, 5, 10, -2, 7));    //returns the number with the highest value
console.log(Math.random());    //returns a random number between 0 (inclusive), and 1 (exclusive)


//Give random() information
//The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

console.log(Math.random() * 10);    //returns a random number between 0 (inclusive), and 10 (exclusive)

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// These are all Numbers types in javascript
//1. Number
//2. BigInt
//3. Math
//4. Date
//5. Infinity
//6. - Infinity
//7. NaN

//These all are the math types in javascript
//1. Math.abs()
//2. Math.ceil()
//3. Math.floor()
//4. Math.round()
//5. Math.max()
//6. Math.min()
//7. Math.pow()
//8. Math.sqrt()
//9. Math.random()
//10. Math.sin()
//11. Math.cos()
//12. Math.tan()
//13. Math.log()
//14. Math.exp()
//15. Math.PI
//16. Math.E
//17. Math.LN2
//18. Math.LN10
//19. Math.LOG2E
//20. Math.LOG10E
//21. Math.SQRT1_2
//22. Math.SQRT2
//23. Math.acos()
//24. Math.asin()
//25. Math.atan()
//26. Math.atan2()
//27. Math.cbrt()
//28. Math.clz32()
//29. Math.cosh()
//30. Math.expm1()
//31. Math.hypot()
//32. Math.imul()
//33. Math.log10()
//34. Math.log1p()
//35. Math.log2()
//36. Math.sign()
//37. Math.sinh()
//38. Math.tanh()
//39. Math.trunc()
//40. Math.fround()
