const fs = require('fs');
const {args, handleCLI, searchInFile} = require('./cli');

describe('CLI handler', () => {
  const mock = require('mock-fs');

  beforeAll(function() {
    mock({
      'dummy.existent': 'file contents',
    });
  });
  afterAll(mock.restore);

  test('checks for non-existent files', () => {
    expect(handleCLI(args.parse(['./dummy.existent', 'abc'])))
        .toEqual({file: './dummy.existent', searchText: 'abc'});

    expect(handleCLI(args.parse(['./dummy.non-existent', 'abc'])))
        .toEqual({error: 'File ./dummy.non-existent does not exist.'});
  });

  test('makes sure search text is provided', () => {
    expect(handleCLI(args.parse(['./dummy.existent'])))
        .toEqual({error: 'Search text cannot be empty.'});
  });

  test('trims off white space from search text', () => {
    // Make sure it works when the search text is provided with or without quotation marks
    expect(handleCLI(args.parse(['./dummy.existent', 123])))
        .toEqual({file: './dummy.existent', searchText: '123'});

    expect(handleCLI(args.parse(['./dummy.existent', '123 '])))
        .toEqual({file: './dummy.existent', searchText: '123'});
  });
});

describe('Search function', () => {
  let path;

  beforeAll(() => {
    path = `fixture_${Date.now()}`;
    fs.writeFileSync(path,
        `aaa
         bbbreact
         ccc
         the nuclear reactor has gone into meltdown, we're all gonna die
         ddd
         react - so performant`.replace(/^\s+/gm, ''));
  });

  afterAll(() => {
    fs.unlinkSync(path);
  });

  test('works', async () => {
    console.log = jest.fn();
    await searchInFile(path, 'react');
    expect(console.log.mock.calls.length).toBe(3);
    expect(console.log.mock.calls[0][0]).toBe('bbbreact');
    expect(console.log.mock.calls[1][0]).toBe('the nuclear reactor has gone into meltdown, we\'re all gonna die');
    expect(console.log.mock.calls[2][0]).toBe('react - so performant');
  });
});