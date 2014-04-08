var Cat = require('./cat.js'),
    html = require('../views/content.hbs'),
    cats = [
		new Cat('Mr. Bigglesworth'),
		new Cat('Lord Fiddlebottom'),
		new Cat('Henry Floxemby III'),
		new Cat('Creature'),
		new Cat('Mrs. Prudence Beaumont')
	];

var content = document.getElementById("content");

content.innerHTML = html({
	header: 'Rubrik',
	cats: cats
});