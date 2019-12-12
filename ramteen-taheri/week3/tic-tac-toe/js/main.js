//events
let selection = document.querySelectorAll('.option');

selection.forEach(function(option){
    option.addEventListener('click', makeSelection);
});

function makeSelection(event) {
    const index = Array.from(selection).indexOf(event.target);
    if(index === 0) {
        //go to single 2 player offline
        window.location = './twoplayermenu.html';
    } else if(index === 1) {
        //go to single vs computer (easy)
        window.location = './singleplayer.html';
    } else if(index === 2) {
        //go to single vs computer (hard)
        window.location = './singleplayer2.html';
    } else if(index === 3) {
        //go to single vs computer
        window.location = './credits.html';
    }
}