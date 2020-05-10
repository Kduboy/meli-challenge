'use strict';
module.exports = (sequelize, DataTypes) => {
	const Alert = sequelize.define(
		'Alert',
		{
			server: DataTypes.INTEGER,
			description: DataTypes.STRING,
		},
		{
			freezeTableName: true,
		}
	);
	Alert.associate = function (models) {
		Alert.belongsTo(models.Server, {
			foreignKey: 'server',
			as: 'Server',
		});
	};
	return Alert;
};
