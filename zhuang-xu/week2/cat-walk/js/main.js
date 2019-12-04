const cat = document.querySelector('img');

cat.style.left = '0px';
cat.style.top = (window.innerHeight - 400) / 2 + 'px';

let direction = 1;
let handle;

const walk = function() {
  let newLeftPos = parseInt(cat.style.left) + direction * 10;
  if (newLeftPos + cat.width > window.innerWidth || newLeftPos < 0) {
    direction = -1 * direction;
    if (direction === -1) {
      cat.className = 'reverse';
    } else {
      cat.removeAttribute('class');
    }
  }

  if (Math.abs(
      newLeftPos + 0.5 * cat.width - window.innerWidth /
      2) < 10) {
    newLeftPos += direction * 10;
    clearInterval(handle);
    cat.src = 'images/dancing-cat.gif';
    document.body.className = 'dancing';
    setTimeout(() => {
      cat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      document.body.removeAttribute('class');
      handle = setInterval(walk, 50);
    }, 1000 * 10);
  }
  cat.style.left = newLeftPos + 'px';
};

handle = setInterval(walk, 50);