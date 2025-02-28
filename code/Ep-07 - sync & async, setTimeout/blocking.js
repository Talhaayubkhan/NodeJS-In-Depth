const crypto = require("node:crypto");

console.log("Hello world!");

var a = 12341234;
var b = 234234;

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("the key was generated successfully!");

crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, key) => {
  console.log("Hashed password successfully!");
});

function multiply(a, b) {
  return a * b;
}

const result = multiply(122, 431);

console.log("Multiplied result is " + result);
