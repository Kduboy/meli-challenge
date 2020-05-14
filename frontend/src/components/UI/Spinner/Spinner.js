import React from 'react';

import classes from './Spinner.module.css';

const spinner = () => (
	<div data-test='component-spinner' className={classes.Loader}></div>
);

export default spinner;
