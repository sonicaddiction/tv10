var Cat = function (name) {
	this.name = name;
};

Cat.prototype.makeSound = function () {
	console.log(this.name, 'says meowz.');
};

module.exports = Cat;