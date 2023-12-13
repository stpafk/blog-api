const Post = require('../models/posts');
const Message = require('../models/messages');
const User = require('../models/users');
require('dotenv').config
const {validationResult, body} = require('express-validator');

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
            Post.findById(postId).exec(),
            User.findById(req.userId).exec(),
        ]);

        if (post === null) {
            return res.sendStatus(404);
        };

        if (user === null) {
            return res.sendStatus(403);
        }

        const message = new Message({
            post: post._id,
            username: user._id,
            content: req.body.content,
            time_stamp: new Date(),
        });
        message.populate("username")
        await message.save();
        res.status(201).json({
            success: true,
            "message": {
                message,
            }
        });
    }
]

exports.delete_message = async function(req, res, next) {

    const message = await Message
    .findById(req.params.messageId)
    .populate("username")
    .exec();

    if (message === null) {
        return res.status(404).json({
            message: "Page not found"
        })
    }

    const [userId, superUser] = [message.username._id.toString(), process.env.SUPERUSER];
    
    if (req.userId !== userId && req.userId !== superUser) {
        return res.sendStatus(403);
    };

    await Message.findByIdAndDelete(message._id);
    return res.status(201).json({
        success: true,
        message: "Message deleted."
    })

}