import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';
import { findByTestAttr, checkProps } from '../../../test/utils';

const setup = (props = {}) => {
	return shallow(<Layout {...props} />);
};

describe('<Layout />', () => {
	test('Should render without errors', () => {
		const wrapper = setup({
			children: {},
		});
		const toolbarComponent = findByTestAttr(wrapper, 'component-toolbar');
		const mainNode = findByTestAttr(wrapper, 'main-content');

		expect(toolbarComponent).toHaveLength(1);
		expect(mainNode).toHaveLength(1);
		expect(mainNode.hasClass('Content')).toBeTruthy();
	});

	test('Should not throw warnings with expected props errors', () => {
		checkProps(Layout, {
			children: {},
		});
	});
});
