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
  if (theCatPosition <= 0 || theCatPosition >= pageWidth) {
    theCatSpeed *= -1;
  }
}, 50);

const theOtherCat = document.querySelector('.cat2');
  theOtherCatPosition = 0,
  theOtherCatSpeed = 12,
  pageWidth = document.body.offsetWidth - theOtherCat.offsetWidth;

  setInterval(function() {
  theOtherCat.style.right = (theOtherCatPosition += theOtherCatSpeed) + 'px';
  if (theOtherCatPosition <= 0 || theOtherCatPosition >= pageWidth) {
    theOtherCatSpeed *= -1;
  }
}, 50);
