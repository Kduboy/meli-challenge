'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Server', [
			{
				name: 'Server1',
				type: 'onprem',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Server2',
				type: 'virtual',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Server3',
				type: 'onprem',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Server4',
				type: 'onprem',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Server5',
				type: 'virtual',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Server6',
				type: 'onprem',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Server7',
				type: 'virtual',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Server', null, {});
	},
};
