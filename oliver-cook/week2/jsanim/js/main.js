


const catImage = document.querySelector('img');

catImage.style.position = 'absolute';
catImage.style.left = '0px';


const catWalk =function(){
     var oldLeft = parseInt(catImage.style.left);
 var newLeft  = oldLeft +10;
catImage.style.left = newLeft + 'px';
};



window.setInterval(catWalk, 50);


var windowSize =function() {
  var w = window.innerWidth;
  var h = window.innerHeight;


}
console.log( windowSize ) ;
