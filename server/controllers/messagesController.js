const Post = require('../models/posts');
const Message = require('../models/messages');
const User = require('../models/users');
require('dotenv').config
const {validationResult, body} = require('express-validator');
const { isValidObjectId } = require('mongoose');

exports.post_message = [

    body("content").notEmpty().escape(),

    async function(req, res, next) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(403).json({
                errors
            })
        }

        const postId = req.params.id;
        const [post, user] = await Promise.all([
            Post.findById(postId).exec().catch(err => console.log(err)),
            User.findById(req.userId).exec(),
        ]);

        if (post.length === 0) {
            return res.sendStatus(404);
        };

        if (user.length === 0) {
            return res.sendStatus(403);
        }

        const message = new Message({
            post: post._id,
            username: user._id,
            content: req.body.content,
            time_stamp: new Date(),
        });

        await message.save();
        res.status(201).json({
            "user": {
                user
            },
            "message": {
                message,
            }
        });
    }
]

exports.delete_message = async function(req, res, next) {

}