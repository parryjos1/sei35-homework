$(document).ready(function(){

  const BASE_URL = 'https://api.giphy.com/v1/gifs/';
  const API_KEY = 'api_key=hNuff6HIbfanyIRa7hhTBuU6OJMLWtxW';

  $('#search').on('click', function(){

    $('.results').empty();

    const inputValue = $('#input').val();
    // console.log(inputValue);

    $.getJSON(`${BASE_URL}search?${API_KEY}&q=${inputValue}`)
    .done(function(response){
      const data = response['data'];
      // console.log(data);
      data.forEach(function(element){
        const $image = $(`<img src="${element.images['original']['url']}">`);

      $('.results').append($image);
      });//forEach end
    })
    .fail(console.warn);
  }); //search click end

}); //document ready
