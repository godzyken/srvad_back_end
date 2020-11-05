var db = require('../../db');

var Group = {
    getgroups: function(callback)
    {
        return db.query('SELECT * from t_group', callback);
    },
    creategroup: function (Group, callback) {
        return db.query('Insert into t_group(id, nom, domain) values(?, ?, ?)',[Group.id, Group.nom, Group.domain], callback);
    }
}

module.exports = Group;