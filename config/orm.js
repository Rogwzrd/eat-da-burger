// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function(table, callback){
        var queryString = "Select * From " + table + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            callback(result)
        })
    },

    create: function(table, col, val, callback){
        var queryString = "INSERT INTO ?(?) VALUES(?)";
        connection.query(queryString,[table, col, val], function(err, result){
            if (err) throw err;
            callback(result)
        })
    },

    update: function(table, col, val, condition, callback){
        var queryString = "UPDATE ? SET ? = ? WHERE ?";
        console.log("this is the table ", table);
        console.log("this is the column ", col);
        console.log("this is the column value", value);
        console.log("this is the condition ", condition);
        connection.query(queryString, [table, col1, value, condition], function(err, result){
            if (err) throw err;
            callback(result)
        })
    },

    delete: function(table, condition, callback){
        var queryString = "DELETE FROM ? WHERE ?";
        connection.query(queryString, [table, condition], function(err, result){
            if (err) throw err;
            callback(result)
        })
    }
};

module.exports = orm;