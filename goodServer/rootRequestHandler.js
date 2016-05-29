var cookieParser = require('./cookieParser.js');
var httpStatus = require('http-status-codes');

module.exports = {
	"GET": function(request, response) {
		response.writeHead(httpStatus.OK, {
			'Set-Cookie': 'mycookie=test',
			'Content-Type': 'text/html'
		});
		var ip = request.connection.remoteAddress;
		response.write('<h1>Welcome</h1>Your IP: ' + ip);
		response.end('<pre>' + JSON.stringify(cookieParser.cookies) + '</pre>');
	}
}