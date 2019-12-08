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
    mainCatWalkTimer;
    // window.setInterval(mainCatWalk, 50);
    }
};

var mainCatWalkTimer = window.setInterval(mainCatWalk, 50);
