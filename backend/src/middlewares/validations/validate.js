const { validationResult } = require('express-validator');

const { toDateTime } = require('../../utils/utils');

const validate = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).send();
	}
	req.body.created_at = toDateTime(req.body.created_at.split('-'));

	return next();
};

module.exports = {
	validate,
};
