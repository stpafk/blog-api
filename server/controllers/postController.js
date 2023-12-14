const Post = require('../models/posts');
require('dotenv').config
const {validationResult, body, param} = require('express-validator');
const Message = require('../models/messages');

exports.get_index = async function (req, res, next) {

    if (req.userId === process.env.SUPERUSER) {
        const posts = await Post.find({}).sort({time_stamp: -1}).exec()

        res.status(200).json({
            posts
        })
    }

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

    const messages = await Message.find({post: post._id})
    .populate({path: 'username', select: '_id username email'})
    .sort({time_stamp: -1})
    .exec();

    res.status(200).json({
        "header": {
            "title": post.title,
            "time_stamp": post.formatted_date,
        },
        "content": post.content,
        "messages": {
            messages
        }
    })
}

exports.get_create = async function(req, res, next) {

    if (req.userId !== process.env.SUPERUSER) {
        return res.sendStatus(403)
    }

    res.status(201).json({
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
        console.log('arrives here')
        if (req.userId !== process.env.SUPERUSER) {
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

    res.status(201).json({
        success: true,
        postId: post._id
    })

}];

exports.get_delete = async function(req, res, next) {

    if (req.userId !== process.env.SUPERUSER || !req.userId) {
        return res.sendStatus(403);
    }

    const post = await Post.findById(req.params.id);

    if (post === null) {
        res.status(404).json({
            message: "404 Page Not Found",
        })
        return;
    }

    res.status(200).json({
        "message": "success",
        "post": {
            post,
        }
    });

}

exports.delete_delete = async function (req, res, next) {

    if (req.userId !== process.env.SUPERUSER) {
        return res.sendStatus(403)
    }

    await Message.deleteMany({post: req.params.id})
    await Post.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
}

exports.get_update = async function(req, res, next) {

    if (req.userId !== process.env.SUPERUSER || !req.userId) {
        return res.sendStatus(403);
    }

    const post = await Post.findById(req.params.id);

    if (post === null) {
        res.status(404).json({
            "message": "404 Page Not Found",
        })
        return;
    }

    res.status(200).json({
        "message": "success",
        "post": {
            post,
        }
    });
    
};

exports.put_update = [

    param("id").custom(async value => {
        const post = await Post.findById(value);
        if (post === null) {
            throw new Error("Invalid ID")
        }
    }),
    body("title")
    .notEmpty()
    .escape(),

    body("content")
    .notEmpty()
    .escape(),

    body("is_uploaded")
    .escape(),
    
    async function(req, res, next) {

        if (req.userId !== process.env.SUPERUSER) {
            return res.sendStatus(403);
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
            is_uploaded: req.body.is_uploaded,
            _id: req.params.id
        });

        await Post.findByIdAndUpdate(req.params.id, post, {});

        res.status(201).json({
            "postId": post._id
        })      
    }
]