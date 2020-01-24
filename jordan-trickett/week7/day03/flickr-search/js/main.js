console.log('Hello World!');

//https://www.flickr.com/services/rest/?method=flickr.photos.search&text=coral+ocean&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1


const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';

let pageCounter = 0;
let query = '';


const searchFlickr = (searchText, pageNum) => {

  $.getJSON(BASE_URL, {
    method: 'flickr.photos.search',
    text: searchText,
    page: pageNum,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: 1
  })
  .done( displaySearchResults )
  .fail( console.warn );

}; //searchFlickr



const displaySearchResults = response => {
  // console.log(response);

  response.photos.photo.forEach( photo => {
      // console.log(photo.id);
      const url = generatePhotoURL( photo );

      console.log(url);

      $('#results').append(`<img src="${url}">`)

  }); //foreach

}; //displaySearchResults



const generatePhotoURL = photo => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`
}; //genphourl


$(window).on('scroll', () => {
  // console.log(window.pageYOffset);
  // console.log($(document).height());

  let bottom = ($(document).height() - $(window).height());  // - window.height

  // console.log('doc height', bottom);

  let yOffset = window.pageYOffset;

  // console.log('window height', $(window).height());

  // console.log('yOffset', yOffset);

  if (yOffset === bottom) {
      console.log('Page Reload');

      pageCounter += 1;
      // console.log(pageCounter);

      searchFlickr(query, pageCounter);
      // call a new search function
  }


}); //scroll


$(document).ready( () => {

    $('#searchText').focus();  //cursor focus

    $('#searchForm').on('submit', () => {

      $('#results').empty()  //clears any results that are there
      pageCounter = 1;   //reset page counter for new searches

      query = $('#searchText').val();

      searchFlickr(query, pageCounter);

      return false // do not actually submit the form, which reloads the pagex
    });




});  //DOM ready
