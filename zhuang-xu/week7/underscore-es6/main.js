const _ = require('underscore');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const people = [
  {id: 1, username: 'A', active: true, age: 20, uid: 1412},
  {id: 2, username: 'B', active: false, age: 35, uid: 1352},
  {id: 3, username: 'C', active: false, age: 50, uid: 5418},
  {id: 4, username: 'D', active: true, age: 65, uid: 216},
  {id: 5, username: 'E', active: true, age: 80, uid: 18},
  {id: 6, username: 'E', active: true, age: 95, uid: 1000},
];

const words = [
  'attoparsec',
  'batch',
  'Cinderalla Book',
  'Dr. Fred Mbogo',
  'eat flaming death',
  'fandango on core',
  'Foonly',
  'goat file',
  'Halloween Documents',
  'I see no X here',
  'Imminent Death Of The Net Predicted!',
  'jibble',
  'kilogoogle',
  'larval stage',
  'maximum Maytag mode',
  'nybble',
  'octal forty',
  'pico-',
  'quantum bogodynamics',
  'rubber-hose cryptanalysis',
  'sigmonster',
  'tail recursion',
  'unswizzle',
  'VAXen',
  'webmaster',
  'XEROX PARC',
  'yak shaving',
  'Zero-One-Infinity Rule',
];

const sortByUID = () => {
  return people.sort((p1, p2) => p1.uid - p2.uid);
};

const groupByFirstLetter = () => {
  return words.reduce((accu, word) => {
    const c = word.charAt(0).toLowerCase();
    if (!(c in accu)) {
      accu[c] = [];
    }
    accu[c].push(word);
    return accu;
  }, {});
};

const allWordsLongerThan3 = () => {
  return words.every(word => word.length > 3);
};

const someWordsAreLongerThan20 = () => {
  return words.some(word => word.length > 20);
};

const allUIDs = () => {
  return people.map(p => p.uid);
};

const personWithHighestUID = () => {
  return _.max(people, p => p.uid);
};

const countEvenOdd = () => {
  return numbers.reduce((accu, n) => {
    accu.even += n % 2 == 0 ? 1 : 0;
    accu.odd += n % 2 == 1 ? 1 : 0;
    return accu;
  }, {even: 0, odd: 0});
};

const threeRandomNumbers = () => {
  return _(numbers).sample(3);
};

module.exports = {
  sortByUID,
  groupByFirstLetter,
  allWordsLongerThan3,
  someWordsAreLongerThan20,
  allUIDs,
  personWithHighestUID,
  countEvenOdd,
  threeRandomNumbers,
};