const request = require('supertest');

const server = require('../api/server.js');

describe('jokes router', function() {
	it('should run the tests', function() {
		expect(true).toBe(true);
	});

	describe('GET /api/jokes', function() {
		it('should return TEXT formatted body', function() {
			return request(server)
				.get('/api/jokes')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('no credentials', function() {
			return request(server)
				.get('/api/jokes')
				.then(res => {
					expect(res.status).toBe(400);
					expect(res.body.message).toBe('No credentials provided');
				});
		});

		/* 		it('should return an array', async () => {
			const response = await request(server)
				.post('/api/auth/login')
				.send({
					username: 'kiika',
					password: 'pass'
				});
			console.log('Here', response.body.token);

			const token = JSON.stringify(response.body.token);

			const response1 = await request(server)
				.get('/api/jokes')
				.set('Authorization', token)
				.then(res => {
					console.log('Here', res.body);
					expect(Array.isArray(res.body)).toBe(true);
				});
		}); */
	});
});
