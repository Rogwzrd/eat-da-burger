// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = module.exports = {
    all: function(tableinput, callback){
        var queryString = "Select * From " + tableinput + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            callback(result)
        })
    },

    create: function(table, col, val, callback){
        var queryString = "INSERT INTO ?(?) VALUES(?) ";

        connection.query(queryString,[table, col, val], function(err, result){
            if (err) throw err;
            callback(result)
        })
    },

    // update: function(table, col, condition, callback){
    //     var queryString = "UPDATE ? SET ? = ? WHERE ?";
    //     console.log("this is the table ", table);
    //     console.log("this is the column ", col);
    //     console.log("this is the condition ", condition);
    //     connection.query(queryString, [table, col, condition, condition, col], function(err, result){
    //         if (err) throw err;
    //         callback(result)
    //     })
    // },

    delete: function(table, condition, callback){
        var queryString = "DELETE FROM ? WHERE ?";
        connection.query(queryString, [table, condition], function(err, result){
            if (err) throw err;
            callback(result)
        })
    }
};