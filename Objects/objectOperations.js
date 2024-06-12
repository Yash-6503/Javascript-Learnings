//Accessing object by constructor
console.log("\nObject constructor");
let newUser = new Object();
newUser.name = "John";
newUser.age = 25;
newUser.email = "johnsmith@google.com";
newUser.location = "New York";

console.log(newUser);

//Accessing object into objects
console.log("\nAccessing object into objects");
let user = {
    name: {
        fullname: {
            firstname: "Yash",
            lastname: "Walke"
        }
    },
    age: 25,
    email: "yash221@api.com",
    location: "Mumbai",
};

console.log(user);
console.log(user.name);
console.log(user.name.fullname);
console.log(user.name.fullname.firstname);


//Object seperation
console.log("\nObject seperation");
let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "d" };
let obj3 = { 5: "e", 6: "f" };

console.log(obj1);
console.log(obj2);
console.log(obj3);

//Object.assign() method
console.log("\nUsing Object.assign() method");
let obj = Object.assign(obj1, obj2, obj3);
console.log(obj);

//Object.keys() method
console.log("\nUsing Object.keys() method");
let keys = Object.keys(obj);
console.log(keys);

//Object.values() method
console.log("\nUsing Object.values() method");
let values = Object.values(obj);
console.log(values);

//Object.entries() method
console.log("\nUsing Object.entries() method");
let entries = Object.entries(obj);
console.log(entries);

//another seperation method is ...spread operator
console.log("\nUsing ...spread operator");
let spreadObj = { ...obj1, ...obj2, ...obj3 };
console.log(spreadObj);


//not usable seperator object
console.log("\nUsing object seperator");
let object = { obj1, obj2, obj3 };
console.log(object);


//example
//Creating an Chating app using objects
console.log("\nCreating an Chating app using objects");
let chatApp = {
    user1: {
        name: "Yash",
        message: "Hello",
        time: "10:00"
    },
    user2: {
        name: "John",
        message: "Hi",
        time: "10:01"
    },
    user3: {
        name: "Smith",
        message: "Hey",
        time: "10:02"
    }
};

console.log(chatApp);
console.log(Object.keys(chatApp));
console.log(Object.values(chatApp));
console.log(Object.entries(chatApp));

//here we can ask question to object that if any key exists or not
console.log("\nAsking question to object");
console.log(chatApp.hasOwnProperty("user1"));
console.log(chatApp.hasOwnProperty("user4"));