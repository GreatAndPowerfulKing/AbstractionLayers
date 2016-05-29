var fs = require('fs');

function readPersonFromFile(callback) {
	fs.readFile('./person.json', function(error, data) {
		var person = {};
		if (!error) {
			person = JSON.parse(data);
			person.birth = new Date(person.birth);
			var difference = new Date() - person.birth;
			person.age = Math.floor(difference / 31536000000);
			delete person.birth;
		}
		if (typeof(callback) === "function") {
			callback(error, JSON.stringify(person));
		}
	});
}

function writePersoneToFile(data, callback) {
	fs.writeFile('./person.json', data, callback);
}

module.exports = {
	readPersonFromFile: function (callback) {
		fs.readFile('./person.json', function(error, data) {
			var person = {};
			if (!error) {
				person = JSON.parse(data);
				person.birth = new Date(person.birth);
				var difference = new Date() - person.birth;
				person.age = Math.floor(difference / 31536000000);
				delete person.birth;
			}
			if (typeof(callback) === "function") {
				callback(error, JSON.stringify(person));
			}
		});
	},
	writePersoneToFile: function (data, callback) {
		fs.writeFile('./person.json', data, callback);
	}
};