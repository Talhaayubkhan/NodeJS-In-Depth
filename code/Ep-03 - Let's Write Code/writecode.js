// JavaScript in Node.js runs line by line using the V8 engine behind the scenes

//---------------------------------------//
//          VARIABLE DECLARATIONS       //
//---------------------------------------//

// const name = "Talha Ayub";
// const a = 34;
// const b = 56;

//---------------------------------------//
//               OUTPUT                 //
//---------------------------------------//

// console.log(name);
// console.log(a + b);

//---------------------------------------//
//         GLOBAL CONTEXT IN NODE.JS    //
//---------------------------------------//

// In browsers, we have `window` and `this` in the global context
// In Node.js, we have a different global object called `global`
// console.log(global); // Logs the global object in Node.js

// Using `this` in the top-level scope of a Node.js module returns an empty object
// console.log(this); // Outputs: {}

// NOTE: In Node.js, `this` !== `global`
// They are different in the module scope

//---------------------------------------//
//      GLOBALTHIS - UNIVERSAL GLOBAL   //
//---------------------------------------//

// To provide a consistent global object across environments (Node.js, browsers, etc.),
// JavaScript introduced `globalThis`

// console.log(globalThis); // Outputs: the global object in a cross-platform way
// console.log(globalThis === global); // true in Node.js
// Summary:
// - In browser: global object is `window`
// - In Node.js: global object is `global`
// - In both: universal global object is `globalThis`
