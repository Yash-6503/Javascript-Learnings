//Arrow Functions in JavaScript
// Arrow functions are a new way to write anonymous function expressions in JavaScript. They are more concise than traditional function expressions, and they are easier to reason about because they do not have their own this, arguments, super, or new.target. Instead, these functions inherit these values from the containing scope.
// Arrow functions are always anonymous, and they are defined using a pair of parentheses () and a fat arrow =>. The fat arrow separates the function parameters from the function body.
// The syntax for an arrow function is as follows:
// (parameters) => expression
// (parameters) => { statements }
// If the function has only one parameter, you can omit the parentheses:
// parameter => expression
// parameter => { statements }
// Arrow functions are useful for writing short, concise functions that do not require a lot of boilerplate code.


// Example 1: Arrow Function with No Parameters
console.log("\nExample 1: Arrow Function with No Parameters");
const greet = () => {
    console.log("Hello, world!");
};
greet(); // Output: Hello, world!


// Example 2: Arrow Function with One Parameter
console.log("\nExample 2: Arrow Function with One Parameter");
const greet1 = (name) => {
    console.log(`Hello, ${name}!`);
};
greet1("Yash"); // Output: Hello, Yash!


// Example 3: Arrow Function with Multiple Parameters
console.log("\nExample 3: Arrow Function with Multiple Parameters");
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // Output: 8


// Example 4: Arrow Function with Multiple Statements
console.log("\nExample 4: Arrow Function with Multiple Statements");
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply(5, 3)); // Output: 15


// Example 5: Arrow Function with No Parameters and Implicit Return
console.log("\nExample 5: Arrow Function with No Parameters and Implicit Return");
const greet2 = () => "Hello, world!";
console.log(greet2()); // Output: Hello, world!


// Example 6: Arrow Function with One Parameter and Implicit Return
console.log("\nExample 6: Arrow Function with One Parameter and Implicit Return");
const greet3 = (name) => `Hello, ${name}!`;
console.log(greet3("Yash")); // Output: Hello, Yash!


// Example 7: Arrow Function with Multiple Parameters and Implicit Return
console.log("\nExample 7: Arrow Function with Multiple Parameters and Implicit Return");
const add2 = (a, b) => a + b;
console.log(add2(5, 3)); // Output: 8


// Example 8: Arrow Function with Multiple Statements and Implicit Return
console.log("\nExample 8: Arrow Function with Multiple Statements and Implicit Return");
const multiply2 = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply2(5, 3)); // Output: 15


// Example 9: Arrow Function with Object Literal
console.log("\nExample 9: Arrow Function with Object Literal");
const createPerson = (name, age) => ({ name: name, age: age });
const person = createPerson("Yash", 25);
console.log(person); // Output: { name: 'Yash', age: 25 }


// Example 10: Arrow Function with Default Parameters
console.log("\nExample 10: Arrow Function with Default Parameters");
const greet4 = (name = "world") => `Hello, ${name}!`;
console.log(greet4()); // Output: Hello, world!


// Example 11: Arrow Function with Rest Parameters
console.log("\nExample 11: Arrow Function with Rest Parameters");
const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Example 12: Arrow Function with Destructuring
console.log("\nExample 12: Arrow Function with Destructuring");
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

const user = {
    firstName: "Yash",
    lastName: "Walke",
};

console.log(getFullName(user)); // Output: Yash Walke
