//Express Router
const router = require('express').Router();

//User Route
const userRoutes = require("./user");

//Thought Route
const thoughtRoutes = require("./thought");

// Add `/users` to created routes
router.use("/user", userRoutes);

// Add `/thoughts` to created routes
router.use("/thought", thoughtRoutes);

// Export
module.exports = router;
