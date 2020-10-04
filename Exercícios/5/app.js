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


// Continuar