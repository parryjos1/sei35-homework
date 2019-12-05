var mainCat = document.querySelector('#mainCat');
mainCat.style.left = ('0px')
var clientWidth = document.body.clientWidth


var mainCatWalk = function () {
  mainCat.style.left = ( parseInt(mainCat.style.left) + 10 + 'px')
  if (parseInt(mainCat.style.left) >= (clientWidth - (mainCat.width))) {
    mainCat.style.transform=("scaleX(-1)")
    window.clearInterval( mainCatWalkTimer );
    mainCatWalkReverseTimer = window.setInterval( mainCatWalkReverse, 50 );
      }
};

var mainCatWalkReverse = function () {
  mainCat.style.left = ( parseInt(mainCat.style.left) - 10 + 'px')
  if ((parseInt(mainCat.style.left) <= 0)) {
    mainCat.style.transform=("scaleX(1)")
    window.clearInterval( mainCatWalkReverseTimer );
    // window.setInterval(mainCatWalk, 50);
    }
};

var 

// var mainCatWalkTimer = window.setInterval(mainCatWalk, 50);




//  mnvar mainCat = document.querySelector('#mainCat');
// mainCat.style.left = ('0px')
// var clientWidth = document.body.clientWidth
//
//
// var mainCatWalk = function () {
//   mainCat.style.left = ( parseInt(mainCat.style.left) + 10 + 'px')
//   if (parseInt(mainCat.style.left) >= (clientWidth - (mainCat.width))) {
//     mainCat.style.transform=("scaleX(-1)")
//     window.clearInterval( mainCatWalkTimer );
//     // window.setInterval( mainCatWalkReverse, 50 );
//   }
// };
// var mainCatWalkTimer = window.setInterval(mainCatWalk, 50);
//
// var main
//
//
// var mainCatWalkReverse = function () {
//   mainCat.style.left = ( parseInt(mainCat.style.left) - 10 + 'px')
//   if ((parseInt(mainCat.style.left) <= 0)) {
//     mainCat.style.transform=("scaleX(1)")
//     window.clearInterval( mainCatWalkReverse );
//     }
// }
//
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // var mainCatWalk = function () {
// //   mainCat.style.left = ( parseInt(mainCat.style.left) + 10 + 'px')
// //   if (parseInt(mainCat.style.left) >= (clientWidth - (mainCat.width))) {
// //     mainCat.style.transform=("scaleX(-1)")
// //     window.clearInterval( mainCatWalkTimer );
// //     window.setInterval( mainCatWalkReverse, 50 );
// //       }
// // };
// //
// // var mainCatWalkReverse = function () {
// //   mainCat.style.left = ( parseInt(mainCat.style.left) - 10 + 'px')
// //   if ((parseInt(mainCat.style.left) <= 0)) {
// //     mainCat.style.transform=("scaleX(1)")
// //     window.clearInterval( mainCatWalkReverse );
// //     }
// // }
// //
// // var mainCatWalkTimer = window.setInterval(mainCatWalk, 50);
// //
//
//
// // Here's the example I was trying to get working at the end of class:
// // // Get the second <img> tag from the page
// // const bill = document.querySelectorAll("img")[1];
// // ​
// // window.setInterval(function () {
// //   // Get the current left offset (why do we need parseInt() ???) and add 10 to it
// //   const newLeftPos = parseInt(bill.style.left) + 10;
// // ​
// // 	// set as the style value, and add the units back
// //   bill.style.left = newLeftPos + 'px';
// //
// // }, 20);   // do this every 20ms, i.e. 50 times a second
