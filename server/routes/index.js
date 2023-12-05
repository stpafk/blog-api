var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController');
const postController = require('../controllers/postController');
const jwt = require('../middleware/jwtHandler')

router.get('/', postController.get_index);

router.get('/login', controller.get_login);
router.post('/login', controller.post_login);

router.get('/register', controller.register_get);
router.post('/register', controller.register_post);

router.get('/special', jwt.header_token, controller.special);

module.exports = router;
