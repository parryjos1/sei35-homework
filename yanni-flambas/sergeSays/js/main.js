//Serge Says
//Serge says sure when you ask him a question
// Serge answers Woah, chill ou! if you yell at him (ALL CAPS)
// Serge answers 'Fine, be that way!' if you address and dont say anything
// Serge answers 'Whatever.' to anything else
//
//Wasn't certain how to go about it.
//
// First code searched, for emcascript 5
// document.getElementsByName("Thing")[0].addEventListener('change', doThing);
//
// /* function */
// function doThing(){
//    alert('Horray! Someone wrote "' + this.value + '"!');
// }
//
// //Further searching found ES6 solution for listening
// HTMLInputElementObjec.oninput = () => {
//   console.log('run'); // Do something
// }
//Will have to ask how to use code on lines 12 through 14.
//
// Realised that it can just be a function
//
const sergeSays = function(input){

  if (!input) {
    return 'Fine, be that way!';
  }
  if (input.endsWith('?')) {
    return 'sure!'
  } else if (input === input.toUpperCase()){
    return 'Woah, chill out.'
  } else {
  return "Whatever."
  }
}

console.log(sergeSays('hello'))
