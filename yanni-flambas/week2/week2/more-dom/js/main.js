// const fontStyle = document.querySelector('body');
// console.log(fontStyle);
//
// const yanni = document.querySelector('Nickname');
// const tacos = document.querySelector('Favourites');
// const sydney =
// document.querySelector('Hometown');

const body = document.querySelector('body');

body.style.fontFamily = 'Comic Sans MS';

const nickname = document.querySelector('#nickname');

nickname.innerHTML = ' Yanni';

const favorites = document.querySelector('#favorites');

favorites.innerHTML = ' Tacos';

const hometown = document.querySelector('#hometown');

hometown.innerHTML = ' Sydney'


const listItems = document.querySelectorAll('li')

console.log(listItems);

for( let i = 0; i < listItems.length; i++ ){
  listItems[i].className = 'listItems'
}
