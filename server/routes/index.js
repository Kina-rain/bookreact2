const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./API');

//API Route Setup
router.use('/api', apiRoutes);

//setup the path to the react world
let staticPath = path.join(__dirname, '../../client/build');

console.log(staticPath);

// Handle React routing, return all requests to React app
router.use((req, res) => {
    res.sendFile('index.html', { root: staticPath });
});

module.exports = router;