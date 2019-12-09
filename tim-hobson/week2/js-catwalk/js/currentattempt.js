var mainCat = document.querySelector( '#mainCat' );
mainCat.style.left = '0px'
var body = document.body
var clientWidth = window.innerWidth
var clientHeight = window.innerHeight
var halfOfHeight = ((window.innerHeight/2) - (mainCat.height/2))
mainCat.style.top = halfOfHeight + 'px'
let stop = 0
let moveForward = 10
let moveBack = -10
let num = moveForward
var mainCatHalfway = ((clientWidth / 2) - (mainCat.width / 2));
var mainCatHalfwayTens = Math.ceil((mainCatHalfway+1)/10)*10;
let dancetime = false
var newCat = null
var disco = document.querySelectorAll( '.disco' );


// cat walking
var catWalk = function () {
  var catPositionInt = parseInt(mainCat.style.left)
  mainCat.style.left = ( parseInt(mainCat.style.left) + num + 'px');

  //dance time
  if (catPositionInt === (mainCatHalfwayTens)) {
    dancetime = true
    mainCat.src = 'https://i.imgur.com/eYTu0KF.gif'
    let currentDirection = num
    num = stop
    var counter = 2;
    var danceCountDown = setInterval(function(){
      // console.log(counter);
      counter--
      if (counter === 1) {
        mainCat.src = 'images/cat-walk.gif';
        num = currentDirection
        dancetime = false
        body.style.background = 'white'
        for (var i = 0; i < disco.length; i++) {
          disco[i].style.visibility = 'hidden'
        }
      }
    }, 1000);
  }

  if (catPositionInt >= (clientWidth - mainCat.width) ) {
    mainCat.style.transform=("scaleX(-1)");
    num = moveBack
  }

  if (catPositionInt < 0 ) {
    mainCat.style.transform=("scaleX(1)");
    num = moveForward
  }
}; // end of cat walk

var startCatWalk = window.setInterval(catWalk, 50);


var discoTime = function () {
  if (dancetime === true) {

    // console.log(`hello`);
    for (var i = 0; i < disco.length; i++) {
      disco[i].style.visibility = 'visible'
    }
    function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     // console.log(bgColor);
    document.body.style.background = bgColor;
    }
  random_bg_color();
  }

}; // end of disco time

var discoStart = window.setInterval(discoTime, 50);






// adding cats



// createNewCat = function () {
//
//   if (dancetime === true) {
//     for (var i = 0; i < 1; i++) {
//       newCat = document.createElement( 'img' );
//       newCat.src = 'images/angrydog.gif'
//       newCat.style.position = 'absolute'
//       newCat.style.left = '0px'
//       newCat.style.top = '0px'
//       newCat.className = 'newCat'
//       // console.log( newCat.style.visibility )
//       body.appendChild( newCat )
//     }
//     console.log(`TRUE`);
//     // newCat = document.createElement( 'img' );
//     // newCat.src = 'images/angrydog.gif'
//     // newCat.style.position = 'absolute'
//     // newCat.style.left = '0px'
//     // newCat.style.top = '0px'
//     // newCat.className = 'newCat'
//     // body.appendChild( newCat )
//     // console.log(newCat);
//     // window.clearInterval( startCreateCat );
//   }
//   else if (dancetime === false ) {
//       console.log(`FALSE`);
//       // console.log(newCat);
//       // var newCatHide = document.querySelector('.newCat')
//       // newCatHide.style.visibility = 'hidden'
//     }
// }
//
//
//
// var startCreateCat = window.setInterval(createNewCat, 50);


// // Create elements
// var newParagraph = document.createElement('p');
// var paragraphText = document.createTextNode('New Paragraph!');
// // Style an element (before it is on the page)
// newParagraph.style.fontFamily = "Comic Sans";
// newParagraph.style.color = "hotpink";
// // Put the element on the page
// newParagraph.appendChild(paragraphText);
// document.body.appendChild(newParagraph);
//
