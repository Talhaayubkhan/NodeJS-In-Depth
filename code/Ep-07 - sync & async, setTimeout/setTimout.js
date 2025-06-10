console.log("Hello!");

// there is trust issue with setTimeOut, becuse if we set 0 milliseconds, it will not execute immediately, it will be added to the event loop queue, and will be executed after the current execution context or Call Stack is empty, so it will not block the main thread, but it will be executed after the current execution context is completed!
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
