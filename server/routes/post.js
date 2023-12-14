var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController');
const messageController = require('../controllers/messagesController');
const jwtHandler = require('../middleware/jwtHandler');
const validateId = require('../middleware/validateId');

router.get('/create', 
    jwtHandler.validate_token, 
    postController.get_create
);

router.post('/create',
    jwtHandler.validate_token,
    postController.post_create,
);

router.get('/:id/update', 
    validateId,
    jwtHandler.validate_token,
    postController.get_update,
);

router.put('/:id/update',
    jwtHandler.validate_token,
    validateId,
    postController.put_update,
);

router.get('/:id/delete',
    jwtHandler.validate_token,
    validateId,
    postController.get_delete,
);

router.delete('/:id/delete',
    jwtHandler.validate_token,
    validateId,
    postController.delete_delete,
);

router.post('/:id/message', 
    jwtHandler.validate_token,
    validateId,
    messageController.post_message
);

router.delete('/:id/message/:messageId',
    validateId,
    jwtHandler.validate_token,
    messageController.delete_message,
)

router.get('/:id', 
    validateId,
    postController.get_post 
);

module.exports = router;