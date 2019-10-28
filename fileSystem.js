var fs = require('fs');

exports.getFile = function(res, fileName ) {
    let response = res;
    fs.readFile(fileName, function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}

exports.setFile = function(fileName) {
    // let response = res;
    fs.appendFile(fileName, 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

exports.openFile = function(fileName) {
    fs.appendFile(fileName, 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
