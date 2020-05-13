import axios from '../../config/axios/alerts';

import * as constants from '../../config/constants/constants';

export const getAlarms = (
	server,
	description,
	currentPage,
	setLoading,
	setAlerts,
	setMaxAlerts,
	setError
) => {
	const queryParams = [];

	if (server) {
		queryParams.push(`server=${server}`);
	}

	if (description) {
		queryParams.push(`description=${description}`);
	}

	setLoading(true);
	axios
		.get(
			`/alerts?offset=${currentPage * constants.ALERTS_PER_PAGE}
				&limit=${constants.ALERTS_PER_PAGE}&${
				queryParams.length > 1 ? queryParams.join('&') : queryParams
			}`
		)
		.then((response) => {
			setLoading(false);
			setAlerts(response.data.rows);
			setMaxAlerts(response.data.count);
		})
		.catch((error) => {
			setLoading(false);
			setError('Cannot get alarms!!!');
		});
};
