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

// mysql.connectToDB();

/* 
  HTTP module can create an HTTP server that listeners to ports
  the createServer function will execute the moment someone tries to access the specified port on the computer
*/

// http.createServer(function (req, res) {
//   // writeHead(statusCode[, statusMessage][, headers]) && statusCode must be an integer 3 decimals long
//   res.writeHead(999, '**Custom Header**', {'Content-Type': 'text/html'});
  // res.write('The date & time: ' + date.dateTime());
//   res.write('<br/>');
//   res.write('Month from url: ' + urlParser.praseUrl(req.url).month);
//   res.write('<br/>');
//   res.write('Year from url: ' + urlParser.praseUrl(req.url).year);
//   res.write('<br/>');
//   res.write('<br/>');
//   res.end('server running...');
// }).listen(8080);

// http://localhost:8080/?year=2017&month=July

/* 
  Read a file on the server and write it to the screen, as well as create a new file on the server.
*/

// http.createServer(function (req, res) {
//   // fileSystem.getFile(res, "upload-file.html");
//   // fileSystem.setFile("my-new-file.txt");
//   // fileSystem.openFile("createdWithOpen.txt");
//   // fileSystem.renameFile("createdWithOpen.txt", "renamedWithRename.txt");
//   // fileSystem.deleteFile("createdWithOpen.txt");
//   triggerHalloween();
// }).listen(8080);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("inshallah"));
  handleEmail.sendEmail('derka');
}).listen(8080);


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