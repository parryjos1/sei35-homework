
console.log('Events!');
//
// Define the function
// Functions lie inside variables, in JS!
// They are 'first-class'
const addTwo = function( num ){
  console.log( 'Inside addTwo()' );
  const result = num +2;

//  return undefined; // The default!
  return result;
};

// Run the function
const returnValue = addTwo();

console.log( returnValue );


const sayHello = function(){
  console.log('Hello world!');
};

// sayHello();

// Run another function for us, nicely
// This function takes ANOTHER FUNCTION as its argument!
const runNicely = function( functionToRunNicely ){
  console.log('Hello, i am about to run your function for you! I hope that is to your liking, sir!');

  functionToRunNicely();
  console.log('I hope that went well for you. It was a real pleasure for me, and have a nice day.');
};

runNicely( sayHello() );

const h1 = document.querySelector('h1');

h1.addEventListener('click', function( e ){
  console.log('The h1 was clicked!');
  console.log( e.screenX, e.screenY );
});

document.addEventListener('click', function( e ){
  console.log( e.target );
  console.log( e.screenX, e.screenY );
})
