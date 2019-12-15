const rainbowArray = [`red`, `orange`,`yellow`, `green`, `blue`, `indigo`, `violet`]
let newColor = ``;
let backgroundInterval;
const body = document.querySelector('body');

const randomArrayInt = function (array){
    const multiplier = array.length;
    const result = Math.floor(Math.random()*multiplier);
    return result;
}

const changeBgColour = function() {
    newColor = `${rainbowArray[randomArrayInt(rainbowArray)]}`;
    body.style.backgroundColor = newColor;
};

const startBgColour = function (){
    backgroundInterval = window.setInterval(changeBgColour(), 500);
}
startBgColour();