const fs = require('fs');

// Em casos extremos, não seria possível ler devido o tamanho do arquivo exceder o limite do Buffer
fs.readFile('./largefile.txt', (err, file) => {
	if (err)
		console.log(err);
	else
		console.log(file);
});

// Divide o arquivo em vários buffers pequenos
const readStream = fs.createReadStream('./largefile.txt', 'utf8');
readStream.on('data', (chunk) => {
	console.log(chunk);
});