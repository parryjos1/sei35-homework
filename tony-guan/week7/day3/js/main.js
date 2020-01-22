var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html


// - Sort the ` people ` by 'uid'
  const peopleByUID = _(people).sortBy('uid');
  console.log(peopleByUID);

// - Group the random words by the lower case version of their first letter
  const lowercaseWords = _(words).map( word => word.toLowerCase() );
  const lowerFirstLetter = _(lowercaseWords).groupBy( word => word[0] );
  console.log(lowerFirstLetter);

// - Check to see if all the words have more than 3 characters
  const overThreeCharacters = _(words).includes( word => word.length > 2 );
  console.log(overThreeCharacters);

// - Check if some words are over twenty characters long
  const overTwentyCharacters = _(words).some( word => word.length >= 20 );
  console.log(overTwentyCharacters);

// - Get an array of all of the uids in ` people `
  const uids = _(people).map( people => people.uid );
  console.log(uids);

// - Find the person with the highest uid
  const highestUID = _(people).max( people => people.uid );
  console.log(highestUID);

// - Return an object that says how many even numbers and how many odd numbers there are in ` numbers `
  const evenOrOdd = _(numbers).countBy( numbers => numbers % 2 === 0? 'evens' : 'odds' );
  console.log(evenOrOdd);

// - Get three random numbers out of ` numbers `

  const randomNums = _(numbers).sample(3);
  console.log(randomNums);
