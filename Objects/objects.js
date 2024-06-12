//Objects in Javascript
//There are 2 ways for defining an object in Javascript
//1. Object literal
//2. Object constructor

//1. Object literal
console.log("Object literals");
var person = {
    name: 'Yash Walke',
    age: 22,
    email: 'yash.walke.652003@gmail.com',
    location: 'Nashik',
    phone: 9067973585,
    "role": "Frontend Developer",
    isLoggedIn: false
}

console.log(person);
console.log(person['name']);    //Accessing object properties using bracket notation
console.log(person.email);      //Accessing object properties using dot notation


//example
//use a Symbol object in object
console.log("\nUsing Symbol in Objects");
let mySym = Symbol("Sym");          //Creating a Symbol
var user = {
    name: 'Yash Walke',
    age: 21,
    email: 'yash.walke.652003@gmail.com',
    [mySym]: "Symbol1",
    location: 'Nashik',
    phone: 9067973585,
    "role": "Frontend Developer",
    isLoggedIn: false
}

console.log(user[mySym]);
console.log(mySym);



//Executing a function within object reference
console.log("\nFunction Execution through object");
user.greetings = function () {
    console.log("hello user");
}
console.log(user.greetings);
console.log(user.greetings());

user.greet = function () {
    console.log(`Hello user, ${this.name}`);
}
console.log(user.greet);
console.log(user.greet());



//If wants to change the values of objects then
console.log("\nChanging object values");
user.email = 'yashwalke6503@gmail.com';         //Changing the value of email

console.log(user.email);
console.log(user);


// If do not wants to change the values even if we try to change the values then by Freezing it object cannot be changed.
console.log("\nFreezing the object");
Object.freeze(user);            //Freezing the object

user.email = 'yashwalke06@gmail.com';
console.log(user.email);
console.log(user);


