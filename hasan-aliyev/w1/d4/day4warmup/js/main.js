// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's respons



const sergeSays = function(input){
  // if (input === "" || input === null || input === undefined) {
  //   return "Fine. Be that way!"
  // }

  //or
  if (!input) { // if input is not true
    return "Fine. Be that way!";
  }

  // if the input ends with a question mark '?'
  if (input.endsWith("?")) {
    return "sure";
  // if the input is the same as the input in all upper case letters
  } else if (input === input.toUpperCase()) {
    return "Woah, chill out!";
  }
else {
    return "Whatever.";
}

}

console.log(sergeSays(undefined));
console.log(sergeSays("Hello?"));
console.log(sergeSays("HELLO?"));
console.log(sergeSays("Hello."));






const sergeDeyir = function( input ) {
  if (input.endsWith('?')) {
    return 'sure';
  } else if (input.length === 0) {
    return "fine be that way!"
  } else if (input === input.toUpperCase)
    return "Whoa, chill out"
  }   else {
   return "Whatever"
 }
}

console.log("How are you?", sergeDeyir("How are you?"));
console.log("Hello:", sergeDeyir("Hello"));
console.log("I love js", sergeDeyir("How are you?"));
console.log("Empty String:", sergeDeyir(""));
