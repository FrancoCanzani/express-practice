const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('new', { title: 'Hello world' });
});

module.exports = router;
