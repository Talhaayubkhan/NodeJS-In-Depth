const express = require("express");
const app = express();

/**
 * ⚠️ Order of routes matters! 🚀
 * More specific routes should come first.
 * General routes ("/") can override others if placed earlier.
 */

// General route handler for the root ("/") path
// This will match all requests to "/", preventing any routes defined after it from being reached (e.g., "/user", "/userDetails" will be ignored)
// app.use("/", (req, res) => {
//   res.send("Main Home Page");
// });

// Route handler for "/user" path
// This will match any request starting with "/user", including "/user/user0", "/user/profile", etc.
// Since this is defined before "/user/user1", it will handle those requests unless a more specific route exists
app.use("/user", (req, res) => {
  res.send("User Page");
});

// More specific route handler for "/user/user1"
// However, this route will not work as expected because "/user" is already handling all "/user/*" requests
app.use("/user/user1", (req, res) => {
  res.send("User Page 1");
});

// Route handler for "/test"
// This will handle requests directed to "/test" and return "User Test"
app.use("/test", (req, res) => {
  res.send("User Test");
});

// Another root route handler ("/")
// Since this is placed after the first root handler, it will never be reached
app.use("/", (req, res) => {
  res.send("Home Page");
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
