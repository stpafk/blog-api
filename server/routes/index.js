var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController');
const postController = require('../controllers/postController');
const jwt = require('../middleware/jwtHandler')

router.get('/', postController.get_index);

router.get('/login', controller.get_login);
router.post('/login', controller.post_login);

router.get('/register', controller.get_register);
router.post('/register', controller.post_register);

router.get('/user', jwt.validate_token, controller.get_user);

module.exports = router;
