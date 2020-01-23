

$(document).ready(function(){

  $('#getTitle').on( 'click',function(){
console.dir("clicked!");
document.getElementById('button1').addEventListen
const xhr = new XMLHttpRequest();

xhr.onload = function(){
const data = JSON.parse( xhr.response );



  console.log(`
    Number: ${ data.number }
    Title: ${ data.text}
      `);



$(`#output`).append(`
  <p>
  <strong>${ data.number }</strong>
  <br>
  ${ data.text }
  </p>
  `)

};



xhr.open('GET', "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&${query}?");

xhr.send();

    });

});
