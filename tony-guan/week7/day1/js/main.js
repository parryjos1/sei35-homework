
$(document).ready(function(){

  $('#search').on('click', function(){

    $('#output').empty();
    const xhr = new XMLHttpRequest();

      xhr.onload = function() {

        // This code runs when we get the full response back

        const data = JSON.parse( xhr.response );
        console.log('data:', data);
        // debugger;

        for ( let i = 0; i < data.results.length; i++ ) {

          const movie= data.results[i]

          console.log(movie.title);



          $('#output').append(`
        <p>
        ${ movie.title }
        </p>
        <img src="">
          `);

        } //for

      }; //.on

      // Get form input text, save into var, and then plug into URL


      const query = $('#searchField').val();
      console.log('query:', query);

      //
      xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${query}`);
      xhr.send();



  }); //#.on

  }); //ready function



  //1. Get user input from text field
  // 2. Send a request to the moviedb API when the button is clicked
  // 3. Record what the request is
  // 4. Append the result from the api request to the screen using jQuery
