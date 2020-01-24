console.log('Hello World!');


$(document).ready( function() {

    const countryURL = 'https://api.openaq.org/v1/locations?country[]='
    const cityURL = 'https://api.openaq.org/v1/locations?city[]='
    const specificLocURL = 'https://api.openaq.org/v1/latest?location='


    $('#query').keyup(function( eve ) {
      if (eve.keyCode === 13) {
        $('#submit').click();
      }
    });


    $('#submit').on('click', function () {

        const searchVal = $('#query').val().toUpperCase()
        // console.log(searchVal);

        $.getJSON( `${countryURL}${searchVal}` )
        .done(function( data ){
          // console.log(data);

            $('#content-container').append('<ul id="results"></ul>')

            data.results.forEach( function( result ) {
              // console.log(result.city);

              $('#results').append(`
                  <li class="result" data-city=
                  "${result.city}"><strong>City:</strong> ${result.city}</li>
                `)



            })

        })
        .fail( console.warn );


    }); //on click submit


    $('#content-container').on('click', '.result', function() {

        $('#content-container').empty();

        const cityName = $(this).data("city");
        // console.log(`clicked: ${cityName}`);

        $.getJSON(`${cityURL}${cityName}`)
        .done( function( data ) {


          $('#content-container').append(`
                <h2>${cityName}</h2>
                <p>Readings found for this City: <strong>${data.meta.found}</strong></p>
                <h3>Locations</h3>
                <ul id="locations"></ul>
            `);

            data.results.forEach( function( result ) {

                $('#locations').append(`
                    <li><strong>${result.location}</strong>

                    <button type="button" class="view-measurements" data-loc="${result.location}">View Measurements</button>

                    <div class="measurement-info"></div>

                    </li>
                  `);


            }); //loop


        })
        .fail( console.warn );


    }); //li on click



    $('#content-container').on('click', '.view-measurements', function(){

        //encodeURI creates the %20 space replacement required for the url
        const locationName = encodeURI( $(this).data("loc") );

        // console.log(locationName);



        $.getJSON(`${specificLocURL}${locationName}`)
        .done( function( data ){

            console.log(`${specificLocURL}${locationName}`);

            data.results.forEach( function( result ){

                console.log(result.distance);   //works

                $('.measurement-info').css('display', 'block');

                $('.measurement-info').append(`
                      <p>HELLO</p>
                  `);

            });


        })
        .fail( console.warn )


    }); //view measurements on click



}); // dom ready
