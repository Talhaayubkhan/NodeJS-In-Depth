const fs = require("node:fs");

const crypto = require("node:crypto");

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("password generated");
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("read file content");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("password generated - 2");
});
