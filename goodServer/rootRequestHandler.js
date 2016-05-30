api.rootRequestHandler = {
	"GET": function(request, response) {
		response.writeHead(httpStatus.OK, {
			'Set-Cookie': 'mycookie=test',
			'Content-Type': 'text/html'
		});
		var ip = request.connection.remoteAddress;
		response.write('<h1>Welcome</h1>Your IP: ' + ip);
		response.end('<pre>' + JSON.stringify(api.cookieParser.cookies) + '</pre>');
	}
}