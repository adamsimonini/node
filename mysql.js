var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "warcraft3",
  database: "testdb",
});

exports.connectToDB = function (html) {
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
};

exports.createDB = function(dbName) {
  con.database = dbName;
  con.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, function (err, result) {
    if (err) throw err;
    console.log(`${dbName} has either been created, or it already exists`);
  });
}

exports.createTable = function(table) {
  con.database = 'testdb';
    var sql = `CREATE TABLE IF NOT EXISTS ${table.name} (${table.primaryKey} INT AUTO_INCREMENT PRIMARY KEY, ${table.xAxis} VARCHAR(255),  ${table.yAxis} VARCHAR(255))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(`${table.name} has been created, or it already exists`);
    });
}

exports.alterTable = function(table) {
  var sql = `ALTER TABLE ${table.name} ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("The table has been altered");
  });
}

exports.insertSingleRecord = function(table, values) {
  var sql = `INSERT INTO ${table.name} (${table.xAxis}, ${table.yAxis}) VALUES ("${values[0]}", "${values[1]}")`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`\n The following as been added to ${table.name}: \n Name: ${values[0]} \n Occupation: ${values[1]} \n`);
  });
}

exports.insertMultipleRecord = function(table, multipleValues) {
  var sql = `INSERT INTO ${table.name} (${table.xAxis}, ${table.yAxis}) VALUES ?`;
  var values = multipleValues
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + ` records were bulk-added to ${table.name}.`);
  });
}

exports.returnInsertedId = function(table, values) {
  var sql = `INSERT INTO ${table.name} (${table.xAxis}, ${table.yAxis}) VALUES ("${values[0]}", "${values[1]}")`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
    return result.insertId
  });
} 

exports.select = function(table, amount) {
  con.query(`SELECT ${amount} FROM ${table.name}`, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}

exports.dropTable = function(table) {
  var sql = `DROP TABLE IF EXISTS ${table.name}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Table ${table.name} has been dropped`);
  });
}

exports.tableLength = function(table) {
  var length = 0;
  var sql = `SELECT COUNT(*) FROM ${table.name}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Number of rows in ${table.name}: ` + Object.values(result[0]));
    length = parseInt(Object.values(result[0]));
  });
  return length;
}

exports.filterBy = function(table, column, filter) {
  con.query(`SELECT * FROM ${table} WHERE ${column} = '${filter}'`, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}

exports.orderBy = function(table) {
  con.query(`SELECT * FROM ${table.name} ORDER BY ${table.xAxis}`, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}

exports.deleteRecordsWhere = function(table, column, filter) {
  var sql = `DELETE FROM ${table} WHERE ${column} = ${filter}`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}