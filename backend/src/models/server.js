'use strict';
module.exports = (sequelize, DataTypes) => {
	const Server = sequelize.define(
		'Server',
		{
			name: DataTypes.STRING,
			type: DataTypes.ENUM('onprem', 'virtual'),
		},
		{
			freezeTableName: true,
		}
	);
	Server.associate = function (models) {
		Server.hasMany(models.Alert, {
			foreignKey: 'server',
			as: 'Alert',
		});
	};
	return Server;
};
