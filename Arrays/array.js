//Arrays in Javascript
//Arrays are used to store multiple values in a single variable.
//An array is a special variable, which can hold more than one value at a time.
//If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:


//creating an array
let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Array);
console.log(Array[0]);
console.log(Array[1]);
console.log(Array[2]);
console.log(Array[3]);
console.log(Array[4]);

//Array methods
console.log("\nArray Methods");
// 1. Array.push()    =   The push() method adds new items to the end of an array, and returns the new length.
//example
console.log("example1:");
let subjects = ["Maths", "Science", "English", "Hindi"];
console.log(subjects);
subjects.push("Marathi");
console.log(subjects);

//2. Array.pop()    =   The pop() method removes the last element from an array and returns that element.
//example
console.log("\nexample2:");
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.pop();
console.log(fruits);

//3. Array.unshift()    =   The unshift() method adds new items to the beginning of an array, and returns the new length.
//example
console.log("\nexample3:");
let animals = ["Lion", "Tiger", "Elephant", "Deer"];
console.log(animals);
animals.unshift("Zebra");
console.log(animals);


//4. Array.shift()    =   The shift() method removes the first item of an array.
//example
console.log("\nexample4:");
let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
console.log(cars);
cars.shift();
console.log(cars);

//5. Array.length    =   The length property provides an easy way to append data to an array.
//example
console.log("\nexample5:");
let colors = ["Red", "Green", "Blue"];
console.log(colors.length);

//6. includes()    =   The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//example
console.log("\nexample6:");
let names = ["John", "Doe", "Smith"];
console.log(names);
console.log(names.includes("Doe"));
console.log(names.includes("Raj"));

//7. indexOf()    =   The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//example
console.log("\nexample7:");
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1);
console.log(fruits1.indexOf("Banana"));     //0
console.log(fruits1.indexOf("Apple"));      //2
console.log(fruits1.indexOf("Grapes"));     //-1


//8. join()    =   The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
//example
console.log("\nexample8:");
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2);
console.log(fruits2.join());
console.log(fruits2.join(" "));
console.log(typeof fruits2);
console.log(fruits2.join(" * "));

//9. reverse()    =   The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
//example
console.log("\nexample9:");
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3);
console.log(fruits3.reverse());


//10. sort()    =   The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//example
console.log("\nexample10:");
let marks = [97, 56, 89, 77, 45, 50];
console.log(marks);
console.log(marks.sort());


//11. slice()    =   The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
//example
console.log("\nexample11:");
let mobiles = ["Samsung", "Apple", "OnePlus", "Redmi", "Realme"];
console.log(mobiles);
console.log(mobiles.slice(1, 3));
console.log(mobiles);


//12. splice()    =   The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//example
console.log("\nexample12:");
let laptops = ["Dell", "HP", "Lenovo", "Asus", "Acer"];
console.log(laptops);
console.log(laptops.splice(2, 2, "Apple"));
console.log(laptops);

