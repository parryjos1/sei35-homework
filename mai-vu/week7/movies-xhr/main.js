$(document).ready(function() {

    $('#submitButton').on( 'click', function() {

        // .val() is used to retrieve the values of form elements such as input, select and textarea.
        const searchQuery = $('#searchQuery').val();
        
        const xhr = new XMLHttpRequest();
        
        xhr.onload = function() {
            
            const $data = JSON.parse( xhr.response );
            // The returned $data is an object with 4 keys (page, total_results, total_pages, results). Value of the 'results' key is an array of movie objects. Reference: https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien
            
            for (let i = 0; i < $data.results.length; i++) {

                const $title = $(`<h3>${$data.results[i].title}</h3>`);
                const $overview = $(`<p></p>`).html($data.results[i].overview);
                const $poster = $(`<img/>`).attr({
                    src: `https://image.tmdb.org/t/p/w500${$data.results[i].poster_path}`,
                    alt: `${$data.results[i].title}`
                });

                $('.outputs').append($title);
                $('.outputs').append($overview);
                $('.outputs').append($poster);

            }   // end of for loop

        };   // end of xhr.onload

        const BASE_URL = 'https://api.themoviedb.org/3';
        const API_KEY = '24d863d54c86392e6e1df55b9a328755';
        
        xhr.open( 'GET', `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}` );
        xhr.send();

    });   // end of $('#submitButton').on(click)

});   // end of $(document).ready