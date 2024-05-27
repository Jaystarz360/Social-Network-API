//Express Router
const router = require('express').Router();

//User and thought Routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Add `/users` to created routes
router.use('/users', userRoutes);

// Add `/thoughts` to created routes
router.use('/thoughts', thoughtRoutes);

// Export
module.exports = router;
