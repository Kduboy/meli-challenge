const router = require('express').Router();

const controller = require('../controllers/alert/controller');
const { createAlertRules, validate } = require('../middlewares/validate');
const { getServerId } = require('../middlewares/getServerId');

router.get('/', getServerId, controller.get);
router.get('/statistics', getServerId, controller.getStatistics);
router.post('/', createAlertRules(), validate, getServerId, controller.create);

module.exports = router;
