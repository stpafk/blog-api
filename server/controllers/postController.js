const Post = require('../models/posts');
require('dotenv').config
const {validationResult, body} = require('express-validator');

exports.get_index = async function (req, res, next) {
    const posts = await Post.find({is_uploaded: true})
    .sort({time_stamp: -1})
    .exec();

    res.status(200).json({
        posts
    })
}

exports.get_post = async function(req, res, next) {
    const post = await Post.findById(req.params.id);

    if (post === null || !post.is_uploaded) {
        res.status(404).json({
            "message": "404 Page Not Found",
        })
        return;
    }

    res.status(200).json({
        "header": {
            "title": post.title,
            "time_stamp": post.formatted_date,
        },
        "content": post.content,
    })
}

exports.get_create = async function(req, res, next) {

    if (req.body.id !== process.env.SUPERUSER) {
        return res.status(403)
    }

    res.status(200).json({
        "message": "success"
    });

};

exports.post_create = [

    body("title")
    .notEmpty()
    .escape(),

    body("content")
    .notEmpty()
    .escape(),

    body("is_uploaded")
    .escape(),
    
    async function(req, res, next) {

        if (req.body.id !== process.env.SUPERUSER) {
            return res.status(403);
        };

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
            errors: errors.array(),
        });
    };

    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        time_stamp: new Date(),
        is_uploaded: req.body.is_uploaded
    });

    await post.save();

    res.status(200).json({
        "postId": post._id
    })

}];