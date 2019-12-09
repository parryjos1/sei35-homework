// const catCycle = document.querySelector('img');
//
// function catWalk(catCycle){
//   setInterval(function(){
//     // catCycle.style.left += '200px'
//     // let catCounter = catCycle.style.left;
//     // catCounter = '100px'
//     // catCycle.style.left = "300px"
//
//     // catCycle.style.left = "300px"
//
//     let oldCatPosition = parseInt(catCycle.style.left);
//
//     let newCatPosition = oldCatPosition + 10;
//
//     catCycle.style.left = newCatPosition + 'px';
//
//
//
//
//
//     console.log(catCycle.style.left);
//     // console.log(catCounter);
//   }, 200)
// };
//
// // catWalk(catCycle);

function moveCat() {
  let catImg = $('img#catOne');
  console.log(catImg[0]);
  let posLeft = 0;
  let pointOfReturnLeft = 1300;
  let id = setInterval(fram, 1);
  let trueFalse = trueFalse

  function frame() {
    if (trueFalse === true && posLeft < 1100 || posLeft === 0) {
      posLeft++;
      catImg.css('left', posLeft + 'px');
      catImg.css('transform', 'scaleX(1)');

      trueFalse = true

    } else if (posLeft > 0 && trueFalse === false){
        posLeft--;
        catImg.css('left', posLeft + 'px');
        catImg.css('transform', 'scaleX(-1)');
    };
  };
};
