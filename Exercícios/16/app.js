const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_, response) => {
	response.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (request, response) => {
	console.log(request.body);
	response.json({ success: true });
});

app.listen(8080);