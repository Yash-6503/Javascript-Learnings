//Dates in Javascript
//Date object is used to work with dates and times
//Date objects are created with new Date() constructor
//Date objects can only be created by new Date() constructor

//creating a date object
console.log("\nCreating a date object & accessing it by methods.");
let date = new Date();
console.log(date);                      //prints the current date and time
console.log(date.toDateString());       //prints the date in the format "Day Month Date Year"
console.log(date.toJSON());             //prints the date in the format "YYYY-MM-DDTHH:MM:SS.sssZ"
console.log(date.toLocaleDateString()); //prints the date in the format "MM/DD/YYYY"
console.log(date.toLocaleString());     //prints the date in the format "MM/DD/YYYY, HH:MM:SS AM/PM"
console.log(date.toString());           //prints the date in the format "Day Month Date Year HH:MM:SS GMT+0530 (India Standard Time)"
console.log(date.toISOString());        //prints the date in the format "YYYY-MM-DDTHH:MM:SS.sssZ"
console.log(typeof date);               //prints the type of date object

//Creating a date object with a specific date and time
console.log("\nCreating a date object with a specific date and time");
let myDate1 = new Date(2024, 0, 26, 5, 0, 3);   //new Date(year, month, day, hours, minutes, seconds)
let myDate2 = new Date(2024, 0, 26);            //new Date(year, month, day)
let myDate3 = new Date("2024-01-25");           //new Date("YYYY-MM-DD")
let myDate4 = new Date("02-10-2024");           //new Date("MM-DD-YYYY")

console.log(myDate1.toLocaleString());                    //prints the date and time specified
console.log(myDate2.toLocaleString());                    //prints the date and time specified
console.log(myDate3.toLocaleString());                    //prints the date and time specified
console.log(myDate4.toLocaleString());                    //prints the date and time specified


//Date by Timestamps
console.log("\nDate by Timestamps");
let Timestamp = Date.now(); //returns the number of milliseconds since January 1, 1970
console.log(Timestamp);
console.log(myDate1.getTime()); //returns the number of milliseconds since January 1, 1970
console.log(Math.floor(Date.now() / 1000)); //returns the number of seconds since January 1, 1970


//Accesing date by specific day, month, year, hours, minutes, seconds
console.log("\nAccessing date by specific day, month, year, hours, minutes, seconds");
let newDate = new Date();
console.log(newDate);                           //prints the current date and time
console.log(newDate.getDate());                 //returns the day of the month (1-31)
console.log(newDate.getMonth());                //returns the month (0-11)
console.log(newDate.getFullYear());             //returns the year
console.log(newDate.getHours());                //returns the hour (0-23)
console.log(newDate.getMinutes());              //returns the minutes (0-59)
console.log(newDate.getSeconds());              //returns the seconds (0-59)
console.log(newDate.getMilliseconds());         //returns the milliseconds (0-999)
console.log(newDate.getDay());                  //returns the day of the week (0-6) with 0 as Sunday
console.log(newDate.getTime());                 //returns the number of milliseconds since January 1, 1970
console.log(newDate.getTimezoneOffset());       //returns the time difference between UTC time and local time in minutes


//customizing date and time of methods
console.log("\nCustomizing date and time of methods");

console.log(newDate.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
})); //returns the month in full name
