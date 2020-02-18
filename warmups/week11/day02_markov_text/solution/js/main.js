const poem = `
The dogs are running.
The dogs are happy.
The owners are drunk.
No dogs survived.
`;

// 1. Get the bible Data
// 2. createMarkov Table
// 3. Generate Markov Text

const sentenceStarterWords = [];

const createMarkovTable = text => {
  const table = {};

  let words = text.split(/[ ;\-\n]+/);
//   console.log(words);
  

  words = words.filter( word => word.length > 0 );
  //
  // words = words.filter( function(word){
  //   return word.length > 0;
  // });
  //
  // const outputArray = [];
  // for( let i = 0; i < words.length; i++ ){
  //   const word = words[i];
  //   if( word.length  > 0 ){
  //     outputArray.push( word );
  //   }
  // }
  //

  for( let i = 0; i < words.length - 1; i++ ){
    const currentWord = words[i];

    // Check if the current word is not already in the table:
    if( !(currentWord in table) ){
      table[currentWord] = []; // The first time we see this word, set its value to []
    }

    const nextWord = words[ i + 1 ];  // get the word that follows this word
    table[currentWord].push( nextWord );

    // if the start of the string a-z
    if( currentWord.match(/^[A-Z][a-z]/) ){
      sentenceStarterWords.push( currentWord ); // keep track of sentence-starting (capitalized) words
    }

  } // for each word

  return table;
};


const getRandomArrayElement = array => {
  const randomIndex = Math.floor( Math.random() * array.length );
  return array[ randomIndex ];
};


const generateMarkovText = (table, outputLength) => {

  let currentWord = getRandomArrayElement( sentenceStarterWords );
  let output = currentWord; // The first word we've chosen above is what starts the output


  for( let i = 0; i < outputLength; i++ ){
    // Pick a new following word for the output sentence by using the current
    // word as an key into the table (object) of following words, and choosing
    // a following word from that array, at random

    currentWord = getRandomArrayElement( table[currentWord] );

    // Add the new following word to the output string we are building up
    output += ' ' + currentWord;
  }

  return output;
};


$.ajax('/bible.txt')
.done( data => {
  console.log( data.length );

  const markovTable = createMarkovTable( data );
//   console.log( markovTable );

  window.markov = markovTable; // save to a global variable for debugging

  const newText = generateMarkovText( markovTable, 40 );
  console.log(`%c${newText}`, 'font-size: 12pt; font-weight: bold');

});

// Run using in folder
// python -m SimpleHTTPServer




//   const markovTable = createMarkovTable( poem );
//   console.log( markovTable );

//   window.markov = markovTable; // save to a global variable for debugging

//   const newText = generateMarkovText( markovTable, 16 );
//   console.log(`%c${newText}`, 'font-size: 12pt; font-weight: bold');
