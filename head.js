module.exports = (done, string) => {
	fs.readFile(string, 'utf8', (err, data) => {
		if (err) {
			throw err;
		}
		done(data.split('\n').slice(0, 10).join('\n'));
	});
};
