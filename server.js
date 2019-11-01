var http = require('http');
var uc = require('upper-case');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
var mysql = require('./mysql');

var date = require('./dateTime');
var urlParser = require('./praseUrl');
var fileSystem = require('./fileSystem.js');
var handleEmail = require('./handleEmail.js');

// gain access to even object
var events = require('events');
var eventEmitter = new events.EventEmitter();
// writeHead(statusCode[, statusMessage][, headers]) && statusCode must be an integer 3 decimals long

// mysql.connectToDB('testdb');
mysql.createDB("test_db");
// let myTable = {
//   primaryKey: 'id',
//   name: 'employee_info',
//   xAxis: 'name',
//   yAxis: 'position',
// }

// let employeeList = [
//   ['Yang', 'Entrepreneur'],
//   ['Sanders', 'Senator'],
// ]


// mysql.createTable(myTable);
// // mysql.alterTable(myTable);
// mysql.insertSingleRecord(myTable, ["Warren", "Senator"]);
// mysql.insertMultipleRecord(myTable, employeeList);
// mysql.returnInsertedId(myTable, ["Obama", "former president"]);
// mysql.select(myTable, "name, position"); // it can be column name, multiple column names seperated by a comma, or it can be all via the asterisk
// mysql.tableLength(myTable);
// mysql.dropTable(myTable);

// /* 
//   HTTP module can create an HTTP server that listeners to ports
//   the createServer function will execute the moment someone tries to access the specified port on the computer
// */

// http.createServer(function (req, res) {
//   res.writeHead(999, '**Custom Header**', {'Content-Type': 'text/html'});
//   res.write('The date & time: ' + date.dateTime());
//   res.write('<br/>');
//   res.write('Month from url: ' + urlParser.praseUrl(req.url).month);
//   res.write('<br/>');
//   res.write('Year from url: ' + urlParser.praseUrl(req.url).year);
//   res.write('<br/>');
//   res.write('<br/>');
//   res.end('server running...');
// }).listen(8080);

// // http://localhost:8080/?year=2017&month=July

// /* FILES ON SERVER */
// // http.createServer(function (req, res) {
// //   // fileSystem.getFile(res, "upload-file.html");
// //   // fileSystem.setFile("my-new-file.txt");
// //   // fileSystem.openFile("createdWithOpen.txt");
// //   // fileSystem.renameFile("createdWithOpen.txt", "renamedWithRename.txt");
// //   // fileSystem.deleteFile("createdWithOpen.txt");
// //   triggerHalloween();
// // }).listen(8080);


// /* SEND EMAIL */
// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write(uc("inshallah"));
// //   handleEmail.sendEmail('derka');
// // }).listen(8080);


// let halloween = function() {
//   console.log('Canjouring Halloween... \nPortals to the netherworld are opening... \nPlease perform your animal sacrifice and blood ritual within your designated pentagram.\n');
// }

// let triggerHalloween = function () {
//   eventEmitter.on('tot', halloween);
//   eventEmitter.emit('tot');
// }

// // http.createServer(function (req, res) {
// //   if (req.url == '/fileupload') {
// //     var form = new formidable.IncomingForm();
// //     form.parse(req, function (err, fields, files) {
// //       res.write('File uploaded');
// //       res.end();
// //     });
// //   } else {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// //     res.write('<input type="file" name="filetoupload"><br>');
// //     res.write('<input type="submit">');
// //     res.write('</form>');
// //     return res.end();
// //   }
// // }).listen(8082);