const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.get_token = function(id) {
    const secret = process.env.SECRET;
    return jwt.sign({id: id}, secret);
};