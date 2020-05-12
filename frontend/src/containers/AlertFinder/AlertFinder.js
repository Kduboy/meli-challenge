import React, { Fragment, useState, useEffect } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../config/axios/alerts';
import classes from './AlertFinder.module.css';
import AlertsContainer from '../../components/AlertsContainer/AlertsContainer';

const AlertFinder = () => {
	const [server, setServer] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [alerts, setAlerts] = useState([]);

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

	const searchAlarmsHandler = () => {
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
			})
			.catch((error) => {
				setLoading(false);
				setError('Cannot get alarms!!!');
			});
	};

	let response = <Spinner />;
	let errorResponse = null;

	if (alerts.length) {
		response = <AlertsContainer alerts={alerts} />;
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
				<Button text='Search' clicked={searchAlarmsHandler} />
			</div>
			{errorResponse ? errorResponse : response}
		</Fragment>
	);
};

export default AlertFinder;
