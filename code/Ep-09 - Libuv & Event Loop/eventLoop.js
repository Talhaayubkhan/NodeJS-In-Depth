const fs = require("node:fs");

var a = 100;

setImmediate(() => {
  console.log("Immediate started");
});
setTimeout(() => {
  console.log("Timeout started");
}, 0);

fs.readFile("./file.txt", (err, data) => {
  console.log("Reading file...");
});

function printA() {
  console.log(a);
}

printA();
console.log("Loading file...");
