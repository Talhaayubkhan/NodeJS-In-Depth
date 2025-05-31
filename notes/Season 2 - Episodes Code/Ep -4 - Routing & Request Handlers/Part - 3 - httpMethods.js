const express = require("express");
const app = express();

// Route to handle GET requests to "/user"
// Responds with user details in JSON format
app.get("/user", (req, res) => {
  res.send({
    name: "John Doe",
    age: 30,
    city: "New York",
  });
});

// Route to handle POST requests to "/user"
// Logs request body and responds with a success message
app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("User created successfully");
});

// Route to handle ALL HTTP methods for "/test"
// This will match GET, POST, PUT, DELETE, etc.
app.use("/test", (req, res) => {
  res.send("Hello and Testing the Route");
});

/**
 * 🚀 Advanced Routing Techniques (Regex & Special Characters)
 * These routes use patterns to match requests dynamically.
 * While rarely used, they demonstrate powerful Express routing features.
 */

// Matches "/xyz" and "/xyyz" (one or more "y" in between)
app.get("/xy+z", (req, res) => {
  res.send("Matches /xyz, /xyyz, etc.");
});

// Matches "/xz" and "/xyz" (zero or one "y" in between)
app.get("/xy?z", (req, res) => {
  res.send("Matches /xz, /xyz");
});

// Matches "/xz", "/xyz", "/xyyz", "/xyyyz", etc. (any characters between "xy" and "z")
app.get("/xy*z", (req, res) => {
  res.send("Matches /xz, /xyz, /xyyz, etc.");
});

// Matches "/xz" and "/xyz" (optional "y" inside parentheses)
app.get("/x(y)?z", (req, res) => {
  res.send("Matches /xz, /xyz");
});

// Matches any route ending in "fly" (e.g., "/butterfly", "/dragonfly")
app.get(/.*fly$/, (req, res) => {
  res.send(
    "Matches any route ending with 'fly' (e.g., /butterfly, /dragonfly)"
  );
});

/**
 * 🌐 Handling Query Parameters & Route Parameters
 * Query parameters allow passing data in the URL (e.g., ?name=John).
 * Route parameters capture dynamic values from the URL path.
 */

// Route to handle GET requests to "/users"
// Extracts query parameters from the request URL
// Example: "/users?name=John&age=25"
app.get("/users", (req, res) => {
  console.log(req.query); // Logs query parameters (e.g., { name: 'John', age: '25' })
  res.send({
    message: "Query parameters received",
    queryParams: req.query,
  });
});

// Route to handle GET requests to "/users/:userId"
// Extracts route parameters dynamically
// Example: "/users/123" → { userId: "123" }
app.get("/users/:userId", (req, res) => {
  console.log(req.params); // Logs route parameters (e.g., { userId: '123' })
  res.send({
    message: "Route parameter received",
    userId: req.params.userId,
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
