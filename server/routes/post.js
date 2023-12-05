var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController');
const messageController = require('../controllers/messagesController');
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
);

router.get('/:id/update', 
    jwtHandler.header_token,
    jwtHandler.validate_token,
    postController.get_update,
);

router.put('/:id/update', 
    jwtHandler.header_token,
    jwtHandler.validate_token,
    postController.put_update,
);

router.get('/:id/delete',
    jwtHandler.header_token,
    jwtHandler.validate_token,
    postController.get_delete,
);

router.delete('/:id/delete',
    jwtHandler.header_token,
    jwtHandler.validate_token,
    postController.delete_delete,
);

router.post('/:id/message', 
    jwtHandler.header_token,
    jwtHandler.validate_token,
    messageController.post_message
);

router.delete('/:id/message/:messageId',
    jwtHandler.header_token,
    jwtHandler.get_token,
    messageController.delete_message,
)

module.exports = router;