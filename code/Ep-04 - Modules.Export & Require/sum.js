console.log("Sum Module Loaded");

// ⚠️ Implicit global variable because it's not declared with let/const/var
// This will leak into the global scope (i.e., global.x = "Hello")
// Not recommended! Use "use strict" or declare explicitly to avoid this.
x = "Hello";

// ✅ Function to calculate and print the sum of two numbers
function calculateSum(a, b) {
  const sum = a + b;
  console.log(`The sum of ${a} and ${b} is = ${sum}`);
}

// ✅ Exporting variables/functions for use in other modules
module.exports = { x, calculateSum };
