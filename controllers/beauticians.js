"use strict";
const co = require('co');
var request = require('co-request');
const API = "http://localhost:3000/";

module.exports.list = co.wrap(function* (req, res) {
    try{
        let beauticians =  yield req.db.query("select * from beauticians");
        res.status(200).json(beauticians);
    }catch(e){
        res.status(500).send(e.message);
    }
});
