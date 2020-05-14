import React from 'react';
import { shallow } from 'enzyme';

import AlertContainer from './AlertContainer';
import { findByTestAttr, checkProps } from '../../../../test/utils';

const defaultProps = {
	server: '',
	createdAt: '',
	description: '',
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<AlertContainer {...setupProps} />);
};

describe('<AlertContainer />', () => {
	test('Should render without errors', () => {
		const wrapper = setup();
		const component = findByTestAttr(wrapper, 'component-alert-container');

		expect(component.length).toBe(1);
		expect(component.hasClass('Alert')).toBeTruthy();
	});

	test('Should render alert content with no errors', () => {
		const wrapper = setup();
		const divNode = findByTestAttr(wrapper, 'header-alert');
		const descriptionNode = findByTestAttr(
			wrapper,
			'description-paragraph'
		);

		expect(divNode).toHaveLength(1);
		expect(divNode.find('p')).toHaveLength(2);
		expect(descriptionNode).toHaveLength(1);
	});

	test('Should render paragraphs with props', () => {
		const wrapper = setup({
			server: 'Server1',
			createdAt: '2020-05-10T22:42:57.000Z',
			description: 'no-pingeable',
		});
		const serverParagraph = findByTestAttr(wrapper, 'server-paragraph');
		const createdAtParagraph = findByTestAttr(
			wrapper,
			'createdAt-paragraph'
		);
		const descriptionParagraph = findByTestAttr(
			wrapper,
			'description-paragraph'
		);

		expect(serverParagraph).toHaveLength(1);
		expect(serverParagraph.text()).toEqual('Server1');
		expect(createdAtParagraph).toHaveLength(1);
		expect(createdAtParagraph.text()).toEqual('2020-05-10T22:42:57.000Z');
		expect(descriptionParagraph).toHaveLength(1);
		expect(descriptionParagraph.text()).toEqual('no-pingeable');
	});
});
