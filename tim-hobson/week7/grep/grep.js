console.log(`=============================================`);
console.log('=================myGrepv0.01=================');
console.log(`=============================================`);

var fs = require('fs');

// fs.readFile('example.txt', 'utf8', function (err, contents) {
//   console.log(contents);
//   console.log('end of myGrep');
// });
if (process.argv.length > 2) {
  file = process.argv[2]
  findWord = process.argv[3]
} else {
  file = 'example.txt'
  findWord = 'react'
}

console.log('reading through file:', file);

contents = fs.readFileSync(file, 'utf8');
// console.log(contents);

contents.toString().split(/\n/).forEach((line) => {
  if (line.includes(findWord)) {
    console.log(line);
  }
});
console.log(`=============================================`);
console.log('================end of myGrep================');
console.log(`=============================================`);
// console.log(process.argv[2]);
