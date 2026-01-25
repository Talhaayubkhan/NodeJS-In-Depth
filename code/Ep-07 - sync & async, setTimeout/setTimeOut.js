console.log("Hello World!");

var a = 323423;
var b = 34341;

setTimeout(() => {
  console.log("Call Me When Task Completed Successfully");
}, 0);
setTimeout(() => {
  console.log("Time Completed Successfully");
}, 3000);

function multiply(a, b) {
  return a * b;
}

const result = multiply(122, 431);

console.log("Multiplied result is " + result);
