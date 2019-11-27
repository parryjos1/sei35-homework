const word  = ["f", "o", "x"];
const guessed = ["_", "_", "_"];
const alreadyguess = [];
let correctguesses = 0;
let reward = 0
let wrongguesses = 0
const guess = function(letter) {
  if (wrongguesses === 8) {
    return "Sorry you ran out of guesses. You lose."
  }
  for (x = 0; x < alreadyguess.length; x++) {
    if (letter === alreadyguess[x]) {
      reward = reward - 50
      console.log(`Your current reward is ${reward}`);
      wrongguesses = wrongguesses + 1;
      return "You already guessed this letter try again"
    }
  }
  alreadyguess.push(letter);
  let previouslength = correctguesses;
  for (i = 0; i < word.length; i++) {
    if (letter === word[i]){
      guessed.splice(i, 1, letter);
      console.log(`Congratulations you guessed the letter ${letter}`);
      correctguesses = correctguesses + 1;
      reward = reward + 100;
      wrongguesses = wrongguesses + 1;
    }
  }
  if (correctguesses === previouslength){
    console.log("Sorry that letter is not right");
    reward = reward - 50;
  } else if (correctguesses === word.length) {
    console.log(`Congratulations you guessed the word`)
  }
  console.log(`Your current reward is ${reward}`)
  return guessed.join("");
}

// BONUS MATERIAL
//TWO NUMS
const maxOfTwoNumbers = function(num1,num2) {
  if (num1 > num2) {
    return num1
  } else if (num2 > num1) {
    return num2
  } else {
    return "They are equal"
  }
}
//THREE NUMS
const maxOfThreeNumbers = function(num1,num2,num3) {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2
  } else if (num3 > num1 && num3 > num2) {
    return num3
  } else {
    return "They are all equal"
  }
}
//IS IT A VOWEL
const isItAVowel = function(letter) {
  if (letter.length !== 1) {
    return "This is not a single letter"
  }
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return "This is a vowel"
  }
}
//SUM ARRAY AND MULTIPLES ARRAY
const sumArray = function(nums) {
  for (i=0; i < nums.length; i++) {
    total = total + nums[i]
  }
  return total
};
const multiplyArray = function(nums) {
  for (i=0; i < nums.length; i++) {
    total = total * nums[i]
  }
  return total
};
//REVERSEEEEE
const reverseString = function(string) {
  string = string.split("");
  string = string.reverse();
  string = string.join("");
  return string;
}
//Long words
const longestWord = function(string) {
  let longest = 0;
  let longestindex = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i].length > longest) {
      longest = string[i].length
      longestindex = i
    }
  }
  return string[longestindex];
}
//FILTRATION DEVICE
const wordsLonger = function(string,num) {
  let longerThan = [];
  for (i = 0; i < string.length; i++) {
    if (string[i].length > num) {
      longerThan.push(string[i])
    }
  }
  return longerThan;
}
