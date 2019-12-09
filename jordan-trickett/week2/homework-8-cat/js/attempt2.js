let cat1 = document.querySelector('#cat1')

let rightID = null;
let leftID = null;

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


    let startLeft = parseInt(cat1.style.left);

    let moveLeft = startLeft + 10;

    cat1.style.left = moveLeft + 'px';

// console.log('catWalkRight()')

    if (moveLeft === maxWidth) {

      cat1.src = "https://media1.tenor.com/images/15e8a1a220eeb46dd6b902f8de1e21e0/tenor.gif?itemid=5475792";

      cat1.style.transform ="scaleX(-1)";


      animateLeft();

      clearInterval( rightID );
      // cat1.style.right = ''




    }


}; //catWalkRight

let animateRight = function () {
  rightID = window.setInterval(catWalkRight, 100);
}



// cat1.style.right = '0px';
// const maxWidth = 960;  //window.innerWidth

const catWalkLeft = function () {


    let startRight = parseInt(cat1.style.left);

    // cat1.style.left = '' ;

    let moveRight = startRight - 10;

    cat1.style.left = moveRight + 'px';

    console.log(catWalkLeft());

    if (parseInt(cat1.style.left) <= minWidth) {
    //
      cat1.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"; //change cat image from car back

      cat1.style.transform ="scaleX(1)";

      // cat1.style.left = '0px';  // to reset left position so cat can start walking walkBack
    //   //
      animateRight();

      clearInterval( leftID );
    //
    //

    }

  }; //catWalkRight


//
const animateLeft = function () {
  leftID = window.setInterval(catWalkLeft, 100);
}

// rightID();

animateRight();
