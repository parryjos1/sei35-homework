console.log('Vue Flickr');

const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';

let currentPage = 0;

console.log(window.innerHeight);
console.log(document.documentElement.offsetHeight);


const myApp = new Vue ({

  //link it to the DOM element
  el: '#app',


  data: {
    // message: 'Hey Vue!',
    query: '',     //this gets the search val
    showSearchQuery: false,   //set to true when search submitted
    resultsArray: [],


  },//data



  methods: {
    submit: function(searchText) {

      currentPage++;
      // console.log('this', this);
      this.resultsArray = [];

      $.getJSON(BASE_URL, {
        method: 'flickr.photos.search',
        text: searchText,
        page: currentPage,
        api_key: API_KEY,
        format: 'json',
        nojsoncallback: 1
      })
      .done( data => this.resultsArray = data.photos.photo)
      .fail( console.warn );

      this.showSearchQuery = true;

    },//submit

    generatePhotoURL: (photo, size='q') => {
      return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

    }, //generatePhotoURL

  },//methods



});  //vue app
