console.log('hello Dom');

//Ask the DOM to give us the element we want to change
// const billImage = document.getElementById('firstBill');
const $billImage = $('#firstBill');

console.log( $billImage );

// billImage.src = '...';

// Calling attr() with one argument means GET the current value of this attribute

console.log('current src:', $billImage.attr('src') );

// Calling attr() with two arguments means SET this attribute to That value
$billImage.attr('src', 'http://placebear.com/300/300');



const $bestDogItem = $( '#bestDog' );

$bestDogItem.html()   //This is the getter!
console.log( 'best dog text:' dogText );

$bestDogItem.html('Ruby');  //This is the setter

//or write

$('bestDog').html('Ruby'); //This replaces with one inlineExample

//This only gives us the contents of the First matching elements
console.log( $('p').html()  );

//If we want to print them all, we can loop through each elements
//by passing a function to each() method:
$('p').each( function(){
  //The special variable 'this' will contain the current element,
  // as we iterate through all of them.
  const contents = $(this).html();
  console.log( contents );
} );





// $().getAttr('src')
// $().setAttr('https://...')
//Change something about the element -
//it looks the same as changing the value of an onject's key
//(because that's exactly what is happening)
// billImage.src = 'http://placebear.com/300/300';
//
// const bestDogLi = document.getElementById('BestDog');
//
// console.log( 'best dog: ', bestDogLi );
// // Change the *contents* of this tag (the stuff inside the tags)
// bestDogItem.innerHTML = 'Ruby';
//
// const pTags = document.getElementByTagName( 'p' );
//
// //Because getElementsByTagName returns an array-like thing, we can use a for loop
// // to do something with each <p> tag
// for( let i = 0; i < pTags.length; i ++){
//   const p = pTags[i]
//   console.log( p.innerHTML );
//   p.innerHTML = 'HAcks'
//
//   p.style.backgroundColor = 'darkgoldenrod'
// }
//
// // Create a brand new DOM node (Currently detatched from page, just in JS memory)
// const newBillImage = document.createElement( 'img' );
//
// // set some attributes of the object
// newBillImage.src = 'http://www.fillmurray.com/400/400';
// newBillImage.style.border = '10px solid lavender';
//
// // Actually attach our new detached DOM node to the DOM (making it visible)
// document.boyd.appendChild( newBillImage );
//
