console.log("Hello!");

setTimeout(() => {
  console.log("Immediatly called!");
}, 0);

setTimeout(() => {
  console.log("I waited for 2 seconds");
}, 2000);

function multiply(a, b) {
  return a * b;
}

const result = multiply(122, 431);

console.log("Multiplied result is " + result);
