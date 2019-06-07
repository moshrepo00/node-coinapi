const jwt = require('jsonwebtoken');
const config = require('./config');

exports.isLoggedIn = (req, res, next) => {
	const authHeader = req.get('Authorization');
	if (!authHeader) {
		const error = new Error('Not authenticated');
		error.statusCode = 401;
		throw error;
	}

	const token = authHeader.split(' ')[1];
	let decodedToken;
	try {
		decodedToken = jwt.verify(token, config.secret);
	} catch (err) {
		err.statusCode = 403;
		throw err;
	}
	req.userId = decodedToken.userId;
	next();
};
