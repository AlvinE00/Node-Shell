//echo hello world

module.exports = (done, cmd) => {
	let array = cmd.split(' ');
	// done(array.slice(1, array.length - 1));
	done(array.slice(1).join(' '));
	// console.log(array.slice(1, array.length - 1).join(''));
	// done(array.slice(1, array.length - 1).join(''));
};
