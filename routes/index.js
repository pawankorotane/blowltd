"use strict";
var express = require('express');
var router = express.Router();
var co = require('co');
var request = require('co-request');
const API = "http://localhost:3000/";
/* GET home page. */
router.get('/', co.wrap(function* (req, res) {
    try{
         var options = {
    	url: API+'api/beauticians',
    };
    var response = yield request(options);
    res.render('index', { beauticians: JSON.parse(response.body) });
    }catch(e){
        console.log(e);
        res.render('error', {error : e.message})
    }
   
}));

module.exports = router;
