const fs = require('fs');

// Cria uma pasta //
fs.mkdir('tutorial', (err) => {
	if (err)
		console.log(err)
	else {
		// Deleta uma pasta //
		fs.rmdir('tutorial', (err) => {
			if (err)
				console.log(err)
			else
				console.log('Successfully deleted the folder');
		});
		console.log("Successfully created the folder");
	}
});

fs.mkdir('tutorial', (err) => {
	if (err)
		console.log(err)
	else
		fs.writeFile('./tutorial/example.txt', 'Hello World!', (err) => {
			if (err)
				console.log(err)
			else
				console.log('Successfully created file in folder!');
		});
})


fs.unlink('./tutorial/example.txt', (err) => {
	if (err)
		console.log(err)
	else
		fs.rmdir('tutorial', (err) => {
			if (err)
				console.log(err);
			else
				console.log("Successfully deleted the folder!");
		});
});

// Apaga pasta somente se estiver vazia!
fs.rmdir('tutorial', (err) => {
	if (err)
		console.log(err);
	else
		console.log("Successfully deleted the folder!");
});

// Como limpar todos os arquivos de uma pasta
fs.readdir('example', (err, files) => {
	if (err)
		console.log(err);
	else {
		for (let file of files) {
			fs.unlink('./example/' + file, (err) => {
				if (err)
					console.log(err);
				else
					console.log("Successfully deleted " + file);
			});
		}
	}
});