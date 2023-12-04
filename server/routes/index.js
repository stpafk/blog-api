var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController');
const jwt = require('../middleware/jwtHandler')
/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200);
});

router.get('/login', controller.get_login);
router.post('/login', controller.post_login);

router.get('/register', controller.register_get);
router.post('/register', controller.register_post);

router.get('/special', jwt.header_token, controller.special);

module.exports = router;
