module.exports = {
	development: {
		username: 'root',
		password: 'luca36904425',
		database: 'meli_challenge',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	test: {
		username: 'root',
		password: 'luca36904425',
		database: 'meli_challenge_test',
		host: '127.0.0.1',
		dialect: 'mysql',
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
