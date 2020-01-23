
const BASE_URL = "https://api.flickr.com/services/rest"
const API_KEY = "2f5ac274ecfac5a455f38745704ad084"

const myApp = new Vue({
  el: "#vue",
  data: {
    text: "",
    results: undefined
  },
  methods: {
    searchFlickr: function(){
      $.getJSON(BASE_URL, {
        method: "flickr.photos.search",
        text: myApp.text,
        api_key: API_KEY,
        format: "json",
        nojsoncallback: 1,
      })
      .done(function(result){
        myApp.results = result.photos.photo
      })
      .fail(console.warn)
    }
  },
})
