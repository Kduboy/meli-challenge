const { body, validationResult } = require('express-validator');

const { toDateTime } = require('../utils/utils');

const createAlertRules = () => {
	return [
		body('server').exists().not().isEmpty().isString(),
		body('description').exists().not().isEmpty().isString(),
		body('created_at').exists().not().isEmpty().isString(),
		body('server_type')
			.exists()
			.not()
			.isEmpty()
			.isString()
			.isIn(['onprem', 'virtual']),
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).send();
	}
	req.body.created_at = toDateTime(req.body.created_at.split('-'));

	return next();
};

module.exports = {
	createAlertRules,
	validate,
};
