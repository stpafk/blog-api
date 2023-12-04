const jwt = require('jsonwebtoken');
require('dotenv').config()

var secret = process.env.SECRET;

exports.get_token = function(id) {
    return jwt.sign({id: id}, secret);
};

exports.header_token = function(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1];
        req.token = token;

        next();
    }

    return res.status(403);
};

exports.validate_token = async (req, res, next) => {
    jwt.verify(req.token, secret, async (err) => {
        if (err) {
            return res.status(403).json({
                "alert": "Access Denied."
            });
        }

        next()
    });
};