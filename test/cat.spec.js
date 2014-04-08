var Cat = require('../src/app/cat.js');

describe('cat', function () {
	it('should have a name', function () {
		var cat = new Cat('Zappa');

		expect(cat.name).toBe('Zappa');
	});
});