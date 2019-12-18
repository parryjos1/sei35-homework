// Create a variable to store a reference to the img.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.


const allCats = document.getElementsByTagName('img');

for (let i = 0; i < allCats.length; i++ ) {
    if (i !== 2) {
    allCats[i].style.visibility = 'hidden';
    }
}

let dancingCat = allCats[0];
let catPlays = allCats[1];
let walkingCat = allCats[2];
let runningCat = allCats[3];
let sleepyCat = allCats[4];

let middleCat = allCats[0];
let cat = allCats[2];

// cats initial position
cat.style.top= (Math.abs(cat.heigh - catPlays.height) + 'px').toString();
cat.style.left= '0px';

dancingCat.style.top= ((cat.height - dancingCat.height) + 'px').toString();
dancingCat.style.left= ((window.innerWidth-dancingCat.width)/2+'px').toString();

catPlays.style.top= (Math.abs(cat.height - catPlays.height) + 'px').toString();
catPlays.style.left= ((window.innerWidth-catPlays.width)/2+'px').toString();

const getMiddleCat = function() {
    const randomNum = Math.floor(Math.random());
    console.log(randomNum);
    middleCat = allCats[randomNum];
}


let catWidth = cat.width;
let middleCatWidth = dancingCat.width;


let movement = 1;
// let windowLength = cat.style.width

console.log((window.innerWidth-catWidth)/2);


console.log(cat);

const danceCat = function() {
    middleCat.style.visibility= 'visible';
    cat.style.visibility= 'hidden';
    clearInterval(intervalID);
    timeoutID = setTimeout(startWalking, 5000);
}

const walk = function() {
    let newLeft = parseFloat(cat.style.left);
    newLeft += movement;
    if ( newLeft === ( (window.innerWidth - catWidth) / 2 ) ) {
        getMiddleCat();
        danceCat();
    }
    else if ( newLeft >= window.innerWidth ) {
        const randomNum = Math.floor( Math.random() * 5 );
        console.log(randomNum);
        cat = allCats[randomNum];        
        cat.style.visibility= 'visible';
        cat.style.transform= 'scaleX(-1)';
        movement = -1;
    }
    else if ( newLeft <= 0 ) {
        cat.style.transform= 'scaleX(1)';
        movement = 1;
    }
    
    cat.style.left = newLeft + 'px';
}


const startWalking = function() {
    middleCat.style.visibility= 'hidden';
    cat.style.visibility= 'visible';
    intervalID = setInterval(walk, 0.01);
}

startWalking();