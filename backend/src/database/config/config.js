const path = require('path');

require('dotenv').config({ path: path.resolve(`${__dirname}/../../../.env`) });

module.exports = {
	development: {
		username: process.env.DATABASE_USERNAME_DEV,
		password: process.env.DATABASE_PASSWORD_DEV,
		database: process.env.DATABASE_NAME_DEV,
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	test: {
		username: process.env.DATABASE_USERNAME_TEST,
		password: process.env.DATABASE_PASSWORD_TEST,
		database: process.env.DATABASE_NAME_TEST,
		host: '127.0.0.1',
		dialect: 'mysql',
		logging: false,
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
		operatorsAliases: false,
	},
};
