// Global Object Access: In Node.js, 'global' is used to access the global object, similar to 'window' in browsers.
console.log(global);

// 'this' Context in Global Scope in Node-js: 'this' refers to an empty object in Node.js Gloabl Space = {}
console.log(this);

// Universal Global Object: 'globalThis' provides a standardized way to access the global object across different JavaScript environments (Node.js, browsers, etc.).
console.log(globalThis);

// Verification: This confirms that 'globalThis' and 'global' point to the same global object in Node.js.
console.log(globalThis === global);
