//  Q1
// let str = "123";
// let num = Number(str);
// console.log(num + 7);

// Q2
// function checkValue(value) {
//     if (!value) {
//         return "Invalid";
//     }
//     return value;
// }
// console.log(checkValue(0));

// Q3
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// Q4
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// Q5
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merged = [...arr1, ...arr2];
// console.log(merged);

//Q6
// function getDay(day) {
//     switch (day) {
//         case 1:
//             return "Sunday";
//         case 2:
//             return "Monday";
//         case 3:
//             return "Tuesday";
//         case 4:
//             return "Wednesday";
//         case 5:
//             return "Thursday";
//         case 6:
//             return "Friday";
//         case 7:
//             return "Saturday";
//         default:
//             return "Invalid Day";
//     }
// }
// console.log(getDay(2));

//Q7
// let words = ["a", "ab", "abc"];
// let lengths = words.map(word => word.length);
// console.log(lengths);

//Q8
// function checkNumber(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return "Divisible by both";
//     }
//     return "Not divisible by both";
// }
// console.log(checkNumber(15));

// Q9
// const square = num => num * num;
// console.log(square(5));

//Q10
// function getInfo(person) {
//     const { name, age } = person;
//     return `${name} is ${age} years old`;
// }
// const person = { name: "John", age: 25 };
// console.log(getInfo(person));

// Q11
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

//Q12
// function getPromise() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }
// getPromise().then(result => console.log(result));

// Q13
// function findLargest(numbers) {
//     return Math.max(...numbers);
// }
// console.log(findLargest([1, 3, 7, 2, 4]));

//Q14
// function getKeys(obj) {
//     return Object.keys(obj);
// }
// console.log(getKeys({ name: "John", age: 30 }));

//Q15
// function splitWords(str) {
//     return str.split(" ");
// }
// console.log(splitWords("The quick brown fox"));




//ESSAY
//Q1
// foreach(): executes  function for each Element in an Array.
// forof: loops through iterable values and allows using break and continue.
//Q2
// hoisting:is a javascript behavior where declaration are processed before code execution withn their Scope.
// TDZ:is the period between entering a scope the reaching the variable declaration
// console.log(x);
// var x = 10;

// console.log(y);
// let y = 20;

//Q3
// ==:compares values after type Conversion.
// ===:compares both value and data type.
// console.log(5 == "5");

// console.log(5 === "5"); 


//Q4
// trycatch:is used to handle errors and prevent the program from stopping unexpectedly.
// try:contians the code that may cause ane error.
// catch: handles the error if it occurs.

    
// try {
//     let result = 10 / 0;
//     console.log(result);
// } catch (error) {
//     console.log("An error occurred");
// }

// async function getData() {
//     try {
//         let result = await fetch("example.com");
//     } catch (error) {
//         console.log(error);
//     }
// }


//Q5
// type Conversion:means changing a value from one data type to another manually.
// type coercion: means javascript outomatically converts a value from one data type to another 
// Type Conversion
// let x = Number("10");
// console.log(Number);

// Type Coercion
// let y = "10" + 5;
// console.log(y);


//BONUS
// var createCounter = function(init) {
//     let count = init;
//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         },
//         reset: function() {
//             count = init;
//             return count;
//         }
//     };
// };