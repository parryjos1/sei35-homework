let parrot = document.getElementById("rareparrot");
let newparrot = 0
let pos = 0
let newrareparrot = document.createElement("img")
newrareparrot.src = "https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif"
let movingBack = function() {
  pos = pos - 3
  parrot.style.left = pos + 'px'
  newparrot = newparrot + 20
  newrareparrot.style.left = newparrot + 'px'
  if (parrot.style.left === 0 + 'px') {
    clearInterval(dance)
    newrareparrot.style.left = newparrot + 'px'
    document.body.appendChild(newrareparrot);
    dance = setInterval(moving,10);
  }
}
function moving() {
    pos = pos + 3;
    parrot.style.left = pos + 'px';
    if (parrot.style.left === 1200 + 'px') {
      clearInterval(dance)
      dance = setInterval(movingBack);
    }
}
let dance = setInterval(moving, 10);
console.log("hello")
