//this keyword in javascript
//this keyword is used to refer current object in javascript.
//In some cases arrow functions do not refers this keyword to current object.
//this keyword is accessible in objects only.

console.log("\nthis keyword in javascript\n")
let user = {
    username: "Yash Walke",
    email: "yashwalke6503@gmail.com",

    welcomeMessage: function () {
        console.log(`Welcome ${this.username}.`);
        console.log(`Your email is ${this.email}.`);

        console.log(this); //this will refer to the object.
    }
}

console.log(user);
user.welcomeMessage();

//if we change the value of the object varible then it will reflect in the object.
user.username = "Yash";
user.welcomeMessage();

console.log(this); //this will refer to the global object.


//Function Example
console.log("\nFunction Example");
function hello() {
    console.log(this);
}

hello();

//Arrow function Example
console.log("\nArrow function Example");
const helloArrow = () => {
    let user = "Yash";
    console.log(this);
    console.log(this.user);
}

helloArrow();