console.log('hello');
const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';

// create new vue class
const flickrSearchAPI = new Vue({
  // reference div vue app 'lives' inside
  el: '#app',

  // variables to parse info into vue app
  data: {
    searchText: '',
    responsePhotos: [],
    imageURLs: [],
    currentPage: 0


  }, // data

  methods: {
    searchPhoto: function (){
      this.currentPage++;
      $.getJSON(BASE_URL, {
        method: 'flickr.photos.search',
        text: this.searchText,
        api_key: API_KEY,
        format: 'json',
        nojsoncallback: 1,
        page: this.currentPage,
        // page: currentPage
      })
      .done( response => {
        this.responsePhotos = response.photos.photo;
        this.getImageURL()
      })
      .fail( console.warn );
    }, //searchPhoto

    getImageURL: function () {
      this.responsePhotos.forEach( photo => {
        let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
        // console.log(url);
        this.imageURLs.push(url)
      }) //forEach
    }, // getImageURL


    findBottom: function () {
      console.log('im scrolling');
    } // find bottom
  } // methods
}); // myApp

let scroll = () => (console.log("throttled"))

const throttleScroll = _.throttle(scroll, 2000)

$(window).on('scroll', () => {

  if (window.scrollY > (document.body.offsetHeight - window.outerHeight)) {
    
    throttleScroll()
}})
