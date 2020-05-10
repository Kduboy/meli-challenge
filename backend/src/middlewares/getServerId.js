const { Server } = require('../models');

const getServerId = async (req, res, next) => {
	try {
		const server = await Server.findOne({
			attributes: ['id'],
			where: {
				name: req.body.server,
				type: req.body.server_type,
			},
		});

		if (!server) {
			return res.status(403).send({
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
