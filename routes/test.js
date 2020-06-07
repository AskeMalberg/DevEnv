var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  res.render('testrunner', { title: 'Development Environment Test' });
});

module.exports = router;
