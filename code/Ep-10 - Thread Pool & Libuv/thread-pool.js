const fs = require("node:fs");

const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("password generated - 1");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("password generated - 2");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("password generated - 3");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("password generated - 4");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("password generated - 5");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("password generated - 6");
});

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   console.log("read file content");
// });
