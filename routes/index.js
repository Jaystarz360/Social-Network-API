// Express Router
const router = require('express').Router();

// Import API routes
const apiRoutes = require('./api');

// add prefix `/api` to api routes
router.use('/api', apiRoutes);

// Error message
router.use((req, res) => {
  return res.send('Wrong route!');
});

// Export
module.exports = router;
