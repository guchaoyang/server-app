const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route');

const app = express();

// 中间件
app.use(bodyParser.json());

// 路由
app.use('/api/users', userRouter);

// 错误处理
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
