// - Use jQuery to get the contents of the div as a string, then split up the string into an array of words.
// - Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM.

console.log("hello");

$(document).ready(function(){

  const divContents = $("#book").text().split(/\W+/);
  //can also
//   console.log( divContents );

  const randomValue = function(max){
    return Math.floor( Math.random()*max );
  }

  const displayWord = function(){
    const randomIndex = randomValue( divContents.length );
    // console.log( randomIndex );

    const randomWord = divContents[randomIndex];
    // console.log( randomWord );

    const $wordDiv = $('<div class="word">');
    $wordDiv.text(randomWord);

    const xRand = randomValue( window.innerWidth );
    const yRand = randomValue( window.innerHeight );

    const colorRand = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)} )`;

    $wordDiv.css({
      top: yRand,
      left: xRand,
      color: colorRand,
      // some extra randomness
      fontSize: `${15 + randomValue(30)}pt`,
      transform: `rotate(${randomValue(360)}deg`,
    })

    $('body').append($wordDiv);

    $wordDiv.fadeIn(2000).fadeOut(2000, function(){
      // remove div from DOM when the fadeout is finished
      $(this).remove();
    })

  }

  setInterval( displayWord, 100 );

})