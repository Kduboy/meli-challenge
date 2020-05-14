import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import AlertFinder from './AlertFinder';
import { findByTestAttr } from '../../../test/utils';

const setup = (props = {}) => {
	return mount(<AlertFinder {...props} />);
};

describe('<AlertFinder />', () => {
	test('Should render without error', () => {
		const wrapper = setup();
		const component = findByTestAttr(wrapper, 'component-alert-finder');

		expect(component).toHaveLength(1);
		expect(component.hasClass('AlertFinder')).toBeTruthy();
	});

	test('AlertsContainer is rendered on App mount', () => {});

	describe('Set component state', () => {
		const setState = jest.fn();
		const useStateMock = jest.spyOn(React, 'useState');
		useStateMock.mockImplementation((init) => [init, setState]);

		afterEach(() => {
			jest.clearAllMocks();
		});

		test('Should update state with value on input fields', () => {
			let wrapper = null;
			act(() => {
				wrapper = setup();
			});
			const inputServerComponent = findByTestAttr(
				wrapper,
				'input-server'
			);
			const inputDescriptionComponent = findByTestAttr(
				wrapper,
				'input-description'
			);

			inputServerComponent
				.find('[data-test="component-input"]')
				.props()
				.onChange({ target: { value: 'Server1' } });

			inputDescriptionComponent
				.find('[data-test="component-input"]')
				.props()
				.onChange({ target: { value: 'no-pingeable' } });

			expect(setState).toHaveBeenCalledTimes(2);
			expect(setState).toHaveBeenCalledWith('Server1');
			expect(setState).toHaveBeenCalledWith('no-pingeable');
		});

		test('Should update state when "Search" button is clicked', () => {
			let wrapper = null;
			act(() => {
				wrapper = setup();
			});
			const isSending = (prevState) => !prevState;
			let valueSended = isSending(false);
			const buttonSearchComponent = findByTestAttr(
				wrapper,
				'search-button'
			);

			buttonSearchComponent
				.find('[data-test="component-button"]')
				.props()
				.onClick();

			expect(setState).toHaveBeenCalledTimes(2);
			expect(setState).toHaveBeenCalledWith(0);
			expect(valueSended).toEqual(true);
		});
	});
});
