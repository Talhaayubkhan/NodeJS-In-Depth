const express = require("express");
const app = express();

/**
 * 📌 Note: Organizing Middleware in a Separate File
 * - A **better approach** is to create a `/middleware` folder and an `auth.js` file.
 * - All authentication-related logic can be placed there for **better maintainability**.
 * - However, for now, we are defining the middleware **directly** in this file.
 */

// 🔐 Authorization Middleware (To be moved to a separate file in the future)
app.use("/admin", (req, res, next) => {
  const token = "xyza"; // 🔑 Mock token for authentication
  const isAuthenticated = token === "xyz"; // ❌ Authentication check fails

  if (!isAuthenticated) {
    // 🚫 If authentication fails, send a 401 Unauthorized response
    return res.status(401).send("Unauthorized");
  }

  next(); // ✅ If authenticated, proceed to the next middleware or route handler
});

/**
 * 🛠️ Why Use Middleware for Authorization?
 * - Instead of checking authentication **repeatedly** inside each admin route,
 *   we define a **central middleware** that automatically handles it.
 * - This keeps our code **clean** and **maintainable**.
 */

/**
 * 🏢 Admin Route: Get All Data
 * - This route is **protected** by the authorization middleware.
 * - If authenticated, it sends `"All Data is available"`.
 */
app.get("/admin/getAllData", (req, res) => {
  res.send("All Data is available"); // ✅ Accessible only if authorized
});

/**
 * 🗑️ Admin Route: Delete Data
 * - Another protected route that requires authentication.
 * - Sends `"Delete Data is available"` if the user is authorized.
 */
app.get("/admin/getDeleteData", (req, res) => {
  res.send("Delete Data is available"); // ✅ Accessible only if authorized
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
