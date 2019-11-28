//create global arrays and variables
let arrayToGuess = [`J`,`A`,`V`,`A`,`S`,`C`,`R`,`I`,`P`,`T`]; //HW task requirement
let wordRevealed = [`_`,`_`,`_`,`_`,`_`,`_`,`_`,`_`,`_`,`_`]; //HW task requirement
let alreadyGuessed = [``]; //To keep track of what letters the user has used to guess
let totalReward = 0; //Total reward counter
let incorrectGuesses = 0; //"HANGMAN" trigger check
let winCondition = false; //a boolean to handle whether or not the user has won
//setting up a string to hold the word to guess so it can compare it what has been revealed
//later, and then switch winCondition
let guessWord = ``;
for (let i = 0; i < arrayToGuess.length ;i++)
{
    guessWord = `${guessWord}${arrayToGuess[i]}`;
};


//User greeting
alert(`Welcome to the Hangman of Fortune!`);


//setting up the rules to displayton
//each string ends with a "\n" so the rules display as a list
const rules = 
[
    `1. You will guess 1 letter at a time\n`,
    `2. Guessing the same incorrect letter WILL NOT add to your incorrect guesses\n`,
    `3. You have 7 guesses\n`,
    `4. You will earn between $100-$200 per correct guess\n`,
    `5. You will lose $25 per wrong guess\n`,
    `\nDo your best to workout the word before you run out of guesses!\n`,
    `GET RICH OR DIE TRYING`
];
//concatinate all the rules into one string
const rulesAlert = function(){
    let rulesList = ``;
    for (let i = 0; i < rules.length; i++){
        const currentRule = rules[i];
        rulesList = `${rulesList}${currentRule}`;
    };
    return rulesList;
}
alert(`${rulesAlert()}`); //display the rules to the user


//Random number generator, rounding occurs so the return value is always a whole number
//The formula allows Math.random to surpass its limitation from 0 to a designated value
const getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


//main guessLetter game function
const guessLetter = function (guessedLetter)
{
    //setting up variables for the function to use
    const letterToCheck = guessedLetter.toUpperCase(); //capitalises the letter regardless of user input
    //checks whether or not the input is part of the word
    const partOfWord = arrayToGuess.includes(letterToCheck);
    //adds the user's guess to their already guessed pool
    const alreadyUsedLetter = alreadyGuessed.includes(letterToCheck);
    alreadyGuessed.push(letterToCheck);
    let userWord = ``;
    //the following statement avoids logging duplicate correct and incorrect inputs
    if(partOfWord === true && alreadyUsedLetter === false)
    {
        //adding to the reward is outside of any loops so it only occurs once
        totalReward += getRandomInt(100,200); //generates $100-200 and adds it to user's reward
        for (let i = 0; i < wordRevealed.length; i++)
        {
            //scans the word to be guessed for the matching letter
            //once a match is found the same letter is added to the user's
            //revealed letters
            if( letterToCheck === arrayToGuess[i])
            {
                wordRevealed.splice(i,1,letterToCheck);
            };
            //setting up the the user's currently correctly guessed letters
            userWord = `${userWord}${wordRevealed[i]}`;
        };
        alert(`You made a correct guess!`);
    }else
        {
            incorrectGuesses += 1;
            totalReward -= 25;
            if (totalReward < 0){
                totalReward = 0;
            }; //stops putting user in the negative
        };
    //checks whether or not the currently revealed word matches the word to be guessed
    if ( userWord === guessWord)
    {
        winCondition = true;
    };
     //calling userGuessChecker to return the user's current games status and request next guess
    userGuessChecker(totalReward, incorrectGuesses, alreadyGuessed, wordRevealed, winCondition);
};


//a function to handle user input and call guessLetter
const userGuessChecker = function(additionalReward, badGuesses, guessedLetters, lettersRevealed, winCon)
{
    //setting up what is to be displayed in the user prompt
    let guessedLetterlist = `You have tried to use the following letters:`;
    for(let i = 0; i < guessedLetters.length; i++)
    {
        if (i < (guessedLetters.length - 1) && i !== 0)
        {
            guessedLetterlist = `${guessedLetterlist}${guessedLetters[i]} `;
        }else if (i === 0)
            {
                guessedLetterlist = `${guessedLetterlist}${guessedLetters[i]}\n`;
            }else
                {
                    guessedLetterlist = `${guessedLetterlist}${guessedLetters[i]}\n`;
                };
    };
    let currentlyRevealed = `The status of your word: `;
    for(let i = 0; i < lettersRevealed.length; i++)
    {
        if (i < (lettersRevealed.length - 1) && i !== 0)
        {
            currentlyRevealed = `${currentlyRevealed} ${lettersRevealed[i]}`;
        }else if (i === 0)
            {
                currentlyRevealed = `${currentlyRevealed}${lettersRevealed[i]}`;
            }else
                {
                    currentlyRevealed = `${currentlyRevealed} ${lettersRevealed[i]}\n`;
                };
    };
    let rewardTotal = `Your current reward is: $${additionalReward}\n`;
    let incorrectTotal = `You have ${7 - badGuesses} guesses left!\n\n`;
    let userReminder = `${currentlyRevealed}${guessedLetterlist}${rewardTotal}${incorrectTotal}`;
  
    
    //checking whether or not the user has won or lost
    if(badGuesses === 7)
    {
        alert(`You have reached the maximum number of guesses! RIP YOUR NECK`);
        return 0;
    };
    if(winCon === true)
    {
        alert(`You have won the game!\n${rewardTotal}`);
        return 0;
    };


    //user prompt loop
    let guessingComplete = false; //making sure the while loop has a breakout condition
    while (guessingComplete === false)
        {
            let letterGuess = prompt(`${userReminder}Please enter ONE letter`);
            //check that the input is 1 character long and falls between A to Z
            //the letter check is case-insensitive
            if(letterGuess.length === 1 && letterGuess.match(/[a-z]/i))
            {
                guessingComplete = true;
                guessLetter(letterGuess);
            }else
                {
                    alert(`Mmm NONONO! Try entering ONE letter!`);
                };
        };
};

//gets the game started
userGuessChecker(totalReward, incorrectGuesses, alreadyGuessed, wordRevealed, winCondition);
