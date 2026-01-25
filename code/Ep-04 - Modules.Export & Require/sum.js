console.log("Hello This is Sum files");
const { multiply } = require("./require");

var x = 34;

const calculateSum = function (a, b) {
  const sum = a + b;
  console.log(sum);
};

const b = 2;
const c = 3;

multiply(b, c);

module.exports = {
  x: x,
  calculateSum: calculateSum,
};
