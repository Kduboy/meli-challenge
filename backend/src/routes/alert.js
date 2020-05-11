const router = require('express').Router();

const controller = require('../controllers/alert/controller');
const { validate } = require('../middlewares/validations/validate');
const {
	getAlertRules,
} = require('../middlewares/validations/rules/alertRules');
const { getServerId } = require('../middlewares/getServerId');

router.get('/', controller.get);
router.get('/statistics', controller.getStatistics);
router.post('/', getAlertRules(), validate, getServerId, controller.create);

module.exports = router;
