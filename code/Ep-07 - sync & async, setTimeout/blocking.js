const crypto = require("node:crypto");

console.log("Hello world!");

var a = 12341234;
var b = 234234;

// This Will Block the Main Thread,so the next line will not execute until this is done
crypto.pbkdf2Sync("password", "salt", 50000, 50, "sha512");
console.log("the key was generated successfully!");

// this is async operation (pbkdf2), provide by crypto module, so it will upload to libuv and go to next line, but if we increase the iterations, it will block the main thread also, becuse password hashing is a CPU intensive operation
crypto.pbkdf2("password", "salt", 50000, 512, "sha512", (err, key) => {
  console.log("Hashed password successfully!");
});

function multiply(a, b) {
  return a * b;
}

const result = multiply(122, 431);

console.log("Multiplied result is " + result);
