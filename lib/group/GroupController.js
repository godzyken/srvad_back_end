var officegen = require('officegen');

var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Group = require('./Group');

router.get('/', function (req, res) {
    Group.getgroups(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    Group.creategroup(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

module.exports = router;