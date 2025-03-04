const User = require('../models/user.model');

class UserService {
    static async getAllUsers(query) {
        let params = {
            offset: 1,
            limit: 10
        };
        if (query != undefined && query.pageNum && query.pageSize) {
            params.offset = query.pageNum;
            params.limit = query.pageSize;
        }
        try {
            return await User.findAll({
                offset: params.offset,
                limit: params.limit
            });
        } catch (err) {
            throw err;
        }
    }

    static async getUserById(id) {
        try {
            return await User.findByPk(id);
        } catch (err) {
            throw err;
        }
    }

    static async createUser(userData) {
        try {
            return await User.create(userData);
        } catch (err) {
            throw err;
        }
    }

    static async updateUser(id, userData) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            return await user.update(userData);
        } catch (err) {
            throw err;
        }
    }

    static async deleteUser(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            return await user.destroy();
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserService;
