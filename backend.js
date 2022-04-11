// SERVE STATIC FILES

// Import the express npm module
const express = require('express');
// Create a new web server (app)
const app = express();
// tell express to serve static resources (files)
// from the frontend
app.use(express.static('frontend'));
// start the webserver on port 3000
app.listen(3000, () => console.log('Listening on http://localhost:3000'));


// CONNECT TO THE DATABASE
// AND CREATE A MINIMAL REST-API

// import the database driver
const betterSqlite3 = require('better-sqlite3');

// create a connection to the database
const db = betterSqlite3('./database/products.db');

// create a rest route using our express web server (app)
app.get('/api/products', (request, response) => {

  // create a prepared statement (sql query)
  const stmt = db.prepare(`
    SELECT *
    FROM products
  `);

  // run the prepared statement
  let result = stmt.all();

  // send the result to the client
  response.json(result);

});

