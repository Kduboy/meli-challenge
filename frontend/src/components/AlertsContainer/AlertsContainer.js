import React from 'react';

import Alert from './AlertContainer/AlertContainer';
import Pagination from '../UI/Pagination/Pagination';

import classes from './AlertsContainer.module.css';

const AlertsContainer = (props) => {
	const alerts = props.alerts.map((alert) => {
		return (
			<Alert
				key={alert.id}
				server={alert.Server.name}
				description={alert.description}
				createdAt={`${new Date(
					alert.createdAt
				).toLocaleDateString()} ${new Date(
					alert.createdAt
				).toLocaleTimeString()}`}
			/>
		);
	});

	return (
		<div className={classes.Alerts}>
			{alerts}
			<Pagination
				paginate={props.paginate}
				currentPage={props.currentPage}
				lastPage={props.lastPage}
			/>
		</div>
	);
};

export default AlertsContainer;
