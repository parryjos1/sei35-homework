
$(document).ready(function() {
  $('#go').on('click', function() {
     $('#results').show().empty();
//     $('#details').hide();
        const searchText = $('#query').val();
        console.log(searchText);
        $.getJSON( `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=Yg6Qiy8gr83S2wkgODDyj2LaEP7jRNUF&limit=5`).
        done(function(response){

        console.log(response.data); //this is an array

        // for (let i = 0; i < images.downsized.length; i++) {

        const $result = $('<img>').attr('src', response.data[0].images.downsized_large.url);

        $('#results').append($result);





// `http://api.giphy.com/v1/gifs/search?q=${ searchText }&api_key=Yg6Qiy8gr83S2wkgODDyj2LaEP7jRNUF'





}).fail(function(err){
  console.warn(err);
});

    });
  });
// });


// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Yg6Qiy8gr83S2wkgODDyj2LaEP7jRNUF&limit=5");
// xhr.done(function(data)
// { console.log("success got data", data); });
