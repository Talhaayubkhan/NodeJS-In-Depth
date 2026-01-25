// JavaScript in Node.js runs line by line using the V8 engine behind the scenes

// ---------------------------------------//
//          VARIABLE DECLARATIONS       //
// ---------------------------------------//
var a = 7;
var b = 12;

// console.log(name);
console.log(a);
console.log(b);

// ---------------------------------------//
//         GLOBAL CONTEXT IN NODE.JS    //
// ---------------------------------------//

// In browsers, we have `window` and `this` in the global context
// In Node.js, we have a different global object called `global`

// console.log(global);
console.log(globalThis === global); // true

// In Node.js, `this` at the top-level scope of a module does NOT refer to the global object
// Using `this` in the top-level scope of a Node.js module returns an empty object
// console.log(this);

// NOTE: In Node.js, `this` !== `global`
// They are different in the module scope
console.log(global === this); // false

// ---------------------------------------//
//      GLOBALTHIS - UNIVERSAL GLOBAL   //
// ---------------------------------------//

// To provide a consistent global object across environments (Node.js, browsers, etc.),
// JavaScript introduced `globalThis`
// console.log(globalThis);

// Summary:
// - In browser: global object is `window`
// - In Node.js: global object is `global`
// - In both: universal global object is `globalThis`
