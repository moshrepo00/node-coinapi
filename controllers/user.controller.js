const User = require('../models/user.model');

exports.userCreate = (req, res, next) => {
	console.log(req.file);
	let user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	});

	user.save().then((user) => {
		res.json(user);
	});
};
