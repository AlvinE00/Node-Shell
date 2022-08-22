//Output a prompt
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const date = require('./date');
const echo = require('./echo');
const head = require('./head');
const tail = require('./tail');
// The stdin 'data' event fires after a user types in a line
// pwd();
// ls();

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim(); //remove the newline
	if (cmd === 'ls') {
		ls(done);
	}
	if (cmd === 'pwd') {
		pwd(done);
	}
	if (cmd.split(' ')[0] === 'cat') {
		cat(done, cmd.split(' ')[1]);
	}
	if (cmd === 'date') {
		date(done);
	}
	if (cmd.split(' ')[0] === 'echo') {
		echo(done, cmd);
	}
	if (cmd.split(' ')[0] === 'head') {
		head(done, cmd.split(' ')[1]);
	}
	if (cmd.split(' ')[0] === 'tail') {
		tail(done, cmd.split(' ')[1]);
	}
});

const done = (output) => {
	//   process.stdout.write('You typed: ' + output);
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
};
