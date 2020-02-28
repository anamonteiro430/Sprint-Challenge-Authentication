const request = require('supertest');
const server = require('../api/server.js');
const Model = require('./../auth/helpers');

describe('auth router', function() {
	it('sanity check', function() {
		expect(true).toBe(true);
	});

	describe('POST /api/auth/register', function() {
		it('Should save user to database', async done => {
			const res = await request(server)
				.post('/api/auth/register')
				.send({
					username: 'kiika',
					password: 'pass'
				});

			const user = await Model.findBy({ username: 'kiika' });
			done();
		});

		//Change
		it('should return 201 created', async done => {
			const res = await request(server)
				.post('/api/auth/register')
				.send({
					username: 'aa',
					password: 'pass'
				})
				.expect('Content-Type', /json/)
				.expect(201);
			done();
		});
	});

	describe('POST /api/auth/login', function() {
		it('should return 200 OK', async done => {
			const res = await request(server)
				.post('/api/auth/login')
				.send({
					username: 'kiika',
					password: 'pass'
				})
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200);
			done();
		});

		it('succeeds with correct credentials', async () => {
			const res = await request(server)
				.post('/api/auth/login')
				.send({
					username: 'kiika',
					password: 'pass'
				})
				.expect(200);
			expect(res.body.message).toBe(`Welcome kiika!`);
		});
	});
});
