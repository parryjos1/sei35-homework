// nasa api 8WqDXpD6wA3LXYmtklh7OmfBXYNDRq1IGycCXPRG

let currentRover = null;

$(document).ready(function () {
  $('#randomButton').hide()


  $('#selectRover').on('change', function () {
    $('#randomButton').hide()
    $('#randomPhoto').empty()
    console.log( $('#selectRover').val() );

    const selectedRover = $('#selectRover').val()
    console.log(selectedRover);

    $.getJSON(`https://api.nasa.gov/mars-photos/api/v1/manifests/${selectedRover}?&api_key=8WqDXpD6wA3LXYmtklh7OmfBXYNDRq1IGycCXPRG`)
    .done( function ( roverInfo ) {
      console.log( roverInfo );
      currentRover = roverInfo.photo_manifest
      // debugger
      $('#container').html(`
        <p>${currentRover.name}, launched on ${currentRover.launch_date} and landed on Mars on ${currentRover.landing_date} it's mission status is ${currentRover.status}. <br>
        As of ${currentRover.max_date} it has been active for ${currentRover.max_sol} sol(Mars day) and has taken ${currentRover.total_photos} photos.</p>
      `);
      $('#randomButton').fadeIn()
    }).fail( console.warn );
  }); // end of pickRover onclck

  $('#go').on('click', function () {
    $('#randomButton').show()
    const randomSol = Math.floor(Math.random() * Math.floor(currentRover.max_sol))
    $.getJSON(`https://api.nasa.gov/mars-photos/api/v1/rovers/${currentRover.name}/photos?sol=${randomSol}&api_key=8WqDXpD6wA3LXYmtklh7OmfBXYNDRq1IGycCXPRG`)
    .done(function ( data ) {
      // debugger
      console.log(`data:`, data);
      const randomPhoto = data.photos[Math.floor(Math.random()*data.photos.length)];
      console.log('randomphotodata:',randomPhoto);
      $('div#randomPhoto').html(`
        <p>Image #${randomPhoto.id} taken on ${randomPhoto.earth_date}, Sol ${randomPhoto.sol} <br>
        camera: ${randomPhoto.camera.full_name}
        </p>
        <img src="${randomPhoto.img_src}">
      `)
    }).fail( console.warn ); // end of getjson
  }); // end of #go on click

}); // end of document ready
