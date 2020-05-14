import React from 'react';

import classes from './Toolbar.module.css';

const toolbar = () => {
	return (
		<header data-test='component-toolbar' className={classes.Toolbar}>
			<h1 data-test='header-title'>Mercado Libre Challenge</h1>
		</header>
	);
};

export default toolbar;
