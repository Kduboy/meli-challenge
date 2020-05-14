import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { findByTestAttr, checkProps } from '../../../../test/utils';

const defaultProps = {
	elementType: '',
	value: '',
	changed: jest.fn(),
	label: '',
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };

	return shallow(<Input {...setupProps} />);
};

describe('<Input />', () => {
	test('Should render with no errors', () => {
		const wrapper = setup();
		const inputBox = findByTestAttr(wrapper, 'component-input');
		const labelNode = findByTestAttr(wrapper, 'label-text');

		expect(inputBox).toHaveLength(1);
		expect(labelNode).toHaveLength(1);
		expect(inputBox.hasClass('InputElement')).toBeTruthy();
		expect(labelNode.hasClass('Label')).toBeTruthy();
	});

	test('Should not throw warning with expected props', () => {
		checkProps(Input, defaultProps);
	});

	test('Should render label text by props', () => {
		const wrapper = setup({
			label: 'Server',
		});
		const labelNode = findByTestAttr(wrapper, 'label-text');

		expect(labelNode.text()).toEqual('Server');
	});

	test('Should render input type if prop.elementType is input', () => {
		const wrapper = setup({
			elementType: 'input',
		});
		const inputBox = findByTestAttr(wrapper, 'component-input');

		expect(inputBox.type()).toEqual('input');
	});
});
