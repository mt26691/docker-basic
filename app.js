const express = require('express');
const http = require('http');
const app = express();
const redis = require("redis");


const redisClient = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

redisClient.on("ready", function(error) {
  console.log(`connected to redis`)
});

app.get('/', (req, res) => {
  res.send(`Hello Docker!`);
});

const port = 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  var addr = server.address();
  console.log(`Listening on ${addr.port}`);
});
