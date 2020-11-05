/**
 * Created by godzykern on 05/11/20.
 */
var express = require('express');
var app = express();
var cors = require('cors');
var ActiveDirectory = require('activedirectory');

// ADD THESE TWO LINES

app.use(cors());
/*
var UserController = require('./lib/user/UserController');
app.use('/users', UserController);

var GroupController = require('./lib/group/GroupController');
app.use('/groups', GroupController);*/

var config = {
    url: 'ldap://192.168.2.100:389',
    baseDN: 'dc=urbalyon,dc=dom'
};
var ad = new ActiveDirectory(config);
var username = 'doreem';
var password = 'Magico13';
// Authenticate
ad.authenticate(username, password, function(err, auth) {
    if (err) {
        console.log('ERROR: '+JSON.stringify(err));
        return;
    }
    if (auth) {
        console.log(username + ' isMemberOf ' + groupName + ': ' + isMember);
    }
    else {
        console.log('Authentication failed!');
    }
});

module.exports = app;