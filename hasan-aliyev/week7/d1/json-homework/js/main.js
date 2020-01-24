$(document).ready(function(){


 $('#getMovie').on('click',function(){
    // do stuff when button is clicked
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      // console.log('Response:', xhr.response);
      const data = JSON.parse(xhr.response);

     //Overview: ${data.results.map(o => o.overview)}
      console.log(`
      Title: ${data.results.map(r => r.title)}
      ID: ${data.results.map(o => o.id)}
      `);


      data.results.forEach(result => {

        $('#output').append(`
          <div>
          <strong>
          ${result.title}
          </strong>
          </br>ID: ${result.id}
          </br> <img src="https://image.tmdb.org/t/p/original/${result.poster_path}" alt="Poster" height="300" width="250">
          </div>`);

      });

    };

    xhr.open( 'GET', 'https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=' + $("#input").val());
    xhr.send();

   });//.on()
})//document.ready
