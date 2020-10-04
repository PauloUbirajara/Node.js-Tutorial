const http = require('http'); // Módulo para criar um servidor local

const server = http.createServer((request, response) => { // É preciso escrever e terminar uma resposta para o servidor.
	if (request.url === '/')
		response.write("Hello World from Node.js!");
	else
		response.write("Other domain than default!");

	response.end();
});

server.listen('8080'); // Define a porta o qual será aberto o servidor local.