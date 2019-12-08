//
// const theCat = document.querySelector('img');
//
// // console.log(theCat);
// window.setInterval(function () {
// // const catWalkLeft = function() {
//   const newLeftPos = parseInt(theCat.style.left) + 10;
//   theCat.style.left = newLeftPos + 'px';
// }, 50);


// const theCat = document.querySelector('img');
// window.setInterval(function () {
//   const newLeftPos = parseInt(theCat.style.left) + 10;
//   theCat.style.left = newLeftPos + 'px';
// }, 50);


//googled the solution....LOL
const theCat = document.querySelector('.cat1');
  theCatPosition = 0,
  theCatSpeed = 10,
  pageWidth = document.body.offsetWidth - theCat.offsetWidth;

  setInterval(function() {
  theCat.style.left = (theCatPosition += theCatSpeed) + 'px';

  if (theCatPosition <= 0) {
    // start moving right
     theCatSpeed *= -1;
     // theCat.style.transform = rotateY(180deg);
  } else if(theCatPosition >= pageWidth) {
    // start moving left
     theCatSpeed *= -1;
    theCat.style.transform = ('scaleX(-1)');

    //rotateY(180deg)
  }

  // if (theCatPosition <= 0 || theCatPosition >= pageWidth) {
  //   theCatSpeed *= -1;
  // }
}, 50);

//
const theOtherCat = document.querySelector('.cat2');
  theOtherCatPosition = 0,
  theOtherCatSpeed = 12,
  pageWidth = document.body.offsetWidth - theOtherCat.offsetWidth;

  setInterval(function() {
  theOtherCat.style.right = (theOtherCatPosition += theOtherCatSpeed) + 'px';

  if (theOtherCatPosition <= 0) {
    // start moving right
     theOtherCatSpeed *= +1;

     // theOtherCat.style.transform = rotateY(180deg);
    } else if(theOtherCatPosition >= pageWidth) {
    // start moving left
     theOtherCatSpeed *= -1;
    theOtherCat.style.transform = ('rotateY(180deg)');

    }

}, 50);


//possible solution - create a if/else statement to print true moving forward
//and false for walking back and set attributes to flip the cat
