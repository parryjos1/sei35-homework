const flickrSearch = new Vue({
  el: '#display',

  data: {
    searchQuery: '',
    url: '',

  },//data


  methods: {
    created: function(){
      $.getJSON(`https://www.flickr.com/services/rest/?method=flickr.photos.search&text=${this.searchQuery}&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1`)
      .done(response =>
       console.log(response))
      .fail(console.warn);
    },//created

    // displaySearchResults:
    // function(response){
    //     console.log(response);
    // }
  },//methods
});//flickrSearch
