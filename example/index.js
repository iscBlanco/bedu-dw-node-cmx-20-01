// Importar el paquete de HTTP de Node
// Modules -> Módulos
// NPM -> Third Party Modules -> Módulos de terceros
// Core API's
// Own
const http = require('http');
// const process = require('process'); // Process se incluye de manera global

// Definir variables
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Crear un servidor web
// req, res -> request, response
const server = http.createServer((req, res) => {
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
  // Server running at http://127.0.0.1:3000
});