api.cookieParser = {};

api.cookieParser.parse = function (request) {
	var cookie = request.headers.cookie;
	var cookies = {};
	if (cookie) {
		cookie.split(';').forEach(function(item) {
			var parts = item.split('=');
			cookies[(parts[0]).trim()] = (parts[1] || '').trim();
		});
	}
	api.cookieParser.cookies = cookies;
}