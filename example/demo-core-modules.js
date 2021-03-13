const path = require('path'); // Core Module: Path
const server = require(path.join(__dirname, 'app', 'server.js'));
// require('/Users/coderdiaz/github.com/BackendNodeJs/example/app/server.js')

server.createServer();