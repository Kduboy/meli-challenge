import React from 'react';
import { shallow } from 'enzyme';

import Toolbar from './Toolbar';
import { findByTestAttr } from '../../../../test/utils';

const setup = () => {
	return shallow(<Toolbar />);
};

describe('<Toolbar />', () => {
	test('Should render with no errors', () => {
		const wrapper = setup();
		const component = findByTestAttr(wrapper, 'component-toolbar');

		expect(component).toHaveLength(1);
	});

	test('Should render title', () => {
		const wrapper = setup();
		const h1Node = findByTestAttr(wrapper, 'header-title');

		expect(h1Node).toHaveLength(1);
		expect(h1Node.text()).toEqual('Mercado Libre Challenge');
	});
});
