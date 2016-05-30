api.personRequestHandler = {
	"GET": function(request, response) {
		var responseCode = httpStatus.INTERNAL_SERVER_ERROR;
		var responseEnd;
		if (api.cache[request.url]) {
			response.writeHead(httpStatus.OK);
			response.end(api.cache[request.url]);
		} else {
			api.model.readPersonFromFile(function(error, data) {
				if (error) {
					response.writeHead(httpStatus.INTERNAL_SERVER_ERROR);
					response.end('Read error');
				} else {
					response.writeHead(httpStatus.OK);
					response.end(data);
					api.cache[request.url] = data;
				}
			});
		}
	},
	"POST": function(request, response) {
		api.postParser(request, function(data) {
			api.cache[request.url] = data;
			api.model.writePersonToFile(data, function(error) {
				if (error) {
					response.writeHead(httpStatus.INTERNAL_SERVER_ERROR);
					response.end('Write error');
				} else {
					response.writeHead(httpStatus.OK);
					response.end('File saved');
				}
			});
		});
	}
}