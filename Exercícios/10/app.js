const http = require('http');
const fs = require('fs');

// const server = http.createServer((request, response) => {
// 	const readStream = fs.createReadStream('./static/index.html');
// 	response.writeHead(200, { // Código para representar o resultado da operação, 200 para operação bem sucedida.
// 		'Content-type': 'text/html'
// 	});
// 	readStream.pipe(response);
// }).listen('8080');

// const server = http.createServer((request, response) => {
// 	const readStream = fs.createReadStream('./static/example.json');
// 	response.writeHead(200, { // Código para representar o resultado da operação, 200 para operação bem sucedida.
// 		'Content-type': 'application/json'
// 	});
// 	readStream.pipe(response);
// }).listen('8080');

const server = http.createServer((request, response) => {
	const readStream = fs.createReadStream('./static/example.jpg');
	response.writeHead(200, { // Código para representar o resultado da operação, 200 para operação bem sucedida.
		'Content-type': 'image/jpg'
	});
	readStream.pipe(response);
}).listen('8080');