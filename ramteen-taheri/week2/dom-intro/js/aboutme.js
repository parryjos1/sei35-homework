//about

var body = document.body;
var nickname = document.getElementById('nickname');
var favorites = document.getElementById('favorites');
var hometown = document.getElementById('hometown');
var unorderedList = document.getElementsByTagName('ul');

nickname.innerText = 'Ram';
favorites.innerText = 'Hungry Jacks';
hometown.innerText = 'Wollongong';

body.style.fontFamily = "Arial, sans-serif";

for(let x = 0; x < unorderedList.length; x++) {
    const ul = unorderedList[x];
    ul.className = 'listitem';
}

let newImg = document.createElement('img');
newImg.src = 'https://vignette.wikia.nocookie.net/billandted/images/0/04/Billcostumebj9.jpg/revision/latest?cb=20131215062053';

body.appendChild(newImg);

//the book list

var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    }
];

for(let x = 0; x < books.length; x++) {
    const bookDetails = document.createElement('p');
    bookDetails.innerHTML = `Title: ${books[x].title} <br> Author: ${books[x].author}`;
    body.appendChild(bookDetails);
}