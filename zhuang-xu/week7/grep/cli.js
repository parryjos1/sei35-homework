const yargs = require('yargs');
const fs = require('fs');
const readline = require('readline');

const args = yargs.command('<file_name>',
    'The name of the file from which contents are to be read')
    .help()
    .alias('help', 'h');

const handleCLI = (argv) => {
  const [file, searchText] = argv._;

  if (fs.existsSync(file)) {
    if (searchText && String(searchText).trim().length > 0) {
      return {
        file,
        searchText: String(searchText).trim(),
      };
    } else {
      return {
        error: 'Search text cannot be empty.',
      };
    }
  } else {
    return {
      error: `File ${file} does not exist.`,
    };
  }
};

const searchInFile = async (filename, searchText) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(filename),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (line.match(searchText) !== null) {
      console.log(line);
    }
  }
};

const run = () => {
  const options = handleCLI(args.argv);

  const {file, searchText} = options;
  searchInFile(file, searchText);
};

module.exports = {args, handleCLI, searchInFile, run};
