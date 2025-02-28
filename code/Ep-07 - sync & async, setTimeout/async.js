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
}, 2000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data", data);
});

function multiply(a, b) {
  return a * b;
}

const result = multiply(122, 431);

console.log("Multiplied result is " + result);
