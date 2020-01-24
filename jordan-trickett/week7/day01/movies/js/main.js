console.log('Hello World!');

//

$(document).ready( function(){



  $('#search-button').on('click', function(){

    //empty list instead
    // if ($('#search-results').css('display') == 'none') {
    //
    //   $('#search-results').css('display', 'inline-block')
    //
    // }

    $('img.poster-result').empty()  //didnt work here


    // .val() gets the value from a form
    const searchValue = $('#search-field').val()

    // console.log( searchValue );   //worked

    // initialise request/connection
    const xhr = new XMLHttpRequest();

    // once the response from the server has loaded/downloaded - refering to states
      xhr.onload = function(){

        //code to run when data from server loaded

        // turn the JSON response string into JS data structure
        const data = JSON.parse( xhr.response )

        console.log(data.results); // gets array for each result

        $('#content-container').append('<ul id="search-results"></ul>')

        for (let i = 0; i < data.results.length; i++) {
          // console.log(data.results[i].title);  // prints each title

          const currentItem = data.results[i]
          // console.log(currentItem.poster_path);

          if (currentItem.poster_path) {

            $('#search-results').append(`<li><img src="http://image.tmdb.org/t/p/w185${currentItem.poster_path}" alt="" data-movie-id="${currentItem.id}" class="poster-result"></li>`)



          } else {

            $('#search-results').append('<li><img src="https://www.fillmurray.com/g/200/300" alt=""></li>')

          } //if


        } //loop



        // why does this have to be in onload function
        $('img.poster-result').click( function() {

          

          console.log('clicked');

          const xhr = new XMLHttpRequest();

          const movieId = $(this).data("movie-id")
          console.log(movieId);


          xhr.onload = function(){

            //code to run when data from server loaded

            // turn the JSON response string into JS data structure
            const movieInfo = JSON.parse( xhr.response )
            console.log(movieInfo);

            // $('#search-results').css('display', 'none') //hides list

            $('#search-results').empty() //removes list


            console.log(movieInfo.title);

              $('#content-container').append('<ul id="result"></ul>')

              $('#result').append(`<li><img src="http://image.tmdb.org/t/p/w185${movieInfo.poster_path}" alt="" data-movie-id="${movieInfo.id}" class="poster-result"></li>`)

              $('#result').append(`<li>${movieInfo.title}</li>`)

              $('#result').append(`<li>${movieInfo.overview}</li>`)




          }

            xhr.open('GET', `https://api.themoviedb.org/3/movie/${movieId}?api_key=24d863d54c86392e6e1df55b9a328755`);  //returns movie info
            xhr.send();



        }); //img result



      }; //onload function


      xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${searchValue}`);
      xhr.send();


  }); //search button on click








}); //DOM ready
