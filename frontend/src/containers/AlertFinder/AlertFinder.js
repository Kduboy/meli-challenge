import React, { Fragment, useState, useEffect } from 'react';

import AlertsContainer from '../../components/AlertsContainer/AlertsContainer';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';

import { getCurrentAlerts } from '../../utils/utils';
import axios from '../../config/axios/alerts';
import classes from './AlertFinder.module.css';

const AlertFinder = () => {
	const [alerts, setAlerts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [description, setDescription] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [server, setServer] = useState('');

	const ALARMS_PER_PAGE = 4;

	useEffect(() => {
		setLoading(true);
		axios
			.get('/alerts')
			.then((response) => {
				setLoading(false);
				setAlerts(response.data);
			})
			.catch((error) => {
				setLoading(false);
				setError('Cannot get alarms!!!');
			});
	}, []);

	const searchAlertsHandler = () => {
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
				`/alerts?${
					queryParams.length > 1 ? queryParams.join('&') : queryParams
				}`
			)
			.then((response) => {
				setLoading(false);
				setAlerts(response.data);
				setServer('');
				setDescription('');
			})
			.catch((error) => {
				setLoading(false);
				setError('Cannot get alarms!!!');
			});
	};

	const paginate = (page) => {
		setCurrentPage(page);
	};

	let allAlerts = null;
	let errorResponse = null;
	let currentAlerts = null;

	if (loading) {
		allAlerts = <Spinner />;
	} else if (alerts.length === 0) {
		allAlerts = (
			<h2 style={{ color: 'red', textAlign: 'center' }}>
				There are no alerts
			</h2>
		);
	} else {
		currentAlerts = getCurrentAlerts(currentPage, ALARMS_PER_PAGE, alerts);
		allAlerts = (
			<AlertsContainer
				alerts={currentAlerts}
				paginate={paginate}
				currentPage={currentPage}
				lastPage={Math.ceil(alerts.length / ALARMS_PER_PAGE)}
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
			<div className={classes.AlertFinder}>
				<Input
					elementType='input'
					value={server}
					label='Server'
					changed={(event) => setServer(event.target.value)}
				/>
				<Input
					elementType='input'
					value={description}
					label='Description'
					changed={(event) => setDescription(event.target.value)}
				/>
				<Button text='Search' clicked={searchAlertsHandler} />
			</div>
			{errorResponse ? errorResponse : allAlerts}
		</Fragment>
	);
};

export default AlertFinder;
