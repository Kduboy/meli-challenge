import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
	return (
		<button
			className={[classes.Btn, classes.BtnPrimary].join(' ')}
			onClick={props.clicked}
			disabled={props.disabled ? props.disabled : null}
		>
			{props.text}
		</button>
	);
};

export default button;
