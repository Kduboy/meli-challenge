import axios from '../../config/axios/alerts';

import * as constants from '../../config/constants/constants';

export const getAlarms = async (server = '', description = '', currentPage) => {
	const queryParams = [];

	if (server) {
		queryParams.push(`server=${server}`);
	}
	if (description) {
		queryParams.push(`description=${description}`);
	}

	return await axios.get(
		`/alerts?offset=${currentPage * constants.ALERTS_PER_PAGE}&limit=${
			constants.ALERTS_PER_PAGE
		}&${queryParams.length > 1 ? queryParams.join('&') : queryParams}`
	);
};
