const fs = require('fs');

module.exports = (done, string) => {
	fs.readFile(string, 'utf8', (err, data) => {
		if (err) {
			throw err;
		}
		done(data.split('\n').reverse().slice(0, 10).reverse().join('\n'));
	});
};
