import React from 'react';
import PropTypes from 'prop-types';

import classes from './AlertContainer.module.css';

const alertContainer = (props) => (
	<div className={classes.Alert}>
		<div>
			<p>{props.server}</p>
			<p>{props.createdAt}</p>
		</div>
		<p>{props.description}</p>
	</div>
);

alertContainer.propTypes = {
	server: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default alertContainer;
