const path = require('path');

require('dotenv').config({ path: path.resolve(`${__dirname}/../../../.env`) });

module.exports = {
    development: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
    test: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE_TEST,
        host: process.env.DB_HOST,
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
