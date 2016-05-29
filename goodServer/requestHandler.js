var http = require('http');
var fs = require('fs');
var logger = require('./logger.js');
var routes = require('./routes.js');
var cookieParser = require('./cookieParser.js');

module.exports = {
	handle: function(request, response) {
		cookieParser.parse(request);
		logger.log(request, response);
		if (routes[request.url]) {
			if (typeof(routes[request.url][request.method]) === "function") {
				routes[request.url][request.method](request, response);
			}
		}
	}
};
