var Cat = require('./cat.js'),
    cat = new Cat('Mr. Bigglesworth'),
    html = require('../views/content.hbs');

cat.makeSound();

var content = document.getElementById("content");

content.innerHTML = html({
	header: 'Rubrik',
	content: 'Innehåll'
});