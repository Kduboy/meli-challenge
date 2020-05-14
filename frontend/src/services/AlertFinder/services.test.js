import axios from '../../config/axios/alerts';
import moxios from 'moxios';

import { getAlarms } from './services';

describe('service to get alarms', () => {
	beforeEach(() => {
		moxios.install(axios);
	});
	afterEach(() => {
		moxios.uninstall();
	});

	test('Should get alarms from API', async () => {
		const data = {
			count: 21,
			rows: [
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
				{
					id: 4,
					server: 4,
					description: 'broken cooler fan',
					createdAt: '2020-05-10T22:42:57.000Z',
					updatedAt: '2020-05-10T22:42:57.000Z',
					Server: {
						name: 'Server4',
					},
				},
				{
					id: 3,
					server: 1,
					description: 'disk-capacity warning',
					createdAt: '2020-05-08T22:42:57.000Z',
					updatedAt: '2020-05-10T22:42:57.000Z',
					Server: {
						name: 'Server1',
					},
				},
			],
		};
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: data,
			});
		});

		const response = await getAlarms(null, null, 0);

		expect(response.status).toEqual(200);
		expect(response.data).toEqual(data);
	});

	test('Should get empty response if there are no alarms', async () => {
		const data = [];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: data,
			});
		});

		const response = await getAlarms(null, null, 0);

		expect(response.status).toEqual(200);
		expect(response.data).toEqual(data);
	});

	test('Should get error if API throw it', () => {
		const errResponse = {
			status: 500,
			response: {},
		};
		const response = getAlarms(null, null, 0);

		moxios.wait(async () => {
			const request = moxios.requests.mostRecent();
			request.reject(errResponse);

			response.catch((error) => {
				expect(error.status).toBe(500);
			});
		});
	});
});
