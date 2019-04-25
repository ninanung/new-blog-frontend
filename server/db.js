const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router();

router.get('/get/posts', jsonParser, function(req, res, next) {

});

module.exports = router;