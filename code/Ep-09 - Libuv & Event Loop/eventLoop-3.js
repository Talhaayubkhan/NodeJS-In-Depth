const fs = require("node:fs");

setImmediate(() => {
  console.log("Immediate");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt", () => {
  console.log("File Read");
});

// first it run all the nextTick, becuse it has highest priority queue, it will run until all the nextTick have finished
process.nextTick(() => {
  process.nextTick(() => console.log("inner next tick"));

  console.log("nextTick");
});

console.log("Last line of code");
