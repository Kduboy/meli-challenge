import React, { Fragment } from 'react';

import AlertsContainer from '../../components/AlertsContainer/AlertsContainer';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as services from '../../services/AlertFinder/services';
import * as constants from '../../config/constants/constants';

import classes from './AlertFinder.module.css';

const AlertFinder = () => {
	const [alerts, setAlerts] = React.useState([]);
	const [server, setServer] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [currentPage, setCurrentPage] = React.useState(0);
	const [maxAlerts, setMaxAlerts] = React.useState(0);
	const [loading, setLoading] = React.useState(false);
	const [isSending, setIsSending] = React.useState(false);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		const getAlarms = services.getAlarms(server, description, currentPage);

		getAlarms
			.then((response) => {
				setLoading(false);
				setAlerts(response.data.rows);
				setMaxAlerts(response.data.count);
			})
			.catch((error) => {
				setLoading(false);
				setError('Cannot get alarms!!!');
			});
	}, [currentPage, isSending]);

	const searchAlertsHandler = () => {
		setIsSending((prevState) => !prevState);
		setCurrentPage(0);
	};

	const paginate = (page) => {
		setCurrentPage(page);
	};

	let allAlerts = null;
	let errorResponse = null;

	if (loading) {
		allAlerts = <Spinner />;
	} else if (alerts.length === 0) {
		allAlerts = (
			<h2 style={{ color: 'red', textAlign: 'center' }}>
				There are no alerts
			</h2>
		);
	} else {
		allAlerts = (
			<AlertsContainer
				alerts={alerts}
				paginate={paginate}
				currentPage={currentPage}
				lastPage={Math.ceil(maxAlerts / constants.ALERTS_PER_PAGE - 1)}
			/>
		);
	}

	if (error) {
		errorResponse = (
			<h2 style={{ color: 'red', textAlign: 'center' }}>{error}</h2>
		);
	}

	return (
		<Fragment>
			<div
				data-test='component-alert-finder'
				className={classes.AlertFinder}
			>
				<Input
					data-test='input-server'
					elementType='input'
					value={server}
					label='Server'
					changed={(event) => setServer(event.target.value)}
				/>
				<Input
					data-test='input-description'
					elementType='input'
					value={description}
					label='Description'
					changed={(event) => setDescription(event.target.value)}
				/>
				<Button
					data-test='search-button'
					text='Search'
					clicked={searchAlertsHandler}
				/>
			</div>
			{errorResponse ? errorResponse : allAlerts}
		</Fragment>
	);
};

export default AlertFinder;
