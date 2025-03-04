const responseFormatter = {
    success: (data, statusCode = 200, message = '成功') => {
        return {
            code: statusCode,
            message: message,
            data: data
        };
    },

    error: (message, statusCode = 500, data = null) => {
        return {
            code: statusCode,
            message: message,
            data: data
        };
    }
};

module.exports = responseFormatter;
