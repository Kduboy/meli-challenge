import React from 'react';

import Button from '../Button/Button';

import classes from './Pagination.module.css';

const Pagination = (props) => {
	return (
		<div className={classes.Pagination}>
			<Button
				text='First'
				clicked={() => props.paginate(0)}
				disabled={props.currentPage === 0}
			/>
			<Button
				text='<<'
				clicked={() => props.paginate(props.currentPage - 1)}
				disabled={props.currentPage === 0}
			/>
			<Button
				text='>>'
				clicked={() => props.paginate(props.currentPage + 1)}
				disabled={props.currentPage === props.lastPage}
			/>
			<Button
				text='Last'
				clicked={() => props.paginate(props.lastPage)}
				disabled={props.currentPage === props.lastPage}
			/>
		</div>
	);
};

export default Pagination;
