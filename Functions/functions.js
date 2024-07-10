//Functions in javascrpit
//Function is a block of code that can be called and executed whenever required.
//Function can take parameters and return values as result.
//Function can be defined using function keyword.
//Function can be defined using function expression.
//Function can be defined using arrow function.
//Function can be defined using constructor function.
//Function can be defined using generator function.
//Function can be defined using async function.
//Function can be defined using async arrow function.
//Function can be defined using async generator function.
//Function can be defined using async generator arrow function.
//Function can be defined using IIFE function.
//Function can be defined using nested function.
//Function can be defined using callback function.
//Function can be defined using closure function.
//Function can be defined using currying function.
//Function can be defined using memoization function.
//Function can be defined using composition function.
//Function can be defined using partial function.
//Function can be defined using recursive function.
//Function can be defined using tail recursive function.
//Function can be defined using higher order function.
//Function can be defined using pure function.
//Function can be defined using impure function.
//Function can be defined using anonymous function.
//Function can be defined using named function.
//Function can be defined using self invoking function.
//Function can be defined using function declaration.
//Function can be defined using function expression.
//Function can be defined using function constructor.
//Function can be defined using function generator.
//Function can be defined using function async.
//Function can be defined using function async generator.


//Function Defination
function hello() {
    console.log('Hello World');
}

//function call
hello();


//Function with taking parameters
function addition(a, b) {
    console.log(a + b);
}

//function call by passing arguments
addition(5, 5);
//Function with return value
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(90, 10);
console.log("Result : ", result);


//Example
function isLoggedin(username) {
    if (username === undefined) {
        console.log("Please provide username");
    } else {

        return `${username} is logged in`;
    }
}

console.log(isLoggedin("Yash Walke"));
console.log(isLoggedin(""));
console.log(isLoggedin());


//Example 2
function isOnline(username = "Yash") {
    if (!username) {
        return "Please provide username";
    }
    return `${username} is online`;
}

console.log(isOnline())
console.log(isOnline("Yash Walke"));

console.log("\n Hello");
console.log(2 + 3);
console.log(5 / 5);

