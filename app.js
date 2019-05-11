const express = require('express');
const bodyParser = require('body-parser');
const currencyConverterRoutes = require('./routes/curr-converter.route');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use('/currency', currencyConverterRoutes);

app.get('/', (req, res) => {
	res.send('Server is running');
});

app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server is running on port 8080');
});
