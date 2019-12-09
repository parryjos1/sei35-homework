// **************************************************************
// ******This is working to get my cat to walk up and back,******
// **********with a pause in the middle and changes img**********
// **************************************************************
const $body = $( 'body' );
const $pageWidth = $body.innerWidth();
const $mainCat = $('#mainCat');
const $catLength = parseInt($mainCat.css('width'));
const $middleOfPage = ($pageWidth / 2)- ($catLength /2);


let pausedirection = null;
let disco = false;
let direction = 0;



const catWalk = function () {

  const $catLocation = parseInt($mainCat.css ( 'left' ));
  const catMove = $catLocation + direction;

  $mainCat.css( 'left', catMove );

  if ($catLocation >= $middleOfPage && $catLocation <= $middleOfPage +50) {
    pausedirection = direction;
    direction = 0;
    startDisco();
    setTimeout( cancelDisco, 2000 );
  };

  if ($catLocation <= 50) {
    direction = 50;
    $mainCat.css( 'transform', 'scaleX(1)');

  };

  if ($catLocation >= ($pageWidth - $catLength)) {
    direction = -50;
    $mainCat.css( 'transform', 'scaleX(-1)');

  };

}; // end of cat walk

const catWalkLoop = window.setInterval(catWalk, 100);


cancelDisco = function () {
  $mainCat.attr('src', 'images/circle.png');
  direction = pausedirection;
};

startDisco = function () {
  $mainCat.attr('src', 'images/triangle.jpeg');
};
