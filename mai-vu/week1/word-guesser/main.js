// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

//     Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//     Write a function called guessLetter that will:
//     Take one argument, the guessed letter.
//     Iterate through the word letters and see if the guessed letter is in there.
//     If the guessed letter matches a word letter, changed the guessedLetters array to reflect that.
//     When it's done iterating, it should log the current guessedLetters ('F__') and congratulate the user if they found a new letter.
//     It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//     Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const secretWord = ['A', 'P', 'P', 'L', 'E'];
const guessedLetters = ['_', '_', '_', '_', '_'];

const guessLetter = function ( userGuess ) {
    userGuess = userGuess.toUpperCase();
    // console.log(`The running function is guessLetter(${ userGuess })`);
    let found = false;

    // for loop to iterate through each character in secretWord
    for (let i = 0; i < secretWord.length; i++) {

        const currentChar = secretWord[i];

        // Check if the guessed character is in there
        if ( currentChar === userGuess ) {
            console.log(`Correct guess for ${ userGuess } at position ${ i + 1 }`);

            // Change the guessedLetters array to reflect the correct attempt
            guessedLetters[i] = userGuess;

            // Set flag to true so we can determine after the loop is finished,
            // whether or not we found any matches
            found = true;
        }
    }

    console.log(guessedLetters.join(' '));

    // Check whether we found any matches during any iteration of the for loop
    if ( found ) {
        console.log('Nice job!');
    } else {
        console.log('Oops! Wrong guess. Try again...');
    }

    // Check whether the game is over
    if ( guessedLetters.includes('_') === false ){
        console.log('CONGRATULATIONS! YOU WON!');
    }
};


guessLetter('f');
guessLetter('a');
guessLetter('L');
