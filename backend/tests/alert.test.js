const request = require('supertest');

const app = require('../src/app');
const { Alert } = require('../src/models');
const { setupData, destroyAlerts } = require('./fixtures/setup');

beforeEach(setupData);

describe('POST alerts', () => {
	/**
	 * Request
	 * @param server {string}
	 * @param description {string}
	 * @param created_at {string}
	 * @param server_type {string}
	 */

	test('Should create new alert', async () => {
		const response = await request(app)
			.post('/alerts')
			.send({
				server: 'Server3',
				description: 'disk-capacity warning',
				created_at: '23-59-01-22-03-2020',
				server_type: 'onprem',
			})
			.expect(201);

		const alert = await Alert.findByPk(response.body.id);

		expect(alert).not.toBeNull();
		expect(alert instanceof Alert).toBeTruthy();
	});

	test("Should not create new alert if server doesn't exists", async () => {
		const response = await request(app)
			.post('/alerts')
			.send({
				server: 'Server2',
				description: 'disk-capacity warning',
				created_at: '12-59-01-22-04-2018',
				server_type: 'onprem',
			})
			.expect(403);

		expect(response.body).not.toBeNull();
		expect(response.body.error).toBe('Server not found');
	});

	test("Should not create new alert if some request.body parameter doesn't exists", async () => {
		await request(app)
			.post('/alerts')
			.send({
				server: 'Server2',
				created_at: '12-59-01-22-04-2018',
				server_type: 'onprem',
			})
			.expect(400);
	});
});

describe('GET alarms', () => {
	test('Should get all the alarms', async () => {
		const response = await request(app).get('/alerts').send().expect(200);

		expect(response.body instanceof Array).toBeTruthy();
		expect(response.body).toHaveLength(10);
	});

	test('Should get an empty array if there is no alarms', async () => {
		destroyAlerts();

		const response = await request(app).get('/alerts').send().expect(200);

		expect(response.body instanceof Array).toBeTruthy();
		expect(response.body).toHaveLength(0);
	});
});

describe('GET alarms with query params', () => {
	test('Should get alarms by server name', async () => {
		const response = await request(app)
			.get('/alerts?server=Server2')
			.send()
			.expect(200);

		const alerts = response.body.filter(
			(alert) => alert.Server.name !== 'Server2'
		);

		expect(response.body instanceof Array).toBeTruthy();
		expect(alerts).toHaveLength(0);
	});

	test('Should get alarms by description', async () => {
		const response = await request(app)
			.get('/alerts?description=downtime')
			.send()
			.expect(200);

		const alerts = response.body.filter(
			(alert) => alert.description !== 'downtime'
		);

		expect(response.body instanceof Array).toBeTruthy();
		expect(alerts).toHaveLength(0);
	});

	test('Should get alarms by server name and description', async () => {
		const response = await request(app)
			.get('/alerts?server=Server2&description=downtime')
			.send()
			.expect(200);

		const alerts = response.body.filter(
			(alert) =>
				alert.Server.name !== 'Server2' &&
				alert.description !== 'downtime'
		);

		expect(response.body instanceof Array).toBeTruthy();
		expect(alerts).toHaveLength(0);
	});

	test("Should get an empty array of alarms if server name or description doesn't match", async () => {
		const response = await request(app)
			.get('/alerts?server=Server2&description=no-pingeable')
			.send()
			.expect(200);

		expect(response.body instanceof Array).toBeTruthy();
		expect(response.body).toHaveLength(0);
	});
});

describe('GET statistics', () => {
	test('Should get exactly 3 objects with information about the servers who send the most amount of alarms', async () => {
		const response = await request(app)
			.get('/alerts/statistics')
			.send()
			.expect(200);

		expect(response.body).toHaveLength(3);
	});

	test('Should get an empty array if there is no alarms', async () => {
		destroyAlerts();

		const response = await request(app)
			.get('/alerts/statistics')
			.send()
			.expect(200);

		expect(response.body instanceof Array).toBeTruthy();
		expect(response.body).toHaveLength(0);
	});
});
