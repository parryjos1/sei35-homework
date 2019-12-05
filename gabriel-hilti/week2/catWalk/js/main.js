const img = document.querySelector('img');

const w = window.innerWidth,
      h = window.innerHeight,
      viewport = w - 300;
let pos = 0,
    direction = true,
    intervalId = null;

const randomCol = function() {
  const maxHex = 16**6;
  const col = Math.floor(Math.random()*maxHex);
  return col.toString(16);
};

const crazy = function() {
  document.body.style.width = '100vw';
  document.body.style.height = '100vh';
  img.src = "https://media.giphy.com/media/vIQm4HIpqnIt2/giphy.gif";
  let col1, col2, col3, rot = 0;

  const colorPicker = setInterval(function() {
    col1 = randomCol();
    col2 = randomCol();
    col3 = randomCol();
  }, 50);

  document.body.addEventListener('mousemove', function(e) {
    rot += 15;
    document.body.style.background = `radial-gradient(closest-side at ${(e.clientX/w)*100}% ${(e.clientY/h)*100}%, #${col1}, #${col2}, #${col3})`;
    img.style.top = `${e.clientY}px`;
    img.style.left = `${e.clientX}px`;
    img.style.transform = `rotate(${rot}deg)`;
  });

};

const walk = function() {

  if (direction) {
    pos += 10;
  } else {
    pos -= 10;
  }

  img.style.left = pos + 'px';
  console.log(img.style.left);
};

const walkTask1 = function() {
  if (pos < viewport) {
    walk();
  } else {
    pos = 0;
  }
};

const walkTask2 = function() {
  if (pos >= viewport - 10) {
    img.style.transform = 'scaleX(-1)';
    direction = !direction;
  } else if (!direction && pos < 10 ) {
    img.style.transform = 'scaleX(1)';
    direction = !direction;
  }
  walk();
};

const walkTask3 = function() {
  if (Math.abs(pos - (viewport/2)) <= 10 ) {
    walk(); // hack: walks two times in a row when emerged in the middle otherwise condition could occur twice
    clearInterval(intervalId);
    img.src = 'images/giphy.gif';
    setTimeout(function() {
      img.src= 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      intervalId = setInterval(function() {
        walk();
        catWalk(3);
      }, 50);
    }, 2000);
  } else {
    walkTask2();
  }
};


const catWalk = function(option) {
  switch(option) {
    case 1:
            walkTask1();
            break;
    case 2:
            walkTask2();
            break;
    case 3:
            walkTask3();
            break;
    default:
            crazy();
  }
};


intervalId = setInterval(function() {
  //catWalk(1);
  //catWalk(2);
  //catWalk(3);
  crazy();
}, 50);
