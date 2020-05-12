import React from 'react';

import classes from './AlertContainer.module.css';

const AlertContainer = (props) => (
	<div className={classes.Alert}>
		<div>
			<p>{props.server}</p>
			<p>{props.createdAt}</p>
		</div>
		<p>{props.description}</p>
	</div>
);

export default AlertContainer;
