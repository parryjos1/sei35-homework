const img = document.querySelector('img');

let pos = 0;
img.style.left = pos;
const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const  viewport = w - 300;
let direction = 'right';
let leftPosId = null;
let col1 = 'white', col2 = 'white', col3 = 'white';
let rot = 0;

const randomCol = function() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  const col = [r, g, b];
  return col;
};

const colorPicker = setInterval(function() {
  col1 = randomCol();
  col2 = randomCol();
  col3 = randomCol();
  console.log(col1);
}, 100);

const crazy = function() {
  document.body.style.width = '100vw';
  document.body.style.height = '100vh';
  img.src = "https://media.giphy.com/media/vIQm4HIpqnIt2/giphy.gif";
  document.body.addEventListener('mousemove', function(e) {
    rot += 1;
    document.body.style.background = `radial-gradient(closest-side at ${(e.clientX/w)*100}% ${(e.clientY/h)*100}%, rgb(${col1[0]},${col1[1]}, ${col1[2]}), rgb(${col2[0]},${col2[1]}, ${col2[2]}), rgb(${col3[0]},${col3[1]}, ${col3[2]})`;
    img.style.top = `${e.clientY}px`;
    img.style.left = `${e.clientX}px`;
    img.style.transform = `rotate(${rot}deg)`;
  });


};

const catWalk = function(option) {
  if (option === 1) {
    if (pos < viewport) {
      pos += 10;
    } else {
      pos = 0;
    }
  } else if (option === 2) {
      if (direction === 'right' && pos < viewport) {
        pos += 10;
      } else if (direction === 'right' && pos >= viewport) {
        direction = 'left';
        img.style.transform = 'scaleX(-1)';
      } else if (direction === 'left' && pos >= 10) {
        pos -= 10;
      } else if (direction === 'left' && pos < 10) {
        direction = 'right';
        img.style.transform = 'scaleX(1)';
      }
  } else if (option === 3) {
    if (direction === 'right' && Math.abs((viewport/2) - pos)  < 10) {
      pos += 20;
      img.src = 'https://media.giphy.com/media/4BJCvMoLPePq8/giphy.gif';
      clearInterval(intervalId);
      setTimeout(function() {
        intervalId = setInterval(function() {
          img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
          catWalk(3);
        }, 50);
      }, 5000);
    } else if (direction === 'right' && pos < viewport) {
      pos += 10;
    } else if (direction === 'right' && pos >= viewport) {
      direction = 'left';
      img.style.transform = 'scaleX(-1)';
    } else if (direction === 'left' && Math.abs(pos - (viewport/2)) < 10 ) {
      clearInterval(intervalId);
      img.src = 'https://media.giphy.com/media/4BJCvMoLPePq8/giphy.gif';
      pos -= 20;
      setTimeout(function() {
        intervalId = setInterval(function() {
          img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
          catWalk(3);
        }, 50);
      }, 5000);
    } else if (direction === 'left' && pos > viewport + 10) {
      pos -= 10;
    } else if (direction === 'left' && pos >= 10) {
      pos -= 10;
    } else {
      direction = 'right';
      img.style.transform = 'scaleX(1)';
    }
  } else {
    crazy();
  }
  img.style.left = pos + 'px';

};



intervalId = setInterval(function() {
  catWalk();
}, 50);
