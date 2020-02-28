const db = require('./../database/dbConfig.js');

module.exports = {
	add,
	findById,
	findBy
};

async function add(user) {
	const [id] = await db('users').insert(user);
	console.log('id', id);
	return findById(id);
}

function findById(id) {
	return db('users')
		.where({ id })
		.first();
}

function findBy(filter) {
	console.log('filter', filter);
	return db('users').where(filter);
}
