$(document).ready(function(){
  //click function
  $('.showDetail').hide();
  $('.close').hide();

  $('#submit').on('click', function(){
    // empty div
    $('.showResult').empty();
    $('.showDetail').empty();




    // get value from input box
    const inputValue = $('#input').val();

    // receive movie results from API
    const movieSearch = new XMLHttpRequest();
    movieSearch.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${inputValue}`);
    movieSearch.send();


    // show result
    movieSearch.onload = function(){
      input = inputValue.charAt(0).toUpperCase()
      // api result
      const data = (JSON.parse(movieSearch.response)).results;

      var details = {};
      // loop through data.results array
      for (var i = 0; i < data.length; i++) {
        if (data[i].title.includes(input)) {
          $('.showResult').append(`
            <img src="https://image.tmdb.org/t/p/original/${data[i].poster_path}" alt="${data[i].title}" class="movieImages" id="${data[i].id}"> `)

            details[data[i].title] = data[i].id;

        }//if end
      };//for loop end

      // loop through details object
      for (let key in details) {

        // receive movie details from api
        const movieDetail = new XMLHttpRequest();
        movieDetail.open('GET', `https://api.themoviedb.org/3/movie/${details[key]}?api_key=8f56203d1e18cdbbd64752b7aaaf756e`);
        movieDetail.send();

        $(`#${details[key]}`).on('click', function(){
          $('.showDetail').empty();
          const detailData = JSON.parse(movieDetail.response);
          $('.showResult').hide();
          $('.showDetail').show();
          $('.close').show();

          // add content into .showDetail div
          $('.showDetail').html(`
            <strong>Title:</strong>
            ${detailData.title}
            <strong>Overview:</strong>
            ${detailData.overview}`);

          // close details show page
          $('.close').on('click', function(){
            $('.showResult').show();
            $('.showDetail').hide();
            $('.close').hide();
          }); //click close end
        });//show detail click
      }// for in loop end
    };//onload



  });//click

});//ready
