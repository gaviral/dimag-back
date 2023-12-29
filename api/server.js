// Import the json-server module to create a JSON API server.
const jsonServer = require('json-server');

// Create an instance of a JSON Server.
const server = jsonServer.create();

// Import fs and path modules to work with the file system.
const fs = require('fs');
const path = require('path');

// Define the path to the db.json file.
const filePath = path.join('db.json');

// Read the contents of the db.json file.
const data = fs.readFileSync(filePath, "utf-8");

// Parse the JSON data from the db.json file.
const db = JSON.parse(data);

// Create a router for the JSON Server using the parsed db.json data.
// This allows json-server to provide routes based on this data.
const router = jsonServer.router(db);

// Set default middlewares (logger, static, CORS, and no-cache) provided by json-server.
const middlewares = jsonServer.defaults();

// Apply the default middlewares.
server.use(middlewares);

// Mount the router on the server.
server.use(router);

// Start the server on port 3000 and log a message to the console.
server.listen(3000, () => {
    console.log('JSON Server is running');
});

// Export the server object for use elsewhere, like in testing or when imported into other modules.
module.exports = server;
