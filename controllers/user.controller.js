const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.userCreate = (req, res, next) => {
	console.log(req.file);
	const password = req.body.password;
	bcrypt
		.hash(password, 12)
		.then((hashedPw) => {
			const user = new User({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: hashedPw,
				image: req.file.path
			});
			return user.save();
		})
		.then((result) => {
			res.status(201).json(user);
		});
};
