//to add: innerHeight values
//to modify: directional handle
const cat = document.getElementsByClassName("catwalk")[0];
let newLeftPos = 0; // a new variable help keep track of the left absolute
let leftWalkInterval; // a variable to store an interval in
let rightWalkInterval; //Same as above
//makes the cat walk right and turns it at a certain point
const catwalkRight = function () {
    if ( newLeftPos >= (window.innerWidth - cat.width)){
        cat.style.transform = "scaleX(-1)";
        //stops the current interval running and then starts the other direction
        window.clearInterval(rightWalkInterval);
        return startLeftWalk();
    };
    newLeftPos += 10; 
    cat.style.left = newLeftPos + 'px';
};  
//same as the above exceptt the other direction
const catwalkLeft = function()
{
    if (newLeftPos <= 0){
        cat.style.transform = "scaleX(1)";
        //stops the current interval running and then starts the other direction
        window.clearInterval(leftWalkInterval);
        return startRightWalk();
    };
    newLeftPos -= 10;
    cat.style.left = newLeftPos + 'px';
};
//starts an interval for the cat to walk left
const startLeftWalk = function() {
    leftWalkInterval = window.setInterval(catwalkLeft, 50);
}
//starts an interval for the cat to walk right
const startRightWalk = function() {
    rightWalkInterval = window.setInterval(catwalkRight, 50);
}

startRightWalk();