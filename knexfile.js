module.exports = {
	development: {
		client: 'sqlite3',
		connection: { filename: './database/auth.db3' },
		useNullAsDefault: true,
		migrations: {
			directory: './database/migrations',
			tableName: 'dbmigrations'
		},
		seeds: { directory: './database/seeds' }
	},

	testing: {
		client: 'pg',
		connection: 'postgresql://localhost/testing',
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './database/migrations',
			tableName: 'knex_migrations'
		}
	}
};
