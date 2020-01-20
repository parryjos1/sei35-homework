$(document).ready(function(){
  //click function
  $('#submit').on('click', function(){

    // get value from input box
    const inputValue = $('#input').val();

    // receive resulf from API
    const movieSearch = new XMLHttpRequest();
    movieSearch.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${inputValue}`);
    movieSearch.send();


    // show result
    movieSearch.onload = function(){
      input = inputValue.charAt(0).toUpperCase()
      // api result
      const data = (JSON.parse(movieSearch.response)).results;
      console.log(data)
      // console.log(inputValue)

      // loop through data.results array
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].title)
        // console.log(data[i].title.includes(inputValue));
        if (data[i].title.includes(input)) {
          // console.log(`title:${data[i].title},
          //   poster_path: ${data[i].poster_path}`)
          // $('.showResult').append(`The title is ${data[i].title}`);
          $('.showResult').append(`
            <img src="https://image.tmdb.org/t/p/original/${data[i].poster_path}" alt="${data[i].title}" class="movieImages">`)
        }//if end
      };//loop end
    };//onload
  });//click

});//ready
