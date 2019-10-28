var url = require('url');

exports.praseUrl = function (currentUrl) {
  let urlParsed = {};
  var q = url.parse(currentUrl, true).query;
  urlParsed.year = q.year;
  urlParsed.month = q.month;
  return urlParsed;
};