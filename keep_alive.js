var http = require('http');

http.createServer(function (req, res) {
  res.write("HEY FAGGOT I AM ALIVE!");
  res.end();
}).listen(8080); 