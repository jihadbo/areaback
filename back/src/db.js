const {Pool} = require('pg');

module.exports = new Pool({
  max: 10,
  USER: process.env.POSTGRES_USER,
  GHOST: process.env.POSTGRES_GHOST,
  PASSWORD: process.env.POSTGRES_PASSWORD,
  DB: process.env.POSTGRES_DB,
  PORT: process.env.PGPORT,
  connectionString: process.env.DATABASE_URL
});
