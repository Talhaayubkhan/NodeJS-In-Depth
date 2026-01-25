console.log("Hello This is require files");

const multiply = function (a, b) {
  const multiplication = a * b;
  console.log(multiplication);
};

// console.log(module.exports);

module.exports = {
  multiply: multiply,
};
