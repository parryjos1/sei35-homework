$(document).ready(function() {
  const $img = $('img');

  const w = $(window).width(),
        h = $(window).width(),
        viewport = w - 300;
  let pos = 0,
      direction = true,
      intervalId = null;

  const randomCol = function() {
    const maxHex = 16**6;
    const col = Math.floor(Math.random()*maxHex);
    return col.toString(16);
  };

  const time1 = 50 * (w/2 - 300/2)/10;
  const time2 = 2 * 5000 + 2 * time1;

  const crazy = function() {
    $('body').css({
      width: '100vw',
      height: '100vh'
    });
    let rot = 0;
    $('img').attr('src', "https://media.giphy.com/media/vIQm4HIpqnIt2/giphy.gif");
    let counter = 0;
    let col1 = 'white', col2 = 'white', col3 = 'white';
    $('body').on('mousemove', function(e) {
        rot += 5;
        counter++;
        if (counter % 4 === 0) {
          col1 = randomCol();
          col2 = randomCol();
          col3 = randomCol();
        }
        $('body').css('background', `radial-gradient(closest-side at ${(e.pageX/w)*100}% ${(e.pageY/h)*100}%, #${col1}, #${col2}, #${col3})`);
        $('img').css({'left': `${e.pageX-340/2}px`, 'top': `${e.pageY - 340/2}px`}).css({'transform': `rotate(${rot}deg)`});
    });
    setTimeout(function() {
      $('body').off('mousemove').css('background', 'white');
      $('img').attr('src', "http://www.anniemation.com/clip_art/images/cat-walk.gif").css({
      left: `${w/2}px`,
      top: '400px',
      transform: 'rotate(0deg)'});
    }, 5000);
  };



  const catWalk = function() {
    //const time = 50 * (w/2 - 300/2)/10;
    $img.animate({left: `${w/2 - 300/2}px`}, {duration: time1, easing: 'linear', done: function() {
      crazy();
    }
  }).delay(5000).animate({left: `${w - 300}px`}, {duration: time1, easing: 'linear'});
    $img.attr('transform', 'scaleX(-1)');

    $img.animate({left: `${w/2 - 300/2}px`}, {duration: time1, easing: 'linear', done: function() {
      crazy();
    }
  }).delay(5000).animate({left: '0px'}, {duration: time1, easing: 'linear'});
    $img.attr('transform', 'scaleX(1)');
  }
catWalk();
setInterval(function() {
  catWalk();
}, time2);
});
