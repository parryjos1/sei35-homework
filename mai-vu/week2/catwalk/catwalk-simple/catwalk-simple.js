const img = document.querySelector('img');
img.style.left = 0;
img.style.right = 0;
let newLeft = 0
let maxWidth = window.innerWidth - 296; //296 is the length of the cat 
let newRight = maxWidth;
let animateRight;

const catWalk = function() {
    newLeft +=  10;
    img.style.left = newLeft + 'px';

    if ( parseInt(img.style.left) >= maxWidth )
    {
        console.log(img.style.left);
        img.style.transform = "scaleX(-1)";
        console.log(img.style.left);
        animateRight = setInterval(walkBack, 100);
        clearInterval(animate);
    }
};


const walkBack = function() {
    console.log('walking back')
    newLeft -= 10;
    img.style.left = newLeft + 'px';
    if ( parseInt(img.style.left) === 0 ) {
        clearInterval(animateRight);
        //clearInterval(animate);
    }
}

const animate = setInterval( catWalk, 100 );