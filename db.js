var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bd_activedyrectory'
});
module.exports = connection;