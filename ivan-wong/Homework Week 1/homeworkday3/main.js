const word  = ["f", "o", "x"]; const guessed = ["_", "_", "_"]; const alreadyguess = [];
let correctguesses = 0; let reward = 0 let wrongguesses = 0

const guess = function(letter) {
  if (wrongguesses === 8) {
    return "Sorry you ran out of guesses. You lose."
  }
  for (x = 0; x < alreadyguess.length; x++) {
    if (letter === alreadyguess[x]) {
      reward = reward - Math.random()*50;
      console.log(`Your current reward is ${reward}`);
      wrongguesses = wrongguesses + 1;
      return "You already guessed this letter try again"
    }
  }
  alreadyguess.push(letter);
  let previouslength = correctguesses;
  for (i = 0; i < word.length; i++) {
    if (letter === word[i] || letter === word[i].toUpperCase()){
      guessed.splice(i, 1, letter.toUpperCase());
      console.log(`Congratulations you guessed the letter ${letter}`);
      correctguesses = correctguesses + 1;
      reward = reward + Math.random()*100;
      wrongguesses = wrongguesses + 1;
    }
  }
  if (correctguesses === previouslength){
    console.log("Sorry that letter is not right");
    reward = reward - Math.random()*50;
    console.log(`Your current reward is $${reward.toFixed(2)}`)
  } else if (correctguesses === word.length) {
    console.log(`Your current reward is $${reward.toFixed(2)}`)
    return (`Congratulations you guessed the word ${word.join("").toUpperCase()}`)
  }
  console.log(`Your current reward is $${reward.toFixed(2)}`)
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
  if (letter.length > 1) {
    return "This is not a single letter"
  }
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return `This is a vowel ${letter}`
  }
}
//SUM ARRAY
let total = 0
const sumArray = function(nums) {
  for (i=0; i < nums.length; i++) {
    total = total + nums[i]
  }
  return `The sum of ${nums} is ${total}`;
};
//MULTIPLES THE ARRAY
const multiplyArray = function(nums) {
  for (i=0; i < nums.length; i++) {
    total = total * nums[i]
  }
  return `The multiplication of ${nums} is ${total}`;
};
//REVERSEEEEE
const reverseString = function(string) {
  let origin = string
  string = string.split("");
  string = string.reverse();
  string = string.join("");
  return `The reverse of ${origin} is ${string}`;
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
  return `The largest word in this array is ${string[longestindex]}`;
}
//FILTRATION DEVICE
const wordsLonger = function(string,num) {
  let longerThan = [];
  for (i = 0; i < string.length; i++) {
    if (string[i].length > num) {
      longerThan.push(string[i])
    }
  }
  return `${longerThan.length} (${string}) words are larger than ${num} letters`;
}
