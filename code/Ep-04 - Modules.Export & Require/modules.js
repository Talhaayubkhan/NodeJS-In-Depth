// ✅ Optional setup script — runs first (if needed)
require("./require");

const { x, calculateSum } = require("./sum");

// ✅ Declaring a local variable (this will NOT leak to global scope)
var name = "NodeJS In Depth";

// ✅ Declaring two numbers to pass to the function
const a = 34;
const b = 45;

// ✅ Calling the imported function
calculateSum(a, b);

// ✅ Logging the imported variable (x = "Hello")
console.log(x);
