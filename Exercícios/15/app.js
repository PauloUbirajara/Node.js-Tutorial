const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// Mostra como 'enviar' dados de um formulário com o método POST sem ter que recarregar a página e um pouco de jQuery.
app.post('/', (request, response) => {
	console.log(request.body);
	// Suposta atividade de um banco de dados
	response.json({ success: true });
});

app.listen(8080);