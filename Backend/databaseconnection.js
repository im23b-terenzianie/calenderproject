import pw from '../gitignore/pw.js';


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: pw
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
