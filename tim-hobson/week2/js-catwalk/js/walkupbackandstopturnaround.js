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

var catWalkLeft = setInterval(function () {
  mainCat.style.left = ( parseInt(mainCat.style.left) + 10 + 'px');
    if (parseInt(mainCat.style.left) >= (clientWidth - mainCat.width)) {
        mainCat.style.transform=("scaleX(-1)");
        clearInterval(catWalkLeft);
        var catWalkRight = setInterval(function () {
          mainCat.style.left = ( parseInt(mainCat.style.left) - 10 + 'px');
            if (parseInt(mainCat.style.left) <= 0 ) {
              mainCat.style.transform=("scaleX(1)");
              clearInterval(catWalkRight);
          }
        }, 50)
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
