const pgConnection = process.env.DATABASE_URL || 'postgres://postgres:1790@localhost:5432/budget';

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
    pool: { afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
  staging: {
    client: 'sqlite3',
    connection: {filename: './database/test_auth.db3' },
    useNullAsDefault: true,
    migrations: { directory: "./database/migrations", },
    seeds: { directory: "./database/seeds", },
    pool: { afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: { directory: "./database/migrations", },
    seeds: { directory: "./database/seeds", },
  },
};
