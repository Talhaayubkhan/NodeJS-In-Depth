const express = require("express");
const app = express();

/**
 * 🛠️ Route-Level Middleware (Chained Handlers)
 * - Multiple handlers are defined for the "/user" route.
 * - The **first handler** immediately sends a response, **blocking** the execution of subsequent handlers.
 * - Since `res.send()` is called in the first handler, the `next()` call **has no effect**.
 * - The remaining handlers **will never execute** due to the early response.
 */

app.use(
  "/user",
  (req, res, next) => {
    console.log("Route Handler - Step 1");
    res.send("Route Handler - Step 1"); // 🚀 Response is sent here
    // 🛑 Response is sent here, stopping further execution.
    // ❌ `next()` is unreachable and will **not** pass control to the next middleware.
    next(); //❌ This is now **unreachable** because res.send() was already called
  },
  (req, res, next) => {
    console.log("Route Handler - Step 2");
    // ❌ This will never run because Step 1 already sent a response.
    next();
  },
  (req, res, next) => {
    console.log("Route Handler - Step 3");
    // ❌ This will also never run.
    next();
  },
  (req, res) => {
    console.log("Final Route Handler - Sending Response");
    // ❌ This handler is **never reached** due to res.send() in Step 1.
    // ❌ ❌ This will throw "ERR_HTTP_HEADERS_SENT"
    res.send("User Route Response");
  }
);

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
