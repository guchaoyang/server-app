const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const responseFormatter = require('../utils/responseFormatter');

// 查询所有用户
router.get('/', async (req, res, next) => {
    try {
        const query = req.query;
        const users = await UserService.getAllUsers(query);
        res.status(200).json(responseFormatter.success(users));
    } catch (err) {
        next(err);
    }
});

// 根据ID查询用户
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await UserService.getUserById(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(responseFormatter.success(user));
        }
    } catch (err) {
        next(err);
    }
});

// 新增用户
router.post('/', async (req, res, next) => {
    try {
        const userData = req.body;
        const user = await UserService.createUser(userData);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
});

// 更新用户
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const userData = req.body;
        const user = await UserService.updateUser(id, userData);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

// 删除用户
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        await UserService.deleteUser(id);
        res.status(204).json();
    } catch (err) {
        next(err);
    }
});

module.exports = router;
