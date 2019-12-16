console.log('attempt3');

//find cat1
let $cat1 = $('#cat1')
console.log($cat1);

let leftID = null;  // to do with clearInterval

$cat1.css({position: 'absolute', left: '0px', top: '0px'});

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;

console.log(maxWidth);
console.log(maxHeight);




const animate = function () {

  let startLeft = parseInt($cat1.css('left'));

  let startTop = parseInt($cat1.css('top'));

  $cat1.css({'transform': 'rotate(90deg)'});

  let moveDown = startTop + 10;

  $cat1.css('top', (moveDown + 'px'));


  if (moveDown >= 400) {

    clearInterval(leftID)

      $cat1.css({'bottom': '0px'});

      let startBottom = parseInt($cat1.css('bottom'));

  }





}; //ainimate

window.setInterval(animate, 100);
