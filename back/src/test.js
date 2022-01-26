var express = require('express');
var router =  express.Router();

router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("API is working");
})

module.exports = router;