// https://www.flickr.com/services/rest/?method=flickr.photos.search&text=coral+ocean&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1 (edited)

const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = 'a1ee70442b952efda4abbaeedb52ede2';
let page = null;
let query = null;
let appendingQuery = false;

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
      console.log('wait');
      fn();
      time = Date.now();
    }
  };
};

const scrollEnd = () => {
  console.log($(window).scrollTop(), $(window).height(), $(document).height());
  if($(window).scrollTop() + $(window).height() + 150 > $(document).height()) {
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
