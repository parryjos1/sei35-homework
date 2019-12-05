// const rainbowArray = [`red`, `orange`,`yellow`, `green`, `blue`, `indigo`, `violet`]
let newColor = ``;
let backgroundInterval;
let kannaTopPos = 0;
let kannaLeftPos = 0;
let kannaBounce = false;

const randomColourHex = function (){
    //fetches a random hexadecimal number and then returns it as a string
    const result = Math.floor(Math.random()*16777215).toString(16);
    return result;
}

// PROBLEMATIC - would not work when setInterval was given an existing function as a parameter
// const changeBgColour = function() {
//     let newBG = document.getElementById('background');
//     newColor = `#${randomColourHex()}`;
//     newBG.style.backgroundColor = newColor;
// };

//backgroundInterval = window.setInterval(changeBgColour(), 500);
let newBG = document.getElementById('background');
backgroundInterval = window.setInterval(function() {
    newColor = `#${randomColourHex()}`;
    newBG.style.backgroundColor = newColor;
}, 250);

//makes the initial image disappear and then unleashes the memes!



const unleashTheMemes = function (){
    const newImageKronk = document.createElement('img');
    newImageKronk.src = "memes/Kronk.gif";
    newImageKronk.style.width = `750px`;
    newImageKronk.style.height = `435px`;
    newImageKronk.style.position = `absolute`;
    newImageKronk.style.top = `50%`;
    newImageKronk.style.left = `50%`;
    newImageKronk.style.marginLeft = `-145px`;
    newImageKronk.style.marginTop = `-250px`;
    newImageKronk.style.zIndex = `1`;
    newBG.appendChild(newImageKronk);
    const newImageKanna = document.createElement(`img`);
    newImageKanna.src = `memes/kanna_koboyashi.gif`;
    newImageKanna.style.position = `absolute`;
    newImageKanna.style.zIndex = `2`;
    newBG.appendChild(newImageKanna);
    window.setInterval(function(){
        if ( kannaBounce === false ){
            if (kannaTopPos > 400){
                kannaBounce = true;
            };
            kannaTopPos += 10;
            kannaLeftPos += 40;
            newImageKanna.style.left = kannaLeftPos + `px`;
            newImageKanna.style.top = kannaTopPos + `px`;
            console.log(kannaTopPos);
        }else
            {
                kannaTopPos -= 10;
                kannaLeftPos -= 40;
                newImageKanna.style.left = kannaLeftPos + `px`;
                newImageKanna.style.top = kannaTopPos + `px`;
                if (kannaTopPos < 0){
                    kannaBounce = false;
                };
            };
    },75);
}

const cultured = document.getElementsByClassName("culture")[0];

const hideCultured = cultured.addEventListener('click', function(){
    cultured.style.visibility = `hidden`;
    unleashTheMemes();
    removeEventListener('click',hideCultured);
});