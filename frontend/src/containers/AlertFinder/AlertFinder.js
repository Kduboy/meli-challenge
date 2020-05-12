import React, { Fragment, useState, useEffect } from 'react';

import AlertsContainer from '../../components/AlertsContainer/AlertsContainer';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../config/axios/alerts';
import classes from './AlertFinder.module.css';

const AlertFinder = () => {
	const [alerts, setAlerts] = useState([]);
	const [server, setServer] = useState('');
	const [description, setDescription] = useState('');
	const [currentPage, setCurrentPage] = useState(0);
	const [maxAlerts, setMaxAlerts] = useState(0);
	const [loading, setLoading] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [error, setError] = useState(null);

	const ALERTS_PER_PAGE = 4;

	useEffect(() => {
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
				`/alerts?offset=${currentPage * ALERTS_PER_PAGE}
				&limit=${ALERTS_PER_PAGE}&${
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
	}, [currentPage, isSending]);

	const searchAlertsHandler = () => {
		setIsSending((prevState) => !prevState);
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
				lastPage={Math.ceil(maxAlerts / ALERTS_PER_PAGE - 1)}
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
