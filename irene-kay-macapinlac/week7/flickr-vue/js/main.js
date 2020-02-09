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
    // currentPage++;
    // method: 'flickr.photos.search',
    text: searchText,
    api_key: API_KEY,
    format: 'json',
    image: [],
    imageURL: [],
    nojsoncallback: 1
  },

  created: function(){
      console.log('loaded!');
      $.getJSON('https://www.flickr.com/services/rest/').done( data => console.log(data))
    .fail(console.warn);
    },

  methods: {

  //   searchText: function() {
  //   console.log('HELLOOOOOO!!!');
  // }, // results

  } // methods

});
