const express = require('express');
const path = require('path');
var colors = require('colors');
const app = express();

app.get('/', (request, response) => {
	response.send('<h1>Bienvenidos al servidor express</h1>');
});

let visits = 0;
app.get('/visits', (req, res) => {
	visits++;
	res.send(`La cantidad de visitas es ${visits}`);
});

app.get('/lautydev', (req, res) => {
	res.send('Hola Lauty');
});

app.get('/products', (req, res) => {
	var options = {
		root: path.join(__dirname)
	};

	var fileName = './products/container.js';
	res.sendFile(fileName, options, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('Sent:', fileName);
		}
	});
});

app.listen(8080, () => {
	console.log(
		'[SERVER]'.red + ' Servidor iniciado en el puerto ' + '8080'.yellow
	);
});
