// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server');
const server = jsonServer.create();
const fs = require('fs');
const path = require('path');
const filePath = path.join('db.json');
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

// Comment out to allow write operations
// const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults();

// Enable CORS by setting appropriate headers
server.use((req, res, next) => {
  // Replace '*' with the actual origin(s) you want to allow
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running')
});

// Export the Server API
module.exports = server;
