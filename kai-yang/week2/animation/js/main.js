// Exercises: Animation
// The Cat Walk
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// for walking cat
const cat = document.querySelector('#walkingCat'); //select img tag
cat.style.left = '0px'; //set origin point
let walkForward = true; //define walkForward as true
const catWalk = function(){ //catwalk function
  let currentLeft = parseInt(cat.style.left); //set current position same as origin position.
  if (walkForward && (currentLeft > (window.innerWidth - cat.width))){
    walkForward = false; //check if the cat is moving out of the right edge
    cat.style.transform = 'scaleX(-1)';//flip the image.
  }
  if (!walkForward && (currentLeft <= 0)) {
    walkForward = true; //check if the cat is moving out of the left border.
    cat.style.transform = 'scaleX(1)';// flip the image again.
  }
  if (walkForward){
    cat.style.left = (currentLeft + 10) + 'px';
  }
    else {         // if the cat is not moving forward decrease the left position. move back
    cat.style.left = (currentLeft - 10) + 'px';
  }
};

window.setInterval(catWalk, 50); //run the function
//for fly cat
const flyCat = document.querySelector('#flyCat');
flyCat.style.left = '0px';
flyCat.style.bottom = '0px';
let moveRight = true;
let moveUp = true;
const catMove = function(){
  let currentCatLeft = parseInt(flyCat.style.left);
  let currentCatBottom = parseInt(flyCat.style.bottom);
  if (moveRight && (currentCatLeft > (window.innerWidth - flyCat.width))){
    moveRight = false; //check if it is moving out right side.
  }
  if (moveUp && (currentCatBottom > (window.innerHeight - flyCat.height))){
    moveUp = false; //check if it is moving out top side.
  }
  if (!moveRight && currentCatLeft <=0){
    moveRight = true; //check if it is moving out right side.
  }
  if (!moveUp && currentCatBottom <=0){
    moveUp = true;
  }
  if (moveRight) {
    flyCat.style.left = (currentCatLeft + 10) + 'px';
  }
  if (moveUp) {
    flyCat.style.bottom = (currentCatBottom + 10) + 'px';
  }
  if (moveRight === false) {
    flyCat.style.left = (currentCatLeft - 10) + 'px';
  }
  if (moveUp === false) {
    flyCat.style.bottom = (currentCatBottom - 10) + 'px'
  }
};
window.setInterval(catMove, 50);

//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.
