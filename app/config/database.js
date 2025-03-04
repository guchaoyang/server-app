const { Pool } = require('pg');
require('dotenv').config();

const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

// 创建连接池
const pool = new Pool(dbConfig);

// 测试数据库连接
pool.on('error', (err) => {
  console.error('意外的断开，等待重新连接…', err);
  process.exit(1);
});

module.exports = pool;
