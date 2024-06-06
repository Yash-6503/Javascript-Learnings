//which are the string methods
//1. length
//2. charAt()
//3. indexOf()
//4. lastIndexOf()
//5. toUpperCase()
//6. toLowerCase()
//7. includes()
//8. startsWith()
//9. endsWith()
//10. slice()
//11. substring()
//12. substr()
//13. replace()
//14. trim()
//15. split()
//16. concat()
//17. repeat()
//18. match()
//19. search()
//20. localeCompare()
//21. matchAll()
//22. normalize()
//23. padEnd()
//24. padStart()
//25. valueOf()
//26. toString()
//27. toLocaleLowerCase()
//28. toLocaleUpperCase()
//29. codePointAt()
//30. charCodeAt()
//31. fromCharCode()
//32. fromCodePoint()

//explain above methods with examples

//1. length
let str = "Hello World";
console.log(str.length); //11

//2. charAt()
console.log(str.charAt(0)); //H
console.log(str.charAt(6)); //W

//3. indexOf()
console.log(str.indexOf("o")); //4
console.log(str.indexOf("o", 5)); //7

//4. lastIndexOf()
console.log(str.lastIndexOf("o")); //7
console.log(str.lastIndexOf("o", 6)); //4

//5. toUpperCase()
console.log(str.toUpperCase()); //HELLO WORLD

//6. toLowerCase()
console.log(str.toLowerCase()); //hello world

//7. includes()
console.log(str.includes("World")); //true
console.log(str.includes("world")); //false

//8. startsWith()
console.log(str.startsWith("Hello")); //true
console.log(str.startsWith("World")); //false

//9. endsWith()
console.log(str.endsWith("World")); //true
console.log(str.endsWith("Hello")); //false

//10. slice()
console.log(str.slice(6)); //World
console.log(str.slice(0, 5)); //Hello

//11. substring()
console.log(str.substring(6)); //World
console.log(str.substring(0, 5)); //Hello

//12. substr()
console.log(str.substr(6)); //World

//13. replace()
console.log(str.replace("World", "Javascript")); //Hello Javascript

//14. trim()
let str1 = "    Hello World    ";
console.log(str1.trim()); //Hello World

//15. split()
console.log(str.split(" ")); //[ 'Hello', 'World' ]

//16. concat()
let str2 = "Javascript";
console.log(str.concat(" ", str2)); //Hello World Javascript

//17. repeat()
console.log(str.repeat(2)); //Hello WorldHello World

//18. match()
let str3 = "Hello World";
console.log(str3.match("World")); //[ 'World', index: 6, input: 'Hello World', groups: undefined ]

//19. search()
console.log(str3.search("World")); //6

//20. localeCompare()
let str4 = "Hello World";
let str5 = "Hello World";
console.log(str4.localeCompare(str5)); //0

//21. matchAll()
let str6 = "Hello World";
console.log(str6.matchAll("World")); //Object [RegExp String Iterator] {}

//22. normalize()
let str7 = "Hello World";
console.log(str7.normalize()); //Hello World

//23. padEnd()
let str8 = "Hello";
console.log(str8.padEnd(10, " World")); //Hello World

//24. padStart()
let str9 = "Hello";
console.log(str9.padStart(10, " World")); //Hello World

//25. valueOf()
let str10 = "Hello World";
console.log(str10.valueOf()); //Hello World

//26. toString()
let str11 = "Hello World";
console.log(str11.toString()); //Hello World

//27. toLocaleLowerCase()
let str12 = "Hello World";
console.log(str12.toLocaleLowerCase()); //hello world

//28. toLocaleUpperCase()
let str13 = "Hello World";
console.log(str13.toLocaleUpperCase()); //HELLO WORLD

//29. codePointAt()
let str14 = "Hello World";
console.log(str14.codePointAt(0)); //72

//30. charCodeAt()
let str15 = "Hello World";
console.log(str15.charCodeAt(0)); //72

//31. fromCharCode()
console.log(String.fromCharCode(72)); //H

//32. fromCodePoint()
console.log(String.fromCodePoint(72)); //H

// Path: Basics/numberMethods.js
//which are the number methods
//1. toString()
//2. toExponential()
//3. toFixed()
//4. toPrecision()
//5. valueOf()
//6. toLocaleString()


//explain above methods with examples

//1. toString()
let num = 123;
console.log(num.toString()); //123

//2. toExponential()
console.log(num.toExponential()); //1.23e+2

//3. toFixed()
console.log(num.toFixed(2)); //123.00

//4. toPrecision()
console.log(num.toPrecision(2)); //1.2e+2

//5. valueOf()
console.log(num.valueOf()); //123

//6. toLocaleString()
console.log(num.toLocaleString()); //123

