const BASE_URL = 'https://swapi.co/api/';

$(document).ready(function() {
  $('#planets').on('click', function() {
    $('.planets-container div').remove();
    $('.planets-container p').remove();
    $.getJSON(`${BASE_URL}planets/`)
    .done(function(data) {
      console.log(data);
      data.results.forEach(function(planet) {
        const $newPlanet = $('<div>');
        $newPlanet.append(`<p><strong>Name:</strong> ${planet.name}</p>
                           <p><strong>Diameter:</strong> ${planet.diameter}</p>
                           <p><strong>Gravity:</strong> ${planet.gravity}</p>
                           <p><strong>Population:</strong> ${planet.population}</p>
                           <button>Films</button>`).css({
                             background: 'rgba(0,0,0,0.4)',
                             display: 'inline-block',
                             margin: '0.5rem',
                             padding: '1rem'
                           });
        $('.planets-container').append($newPlanet);
        $('button').css({
          padding: '1rem'
        });
        $($newPlanet.children('button')).on('click', function() {
          $('.planets-container div').remove();
          $('.planets-container').append(`<p><strong>Titles:</strong><br></p>`);
          planet.films.forEach(function(link) {
            $.getJSON(`${link}`)
             .done(function(data) {
               $('.planets-container p').append(`${data.title}<br>`);
             })
             .fail(console.warn);
          });

        });

      });
    })
    .fail(console.warn);
  });
});
