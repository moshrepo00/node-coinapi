const rp = require('request-promise');

exports.getConversion = (req, res, next) => {
	const rp = require('request-promise');
	const requestOptions = {
		method: 'GET',
		uri: 'https://api.coinmarketcap.com/v1/ticker/ethereum/',
		qs: {
			start: '1',
			limit: '5000',
			convert: 'USD'
		},
		json: true,
		gzip: true
	};

	rp(requestOptions)
		.then((response) => {
			console.log('API call response:', response);
			res.json(response);
		})
		.catch((err) => {
			console.log('API call error:', err.message);
		});
};
