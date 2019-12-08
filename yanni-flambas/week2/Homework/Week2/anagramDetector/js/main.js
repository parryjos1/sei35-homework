// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

// console.log('hello world');

// var input = ('');
// var words = ["enlists", "google", "inlets", "banana"];
//
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var sortWord = word.split("").sort().join("");
//
//     for (var j = 0; j < input.length; j++) {
//       if (i === j) {
//         continue;
//       }
//
//     }
//   };



// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
//
// //words to match
// var words = ["enlists", "google", "inlets", "banana"];
// //input word to match against
// var input = ["listen"];
// //output object
// var anagrams = {};
//
// for ( var i =  0; i < words.length; i++ ) {
//   var word = words[i];
//  //sort the word
//   var sorted = word.split("").sort().join("");
//
//   if (anagrams[sorted] !=null) {
//     anagrams[sorted].push(word);
//   }
// }

//ouput

console.log('Working');

// const anagramDetector = {
//
//   anagram: [],
//   customSort: function( unsortedWord ){
//
//     return unsortedWord.toLowerCase().split("").sort().join("");
//
//   },
//
//   findMatch: function( word, array ){
//
//     let wordOne = this.customSort( word )
//
//     for (let i = 0; i < array.length; i++) {
//
//       let wordTwo = this.customSort( array[i] );
//
//       if ( wordOne === wordTwo ) {
//
//         this.anagram.push( array[i] );
//
//       };
//
//     }
//     return `The anagram of ${word} is ${this.anagram}`
//   },
// }
// console.log(anagramDetector.findMatch("oogleg", ["enlists", "google", "inlets", "banana"]));

const anagramDetector = {

  anagram:[],
  customSort: function( unsortedWord ){

    return unsortedWord.toLowerCase().split("").sort().join("");

  },

  findMatch: function( word, array ){

    for (let i = 0; i < array.length; i++) {
      let wordTwo = this.customSort( array[i] );
      if ( wordOne === wordTwo ) {
        this.anagram.push( array[i] );
      };
    }
    return `The anagram of ${word} is ${this.anagram}`
  },
}
console.log(anagramDetector.findMatch("oogleg", ["enlists", "google", "inlets", "banana"]));
