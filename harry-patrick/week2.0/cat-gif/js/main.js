
function moveCat() {
  let catImg = $('img#catOne');
  console.log(catImg[0]);
  let posLeft = 0;
  let pointOfReturnLeft = 1300;
  let id = setInterval(frame, 1);
  let trueFalse = true

  function frame() {
      if ( trueFalse === true && posLeft < 1100 || posLeft === 0) {
        posLeft++;
        catImg.css('left', posLeft + 'px');
        catImg.css('transform', 'scaleX(1)');

        trueFalse = true
    } else if (posLeft > 0  && trueFalse === false){
        posLeft--;
        catImg.css('left', posLeft + 'px');
        catImg.css('transform', 'scaleX(-1)');
        trueFalse = false

    } else{
      trueFalse = false

    }
  }
};

moveCat();


function moveSonic() {
  let sonicImg = $('#sonicImg');
  let posLeftSonic = 0;
  let pointOfReturnLeftSonic = 1800;
  let idSonic = setInterval(frame, 1);
  function frame() {
      if (posLeftSonic < pointOfReturnLeftSonic) {
        posLeftSonic++;
        sonicImg.css('left', posLeftSonic + 'px')

    } else {
      posLeftSonic = 0

    }
  }
};

moveSonic();


function moveDog() {
  let dogImg = $('#dog');
  let posRightDog = 0;
  let pointOfReturnRightDog = 1800;
  let idDog = setInterval(frame, 1);
  function frame() {
      if (posRightDog < pointOfReturnRightDog) {
        posRightDog++;
        dogImg.css('right', posRightDog + 'px');
    } else {
      posRightDog = 0

    }
  }
};

moveDog();

function flashborat() {
  let borat = $('#borat');
  let flashing = setInterval(flash, 1000);
  let delay = 0;
  function flash() {
    if (delay % 2 === 0) {
      borat.css('visibility', 'hidden');
      delay++;
    } else {
      borat.css('visibility', 'visible');
      delay++;
    }
  }
};
flashborat();

function flashTerry() {
  let terry = document.querySelector('#terry');
  let flashing = setInterval(flash, 5000);
  let delay = 0;
  function flash() {
    if (delay % 2 === 0){
      terry.style.visibility = "hidden";
      delay++;
    } else {
      terry.style.visibility = "visible";
      delay++;
    }
  }
};

flashTerry();
