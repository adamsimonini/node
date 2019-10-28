var http = require('http');
var date = require('./dateTime');
var urlParser = require('./praseUrl');
var fileSystem = require('./fileSystem.js');

/* HTTP module can create an HTTP server that listeners to ports
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

http.createServer(function (req, res) {
  fileSystem.getFile(res, "html-file-two.html");
  fileSystem.setFile("my-new-file.txt");
}).listen(8080);