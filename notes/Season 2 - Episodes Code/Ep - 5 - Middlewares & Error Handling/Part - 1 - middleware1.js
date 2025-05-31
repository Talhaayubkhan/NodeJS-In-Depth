const express = require("express");
const app = express();

/**
 * 🚀 Understanding Middleware and Route Handling
 * - Middleware in Express can intercept and modify requests before they reach the final response.
 * - The `next()` function allows middleware to pass control to the next middleware or route handler.
 * - If `res.send()` is called in a middleware, it **terminates the request** and **prevents the next middleware from executing**.
 */

// ❌ This middleware is commented out. If enabled, it would run on every request and send a response immediately.
app.use("/", (req, res, next) => {
  res.send("Middleware is available");
  //   next(); // ❌ If `next()` is not called, no other middleware or routes will execute.
});

/**
 * 🛠️ Route-Level Middleware (Multiple Handlers)
 * - The `/user` route has two handlers.
 * - `res.send()` in the first handler sends the response, so the second handler will **never execute**.
 */
app.get(
  "/user",
  (req, res, next) => {
    res.send("User information"); // 🚀 Response sent, request cycle ends here.
    next(); // ❌ This is an issue: `next()` is called after `res.send()`, leading to a possible error.
  },
  (req, res, next) => {
    res.send("Additional user information"); // ❌ This will never run due to the previous `res.send()`
    // next(); // No need for next() as it's the last handler.
  }
);

/**
 * 🛑 Global Middleware at the End
 * - This middleware runs for **ALL** routes (`"/"`).
 * - It would send `"Middleware is available"`, but it will **never run** if a previous route has already sent a response.
 */
app.use("/", (req, res, next) => {
  res.send("Middleware is available"); // 🚀 Response sent if no previous route handled the request.
  //   next(); // ❌ If `next()` is not called, no other middleware will execute.
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
