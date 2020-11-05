var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var User = require('./User');

router.get('/', function (req, res) {
    User.getusers(function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    User.createuser(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            req.body.id = count.insertId;
            res.json(req.body);
        }
    });
});

router.post('/delete', function (req, res) {
    User.deleteuser(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json({});
        }
    });
});

module.exports = router;