// drEvil
// Create a function called drEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.

const drEvil = function(amount) {
  if (amount == 1000000) {
    console.log(`${amount} dollars (pinky)`);
  } else {
    console.log(`${amount} dollars`);
  }
};

drEvil(20);
drEvil(1000000);

// mixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long

const mixUp = function(word1, word2) {
  const mix1 = word2.substring(0, 2) + word1.slice(2);
  const mix2 = word1.substring(0, 2) + word2.slice(2);
  return `${mix1} ${mix2}`;
};

console.log(`The mixed up output is ${mixUp("mix", "pod")}`);
console.log(`The mixed up output is ${mixUp("dog", "dinner")}`);

// fixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.

const fixStart = function(str) {
  const firstChar = str.charAt(0);
  let remainingString = str.slice(1);
  let newString = str[0];
  for (let i = 0; i < remainingString.length; i++) {
    if (remainingString[i] == firstChar) {
      newString += "*";
    } else {
      newString += remainingString[i];
    }
  }
  return newString;
};

console.log(fixStart("babble"));

// verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.

const verbing = function(word) {
  if (word.length < 3) {
    return word;
  } else if (word.substr(word.length - 1, 3) == "ing") {
    return (word += "ly");
  } else if (word.substr(word.length - 1, 3) !== "ing") {
    return (word += "ing");
  }
};

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

// notBad
// Create a function called notBad that takes a single argument, a string.
//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad = function(string) {
  const not = "not";
  const bad = "bad";
  const indexOfFirst = string.indexOf(not);
  const indexOfSecond = string.indexOf(bad);
  if (indexOfFirst < indexOfSecond) {
    string = string.replace(bad, "good");
    string = string.replace(not, "");
    return string;
  } else {
    return string;
  }
};

const badnot = notBad(" is not bad");
console.log(`NotBad input is " is not bad", output is ${badnot}`);
