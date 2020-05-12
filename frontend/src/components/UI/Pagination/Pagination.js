import React from 'react';

import Button from '../Button/Button';

import classes from './Pagination.module.css';

const Pagination = (props) => {
	const prev = props.currentPage === 1 ? true : false;
	const next = props.currentPage === props.lastPage ? true : false;

	return (
		<div className={classes.Pagination}>
			<Button
				text='First'
				clicked={() => props.paginate(1)}
				disabled={prev}
			/>
			<Button
				text='<<'
				clicked={() => props.paginate(props.currentPage - 1)}
				disabled={prev}
			/>
			<Button
				text='>>'
				clicked={() => props.paginate(props.currentPage + 1)}
				disabled={next}
			/>
			<Button
				text='Last'
				clicked={() => props.paginate(props.lastPage)}
				disabled={next}
			/>
		</div>
	);
};

export default Pagination;
