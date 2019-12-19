let cat = $("#cat");
let pos = 0
let movingBack = function() {
  pos = pos - 6;
  cat.animate({left:"1200px"})
  if (cat.left === 0 + 'px') {
    clearInterval(dance)
    dance = setInterval(moving,10);
  }
}
function moving() {
    pos = pos + 6;
    cat.animate({
      left:"1200px",
      duration:100000,
    })
    if (cat.left === 1200 + 'px') {
      clearInterval(dance)
      dance = setInterval(movingBack);
    }
}
let dance = setInterval(moving, 10);
