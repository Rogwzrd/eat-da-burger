var orm  = require('../config/orm.js');

var burger = {
   all: function(cb) {
       orm.all("burgers", function(res){
           cb(res)
       })
   },
    //this method throws an error when it is invoked. The val argument
    //is being read as a column and not a value
    create: function(val, cb){
       orm.create('burgers', "burger_name", val, function(res){
           cb(res)
       })
    },
    //unconfirmed as functional
    update: function(id, cb){
        orm.update("burgers", "id", val, function(res){
            cb(res);
        })
    }
};

module.exports = burger;