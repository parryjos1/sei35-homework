//   return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';
currentPage = 0;
totalPages = 0;
searchMethod = ''; // empty search method
searchQuery = ''; // empty search variable

const myApp = new Vue ({

  el: app,

  data: {

    message: 'flickr search',
    searchText: 'snub nose monkey',
    canSee: false,
    results: [],
    photoInfo: [],

  }, // end of data

  // created: {
  // }, // end of created

  methods: {

    hideLargePhoto: function () {
      this.canSee = !this.canSee
    },
    saveQuery: function () {
      searchQuery = this.searchText
    },
    searchCall: function () {
      searchQuery = this.searchText
      searchMethod = 'flickr.photos.search'
      this.searchFlickr()
      console.log(`searchQuery: `, searchQuery);
    },
    searchFlickr: function () {
      myApp.results = [];
      console.log('searching...');
      currentPage++
      $.getJSON(BASE_URL, {
        // method: 'flickr.photos.search',
        method: searchMethod,
        text: searchQuery,
        page: currentPage,
        api_key: API_KEY,
        format: 'json',
        nojsoncallback: 1,
      })
      .done(data => myApp.results = data.photos.photo)
      .fail(console.warn)
    },
    searchPhotoDetails: function () {
      photoID = event.target.id
      $.getJSON(BASE_URL, {
        method: 'flickr.photos.getInfo',
        photo_id: photoID,
        api_key: API_KEY,
        format: 'json',
        nojsoncallback: 1,
      })
      .done(data => myApp.photoInfo = data.photo)
      // .done( function (data) {
        // myApp.photoInfo = data.photo;
        // this.generateLargeImage()
      // })
      .fail(console.warn)
    },
    previousPage: function () {
      currentPage = currentPage - 2;
      this.searchFlickr();
    },
    openImage: function (event) {
      // console.log(event.target.id);
      this.searchPhotoDetails()
      this.generateLargeImage()
      console.log(url);
    },
    generateLargeImage: function () {
      console.log(`hello`);
      this.canSee = !this.canSee;
      // debugger
      url = 'https://farm' + this.photoInfo.farm + '.staticflickr.com/' + this.photoInfo.server + '/' + this.photoInfo.id + '_' + this.photoInfo.secret + '_c.jpg'
      return url
    },

  } // end of methods

}) // myApp
