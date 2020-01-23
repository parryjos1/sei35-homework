console.log('Homework suxxxxxx');

const getResults = () => {};

currentPage = 0;
totalPages = 0;
searchQuery = ''; // empty search variable

var BASE_URL = 'https://www.flickr.com/services/rest/';
var API_KEY = '2f5ac274ecfac5a455f38745704ad084';

const flickrSearch = new Vue({

  // Where does this app live in the DOM
  el: '#searchImages',

  data: {
    // method: 'flickr.photos.search',
    text: searchText,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: 1
    // page: currentPage
  },

  created: function(){
      console.log('loaded!');
      $.getJSON('https://www.flickr.com/services/rest/').done( data => console.log(data))
    .fail(console.warn);
    },

  methods: {

    results: function() {
    console.log('HELLOOOOOO!!!');
  }, //

  reverseMessage: function() {
    this.message = this.message.split('').reverse().join('');

  }, // reverseMessage

  } // methods

});
