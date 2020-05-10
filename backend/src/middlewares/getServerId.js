const { Server } = require('../models');

const getServerId = async (req, res, next) => {
	const whereClausure = {};

	if (!req.query.server && !req.body.server) {
		return next();
	} else {
		whereClausure.name = req.query.server || req.body.server;
	}

	if (req.body.server_type) {
		whereClausure.type = req.body.server_type;
	}

	try {
		const server = await Server.findOne({
			attributes: ['id'],
			where: { ...whereClausure },
		});

		if (!server) {
			return res.status(404).send({
				error: 'Server not found',
			});
		}

		req.serverId = server.id;

		return next();
	} catch (error) {
		return res.status(500).send();
	}
};

module.exports = {
	getServerId,
};
