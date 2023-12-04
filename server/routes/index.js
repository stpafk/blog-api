var express = require('express');
var router = express.Router();

const controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200);
});

router.get('/register', controller.register_get);
router.post('/register', controller.register_post)

module.exports = router;
