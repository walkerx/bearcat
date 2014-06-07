var Car = require('./car');

var CarFactory = function() {
	this.wheel = null;
}

CarFactory.prototype.createCar = function() {
	console.log('CarFactory createCar...');
	this.wheel.run();
	return new Car();
}

module.exports = CarFactory;