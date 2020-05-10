'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Alert', [
			{
				server: 1,
				description: 'downtime',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				server: 2,
				description: 'no-pingeable',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				server: 1,
				description: 'disk-capacity warning',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				server: 4,
				description: 'broken cooler fan',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				server: 3,
				description: 'S.O kernel warning',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				server: 3,
				description: 'no-pingeable',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Alert', null, {});
	},
};
