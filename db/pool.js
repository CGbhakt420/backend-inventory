import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
  user: 'sanchit',
  host: 'localhost',
  database: 'store_inventory',
  password: '420hcg420',
  port: 5432  // Default to 5432 if DB_PORT is not set
});

export default pool;
