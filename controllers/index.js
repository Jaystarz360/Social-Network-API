// Express Router
const router = require('express').Router();

// Import API routes
const apiRoutes = require('./api');

// add prefix `/api` to api routes
router.use('/api', apiRoutes);

// Export
module.exports = router;
