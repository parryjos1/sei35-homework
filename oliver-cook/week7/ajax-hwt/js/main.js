$(document).ready(function() {
  $('#go').on('click', function() {
     $('#results').show().empty();

        const searchText = $('#query').val();
        console.log(searchText);
        $.getJSON( `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=Yg6Qiy8gr83S2wkgODDyj2LaEP7jRNUF&limit=5`).
        done(function(response){

        //console.log(response.data); //this is an array

        const results = response.data
        console.log(results);

        //this loops through the  images in the object in the data  array above
         for (let i = 0; i < results.length; i++) {
        // let gifs = results[i].images.downsized_large.url

        //this new const stores the  returned data from the loop, which is the key value from the object of the urls stored in the data array.

        const $result = $('<img>').attr('src',results[i].images.downsized_large.url);
            $('#results').append($result);


          }







}).fail(function(err){
  console.warn(err);
});

    });
  });
// });
