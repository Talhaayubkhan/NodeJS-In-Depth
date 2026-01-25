const fs = require("fs");
const https = require("https");

console.log("Hello world!");

var a = 323423;
var b = 34341;

https.get("https:/dummyjson.com/products/1", (res) => {
  console.log("Fetching product Successfully!");
});

setTimeout(() => {
  console.log("Time Completed Successfully");
}, 3000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data", data);
});

function multiply(a, b) {
  return a * b;
}

const result = multiply(122, 431);

console.log("Multiplied result is " + result);

// output!
// 1) console.log()! PRINT FIRST -> SYNC TAKS EXECUTE BY V8!
// 2) HTTPS REQ SENT -> ASYNC TASK HANDLED BY NODEJS LIBUV
// 3) AFTER 3 SEC -> TIMEOUT CALLBACK FIRED -> ASYNC TASK HANDLED BY NODEJS LIBUV
// 4) FILE READ REQ SENT -> ASYNC TASK HANDLED BY NODEJS LIBUV
// 5) function ADD EXECUTED -> SYNC TASK EXECUTED BY V8 directly!

// Hello World
// The sum is 2051
// File data is  This is sample file for testing async readFile in NodeJS!
// HTTPS REQ SENT - res.secret is printed!
// AFTER 3 SEC - Hello! -> longest task
