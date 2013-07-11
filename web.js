var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

//var buffer = new Buffer(20);
//buffer.write(fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
