const fs = require("node:fs");

setImmediate(() => {
  console.log("Immediate");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt", () => {
  setTimeout(() => {
    console.log("File Read Timeout");
  }, 0);

  process.nextTick(() => console.log("nextTick"));

  setImmediate(() => {
    console.log("File Read Immediate");
  });

  console.log("File Read...");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line Read");
