const {body, validationResult } = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwtHandler = require('../middleware/jwtHandler');

exports.get_login = async function(req, res, next) {
    return res.sendStatus(200);
}

exports.post_login = [

    body("username")
    .notEmpty()
    .escape()
    .withMessage("Username should not be empty"),

    body("password")
    .notEmpty()
    .withMessage("Password should not be empty")
    .escape(),

    async function(req, res, next) {

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
            errors: errors.array(),
        });
    };

        const {username, password} = req.body;

        const user = await User.findOne({username: username}).exec();

        if (!user) {
            res.status(400).json({
                "error": {
                    "field": "username",
                    "message": "User does not exist."
                }
            });
            return;
        };

        const match = bcrypt.compareSync(password, user.password);

        if (!match) {
            res.status(400).json({
                "error": {
                    "field": "password",
                    "message": "Passwords do not match."
                }
            });
            return;
        };

        const token = jwtHandler.get_token(user._id);
        res.status(200).json({
            id: user._id,
            token: 'Bearer ' + token 
        });
    },
];


exports.register_get = async function(req, res, next) {
    return res.sendStatus(200);
}

exports.register_post = [

    body("username").trim()
    .isLength({min: 2, max: 50})
    .withMessage("Invalid first name."),

    body("username").custom(async value => {
        const username = await User.find({username: value});

        if (username.length > 0) {
            throw new Error("Username already in use.")
        }
    })
    .escape(),

    body("email")
    .custom(async value => {
        const userEmail = await User.find({email: value});
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

        if (value.length === 0) {
            throw new Error("Empty email.")
        }

        if (userEmail.length > 0) {
            throw new Error("Email already in use.");
        };

        if (!emailRegex.test(value)) {
            throw new Error("Invalid email.");
        };
    })
    .escape(),
    
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
];

exports.special = [
    
    jwtHandler.validate_token,

    async function(req, res, next) {

        const user = await User.find({_id: req.body.id}).exec();

        res.status(200).json({
            user
    });
}]