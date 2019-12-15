console.log('hello Dom');

//Ask the DOM to give us the element we want to change
const billImage = document.getElementById('firstBill');


//Change something about the element -
//it looks the same as changing the value of an onject's key
//(because that's exactly what is happening)
billImage.src = 'http://placebear.com/300/300';

const bestDogLi = document.getElementById('BestDog');

console.log( 'best dog: ', bestDogLi );
// Change the *contents* of this tag (the stuff inside the tags)
bestDogItem.innerHTML = 'Ruby';

const pTags = document.getElementByTagName( 'p' );

//Because getElementsByTagName returns an array-like thing, we can use a for loop
// to do something with each <p> tag
for( let i = 0; i < pTags.length; i ++){
  const p = pTags[i]
  console.log( p.innerHTML );
  p.innerHTML = 'HAcks'

  p.style.backgroundColor = 'darkgoldenrod'
}

// Create a brand new DOM node (Currently detatched from page, just in JS memory)
const newBillImage = document.createElement( 'img' );

// set some attributes of the object
newBillImage.src = 'http://www.fillmurray.com/400/400';
newBillImage.style.border = '10px solid lavender';

// Actually attach our new detached DOM node to the DOM (making it visible)
document.boyd.appendChild( newBillImage );
