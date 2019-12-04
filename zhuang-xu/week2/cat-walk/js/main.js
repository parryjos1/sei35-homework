const cat = document.querySelector('img');

cat.style.left = '0px';
cat.style.top = (window.innerHeight - 400) / 2 + 'px';

let direction = 1;
let handle;

const walk = function() {
  let newLeftPos = parseInt(cat.style.left) + direction * 10;

  // Check if cat hits either right or left wall
  if (newLeftPos + cat.width > window.innerWidth || newLeftPos < 0) {
    direction = -1 * direction;
    if (direction === -1) {
      cat.className = 'reverse';
    } else {
      cat.removeAttribute('class');
    }
  }

  // Cat steps into the middle of the stage
  if (Math.abs(
      newLeftPos + 0.5 * cat.width - window.innerWidth /
      2) < 10) {
    newLeftPos += direction * 10;

    // Stops walking by clearing the interval callback
    clearInterval(handle);

    cat.src = 'images/dancing-cat.gif';
    document.body.className = 'dancing';

    // Resume walking after dancing for a while
    setTimeout(() => {
      cat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      document.body.removeAttribute('class');
      handle = setInterval(walk, 50);
    }, 1000 * 10);
  }
  cat.style.left = newLeftPos + 'px';
};

handle = setInterval(walk, 50);