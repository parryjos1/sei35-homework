const expect = assert = require('chai').expect;

describe('Underscore exercises', function() {
  it('should sort by uid', function() {
    const sortByUID = require('./main').sortByUID;

    const sorted = sortByUID();
    expect(sorted[0].uid).to.eql(18);
    expect(sorted[sorted.length - 1].uid).to.eql(5418);
  });

  it('should group by first letter', function() {
    const groupByFirstLetter = require('./main').groupByFirstLetter;

    const grouped = groupByFirstLetter();
    expect(grouped.hasOwnProperty('f')).to.eql(true);
    expect(grouped.f).to.eql([ 'fandango on core', 'Foonly' ]);
  });

  it('should tell if all words have more than 3 characters', function() {
    const test = require('./main').allWordsLongerThan3;
    expect(test()).true;
  });

  it('should tell if some words are longer than 20 characters', function() {
    const test = require('./main').someWordsAreLongerThan20;
    expect(test()).true;
  });

  it('should return array of all UIDs', function() {
    const test = require('./main').allUIDs;
    expect(test()).to.eql([ 1412, 1352, 5418, 216, 18, 1000 ]);
  });

  it('should find the person with the highest UID', function() {
    const test = require('./main').personWithHighestUID;
    expect(test()).to.eql({ id: 3, username: 'C', active: false, age: 50, uid: 5418 });
  });

  it('should count even and odd numbers', function() {
    const test = require('./main').countEvenOdd;
    expect(test()).to.eql({ even: 5, odd: 5 });
  });

  it('should return 3 random numbers', function() {
    const test = require('./main').threeRandomNumbers;
    expect(test().length).eq(3);
    const [a, b, c] = test();
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).to.include(a, b, c);
  });
});