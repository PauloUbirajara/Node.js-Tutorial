const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, 'index.html'));
});

//> Validar informações recebidas do input
app.post('/', (request, response) => {
	const schema = Joi.object().keys({
		email:
			Joi.string()
				.trim()
				.email()
				.required(),
		password:
			Joi.string()
				.min(5)
				.max(10)
				.required()
	});

	let object = {};
	request.body.forEach(element => {
		object[element.name] = element.value;
	});

	const result = schema.validate(object);

	if (result['error']) {
		response.send("Error during form verification!")
	}

	response.send("Successfully submited the form!")
});

app.listen(8080, () => {
	console.log("Servidor ligado!")
});