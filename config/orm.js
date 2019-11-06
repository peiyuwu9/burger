var connection = require("./connection.js");

var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        var query = "INSERT INTO " + table + " SET " + col + ' = "' + val + '";';
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, col, val, id, cb) {
        var query = "UPDATE " + table + " SET " + col + " = " + val + " WHERE id = " + id + ";";
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;