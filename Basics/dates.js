//Dates in Javascript
//Date object is used to work with dates and times
//Date objects are created with new Date() constructor
//Date objects can only be created by new Date() constructor

//creating a date object
let date = new Date();
console.log(date);                      //prints the current date and time
console.log(date.toDateString());       //prints the date in the format "Day Month Date Year"
console.log(date.toJSON());             //prints the date in the format "YYYY-MM-DDTHH:MM:SS.sssZ"
console.log(date.toLocaleDateString()); //prints the date in the format "MM/DD/YYYY"
console.log(date.toLocaleString());     //prints the date in the format "MM/DD/YYYY, HH:MM:SS AM/PM"
console.log(date.toString());           //prints the date in the format "Day Month Date Year HH:MM:SS GMT+0530 (India Standard Time)"
console.log(date.toISOString());        //prints the date in the format "YYYY-MM-DDTHH:MM:SS.sssZ"
