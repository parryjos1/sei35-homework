'use strict';

var readline = require('readline');
var fs = require('fs');

var filename = __dirname + '/../' + process.argv[2];

var fileInterface = readline.createInterface({
  input: fs.createReadStream(filename)
});

fileInterface.on('line', function (line) {
  if (line.includes(process.argv[3])) {
    console.log(line);
  }
});