// Load the http module to create an HTTP server
const http = require('http');

// Define the port where the server will listen
const port = 3000;

// Create an HTTP server and define the response behavior
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send a response to the client
  res.end('Hello, World!');
});

// Make the server listen on the specified port
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
