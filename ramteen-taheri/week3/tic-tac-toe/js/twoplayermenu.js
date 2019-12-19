//next button
let next = document.querySelector('.next');
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');

next.addEventListener('click', function() {
    if(player1.value.trim() === '' || player2.value.trim() === '') {
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('#endgame').style.display = 'block';
        document.querySelector('.close').style.display = 'block';
        document.querySelector('#endgame span').innerText = 'Both Players must enter their name.';
        document.querySelector('.reset').style.display = 'none';
        player1.value = '';
        player2.value = '';
    } else {
        window.location = `./twoplayer.html?player1=${player1.value}&player2=${player2.value}`;
    }
    
});

//back button
let back = document.querySelector('.back');
back.addEventListener('click', function() {
    window.location = './index.html';
});

//close button
let close = document.querySelector('.close');
close.addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.close').style.display = 'none';
});