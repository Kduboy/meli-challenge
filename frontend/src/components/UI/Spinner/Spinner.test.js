import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';
import { findByTestAttr } from '../../../../test/utils';

const setup = () => {
	return shallow(<Spinner />);
};

describe('<Spinner />', () => {
	test('Should render with no errors', () => {
		const wrapper = setup();
		const component = findByTestAttr(wrapper, 'component-spinner');

		expect(component).toHaveLength(1);
	});
});
