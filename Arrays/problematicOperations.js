//Some Problematic Operations in Javascript

//example
//wild_animals array
console.log("Wild Animals Array");
let wild_animals = ['lion', 'tiger', 'elephant', 'giraffe', 'zebra'];
console.log(wild_animals);

//pet_animals array
console.log("\nPet Animals Array");
let pet_animals = ['dog', 'cat', 'rabbit', 'hamster'];
console.log(pet_animals);

//In Spread Operator, the elements of an array are spread into another array
console.log("\nSpread Operator");
let all_new_animals = [...wild_animals, ...pet_animals];
console.log(all_new_animals);

//In Concatenation 2 arrays are combined into a single array
console.log("\nConcatenation");
const all_Animals = wild_animals.concat(pet_animals);
console.log(all_Animals);

//In push operation an array is added to the end of another array
console.log("\nPUSH");
wild_animals.push(pet_animals);
console.log(wild_animals);


//Another Example so that we can understand in better way.
console.log("\nAnother Example");
let arr = [1, 2, 3, [7, 5], 8, [2, 3, [0, 6]], 9, 4];
console.log(arr);

//In flat operation, the nested arrays are flattened
console.log("\nFLAT");
let arr1 = arr.flat(2);
console.log(arr1);


//example
//to check if array exists
console.log("\nCheck if array exists");
console.log(Array.isArray("Yash"));

//example
//convert a random string into array by using Array.from
console.log("\nConversion");
console.log(Array.from("Yash"));

//example
//convert an object into array
console.log(Array.from({ name: "Yash" }));  //Output: []

//example
//convert multiple variables into array by using Array.of
console.log("\nMultiple Variables into Array");
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));