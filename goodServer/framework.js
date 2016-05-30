
var fs = require('fs');
var vm = require('vm');

var modulesNames = [
	'./cache.js', 
	'./logger.js', 
	'./model.js', 
	'./cookieParser.js', 
	'./postParser.js', 
	'./rootRequestHandler.js', 
	'./personRequestHandler.js', 
	'./routes.js', 
	'./requestHandler.js', 
	'./server.js'
];

var context = { 
	module: {}, 
	http: require('http'), 
	httpStatus: require('http-status-codes'), 
	fs: fs,
	console: console, 
	api: {}
};

context.global = context;
var sandbox = vm.createContext(context);

modulesNames.forEach(function(moduleName) {

	fs.readFile(moduleName, function(err, src) {

		var script = vm.createScript(src, moduleName);
		script.runInNewContext(sandbox);

	});
});

