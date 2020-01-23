$(document).ready(function () {

  const each = function ( arrayToLoopOver, functionToRun) {
    for (let i = 0; i < arrayToLoopOver.length; i++) {
      functionToRun(arrayToLoopOver[i], i)
    }
  }; // end each

  $('#getMovie').on('click', function () {
    $('#output').empty();
    $('#moviePopup').remove();

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {

        const data = JSON.parse( xhr.response )
        console.log( data );
        // debugger // check api object

        each(data['results'], function (item, i) {
          $('#output').append(`
            <div class="movie" id="${ data['results'][i]['id'] }">
            <img src='https://image.tmdb.org/t/p/w200/${data['results'][i]["poster_path"]}'>
            <p>${ data['results'][i]['title']}</p>
            </div>
            `)
          console.log(data["results"][i]["id"])
        });

    } //end of xhr onload

  xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${$('#queryText').val()}`)
  xhr.send();

  }) // end of getmovie button .on click

  $(document).on('click', '.movie', function (event) {
    console.log( $(event.currentTarget).attr('id') );

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {

      const data = JSON.parse( xhr.response )
      console.log( data );
      // debugger // check api object

      $('#outputWrapper').append(`
        <div id="moviePopup">
        <p>${ data['title'] } - released in ${ data['release_date'] }</p>
        <p>${ data['tagline'] }</p>
        <img src="https://image.tmdb.org/t/p/w500/${ data['poster_path']}">
        <p>${ data['overview'] }</p>
        </div>
        `)

    } // end onload

    xhr.open('GET', `https://api.themoviedb.org/3/movie/${ $(event.currentTarget).attr('id') }?api_key=24d863d54c86392e6e1df55b9a328755&append_to_response=videos` )
    xhr.send();

  }); // end of onclick movie

  $(document).on('click', '#moviePopup', function (event) {

    $('#moviePopup').remove()

  });

}) // end of document ready
