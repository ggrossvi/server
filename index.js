// import http
const http = require("http");

// create server with HTTP
const server = http.createServer((req, res) => {
  console.log("Server is created!");
});

// initial port
const PORT = 4000;

// listen to port  --  so when you runn node index.js the following will console log when it is running.
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
