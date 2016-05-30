http.createServer(function (request, response) {
	api.requestHandler.handle(request, response);
}).listen(8080);