let parrot = document.getElementById("rareparrot");
let newparrot = 0
let pos = 0
let newrareparrot = document.createElement("img")
newrareparrot.src = "https://emoji.slack-edge.com/T0351JZQ0/aussie_conga_parrot/8ce7aa08b0a6829e.gif"
let movingBack = function() {
  pos = pos - 6;
  parrot.style.left = pos + 'px'
  newparrot = newparrot + 1;
  if (parrot.style.left === 0 + 'px') {
    clearInterval(dance)
    newrareparrot.style.display = "inline-block";
    document.body.appendChild(newrareparrot.cloneNode());
    newrareparrot.style.position = "absolute";
    newrareparrot.style.left = newparrot + "px"
    dance = setInterval(moving,10);
  }
}
function moving() {
    pos = pos + 6;
    parrot.style.left = pos + 'px';
    if (parrot.style.left === 1200 + 'px') {
      clearInterval(dance)
      dance = setInterval(movingBack);
    }
}
let dance = setInterval(moving, 10);
