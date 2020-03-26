const router = require('express').Router();
const bookRoutes = require('./books');

//setup the routes for the book API
router.use('/books', bookRoutes);

module.exports = router;