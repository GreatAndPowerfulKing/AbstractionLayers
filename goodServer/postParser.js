api.postParser = function (req, callback) {
	if (req.method !== "POST") {
		return undefined;
	}
	var body = [];
	req.on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		var data = Buffer.concat(body).toString();
		var obj = JSON.parse(data);
		if (obj.name) obj.name = obj.name.trim();
		data = JSON.stringify(obj);
		if (typeof(callback) === "function") {
			callback(data);
		}
	});
}