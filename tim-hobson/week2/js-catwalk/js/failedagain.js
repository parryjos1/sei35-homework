var mainCat = document.querySelector( 'img' );
mainCat.style.left = '0px'
// var catPositionInt = parseInt(mainCat.style.left)
var clientWidth = window.innerWidth

var counter = 10;
var newYearCountdown = setInterval(function(){
  console.log(counter);
  counter--
  if (counter === 0) {
    console.log("HAPPY NEW YEAR!!");
    clearInterval(newYearCountdown);
  }
}, 1000000);

var catWalk = setInterval(function () {
    if (parseInt(mainCat.style.left) > (clientWidth - mainCat.width)) {
      // var catWalkRight = setInterval(function () {
      mainCat.style.left = ( parseInt(mainCat.style.left) + 10 + 'px');

      // direction = 10
        // mainCat.style.transform=("scaleX(-1)");
        // clearInterval(catWalkLeft);
    } if (parseInt(mainCat.style.left) < (0) ) {
        mainCat.style.left = ( parseInt(mainCat.style.left) - 10 + 'px');
        console.log(mainCat.style.left);
              // direction = -10
        //       mainCat.style.transform=("scaleX(1)");
        //       clearInterval(catWalkRight);
        //   }
        // }, 50)
    }
}, 50);








// var catWalkRight = setInterval(function () {
//   console.log( mainCat.style.left );
//   mainCat.style.left = ( parseInt(mainCat.style.left) - 10 + 'px');
//     if (parseInt(mainCat.style.left) <= 0 ) {
//       console.log(`hello`);
//       clearInterval(catWalkRight);
//   }
// }, 50)
