const express = require('express');
const mongoose = require('mongoose');
if(process.env.NODE_ENV != 'production') {const dotenv = require('dotenv/config')};
//const routes = require('./src/routes');
const path = require('path');

console.log(process.env.NODE_ENV);

//setup our port
let PORT = process.env.PORT;

//setup our app
let app = express();

//define the middle ware stuff
app.use(express.urlencoded( { extended: true}) );
app.use(express.json());

if (process.env.NODE_ENV === 'production') { 
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client')));  

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client','public','index.html'));
  }); 
}

//use the routes
//app.use(routes);

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(PORT, () => {
    console.log(`Web Running ==> Listening on Port: ${PORT}`);
})