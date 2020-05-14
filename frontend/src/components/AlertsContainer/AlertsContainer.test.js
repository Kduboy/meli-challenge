import React from 'react';
import { shallow } from 'enzyme';

import AlertsContainer from './AlertsContainer';
import { findByTestAttr, checkProps } from '../../../test/utils';

const defaultProps = {
	alerts: [],
	paginate: jest.fn(),
	currentPage: 0,
	lastPage: 0,
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };

	return shallow(<AlertsContainer {...setupProps} />);
};

describe('<AlertsContainer />', () => {
	test('Should render without errors', () => {
		const wrapper = setup();
		const component = findByTestAttr(wrapper, 'component-alerts-container');

		expect(component).toHaveLength(1);
		expect(component.hasClass('Alerts')).toBeTruthy();
	});

	test('Should render AlertContainers if there are alerts', () => {
		const alerts = [
			{
				id: 1,
				server: 1,
				description: 'downtime',
				createdAt: '2020-05-11T22:42:57.000Z',
				updatedAt: '2020-05-10T22:42:57.000Z',
				Server: {
					name: 'Server1',
				},
			},
			{
				id: 2,
				server: 2,
				description: 'no-pingeable',
				createdAt: '2020-05-10T22:42:57.000Z',
				updatedAt: '2020-05-10T22:42:57.000Z',
				Server: {
					name: 'Server2',
				},
			},
		];
		const wrapper = setup({ alerts });
		const alertContainerComponent = findByTestAttr(
			wrapper,
			'component-alert-container'
		);

		expect(alertContainerComponent.length).toEqual(alerts.length);
	});

	test('Should not render AlertContainers if there are no alerts', () => {
		const wrapper = setup();
		const alertContainerComponent = findByTestAttr(
			wrapper,
			'component-alert-container'
		);

		expect(alertContainerComponent).toHaveLength(0);
	});

	test('Should render pagination component', () => {
		const wrapper = setup();
		const paginationComponent = findByTestAttr(
			wrapper,
			'component-pagination'
		);

		expect(paginationComponent).toHaveLength(1);
	});

	test('Should not throw warning with expected props', () => {
		checkProps(AlertsContainer, defaultProps);
	});
});
