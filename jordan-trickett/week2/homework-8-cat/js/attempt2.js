let cat1 = document.querySelector('#cat1')

console.log(cat1);

cat1.style.position = 'absolute';
cat1.style.left = '0px';
// cat1.style.top = '300px';
cat1.style.right = '0px';
//
const maxWidth = 1200;  //window.innerWidth
const minWidth = 0;
//
const catWalkRight = function () {

    // cat1.style.right = '';  // emptying right value so starts moving

    let startLeft = parseInt(cat1.style.left);

    let moveLeft = startLeft + 10;

    cat1.style.left = moveLeft + 'px';

    if (moveLeft === maxWidth) {

      cat1.style.webkitTransform ="scaleX(-1)";

      cat1.src = "https://media1.tenor.com/images/15e8a1a220eeb46dd6b902f8de1e21e0/tenor.gif?itemid=5475792";

      return animateLeft();

      clearInterval(animateRight)


    }


}; //catWalkRight

let animateRight = function () {
  window.setInterval(catWalkRight, 100);
}



// cat1.style.right = '0px';
// const maxWidth = 960;  //window.innerWidth

const catWalkLeft = function () {

    let startRight = parseInt(cat1.style.right);

    cat1.style.left = '' ;

    let moveRight = startRight + 10;

    cat1.style.right = moveRight + 'px';

    if (parseInt(cat1.style.right) >= maxWidth) {
    //
      cat1.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"; //change cat image from car back

      // cat1.style.webkitTransform ="scaleX(1)";

      cat1.style.left = '0px';  // to reset left position so cat can start walking walkBack
    //   //
      return animateRight;
    //
      // clearInterval(animateLeft)
    //

    }

  }; //catWalkRight


//
const animateLeft = function () {
  window.setInterval(catWalkLeft, 100);
}

animateRight();
