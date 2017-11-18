var expressp = require('express');
var router = express.Router();


var burger = require('../models/burger.js');

router.get("/", function(req, res){
    burger.all(function(data){
        res.render('index', data);
    })
});

router.post("api/burgers", function(req, res){
    burger.create(req.body.name, req.body.devoured, function(result){
        res.json(result)
    })
});