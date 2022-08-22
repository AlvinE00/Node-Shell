// module.exports = () => {
// 	// process.stdout.write('prompt > ');

// 	// process.stdin.on('data', (data) => {
// 	// 	const cmd = data.toString().trim(); //remove the newline
// 	// 	if (cmd === 'pwd') {
// 	// 		process.stdout.write(process.cwd());
// 	// 	} else {
// 	// 		process.stdout.write('You typed: ' + cmd);
// 	// 	}
// 	// 	process.stdout.write('\nprompt > ');
// 	// });

// };

module.exports = (done) => {
	done(process.cwd());
	// } else {
	// 	process.stdout.write('You typed: ' + cmd);
	// }
};
