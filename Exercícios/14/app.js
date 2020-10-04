// npm init --yes -> cria um package.json sem perguntas ao usuário
// npm install express -> módulo para criar melhores aplicações web.

const express = require('express');
const app = express();

app.get('/', (request, response) => {
	response.send('Hello World!');
});

app.get('/example', (request, response) => {
	response.send('Example router!');
});

// Para criar uma query, basta inserir interrogação, o atributo a ser procurado, e atribuir um valor
// .../example?query=query_value

// Variáveis criadas na url são preenchidas pelo próprio resultado, não precisando do nome do atributo
// .../example/Paulo/18

app.get('/example/:name/:age', (request, response) => {
	console.log(request.params); // Informações inseridas na url
	console.log(request.query); // Informações de busca do usuário
	const { name, age } = request.params;
	response.send(name + ": " + age);
});

app.listen(8080);