const fs = require("fs");

var a = 100;

setImmediate(() => {
  console.log("Immediate started");
});

Promise.resolve("Promise").then(console.log);

setTimeout(() => {
  console.log("Timeout started");
}, 0);

process.nextTick(() => console.log("process.nextTick started"));

fs.readFile("./file.txt", () => {
  console.log("Reading file...");
});

function printA() {
  console.log(a);
}

printA();
console.log("Last line of the file...");
