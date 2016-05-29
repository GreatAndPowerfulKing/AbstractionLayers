var http = require('http');
var requestHandler = require('./requestHandler.js');

http.createServer(function (request, response) {
	requestHandler.handle(request, response);
}).listen(8080);