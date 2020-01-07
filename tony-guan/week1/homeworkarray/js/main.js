//homework

const word = ["f", "o","x"];
const guessed = ["_", "_", "_"];
const alreadyguess = [];
let correctguess = 0;
let reward = 0;
let wrong = 0;


// Warmpup

console.log(`serge says`)

  const sergeSays = function (input) {

    if( input.endWith(`?`)) {
      return 'sure';
    } else if ( input. length === 0 ) {
      return "fine be that way!"
    } else if  ( input === input.toUpperCase()) {
      return "whoa, chill out" {
    } else {
      return "whatever"
}
  };

console.log("SERGE", sergeSays("SERGE?"));
console.log("Hello:", sergeSays("Hello"));
console.log("I LOVE JS:", sergeSays("I love JS"));
console.log("Empty string:", sergeSays(""));
