const { Alert } = require('../../src/models');

const alarm1 = {
	server: 3,
	description: 'disk-capacity warning',
};

const alarm2 = {
	server: 4,
	description: 'broken cooler fan',
};

const alarm3 = {
	server: 4,
	description: 'S.O Kernel problems',
};

const alarm4 = {
	server: 4,
	description: 'no-pingeable',
};

const alarm5 = {
	server: 6,
	description: 'no-pingeable',
};

const alarm6 = {
	server: 2,
	description: 'disk-capacity warning',
};

const alarm7 = {
	server: 2,
	description: 'broken cooler fan',
};

const alarm8 = {
	server: 2,
	description: 'downtime',
};

const alarm9 = {
	server: 2,
	description: 'downtime',
};

const alarm10 = {
	server: 6,
	description: 'downtime',
};

const setupData = async () => {
	await Alert.destroy({
		truncate: true,
	});
	await Alert.create(alarm1);
	await Alert.create(alarm2);
	await Alert.create(alarm3);
	await Alert.create(alarm4);
	await Alert.create(alarm5);
	await Alert.create(alarm6);
	await Alert.create(alarm7);
	await Alert.create(alarm8);
	await Alert.create(alarm9);
	await Alert.create(alarm10);
};

const destroyAlerts = async () => {
	await Alert.destroy({
		truncate: true,
	});
};

module.exports = {
	setupData,
	destroyAlerts,
};
