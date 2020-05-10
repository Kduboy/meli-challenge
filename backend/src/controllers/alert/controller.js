const { Alert, Sequelize, Server } = require('../../models');

exports.create = async (req, res) => {
	try {
		const alert = await Alert.create({
			server: req.serverId,
			description: req.body.description,
			createdAt: req.body.created_at,
		});

		if (!alert) {
			return res.status(500).send();
		}
		return res.status(201).send(alert);
	} catch (error) {
		return res.status(500).send();
	}
};

exports.get = async (req, res) => {
	const whereClausure = {};

	if (req.serverId) {
		whereClausure.server = req.serverId;
	}

	if (req.query.description) {
		whereClausure.description = req.query.description;
	}

	try {
		const alerts = await Alert.findAll({
			where: { ...whereClausure },
		});

		if (!alerts) {
			return res.status(404).send();
		}

		return res.send(alerts);
	} catch (error) {
		return res.status(500).send();
	}
};

exports.getStatistics = async (req, res) => {
	try {
		const amount = await Alert.findAll({
			attributes: [[Sequelize.fn('COUNT', '*'), 'total']],
			where: {
				createdAt: Sequelize.literal(
					`MONTH(Alert.createdAt) = ${new Date().getMonth() + 1}`
				),
			},
			group: 'Alert.server',
			order: [[Sequelize.literal('total'), 'DESC']],
			limit: 3,
			include: [
				{
					model: Server,
					as: 'Server',
					attributes: [[Sequelize.col('name'), 'name']],
					required: true,
				},
			],
		});

		if (!amount) {
			return res.status(404).send();
		}

		return res.send(amount);
	} catch (error) {
		return res.status(500).send();
	}
};
