//Immediately Invoked Function Expression (IIFE)

//normal function or named IIFE
(function hello() {
    console.log('Hello World');
})();   // Hello World  // IIFE


//arrow function or unnamed IIFE
(() => {
    console.log("DB Connected");
})();


//example
((name) => {
    console.log(`hello ${name}`);
})("Yash");

//Pollution of global scope can be avoided by using IIFE
// IIFE is a function that is executed immediately after it is created.
// IIFE is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


// Examples of IIFE:
// Example 1: Normal function or named IIFE
(function animal() {
    console.log('Dog');
})();

// Example 2: Arrow function or unnamed IIFE
(() => {
    console.log('Cat');
})();
