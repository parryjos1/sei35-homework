var mainCat = document.querySelector('#mainCat')
mainCat.style.left = ('0px');
clientWidth = document.body.clientWidth

var catwalk = function () {
const mainCatWalkForward = function () {
  mainCat.style.left = (parseInt(mainCat.style.left) + 10 + 'px');
  if ((parseInt(mainCat.style.left)) >= (clientWidth - mainCat.width)) {
    window.clearInterval(mainCatWalkForwardTimer);
  }
}
const mainCatWalkReverse = function () {
  mainCat.style.left = (parseInt(mainCat.style.left) - 10 + 'px');
  if ((parseInt(mainCat.style.left)) <= ( 0 ) ) {
    window.clearInterval( mainCatWalkReverseTimer );
  }
}

}

catwalk()
// Here's the example I was trying to get working at the end of class:
// Get the second <img> tag from the page
// const bill = document.querySelectorAll("img")[1];
// window.setInterval(function () {
  // Get the current left offset (why do we need parseInt() ???) and add 10 to it
  // const newLeftPos = parseInt(bill.style.left) + 10;
	// set as the style value, and add the units back
  // bill.style.left = newLeftPos + 'px'
// }, 20);   // do this every 20ms, i.e. 50 times a secon
