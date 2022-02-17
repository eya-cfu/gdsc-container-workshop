var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource. Woops looks like we have no users!');
});

module.exports = router;
