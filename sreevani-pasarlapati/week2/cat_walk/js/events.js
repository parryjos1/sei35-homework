
// Black cat image is stored in img variable.
const img = document.getElementById('catWalk');
img.style.left = 0;

const body = document.querySelector('body');

let reverse = false;
const movePixels = 3; // movePixels is the pixels rate by which image will move back and forth.

// setting background colors of page to backgroundColors array.
const backgroundColors = ['blue','yellow','green'];

const catWalk = function() {

  const currentLeft = parseInt(img.style.left);

  // Image left will change according to currentLeft and movePixels w.r.t reverse being true or false.
  if(reverse){
    img.style.left = currentLeft - movePixels + 'px';
  } else {
    img.style.left = currentLeft + movePixels + 'px';
  }

  // This snippet will be executed by checking window's innerwidth and image's width.
  if (currentLeft > (window.innerWidth - img.width)) {
    reverse = true;
    img.style.transform = 'none';
  }
  else if(currentLeft <= 0) {
    reverse = false;
    img.style.transform = 'scaleX(-1)';
  }
};

// setInterval function calls catWalk for every 8ms.
 window.setInterval(catWalk, 8);

// This anonymous function inside of setInterval changes background colors in loop from an array.
window.setInterval( function() {
  const index = backgroundColors.indexOf(body.style.backgroundColor);
  body.style.backgroundColor = backgroundColors[(index + 1) % 3];
}, 90);
