// wheel of fortune / hangman

let mysteryWord = ['F', 'O', 'X', 'X'];
let guessedWord = ['_','_','_', '_'];

let wrongGuesses = [];
let reward = 0;

function guessLetter(letter) {

    if(letter.length > 1) {
        console.log('enter a single letter only!');
        return false;
    }


    let found = false;
    let count = 0;
    for(let x = 0; x < mysteryWord.length; x++) {
        if(letter.toLowerCase() == mysteryWord[x].toLowerCase()) {
            guessedWord[x] = letter;
            found = true;
            count++;
        }
    }

    if(found == true) {
        console.log(`Congratulations! your new word is now: ${guessedWord.join("")}`);
        reward += ((((Math.random() + 1) * 100) + 2) * count);
        console.log(`Your Reward: $${reward.toFixed(2)}`);
    } else {
        console.log(`Sorry... Guess again!`);
        wrongGuesses.push(letter);
        console.log(`You have made ${wrongGuesses.length} incorrect guesses so far...`);
        console.log(`You have ${6 - wrongGuesses.length} guesses left.`)
        if(wrongGuesses.length == 6)
        {
            console.log('You have run out of guesses and lost the game.');
            console.log(
            `\t\t\t |---------
             |   |
             |   O
             |  -|-
             |  / \\
             |             
             |            `);

            return true;
        }
}

    //check for underscores
    for(let x = 0; x < guessedWord.length; x++) {
        if(guessedWord[x] == '_') {
            return false;
        }
    }


    console.log(`Congratulations! You have won the game! (Guessed word: ${guessedWord.join("")})`);
    console.log(`reward total: $${reward.toFixed(2)}`);
    return true;
}

let flag = false;
while(!flag) {
    let tempLetter = prompt("Guess a letter...");
    flag = guessLetter(tempLetter);
}

console.log('Thank you for playing....');

//Array and functions bonus material


//functions
function maxOfTwoNumbers(num1, num2) {
    if(num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

function maxOfThree(num1, num2, num3) {
    let temp = 0;
    if(num1 > temp) {
        temp = num1;
    }
    if(num2 > temp) {
        temp = num2;
    }
    if(num3 > temp) {
        temp = num3
    }
    return temp;
}

function checkVowel(letter) {
    if(letter.toLowerCase() == 'a' || letter.toLowerCase() == 'e' || letter.toLowerCase() == 'i' || letter.toLowerCase() == 'o' ||letter.toLowerCase() == 'u') {
        return true;
    } else {
        return false;
    }
}

let arrayOfNumbers = [1,2,3,4];

function sumArray(arrayNum) {
    let temp = 0;
    for(let x = 0; x < arrayNum.length; x++) {
        temp += arrayNum[x];
    }
    return temp;
}

function multiplyArray(arrayNum) {
    let temp = arrayNum[0];
    for(let x = 1; x < arrayNum.length; x++) {
        temp *= arrayNum[x];
    }
    return temp;
}

console.log(`Max of two numbers (2,4) is ${maxOfTwoNumbers(2,4)}`);
console.log(`Max of three numbers (2,4,6) is ${maxOfThree(2,4,6)}`);
let vowelBoolean = checkVowel('E');
if(vowelBoolean == false) {
    console.log('Not a vowel.');
} else {
    console.log('This is a vowel');
}

vowelBoolean = checkVowel('R');

if(vowelBoolean == false) {
    console.log('Not a vowel.');
} else {
    console.log('This is a vowel');
}

console.log(`Sum of array is: ${sumArray(arrayOfNumbers)}`);
console.log(`Multiplication of array is: ${multiplyArray(arrayOfNumbers)}`);

//bonus

function reverseString(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let reverseString = reverseArray.join("");
    return reverseString;
}

console.log(`Reverse string of "paranoid" is: ${reverseString("paranoid")}`);

let arrayOfWords = ['WordOne', 'WordTwo', 'WordThree', 'WordFour', 'cat'];

function findLongestWord(words) {
    let temp = words[0].length;
    for(let x = 1; x < words.length; x++) {
        if(temp.length < words[x].length) {
            temp = words[x].length;
        }
    }

    return temp;
}

function filterLongWords(words, i) {
    let wordsFound = [];
    for(let x = 0; x < words.length; x++) {
        if(words[x].length > i) {
            wordsFound.push(words[x]);
        }
    }
    return wordsFound;
}

console.log(`The length of the longest word in the array is: ${findLongestWord(arrayOfWords)}`);
console.log(`Words longer than 4 characters in length: ${filterLongWords(arrayOfWords, 4)}`);