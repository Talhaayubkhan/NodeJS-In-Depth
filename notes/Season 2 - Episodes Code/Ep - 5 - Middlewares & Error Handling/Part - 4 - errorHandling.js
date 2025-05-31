const express = require("express");
const app = express();

// ❌ Incorrect Placement of Error-Handling Middleware
// Note: This middleware has 4 parameters (err, req, res, next), making it an error-handling middleware.
// However, placing it here **before routes** means it won’t catch errors from routes defined later.
// Error-handling middleware should always be placed **AFTER** all routes and regular middleware.
// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Something went wrong from middleware");
//   }
// });

// Middleware 1: Log requests
// This middleware is added to the middleware stack and will run for every incoming request.
// When a request hits the server (e.g., to /getUserData), this middleware logs the request URL
// and then passes control to the next middleware or route handler using `next()`.
app.use((req, res, next) => {
  console.log("Request URL:", req.url); // Logs the URL of the incoming request
  next(); // Pass control to the next middleware or route handler
});

// Route to Fetch User Data 🗂️
app.get("/getUserData", (req, res) => {
  // Imagine fetching user data from a database here.
  // Option 1: Throwing an Error Directly 🚫
  // Route with a Synchronous Error 🚨
  // throw new Error("Not implemented");
  // Problem: This throws a synchronous error, and Express will automatically catch it
  // behind the scenes using an internal try-catch block, then call next(err) to pass it
  // to the nearest error-handling middleware. Without a proper error handler, it might
  // show a default error or crash in some cases.
  // throw new Error("Not implemented"); // Throw error directly

  // If something fails (e.g., database error), we need to handle it properly.
  // Option 2: Using Try-Catch for Better Control ✅
  try {
    // Simulate an error (e.g., database fetch fails)
    throw new Error("Not implemented");
    res.send("Get All Users Data"); // This line won’t run if an error is thrown
  } catch (error) {
    // Handle the error locally instead of passing it to middleware
    // Here, we send a response directly without relying on next(err)
    res.status(500).send("Something went wrong (caught locally)");

    // we also use this
    // next(err); // Pass to error handler
  }
});

// ✅ Correct Error-Handling Middleware (Placed at the End)
app.use((err, req, res, next) => {
  res.status(500).send(`Error caught by middleware: ${err.message}`);
});

// Start the Server 🚀
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Key Notes 📝:
// 1. Middleware Order Matters:
//    - Regular middleware and routes should come first.
//    - Error-handling middleware (with 4 parameters) must be defined **LAST** to catch errors
//      from all previous routes and middleware.
//    - If error-handling middleware is placed before routes (like above), it won’t catch
//      errors from those routes because Express processes middleware in the order defined.

// 2. Synchronous Errors:
//    - When you throw an error in a route (e.g., throw new Error("Not implemented")),
//      Express automatically wraps the handler in a try-catch and calls next(err) internally.
//    - This sends the error to the nearest error-handling middleware (if defined correctly).

// 3. Try-Catch Alternative:
//    - Instead of letting Express handle errors automatically, you can use try-catch
//      inside your route to catch and respond to errors directly (as shown above).
//    - This avoids passing the error to middleware, giving you local control.

// Why It Works This Way:
// - In the current code, the try-catch block catches the error locally and sends
//   "Something went wrong (caught locally)" directly.
// - If we removed try-catch and relied on middleware, the misplaced error handler
//   (defined at the top) wouldn’t catch it, and Express’s default handler would kick in.

// 🚀🔥 Flow Diagram
// 📌 Request → Middleware 1 → Middleware 2 → Route Handler
//                    |                |             |
//                    |                |             → If error → Error Handler
//                    |                → If error → Error Handler
//                    → If error → Error Handler
