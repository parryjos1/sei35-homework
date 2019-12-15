
const scrabbleImproved = {
    letterScores: {
          'a': 1, 'e': 1, 'i': 1, 'o': 1,
          'u': 1, 'l': 1, 'n': 1, 'r': 1,
          's': 1, 't': 1, 'd': 2, 'g': 2,
          'b': 3, 'c': 3, 'm': 3, 'p': 3,
          'f': 4, 'h': 4, 'v': 4, 'w': 4,
          'y': 4, 'k': 5, 'j': 8, 'x': 8,
          'q': 10, 'z': 10
        },
        getWordScore: function(word){
          let score = 0;
          for ( let i = 0; i < word.length; i++) {
            const currentLetter = word[i];
            const letterScore = this.letterScores[currentLetter]
            score += letterScore;
          }
          return score;
        }
  }// end of scrabble improved
  // const scrabble = {
  //   letterScores: {
  //     1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  //     2: ["D", "G"],
  //     3: 'BCMP'.split(''),
  //     4: 'FHVMY'.split(''),
  //     5: ['K'],
  //     8: ['J', 'X'],
  //     10: ['Q', 'Z']
  //   },
  //
  // getWordScore: function(word) {
  //   word = word.toUpperCase();
  //   let score = 0;
  //   for ( let i = 0; i < word.length; i++) {
  //     const currentLetter = word[i];
  //
  //     for ( let key in this.letterScores ) {
  //       if( this.letterScores[key].includes(currentLetter)) {
  //         score += parseInt(key);
  //       }
  //     }
  //   }
  //   return score;
  // }
  // }
  //
  // console.log(scrabble.getWordScore('cabbage'));