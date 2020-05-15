module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Alert', [
			{
				server: 1,
				description: 'no-pingeable',
				createdAt: new Date(2020, 05, 05),
				updatedAt: new Date(),
			},
			{
				server: 2,
				description: 'S.O kernel warning',
				createdAt: new Date(2020, 01, 02),
				updatedAt: new Date(),
			},
			{
				server: 1,
				description: 'broken cooler fan',
				createdAt: new Date(2020, 03, 04),
				updatedAt: new Date(),
			},
			{
				server: 4,
				description: 'no-pingeable',
				createdAt: new Date(2020, 03, 04),
				updatedAt: new Date(),
			},
			{
				server: 3,
				description: 'no-pingeable',
				createdAt: new Date(2018, 09, 12),
				updatedAt: new Date(),
			},
			{
				server: 3,
				description: 'disk capacity warning',
				createdAt: new Date(2019, 06, 07),
				updatedAt: new Date(),
			},
			{
				server: 5,
				description: 'downtime',
				createdAt: new Date(2020, 02, 17),
				updatedAt: new Date(),
			},
			{
				server: 6,
				description: 'disk capacity warning',
				createdAt: new Date(2020, 04, 29),
				updatedAt: new Date(),
			},
			{
				server: 7,
				description: 'borken cooler fan',
				createdAt: new Date(2020, 05, 12),
				updatedAt: new Date(),
			},
			{
				server: 7,
				description: 'S.O kernel warning',
				createdAt: new Date(2020, 05, 13),
				updatedAt: new Date(),
			},
			{
				server: 4,
				description: 'no-pingeable',
				createdAt: new Date(2020, 03, 01),
				updatedAt: new Date(),
			},
			{
				server: 4,
				description: 'S.O kernel warning',
				createdAt: new Date(2019, 11, 20),
				updatedAt: new Date(),
			},
			{
				server: 2,
				description: 'no-pingeable',
				createdAt: new Date(2020, 04, 04),
				updatedAt: new Date(),
			},
			{
				server: 1,
				description: 'downtime',
				createdAt: new Date(2020, 02, 05),
				updatedAt: new Date(),
			},
			{
				server: 3,
				description: 'no-pingeable',
				createdAt: new Date(2020, 04, 17),
				updatedAt: new Date(),
			},
			{
				server: 3,
				description: 'broken cooler fan',
				createdAt: new Date(2020, 03, 20),
				updatedAt: new Date(),
			},
			{
				server: 5,
				description: 'broken cooler fan',
				createdAt: new Date(2020, 05, 01),
				updatedAt: new Date(),
			},
			{
				server: 5,
				description: 'downtime',
				createdAt: new Date(2019, 12, 01),
				updatedAt: new Date(),
			},
			{
				server: 4,
				description: 'disk capacity warning',
				createdAt: new Date(2020, 02, 17),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Alert', null, {});
	},
};
