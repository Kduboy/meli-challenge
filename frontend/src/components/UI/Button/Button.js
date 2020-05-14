import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const button = (props) => {
	return (
		<button
			data-test='component-button'
			className={[classes.Btn, classes.BtnPrimary].join(' ')}
			onClick={props.clicked}
			disabled={props.disabled}
		>
			{props.text}
		</button>
	);
};

button.propTypes = {
	clicked: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	text: PropTypes.string.isRequired,
};

export default button;
