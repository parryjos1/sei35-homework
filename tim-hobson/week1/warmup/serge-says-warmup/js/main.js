// Warmup - Serge Says
// Examples
// Serge answers 'Sure.' if you ask him a question.
//

// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//

// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// Create a function that takes an input and returns Serge's response.

// Serge



//whatever to anything else.


let serge = function ( input ) {

  if (input.endsWith('?'))

  {

    return 'Serge says: Sure.';

  }

  if ( input.length === 0 )

  {

    return 'Serge says: Fine, be that way!';

  }

  if (input === input.toUpperCase())

  {

    return 'Serge says: Woah, Chill out!';

  }


}


askSergeOne = serge("How are you?");
console.log(askSergeOne);
askSergeTwo = serge("HEY SERGE")
console.log(askSergeTwo);
askSergeThree = serge("")
console.log(askSergeThree);

//
// result = prompt("Hello", "Hello");
// const aNumber = Number(window.prompt("Type a number", ""));
