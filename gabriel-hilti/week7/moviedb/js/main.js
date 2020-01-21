$(document).ready(function() {

  $('header').css({
    textAlign: 'center',
    marginBottom: '2rem'
  });
  $('.search').css('text-align', 'center');
  $('footer').css('text-align', 'center');

  $('#search-btn').on('click', function() {
    const xhr = new XMLHttpRequest();
    $('.movie').hide();
    $('.result').show();
    xhr.onload = function() {
      const data = JSON.parse(xhr.response);
      console.log(data);

      $('.result').css({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "space-around",
        width: "60%",
        margin: "5rem auto"
      });

      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i]['poster_path']) {
          const $div = $('<div class="mov">').css({
            width: "30%",
            position: "relative"
          });
          const $image = $('<img>').attr('src', 'https://image.tmdb.org/t/p/w500' + data.results[i]['poster_path']).css({
            width: "100%"
          }).data('id', data.results[i].id);

          const $title = $('<p>').css({
            position: "absolute",
            top: "10%",
            display: "block"
          }).append(data.results[i].title).css({
            color: "white",
            textShadow: "0 0 5px black",
            fontSize: "1.5rem",
            background: "rgba(0,0,0,0.7)"
          });

          $div.append($image).append($title);
          $('.result').append($div);
        }
      }

      $('div.mov').on('click', function() {
        $('.movie').show();
        $('.result').hide();
        const movie_id = $(this).children(0).data('id');
        const xhr2 = new XMLHttpRequest();
        xhr2.onload = function() {
          const data = JSON.parse(xhr2.response);
          $('.result').hide();
          console.log(data);
          if (data['backdrop_path']) {
            $('#logo').attr('src', 'https://image.tmdb.org/t/p/w500' + data['backdrop_path']).css({margin: "2rem auto", display: "block"});
          }

          $('#movie-title').html(data['original_title']).css({
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          });
          $('#movie-description').html(data.overview).css('text-align', 'center');
        };

        xhr2.open('GET', `https://api.themoviedb.org/3/movie/${movie_id}?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US`);
        xhr2.send();
      });

    };

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US&page=1&query=${$('#search-title').val()}`);
    xhr.send();
  });
});
