//Accessing objects and arrays into functions
//objects
let user = {
    username: "John",
    price: 100
};


//function defination
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//function call
handleObject(user);

handleObject({
    username: "Yash",
    price: 200
})

//arrays
let myArray = [10, 20, 30, 40, 50];

function returnArray(getArray) {
    return getArray;
}

console.log(returnArray(myArray));
console.log(returnArray(
    [100, 200, 300, 400, 500]
));