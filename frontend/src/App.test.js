import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/utils';

const setup = () => {
	return shallow(<App />);
};

describe('<App />', () => {
	test('Should render without errors', () => {
		const wrapper = setup();
		const layoutComponent = findByTestAttr(wrapper, 'component-layout');
		const alertFinderComponent = findByTestAttr(
			wrapper,
			'component-alert-finder'
		);

		expect(layoutComponent).toHaveLength(1);
		expect(alertFinderComponent).toHaveLength(1);
	});
});
