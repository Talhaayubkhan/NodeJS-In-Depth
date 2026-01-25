// // let message = "hello";
// // console.log(message.charAt(1));

// // let copied = message;
// // console.log(copied);

// let user = {
//   name: "user",
//   age: 22,
// };

// console.log(user);

// let cloneUser = { ...user };
// cloneUser.name = "cloneUser";
// console.log(cloneUser);

// const globalVar = "I am global";

// function printGlobalVar() {
//   const outerVar = "I am inner";

//   function printInnerVar() {
//     const innermostVar = "I am innermost";
//     console.log(innermostVar);
//     console.log(outerVar);

//     console.log(globalVar);
//     //     console.log(notDefined);
//   }

//   printInnerVar();
// }

// printGlobalVar();

// function party() {
//   var drinks = "soda";

//   if (true) {
//     var milk = "good";
//     console.log(drinks);
//   }
//   console.log(milk);
// }

// party();
// console.log(drinks);

// function helloPrint() {
//   console.log("Hello from index.js");
// }

// helloPrint();

// (() => {
//   console.log("I am IIFE");
// })();

const fs = require("fs");
console.log("Start reading a file...", fs);

console.log(fs.readFile());
