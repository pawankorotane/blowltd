var wrapper = require('co-mysql'),
        mysql = require('mysql');
var options = {
    onnectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'blowltd'
};


var pool = mysql.createPool(options),
        p = wrapper(pool);

