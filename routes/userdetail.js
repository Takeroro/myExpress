var express = require('express');
var router = express.Router();

router.get('',function(req,res,next) {
    res.send('user deatail page');
});

module.exports = router;