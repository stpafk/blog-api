var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController');
const jwtHandler = require('../middleware/jwtHandler');

router.get('/:id', postController.get_post)

router.get('/create', 
    jwtHandler.header_token, 
    jwtHandler.validate_token, 
    postController.get_create
);

router.post('/create',
    jwtHandler.header_token,
    jwtHandler.validate_token,
    postController.post_create,
)

router.get('/:id/delete',
    jwtHandler.header_token,
    jwtHandler.validate_token,
    postController.get_delete,
)

router.delete('/:id/delete',
    jwtHandler.header_token,
    jwtHandler.validate_token,
    postController.delete_delete,
)

module.exports = router;