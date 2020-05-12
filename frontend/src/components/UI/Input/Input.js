import React, { Fragment } from 'react';

import classes from './Input.module.css';

const input = (props) => {
	let inputElement = null;

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={classes.InputElement}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		default:
			inputElement = (
				<input
					className={classes.InputElement}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
	}

	return (
		<Fragment>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
		</Fragment>
	);
};

export default input;
