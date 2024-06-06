//Define Strings in javascript
//Strings are the collection of characters. In javascript, we can define strings in two ways.
//1. Using double quotes
//2. Using new String() constructor
//Strings are immutable in javascript. It means we can't change the value of the string once it is declared.


//1st way to declare string using double quotes
let name = "Yash Walke";    //deceleration
const age = 22;
let city = "Nashik";

//This way is String() constructor that is printing string is immutable.
console.log(`My Name is ${name}. I am from ${city} and my age is ${age}`);

//This way is older and not good to see.
console.log(name + age + city);


// 2nd way to declare string
let state = new String("Maharashtra");

console.log(state);     //It returns the string object which contains various methods.

//accessing some string methods

console.log(state.length);
console.log(state[0]);
console.log(state.endsWith());
console.log(state.toUpperCase());
console.log(state.charAt(5));
console.log(state.indexOf('t'));