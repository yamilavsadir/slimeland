const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const productsController = {
	root: (req, res) => {
		let html = readHTML('products');
		res.send(html);
	},
};

module.exports = productsController
