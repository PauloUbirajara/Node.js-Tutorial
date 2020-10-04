const fs = require('fs');

const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('./example2.txt');

// Serve para ler um arquivo por partes, ao invés de esperar pelo resultado do arquivo inteiro.
readStream.on('data', (chunk) => {

	// Escreve por partes
	writeStream.write(chunk);

});