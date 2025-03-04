const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            useUTC: false, // 强制使用本地时间
        },
        logging: process.env.NODE_ENV === 'development' ? true : false,
    }
);

// 测试连接
// sequelize.authenticate()
//     .then(() => console.log('Connected to PostgreSQL'))
//     .catch(err => console.error('Connection error:', err));

// 测试数据库连接
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('成功连接到数据库！');
    } catch (error) {
        console.error('无法连接到数据库:', error);
        process.exit(1);
    }
}

testConnection();

module.exports = sequelize;
