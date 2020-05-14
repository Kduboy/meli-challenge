import React from 'react';
import PropTypes from 'prop-types';

import AlertContainer from './AlertContainer/AlertContainer';
import Pagination from '../UI/Pagination/Pagination';

import classes from './AlertsContainer.module.css';

const alertsContainer = (props) => {
	const alerts = props.alerts.map((alert) => {
		return (
			<AlertContainer
				data-test='component-alert-container'
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
		<div className={classes.Alerts} data-test='component-alerts-container'>
			{alerts}
			<Pagination
				data-test='component-pagination'
				paginate={props.paginate}
				currentPage={props.currentPage}
				lastPage={props.lastPage}
			/>
		</div>
	);
};

alertsContainer.propTypes = {
	alerts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			server: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			updatedAt: PropTypes.string.isRequired,
			Server: PropTypes.shape({
				name: PropTypes.string.isRequired,
			}),
		})
	),
	paginate: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
};

export default alertsContainer;
