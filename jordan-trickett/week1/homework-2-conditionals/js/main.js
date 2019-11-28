console.log("Hello World!!!");

//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)


const drEvil = function ( amount ) {
    if ( amount === 1000000) {
      return (`${amount} Dollars (pinky)`);
    } else {
      return (`${amount} Dollars`);
    };
};



// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// charAt(0) returns character at postion one
// replace() replaces specified value with another value
// concat() joins two or more strings

// want to replace letter 1 of string 1
// with letter 1 of string 2

// selec

// const selectLetter1OfString1 = string1.charAt(0);
// const selectLetter1OfString2 = string2.charAt(0);
// return (`This is letter 1 of string 1 ${selectLetter1OfString1}, This is letter 1 of string 2 ${selectLetter1OfString2}`);


const mixUp = function ( string1, string2 ) {
    const replaceLetter1OfString1 = string1.replace(string1.charAt(0), string2.charAt(0));
    const replaceLetter1OfString2 = string2.replace(string2.charAt(0), string1.charAt(0));
    return (`${replaceLetter1OfString1} ${replaceLetter1OfString2}`);
}


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

// find first character
// if

// replace all occurences of character with *
// except first one

// if letter === first character
// replace with *

// indexOf(b, 1) - searches for position of b from second character, returns position
// indexOf(str.charAt(0), 1) - finds postion of first letter
// str.slice(1); - removes data before set positon

const fixStart = function ( word ) {
    const findFirstCharacter = word.charAt(0);
    const sliceFirstCharacterOff = word.slice(1);
    const replaceCharacter = sliceFirstCharacterOff.replace(findFirstCharacter, '*');
    return sliceFirstCharacterOff;


    // return findFirstCharacter;
    // if ( === findFirstCharacter)

    // const replaceCharacter = word.replace(findFirstCharacter, '*');
    // return replaceCharacter;
}



// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

// if string1 length greater than 3 and does not end in ing
//
// string1 === string1.endsWith('ing')

const verbing = function ( string1 ) {
    if (string1.length > 3){
      return (`${string1}ing`);
    }else {
      return (`${string1}ly`);
    }

}

const verbing = function ( verbingString) {
  if (verbingString.endsWith('ing')) {
    result = v
  }
}


// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
