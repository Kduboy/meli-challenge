import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

input.propTypes = {
	elementType: PropTypes.string.isRequired,
	value: PropTypes.string,
	changed: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
};

export default input;
