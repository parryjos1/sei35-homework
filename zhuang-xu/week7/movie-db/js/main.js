$(function() {
  $('#search-button').on('click', function() {
    const xhr = new XMLHttpRequest();
    const query = $('#search-input').val();
    if (query.trim() === '') {
      return;
    }

    xhr.onload = function() {
      const data = JSON.parse(xhr.response);
      if (data.errors) {
        return;
      }

      const posterImageURL = (path) => {
        if (path) {
          return `<img src="http://image.tmdb.org/t/p/w185${path}" alt="">`;
        }
        return '';
      };

      $('.movies').empty();
      data.results.forEach((movie) => {
        const $title = $(`
                               <div class="movie" data-id="${movie.id}">
                                    <p>${movie.title}<br>${movie.release_date}</p>
                                    ${posterImageURL(movie.poster_path,
            movie.id)}
                               </div>`);
        $('.movies').append($title);
      });
      $('.movies').show();
      $('.movie-details').hide();

      $('.movies').on('click', function(evt) {
        let target = evt.target;
        while (target.className !== 'movie' && target.tagName !== 'BODY') {
          target = target.parentElement;
        }
        if (target.getAttribute('data-id')) {
          const id = target.getAttribute('data-id');
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            const data = JSON.parse(xhr.response);
            if (data.errors) {
              return;
            }

            $('.movie-details').empty();

            $('.movie-details').
                append(
                    `<p class="title"><strong>${data.original_title}</strong></p>`);
            $('.movie-details').append(`<p>${data.release_date}</p><hr>`);
            const colLeft = $('<div class="col-sm-4"></div>');
            colLeft.append(
                data.production_companies.map((c) => `<div>${c.name}</div>`).
                    join(''));
            const colRight = $('<div class="col-sm-8"></div>');
            colRight.append(`<div><em>${data.overview}</em></div>`);
            const row = $('<div class="row"></div>');
            row.append(colLeft);
            row.append(colRight);
            $('.movie-details').append(row);
            $('.movie-details').
                append(
                    $('<br><button class="back-button btn btn-outline-secondary">Back</button>'));

            // $('.movie-details').append(data.production_companies.map((c) => `<div>${c.name} </div>`).join(''));
            $('.movies').hide();
            $('.movie-details').show();

            $('.back-button').on('click', function() {
              $('.movies').show();
              $('.movie-details').hide();
            });
          };
          xhr.open('GET',
              `https://api.themoviedb.org/3/movie/${id}?api_key=24d863d54c86392e6e1df55b9a328755`);
          xhr.send();

        }
      });
    };
    xhr.open('GET',
        `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${query}`);
    xhr.send();
  });
});