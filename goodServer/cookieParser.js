var cookies = {};

function parse(request) {
	var cookie = request.headers.cookie;
	if (cookie) {
		cookie.split(';').forEach(function(item) {
			var parts = item.split('=');
			cookies[(parts[0]).trim()] = (parts[1] || '').trim();
		});
	}
}

module.exports = {
	cookies: cookies,
	parse: parse
}