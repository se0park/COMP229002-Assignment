// File name : users.js
// Stuent's Name : Seyeong Park
// Student ID : 301088175
// Date : October 23th 2020 

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});


module.exports = router;
