const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
  console.log('inside middleware USERS');
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.post('/users', (req, res, next) => {
  // console.log('In the users middleware!');
  //console.log('req.body......  ', req.body);
  const age = req.body.age;
  const name = req.body.name;
  console.log(`My name is ${name} and I am ${age} years old.`);
  res.redirect('/');
});

module.exports = router;
