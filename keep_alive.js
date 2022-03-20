var http = require('http');

http.createServer(function (req, res) {
  res.write("I AM ALIVE!");
  res.end();
}).listen(8080); 
