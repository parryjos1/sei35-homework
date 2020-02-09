
  const concert = <%= @concert.to_json.html_safe %>

  function initMap() {

    var bounds = new google.maps.LatLngBounds();
    var map = new google.maps.Map(document.getElementById('map'));

    for (let i=0; i < concerts.length; i++) {
      const concert = concerts[i];

      let address = concert.address
      let time = concert.time

      var marker = new google.maps.Marker({
        position: {lat: concert.latitude, lng:  concert.longitude},
        map: map,
        title:  concert.name,
        address: address,
        time: time

      });

      bounds.extend(marker.position);
    }
    map.fitBounds(bounds);

 }
