console.log('MEOW');


const cat1 = document.querySelector('#cat1')

console.log(cat1);

cat1.style.position = 'absolute';
cat1.style.left = '0px';
cat1.style.webkitTransform = 'none';
const maxWidth = 800;
// let animateright;

const watchCatWalk = function() {
  cat1.style.webkitTransform ="scaleX(1)";
 let oldLeft = parseInt(cat1.style.left); //saves current left position as interger
 let newLeft = oldLeft + 10;  // adds 10px to oldLeft number
 cat1.style.left = newLeft + 'px'; //updates above to css positioning

   if (newLeft >= maxWidth) {        //if cat reaches right edge

     // const newLeft = oldLeft - 10;  // adds 10px to oldLeft number
     // cat1.style.left = newLeft - 'px';



     window.setInterval(reverse, 100)
     clearInterval(watchCatWalk)
     // oldLeft = 0;
     // newLeft = 0;

     // animateright = setInterval(walkBack,100)
     // clearInterval(animate)



      // window.clearInterval( this );

   };

};

const leftWalk = setInterval(watchCatWalk, 100);

const reverse = function() {
  cat1.style.webkitTransform ="scaleX(-1)";

    let startRight = parseInt(cat1.style.left);
    let newRight = startRight - 10;
    cat1.style.left = newRight + 'px';
    if (newRight <= 0) {

      window.setInterval(watchCatWalk, 100);
      clearInterval(rightWalk);
      // startRight = 800;
      // newRight = 800;
    }

};

const rightWalk = setInterval(reverse, 100);
