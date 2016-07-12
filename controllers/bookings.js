"use strict";
const co = require('co');
const moment = require('moment');

module.exports.create = co.wrap(function* (req, res) {
    try{
         var day =  req.body.dt;
         req.body.day  = moment(day).format("YYYY-MM-DD");
         delete req.body.dt;
         var result = yield req.db.query("insert into bookings SET ?", req.body);
         console.log(result);
        res.status(200).json(result);
    }catch(e){
        res.status(500).send(e.message);
    }
});


module.exports.index = co.wrap(function* (req, res) {
    try{
         var result = yield req.db.query("select bk.*, b.name as beautician_name, b.address from bookings bk join beauticians b on b.id = bk.beautician_id");
         
         res.status(200).json(result);
    }catch(e){
        res.status(500).send(e.message);
    }
});



