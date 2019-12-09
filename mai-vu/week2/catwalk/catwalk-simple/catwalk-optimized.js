let $img = $('img');
const $body = $('body');

let reverse = false;

// the pixels rate by which the image will move back and forth
const movePixels = 5;

// set background colors of page to an array
const backgroundColors = ['royalblue', 'hotpink', 'darkgoldenrod'];


const catWalk = function() {
    const currentLeft = parseInt(img.style.left);

    if (reverse) {
        img.style.left = currentLeft - movePixels + 'px';
    } else {
        img.style.left = currentLeft + movePixels + 'px';
    }

    // this snippet will be executed by checking window's innerwidth and image's width
    if ( currentLeft > (window.innerWidth - img.width) ) {
        reverse = true;
        img.style.transform = 'none';
    } else if ( currentLeft <= 0 ) {
        reverse = false;
        img.style.transform = 'scaleX(-1)';
    }
};


// calls catWalk() for every 10ms
window.setInterval( catWalk, 10 );


// pass an anon function as argument to setInterval() to change background colors
window.setInterval( function() {
    const index = backgroundColors.indexOf(body.style.backgroundColor);
    body.style.backgroundColor = backgroundColors[(index+1) % 3]
});