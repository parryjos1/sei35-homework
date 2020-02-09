// const BASE_URL = 'https://www.flickr.com/services/rest'
// const API_KEY = '2f5ac274ecfac5a455f38745704ad084'
//
// // var scrollTimeout;
// // var throttle = 1000;
// // var scrollMessage = function (message) {
// //     console.log(message);
// //
// // };
// // $(window).on('scroll', function () {
// //     if (!scrollTimeout) {
// //         scrollTimeout = setTimeout(function () {
// //             scrollMessage('I am scrolllllling with a throttled scroll!');
// //             scrollTimeout = null;
// //         }, throttle);
// //     }
// //     console.log('native scroll');
// // });
//
// function resetForm() {
//   $('#searchText').val(null);
//   $('#results').html('');
//   $('#').html('');
// } //resetForm
//
// const searchFlickr = searchText => {
//   $.getJSON(BASE_URL, {
//     method: 'flickr.photos.search',
//     text: searchText,
//     api_key: API_KEY,
//     format: 'json',
//     nojsoncallback: 1
//   })
//   .done(displaySearchResults)
//   .fail(console.warn)
//
// };//searchFlickr
//
// const displaySearchResults = response => {
//   // console.log(response.photos.photo);
//   $('#results').show().empty();
//   $('#details').hide()
//   response.photos.photo.forEach(photo => {
//     const url = generatePhotoURL(photo);
//    console.log(url);
//    $('#results').append(`<img src="${url}">`)
//
//   })//forEach
//
// };//displaySearchResults
//
//
// const generatePhotoURL = photo => {
//   return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`
// };
//
// const displayDetails = details => {
//   generatePhotoURL.on('click', () => {
//     console.log('clicked ID', cocktail.idDrink);
//
// });
// }
// $(document).ready(() => {
//   $('#searchText').focus()// cursor focus
//   $('#searchForm').on('submit', () => {
//     const query = $('#searchText').val();
//     searchFlickr(query);
//
//     return false// donot actually submit the form
//                 //which reloads the page
//   })//#searchForm
//
//
//
// });// document ready
console.log('flickr!');

// https://www.flickr.com/services/rest/?method=flickr.photos.search&text=coral+ocean&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1

const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';
let searchQuery = '';
let currentPage = 0;

function resetForm() {
  $('#searchText').val(null);
  $('#results').html('');
  $('#').html('');
} //resetForm
const searchFlickr = searchText => {
  currentPage++;
  $.getJSON(BASE_URL, {
    method: 'flickr.photos.search',
    text: searchText,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: 1,
    page: currentPage
  })
  .done( displaySearchResults )
  .fail( console.warn );

};  // searchFlickr()
//generate a new version of our searchFlickr function, which is
//guarenteed to run no more often than every 5 seconds.
//The new function takes the same arguments as our original function
// not: this is function as "first-class"in JS
//-they can be passed in as arguments to other functions
//-then can be returned by other functions
//-i. they are just *values*, like anything else you can put in a variable
const throttledSearchFlickr = _.throttle(searchFlickr, 5000 );

const displaySearchResults = response => {
  // console.log( response.photos.photo );
  response.photos.photo.forEach( photo => {
    const url = generatePhotoURL( photo );
    // console.log( url );
    const $img = $(`<img src="${url}">`).on('click', () => displayFullscreemImage(photo));
    $('#results').append($img);
  }); // forEach

}; // displaySearchResults()

const generatePhotoURL = (photo, size='q') => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

  // return [
  //   'http://farm',
  //   photo.farm,
  //   '.staticflickr.com/'
  // ].join();

};

const displayFullscreemImage = photoObj =>{
  console.log(photoObj);
  const fullsizeURL = generatePhotoURL(photoObj, 'c');
  console.log('fullsizeURL', fullsizeURL);
  $('#fullscreen')
  .css('background-image', `url(${fullsizeURL})`)
  .show();

}


$(document).ready( () => {

  $('#searchText').focus(); // cursor focus
  $(document).on('keydown', ev =>{
    if(ev.key === 'Escape'){
      $('#fullscreen').fadeOut(500);//or add hide()
    }
  })

  //handle click on thumnail image to show a larger version
  //BECAUSE the are no images on the page yet when we attach this handle to the query results we a need a different way of attaching the handler to images -it needs to be able to respond to any images on the page that are added at ANY time(dynamically)
  // $('#results > img').on('click', () => {
  // $(document).on('click', '#results > img', () =>{
  //     console.log('clicked!');
  // })


  $('#searchForm').on('submit', () => {
    searchQuery = $('#searchText').val();//save into a global variable(infinite scroll needs it)
    //Clear the previous result
    $('#results').empty();

    currentPage = 0;

    searchFlickr( searchQuery );
    return false; // do not actually submit the form
                  // which reloads the page
  });//form submit handler
 //attach an event handler to scroll events on the whole window
  $(window).on('scroll',() => {

   // console.log('scroll!');
   // console.log('document height:', $(document).height());
   // console.log('window height:', $(window).height());

   //have we scrolled to the bottom of the document yet?
   // console.log('scrollTop:', $(window).scrollTop(), window.pageYOffset);
   //What is the distance of the window bottom from the top of the document?
   //this will be an increasing number with a max value of document height
   const scrollBottom = $(window).scrollTop() + $(window).height();
   // console.log('scrollBottom', scrollBottom);
   //what is the distance of the window bottom form the end of the document?
   //this will be a descreasing number as we scroll down with a min value 0
   const windowBottomEnd = $(document).height() - scrollBottom
   // console.log('windowBottomEnd:', windowBottomEnd);


   if(windowBottomEnd < 100){
     //load next page of results!
     console.log('%cLoad next page!', 'font-size: 18pt');
     throttledSearchFlickr(searchQuery); //use the global variable, only changed when form submits
   }


  });//window on scroll


}); // document ready
