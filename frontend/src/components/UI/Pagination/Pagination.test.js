import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';
import { findByTestAttr, checkProps } from '../../../../test/utils';

const defaultProps = {
	paginate: jest.fn(),
	currentPage: 0,
	lastPage: 0,
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };

	return shallow(<Pagination {...setupProps} />);
};

describe('<Pagination />', () => {
	test('Should render with no errors', () => {
		const wrapper = setup();
		const component = findByTestAttr(wrapper, 'component-pagination');

		expect(component).toHaveLength(1);
		expect(component.hasClass('Pagination')).toBeTruthy();
	});

	test('Should not throw warning with expected props', () => {
		checkProps(Pagination, defaultProps);
	});

	describe('First Button', () => {
		test('Should be disabled if props.currentPage is 0', () => {
			const wrapper = setup();
			const firstButton = findByTestAttr(wrapper, 'button-first');

			expect(firstButton.prop('disabled')).toBeTruthy();
		});

		test('Should be not disabled if props.currentPage is not 0', () => {
			const wrapper = setup({
				currentPage: 1,
			});
			const firstButton = findByTestAttr(wrapper, 'button-first');

			expect(firstButton.prop('disabled')).toBeFalsy();
		});
	});

	describe('Prev Button', () => {
		test('Should be disabled if props.currentPage is 0', () => {
			const wrapper = setup();
			const prevButton = findByTestAttr(wrapper, 'button-prev');

			expect(prevButton.prop('disabled')).toBeTruthy();
		});

		test('Should be not disabled if props.currentPage is not 0', () => {
			const wrapper = setup({
				currentPage: 1,
			});
			const prevButton = findByTestAttr(wrapper, 'button-prev');

			expect(prevButton.prop('disabled')).toBeFalsy();
		});
	});

	describe('Next Button', () => {
		test('Should be disabled if props.currentPage is equal to props.lastPage', () => {
			const wrapper = setup();
			const nextButton = findByTestAttr(wrapper, 'button-next');

			expect(nextButton.prop('disabled')).toBeTruthy();
		});

		test('Should be not disabled if props.currentPage is not equal to props.lastPage', () => {
			const wrapper = setup({
				currentPage: 1,
			});
			const nextButton = findByTestAttr(wrapper, 'button-next');

			expect(nextButton.prop('disabled')).toBeFalsy();
		});
	});

	describe('Last Button', () => {
		test('Should be disabled if props.currentPage is equal to props.lastPage', () => {
			const wrapper = setup();
			const lastButton = findByTestAttr(wrapper, 'button-last');

			expect(lastButton.prop('disabled')).toBeTruthy();
		});

		test('Should be not disabled if props.currentPage is not equal to props.lastPage', () => {
			const wrapper = setup({
				currentPage: 1,
			});
			const lastButton = findByTestAttr(wrapper, 'button-last');

			expect(lastButton.prop('disabled')).toBeFalsy();
		});
	});
});
