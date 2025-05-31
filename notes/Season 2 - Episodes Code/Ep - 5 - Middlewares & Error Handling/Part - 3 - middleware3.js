const express = require("express");
const app = express();
// Application-level middleware: Logs every request

// Behavior
// . Runs for all requests (e.g., /, /api/user, /about).
// . Logs the full URL (e.g., /, /api/user).
app.use((req, res, next) => {
  console.log("App Middleware: Request URL:", req.url); // Runs for ALL requests, (global middleware).
  next();
});

// Router-level middleware: Logs only /api routes
router.use((req, res, next) => {
  console.log("Router Middleware: Request URL:", req.url); // Runs only for /api routes
  next();
});

// Route 1: Attached to the router
router.get("/user", (req, res) => {
  res.send("User Page");
});

// Route 2: Attached to the router
router.get("/profile", (req, res) => {
  res.send("Profile Page");
});

// Mount the router under /api (scoped middleware)
// Behavior
// . Runs only for requests starting with /api (e.g., /api/user, /api/profile).
// . Does not run for requests like / or /about.
app.use("/api", router);

// Regular route
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.listen(5000, () => {
  console.log("Server running on port 3000");
});

// Key Takeaways
// 1) app.use("/api", router):
// . Mounts the router under /api.
// . Only runs for requests starting with /api.

// 2) Global Middleware:
// . Runs for all requests (e.g., /, /api/user, /about).
// . Router-Level Middleware:
// . Runs only for requests under /api.
// . Logs the relative URL (e.g., /user instead of /api/user).

// 3) Order Matters:
// . Middleware runs in the order it’s defined.
// . Global middleware runs before scoped middleware.
