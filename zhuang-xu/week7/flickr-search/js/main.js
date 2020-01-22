const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';
let page = 1;
let pages = 1;

const displaySearchResults = response => {
  ({page, pages} = response.photos);
  if (page === 1) {
    $('#results').empty();
  }
  response.photos.photo.forEach(photo => {
    const url = generatePhotoURL(photo);
    $('#results').
        append(
            `<div class="photo"><img src="${url}" data-id="${photo.id}" data-secret="${photo.secret}"></div>`);
  });
};

const generatePhotoURL = (photo, size = 'q') => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};

const searchFlickr = searchText => {
  $.getJSON(BASE_URL, {
    method: 'flickr.photos.search',
    text: searchText,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: 1,
    page,
  }).done(displaySearchResults).fail(console.warn);
};

$(document).ready(() => {
  $('#searchText').focus();

  $('#searchForm').on('submit', () => {
    const query = $('#searchText').val();

    page = 1;

    searchFlickr(query);

    return false; // Do not actually submit the form
                  // which reloads the page
  });

  $('#results').on('click', (event) => {
    if (event.target.tagName !== 'IMG') {
      return;
    }
    const $img = $(event.target);

    $.getJSON(BASE_URL, {
      method: 'flickr.photos.getInfo',
      api_key: API_KEY,
      photo_id: $img.attr('data-id'),
      secret: $img.attr('data-secret'),
      format: 'json',
      nojsoncallback: 1,
    }).done(({photo}) => {
      $('#photo-title').html(photo.title._content);
      const url = generatePhotoURL(photo, 'z');
      $('#large-photo').html(`<img src="${url}">`);
    }).fail(console.warn);

    $('#photo-title').html('Loading...');
    $('#large-photo').html('Loading...');
    $('#overlay').modal();
  });

  $(window).on('scroll', () => {
    if ((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
      if (page < pages) {
        page += 1;
        const query = $('#searchText').val();
        searchFlickr(query);
      }
    }
  });
});
