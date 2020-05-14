import React from 'react';
import PropTypes from 'prop-types';

import classes from './AlertContainer.module.css';

const alertContainer = (props) => (
	<div data-test='component-alert-container' className={classes.Alert}>
		<div data-test='header-alert'>
			<p data-test='server-paragraph'>{props.server}</p>
			<p data-test='createdAt-paragraph'>{props.createdAt}</p>
		</div>
		<p data-test='description-paragraph'>{props.description}</p>
	</div>
);

alertContainer.propTypes = {
	server: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default alertContainer;
