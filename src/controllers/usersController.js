const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const usersController = {
	root: (req, res) => {
		let html = readHTML('users');
		res.send(html);
	},
};

module.exports = usersController
