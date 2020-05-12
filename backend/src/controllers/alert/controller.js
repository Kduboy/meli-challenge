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
	const whereAlerts = {};
	const whereServers = {};

	if (req.query.description) {
		whereAlerts.description = req.query.description;
	}

	if (req.query.server) {
		whereServers.name = req.query.server;
	}

	try {
		const alerts = await Alert.findAndCountAll({
			where: { ...whereAlerts },
			order: [[Sequelize.col('createdAt'), 'DESC']],
			include: [
				{
					model: Server,
					as: 'Server',
					required: true,
					attributes: ['name'],
					where: { ...whereServers },
				},
			],
			limit: parseInt(req.query.limit),
			offset: parseInt(req.query.offset),
		});

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

		return res.send(amount);
	} catch (error) {
		return res.status(500).send();
	}
};
