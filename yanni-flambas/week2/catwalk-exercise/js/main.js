const catCycle = document.querySelector('img');

function catWalk(catCycle){
  setInterval(function(){
    // catCycle.style.left += '200px'
    // let catCounter = catCycle.style.left;
    // catCounter = '100px'
    // catCycle.style.left = "300px"

    // catCycle.style.left = "300px"

    let oldCatPosition = parseInt(catCycle.style.left);

    let newCatPosition = oldCatPosition + 10;

    catCycle.style.left = newCatPosition + 'px';





    console.log(catCycle.style.left);
    // console.log(catCounter);
  }, 200)
};

// catWalk(catCycle);
