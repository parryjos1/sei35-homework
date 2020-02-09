const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = 'a1ee70442b952efda4abbaeedb52ede2';

let currentPage = 0;
let searchQuery = '';


Vue.component('imgthumbnail', {
  props: ['src'],
  data: function(check) {
      return {
        showImage: check ? 'showImg' : ''
      }
  },
  methods: {
    clickPhoto: function() {
      let fullsizeURL = this.src;
      $('#fullscreen').css('background-image', 'url(' + fullsizeURL + ')').show();
      $('#results').empty();
      console.log(this.src);
    }
  },
  template: `
  <div>
    <img :src="src" @click="clickPhoto" :class="showImage">
  </div>
  `
});

const app = new Vue({
  el: '#app',
  data: {
    title: 'Flickr Search',
    queryInput: 'coral ocean',
    urls: []
  },
  methods: {
    test: function() {
      console.log('testtttt');
    },
    searchFlickr: function(searchText) {
      currentPage++;
      $.getJSON(BASE_URL, {
        method: 'flickr.photos.search',
        text: searchText,
        api_key: API_KEY,
        format: 'json',
        nojsoncallback: 1,
        page: currentPage
      })
      .done(this.displaySearchResults)
      .fail();
    },
    queryPhotos: function() {
      currentPage = 0;
      searchQuery = this.queryInput;
      this.searchFlickr(this.queryInput);

      return false;
    },
    displaySearchResults: function(response) {
      this.rendered = true;
      response.photos.photo.forEach(photo => {
        const url = this.generatePhotoURL(photo);
        console.log(url);
        this.urls.push(url);
      })
    },
    generatePhotoURL: function (photo, size = 'q') {
      return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
    },
    scrollLoading: function() {
      console.log('scrolling...');
      let scrollBottom = $(window).scrollTop() + $(window).height();
      let windowBottomToEnd = $(document).height() - scrollBottom;
      console.log(`bottom rest: ${windowBottomToEnd} and bottom of window elem: ${scrollBottom}`);

      if (windowBottomToEnd < 200) {
        console.log('reached bottom!');
        this.throttledScroll(searchQuery);
      }
    },
    throttledScroll: _.throttle(function(query) {
      this.searchFlickr(query)
    }, 4000)

  },
  created: function() {
    $(window).on('scroll', this.scrollLoading);
  }
});
