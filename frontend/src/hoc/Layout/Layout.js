import React, { Fragment } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

const layout = (props) => {
	return (
		<Fragment>
			<Toolbar />
			<main className={classes.Content}>{props.children}</main>
		</Fragment>
	);
};

export default layout;
