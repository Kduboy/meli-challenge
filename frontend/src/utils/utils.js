export const getCurrentAlerts = (currentPage, ALARMS_PER_PAGE, alerts) => {
	const indexOfLastAlert = currentPage * ALARMS_PER_PAGE;
	const indexOfFirstAlert = indexOfLastAlert - ALARMS_PER_PAGE;

	return alerts.slice(indexOfFirstAlert, indexOfLastAlert);
};
