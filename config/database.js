const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hepsisurda',
  password: '4246',
  port: 5432,
});

module.exports = pool;