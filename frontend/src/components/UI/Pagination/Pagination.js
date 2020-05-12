import React from 'react';

import Button from '../Button/Button';

import classes from './Pagination.module.css';

const Pagination = (props) => {
	const prev = () => {
		props.paginate(props.currentPage - 1);
	};

	const next = () => {
		props.paginate(props.currentPage + 1);
	};

	return (
		<div className={classes.Pagination}>
			<Button
				text='<<'
				clicked={prev}
				disabled={props.currentPage === 1 ? true : false}
			/>
			<Button
				text='>>'
				clicked={next}
				disabled={props.currentPage === props.lastPage ? true : false}
			/>
		</div>
	);
};

export default Pagination;
