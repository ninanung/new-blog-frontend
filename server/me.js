const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/am/i', jsonParser, function(req, res, next) {

});

module.exports = router;