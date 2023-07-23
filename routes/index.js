var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps SIT722 Glossary', sub: 'Explore my website featuring a curated collection of DevOps terms and their concise descriptions.'});
});

module.exports = router;

