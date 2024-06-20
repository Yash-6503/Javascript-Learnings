//Scope of variables in javascript
//Global scope & Local scope

let a = 10;
const b = 20;
var c = 30;

function test() {
    let a = 40;
    const b = 50;
    var c = 60;
    console.log('Function Scope: ', a, b, c);       //local scope
}

test();
console.log(a);
console.log(b);
console.log(c);

//what is global scope?
//Global scope is the outermost scope in javascript. It is the default scope in javascript.
//Variables declared outside of a function are in the global scope.
//Global scope is accessible from any other scope.
//Global scope is accessible from anyWhere in the code.

//what is local scope?
//Local scope is the innermost scope in javascript.
//Variables declared inside a function are in the local scope.
//Local scope is only accessible within the function in which it is declared.
//local scope is not accessible from outside of the function.