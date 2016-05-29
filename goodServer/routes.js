var rootRequestHandler = require('./rootRequestHandler.js');
var personRequestHandler = require('./personRequestHandler.js');

module.exports = {
	"/": rootRequestHandler,
	"/person": personRequestHandler
};
