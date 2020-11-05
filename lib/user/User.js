var db = require('../../db');

var User = {
    getusers: function (callback) {
        return db.query('SELECT * from t_user', callback);
    },
    createuser: function (User, callback) {
        return db.query('Insert into t_user(id, name) values(?, ?)', [User.id, User.name], callback);
    },
    deleteuser: function (User, callback) {
        return db.query('DELETE from t_user WHERE id = ?', [User.id], callback);
    }
}

module.exports = User;