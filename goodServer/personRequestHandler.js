var	model = require('./model.js');
var cache = require('./cache.js');
var postParser = require('./postParser.js');
var httpStatus = require('http-status-codes');

module.exports = {
	"GET": function(request, response) {
		var responseCode = httpStatus.INTERNAL_SERVER_ERROR;
		var responseEnd;
		if (cache[request.url]) {
			response.writeHead(httpStatus.OK);
			response.end(cache[request.url]);
		} else {
			model.readPersonFromFile(function(error, data) {
				if (error) {
					response.writeHead(httpStatus.INTERNAL_SERVER_ERROR);
					response.end('Read error');
				} else {
					response.writeHead(httpStatus.OK);
					response.end(data);
					cache[request.url] = data;
				}
			});
		}
	},
	"POST": function(request, response) {
		postParser(request, function(data) {
			cache[request.url] = data;
			model.writePersonToFile(data, function(error) {
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