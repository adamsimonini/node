var http = require('http');
var uc = require('upper-case');
var formidable = require('formidable');
var nodemailer = require('nodemailer');

var date = require('./dateTime');
var urlParser = require('./praseUrl');
var fileSystem = require('./fileSystem.js');
var handleEmail = require('./handleEmail.js');
var mysql = require('./mysql');

// gain access to even object
var events = require('events');
var eventEmitter = new events.EventEmitter();
// writeHead(statusCode[, statusMessage][, headers]) && statusCode must be an integer 3 decimals long

mysql.connectToDB('testdb');
mysql.createDB("TestDB");
let myTable = {
  primaryKey: 'id',
  name: 'new_table',
  xAxis: 'name',
  yAxis: 'occupation',
}

let employeeList = [
  ['John', 'Highway 71'],
  ['Peter', 'Lowstreet 4'],
  ['Amy', 'Apple st 652'],
  ['Hannah', 'Mountain 21'],
  ['Michael', 'Valley 345'],
  ['Sandy', 'Ocean blvd 2'],
  ['Betty', 'Green Grass 1'],
  ['Richard', 'Sky st 331'],
  ['Susan', 'One way 98'],
  ['Vicky', 'Yellow Garden 2'],
  ['Ben', 'Park Lane 38'],
  ['William', 'Central st 954'],
  ['Chuck', 'Main Road 989'],
  ['Viola', 'Sideway 1633']
]

mysql.createTable(myTable);
// mysql.alterTable(newTable);
mysql.insertSingleRecord(myTable, ["Alan", "Web Developer"]);
mysql.insertMultipleRecord(myTable, employeeList);

/* 
  HTTP module can create an HTTP server that listeners to ports
  the createServer function will execute the moment someone tries to access the specified port on the computer
*/

http.createServer(function (req, res) {
  res.writeHead(999, '**Custom Header**', {'Content-Type': 'text/html'});
  res.write('The date & time: ' + date.dateTime());
  res.write('<br/>');
  res.write('Month from url: ' + urlParser.praseUrl(req.url).month);
  res.write('<br/>');
  res.write('Year from url: ' + urlParser.praseUrl(req.url).year);
  res.write('<br/>');
  res.write('<br/>');
  res.end('server running...');
}).listen(8080);

// http://localhost:8080/?year=2017&month=July

/* FILES ON SERVER */
// http.createServer(function (req, res) {
//   // fileSystem.getFile(res, "upload-file.html");
//   // fileSystem.setFile("my-new-file.txt");
//   // fileSystem.openFile("createdWithOpen.txt");
//   // fileSystem.renameFile("createdWithOpen.txt", "renamedWithRename.txt");
//   // fileSystem.deleteFile("createdWithOpen.txt");
//   triggerHalloween();
// }).listen(8080);


/* SEND EMAIL */
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc("inshallah"));
//   handleEmail.sendEmail('derka');
// }).listen(8080);


let halloween = function() {
  console.log('Canjouring Halloween... \nPortals to the netherworld are opening... \nPlease perform your animal sacrifice and blood ritual within your designated pentagram.\n');
}

let triggerHalloween = function () {
  eventEmitter.on('tot', halloween);
  eventEmitter.emit('tot');
}

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       res.write('File uploaded');
//       res.end();
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8082);