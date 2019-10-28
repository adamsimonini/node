var mysql = require('mysql');

exports.connectToDB = function (html) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "warcraft3"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
};