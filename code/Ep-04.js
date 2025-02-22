// Module Import: Importing sumExample.js module twice to demonstrate module
require("./sumExample"); // this will import all the code
const calculateSum = require("./sumExample"); // this is explictly called the calculateSum

// Variable Setup: Declaring constants for demonstration
const name = "Hello World";
const a = 120;
const b = 20;

// Function Call: Using imported calculateSum function
calculateSum(a, b);

// Global Comparison: Testing global object equality in Node.js
console.log(globalThis === global);
