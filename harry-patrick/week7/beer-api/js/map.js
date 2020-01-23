
let initMap = function() {
  let currentTown
  let currentLat
  let currentLong
  let myLatLng

  const bounds = new google.maps.LatLngBounds();
  const map = new google.maps.Map(document.getElementById('map'));

  let returnAll = function (obj) {
    obj.forEach(function(currentItem, index){
      currentTown = currentItem.name
      currentLat = currentItem.lat
      currentLong = currentItem.long
      currentIndex = index
      // console.log(`${currentTown}: latitude: ${currentLat}, longitude: ${currentLong}`);
       myLatLng = {lat: currentLat, lng: currentLong};

        var marker = new google.maps.Marker({
           position: myLatLng,
           map: map,
           title:  currentTown,


      }); //marker
      bounds.extend(marker.position);
    }) // forEach

  } // return all
 returnAll(cities)
 map.fitBounds(bounds);

 // var bounds = new google.maps.LatLngBounds();
 // var map = new google.maps.Map(document.getElementById('map'));
// how to select the
// map#gmim[index]


} // initMap

//  -------------- single marker map ----------
// var map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 4,
//   center: myLatLng
// });
//
// var marker = new google.maps.Marker({
//   position: myLatLng,
//   map: map,
//   title: currentTown
// });
