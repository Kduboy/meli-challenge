const { body } = require('express-validator');

const getAlertRules = () => {
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

module.exports = {
	getAlertRules,
};
