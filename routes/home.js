const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('inside middleware HOME');
  res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

module.exports = router;
