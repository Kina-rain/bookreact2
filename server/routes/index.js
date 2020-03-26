const router = require('express').Router();
const apiRoutes = require('./API');

//API Route Setup
router.use('/api', apiRoutes);

module.exports = router;