const jwt = require('jsonwebtoken');
require('dotenv').config()

var secret = process.env.SECRET;

exports.get_token = function(id) {
    return jwt.sign({id: id}, secret);
};

exports.validate_token = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.sendStatus(403);
    }

    try {
        const data = jwt.verify(token, process.env.SECRET);
        req.userId = data.id;
        return next();
    } catch {
        return res.sendStatus(403)
    }
};