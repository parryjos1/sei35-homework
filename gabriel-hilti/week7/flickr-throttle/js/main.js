// https://www.flickr.com/services/rest/?method=flickr.photos.search&text=coral+ocean&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1 (edited)

const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = 'a1ee70442b952efda4abbaeedb52ede2';
let page = null;
let query = null;
let appendingQuery = false;
let firstSearchResult = null;

const searchFlickr = (searchText, page) => {
  $.getJSON(BASE_URL, {
    method: 'flickr.photos.search',
    text: searchText,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: 1,
    page: page
  })
  .done(displaySearchResults)
  .fail(console.warn);
};  // searchFlickr

const searchPhoto = photoId => {
  $.getJSON(BASE_URL, {
    method: 'flickr.photos.getInfo',
    photo_id: photoId,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: 1
  })
  .done(displayPhotoDetails)
  .fail(console.warn);
};  // searchFlickr

const displaySearchResults = response => {
  if (!appendingQuery) {
    $('#results').empty();
  }
  console.log('...............................');
  console.log('Response:', response);
  firstSearchResult = response;
  response.photos.photo.forEach(photo => {
    const url = generatePhotoURL(photo);
    console.log(url);
    $('#results').append(`<img src="${url}" data-photo-id="${photo.id}">`);
  });  // forEach

  $('img').on('click', function() {
    console.log($(this).data('photoId'));
    searchPhoto($(this).data('photoId'));
  });
};  // displaySearchResults()

const success = pos => {
  const latitude  = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  const link = `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">See on Map</a>`;
  $('#singlePhoto').append(link);
  console.log('appended?');
};

const displayPhotoDetails = response => {
  $('#results').hide();
  console.log(response);
  const div = `<div>
  <p><strong>Owner:</strong> ${response.photo.owner.realname}</p><br>
  <p><strong>Title:</strong> ${response.photo.title._content}</p><br>
  <p><strong>Description:</strong> ${response.photo.description._content}</p><br>
  <a href="${response.photo.urls.url[0]._content}" target="_blank">Link</a><br>
  <button id="location">Position</button>
  </div>`;

  $('#singlePhoto').append(div);

  const carousel = `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="width: 400px;">
  <div class="carousel-inner">

  </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`;

  $('#singlePhoto').append(carousel);

  firstSearchResult.photos.photo.forEach((photo, i) => {
      const url = generatePhotoURL(photo);
      if (i === 0) {
        $('.carousel-inner').append(`<div class="carousel-item active">
        <img src="${url}" class="d-block w-100" style="width: 200px;">
    </div>`);
      } else {
        $('.carousel-inner').append(`<div class="carousel-item">
        <img src="${url}" class="d-block w-100" style="width: 200px;">
      </div>`);
      }

  });



  if (navigator.geolocation) {
    console.log('geolocation', true);
    $('#location').on('click', () => {
      navigator.geolocation.getCurrentPosition(success, console.warn);
    })
  }
};


const generatePhotoURL = photo => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
};

const throttle = (fn, wait) => {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
};

const scrollEnd = () => {
  // console.log($(window).scrollTop(), $(window).height(), $(document).height());
  const scrolledToBottom = $(window).scrollTop() + $(window).height() + 150 > $(document).height();
  if(scrolledToBottom) {
    page++;
    console.log('end');
    appendingQuery = true;
    //setTimeout(() => searchFlickr(query, page), 1500);
    searchFlickr(query, page);
  }
};


$(document).ready(() => {

  $('#searchText').focus();  // cursor focus
  $('#searchForm').on('submit', () => {
    appendingQuery = false;
    query = $('#searchText').val();
    console.log('Form submitted!', query);
    page = 1;
    searchFlickr(query, page);

    return false;  // do not actually submit the form
                   // which reloads the page
  });


  $(window).on('scroll', throttle( () => {
    scrollEnd()
  }, 300));


});  // document ready
