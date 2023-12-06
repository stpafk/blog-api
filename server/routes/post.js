var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController');
const messageController = require('../controllers/messagesController');
const jwtHandler = require('../middleware/jwtHandler');

router.get('/:id', postController.get_post)

router.get('/create', 
    jwtHandler.validate_token, 
    postController.get_create
);

router.post('/create',
    jwtHandler.validate_token,
    postController.post_create,
);

router.get('/:id/update', 
    jwtHandler.validate_token,
    postController.get_update,
);

router.put('/:id/update',
    jwtHandler.validate_token,
    postController.put_update,
);

router.get('/:id/delete',
    jwtHandler.validate_token,
    postController.get_delete,
);

router.delete('/:id/delete',
    jwtHandler.validate_token,
    postController.delete_delete,
);

router.post('/:id/message', 
    jwtHandler.validate_token,
    messageController.post_message
);

router.delete('/:id/message/:messageId',
    jwtHandler.validate_token,
    messageController.delete_message,
)

module.exports = router;