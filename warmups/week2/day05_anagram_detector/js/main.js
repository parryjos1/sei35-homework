console.log('run');

// Version 1
// const customSort = function (unsortedWord) {
//   let sortedWord = unsortedWord.toLowerCase().split("").sort().join("");
//   return sortedWord;
// }
//
// const anagramDetector = function (word, array) {
//   let wordOne = customSort(word);
//   console.log(word, wordOne);
//   let wordTwo;
//   for (let i = 0; i < array.length; i++) {
//     wordTwo = customSort(array[i]);
//     if (wordOne === wordTwo) {
//       console.log(`The anagram of ${word} is ${array[i]}`);
//     }
//   }
// };
//
// anagramDetector("listen", ["enlists", "google", "inlets", "banana"]);

// Version 2

const anagramDetector = {

  anagram: [],

  customSort: function (unsortedWord) {
    return unsortedWord.toLowerCase().split("").sort().join("");
  },

  findMatch: function (word, array) {
    let wordOne = this.customSort(word);
    for (let i = 0; i < array.length; i++) {
      let wordTwo = this.customSort(array[i]);
      if (wordOne === wordTwo) {
        this.anagram.push(array[i]);
      }
    }
    return `The anagram of ${word} is ${this.anagram}`
  }
};

console.log(anagramDetector.findMatch("listen", ["enlists", "google", "inlets", "banana"]));