const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello Docker!`);
});

const port = 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log(`Listening on ${bind}`);
});
