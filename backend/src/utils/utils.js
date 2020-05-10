/**
 * Convert Array of date to a DateTime object.
 */
const toDateTime = (date) => {
	return new Date(
		`${date[5]}-${date[4]}-${date[3]} ${date[0]}:${date[1]}:${date[2]}`
	);
};

module.exports = {
	toDateTime,
};
