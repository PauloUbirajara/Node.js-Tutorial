const fs = require('fs');

// Criar um arquivo //
fs.writeFile(
	'example.txt',
	'This is an example!',
	(err) => {
		if (err)
			console.log(`Error: ${err.message}`);
		else {
			console.log("File successfully created!");
			// Ler um arquivo //
			/* 
				Ao ler um arquivo e não determinar o tipo de caracteres lidos, retorna um Buffer
				que guarda as informações em binário que, ao ser lido, mostra os caracteres em hexadecimal.
			 */
			fs.readFile('example.txt', 'utf8', (err, file) => {
				if (err)
					console.log("Error: " + err.message);
				else
					console.log(file);
			});
		}
	});

// Renomear arquivos //
fs.rename('example.txt', 'example2.txt', (err) => {
	if (err)
		console.log(err);
	else
		console.log('Successfully renamed the file!');
});

// Adicionar linhas a um arquivo //
fs.appendFile('example2.txt', 'Some data being appended!', (err) => {
	if (err)
		console.log(err);
	else
		console.log('Successfully appended data to file!');
});

// Deletar um arquivo //
fs.unlink('example2.txt', (err) => {
	if (err)
		console.log(err);
	else
		console.log("Successfully deleted the file!");
});