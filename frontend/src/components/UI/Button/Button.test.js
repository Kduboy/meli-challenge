import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';
import { findByTestAttr, checkProps } from '../../../../test/utils';

const defaultProps = {
	clicked: jest.fn(),
	disabled: false,
	text: '',
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };

	return shallow(<Button {...setupProps} />);
};

describe('<Button />', () => {
	test('Should render with no errors', () => {
		const wrapper = setup();
		const component = findByTestAttr(wrapper, 'component-button');

		expect(component).toHaveLength(1);
		expect(component.hasClass('Btn')).toBeTruthy();
		expect(component.hasClass('BtnPrimary')).toBeTruthy();
	});

	test('Should not throw warning with expected props', () => {
		checkProps(Button, defaultProps);
	});

	test('Should disabled button if disabled prop is true', () => {
		const wrapper = setup({
			disabled: true,
		});
		const component = findByTestAttr(wrapper, 'component-button');

		expect(component.prop('disabled')).toBeTruthy();
	});
});
