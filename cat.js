const fs = require('fs');

module.exports = (done, string) => {
	// console.log(string);
	// console.log(string.split(' '));
	if (string.split(' ')[0] === 'cat') {
		fs.readFile(string.split(' ')[1], 'utf8', (err, data) => {
			if (err) {
				throw err;
			}
			done(data);
		});
	}
};
