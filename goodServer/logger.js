module.exports = {
	log: function(request) {
		var date = new Date().toISOString();
		console.log([date, request.method, request.url].join('  '));
	}
};