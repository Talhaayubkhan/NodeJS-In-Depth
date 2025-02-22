// Module Initialization: When this module is required, this console.log executes
console.log("Hello world!");

// Function Definition: This function remains inactive until explicitly imported and called
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// Module Export: Making calculateSum function available for other modules
module.exports = calculateSum;
