const fs = require('fs');

module.exports = (done) => {
	fs.readdir('./', 'utf8', (err, files) => {
		if (err) {
			done('Something Went Wrong!');
		} else {
			done(files.join('\n'));
		}
	});
};
