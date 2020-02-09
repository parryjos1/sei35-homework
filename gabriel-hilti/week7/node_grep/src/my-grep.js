const readline = require('readline');
const fs = require('fs');

// __dirname: absolute path of executed file
const filename = __dirname + '/../' +process.argv[2];

const fileInterface = readline.createInterface({
  input: fs.createReadStream(filename)
});

fileInterface.on('line', line => {
  if (line.includes(process.argv[3])) {
    console.log(line);
  }
});
