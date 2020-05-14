import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import classes from './Pagination.module.css';

const pagination = (props) => {
	return (
		<div data-test='component-pagination' className={classes.Pagination}>
			<Button
				data-test='button-first'
				text='First'
				clicked={() => props.paginate(0)}
				disabled={props.currentPage === 0}
			/>
			<Button
				data-test='button-prev'
				text='<<'
				clicked={() => props.paginate(props.currentPage - 1)}
				disabled={props.currentPage === 0}
			/>
			<Button
				data-test='button-next'
				text='>>'
				clicked={() => props.paginate(props.currentPage + 1)}
				disabled={props.currentPage === props.lastPage}
			/>
			<Button
				data-test='button-last'
				text='Last'
				clicked={() => props.paginate(props.lastPage)}
				disabled={props.currentPage === props.lastPage}
			/>
		</div>
	);
};

pagination.propTypes = {
	paginate: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
};

export default pagination;
