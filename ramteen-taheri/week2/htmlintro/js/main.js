var background = document.querySelector("body");


window.setInterval(function() {
    background.style.background = "white";
    background.style.color= "black";
}, 1000);

window.setInterval(function() {
    background.style.background = "black";
    background.style.color= "green";
}, 2000);