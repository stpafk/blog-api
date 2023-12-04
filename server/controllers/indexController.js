const {body, validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwtHandler = require('../middleware/jwtHandler')

exports.register_get = async function(req, res, next) {
    return res.sendStatus(200);
}

exports.register_post = [
    
    body("username").trim()
    .isLength({min: 2, max: 50})
    .withMessage("Invalid first name.")
    .escape(),

    body("email")
    .custom(async value => {
        const userEmail = await User.find({email: value});
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

        if (userEmail.length > 0) {
            throw new Error("Email already in use.");
        };

        if (!emailRegex.test(value)) {
            throw new Error("Invalid email.");
        };
    }),
    
    body("password")
    .isLength({min: 6})
    .withMessage("Password length should be bigger than 6.")
    .escape(),
    
    body("password_confirm")
    .custom((value, {req}) => {
        return value === req.body.password;
    })
    .withMessage("Password do not match.")
    .escape(),

    async function(req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
                return res.status(400).json({
                errors: errors.array(),
            });
        };

        const password = await bcrypt.hash(req.body.password, 12);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: password,
        });

        await user.save();
        const token = jwtHandler.get_token(user._id)
        return res.status(200).json({
            id: user._id,
            token: 'Bearer ' + token 
        });
    }
]

