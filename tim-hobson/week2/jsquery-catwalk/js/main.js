const $body = $( 'body' );
const $pageWidth = $(window).innerWidth();
const $pageHeight = $(window).innerHeight();
const $mainCat = $('#mainCat');
const $catLength = parseInt($mainCat.css('width'));
const $catHeight = parseInt($mainCat.css('height'));
const $vertMiddleOfPage = ($pageHeight / 2) - ($catHeight / 2 );
const $middleOfPage = ($pageWidth / 2)- ($catLength /2);
const $discoClass = $('.discoClass');

$mainCat.css( 'top' , ($vertMiddleOfPage));

let pausedirection = null;
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



startDisco = function () {
  $mainCat.attr('src', 'images/squirrelape.gif');
  $discoClass.css('visibility', 'visible');
  $body.css('background-image', 'url(images/vapo.gif)');
};


cancelDisco = function () {
  $mainCat.attr('src', 'http://www.anniemation.com/clip_art/images/cat-walk.gif');
  $body.css('background-image', '');
  direction = pausedirection;
  $discoClass.css('visibility', 'hidden');
};




















//    JQUERY LOOP    //
///
// $('a').each(function () {
//   const link = $(this).attr('href');
//   const thumbnail = youtube.generateThumbnailUrl( link );
//   const $img = $('<img>');
//   $img.attr('src', thumbnail);
//   $(this).append( $img );
// });

// const strobe = function () {
//     function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//      // console.log(bgColor);
//     document.body.style.background = bgColor;
//     }
//   random_bg_color();
// }; // end of strobe
