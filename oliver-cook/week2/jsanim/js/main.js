


const catImage = document.querySelector('img');
console.log(catImage.style);

var w = window.innerWidth;
var h = window.innerHeight;
console.log(w,h);


catImage.style.position = 'absolute';
catImage.style.left = '0px';
catImage.style.width = '250px'
catImage.style.scaleX= '1';

const catWalk =function(){
     var oldLeft = parseInt(catImage.style.left);
 var newLeft  = oldLeft +10;
catImage.style.left = newLeft + 'px';


let catPosition = parseInt(catImage.style.left)
// console.log(catPosition);
const catWidthNumber = parseInt(catImage.style.width);
// const endOfScreenRight = w - catWidthNumber;

const gameChanger = parseInt(w) - parseInt(catWidthNumber)
// console.log(parseInt(w));
// console.log(parseInt(catWidthNumber));
console.log(gameChanger);
// console.log(catPosition);

if (catPosition == 1000) {
  catImage.style.left = '10px';

  console.log('WORKINGGGGGGGGGGG');
let catScale = parseInt(catImage.style.scaleX);
  if (catPosition  < 900)
     catImage.style.scaleX = -1;
     console.log( catScale) ;
//if (catPosition + gameChanger > w;
  //catImage scaleX(-1);





  // next steps

  // once it hits here
  // reverse the image

  // then send it back the other way

  // write the logic for the other side



}



// if (catPosition === w - catWidthNumber){
//   // if (catPosition ==  ){
//
//   console.log('WORKINGGGGGGGGGGG');
//   catImage.style.left = '600px';
//
// }

};

window.setInterval(catWalk, 50);
var windowSize =function() {
//console.log( windowSize ) ;
}
