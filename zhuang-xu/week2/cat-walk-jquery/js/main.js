const $cat = $('img');

$cat.css('left', '0');
$cat.css('top', (window.innerHeight - 400) / 2 + 'px');

let direction = 1;
let handle;

const walk = function() {
  let newLeftPos = parseInt($cat.css('left')) + direction * 10;

  // Check if cat hits either right or left wall
  if (newLeftPos + $cat.width() > window.innerWidth || newLeftPos < 0) {
    direction = -1 * direction;
    if (direction === -1) {
      $cat.addClass('reverse');
    } else {
      $cat.removeClass('reverse');
    }
  }

  // Cat steps into the middle of the stage
  if (Math.abs(
      newLeftPos + 0.5 * $cat.width() - window.innerWidth / 2) < 10) {
    newLeftPos += direction * 10;

    // Stops walking by clearing the interval callback
    clearInterval(handle);

    $cat.attr('src', 'images/dancing-cat.gif');
    $('body').addClass('dancing');

    // Resume walking after dancing for a while
    setTimeout(() => {
      $cat.attr('src',
          'http://www.anniemation.com/clip_art/images/cat-walk.gif');
      $('body').removeClass('dancing');
      handle = setInterval(walk, 50);
    }, 1000 * 2);
  }
  $cat.css('left', newLeftPos + 'px');
};

handle = setInterval(walk, 50);
