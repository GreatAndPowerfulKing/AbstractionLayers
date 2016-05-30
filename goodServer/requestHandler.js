api.requestHandler = {
	handle: function(request, response) {
		api.cookieParser.parse(request);
		api.logger.log(request, response);
		if (api.routes[request.url]) {
			if (typeof(api.routes[request.url][request.method]) === "function") {
				api.routes[request.url][request.method](request, response);
			}
		}
	}
};
