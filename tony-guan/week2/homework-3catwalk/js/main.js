
const cat = document.querySelector("img");

console.log(cat);

let catWalkRight = function () {

  const oldLeft = parseInt(cat.style.left);
  const newRight = oldLeft + 10;
  cat.style.left = newRight + 'px';
  //img{ left: newRightpx }


  if( newRight > window.innerWidth - cat.width) {
    // console.log(newRight);
    window.clearInterval( walkID );

    //flip image

    // going back
const goBackLeft = parseInt(cat.style.right);
const goBackRight = goBackLeft - 10;
cat.style.right = goBackLeft - 'px';

if( goBackRight > window.innerwidth - cat.width ) {

window.clearInterval( walkID );

}

}

// when it reaches to the left side, then go back to the right

}



let walkID = window.setInterval(catWalkRight, 50);

// catWalkRight()



// Psudo code catWalk

// 1) Get the cat to walk right

// access the HTML element of the cat using javascript (querySelector funciton) and assign to a variable (cat).
// create a function (catWalk) and run every 50 milli seconds (using window.setInterval)
// Inside the catWalk function you need to move the cat position (cat.style.left) (which gets) run every 50 milli seconds

// 2) Get the cat to walk left

// When the left position gets to the end of the right screen, THEN we need to do something

// we need to change the position of the cat
// This is done with cat.style.left or cat.style.right
// The same as we moved the cat left, we now need to move it right

// 3).

// When the position of the cat.style.left hits 0, or the far left of the screen, then we need to make it go back the otherway again.

// We have to change the direction once more 
