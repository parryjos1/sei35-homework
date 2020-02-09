let cities = []

$(document).ready(function(){
  const BASE_URL = "https://api.openaq.org/v1/latest?country=AU"
  // const API_KEY = "aecf0238783b660ba6704c5fb5cbf1d5"

  const url = `${BASE_URL}`;

  console.log(url);
  let $city = undefined
  const $results = $('#results')
  const $details = $('#details')
  const $home = $('#home')
  $.getJSON(url)
  .done(function( response){
    for (var i = 0; i < 3; i++) {
      // console.log(response.results[i].coordinates.latitude);
      const town = response.results[i].city
      $city = $(`<h2>${response.results[i].city}</h2>`)

      //console.log(response.results[i]);
      const $mapMarker = $(`map#gmim${i}`)
      const latitude = response.results[i].coordinates.latitude
      const longitude = response.results[i].coordinates.longitude
      $results.append($city)
      $city.on('click', function(){
        $.getJSON(url)
        .done(function(){
          $results.hide();
          $details.html(`
            <strong>${town}</strong> <br>
            <p> latitude: ${latitude} | longitude ${longitude} </p>
            `).show()
        })
      })
      $home.on('click', function(){
        $results.show();
        $details.hide();
      })
      cities.push(
        {
            lat: latitude,
            long: longitude,
            name: town
          }
      )

    } // for loop
// console.log(cities[0].lat);
  }) // done
  // FOR REFACTOR
  // Look into either promises or async await
  .done(function(){  initMap() })
  .fail(console.warn);

  console.log(cities);
}) // ready
//
//
// function initMap() {
//
//   var myLatLng = {lat: -34.580555, lng: 150.78166};
//   // var bounds = new google.maps.LatLngBounds();
//   // var map = new google.maps.Map(document.getElementById('map'));
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: myLatLng
//   });
//
//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
// }





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// let cities = []
//
// $(document).ready(function(){
//   const BASE_URL = "https://api.openaq.org/v1/latest?country=AU"
//   // const API_KEY = "aecf0238783b660ba6704c5fb5cbf1d5"
//
//   const url = `${BASE_URL}`;
//
//   console.log(url);
//   let $city = undefined
//   const $results = $('#results')
//   const $details = $('#details')
//   const $home = $('#home')
//   $.getJSON(url)
//   .done(function(response){
//     for (var i = 0; i < 3; i++) {
//       // console.log(response.results[i].coordinates.latitude);
//       const town = response.results[i].city
//       $city = $(`<h2>${response.results[i].city}</h2>`)
//       const latitude = response.results[i].coordinates.latitude
//       const longitude = response.results[i].coordinates.longitude
//       $results.append($city)
//       $city.on('click', function(){
//         $.getJSON(url)
//         .done(function(){
//           $results.hide();
//           $details.html(`
//             <strong>${town}</strong> <br>
//             <p> latitude: ${latitude} | longitude ${longitude} </p>
//             `).show()
//         })
//       })
//       $home.on('click', function(){
//         $results.show();
//         $details.hide();
//       })
//       cities.push(
//         {
//             lat: latitude,
//             long: longitude,
//             name: town
//           }
//       )
//     } // for loop
// // console.log(cities[0].lat);
//   }) // done
//   .fail(console.warn);
//
//   console.log(cities);
// }) // ready
//
//
// function initMap() {
//
//   var myLatLng = {lat: -34.580555, lng: 150.78166};
//   // var bounds = new google.maps.LatLngBounds();
//   // var map = new google.maps.Map(document.getElementById('map'));
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: myLatLng
//   });
//
//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
// }
// function findMax(testArray){
//  let highNum = 0
//     // This function returns the largest number in a given array.
//   for (i = 0; i < testArray.length; i++)
//     {
//       if (testArray[i] > highNum) {
//         highNum = testArray[i]
//       }
//
//     }
//     console.log(highNum);
//   return highNum
// }
//
// let pushCity = function () {
//
//         cities.key = {
//             lat: latitude,
//             long: longitude,
//           }
//
// }
//
// findMax([1,2,4,3,1])
//
